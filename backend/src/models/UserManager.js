const crypto = require("crypto");
const nodemailer = require("nodemailer");
const hashPassword = require("../services/hashedPassword");

const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async addUser(lastname, firstname, email, hashedPassword, birthday) {
    return this.database.query(
      `INSERT INTO ${this.table} (lastname, firstname, email, hashedPassword, birthday) VALUES (?, ?, ?, ?, ?)`,
      [lastname, firstname, email, hashedPassword, birthday]
    );
  }

  async getAllUsers() {
    return this.database.query(
      `SELECT * FROM ${this.table} LEFT JOIN user_info ON user.id = user_info.user_id`
    );
  }

  async updateUser(id, updateFields) {
    const setClause = Object.keys(updateFields)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = Object.values(updateFields);
    values.push(id);
    return this.database.query(
      `UPDATE ${this.table} SET ${setClause} WHERE id = ?`,
      values
    );
  }

  updateUserOnlyPassword(id, hashedPassword) {
    return this.database.query(
      `UPDATE ${this.table} set hashedPassword = ? where id=?`,
      [hashedPassword, id]
    );
  }

  async getUserByEmail(value) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      value,
    ]);
  }

  async getUserById(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} LEFT JOIN user_info ON user.id = user_info.user_id where user.id= ?`,
      [id]
    );
  }

  async deleteUser(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

  // Methode pour réinisialiser le mot de passe

  async createPasswordResetToken(email) {
    const user = await this.getUserByEmail(email);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 heure

    await this.updateUser(user.id, {
      resetPasswordToken: token,
      resetPasswordExpires: user.resetPasswordExpires,
    });

    return token;
  }

  async sendPasswordResetEmail(user, token, req) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com DANS VARIABLE D'ENVIRONNEMENT",
        pass: "your-password DANS VARIABLE D'ENVIRONNEMENT",
      },
    });

    const mailOptions = {
      to: user.email,
      from: "your-email@gmail.com",
      subject: "Réinitialisation du mot de passe",
      text: `Vous recevez ce message parce que vous avez demandé la réinitialisation du mot de passe de votre compte.
      Veuillez cliquer sur le lien suivant, ou le coller dans votre navigateur pour compléter le processus :
      http://${req.headers.host}/reset/${token}
      Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.`,
    };

    await transporter.sendMail(mailOptions);
  }

  async getUserByResetToken(token) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE resetPasswordToken = ? AND resetPasswordExpires > ?`,
      [token, Date.now()]
    );
  }

  async resetPassword(user, newPassword) {
    const hashedPassword = await hashPassword(newPassword);
    await this.updateUser(user.id, {
      hashedPassword: hashedPassword,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    });
  }

  // METHODES A AJOUTER APRES LA CREATION DU BACKOFFICE //

  async desactivateUser(id) {
    return this.database.query(
      `UPDATE ${this.table} SET status = 'inactive' WHERE id = ?`,
      [id]
    );
  }

  async activateUser(id) {
    return this.database.query(
      `UPDATE ${this.table} SET status = 'active' WHERE id = ?`,
      [id]
    );
  }

  async setUserAdmin(userId) {
    return this.database.query(
      `UPDATE ${this.table} SET is_admin = 'admin' WHERE id = ?`,
      [userId]
    );
  }

  async setUserNotAdmin(id) {
    return this.database.query(
      `UPDATE ${this.table} SET is_admin = 'user' WHERE id = ?`,
      [id]
    );
  }

  // get total users
  async getTotalUsersCount() {
    return this.database.query(
      `SELECT COUNT(*) AS totalUsers FROM ${this.table}`
    );
  }

  // ********************************************* //
}

module.exports = UserManager;

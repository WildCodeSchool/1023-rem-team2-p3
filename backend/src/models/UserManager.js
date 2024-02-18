const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async addUser(
    lastname,
    firstname,
    email,
    hashedPassword,
    isAdmin,
    birthday,
    status
  ) {
    return this.database.query(
      `INSERT INTO ${this.table} (lastname, firstname, email, hashedPassword, is_admin, birthday, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [lastname, firstname, email, hashedPassword, isAdmin, birthday, status]
    );
  }

  async getAllUsers() {
    return this.database.query(
      `SELECT lastname, firstname, email, is_admin, birthday, status FROM ${this.table}`
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

  async getUserByEmail(value) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      value,
    ]);
  }

  async getUserById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  async deleteUser(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

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

  async setUserAdmin(id) {
    return this.database.query(
      `UPDATE ${this.table} SET is_admin = admin WHERE id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;

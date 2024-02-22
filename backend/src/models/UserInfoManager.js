const AbstractManager = require("./AbstractManager");

class UserInfoManager extends AbstractManager {
  constructor() {
    super({ table: "user_info" });
  }

  async getAllUserInfo() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async getUserInfoById(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [userId]
    );
    return rows;
  }

  async addUserInfo(userInfo) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} SET ?`,
      userInfo
    );
    return result;
  }

  async updateSpecificUserInfoById(id, updateFields) {
    // Créer une chaîne de requête SQL dynamique pour la clause SET
    const setClause = Object.keys(updateFields)
      .map((key) => `${key} = ?`)
      .join(", ");

    // Créer un tableau de valeurs basé sur les valeurs de l'objet updateFields
    const values = Object.values(updateFields);

    // Ajouter l'ID à la fin du tableau de valeurs
    values.push(id);
    try {
      // Exécuter la requête de mise à jour
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET ${setClause} WHERE id = ?`,
        values
      );

      return result;
    } catch (error) {
      throw error;
    }
  }

  // async deleteUserInfoById(userId) {
  //     const query = 'DELETE FROM ?? WHERE id = ?';
  //     const [result] = await this.database.query(query, [this.table, userId]);
  //     return result;
  // }
}

module.exports = UserInfoManager;

const AbstractManager = require("./AbstractManager");

class UserInfoManager extends AbstractManager {
  constructor() {
    super({ table: "user_info" });
  }

  async getAllUserInfo() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  async getUserInfoById(id) {
    return this.database.query(
      `SELECT avatar,taille,poids,pointure,pied_fort,poste,sexe,numero_de_telephone,adresse_postale,ville FROM ${this.table} WHERE user_id = ?`,
      [id]
    );
  }

  async addUserInfo(
    avatar,
    taille,
    poids,
    pointure,
    pied_fort,
    poste,
    sexe,
    numero_de_telephone,
    adresse_postale,
    ville,
    user_id
  ) {
    return this.database.query(
      `INSERT INTO ${this.table} (avatar, taille, poids, pointure, pied_fort, poste, sexe, numero_de_telephone, adresse_postale, ville, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        avatar,
        taille,
        poids,
        pointure,
        pied_fort,
        poste,
        sexe,
        numero_de_telephone,
        adresse_postale,
        ville,
        user_id,
      ]
    );
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
    // Exécuter la requête de mise à jour
    return this.database.query(
      `UPDATE ${this.table} SET ${setClause} WHERE user_id = ?`,
      values
    );
  }

  // async deleteUserInfoById(userId) {
  //     const query = 'DELETE FROM ?? WHERE id = ?';
  //     const [result] = await this.database.query(query, [this.table, userId]);
  //     return result;
  // }
}

module.exports = UserInfoManager;

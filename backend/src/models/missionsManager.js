const AbstractManager = require("./AbstractManager");

class missionsManager extends AbstractManager {
  constructor() {
    super({ table: "missions" });
  }

  async addMissions(mission, difficulty, poste) {
    return this.database.query(
      `INSERT INTO ${this.table} (mission, difficulty, poste) VALUES (?, ?, ?)`,
      [mission, difficulty, poste]
    );
  }

  async getAllMissions() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  async getAllMissionsByPoste(poste) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE ${this.table}.poste =? `,
      [poste]
    );
  }

  async updateMissions(id, updateFields) {
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

  // ********************************************* //
}

module.exports = missionsManager;

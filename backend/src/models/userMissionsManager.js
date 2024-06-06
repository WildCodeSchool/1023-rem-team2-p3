/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class userMissionsManager extends AbstractManager {
  constructor() {
    super({ table: "user_missions" });
  }

  async getAllUserMissions() {
    return this.database.query(
      `select user_missions.id, lastname, firstname, email, mission, difficulty, poste, user_missions.status, user_missions.user_id, user_missions.missions_id from ${this.table} join user ON user.id = user_missions.user_id join missions ON missions.id = user_missions.missions_id `
    );
  }

  async addUserMission(user_id, missions_id) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, missions_id) VALUES (?,?)`,
      [user_id, missions_id]
    );
  }

  async updateUserMissions(status, user_id, missions_id) {
    return this.database.query(
      `update ${this.table} set status = ? where user_id = ? AND missions_id = ?`,
      [status, user_id, missions_id]
    );
  }

  async getUserMissions(user_id, missions_id) {
    return this.database.query(
      `select * from ${this.table} where user_id = ? AND missions_id = ?`,
      [user_id, missions_id]
    );
  }
}

module.exports = userMissionsManager;

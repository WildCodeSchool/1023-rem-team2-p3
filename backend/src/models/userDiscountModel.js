/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class discountManager extends AbstractManager {
  constructor() {
    super({ table: "user_discount" });
  }

  async getUserDiscountAll() {
    const [get] = await this.database.query(`select * from ${this.table} `);
    return get;
  }

  async addUserDiscount({ user_id, discount_id }) {
    const [add] = await this.database.query(
      `INSERT INTO ${this.table}(user_id, discount_id) VALUES (?, ?)`,
      [user_id, discount_id]
    );
    return add;
  }

  async getControllerById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  async getIdController({ user_id, discount_id }) {
    return this.database.query(
      `SELECT id FROM ${this.table} WHERE user_id = ? and discount_id = ?`,
      [user_id, discount_id]
    );
  }
}
module.exports = discountManager;

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

  async getEventById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}
module.exports = discountManager;

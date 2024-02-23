/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class orderManager extends AbstractManager {
  constructor() {
    super({ table: "orders" });
  }

  async getOrderAll() {
    const [get] = await this.database.query(`select * from ${this.table} `);
    return get;
  }

  async addOrder({ payment_bill_number, product_id }) {
    const [add] = await this.database.query(
      `INSERT INTO ${this.table}(payment_bill_number, product_id) VALUES (?, ?)`,
      [payment_bill_number, product_id]
    );
    return add;
  }
}
module.exports = orderManager;

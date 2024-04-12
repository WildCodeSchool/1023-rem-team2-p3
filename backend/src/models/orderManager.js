/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class orderManager extends AbstractManager {
  constructor() {
    super({ table: "orders" });
  }

  async getOrderAll() {
    const [get] = await this.database.query(
      `select orders.id ,payment_bill_number ,orders.created_at , bill_number, percent_value , promo_code , firstname , lastname , email , name , img , color, payment.amount, payment.payment_method FROM ${this.table} JOIN payment ON orders.payment_bill_number = payment.bill_number LEFT JOIN product ON orders.product_id = product.id LEFT JOIN discount ON payment.discount_id = discount.id JOIN user ON payment.user_id = user.id ;`
    );
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

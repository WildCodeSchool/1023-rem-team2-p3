const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  async getAllProducts() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async getProductById(productId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [productId]
    );
    return rows;
  }

  async addProduct(productInfo) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} SET ?`,
      productInfo
    );
    return result;
  }

  async updateSpecificProductById(id, updateFields) {
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

  async deleteProductById(productId) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      productId,
    ]);
  }
}

module.exports = ProductManager;

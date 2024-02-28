const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  async getAllProducts() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async getProductById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  async addProduct(name, img, color) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, img, color) VALUES (?, ?, ?)`,
      [name, img, color]
    );
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
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      productId,
    ]);
  }
}

module.exports = ProductManager;

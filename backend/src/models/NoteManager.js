/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "note" as configuration
    super({ table: "note" });
  }

  // The C of CRUD - Create operation
  async create({
    note_physique,
    note_vitesse,
    note_passe,
    note_tir,
    note_dribble,
    note_vista,
    note_cf,
    note_plongeon,
    note_arrets,
    note_dega,
    note_pied_faible,
    note_gen,
    user_id,
  }) {
    return this.database.query(
      `insert into ${this.table} (note_physique, note_vitesse, note_passe, note_tir, note_dribble, note_vista, note_cf, note_plongeon, note_arrets, note_dega, note_pied_faible, note_gen, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        note_physique,
        note_vitesse,
        note_passe,
        note_tir,
        note_dribble,
        note_vista,
        note_cf,
        note_plongeon,
        note_arrets,
        note_dega,
        note_pied_faible,
        note_gen,
        user_id,
      ]
    );
  }
  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    return this.database.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);
    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(id, updateFields) {
    const setClause = Object.keys(updateFields)
      .map((key) => `${key} = ?`)
      .join(", ");
    // Create an array of values based on the values of the updateFields object
    const values = Object.values(updateFields);

    // Add the id at the end of the values array
    values.push(id);

    return this.database.query(
      `UPDATE ${this.table} SET ${setClause} WHERE id = ?`,
      values
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = NoteManager;

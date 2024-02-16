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
      `insert into note (note_physique, note_vitesse, note_passe, note_tir, note_dribble, note_vista, note_cf, note_plongeon, note_arrets, note_dega, note_pied_faible, note_gen, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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

  async update({
    id,
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
      `update ${this.table} set note_physique = ?, note_vitesse = ?, note_passe = ?, note_tir = ?, note_dribble = ?, note_vista = ?, note_cf = ?, note_plongeon = ?, note_arrets = ?, note_dega = ?, note_pied_faible = ?, note_gen = ?, user_id = ? where id = ?`,
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
        id,
      ]
    );
  }
}

// The D of CRUD - Delete operation
// TODO: Implement the delete operation to remove an item by its ID

// async delete(id) {
//   ...
// }

module.exports = NoteManager;

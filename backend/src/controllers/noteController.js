/* eslint-disable camelcase */
const tables = require("../tables");

const noteController = {
  addNote: async (req, res) => {
    try {
      const [result] = await tables.note.create(req.body);
      if (result.affectedRows) {
        res.json({ message: "Note added" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },
  getNote: async (req, res) => {
    try {
      const [note] = await tables.note.readAll();
      res.send(note);
    } catch (error) {
      res.sendStatus(500);
    }
  },

  getNoteById: async (req, res) => {
    try {
      const { id } = req.params;
      const [note] = await tables.note.read(id);
      res.send(note);
    } catch (error) {
      res.sendStatus(500);
    }
  },

  updateNote: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const {
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
    } = req.body;
    console.info("req.body", req.body);
    // Créer un objet pour stocker uniquement les champs à mettre à jour
    const updateFields = {};

    if (note_physique !== undefined) {
      updateFields.note_physique = note_physique;
    }
    if (note_vitesse !== undefined) {
      updateFields.note_vitesse = note_vitesse;
    }
    if (note_passe !== undefined) {
      updateFields.note_passe = note_passe;
    }
    if (note_tir !== undefined) {
      updateFields.note_tir = note_tir;
    }
    if (note_dribble !== undefined) {
      updateFields.note_dribble = note_dribble;
    }
    if (note_vista !== undefined) {
      updateFields.note_vista = note_vista;
    }
    if (note_cf !== undefined) {
      updateFields.note_cf = note_cf;
    }
    if (note_plongeon !== undefined) {
      updateFields.note_plongeon = note_plongeon;
    }
    if (note_arrets !== undefined) {
      updateFields.note_arrets = note_arrets;
    }
    if (note_dega !== undefined) {
      updateFields.note_dega = note_dega;
    }
    if (note_pied_faible !== undefined) {
      updateFields.note_pied_faible = note_pied_faible;
    }
    if (note_gen !== undefined) {
      updateFields.note_gen = note_gen;
    }
    if (user_id !== undefined) {
      updateFields.user_id = user_id;
    }
    try {
      const [result] = await tables.note.update(id, updateFields);
      if (result.affectedRows) {
        res.json({ message: "Note updated" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },
};

module.exports = noteController;

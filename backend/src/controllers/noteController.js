/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const tables = require("../tables");

const noteController = {
  // eslint-disable-next-line consistent-return
  addNote: async (req, res) => {
    try {
      const id = req.payload;
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
      const [admin] = await tables.user.getUserById(id);

      if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
        return res.status(401).json({ error: "Vous n'avez pas les droits" });
      }
      console.info("req.body", req.body);
      console.info(user_id);
      const [exist] = await tables.note.read(user_id);
      console.info(exist);
      if (exist.length === 0) {
        const [result] = await tables.note.create(req.body);

        if (result.affectedRows) {
          res.json({ message: "Note added" });
        } else {
          res.json({ message: "Error" });
        }
      } else {
        res.json({ message: "Vous avez déjà ajouter des notes à ce user" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },
  // eslint-disable-next-line consistent-return
  getNote: async (req, res) => {
    try {
      const id = req.payload;
      const [admin] = await tables.user.getUserById(id);

      if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
        return res.status(401).json({ error: "Vous n'avez pas les droits" });
      }
      const [note] = await tables.note.readAll();
      res.send(note);
    } catch (error) {
      res.sendStatus(500);
    }
  },

  getNoteById: async (req, res) => {
    try {
      const id = req.payload;
      console.info("id", id);

      const [note] = await tables.note.read(id);
      console.info(note.length);
      if (note.length > 0) {
        res.status(200).send(note);
      } else {
        res.status(400).send("Vous n'avez pas encore vos notes");
      }
    } catch (error) {
      res.sendStatus(500).json({ message: "error" });
    }
  },

  // eslint-disable-next-line consistent-return
  updateNote: async (req, res) => {
    const userId = req.payload;
    const [admin] = await tables.user.getUserById(userId);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
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

  // eslint-disable-next-line consistent-return
  deleteNote: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
      const userId = req.payload;
      const [admin] = await tables.user.getUserById(userId);

      if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
        return res.status(401).json({ error: "Vous n'avez pas les droits" });
      }
      const [result] = await tables.note.delete(id);
      if (result.affectedRows) {
        res.json({ message: "Note deleted" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },
};

module.exports = noteController;

/* eslint-disable camelcase */
const fs = require("fs");
const tables = require("../tables");

const scoreCardController = {
  // eslint-disable-next-line consistent-return
  addScoreCard: async (req, res) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const photo_user = req.file.path;
      const { note_id } = req.body;
      console.info(note_id);

      const id = req.payload;
      const [admin] = await tables.user.getUserById(id);

      if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
        fs.unlinkSync(req.file.path);
        return res.status(401).json({ error: "Vous n'avez pas les droits" });
      }
      const [exist] = await tables.score_card.read(note_id);
      console.info(exist);
      if (exist.length === 0) {
        const [result] = await tables.score_card.create(photo_user, note_id);
        if (result.affectedRows) {
          res.json({ message: "Score Card added" });
        } else {
          fs.unlinkSync(req.file.path);
          res.json({ message: "Error" });
        }
      } else {
        fs.unlinkSync(req.file.path);
        res.status(400).send("Vous avez déjà ajouter une score card");
      }
    } catch (error) {
      fs.unlinkSync(req.file.path);
      res.status(500).json({ message: error.toString() });
    }
  },
  getScoreCard: async (req, res) => {
    try {
      const [score_card] = await tables.score_card.readAll();
      res.send(score_card);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getScoreCardById: async (req, res) => {
    try {
      const id = req.payload;
      const [score_card] = await tables.score_card.read(id);
      if (score_card.length) {
        res.send(score_card);
      } else {
        res.status(400).send("Vous n'avez pas votre carte");
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },
  updateScoreCardById: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { photo_user, note_id } = req.body;
    // Créer un objet pour stocker uniquement les champs à mettre à jour
    const updateFields = {};

    if (photo_user !== undefined) {
      updateFields.photo_user = photo_user;
    }
    if (note_id !== undefined) {
      updateFields.note_id = note_id;
    }
    try {
      const [result] = await tables.score_card.update(id, updateFields);
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
  deleteScoreCard: async (req, res) => {
    const user_id = req.payload;
    const [admin] = await tables.user.getUserById(user_id);

    if (admin[0].is_admin !== "admin" && admin[0].is_admin !== "superAdmin") {
      return res.status(401).json({ error: "Vous n'avez pas les droits" });
    }
    const id = parseInt(req.params.id, 10);
    try {
      const [result] = await tables.score_card.delete(id);
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

module.exports = scoreCardController;

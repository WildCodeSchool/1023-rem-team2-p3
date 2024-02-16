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
    try {
      const [result] = await tables.note.update(req.body);
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

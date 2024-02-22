/* eslint-disable camelcase */
const tables = require("../tables");

const privilegeController = {
  addPrivilege: async (req, res) => {
    try {
      const privilege = req.body;
      const [result] = await tables.privilege.create(privilege);
      if (result.affectedRows) {
        res.json({ message: "privilege added" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },

  getPrivilege: async (req, res) => {
    try {
      const [privilege] = await tables.privilege.readAll();
      res.send(privilege);
    } catch (error) {
      res.sendStatus(500);
    }
  },

  getPrivilegeById: async (req, res) => {
    try {
      const { id } = req.params;
      const [privilege] = await tables.privilege.read(id);
      res.send(privilege);
    } catch (error) {
      res.sendStatus(500);
    }
  },

  updatePrivilege: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, price, product_id, user_id } = req.body;
    // Créer un objet pour stocker uniquement les champs à mettre à jour
    const updateFields = {};

    if (name !== undefined) {
      updateFields.name = name;
    }
    if (price !== undefined) {
      updateFields.price = price;
    }
    if (product_id !== undefined) {
      updateFields.product_id = product_id;
    }
    if (user_id !== undefined) {
      updateFields.user_id = user_id;
    }
    try {
      const [result] = await tables.privilege.update(id, updateFields);
      if (result.affectedRows) {
        res.json({ message: "Privilege updated" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  },

  deletePrivilege: async (req, res) => {
    try {
      const { id } = req.params;
      const [result] = await tables.privilege.delete(id);
      if (result.affectedRows) {
        res.json({ message: "Privilege deleted" });
      } else {
        res.json({ message: "Error" });
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = privilegeController;

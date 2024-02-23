const fs = require("fs");
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const products = await tables.product.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await tables.product.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { name, color } = req.body;

  const img = req.file.path;

  const updateFields = {};
  if (name !== undefined) {
    updateFields.name = name;
  }
  if (img !== undefined) {
    updateFields.img = img;
  }
  if (color !== undefined) {
    updateFields.color = color;
  }

  try {
    const [result] = await tables.product.updateSpecificProductById(
      id,
      updateFields
    );
    if (result.affectedRows) {
      res.status(201).send("created");
    } else {
      fs.unlinkSync(req.file.path);
      res.status(401).send("erreur lors de l'enregistrement");
    }
  } catch (error) {
    fs.unlinkSync(req.file.path);

    res.status(500).send(error);
  }
};

const add = async (req, res, next) => {
  try {
    const product = req.body;

    if (req.file) {
      product.img = req.file.path;
    }

    const result = await tables.product.addProduct(product);

    if (result.affectedRows) {
      res.json({ message: "Product added !" });
    } else {
      res.json({ message: "Error !" });
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await tables.product.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await tables.product.deleteProductById(productId);

    // Supprimer le fichier image associé s'il existe
    if (product.img) {
      fs.unlinkSync(product.img);
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  remove,
};

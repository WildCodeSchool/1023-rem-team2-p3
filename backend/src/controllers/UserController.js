/* eslint-disable consistent-return */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const getAllUsers = async (req, res) => {
  try {
    const [users] = await tables.user.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({ error: "Email and password are required" });
    } else {
      const [user] = await tables.user.getUserByEmail(email);
      if (user.length) {
        const isMatch = await argon2.verify(user[0].hashedPassword, password);
        if (typeof isMatch === "boolean" && isMatch) {
          const token = jwt.sign(
            { payload: user[0].id },
            process.env.SECRET_KEY_JWT,
            { expiresIn: "0,5h" }
          );
          res.status(200).send(token);
        } else {
          res.status(401).send("verifier vos informations");
        }
      } else {
        res.status(401).send("l'adresse mail n'existe pas");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.payload;
    const [user] = await tables.user.getUserById(userId);
    if (user.length) {
      delete user[0].hashedPassword;
      res.status(200).json({
        message: `Welcome To THE LAB ${user[0].firstname} !`,
      });
    } else {
      res.status(404).send({ error: "User Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const {
      lastname,
      firstname,
      email,
      hashedPassword,
      isAdmin,
      birthday,
      status,
    } = req.body;
    const [results] = await tables.user.addUser(
      lastname,
      firstname,
      email,
      hashedPassword,
      isAdmin,
      birthday,
      status
    );
    if (!results.affectedRows) {
      res.send("User not added");
    } else {
      res.send("User added");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const id = req.payload;
  const {
    lastname,
    firstname,
    // email,
    hashedPassword,
    // isAdmin,
    birthday,
    // status,
  } = req.body;

  const updateFields = {};

  if (lastname !== undefined) {
    updateFields.lastname = lastname;
  }
  if (firstname !== undefined) {
    updateFields.firstname = firstname;
  }
  //   if (email !== undefined) {
  //     updateFields.email = email;
  //   }
  if (hashedPassword !== undefined) {
    updateFields.hashedPassword = hashedPassword;
  }
  // if (isAdmin !== undefined) {
  //   updateFields.isAdmin = isAdmin;
  // }
  if (birthday !== undefined) {
    updateFields.birthday = birthday;
  }
  // if (status !== undefined) {
  //   updateFields.status = status;
  // }

  try {
    const [user] = await tables.user.updateUser(id, updateFields);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.payload;
    const [user] = await tables.user.deleteUser(id);
    if (user.affectedRows) {
      res.status(200).json({
        message: "La suppression de l'utilisateur a été effectuée avec succès",
      });
    } else {
      res.status(401).send("Problème lors de la suppression de l'utilisateur");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const id = req.payload;
    const token = jwt.sign({ payload: id }, process.env.SECRET_KEY_JWT, {
      expiresIn: "0h",
    });

    res.status(200).send(token);
  } catch (error) {
    res.status(500).send(error);
  }
};

// methode pour réinisialiser le mot de passe
const createPasswordResetToken = async (req, res) => {
  try {
    const { email } = req.body;
    const token = await tables.user.createPasswordResetToken(email);
    await tables.user.sendPasswordResetEmail(email, token, req);
    res.status(200).json({ message: "Email de réinitialisation envoyé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const [user] = await tables.user.getUserByResetToken(token);
    if (!user.length) {
      return res.status(404).json({ error: "Token invalide ou expiré" });
    }

    await tables.user.resetPassword(user[0], newPassword);
    res.status(200).json({ message: "Mot de passe réinitialisé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  getUserByEmail,
  getUserById,
  deleteUser,
  logout,
  createPasswordResetToken,
  resetPassword,
};

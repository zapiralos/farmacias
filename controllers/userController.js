const { User } = require('../database/sequelize');

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Hubo un error al obtener los usuarios' });
  }
}

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Hubo un error al crear el usuario' });
  }
}

// Obtener un usuario por id
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'El usuario no existe' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Hubo un error al obtener el usuario' });
  }
}

// Actualizar un usuario existente
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { id } });
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'El usuario no existe' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Hubo un error al actualizar el usuario' });
  }
}

// Eliminar un usuario existente
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    if (user) {
      await user.destroy();
      res.json({ message: 'El usuario ha sido eliminado' });
    } else {
      res.status(404).json({ message: 'El usuario no existe' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Hubo un error al eliminar el usuario' });
  }
}

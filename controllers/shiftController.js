const { Shift } = require('../database/sequelize');

// Obtener todos los turnos
exports.getShifts = async (req, res) => {
  try {
    const shifts = await Shift.findAll();
    res.json(shifts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Obtener un turno por id
exports.getShiftById = async (req, res) => {
  const { id } = req.params;
  try {
    const shift = await Shift.findByPk(id);
    if (!shift) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }
    res.json(shift);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Crear un turno
exports.createShift = async (req, res) => {
  const { pharmacyId, userId, shiftDate, shiftStart, shiftEnd } = req.body;
  try {
    const newShift = await Shift.create({
      pharmacyId,
      userId,
      shiftDate,
      shiftStart,
      shiftEnd
    });
    res.status(201).json(newShift);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Actualizar un turno
exports.updateShift = async (req, res) => {
  const { id } = req.params;
  const { pharmacyId, userId, shiftDate, shiftStart, shiftEnd } = req.body;
  try {
    const shift = await Shift.findByPk(id);
    if (!shift) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }
    shift.pharmacyId = pharmacyId;
    shift.userId = userId;
    shift.shiftDate = shiftDate;
    shift.shiftStart = shiftStart;
    shift.shiftEnd = shiftEnd;
    await shift.save();
    res.json(shift);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Eliminar un turno
exports.deleteShift = async (req, res) => {
  const { id } = req.params;
  try {
    const shift = await Shift.findByPk(id);
    if (!shift) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }
    await shift.destroy();
    res.json({ message: 'Turno eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

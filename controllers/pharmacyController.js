const { Pharmacy } = require('../database/sequelize');

const pharmacyController = {
  // Lista todas las farmacias
  async getAll(req, res) {
    try {
      const pharmacies = await Pharmacy.findAll();
      return res.json(pharmacies);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error al obtener las farmacias.' });
    }
  },

  // Crea una nueva farmacia
  async create(req, res) {
    try {
      const { name, address, phone } = req.body;
      const newPharmacy = await Pharmacy.create({ name, address, phone });
      return res.status(201).json(newPharmacy);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error al crear la farmacia.' });
    }
  },

  // Obtiene una farmacia por su ID
  async getById(req, res) {
    try {
      const pharmacy = await Pharmacy.findByPk(req.params.id);
      if (!pharmacy) {
        return res.status(404).json({ message: 'Farmacia no encontrada.' });
      }
      return res.json(pharmacy);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error al obtener la farmacia.' });
    }
  },

  // Actualiza una farmacia existente
  async update(req, res) {
    try {
      const pharmacy = await Pharmacy.findByPk(req.params.id);
      if (!pharmacy) {
        return res.status(404).json({ message: 'Farmacia no encontrada.' });
      }
      const { name, address, phone } = req.body;
      const updatedPharmacy = await pharmacy.update({ name, address, phone });
      return res.json(updatedPharmacy);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error al actualizar la farmacia.' });
    }
  },

  // Elimina una farmacia existente
  async delete(req, res) {
    try {
      const pharmacy = await Pharmacy.findByPk(req.params.id);
      if (!pharmacy) {
        return res.status(404).json({ message: 'Farmacia no encontrada.' });
      }
      await pharmacy.destroy();
      return res.json({ message: 'Farmacia eliminada correctamente.' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error al eliminar la farmacia.' });
    }
  }
};

module.exports = pharmacyController;

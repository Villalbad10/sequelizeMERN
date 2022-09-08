import { Address } from "../models/Address.js";

export async function createAddress(req, res) {
  try {
    const { street, city, projectId, postal, country } = req.body;
    const newAddress = await Address.create({
      projectId,
      street,
      city,
      postal,
      country,
    });
    res.json(newAddress);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getAddresss(req, res) {
  try {
    const tasks = await Address.findAll({
      attributes: ["street", "projectId", "city", "postal", "country"],
      order: [["id", "DESC"]],
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateAddress(req, res) {
  const { id } = req.params;
  try {
    const address = await Address.findOne({
      attributes: ["street", "projectId", "city", "postal", "country"],
      where: { id },
    });

    address.set(req.body);

    await address.save();

    res.json(address);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteAddress(req, res) {
  const { id } = req.params;
  try {
    await Address.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

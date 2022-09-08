import { Address } from "../models/Address.js";
import { Person } from "../models/Person.js";

export async function getPersons(req, res) {
  try {
    const projects = await Person.findAll({
      atributes: ["id", "name", "phone", "email"],
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createPerson(req, res) {
  const { name, phone, email } = req.body;
  try {
    const newPerson = await Person.create({
      name,
      phone,
      email,
    });
    return res.json(newPerson);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email } = req.body;

    const person = await Person.findByPk(id);
    person.name = name;
    person.phone = phone;
    person.email = email;
    await person.save();

    res.json(person);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deletePerson(req, res) {
  const { id } = req.params;
  try {
    await Address.destroy({
      where: {
        personId: id,
      },
    });
    await Person.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

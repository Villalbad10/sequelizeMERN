import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Address } from "./Address.js";

export const Person = sequelize.define(
  "person",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Person.hasMany(Address, {
  foreinkey: "personId",
  sourceKey: "id",
});
Address.belongsTo(Person, { foreinkey: "personId", targetId: "id" });

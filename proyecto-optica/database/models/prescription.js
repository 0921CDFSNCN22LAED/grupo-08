modelue.exports = (sequelize, dataTypes) => {
  const alias = "Prescriptions";
  const cols = {
    id: {
      type: dataTypes.BIGINIT(100),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.BOLEEAN,
      allowNull: true,
    },
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Prescriptions = sequelize.define(alias, cols, config);
  return Prescriptions;
};

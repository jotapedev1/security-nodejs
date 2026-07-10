'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roles.belongsToMany(models.user, {
        through: models.user_role,
        as: 'roles_user',
        foreignKey: 'role_id'
      });
      roles.belongsToMany(models.permission, {
        through: models.role_permissions,
        as: 'roles_permissions',
        foreignKey: 'role_id'
      });
    }
  }
  roles.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      permissions.belongsToMany(models.user, {
        through: models.user_permissions,
        as: 'permissions_user',
        foreignKey: 'permission_id'
      });
      permissions.belongsToMany(models.role, {
        through: models.role_permissions,
        as: 'permissions_role',
        foreignKey: 'permission_id'
      });
    }
  }
  permissions.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'permissions',
  });
  return permissions;
};
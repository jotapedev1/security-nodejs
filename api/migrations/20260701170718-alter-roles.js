'use strict';
module.exports = {
  async up (queryInterface) {
    await queryInterface.renameColumn('roles', 'nome', 'name');
    await queryInterface.renameColumn('roles', 'descricao', 'description');
  },
  async down (queryInterface) {
    await queryInterface.renameColumn('roles', 'name', 'nome');
    await queryInterface.renameColumn('roles', 'description', 'descricao');
  }
};
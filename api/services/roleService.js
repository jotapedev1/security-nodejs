const database = require('../models')
const uuid = require('uuid')
class RoleService{
    async register(dto){
        const role = await database.roles.findOne({
            where:{
                name: dto.name
            }
        })
        if (role){
            throw new Error ("Role already registered")
        }
        try{
            const newRole = await database.roles.create({
                id: uuid.v4(),
                name: dto.name,
                description: dto.description
            })
            return newRole
        }catch(error){
            throw new Error('Error registering the role')
        }
    }
    async getAll() {
    return database.roles.findAll();
    }
    async getById(id) {
        const role = await database.roles.findOne({ where: { id } });
        if (!role) throw new Error('Role not found');
        return role;
    }
    async update(id, dto) {
        const role = await database.roles.findOne({ where: { id } });
        if (!role) throw new Error('Role not found');
        role.name = dto.name;
        role.description = dto.description;
        await role.save();
        return role;
    }
    async delete(id) {
        const role = await database.roles.findOne({ where: { id } });
        if (!role) throw new Error('Role not found');
        await database.roles.destroy({ where: { id } });
    }
}
module.exports = RoleService

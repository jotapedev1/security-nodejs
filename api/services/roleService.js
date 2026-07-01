const database = require('../models')
const uuid = require('uuid')
class RoleService{
    async register(dto){
        const role = database.role.findOne({
            where:{
                name: dto.name
            }
        })
        if (role){
            throw new Error ("Role already registered")
        }
        try{
            const newRole = database.roles.create({
                id: uuid.v4(),
                name: dto.name,
                description: dto.description
            })
        }catch(error){
            throw new Error('Error registering the role')
        }
    }
}
module.exports = RoleService

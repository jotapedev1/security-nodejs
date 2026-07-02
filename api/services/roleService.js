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
}
module.exports = RoleService

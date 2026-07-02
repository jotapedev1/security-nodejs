const database = require('../models')
const uuid = require('uuid')


class PermissionService{
    async register(dto){
        const permission = await database.permissions.findOne({
            where:{
                name: dto.name
            }
        })
        if (permission){
            throw new Error ("permission already registered")
        }
        try{
            const newPermission = await database.permissions.create({
                id: uuid.v4(),
                name: dto.name,
                description: dto.description
            })
            return newPermission
        }catch(error){
            throw new Error('Error registering the permission')
        }
    }
}
module.exports = PermissionService;
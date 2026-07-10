const RoleService = require('../services/roleService')
const roleService = new RoleService()

class RoleController{
    static async register(req, res){
        const { name, description } = req.body
        try{
            const role = await roleService.register({ name, description })
            res.status(201).send(role)
        }catch(error){
            res.status(400).send({ message: error.message })
        }
    }
    static async getAll(req, res){
        const roles = await roleService.getAll()
        res.status(200).json(roles)
    }
    static async getById(req, res){
        try{
            const role = await roleService.getById(req.params.id)
            res.status(200).json(role)
        }catch(error){
            res.status(404).send({ message: error.message })
        }
    }
    static async update(req, res){
        try{
            const role = await roleService.update(req.params.id, req.body)
            res.status(200).json(role)
        }catch(error){
            res.status(400).send({ message: error.message })
        }
    }
    static async delete(req, res){
        try{
            await roleService.delete(req.params.id)
            res.status(200).send({ message: 'Role deleted successfully' })
        }catch(error){
            res.status(404).send({ message: error.message })
        }
    }
}
module.exports = RoleController
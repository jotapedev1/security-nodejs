const RoleService = require('../services/roleService')
const roleService = new RoleService()

class RoleController{
    static async register(req, res){
        const { name, description } = req.body

        try{
            const role = roleService.register({ name, description })
            res.status(201).send(role)
        }catch(error){
            res.status(400).send(error.message)
        }
    }
}
module.exports = RoleController
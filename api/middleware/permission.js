const database = require('../models')

module.exports = (requiredPermissions) => {
    return async (req, res, next) => {
        try {
            const user = await database.user.findOne({
                where: { id: req.userId },
                include: [
                    {
                        model: database.permissions,
                        as: 'user_permission'
                    },
                    {
                        model: database.roles,
                        as: 'user_roles',
                        include: [
                            {
                                model: database.permissions,
                                as: 'roles_permissions'
                            }
                        ]
                    }
                ]
            })

            if (!user) {
                return res.status(401).send({ message: 'User not found' })
            }

            const directPermissions = (user.user_permission || []).map(p => p.name)
            const rolePermissions = (user.user_roles || [])
                .flatMap(role => (role.roles_permissions || []).map(p => p.name))

            const userPermissions = [...new Set([...directPermissions, ...rolePermissions])]

            const hasPermission = requiredPermissions.some(permission => userPermissions.includes(permission))

            if (!hasPermission) {
                return res.status(403).send({ message: 'Access denied: insufficient permissions' })
            }

            return next()
        } catch (error) {
            return res.status(500).send({ message: error.message })
        }
    }
}
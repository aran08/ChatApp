const UserAuthservice = require ('../../services/user/userauth');

const userAuthservice = new UserAuthservice();

const create = async (req, res) => {
    try {
        const response = await userAuthservice.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success : true,
            message : 'Successfully Create a new user',
            data : response,
            error : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'something went wrong inside user controller',
            data : {},
            success : false,
            err : error
        });
    }
}

module.exports = {
    create
}
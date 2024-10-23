const AdminAuthService = require("../../services/admin/adminauth");
// const { create } = require("../user/userauth");

const adminAuthservice = new AdminAuthService();

  const create = async (req, res) => {
    try {
      const response = await adminAuthservice.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      });
      return res.status(201).json({
        success: true,
        message: "Successfully Create a new Admin",
        data: response,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Something wrong at the Admin auth controller",
        data: {},
        success: false,
        err: error,
      });
    }
  };

module.exports = {
    create
}



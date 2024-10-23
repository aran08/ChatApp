const { where } = require("sequelize");
const { Usermodel } = require("../../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await Usermodel.create(data);
      return user;
    } catch (error) {
      console.log("something wrong in repository layer of register");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await Usermodel.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something wrong in repository layer of destroyr");
      throw error;
    }
  }
 
  async getById(userId) {
    try {
      const user = await Usermodel.findByPk(userId, {
        attributes : ['email','id', 'name']
      });
      return user;
    } catch (error) {
      console.log("something wrong in repository layer of getuser");
      throw error;
    }
  }
}

module.exports = UserRepository;

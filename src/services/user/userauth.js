const jwt = require("jsonwebtoken");

const UserRepository = require("../../repository/user/Authrepository");
const { JWT_KEY } = require("../../config/serverConfig");

class UserAuthservice {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something wrong at service layer of user auth");
      throw error;
    }
  }

  createTocken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: '1d' });
      return result;
    } catch (error) {
      console.log("Something went wrong in tocken creation");
      throw error;
    }
  }

  verifytocken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in tocken Verification", error);
      throw error;
    }
  }
}

module.exports = UserAuthservice;

const UserRepository = require("../../repository/user/Authrepository");

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
}

module.exports = UserAuthservice;

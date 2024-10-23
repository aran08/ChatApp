const { Admin } = require('../../models/index');

class AdminAuthRepository  {
     async create(data) {
         try {
            const admin = await Admin.create(data);
            return admin;
         } catch (error) {
            console.log("Sommething wrong at the repository level of Admin");
            throw error;
         }
     }
}

module.exports = AdminAuthRepository;
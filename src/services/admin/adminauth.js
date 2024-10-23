const AdminAuthRepository = require('../../repository/admin/Authrepository');

class AdminAuthService {
     constructor() {
        this.adminauthRepository = new AdminAuthRepository();
     }

     async create(data) {
        try {
            const admin = await this.adminauthRepository.create(data);
            return admin;
        } catch (error) {
            console.log("Something Wrong at the Service layer of Admin");
            throw error;
        }
     }
}

module.exports = AdminAuthService;
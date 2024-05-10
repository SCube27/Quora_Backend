class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData) {
        try {
            const newUser = await this.userRepository.createUser(userData);
            return newUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUser(userId) {
        try {
            const findUser = await this.userRepository.getUser(userId);
            return findUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateUser(userId, updateData) {
        try {
            const updatedUser = await this.userRepository.updateUser(userId, updateData);
            return updatedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserService;
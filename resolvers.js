const User = require('./model/userSchema');

const resolvers = {
    Query: {
        getUser: async (_, { id }) => await User.findById(id),
        getUsers: async () => await User.find(),
        searchUsers: async (_, { name }) => await User.find({ name: new RegExp(name, 'i') }),
    },
    Mutation: {
        createUser: async (_, { input }) => {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new Error('Enter all the fields');
                }
                const newUser = new User({ name, email, password });
                return await newUser.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        updateUser: async (_, { id, input }) => await User.findByIdAndUpdate(id, input, { new: true }),
        deleteUser: async (_, { id }) => await User.findByIdAndRemove(id),
        changePass: async (_, { id, password }) => {
            try {
                const newUser = await User.findByIdAndUpdate(id, { password }, { new: true });
                if (!newUser) {
                    throw new Error('User not found');
                }
                return newUser;
            } catch (err) {
                throw new Error(err);
            }
        },
    },
    User: {
        email: (parent) => parent.email || '',
        name: (parent) => parent.name || '',
        password: (parent) => parent.password || '',
    },
};

module.exports = resolvers;

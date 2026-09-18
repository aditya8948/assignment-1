const getAllUsers = (req, res) => {
    res.send("Fetching all users");
};

const createUser = (req, res) => {
    res.send("Adding a new user");
};

const getUserById = (req, res) => {
    res.send(`Fetching user with ID: ${req.params.id}`);
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById
};

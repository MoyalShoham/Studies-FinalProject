const getUsers = async (req, res) => {
   return res.status(200).json({ message: 'Hello World!' });
}

module.exports = {
    getUsers
}
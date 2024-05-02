const getUsers = async (req, res) => {
   return res.status(200).json({ message: 'Hello World!' });
}

const uploadFile = async (req, res) => {
    console.log(req.body);
    return res.status(200).json({ message: 'Hello World!' });
}

module.exports = {
    getUsers,
    uploadFile
    
}
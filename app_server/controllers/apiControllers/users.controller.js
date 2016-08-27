const getAll = (req, res) => {
    res.send('GET user');
};

const getById = (req, res) => {
    res.send('GET user by id: ' + req.params.id);
};

const post = (req, res) => {
    res.send('POST user : ' + req.params.id);
};

const put = (req, res) => {
    res.send('PUT user: ' + req.params.id);
};

const deleteUser = (req, res) => {
    res.send('DELETE user: ' + req.params.id);
};

module.exports = {
    getAll: getAll,
    getById: getById,
    post: post,
    put: put,
    delete: deleteUser
};
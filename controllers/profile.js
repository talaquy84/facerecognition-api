
const handleProfile = (req, res) => {
    const { id } = req.params;
    db.where({
        id: id
    }).select('*').from('users')
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(400).json('Not found')
            }
        })
        .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
    handleProfile
};
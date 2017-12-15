


// COMP 70K
module.exports = {
    getUser: (req, res) => {
        const db = req.app.get('db');
        // COMP 76D
        db.get_user([req.params.user_id])
            .then(result => res.status(200).send(result))
    }, 

    createUser: (req, res) => {
        const db = req.app.get('db');
        db.create_user([req.body.username, req.body.password])
            .then(result => res.status(200).send(result))
    }, 
    
    // COMP 76E
    updateUser: (req, res) => {
        const db = req.app.get('db');
        db.update_user([req.query.user_id])
            .then(result => res.status(200).send(result))
    }, 

    deleteUser: (req, res) => {
        const db = req.app.get('db');
        db.delete_user([req.params.user_id])
            .then(result => res.status(200).send(result))
    }, 
}
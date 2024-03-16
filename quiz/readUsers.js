const express = require('express')
const router = express.Router();

router.get("/usernames", (req, res) => {
    let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
    });
    res.send(usernames);
})

router.get("/username/:name", (req, res) => {
    let userName = req.params.name;
    if (!userName) {
        return res.status(500).send({ error: "Username cannot be empty" });
    }
    let userFound = req.users.filter((user) => {
        return user.username === userName;
    })
    if (userFound.length != 0) {
        return res.status(200).send(userFound);
    } else {
        return res.status(200).send({ error: "User not found" });
    }
})

module.exports = router;

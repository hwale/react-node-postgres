const db = require('../db');

module.exports = {
    create: async (req, res) => {
        console.log(req.body);
        const { first_name, last_name, username, email, password } = req.body;
        const text = `INSERT INTO
            users(first_name, last_name, username, email, password)
            VALUES($1, $2, $3, $4, $5)
            RETURNING id`;
        const params = [
            first_name,
            last_name,
            username,
            email,
            password
        ]
        try {
            const { rows } = await db.query(text, params);
            return res.status(201).send(rows[0]);
        } catch(error) {
            return res.status(400).send(error);
        }
    }
}
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    async create(request, response) {
        const { name, email, city, uf, whatsapp, facebook, instagram, site } = request.body;
        const id = crypto.pseudoRandomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            city,
            uf,
            whatsapp,
            facebook,
            instagram,
            site,
        })

        return response.json({ id });
    }
}
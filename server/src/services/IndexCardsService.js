import { conn } from "../dataBase/connection.js";

class IndexCards {
    async index(card) {
        const resultCard = await conn("Cards").select();
        return resultCard;
    }
};

export { IndexCards };
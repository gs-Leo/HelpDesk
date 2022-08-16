import { conn } from "../dataBase/connection.js";

class SelectCardsUser {
    async index(solicitante) {
        const resultCard = await conn("Cards").select("*").where({ solicitante });
        return resultCard;
    }
};

export { SelectCardsUser };
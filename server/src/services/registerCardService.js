import { randomUUID } from "crypto";
import { response } from "express";
import { conn } from "../dataBase/connection.js";

class InsertCard {

    async insert(card) {
        card.id = randomUUID()
        card.status = true;
        card.dataAbertura = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        const resultCard = await conn("Cards").insert(card);

        return resultCard;

    }
}

export { InsertCard };
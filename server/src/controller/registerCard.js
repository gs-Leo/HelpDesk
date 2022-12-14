import express from "express";
import { InsertCard } from "../services/registerCardService.js"

class RegisterCard {

    async execute(request, response) {

        const {
            solicitante,
            categoria,
            descricao
        } = request.body;

        if (!solicitante) {
            return response.status(400).json({ erro: "Erro! Insira o nome do solicitante" })
        }
        if (!categoria) {
            return response.status(400).json({ erro: "Erro! Insira a categoria do Card" })
        }
        if (!descricao) {
            return response.status(400).json({ erro: "Erro! Insira uma descrição" })
        }


        try {
            const newCard = await new InsertCard().insert({
                solicitante,
                categoria,
                descricao
            });
            return response.status(201).json(newCard);
        } catch (error) {
            return response.status(400).json(error.message);
        }


    }
}
export { RegisterCard }; 

import express from "express";
import { SelectCardsUser, SelectCardsCategoria} from "../services/SearchCardsService.js";


class SearchCardsUser {

    async execute(request, response) {
        try {
            const {user} = request.query;

            const selectCard = await new SelectCardsUser().index(user);            
            
            selectCard.length <1 ? response.status(200).json({error: "Não existe cards desse usuário"}) :
            response.status(200).json(selectCard);
            
            return;

        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
};

export { SearchCardsUser };


class SearchCardsCategoria {

    async execute(request, response) {
        try {
            const {categoria} = request.query;

            const selectCard = await new SelectCardsCategoria().index(categoria);            
            
            selectCard.length <1 ? response.status(200).json({error: "Não existe card com esta Categoria"}) :
            response.status(200).json(selectCard);
            
            return;

        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
};

export { SearchCardsCategoria };



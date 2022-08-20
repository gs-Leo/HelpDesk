import { Router } from "express";
import { ConsultaCards } from "./controller/IndexCards.js";
import { RegisterCard } from "./controller/registerCard.js";
import { RegisterUser } from "./controller/registerUser.js";
import { SearchCardsUser, SearchCardsCategoria } from "./controller/SearchCards.js";
import {Login} from "./controller/Login.js";

const Routes = Router();

Routes.post("/RegisterUsers", 
    new RegisterUser().execute
);
Routes.post("/RegisterCards",
    new RegisterCard().execute
);

Routes.get("/GetCards", 
    new ConsultaCards().execute
);
Routes.get("/GetCardsUser", 
    new SearchCardsUser().execute
);

Routes.get("/GetCardsCategoria", 
    new SearchCardsCategoria().execute
);

Routes.post("/PostLogin", 
    new Login().execute
);

export {Routes};
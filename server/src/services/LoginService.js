import { conn } from "../dataBase/connection.js";

class LoginService {
    async index(login, senha) {

        const resultUser = await conn("Users").select("*").where({ login, senha });
            
        //const resultSenha = await conn("Users").select(resultUser).where({ senha });       
        
        return resultUser;
    }
}

export { LoginService };
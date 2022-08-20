import { LoginService } from '../services/LoginService.js';

class Login {

    async execute(request, response) {
        try {

            const { 
                login,
                senha 
            } = request.body;

            const selectUser = await new LoginService().index(login, senha);

            if (!login) {
                return response.status(400).json({ erro: "Insira o Login ou Senha" })
            } else if (!senha){
                return response.status(400).json({erro:"Insira uma senha"})
            }
            
            selectUser.length < 1 ? response.status(200).json({ error: "Usuário Inexistente" }) :                
            response.status(200).json(selectUser);

            return;

        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}
export { Login };
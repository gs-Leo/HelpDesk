import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import api from "../services/api";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigation = useNavigate();
  const [login, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  async function logon(e) {
    e.preventDefault();
    const dados = { login, senha };

    try {
      const resposta = await api.post('PostLogin', dados)

      if (resposta.status === 200) {
        sessionStorage.setItem('nome', resposta.data.nome)
        sessionStorage.setItem('email', resposta.data.email)
        sessionStorage.setItem('login', resposta.data.login)
        sessionStorage.setItem('departamento', resposta.data.dep)
        alert(`Bem Vindo - ${resposta.data.login}`)
        if (resposta.data.dep !== "TI") {
          navigation.push('/Home')
        } else {
          navigation.push('/Home')
        }
      }

    } catch (error) {
      alert(`Erro ao efetuar login - Verifique o usuário e/ou senha!`)
    }
  }

  return (
    <main>
      <div className="container-fluid">

        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <span className="d-none d-lg-block"> HelpDesk Management</span>
                  </a>
                </div>

                <div className="card mb-3">

                  <div className="card-body">

                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>

                    <form className="row g-3 needs-validation" onSubmit={logon}>

                      <div className="col-12">
                        <label for="yourUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <input type="text" name="username" className="form-control" id="yourUsername" value={login}
                            onChange={e => setUsuario(e.target.value)} />
                          <div className="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" value={senha}
                          onChange={e => setSenha(e.target.value)} />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                          <label className="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit" >Login</button>
                      </div>
                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

      </div>
    </main>

  )
}
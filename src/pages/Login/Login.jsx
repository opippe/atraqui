import './Login.scss'
import foto from '../../assets/panorama-itaqui.jpg' 
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    /* MAPEAR O CONTEÚDO DAS CAIXAS DE TEXTO */
    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };
    
    /* FUNÇÕES ATIVADAS AO CLICAR NO BOTÃO OU APERTAR ENTER */
    const handleClick = event => {
        if (username == 'admin' && password == 'admin') {
            navigate("/atraqui");
        }
    };
    const handleKeyDown = e => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    return (
        <section id='login-around'>
            <section id="login-container">
                <section className="left">
                    <div className="logo">ATRAQUI</div>
                    <div className='inputs'>
                        <i className="fa-solid fa-circle-user"></i>
                        <input 
                            type="text" 
                            name="user" 
                            id="user"
                            placeholder="Usuário ou Email"
                            value={username}
                            onChange={handleUsernameChange}
                            onKeyPress={handleKeyDown}
                            autoComplete="off"
                        />
                        <input
                            type="password" 
                            name="password"
                            id="password"
                            placeholder="Senha"
                            value={password}
                            onChange={handlePasswordChange}
                            onKeyPress={handleKeyDown}
                            autoComplete="off"
                        />
                        <button className="login-button" onClick={handleClick}>Entrar</button>
                    </div>
                </section>
                <section className="right">
                    <div className='image-overlay'>
                        <img src={logo}></img>
                    </div>
                    <div className='darker'></div>
                    <img src={foto} alt="" />
                </section>
            </section>
        </section>
    )
}

export default Login;
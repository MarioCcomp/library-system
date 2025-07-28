import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [registerScreen, setRegisterScreen] = useState(false);

  const toggleRegisterScreen = () => {
    setRegisterScreen(!registerScreen);
  };

  return (
    <div id='mainLogin'>
      <div className="overlay"></div> {}
      {!registerScreen && (
        <div className="blockLogin">
          <div className="header">
            <h2>Faça seu Login</h2>
          </div>
          <form>
            <input type="text" placeholder='Digite seu nome de usuario' />
            <input type="text" placeholder='Digite sua senha' />
            <input type="submit" value='Entrar' />
          </form>
          <p>
            Não possui uma conta?{' '}
            <span onClick={toggleRegisterScreen}>Registre-se</span>
          </p>
        </div>
      )}

      {registerScreen && (
        <div className="blockLogin">
          <div className="header">
            <h2>Faça seu Registro</h2>
          </div>
          <form>
            <input type="text" placeholder='Digite seu email' />
            <input type="text" placeholder='Digite seu usuario' />
            <input type="text" placeholder='Digite sua senha' />
            <input type="submit" value='Registrar' />
          </form>
          <p>
            Já possui uma conta?{' '}
            <span onClick={toggleRegisterScreen}>Faça login</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
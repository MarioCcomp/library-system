import { useState } from 'react';
import './Login.css';
import UserScreen from './UserScreen';


const Login = () => {
  const [registerScreen, setRegisterScreen] = useState(false);


    const [emailInputValue, setEmailInputValue] = useState('');
    const [userInputValue, setUserInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [showPassword, setShowPassword] = useState (false);
    const [loginPasswordVisible, setLoginPasswordVisible] = useState (false);
    const [isLogged, setIsLogged] = useState(true);
   

    


    const toggleRegisterScreen = () => {
        setRegisterScreen(!registerScreen);
        setLoginPasswordVisible(false);
        setShowPassword(false);
        setPasswordInputValue('');
        setEmailInputValue('');
        setUserInputValue('');
    }

    


    const registerUser = async (user) => {

        const response = await fetch('http://localhost:8080/user/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
           console.log("deu erro");
        }

         const data = await response.json();
         console.log(data);
    }

    const onLogin = async (e) => {

        
      e.preventDefault();
        


        const user = {
            id: 1,
            name: "Mario",
            email: "mario@gmail.com",
            password: "123"
        }

        const response = await fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
           console.log("deu erro");
           return "login incorreto";
        }

        setIsLogged(!setIsLogged); 

         const data = await response.json();
         console.log(data.books[0]);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: userInputValue,
            email: emailInputValue,
            password: passwordInputValue
        }

        registerUser(user);

    }

   


  return (
    <div id='mainLogin' className={isLogged ? 'logged-in' : ''}>
      <div className="overlay"></div> {}
      {!registerScreen && !isLogged && (
        <div className="blockLogin">
          <div className="header">
            <h2>Faça seu Login</h2>
          </div>
          <form onSubmit={onLogin}>
            <input type="text" placeholder='Digite seu nome de usuario' />
            {/* <input type="password" placeholder='Digite sua senha' /> */}
            <div className="senha-container">
            <input
              type={loginPasswordVisible ? 'text' : 'password'}
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              onClick={() => setLoginPasswordVisible(!loginPasswordVisible)}
              className="toggle-senha"
            >
              {loginPasswordVisible ? '🙈' : '👁️'}
            </button>
          </div>
            <input type="submit" value='Entrar' />
          </form>
          <p>
            Não possui uma conta?{' '}
            <span onClick={toggleRegisterScreen}>Registre-se</span>
          </p>
        </div>
      )}

      {registerScreen && !isLogged && (
        <div className="blockLogin">
          <div className="header">
            <h2>Faça seu Registro</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite seu email'   value={emailInputValue} onChange={(e) => setEmailInputValue(e.target.value)}/>
            <input type="text" placeholder='Digite seu usuario'   value={userInputValue} onChange={(e) => setUserInputValue(e.target.value)}/>
            {/* <input type="password" placeholder='Digite sua senha'   value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)}/> */}
            <div className="senha-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Digite sua senha'
              value={passwordInputValue}
              onChange={(e) => setPasswordInputValue(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-senha"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
            <input type="submit" value='Registrar' />
          </form>
          <p>
            Já possui uma conta?{' '}
            <span onClick={toggleRegisterScreen}>Faça login</span>

          </p>
        </div>
      )}


      {isLogged && <UserScreen />}
    </div>
  );
};

export default Login;
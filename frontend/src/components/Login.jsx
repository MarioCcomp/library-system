import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [registerScreen, setRegisterScreen] = useState(false);


    const [emailInputValue, setEmailInputValue] = useState('');
    const [userInputValue, setUserInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [showPassword, setShowPassword] = useState (false);
    const [loginPasswordVisible, setLoginPasswordVisible] = useState (false);
    const [isLogged, setIsLogged] = useState(true);
    const [myBooks, setMyBooks] = useState(false);
    const [allBooks, setAllBooks] = useState(false);
    const [addBooks, setAddBooks] = useState(false);

    const book = {
          name: "O alquimista",
          genre: "Comedia",
          author: "Leonardo DiCaprio",
          imgUrl: "https://m.media-amazon.com/images/I/81slUinjTlS.jpg"
    }
    const book2 = {
      name: "Orgulho e Preconceito",
      genre: "romance",
      author: "Jane Austen",
      imgUrl: "https://m.media-amazon.com/images/I/81Afzr2tMCL._AC_UF1000,1000_QL80_.jpg"
    };

    const book3 = {
      name: "O Pequeno Príncipe",
      genre: "ficção filosófica",
      author: "Antoine de Saint-Exupéry",
      imgUrl: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg"
    };

    const book4 = {
      name: "Dom Casmurro",
      genre: "realismo",
      author: "Machado de Assis",
      imgUrl: "https://m.media-amazon.com/images/I/71Q3wBXMAfL._AC_UF1000,1000_QL80_.jpg"
    };
    const book5 = {
          name: "Crime e castigo",
          genre: "filosofia",
          author: "Fiódor Dostoiévski",
          imgUrl: "https://m.media-amazon.com/images/I/71Gmavgu3ZL._UF1000,1000_QL80_.jpg"
    }
    const book6 = {
      name: "O Senhor dos Anéis",
      genre: "fantasia",
      author: "J.R.R. Tolkien",
      imgUrl: "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UF1000,1000_QL80_.jpg"
    };

    const book7 = {
      name: "O Apanhador no Campo de Centeio",
      genre: "ficção",
      author: "J.D. Salinger",
      imgUrl: "https://m.media-amazon.com/images/I/71nX2V6rwxL._AC_UF1000,1000_QL80_.jpg"
    };

    const book8 = {
      name: "A Revolução dos Bichos",
      genre: "sátira política",
      author: "George Orwell",
      imgUrl: "https://m.media-amazon.com/images/I/81WIhbEFNLL._AC_UF1000,1000_QL80_.jpg"
    };
    const [books, setBooks] = useState([book, book2, book3, book4, book5, book6, book7, book8])


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

    const handleMyBooks = () => {
      setMyBooks(true);
      setAddBooks(false);
      setAllBooks(false);
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


      {isLogged && <div className="userScreen">
        <div id="leftSide">
          <button 
          className='navBtn'
          onClick={handleMyBooks}
          >Meus Livros</button>
          <button className='navBtn'>Ver Todos os Livros</button>
          <button className='navBtn'>Adicionar Livro</button>
          
        </div> 

        <div id="rightSide" className={myBooks || allBooks || addBooks ? 'selected' : ''}> 
          {!myBooks && !allBooks && !addBooks && <p id="mainText">
            Selecione uma opção
          </p>}
          
          {myBooks && !allBooks && !addBooks && <div className="myBooks">
            {books && books.map((book)=>(
              <div className="book">
                  <img src={book.imgUrl} alt="" />
                  <h3>
                    {book.name}
                  </h3>
              </div>
            ))}
          </div>}
        
        </div>

      </div>}
    </div>
  );
};

export default Login;
import './UserScreen.css';
import { useState } from 'react';

const UserScreen = () => {


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

     const [myBooks, setMyBooks] = useState(false);
    const [allBooks, setAllBooks] = useState(false);
    const [addBooks, setAddBooks] = useState(false);

 const handleMyBooks = () => {
      setMyBooks(!myBooks);
      setAddBooks(false);
      setAllBooks(false);
    }

  return (
    <div className="userScreen">
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

      </div>
  )
}

export default UserScreen
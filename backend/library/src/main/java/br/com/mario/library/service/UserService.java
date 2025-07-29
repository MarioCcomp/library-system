package br.com.mario.library.service;


import br.com.mario.library.dto.BookDTO;
import br.com.mario.library.dto.LoginDTO;
import br.com.mario.library.dto.UserDTO;
import br.com.mario.library.exception.WrongPasswordException;
import br.com.mario.library.model.Book;
import br.com.mario.library.model.User;
import br.com.mario.library.repository.UserRepository;
import br.com.mario.library.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private BookService bookService;

    @Autowired
    private UserRepository repository;

    public List<Book> findAllBooksFromUser(String name) {
        System.out.println(name);
        User user = repository.findByName(name).orElseThrow(() -> new RuntimeException("Usuario nao encontrado"));
        return user.getBooks();
    }




    public User findById(Long id) {
        return repository.findById(id).orElseThrow();
    }


    public void delete(Long id) {
        repository.deleteById(id);
    }

    public User registrar(User user) {

        repository.findByName(user.getName()).ifPresent(u -> {throw new IllegalArgumentException("Username ja cadastrado");});

        if(repository.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("Email ja cadastrado");
        }



        String password = passwordEncoder.encode(user.getPassword());

        user.setPassword(password);
        return repository.save(user);
    }

    public UserDTO logar(LoginDTO user) {
        User banco = repository.findByName(user.name()).orElseThrow(() -> new RuntimeException("Usuario nao encontrado"));
        if (!(passwordEncoder.matches(user.password(), banco.getPassword()))) {
            throw new WrongPasswordException();
        }

        String token = jwtService.generateToken(banco.getName(), banco.getRole().name());

        UserDTO newUser = new UserDTO(banco.getName(), banco.getEmail(), banco.getBooks(), token);

        return newUser;

    }

    public void adicionarLivro(BookDTO book, LoginDTO user) {

        User userBanco = repository.findByName(user.name()).orElseThrow();

        Book banco = bookService.findByNameAndAuthor(book.name(), book.author());

        if(userBanco.getBooks().contains(banco)) {
            throw new IllegalArgumentException("O usuario ja possui esse livro");
        }

        userBanco.getBooks().add(banco);
        repository.save(userBanco);
    }

}

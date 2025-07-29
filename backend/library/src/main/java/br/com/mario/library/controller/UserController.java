package br.com.mario.library.controller;


import br.com.mario.library.dto.AddBookDTO;
import br.com.mario.library.dto.BookDTO;
import br.com.mario.library.dto.LoginDTO;
import br.com.mario.library.dto.UserDTO;
import br.com.mario.library.model.Book;
import br.com.mario.library.model.User;
import br.com.mario.library.security.JwtService;
import br.com.mario.library.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserService service;



    @GetMapping()
    public List<Book> findAllBooksFromUser(@RequestParam String name) {
        return service.findAllBooksFromUser(name);
    }

    @PostMapping(path = "/registrar")
    public ResponseEntity<User> registrar(@RequestBody User user) {
        return ResponseEntity.ok(service.registrar(user));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<UserDTO> logar(@RequestBody LoginDTO user) {
        return ResponseEntity.ok(service.logar(user));
    }

    @PostMapping(path = "/adicionarLivro")
    public ResponseEntity<BookDTO> adicionarLivro(@RequestBody AddBookDTO body) {
        BookDTO book = body.book();
        LoginDTO user = body.user();
        service.adicionarLivro(book, user);
        return ResponseEntity.ok(book);
    }

}

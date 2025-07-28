package br.com.mario.library.controller;


import br.com.mario.library.dto.AddBookDTO;
import br.com.mario.library.model.Book;
import br.com.mario.library.model.User;
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

    @GetMapping(path = "/")
    public List<User> findAll() {
        return service.findAll();
    }

    @PostMapping(path = "/registrar")
    public ResponseEntity<User> registrar(@RequestBody User user) {
        return ResponseEntity.ok(service.registrar(user));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<User> logar(@RequestBody User user) {
        return ResponseEntity.ok(service.logar(user));
    }

    @PostMapping(path = "/adicionarLivro")
    public ResponseEntity<Book> adicionarLivro(@RequestBody AddBookDTO body) {
        Book book = body.getBook();
        User user = body.getUser();
        service.adicionarLivro(book, user);
        return ResponseEntity.ok(book);
    }

}

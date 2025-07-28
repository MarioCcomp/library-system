package br.com.mario.library.controller;


import br.com.mario.library.model.Book;
import br.com.mario.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/book")
public class BookController {

    @Autowired
    private BookService service;

    @PostMapping(path = "/create")
    public ResponseEntity<Book> create(@RequestBody Book book) {
        return ResponseEntity.ok(service.create(book));
    }

}

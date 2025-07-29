package br.com.mario.library.service;


import br.com.mario.library.model.Book;
import br.com.mario.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public Book create(Book book) {
        return repository.save(book);
    }

    public List<Book> findAll() {
        return repository.findAll();
    }

    public Book findByNameAndAuthor(String name, String author) {
        Book book = repository.findByNameAndAuthor(name, author);

        if(book == null) {
            throw new IllegalArgumentException("Livro nao encontrado");
        }

        return book;
    }

}

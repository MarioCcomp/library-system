package br.com.mario.library.repository;

import br.com.mario.library.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

    public Book findByNameAndAuthor(String name, String author);
}

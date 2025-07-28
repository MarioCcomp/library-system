package br.com.mario.library.dto;

import br.com.mario.library.model.Book;
import br.com.mario.library.model.User;

public class AddBookDTO {
    private User user;
    private Book book;

    public AddBookDTO(User user, Book book) {
        this.user = user;
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}

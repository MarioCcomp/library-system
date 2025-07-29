package br.com.mario.library.dto;


import br.com.mario.library.model.Book;

import java.util.List;

public record UserDTO (String name, String email, List<Book> books, String token) {

}

package br.com.mario.library.dto;

import br.com.mario.library.model.User;

public record AddBookDTO(BookDTO book, LoginDTO user) {
}

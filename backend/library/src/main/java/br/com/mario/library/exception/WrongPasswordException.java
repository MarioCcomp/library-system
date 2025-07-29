package br.com.mario.library.exception;

public class WrongPasswordException extends RuntimeException{
    public WrongPasswordException() {
        super("Senha ou usuario incorreto");
    }
}

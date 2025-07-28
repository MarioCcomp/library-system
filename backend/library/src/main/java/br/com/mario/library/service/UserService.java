package br.com.mario.library.service;


import br.com.mario.library.model.Book;
import br.com.mario.library.model.User;
import br.com.mario.library.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> findAll() {
        return repository.findAll();
    }


    public User findById(Long id) {
        return repository.findById(id).orElseThrow();
    }


    public void delete(Long id) {
        repository.deleteById(id);
    }

    public User registrar(User user) {
        return repository.save(user);
    }

    public User logar(User user) {
        return repository.findById(user.getId()).orElseThrow();
    }

    public void adicionarLivro(Book book, User user) {
        user.getBooks().add(book);
        repository.save(user);
    }

}

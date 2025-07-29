package br.com.mario.library.repository;


import br.com.mario.library.model.Book;
import br.com.mario.library.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByName(String name);
    User findByEmail(String email);
}

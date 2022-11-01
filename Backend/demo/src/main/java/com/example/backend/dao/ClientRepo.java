package com.example.backend.dao;

import com.example.backend.models.Auth;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepo extends CrudRepository<Auth, Integer> {
//    @Query("select * from client where username=?")
    Auth findByUsername(String username);
}

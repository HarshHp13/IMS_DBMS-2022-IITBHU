package com.example.backend.dao;

import com.example.backend.models.User;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepositry extends CrudRepository<User, Integer> {

}

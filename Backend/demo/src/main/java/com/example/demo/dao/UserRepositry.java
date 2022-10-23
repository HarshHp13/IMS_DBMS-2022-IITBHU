package com.example.demo.dao;

import com.example.demo.user.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepositry extends CrudRepository<User, Integer> {
}

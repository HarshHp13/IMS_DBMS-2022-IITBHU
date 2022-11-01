package com.example.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

    @Autowired
    private JdbcTemplate jdbcTemp;

    public UserDao(){}

    //create table

    public int createTable(){
        String query="create table if not exists user(id int primary key not null, name varchar(250), age int, email varchar(250), income int";
        int update=this.jdbcTemp.update(query);
        return update;
    }

    public int insertUser(int id, String name, int age, String email, int income){
        String query="insert into user values (?,?,?,?,?)";
        int insert=this.jdbcTemp.update(query,id,name,age,email,income);
        return insert;
    }
}

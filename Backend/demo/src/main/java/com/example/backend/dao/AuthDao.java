package com.example.backend.dao;

import com.example.backend.models.Auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AuthDao {
    @Autowired
    private JdbcTemplate jdbcTemp;

    public AuthDao(){}

    //create table

    public int createTable(){
        String query="create table if not exists client(id int primary key auto_increment not null, name varchar(250), username varchar(250), password varchar(250), roles varchar(250), unique(username))";
        int update=this.jdbcTemp.update(query);
        return update;
    }

    public int saveClient(String name, String username, String password, String roles){
        createTable();
        String query="insert into client(name, username, password, roles) values (?,?,?,?)";
        int insert=this.jdbcTemp.update(query,name,username,password,roles);
        return insert;
    }

    public Auth findUserByUsername(String username){
        String query="select * from client where username=?";
        List<Auth> auth =this.jdbcTemp.query(query, new Object[]{username}, new ResultSetExtractor<List<Auth>>() {
            @Override
            public List<Auth> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Auth> list = new ArrayList<Auth>();
                while(rs.next()){
                    Auth student = new Auth();
                    student.setId(rs.getInt("id"));
                    student.setName(rs.getString("name"));
                    student.setUsername(rs.getString("username"));
                    student.setPassword(rs.getString("password"));
                    student.setRoles(rs.getString("roles"));
                    list.add(student);
                }
                return list;
            }
        });
        return auth.get(0);
    }
}

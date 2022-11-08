package com.example.backend.dao;

import com.example.backend.models.Auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AuthDao {
    @Autowired
    private JdbcTemplate jdbcTemp;

    public AuthDao(){}

    //create table

    public int createTable(){
        String query="create table if not exists auth(id int primary key auto_increment not null, username varchar(250), password varchar(250), roles varchar(250), unique(username))";
        int update=this.jdbcTemp.update(query);
        return update;
    }

    public int saveAuth(String username, String password, String roles){
        createTable();
        String query="insert into auth(username, password, roles) values (?,?,?)";
        int insert=this.jdbcTemp.update(query,username,password,roles);
        return insert;
    }

    public Auth findUserByUsername(String username){
        String query="select * from auth where username=?";
        List<Auth> auth =this.jdbcTemp.query(query, new Object[]{username}, new ResultSetExtractor<List<Auth>>() {
            @Override
            public List<Auth> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Auth> list = new ArrayList<Auth>();
                while(rs.next()){
                    Auth student = new Auth();
                    student.setId(rs.getInt("id"));
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

    public void addRoleToAuth(String username, String roleName){
        String query= "update auth set roles = ? where username = ?";
        jdbcTemp.update(query,roleName,username);
    }

    public List<Auth> findAll() {
        String query="select * from auth";
        List<Auth> auths=jdbcTemp.query(query, new ResultSetExtractor<List<Auth>>() {
            @Override
            public List<Auth> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Auth> list = new ArrayList<Auth>();
                while(rs.next()){
                    Auth auth = new Auth();
                    auth.setId(rs.getInt("id"));
                    auth.setUsername(rs.getString("username"));
                    auth.setPassword(rs.getString("password"));
                    auth.setRoles(rs.getString("roles"));
                    list.add(auth);
                }
                return list;
            }
        });
        return auths;
    }

    public boolean checkRole(String username, String role){
        String query="select count(*) from auth where username=? and roles=?";
        int count=jdbcTemp.queryForObject(query, new Object[]{username, role}, Integer.class);
        return count > 0;
    }
}

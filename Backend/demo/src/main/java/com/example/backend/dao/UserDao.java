package com.example.backend.dao;

import com.example.backend.models.Auth;
import com.example.backend.models.User_info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDao {

    @Autowired
    private JdbcTemplate jdbcTemp;

    public UserDao(){}

    //create table

    public int createTable(){
        String query="CREATE TABLE if not exists User_info(" +
                "user_id int primary key auto_increment," +
                "firstName varchar(40) not null," +
                "lastName varchar(50)," +
                "email varchar(50) not null," +
                "gender varchar(20)," +
                "dob varchar(20)," +
                "age int," +
                "referrals int," +
                "street_name varchar(50) not null," +
                "house varchar(40) not null," +
                "city varchar(40) not null," +
                "state varchar(50) not null," +
                "zipcode varchar(6) not null," +
                "profession varchar(20) not null," +
                "income int not null," +
                "marital_status varchar(10)," +
                "signUp_date varchar(20)," +
                "referred_id int references User_info(user_id)," +
                "branch_id int references Branch(branch_id)," +
                "auth_id int references Auth(auth_id),"+
                "unique(email));";
        int update=this.jdbcTemp.update(query);
        return update;
    }

    public int saveUser(String first_name, String last_name, String date_of_birth, String email, String house, String street, String marital_status, String city, String state, String zipcode, int income, String profession, String gender, int referred_by, int branch_id,int age, int referral, int auth_id){
        createTable();
        String query="insert into user_info(firstName,lastName,email,gender,dob,age,referrals,street_name,house,city,state,zipcode,profession,income,marital_status,signUp_date,referred_id,branch_id,auth_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,curdate(),?,?,?)";
        int insert=this.jdbcTemp.update(query, first_name, last_name, email, gender, date_of_birth, age, referral, street, house, city, state, zipcode, profession, income, marital_status,referred_by, branch_id, auth_id);
        return insert;
    }

    public List<User_info> findAll() {
        String query="select * from user_info";
        List<User_info> users =this.jdbcTemp.query(query, new ResultSetExtractor<List<User_info>>() {
            @Override
            public List<User_info> extractData(ResultSet frm) throws SQLException, DataAccessException {
                List<User_info> list = new ArrayList<User_info>();
                while(frm.next()){
                    User_info user_info=new User_info();
                    user_info.setCity(frm.getString("city"));
                    user_info.setMarital_status(frm.getString("marital_status"));
                    user_info.setEmail(frm.getString("email"));
                    user_info.setIncome(frm.getInt("income"));
                    user_info.setDate_of_birth(frm.getString("dob"));
                    user_info.setAge(frm.getInt("age"));
                    user_info.setSignUp_date(frm.getString("signUp_date"));
                    user_info.setFirst_name(frm.getString("firstName"));
                    user_info.setLast_name(frm.getString("lastName"));
                    user_info.setGender(frm.getString("gender"));
                    user_info.setHouse(frm.getString("house"));
                    user_info.setProfession(frm.getString("profession"));
                    user_info.setZipcode(frm.getString("zipcode"));
                    user_info.setStreet(frm.getString("street_name"));
                    user_info.setState(frm.getString("state"));
                    list.add(user_info);
                }
                return list;
            }
        });
        return users;
    }

    public User_info findUserByUsername(String username){
        String query="select * from user_info where email=?";
        List<User_info> user =this.jdbcTemp.query(query, new Object[]{username}, new ResultSetExtractor<List<User_info>>() {
            @Override
            public List<User_info> extractData(ResultSet frm) throws SQLException, DataAccessException {
                List<User_info> list = new ArrayList<User_info>();
                while(frm.next()){
                    User_info user_info=new User_info();
                    user_info.setId(frm.getInt("user_id"));
                    user_info.setCity(frm.getString("city"));
                    user_info.setMarital_status(frm.getString("marital_status"));
                    user_info.setEmail(frm.getString("email"));
                    user_info.setIncome(frm.getInt("income"));
                    user_info.setDate_of_birth(frm.getString("dob"));
                    user_info.setSignUp_date(frm.getString("signUp_date"));
                    user_info.setAge(frm.getInt("age"));
                    user_info.setFirst_name(frm.getString("firstName"));
                    user_info.setLast_name(frm.getString("lastName"));
                    user_info.setGender(frm.getString("gender"));
                    user_info.setHouse(frm.getString("house"));
                    user_info.setProfession(frm.getString("profession"));
                    user_info.setZipcode(frm.getString("zipcode"));
                    user_info.setStreet(frm.getString("street_name"));
                    user_info.setState(frm.getString("state"));
                    user_info.setAuth_id(frm.getInt("auth_id"));
                    list.add(user_info);
                }
                return list;
            }
        });
        if(user.size()!=0) return user.get(0);
        else return null;
    }


    public User_info findUserByAuthId(int id){
        String query="select * from user_info where auth_id=?";
        List<User_info> user =this.jdbcTemp.query(query, new Object[]{id}, new ResultSetExtractor<List<User_info>>() {
            @Override
            public List<User_info> extractData(ResultSet frm) throws SQLException, DataAccessException {
                List<User_info> list = new ArrayList<User_info>();
                while(frm.next()){
                    User_info user_info=new User_info();
                    user_info.setCity(frm.getString("city"));
                    user_info.setMarital_status(frm.getString("marital_status"));
                    user_info.setEmail(frm.getString("email"));
                    user_info.setIncome(frm.getInt("income"));
                    user_info.setDate_of_birth(frm.getString("dob"));
                    user_info.setFirst_name(frm.getString("firstName"));
                    user_info.setLast_name(frm.getString("lastName"));
                    user_info.setGender(frm.getString("gender"));
                    user_info.setHouse(frm.getString("house"));
                    user_info.setProfession(frm.getString("profession"));
                    user_info.setZipcode(frm.getString("zipcode"));
                    user_info.setStreet(frm.getString("street_name"));
                    user_info.setState(frm.getString("state"));
                    user_info.setAuth_id(frm.getInt("auth_id"));
                    list.add(user_info);
                }
                return list;
            }
        });
        return user.get(0);
    }

}

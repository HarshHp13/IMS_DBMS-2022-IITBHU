package com.example.backend.dao;

import com.example.backend.models.Admin_info;
import com.example.backend.models.Admin_info;
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
public class AdminDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public Admin_info getAdminByEmail(String email){
        String query="select * from admin_info where email=?";
        List<Admin_info> agents=jdbcTemplate.query(query, new Object[] {email}, new ResultSetExtractor<List<Admin_info>>() {
            @Override
            public List<Admin_info> extractData(ResultSet frm) throws SQLException, DataAccessException {
                List<Admin_info> list = new ArrayList<Admin_info>();
                while(frm.next()){
                    Admin_info agent=new Admin_info();
                    agent.setId(frm.getInt("admin_id"));
                    agent.setEmail(frm.getString("email"));
                    agent.setDate_of_birth(frm.getString("dob"));
                    agent.setAge(frm.getInt("age"));
                    agent.setFirst_name(frm.getString("firstName"));
                    agent.setLast_name(frm.getString("lastName"));
                    agent.setGender(frm.getString("gender"));
                    agent.setBranch_id(frm.getInt("branch_id"));
                    list.add(agent);
                }
                return list;
            }
        });
        return agents.get(0);
    }
}

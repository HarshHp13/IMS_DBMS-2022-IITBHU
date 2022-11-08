package com.example.backend.dao;

import com.example.backend.models.Agent_info;
import com.example.backend.models.Auth;
import com.example.backend.models.User_info;
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
public class AgentDao {
    @Autowired
    JdbcTemplate jdbcTemplate;


    public Agent_info getAgentById(int id){
        String query="select * from agent where agent_id=?";
        List<Agent_info> agents=jdbcTemplate.query(query, new Object[] {id}, new ResultSetExtractor<List<Agent_info>>() {
            @Override
            public List<Agent_info> extractData(ResultSet frm) throws SQLException, DataAccessException {
                List<Agent_info> list = new ArrayList<Agent_info>();
                while(frm.next()){
                    Agent_info agent=new Agent_info();
                    agent.setCity(frm.getString("city"));
                    agent.setEmail(frm.getString("email"));
//                    agent.setDate_of_birth(frm.getDate("dob"));
                    agent.setFirst_name(frm.getString("firstName"));
                    agent.setLast_name(frm.getString("lastName"));
                    agent.setGender(frm.getString("gender"));
                    agent.setHouse(frm.getString("house_no"));
                    agent.setZipcode(frm.getString("zipcode"));
                    agent.setStreet(frm.getString("street_name"));
                    agent.setState(frm.getString("state"));
                    list.add(agent);
                }
                return list;
            }
        });
        return agents.get(0);
    }

    public Agent_info getAgentByEmail(String email){
        String query="select * from agent where email=?";
        List<Agent_info> agents=jdbcTemplate.query(query, new Object[] {email}, new ResultSetExtractor<List<Agent_info>>() {
            @Override
            public List<Agent_info> extractData(ResultSet frm) throws SQLException, DataAccessException {
                List<Agent_info> list = new ArrayList<Agent_info>();
                while(frm.next()){
                    Agent_info agent=new Agent_info();
                    agent.setId(frm.getInt("agent_id"));
                    agent.setCity(frm.getString("city"));
                    agent.setEmail(frm.getString("email"));
                    agent.setDate_of_birth(frm.getString("date_of_birth"));
                    agent.setFirst_name(frm.getString("firstName"));
                    agent.setLast_name(frm.getString("lastName"));
                    agent.setGender(frm.getString("gender"));
                    agent.setHouse(frm.getString("house_no"));
                    agent.setZipcode(frm.getString("zipcode"));
                    agent.setStreet(frm.getString("street_name"));
                    agent.setState(frm.getString("state"));
                    agent.setNo_of_policies(frm.getInt("no_of_policies"));
                    list.add(agent);
                }
                return list;
            }
        });
        return agents.get(0);
    }

    public void updateApproved(String email){
        String query="update agent set no_of_policies=no_of_policies+1 where email=?";
        jdbcTemplate.update(query,email);
    }
}
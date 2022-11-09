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
                    agent.setDate_of_birth(frm.getString("date_of_birth"));
                    agent.setFirst_name(frm.getString("firstName"));
                    agent.setLast_name(frm.getString("lastName"));
                    agent.setGender(frm.getString("gender"));
                    agent.setHouse(frm.getString("house_no"));
                    agent.setZipcode(frm.getString("zipcode"));
                    agent.setStreet(frm.getString("street_name"));
                    agent.setState(frm.getString("state"));
                    agent.setBranch_id(frm.getInt("branch_id"));
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
                    agent.setBranch_id(frm.getInt("branch_id"));
                    list.add(agent);
                }
                return list;
            }
        });
        return agents.get(0);
    }

    public List<Agent_info> getAllAgents(int branch_id){
        String query="select * from agent where branch_id=?";
        List<Agent_info> agents=jdbcTemplate.query(query,new Object[]{branch_id}, new ResultSetExtractor<List<Agent_info>>() {
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
                    agent.setBranch_id(frm.getInt("branch_id"));
                    list.add(agent);
                }
                return list;
            }
        });
        if(agents.size()>0) return agents;
        else return null;
    }

    public void updateApproved(String email){
        String query="update agent set no_of_policies=no_of_policies+1 where email=?";
        jdbcTemplate.update(query,email);
    }

    public void deleteAgent(int agent_id){
        String query="delete from agent where agent_id=?";
        jdbcTemplate.update(query,agent_id);
    }

    public int saveAgent(String first_name, String last_name, String date_of_birth, String email, String house, String street, String city, String state, String zipcode, String gender, int branch_id, int auth_id){
        String query="insert into agent(firstName,lastName,email,gender,dob,street_name,house,city,state,zipcode,branch_id,auth_id) values (?,?,?,?,?,?,?,?,?,?,?,?)";
        int insert=this.jdbcTemplate.update(query, first_name, last_name, email, gender, date_of_birth,street, house, city, state, zipcode, branch_id, auth_id);
        return insert;
    }
}

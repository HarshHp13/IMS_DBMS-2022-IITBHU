package com.example.backend.dao;

import com.example.backend.models.*;
import com.example.backend.service.PolicyService;
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
public class PolicyDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Policy> getPolicies(){
        String query="select * from policy";
        List<Policy> policies=jdbcTemplate.query(query, new ResultSetExtractor<List<Policy>>() {
            @Override
            public List<Policy> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Policy> list = new ArrayList<>();
                while (rs.next()){
                    Policy policy=new Policy();
                    policy.setPolicy_id(rs.getInt("policy_id"));
                    policy.setPolicy_name(rs.getString("policy_name"));
                    policy.setTenure(rs.getInt("tenure"));
                    policy.setPolicy_description(rs.getString("policy_description"));
                    policy.setPremium(rs.getInt("premium"));
                    policy.setLife_cover(rs.getInt("life_cover"));
                    policy.setPolicy_type(rs.getString("policy_type"));
                    policy.setMax_age(rs.getInt("max_age"));
                    policy.setMin_age(rs.getInt("min_age"));
                    policy.setOccupation(rs.getString("occupation"));
                    list.add(policy);
                }
                return list;
            }
        });
        return policies;
    }

    public Policy getPolicyById(int id){
        String query="select * from policy where policy_id=?";
        List<Policy> policies=jdbcTemplate.query(query, new Object[] {id}, new ResultSetExtractor<List<Policy>>() {
            @Override
            public List<Policy> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Policy> list = new ArrayList<>();
                while (rs.next()){
                    Policy policy=new Policy();
                    policy.setPolicy_id(rs.getInt("policy_id"));
                    policy.setPolicy_name(rs.getString("policy_name"));
                    policy.setTenure(rs.getInt("tenure"));
                    policy.setPolicy_description(rs.getString("policy_description"));
                    policy.setPremium(rs.getInt("premium"));
                    policy.setLife_cover(rs.getInt("life_cover"));
                    policy.setPolicy_type(rs.getString("policy_type"));
                    policy.setMax_age(rs.getInt("max_age"));
                    policy.setMin_age(rs.getInt("min_age"));
                    policy.setOccupation(rs.getString("occupation"));
                    list.add(policy);
                }
                return list;
            }
        });
        return policies.get(0);
    }

    public void setPolicyApproval(int policy_id, int user_id){
        String query="insert into policy_approval(policy_request_date, policy_id, user_id, status) values (curdate(),?,?,0)";
        jdbcTemplate.update(query, policy_id,user_id);
    }

    public Policy_Approval getApproval(int policy_id, int user_id){
        String query="select * from policy_approval where user_id=? and policy_id=?";
        List<Policy_Approval> approval=jdbcTemplate.query(query, new Object[] {user_id,policy_id}, new ResultSetExtractor<List<Policy_Approval>>() {
            @Override
            public List<Policy_Approval> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Policy_Approval> list = new ArrayList<>();
                while (rs.next()){
                    Policy_Approval policy=new Policy_Approval();
                    policy.setPolicy_id(rs.getInt("policy_id"));
                    policy.setAgent_id(rs.getInt("agent_id"));
                    policy.setUser_id(rs.getInt("user_id"));
                    policy.setPolicy_request_date(rs.getString("policy_request_date"));
                    policy.setPolicy_approval_date(rs.getString("policy_approval_date"));
                    policy.setStatus(rs.getInt("status"));
                    list.add(policy);
                }
                return list;
            }
        });
        if(approval.size()!=0) return approval.get(0);
        else return null;
    }

    public void updateApproval(int policy_id, int user_id, int agent_id, int status) {
        String query = "update policy_approval set status=?,agent_id=? where user_id=? and policy_id=?";
        jdbcTemplate.update(query, status, user_id, agent_id, policy_id);
        if (status == 1) {
            String q ="insert into approved_policy(policy_id,user_id,agent_id,premium_count,claimed) values (?,?,?,0,false)";
            jdbcTemplate.update(q,policy_id,user_id,agent_id);
        }
    }

    public List<Approval> getAllApproval(int user_id){
        String query = "select ppa.*, a.firstName, a.lastName from (select p.*, PA.policy_request_date, PA.policy_approval_date, PA.agent_id, PA.status from (select pa.* from policy_approval as pa left join approved_policy as ap on(pa.user_id=ap.user_id and pa.policy_id=ap.policy_id) where pa.user_id=? and (pa.status<1 or ap.premium_count=0)) as PA join (policy as p) on (p.policy_id=PA.policy_id)) as ppa left join agent as a on a.agent_id=ppa.agent_id";
        List<Approval> policies=jdbcTemplate.query(query,new Object[]{user_id}, new ResultSetExtractor<List<Approval>>() {
            @Override
            public List<Approval> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Approval> list = new ArrayList<>();
                while (rs.next()){
                    Approval policy=new Approval();
                    policy.setPolicy_id(rs.getInt("policy_id"));
                    policy.setPolicy_name(rs.getString("policy_name"));
                    policy.setTenure(rs.getInt("tenure"));
                    policy.setPolicy_description(rs.getString("policy_description"));
                    policy.setPremium(rs.getInt("premium"));
                    policy.setLife_cover(rs.getInt("life_cover"));
                    policy.setPolicy_type(rs.getString("policy_type"));
                    policy.setMax_age(rs.getInt("max_age"));
                    policy.setMin_age(rs.getInt("min_age"));
                    policy.setOccupation(rs.getString("occupation"));
                    policy.setAgent_id(rs.getInt("agent_id"));
//                    policy.setUser_id(rs.getInt("user_id"));
                    policy.setPolicy_request_date(rs.getString("policy_request_date"));
                    policy.setPolicy_approval_date(rs.getString("policy_approval_date"));
                    policy.setStatus(rs.getInt("status"));
                    list.add(policy);
                }
                return list;
            }
        });
        if(policies.size()!=0) return policies;
        else return null;
    }


    public List<Approved> getAllApproved(int user_id){
        String query = "select policy_id, policy_name, tenure, policy_description, premium, life_cover, policy_type, max_age, min_age, occupation, user_id, agent_id, firstName, lastName, premium_count, claimed from policy join (approved_policy join agent using(agent_id)) using(policy_id) where approved_policy.user_id=? and approved_policy.premium_count>0";
        List<Approved> policies=jdbcTemplate.query(query,new Object[]{user_id}, new ResultSetExtractor<List<Approved>>() {
            @Override
            public List<Approved> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Approved> list = new ArrayList<>();
                while (rs.next()){
                    Approved policy=new Approved();
                    policy.setPolicy_id(rs.getInt("policy_id"));
                    policy.setPolicy_name(rs.getString("policy_name"));
                    policy.setTenure(rs.getInt("tenure"));
                    policy.setPolicy_description(rs.getString("policy_description"));
                    policy.setPremium(rs.getInt("premium"));
                    policy.setLife_cover(rs.getInt("life_cover"));
                    policy.setPolicy_type(rs.getString("policy_type"));
                    policy.setMax_age(rs.getInt("max_age"));
                    policy.setMin_age(rs.getInt("min_age"));
                    policy.setOccupation(rs.getString("occupation"));
                    policy.setUser_id(rs.getInt("user_id"));
                    policy.setAgent_id(rs.getInt("agent_id"));
                    policy.setFirst_name(rs.getString("firstName"));
                    policy.setLast_name(rs.getString("lastName"));
                    policy.setPremium_count(rs.getInt("premium_count"));
                    policy.setClaimed(rs.getBoolean("claimed"));
                    list.add(policy);
                }
                return list;
            }
        });
        if(policies.size()!=0) return policies;
        else return null;
    }

    public Approved_Policy getApproved(int user_id, int policy_id){
        String query="select * from approved_policy where user_id=? and policy_id=?";
        List<Approved_Policy> approved_policies=jdbcTemplate.query(query, new Object[]{user_id, policy_id}, new ResultSetExtractor<List<Approved_Policy>>() {
            @Override
            public List<Approved_Policy> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Approved_Policy> list = new ArrayList<>();
                while (rs.next()){
                    Approved_Policy policy=new Approved_Policy();
                    policy.setPolicy_id(rs.getInt("policy_id"));
                    policy.setUser_id(rs.getInt("user_id"));
                    policy.setAgent_id(rs.getInt("agent_id"));
                    policy.setPremium_count(rs.getInt("premium_count"));
                    policy.setClaimed(rs.getBoolean("claimed"));
                    list.add(policy);
                }
                return list;
            }
        });
        if(approved_policies.size()!=0) return approved_policies.get(0);
        else return null;
    }

    public void updateApproved(int user_id, int policy_id){
        String query="update approved_policy set premium_count=premium_count+1 where user_id=? and policy_id=?";
        jdbcTemplate.update(query,user_id,policy_id);
    }

    public List<Approval> getAllRequested(int agent_id){
        String query = "select * from policy join policy_approval using(policy_id) where policy_approval.user_id=? and policy_id in (select pa.policy_id from policy_approval as pa, approved_policy as ap where pa.user_id=? and ((ap.user_id=? and ap.premium_count=0) or pa.status<1))";
        List<Approval> policies=jdbcTemplate.query(query,new Object[]{agent_id,agent_id,agent_id}, new ResultSetExtractor<List<Approval>>() {
            @Override
            public List<Approval> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Approval> list = new ArrayList<>();
                while (rs.next()){
                    Approval policy=new Approval();
                    policy.setPolicy_id(rs.getInt("policy_id"));
                    policy.setPolicy_name(rs.getString("policy_name"));
                    policy.setTenure(rs.getInt("tenure"));
                    policy.setPolicy_description(rs.getString("policy_description"));
                    policy.setPremium(rs.getInt("premium"));
                    policy.setLife_cover(rs.getInt("life_cover"));
                    policy.setPolicy_type(rs.getString("policy_type"));
                    policy.setMax_age(rs.getInt("max_age"));
                    policy.setMin_age(rs.getInt("min_age"));
                    policy.setOccupation(rs.getString("occupation"));
                    policy.setAgent_id(rs.getInt("agent_id"));
                    policy.setUser_id(rs.getInt("user_id"));
                    policy.setPolicy_request_date(rs.getString("policy_request_date"));
                    policy.setPolicy_approval_date(rs.getString("policy_approval_date"));
                    policy.setStatus(rs.getInt("status"));
                    list.add(policy);
                }
                return list;
            }
        });
        if(policies.size()!=0) return policies;
        else return null;
    }

    public List<AgentReq> requestedPoliciesForAgent(int agent_id){
        String query="select PA.status, p.*, ui.* " +
                "from ((select pa.* " +
                "from policy_approval as pa, approved_policy as ap " +
                "where pa.user_id=ap.user_id and pa.policy_id=ap.policy_id and ap.agent_id=? and ap.premium_count=0) union " +
                "(select pa.* " +
                "from policy_approval as pa, user_info as ui, agent as a " +
                "where pa.status < 1 and a.agent_id=? and a.branch_id=ui.branch_id and ui.user_id=pa.user_id)) as PA, policy as p, user_info as ui " +
                "where ui.user_id=PA.user_id and p.policy_id=PA.policy_id";
        List<AgentReq> policies=jdbcTemplate.query(query, new Object[] {agent_id,agent_id}, rs -> {
            List<AgentReq> list = new ArrayList<>();
            while (rs.next()){
                AgentReq policy=new AgentReq();
                policy.setPolicy_id(rs.getInt("policy_id"));
                policy.setPolicy_name(rs.getString("policy_name"));
                policy.setTenure(rs.getInt("tenure"));
                policy.setPolicy_description(rs.getString("policy_description"));
                policy.setPremium(rs.getInt("premium"));
                policy.setLife_cover(rs.getInt("life_cover"));
                policy.setPolicy_type(rs.getString("policy_type"));
                policy.setMax_age(rs.getInt("max_age"));
                policy.setMin_age(rs.getInt("min_age"));
                policy.setOccupation(rs.getString("occupation"));
                policy.setId(rs.getInt("user_id"));
                policy.setCity(rs.getString("city"));
                policy.setMarital_status(rs.getString("marital_status"));
                policy.setEmail(rs.getString("email"));
                policy.setIncome(rs.getInt("income"));
                policy.setDate_of_birth(rs.getString("dob"));
                policy.setSignUp_date(rs.getString("signUp_date"));
                policy.setAge(rs.getInt("age"));
                policy.setFirst_name(rs.getString("firstName"));
                policy.setLast_name(rs.getString("lastName"));
                policy.setGender(rs.getString("gender"));
                policy.setHouse(rs.getString("house"));
                policy.setProfession(rs.getString("profession"));
                policy.setZipcode(rs.getString("zipcode"));
                policy.setStreet(rs.getString("street_name"));
                policy.setState(rs.getString("state"));
                policy.setAuth_id(rs.getInt("auth_id"));
                policy.setStatus(rs.getInt("status"));
                list.add(policy);
            }
            return list;
        });
        if(policies.size()!=0) return policies;
        else return null;
    }

    public List<AgentCurr> currentPolicyForAgent(int agent_id){
        String query="select p.*, ui.*, ap.premium_count " +
                "from policy as p " +
                "inner join (approved_policy as ap, user_info as ui) on (ap.user_id=ui.user_id and ap.policy_id=p.policy_id) " +
                "where ap.agent_id=? and ap.premium_count > 0";
        List<AgentCurr> policies=jdbcTemplate.query(query,new Object[] {agent_id}, (ResultSetExtractor<List<AgentCurr>>) rs -> {
            List<AgentCurr> list = new ArrayList<>();
            while (rs.next()) {
                AgentCurr policy = new AgentCurr();
                policy.setPolicy_id(rs.getInt("policy_id"));
                policy.setPolicy_name(rs.getString("policy_name"));
                policy.setTenure(rs.getInt("tenure"));
                policy.setPolicy_description(rs.getString("policy_description"));
                policy.setPremium(rs.getInt("premium"));
                policy.setLife_cover(rs.getInt("life_cover"));
                policy.setPolicy_type(rs.getString("policy_type"));
                policy.setMax_age(rs.getInt("max_age"));
                policy.setMin_age(rs.getInt("min_age"));
                policy.setOccupation(rs.getString("occupation"));
                policy.setId(rs.getInt("user_id"));
                policy.setCity(rs.getString("city"));
                policy.setMarital_status(rs.getString("marital_status"));
                policy.setEmail(rs.getString("email"));
                policy.setIncome(rs.getInt("income"));
                policy.setDate_of_birth(rs.getString("dob"));
                policy.setSignUp_date(rs.getString("signUp_date"));
                policy.setAge(rs.getInt("age"));
                policy.setFirst_name(rs.getString("firstName"));
                policy.setLast_name(rs.getString("lastName"));
                policy.setGender(rs.getString("gender"));
                policy.setHouse(rs.getString("house"));
                policy.setProfession(rs.getString("profession"));
                policy.setZipcode(rs.getString("zipcode"));
                policy.setStreet(rs.getString("street_name"));
                policy.setState(rs.getString("state"));
                policy.setAuth_id(rs.getInt("auth_id"));
                policy.setPremium_count(rs.getInt("premium_count"));
                list.add(policy);
            }
            return list;
        });
        if(policies.size()!=0) return policies;
        else return null;
    }

}


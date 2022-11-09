package com.example.backend.api;

import com.example.backend.models.Agent_info;
import com.example.backend.models.Auth;
import com.example.backend.models.Agent_info;
import com.example.backend.service.AgentService;
import com.example.backend.service.AuthService;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(value = "http://localhost:3000",allowCredentials = "true")
//@RequestMapping("/agents")
public class AgentController {

    private final AuthService authService;
    private final AgentService agentService;

    AgentController(AuthService authService, AgentService agentService){
        this.authService = authService;
        this.agentService=agentService;
    }

    @PutMapping("/agents{id}")
    void updateAgent(@PathVariable("id") int id){
        Agent_info agent_info=agentService.getAgentById(id);
        agentService.updateApproved(agent_info.getEmail());
    }

    @GetMapping("/agents/getAgent")
    Agent_info getAgent(){
        Authentication auth= SecurityContextHolder.getContext().getAuthentication();
        Agent_info u=agentService.getAgentByEmail(auth.getName());
        return u;
    }

    @PostMapping("/agents/getAgentsByBranch")
    List<Agent_info> getAgentsByBranch(@RequestBody Map<String, Integer> mp){
        return agentService.getAllAgents(mp.get("branch_id"));
    }

    @PostMapping("/agent/deleteAgent")
    void deleteAgent(@RequestBody Map<String, Integer> mp){
        agentService.deleteAgent(mp.get("agent_id"));
    }

    @PostMapping(value = "/addAgent",consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    void addAgent(SignUp frm){
        System.out.println(frm.toString());
        Auth auth = new Auth(frm.getUsername(), frm.getPassword(), "AGENT");
        authService.saveAuth(auth);
        authService.addRoleToAuth(frm.getUsername(), "AGENT");

        Agent_info agent = new Agent_info();
        agent.setCity(frm.getCity());
        agent.setEmail(frm.getUsername());
        agent.setFirst_name(frm.getFname());
        agent.setLast_name(frm.getLname());
        agent.setGender(frm.getGender());
        agent.setHouse(frm.getHouse());
        agent.setZipcode(frm.getZipcode());
        agent.setStreet(frm.getStreet());
        agent.setState(frm.getState());
        agent.setBranch_id(frm.getBranch_id());
//        agent.setSignUp_date(frm.getSignUp_date());
//        System.out.println(frm.getSignUp_date());
        Auth a = authService.getAuth(frm.getUsername());
        agentService.saveAgent(agent, a.getId());
    }


}
class SignUp{
    private String username;
    private String password;
    private String fname;
    private String lname;
    //    private String signUp_date;
    private String house;
    private String street;
    private String city;
    private String state;
    private String zipcode;
    private String gender;
    private String phone;

    private int branch_id;





    public SignUp() {
    }

    public int getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(int branch_id) {
        this.branch_id = branch_id;
    }



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }


    //    public String getSignUp_date() {
//        return signUp_date;
//    }
//
//    public void setSignUp_date(String signUp_date) {
//        this.signUp_date = signUp_date;
//    }
    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }


    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

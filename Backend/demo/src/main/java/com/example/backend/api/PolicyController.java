package com.example.backend.api;

import com.example.backend.models.*;
import com.example.backend.service.PolicyService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(value = "http://localhost:3000", allowCredentials ="true")
@RequestMapping("/policy")
public class PolicyController {

    private final PolicyService policyService;

    PolicyController(PolicyService policyService){
        this.policyService=policyService;
    }

    @GetMapping("/list")
    public List<Policy> listPolicy(){
        List<Policy> policies=policyService.getPolicies();
        return policies;
    }

    @GetMapping("/list/{id}")
    public Policy getPolicyById(@PathVariable("id") int id){
        Policy policy=policyService.getPolicyById(id);
        return policy;
    }

    @PostMapping("/policyApproval/apply")
    public void applyForPolicyApproval(@RequestBody approvalDeets deets){
        policyService.applyPolicy(deets.getPolicy_id(),deets.getUser_id());
    }

    @PostMapping("/policyApproval/approval")
    public Policy_Approval getPolicyApproval(@RequestBody approvalDeets deets){
        return policyService.getApproval(deets.getPolicy_id(),deets.getUser_id());
    }

    @PostMapping("/policyApproval/update")
    public void updateApproval(@RequestBody updateDeets deets ){
        policyService.updateApproval(deets.getPolicy_id(),deets.getUser_id(),deets.getAgent_id(),deets.getStatus());
    }

    @PostMapping("/policyApproval/getAllApproval")
    public List<Approval> getAllApproval(@RequestBody  Map<String,Integer> map){
        return policyService.getAllApproval(map.get("user_id"));
    }

    @PostMapping("/policyApproval/getAllApproved")
    public List<Approved> getAllApproved(@RequestBody Map<String,Integer> map){
        return policyService.getAllApproved(map.get("user_id"));
    }

    @PostMapping("/policyApproval/getApproved")
    public Approved_Policy getApproved(@RequestBody Map<String, Integer> map){
        return policyService.getApproved(map.get("user_id"), map.get("policy_id"));
    }

    @PostMapping("/policyApproval/getApproval")
    public Policy_Approval getApproval(@RequestBody Map<String, Integer> map){
        return policyService.getApproval(map.get("user_id"), map.get("policy_id"));
    }

}

class approvalDeets{
    private int user_id;
    private int policy_id;

    approvalDeets(){}
    public approvalDeets(int user_id, int policy_id) {
        this.user_id = user_id;
        this.policy_id = policy_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getPolicy_id() {
        return policy_id;
    }

    public void setPolicy_id(int policy_id) {
        this.policy_id = policy_id;
    }
}

class updateDeets{
    private int policy_id;
    private int user_id;
    private int agent_id;
    private int status;

    public updateDeets() {}

    public int getAgent_id() {
        return agent_id;
    }

    public void setAgent_id(int agent_id) {
        this.agent_id = agent_id;
    }

    public int getPolicy_id() {
        return policy_id;
    }

    public void setPolicy_id(int policy_id) {
        this.policy_id = policy_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}

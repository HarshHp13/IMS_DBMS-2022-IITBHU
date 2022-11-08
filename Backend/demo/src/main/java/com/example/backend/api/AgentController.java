package com.example.backend.api;

import com.example.backend.models.Agent_info;
import com.example.backend.models.User_info;
import com.example.backend.service.AgentService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
//@RequestMapping("/agents")
public class AgentController {

    private final AgentService agentService;

    AgentController(AgentService agentService){
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


}

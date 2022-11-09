import "./Agent.css"

import React, { useState, useEffect } from 'react'
import UseAxiosPrivate from "../hooks/useAxiosPrivate"
import UseAuth from "../hooks/useAuth"
import { Button,Modal } from "@mui/material"
import AddAdmin from "./AddAdmin"

export default function Agent() {

    const axiosPrivate = UseAxiosPrivate()
    const { auth } = UseAuth()
    const [agents, setAgents] = useState([])
    const [re, setRe] = useState(true)
    const [open,setOpen]=useState(false)

    const onClickHandler = (agent_id) => {
        axiosPrivate.post("/agent/deleteAgent", { agent_id: agent_id }).then((res) => { console.log(res.status); setRe(true) }).catch((error) => console.log(error))
    }


    useEffect(() => {
        if (re) {
            axiosPrivate.post("/agents/getAgentsByBranch", { branch_id: auth.user.branch_id }).then((res) => setAgents(res.data)).catch((error) => console.log(error))
        }
        return () => { setRe(false) }
        // axios.post('http://localhost:8080/agents/getAgentsByBranch', { branch_id: auth.user.branch_id }).then((res) => setAgents(res.data)).catch(err => console.log(err));
    }, [re]);



    return (
        <>
            {/* <div className='agent__heading'><h1>Agents</h1></div> */}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <AddAdmin />
            </Modal>
            <div className="agent__heading"><strong>Agents</strong></div>
            {
                agents.map((agent, index) => (
                    <div className="agent__wrapper" key={index}>
                        <div className="agent__container">
                            <div className="agent__name"><strong>Name: </strong> {agent.first_name} {agent.last_name}</div>
                            <div className="agent__email"><strong>Email: </strong> {agent.email}</div>
                            <div className="agent__dob"><strong>DOB: </strong> {agent.date_of_birth}</div>
                            <div className="agent__gender"><strong>Gender: </strong> {agent.gender}</div>
                            <div className="agent__noOfPolicies"><strong>No. Of Policies: </strong> {agent.no_of_policies}</div>
                        </div>
                        <div className="agent__buttons">
                            <Button className="agent__buttonDelete" onClick={() => { onClickHandler(agent.id) }}>Delete Agent</Button>
                        </div>
                    </div>

                ))
            }
            <div className="agent__wrapper">
                <div className="agent__container"></div>
                <div className="agent__buttons">
                    <Button className="agent__buttonDelete" onClick={()=>setOpen(true)}>Add Agent</Button>
                </div>
            </div>
        </>
    )
}

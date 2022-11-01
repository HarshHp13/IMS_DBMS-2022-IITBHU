package com.example.backend.models;

public class QnA {
    private int qna_id;
    private String answer;
    private String usefulness;
    private int user_id;
    private int agent_id;

    public int getQna_id() {
        return qna_id;
    }

    public void setQna_id(int qna_id) {
        this.qna_id = qna_id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getUsefulness() {
        return usefulness;
    }

    public void setUsefulness(String usefulness) {
        this.usefulness = usefulness;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getAgent_id() {
        return agent_id;
    }

    public void setAgent_id(int agent_id) {
        this.agent_id = agent_id;
    }
}

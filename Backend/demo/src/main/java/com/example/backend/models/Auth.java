package com.example.backend.models;

import lombok.Data;
import org.springframework.data.annotation.Id;

//import javax.persistence.*;


//@Entity
@Data
public class Auth {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String username;
    private String password;

//    @ManyToMany(fetch = FetchType.EAGER)
//    @MappedCollection(idColumn = "roles_id")
//    private Collection<Role> roles=new ArrayList<>();
    private String roles;
    public Auth(){}

    public Auth(String name, String username, String password, String roles) {
//        this.id = id;
        this.name = name;
        this.username = username;
        this.roles = roles;
        this.password=password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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


    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                '}';
    }
}

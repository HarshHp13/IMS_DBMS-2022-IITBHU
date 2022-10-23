package com.example.demo.user;

import com.example.demo.dao.UserRepositry;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
public class UserController implements ApplicationContextAware {

    private static ApplicationContext context;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context=applicationContext;
    }

    @GetMapping("/login")
    public static String userLogin(){
        return "Success";
    }

    //List all users
    @GetMapping("/list")
    public static List<User> listUser(){
        UserRepositry userRepositry=context.getBean(UserRepositry.class);
        Iterable<User> users= userRepositry.findAll();
        List<User> u=new ArrayList<>();
        users.forEach(user -> {u.add(user);});
        return u;
    }

    //get user by id
    @GetMapping("/list/{id}")
    public static Optional<User> getUserById(@PathVariable("id") int id){
        UserRepositry userRepositry=context.getBean(UserRepositry.class);
        Optional<User> user= userRepositry.findById(id);
        return user;
    }

    //insert user
    @PostMapping("/insert")
    public static User insertUser(@RequestBody User u){
        UserRepositry userRepositry=context.getBean(UserRepositry.class);
        User user=new User();
        user.setName(u.getName());
        user.setEmail(u.getEmail());
        user.setIncome(u.getIncome());
        user.setAge(u.getAge());

        User user1=userRepositry.save(user);

        return user1;
    }


    //delete user by id
    @DeleteMapping("/delete/{id}")
    public static void deleteUserById(@PathVariable("id") int id){
        UserRepositry userRepositry=context.getBean(UserRepositry.class);
        userRepositry.deleteById(id);
    }


}

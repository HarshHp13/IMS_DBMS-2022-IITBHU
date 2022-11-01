package com.example.backend.api;

import com.example.backend.dao.UserDao;
import com.example.backend.dao.UserRepositry;
import com.example.backend.models.User;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
public class UserController implements ApplicationContextAware {

    private UserDao userDao;
    private AuthDao authDao;


    @Autowired
    public void setUserDao(UserDao userDao){
        this.userDao=userDao;
    }

    @Autowired
    public void setAuthDao(AuthDao authDao){
        this.authDao=authDao;
    }


    @Autowired
    private static ApplicationContext context;
//    public static List<Auth> userList= new ArrayList<>();
//    @Autowired
//    private static AuthenticationManagerBuilder auth;

    @Bean
    private PasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context=applicationContext;
    }

//    @Autowired
    private HttpSession session;

    @Autowired
    public void setSession(HttpSession session){
        this.session=session;
    }

//    @Bean
//    public static PasswordEncoder passwordEncdr(){
//        return new BCryptPasswordEncoder();
//    }

    @GetMapping("/")
    public String userLogin(){
        try{System.out.println(session.getAttribute("USER_SESSION").toString());}catch (Exception e){System.out.println(e);}
        return "Success";
    }

//    @PostMapping(value = "/signUp", consumes ={MediaType.APPLICATION_FORM_URLENCODED_VALUE})
//    public void SignUp(Auth auth) {
////        System.out.println(auth);
////        AuthRepository authRepositry=context.getBean(AuthRepository.class);
////        Auth auth1=new Auth();
////        auth1.setUsername(auth.getUsername());
////        auth1.setPassword(encoder().encode(auth.getPassword()));
//        String username=auth.getUsername();
//        String password=encoder().encode(auth.getPassword());
////        UsernamePasswordAuthenticationToken
//        Authentication ath;
//        Authentication a=SecurityContextHolder.getContext().getAuthentication();
//        System.out.println(a);
//
//
//////        authRepositry.save(auth1);
//////        TimeUnit.SECONDS.sleep(1);
//////        Thread restartThread = new Thread(() -> {
//////            try {
////////                Thread.sleep(1000);
//////                DemoApplication.restart();
//////            } catch (Exception ignored) {
//////            }
//////        });
//////        restartThread.setDaemon(false);
//////        restartThread.start();
//////        authDao.createTable();
////        session.setAttribute("USER_SESSION", username);
////        try{System.out.println(session.getAttribute("USER_SESSION").toString());}catch (Exception e){System.out.println(e);}
////        System.out.println(this.authDao.insertAuth(93,username, password));
//
////        System.out.println(this.authDao.insertAuth(auth1.getUsername(), auth1.getPassword()));
//
//    }


    //List all users
    @GetMapping("/list")
    public List<User> listUser(){
        System.out.println(this.userDao.createTable());
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

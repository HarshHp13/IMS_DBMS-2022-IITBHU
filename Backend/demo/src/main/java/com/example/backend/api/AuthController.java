package com.example.backend.api;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.backend.models.User_info;
import com.example.backend.service.AuthService;
import com.example.backend.models.Auth;
import com.example.backend.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthController {
    private final AuthService authService;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    public AuthController(AuthService authService, PasswordEncoder passwordEncoder, UserService userService){
        this.authService = authService;
        this.passwordEncoder=passwordEncoder;
        this.userService=userService;
    }

    @GetMapping("/auths")
    public ResponseEntity<List<Auth>>getAuths(){
        return ResponseEntity.ok().body(authService.getAuths());
    }

    @GetMapping("/refreshToken")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                Auth auth = authService.getAuth(username);
                List<String> roles=new ArrayList<>();
                roles.add(auth.getRoles());
                String access_token= JWT.create()
                        .withSubject(auth.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10*60*1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles",roles)
                        .sign(algorithm);


                response.setHeader("access_token", access_token);
                response.setHeader("refresh_token", refresh_token);

            } catch (Exception e) {
                response.setHeader("error", e.getMessage());
                response.setStatus(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", e.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        }
        else {
            throw new RuntimeException("Missing Refresh Token");
        }

    }

    @PostMapping("/auth/checkRole")
    public boolean checkRole(@RequestBody Map<String,String> mp){
        return authService.checkRole(mp.get("username"), mp.get("role") );
    }

    @PostMapping(value = "/signUp", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public void userSignUp(SignUpForm frm) {
        System.out.println(frm.toString());
        Auth auth = new Auth(frm.getUsername(), frm.getPassword(), "USER");
        authService.saveAuth(auth);
        authService.addRoleToAuth(frm.getUsername(), "USER");

        User_info user_info = new User_info();
        user_info.setCity(frm.getCity());
        user_info.setMarital_status(frm.getMaritalStatus());
        user_info.setEmail(frm.getUsername());
        user_info.setIncome(frm.getIncome());
        user_info.setDate_of_birth(frm.getDate());
        user_info.setFirst_name(frm.getFname());
        user_info.setLast_name(frm.getLname());
        user_info.setGender(frm.getGender());
        user_info.setHouse(frm.getHouse());
        user_info.setProfession(frm.getProfession());
        user_info.setZipcode(frm.getZipcode());
        user_info.setStreet(frm.getStreet());
        user_info.setState(frm.getState());
        user_info.setDate_of_birth(frm.getDate());
        user_info.setAge(frm.getAge());
//        user_info.setSignUp_date(frm.getSignUp_date());
//        System.out.println(frm.getSignUp_date());
        Auth a = authService.getAuth(frm.getUsername());
        userService.saveUser(user_info, a.getId());
    }




}

class RoleToUserForm{
    private String username;
    private String rolename;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }
}

class SignUpForm{
    private String username;
    private String password;
    private String fname;
    private String lname;
    private String date;
    private int age;
//    private String signUp_date;
    private String house;
    private String street;
    private String city;
    private String state;
    private String zipcode;
    private int income;
    private String profession;
    private String gender;
    private String maritalStatus;
    private String phone;





    public SignUpForm() {
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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

    public String getDate() {
        return date;
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

    public int getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
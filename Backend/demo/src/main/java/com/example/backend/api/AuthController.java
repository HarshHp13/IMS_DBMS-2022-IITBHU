package com.example.backend.api;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.backend.service.AuthService;
import com.example.backend.models.Auth;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthController {
    private final AuthService authService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthService authService, PasswordEncoder passwordEncoder){
        this.authService = authService;
        this.passwordEncoder=passwordEncoder;
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

    @PostMapping(value = "/signUp", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public void userSignUp(SignUpForm frm){
        Auth auth =new Auth(frm.getUsername(), frm.getPassword(), "USER");
        authService.saveAuth(auth);
        authService.addRoleToAuth(frm.getUsername(),"USER");

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

    public SignUpForm(){}

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
}
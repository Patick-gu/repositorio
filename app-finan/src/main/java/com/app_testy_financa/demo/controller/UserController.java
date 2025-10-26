package com.app_testy_financa.demo.controller;

import com.app_testy_financa.demo.Model.user;
import com.app_testy_financa.demo.Repository.userRepository;
import com.app_testy_financa.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;


@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:58091")
public class UserController {
    @Autowired
    userRepository userRepository;

    user User= new user();
    @Autowired
    private UserService userService;

    @PostMapping("/Create")
    public ResponseEntity<user> CreateUSER(@RequestBody user User){
        User = userService.createUser(User);
        return ResponseEntity.ok(User);
    }

}

package com.example.login_app.controller;


import com.example.login_app.model.User;
import com.example.login_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
    public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable Long id) {

        return userService.getUserById(id);
    }
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.login(user);
    }
    }


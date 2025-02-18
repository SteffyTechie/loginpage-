package com.example.login_app.service;

import com.example.login_app.model.User;
import com.example.login_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
public User getUserById(Long id){


    return userRepository.findById(id).orElse(null);
}

    public User login(User user) {
    return userRepository.findByUsernameAndPassword(user.getUsername(),user.getPassword());
    }
}

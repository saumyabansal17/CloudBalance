package com.saumya.cloudbalance.controller;

import com.saumya.cloudbalance.dto.AddUserDto;
import com.saumya.cloudbalance.dto.UserDetailsDto;
import com.saumya.cloudbalance.dto.UpdateUserDto;
import com.saumya.cloudbalance.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/getAll")
    public List<UserDetailsDto> getAllUsers(){
        List<UserDetailsDto> res=userService.getAllUsers();
        return res;
    }

    @GetMapping("/get/{id}")
    public UserDetailsDto getUserById(@PathVariable Long id){
        UserDetailsDto res=userService.getUser(id);
        return res;
    }

    @PostMapping("/add")
    public String addUser(@RequestBody AddUserDto user){
        String res= userService.addUser(user);
        return res;
    }

    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable Long id,@Valid @RequestBody UpdateUserDto user){
        String res= userService.updateUser(id,user);
        return res;
    }
}
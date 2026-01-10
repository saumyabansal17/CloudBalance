package com.saumya.cloudbalance.controller;

import com.saumya.cloudbalance.dto.AddUserDto;
import com.saumya.cloudbalance.dto.UserDetailsDto;
import com.saumya.cloudbalance.dto.UpdateUserDto;
import com.saumya.cloudbalance.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final UserService userService;

    @PreAuthorize("hasAnyRole('ADMIN','READ-ONLY')")
    @GetMapping
    public ResponseEntity<List<UserDetailsDto>> getAllUsers(){
        List<UserDetailsDto> res=userService.getAllUsers();
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAnyRole('ADMIN','READ-ONLY')")
    @GetMapping("/get/{id}")
    public ResponseEntity<UserDetailsDto> getUserById(@PathVariable Long id){
        UserDetailsDto res=userService.getUser(id);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<String> addUser( @Valid @RequestBody AddUserDto user){
        System.out.println("Inside Controller");
        String res= userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id,@Valid @RequestBody UpdateUserDto user){
        String res= userService.updateUser(id,user);
        return ResponseEntity.ok(res);
    }
}
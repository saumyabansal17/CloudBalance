package com.saumya.cloudbalance.controller;

import com.saumya.cloudbalance.dto.AddUserRequestDto;
import com.saumya.cloudbalance.dto.ProfileResponseDto;
import com.saumya.cloudbalance.dto.GetUserResponseDto;
import com.saumya.cloudbalance.dto.UpdateUserRequestDto;
import com.saumya.cloudbalance.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
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
    public ResponseEntity<List<GetUserResponseDto>> getAllUsers(){
        List<GetUserResponseDto> res=userService.getAllUsers();
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAnyRole('ADMIN','READ-ONLY')")
    @GetMapping("/get/{id}")
    public ResponseEntity<GetUserResponseDto> getUserById(@PathVariable Long id){
        GetUserResponseDto res=userService.getUser(id);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<String> addUser( @Valid @RequestBody AddUserRequestDto user){
        System.out.println("Inside Controller");
        String res= userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id,@Valid @RequestBody UpdateUserRequestDto user){
        String res= userService.updateUser(id,user);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/profile")
    public ResponseEntity<ProfileResponseDto> getInfo(Authentication authentication){
        ProfileResponseDto res=userService.getInfo(authentication);
        return ResponseEntity.ok(res);

    }
}
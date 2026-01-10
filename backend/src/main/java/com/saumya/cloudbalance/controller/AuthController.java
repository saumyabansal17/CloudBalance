package com.saumya.cloudbalance.controller;

import com.saumya.cloudbalance.dto.LoginRequestDto;
import com.saumya.cloudbalance.dto.LoginResponseDto;
import com.saumya.cloudbalance.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequestDto req){
        LoginResponseDto res=authService.login(req);
        return ResponseEntity.ok(res);
    }
}

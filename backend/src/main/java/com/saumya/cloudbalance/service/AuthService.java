package com.saumya.cloudbalance.service;

import com.saumya.cloudbalance.dto.LoginRequestDto;
import com.saumya.cloudbalance.dto.LoginResponseDto;
import com.saumya.cloudbalance.entity.User;
import com.saumya.cloudbalance.exception.UserNotFoundException;
import com.saumya.cloudbalance.repository.UserRepository;
import com.saumya.cloudbalance.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public LoginResponseDto login(LoginRequestDto request) {

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            String token = jwtUtil.generateTokenFromUsername(request.getEmail());

            User user = userRepository
                    .findByEmail(request.getEmail())
                    .orElseThrow(() -> new UserNotFoundException("User not found"));

            LoginResponseDto res = new LoginResponseDto();
            res.setToken(token);
            res.setName(user.getFirstName() + " " + user.getLastName());
            res.setRole(user.getRole().getRole());
            user.setLastLoginTime(LocalDateTime.now());
            userRepository.save(user);
            return res;

        }

}

package com.saumya.cloudbalance.service;

import com.saumya.cloudbalance.dto.AddUserDto;
import com.saumya.cloudbalance.dto.UserDetailsDto;
import com.saumya.cloudbalance.dto.UpdateUserDto;
import com.saumya.cloudbalance.entity.Role;
import com.saumya.cloudbalance.entity.User;
import com.saumya.cloudbalance.exception.RoleNotFoundException;
import com.saumya.cloudbalance.exception.UserNotFoundException;
import com.saumya.cloudbalance.repository.RoleRepository;
import com.saumya.cloudbalance.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public List<UserDetailsDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user ->
                    UserDetailsDto.builder()
                            .id(user.getId())
                            .firstName(user.getFirstName())
                            .lastName(user.getLastName())
                            .email(user.getEmail())
                            .lastLoginTime(user.getLastLoginTime())
                            .roleId(user.getRole().getId())
                            .role(user.getRole().getRole())
                            .build()
                    )
                .toList();
    }

    public UserDetailsDto getUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(()->new UserNotFoundException("User not found"));
        UserDetailsDto result = UserDetailsDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .lastLoginTime(user.getLastLoginTime())
                .role(user.getRole().getRole())
                .build();
        return result;
    }

    public String addUser(AddUserDto user) {
        Role role=roleRepository.findById(user.getRoleId()).orElseThrow(()->new RoleNotFoundException("Role Not Found"));
        System.out.println("hi");
        User newUser = User.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .password(passwordEncoder.encode(user.getPassword()))
                .role(role)
                .build();
        System.out.println("newUser");
        userRepository.save(newUser);
        return "User added";
    }

    public String updateUser(Long id, UpdateUserDto user) {
        User oldUser=userRepository.findById(id).orElseThrow(()->new UserNotFoundException("User Not found"));
        Role role=roleRepository.findById(user.getRoleId()).orElseThrow(()->new RoleNotFoundException("Role Not found"));

        oldUser.setFirstName(user.getFirstName());
        oldUser.setLastName(user.getLastName());
        oldUser.setEmail(user.getEmail());
        oldUser.setRole(role);

        userRepository.save(oldUser);
        return "User updated";
    }

}

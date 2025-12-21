package com.saumya.cloudbalance.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddUserDto {
    String firstName;

    String lastName;

    String email;

    String password;

    int roleId;

//    String role;
}

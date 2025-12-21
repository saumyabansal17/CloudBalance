package com.saumya.cloudbalance.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserDto {
    String firstName;

    String lastName;

    String email;

    int roleId;

//    String role;
}

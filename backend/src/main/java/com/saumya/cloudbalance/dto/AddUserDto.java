package com.saumya.cloudbalance.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddUserDto {
    @NotBlank
    String firstName;

    @NotBlank
    String lastName;

    @Email
            @NotBlank
    String email;

    @NotBlank
    String password;

    @NotNull
    int roleId;

}

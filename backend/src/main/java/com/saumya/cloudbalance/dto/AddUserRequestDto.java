package com.saumya.cloudbalance.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddUserRequestDto {
    @NotBlank(message = "Firstname should not be empty")
    String firstName;

    @NotBlank(message = "Lastname should not be empty")
    String lastName;

    @Email(message = "Please provide a valid email address")
            @NotBlank(message = "Email address should not be empty")
    String email;

    @NotBlank(message = "Password should not be empty")
    String password;

    @NotNull(message = "Role should not be empty")
    int roleId;

    List<Long> accountIds;

}

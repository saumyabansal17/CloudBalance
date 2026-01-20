package com.saumya.cloudbalance.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserRequestDto {
    @NotBlank(message = "Firstname should not be empty")
    String firstName;

    @NotBlank(message = "Lastname should not be empty")
    String lastName;

    @NotBlank(message = "Email address should not be empty")
            @Email(message = "Please enter the valid email address")
    String email;

    @NotNull(message = "Role should not be empty")
    int roleId;

    List<Long> accountIds;

}

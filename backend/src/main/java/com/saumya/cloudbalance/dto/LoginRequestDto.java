package com.saumya.cloudbalance.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequestDto {
    @Email(message = "Please enter the valid email address")
            @NotBlank(message = "Email address should not be empty")
    String email;

    @NotBlank(message = "Password should not be empty")
    String password;
}

package com.saumya.cloudbalance.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserDto {
    @NotBlank
    String firstName;

    @NotBlank
    String lastName;

    @NotBlank
            @Email
    String email;

    @NotNull
    int roleId;

    List<Long> accountIds;

//    String role;
}

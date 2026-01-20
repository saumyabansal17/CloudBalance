package com.saumya.cloudbalance.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor @AllArgsConstructor
@Builder
public class GetUserResponseDto {
    Long id;

    String firstName;

    String lastName;

    String email;

    LocalDateTime lastLoginTime;

    Integer roleId;

    String role;
}

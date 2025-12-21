package com.saumya.cloudbalance.dto;

import com.saumya.cloudbalance.entity.Role;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.LocalDateTime;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class UserDetailsDto{
    Long id;

    String firstName;

    String lastName;

    String email;

    LocalDateTime lastLoginTime;

    Integer roleId;

    String role;
}

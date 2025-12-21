package com.saumya.cloudbalance.entity;

import com.saumya.cloudbalance.enums.Roles;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name="firstname",nullable = false)
    String firstName;

    @Column(name="lastname",nullable = false)
    String lastName;

    @Column(nullable = false)
    String email;

    @Column(nullable = false)
    String password;

    LocalDateTime lastLoginTime;

    @ManyToOne
    @JoinColumn(name="role_id")
    Role role;

////    @NotBlank
//            @Column(nullable = false)
//            @Enumerated(EnumType.STRING)
//    Roles role;

//    int isActive;

}

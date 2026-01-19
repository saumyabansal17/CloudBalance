package com.saumya.cloudbalance.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
@Builder
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name="firstname",nullable = false)
            @NotBlank
    String firstName;

    @Column(name="lastname",nullable = false)
            @NotBlank
    String lastName;

    @Column(nullable = false)
            @Email
            @NotBlank
    String email;

    @Column(nullable = false)
            @NotBlank
    String password;

    LocalDateTime lastLoginTime;

    @ManyToOne
    @JoinColumn(name="role_id",nullable = false)
            @NotNull
    Role role;

    @ManyToMany
    @Builder.Default
    @JoinTable(
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "account_id")
    )
    List<Account> accounts=new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.getRole()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }


}

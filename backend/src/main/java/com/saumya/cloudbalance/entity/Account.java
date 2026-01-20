package com.saumya.cloudbalance.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Account {

    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;

    @NotBlank(message = "ARN number should not be empty")
    @Column(nullable = false,unique=true)
    String awsARN;

    @NotBlank(message = "Account Name should not be empty")
    @Column(nullable = false,unique = true)
    String accountName;

    @NotNull(message = "Account Id should not be empty")
            @Column(nullable = false,unique = true)
    @Min(value = 1000000000L, message = "Account Id must be exactly 10 digits")
    @Max(value = 9999999999L, message = "Account Id must be exactly 10 digits")
    Long awsId;

    @ManyToMany(mappedBy = "accounts")
    @Builder.Default
    List<User> users=new ArrayList<>();
}

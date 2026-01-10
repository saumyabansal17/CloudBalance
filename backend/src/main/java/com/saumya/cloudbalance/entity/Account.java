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

    @NotBlank
    @Column(nullable = false,unique=true)
    String awsARN;

    @NotBlank
    @Column(nullable = false,unique = true)
    String accountName;

    @NotNull
            @Column(nullable = false,unique = true)
    @Min(1000000000L)
    @Max(9999999999L)
    Long awsId;

    @ManyToMany(mappedBy = "accounts")
    List<User> users=new ArrayList<>();
}

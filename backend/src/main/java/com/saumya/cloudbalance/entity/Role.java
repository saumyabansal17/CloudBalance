package com.saumya.cloudbalance.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor @AllArgsConstructor
@Setter @Getter
@Entity
public class Role {

    @Id
    int id;

    @Column(nullable = false)
    String role;
}

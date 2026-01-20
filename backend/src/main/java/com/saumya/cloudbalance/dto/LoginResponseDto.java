package com.saumya.cloudbalance.dto;

import lombok.*;
import org.springframework.stereotype.Service;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDto {
    String token;
}

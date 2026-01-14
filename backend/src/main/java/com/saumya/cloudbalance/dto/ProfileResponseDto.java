package com.saumya.cloudbalance.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProfileResponseDto {
    String name;
    String role;
}

package com.saumya.cloudbalance.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MonthlyCostDto {
    private String service;

    // Month -> Cost (order preserved)
    private LinkedHashMap<String, BigDecimal> monthlyCost;
}

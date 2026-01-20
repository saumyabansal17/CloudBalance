package com.saumya.cloudbalance.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MonthlyCostDto {
    private String groupBy;

    private LinkedHashMap<String, BigDecimal> monthlyCost;
}

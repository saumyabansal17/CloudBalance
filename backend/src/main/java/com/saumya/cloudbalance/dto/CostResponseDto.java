package com.saumya.cloudbalance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CostResponseDto {
    private List<String> months;

    private List<MonthlyCostDto> data;
}


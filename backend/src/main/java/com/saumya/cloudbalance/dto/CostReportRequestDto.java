package com.saumya.cloudbalance.dto;

import com.saumya.cloudbalance.enums.GroupField;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
public class CostReportRequestDto {
    private String startDate;
    private String endDate;
    private GroupField groupBy;
    private Map<String, List<String>> filters;
}

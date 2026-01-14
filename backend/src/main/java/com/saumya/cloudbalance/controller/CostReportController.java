package com.saumya.cloudbalance.controller;

import com.saumya.cloudbalance.dto.MonthlyCostDto;
import com.saumya.cloudbalance.service.CostReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/report")
@RequiredArgsConstructor
public class CostReportController {

    private final CostReportService costReportService;
    @GetMapping
    public List<MonthlyCostDto> customers(@RequestParam String startDate, @RequestParam String endDate,@RequestParam(defaultValue = "SERVICE") String groupBy) {
        return costReportService.getMonthlyCostByService(startDate,endDate,groupBy);
    }
}

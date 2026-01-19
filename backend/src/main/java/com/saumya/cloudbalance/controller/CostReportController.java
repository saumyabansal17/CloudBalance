package com.saumya.cloudbalance.controller;

import com.saumya.cloudbalance.dto.CostReportRequestDto;
import com.saumya.cloudbalance.dto.MonthlyCostDto;
import com.saumya.cloudbalance.service.CostReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/report")
@RequiredArgsConstructor
public class CostReportController {

    private final CostReportService costReportService;
    @PostMapping
    public List<MonthlyCostDto> customers(
            @RequestBody CostReportRequestDto request
    ) {
        return costReportService.getMonthlyCost(
                request.getStartDate(),
                request.getEndDate(),
                request.getGroupBy(),
                request.getFilters()
        );
    }


    @GetMapping
    public ResponseEntity<Map<String, List<String>>> getFilters(Authentication authentication) {
        boolean isCustomer = authentication.getAuthorities()
                .stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_CUSTOMER"));

        return ResponseEntity.ok(costReportService.getAllFilterOptions(isCustomer));
    }
}

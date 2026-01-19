package com.saumya.cloudbalance.service;

import com.saumya.cloudbalance.dto.MonthlyCostDto;
import com.saumya.cloudbalance.enums.GroupField;
import com.saumya.cloudbalance.repository.CostReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CostReportService {

    private final CostReportRepository repository;

    public List<MonthlyCostDto> getMonthlyCost(
            String startDate,
            String endDate,
            GroupField groupBy,
            Map<String, List<String>> filters
    ) {

        List<Map<String, Object>> rows =
                repository.fetchMonthlyCost(startDate, endDate, groupBy, filters);

        LinkedHashMap<String, LinkedHashMap<String, BigDecimal>> result =
                new LinkedHashMap<>();

        for (Map<String, Object> row : rows) {
            String month = row.get("MONTH").toString();
            String key = row.get("GROUP_KEY").toString();
            BigDecimal cost = row.get("TOTAL_COST") == null
                    ? BigDecimal.ZERO
                    : new BigDecimal(row.get("TOTAL_COST").toString());

            result.computeIfAbsent(key, k -> new LinkedHashMap<>())
                    .put(month, cost);
        }

        return result.entrySet()
                .stream()
                .map(e -> new MonthlyCostDto(e.getKey(), e.getValue()))
                .toList();
    }

    public Map<String, List<String>> getAllFilterOptions(boolean isCustomer) {

        Map<String, List<String>> filters = new LinkedHashMap<>();

        for (GroupField field : GroupField.values()) {

            if (isCustomer && field == GroupField.ACCOUNT_ID) {
                continue;
            }

            filters.put(
                    field.name(),
                    repository.fetchDistinctValues(field.name())
            );
        }

        return filters;
    }
}

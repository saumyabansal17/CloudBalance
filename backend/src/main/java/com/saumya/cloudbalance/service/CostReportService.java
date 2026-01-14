package com.saumya.cloudbalance.service;

import com.saumya.cloudbalance.dto.MonthlyCostDto;
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

    private BigDecimal toBigDecimal(Object value) {
        return value == null
                ? BigDecimal.ZERO
                : BigDecimal.valueOf(((Number) value).doubleValue());
    }

    public List<MonthlyCostDto> getMonthlyCostByService(
            String startDate,
            String endDate,
            String groupBy
    ) {

        List<Map<String, Object>> rows =
                repository.fetchMonthlyCost(startDate, endDate,groupBy);

        LinkedHashMap<String, LinkedHashMap<String, BigDecimal>> serviceMap =
                new LinkedHashMap<>();

        for (Map<String, Object> row : rows) {

            String month = row.get("MONTH").toString();
            String service = row.get("GROUP_KEY").toString();
            BigDecimal cost = toBigDecimal(row.get("TOTAL_COST"));

            serviceMap
                    .computeIfAbsent(service, k -> new LinkedHashMap<>())
                    .put(month, cost);
        }

        return serviceMap.entrySet()
                .stream()
                .map(e -> new MonthlyCostDto(e.getKey(), e.getValue()))
                .toList();
    }
}



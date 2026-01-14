package com.saumya.cloudbalance.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class CostReportRepository {
    private final JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> fetchMonthlyCost(
            String startDate,
            String endDate,
            String groupBy
    ) {

        String sql = """
            SELECT 
                TO_VARCHAR(DATE_TRUNC('MONTH', BILL_DATE), 'YYYY-MM') AS MONTH,
                %s AS GROUP_KEY,
                SUM(COST) AS TOTAL_COST
            FROM COST_REPORT
            WHERE BILL_DATE BETWEEN ? AND ?
            GROUP BY MONTH, %s
            ORDER BY MONTH
        """.formatted(groupBy, groupBy);

        return jdbcTemplate.queryForList(sql, startDate, endDate);    }
}

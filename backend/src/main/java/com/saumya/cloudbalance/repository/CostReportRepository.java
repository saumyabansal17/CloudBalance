package com.saumya.cloudbalance.repository;

import com.saumya.cloudbalance.enums.GroupField;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class CostReportRepository {

    private final JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> fetchMonthlyCost(
            String startDate,
            String endDate,
            GroupField groupBy,
            Map<String, List<String>> filters
    ) {

        StringBuilder sql = new StringBuilder("""
            SELECT 
                TO_VARCHAR(DATE_TRUNC('MONTH', BILL_DATE), 'YYYY-MM') AS MONTH,
                %s AS GROUP_KEY,
                SUM(COST) AS TOTAL_COST
            FROM COST_REPORT
            WHERE BILL_DATE BETWEEN ? AND ?
        """.formatted(groupBy));

        List<Object> params = new ArrayList<>();
        params.add(startDate);
        params.add(endDate);

        if (filters != null && !filters.isEmpty()) {
            for (Map.Entry<String, List<String>> entry : filters.entrySet()) {

                if (!GroupField.isValid(entry.getKey())) {
                    continue;
                }

                List<String> values = entry.getValue();
                if (values != null && !values.isEmpty()) {
                    sql.append(" AND ").append(entry.getKey()).append(" IN (");
                    sql.append(values.stream().map(v -> "?").collect(Collectors.joining(",")));
                    sql.append(") ");
                    params.addAll(values);
                }
            }
        }

        sql.append(" GROUP BY MONTH, ").append(groupBy)
                .append(" ORDER BY MONTH");

        return jdbcTemplate.queryForList(sql.toString(), params.toArray());
    }

    public List<String> fetchDistinctValues(String column) {

        String sql = String.format(
                "SELECT DISTINCT %s FROM COST_REPORT WHERE %s IS NOT NULL ORDER BY %s",
                column, column, column
        );

        return jdbcTemplate.query(
                sql,
                (rs, rowNum) -> rs.getString(1)
        );
    }
}

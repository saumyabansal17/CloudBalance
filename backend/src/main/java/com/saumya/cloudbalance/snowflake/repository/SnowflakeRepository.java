package com.saumya.cloudbalance.snowflake.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class SnowflakeRepository {

    private final JdbcTemplate jdbcTemplate;

    public SnowflakeRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;

    }

    public List<Map<String, Object>> getCustomerReport() {
        String sql = "SELECT * FROM CUSTOMER LIMIT 10";
        return jdbcTemplate.queryForList(sql);
    }
}


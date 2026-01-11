package com.saumya.cloudbalance.snowflake.service;

import com.saumya.cloudbalance.snowflake.repository.SnowflakeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class SnowflakeService {

    private final SnowflakeRepository repo;

    public SnowflakeService(SnowflakeRepository repo) {
        this.repo = repo;
    }

    public List<Map<String, Object>> fetchReport() {
        return repo.getCustomerReport();
    }
}


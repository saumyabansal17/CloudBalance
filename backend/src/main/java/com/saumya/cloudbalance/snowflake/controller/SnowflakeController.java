package com.saumya.cloudbalance.snowflake.controller;

import com.saumya.cloudbalance.snowflake.service.SnowflakeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reports")
public class SnowflakeController {

    private final SnowflakeService service;

    public SnowflakeController(SnowflakeService service) {
        this.service = service;
    }

    @GetMapping("/customers")
    public List<Map<String, Object>> customers() {
        return service.fetchReport();
    }
}


package com.saumya.cloudbalance.configuration;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
public class SnowflakeConfig {

    @Value("${spring.snowflake.datasource.url}")
    private String url;

    @Value("${spring.snowflake.datasource.username}")
    private String username;

    @Value("${spring.snowflake.datasource.password}")
    private String password;

    @Bean(name = "snowflakeDataSource")
    public DataSource snowflakeDataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(url);
        config.setUsername(username);
        config.setPassword(password);
        config.setDriverClassName("net.snowflake.client.jdbc.SnowflakeDriver");

        config.setAutoCommit(true);
        config.setMaximumPoolSize(5);
        config.setMinimumIdle(0);
        config.setInitializationFailTimeout(-1);
        return new HikariDataSource(config);
    }

    @Bean(name = "snowflakeJdbcTemplate")
    public JdbcTemplate snowflakeJdbcTemplate(
            @Qualifier("snowflakeDataSource") DataSource ds) {
        return new JdbcTemplate(ds);
    }
}
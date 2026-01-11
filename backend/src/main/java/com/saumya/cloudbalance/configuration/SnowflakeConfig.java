//package com.saumya.cloudbalance.configuration;
//
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.boot.jdbc.DataSourceBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@Configuration
//@EnableJpaRepositories(
//        basePackages = "com.saumya.cloudbalance.snowflake.repository",
//        entityManagerFactoryRef = "snowflakeEntityManager",
//        transactionManagerRef = "snowflakeTransactionManager"
//)
//public class SnowflakeConfig {
//
//    @Bean
//    @ConfigurationProperties(prefix = "spring.datasource.snowflake")
//    public DataSource snowflakeDataSource() {
//        return DataSourceBuilder.create().build();
//    }
//
//    @Bean
//    public LocalContainerEntityManagerFactoryBean snowflakeEntityManager(@Qualifier("snowflakeDataSource") DataSource dataSource) {
//        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
//        em.setDataSource(dataSource);
//        em.setPackagesToScan("com.saumya.cloudbalance.snowflake.entity");
//
//        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
//        em.setJpaVendorAdapter(vendorAdapter);
//
//        Map<String, Object> properties = new HashMap<>();
//        properties.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect"); // Snowflake uses ANSI SQL
//        properties.put("hibernate.hbm2ddl.auto", "none");
//
//        em.setJpaPropertyMap(properties);
//        return em;
//    }
//
//    @Bean
//    public PlatformTransactionManager snowflakeTransactionManager(@Qualifier("snowflakeEntityManager") LocalContainerEntityManagerFactoryBean snowflakeEntityManager) {
//        return new JpaTransactionManager(snowflakeEntityManager.getObject());
//    }
//}

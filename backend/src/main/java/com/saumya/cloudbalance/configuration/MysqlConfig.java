//package com.saumya.cloudbalance.configuration;
//
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.boot.jdbc.DataSourceBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
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
//        basePackages = "com.saumya.cloudbalance.repository",
//        entityManagerFactoryRef = "mysqlEntityManager",
//        transactionManagerRef = "mysqlTransactionManager"
//)
//public class MysqlConfig {
//
//    @Primary
//    @Bean
//    @ConfigurationProperties(prefix = "spring.datasource.mysql")
//    public DataSource mysqlDataSource() {
//        return DataSourceBuilder.create().build();
//    }
//
//    @Primary
//    @Bean
//    public LocalContainerEntityManagerFactoryBean mysqlEntityManager(@Qualifier("mysqlDataSource") DataSource dataSource) {
//        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
//        em.setDataSource(dataSource);
//        em.setPackagesToScan("com.saumya.cloudbalance.entity");
//
//        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
//        em.setJpaVendorAdapter(vendorAdapter);
//
//        Map<String, Object> properties = new HashMap<>();
//        properties.put("hibernate.hbm2ddl.auto", "update");
//        properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL8Dialect");
//
//        em.setJpaPropertyMap(properties);
//        return em;
//    }
//
//    @Primary
//    @Bean
//    public PlatformTransactionManager mysqlTransactionManager(@Qualifier("mysqlEntityManager") LocalContainerEntityManagerFactoryBean mysqlEntityManager) {
//        return new JpaTransactionManager(mysqlEntityManager.getObject());
//    }
//}

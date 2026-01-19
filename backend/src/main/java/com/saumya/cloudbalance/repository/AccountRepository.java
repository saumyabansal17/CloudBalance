package com.saumya.cloudbalance.repository;

import com.saumya.cloudbalance.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account,Long> {
    List<Account> findAllByAwsIdIn(List<Long> accountIds);

    List<Account> findByUsers_Id(Long userId);

    boolean existsByAwsARN(String awsARN);

    boolean existsByAccountName(String accountName);

    boolean existsByAwsId(Long awsId);

    long countByAwsIdIn(List<Long> awsIds);

}

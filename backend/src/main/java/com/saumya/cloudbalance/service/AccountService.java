package com.saumya.cloudbalance.service;

import com.saumya.cloudbalance.dto.AccountDetailsDto;
import com.saumya.cloudbalance.dto.AddAccountDto;
import com.saumya.cloudbalance.dto.UserDetailsDto;
import com.saumya.cloudbalance.entity.Account;
import com.saumya.cloudbalance.entity.User;
import com.saumya.cloudbalance.exception.UserNotFoundException;
import com.saumya.cloudbalance.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    public String addAccount(AddAccountDto req){
        Account newAcc = Account.builder()
                .awsARN(req.getAwsArn())
                .accountName(req.getAccountName())
                .awsId(req.getAccountId())
                .build();
        System.out.println("newUser");
        accountRepository.save(newAcc);
        return "Account added";
    }

    public List<AccountDetailsDto> getAllAccount() {
        List<Account> accounts = accountRepository.findAll();
        return accounts.stream()
                .map(account ->
                        AccountDetailsDto.builder()
                                .accountName(account.getAccountName())
                                .awsId(account.getAwsId())
                                .build()
                )
                .toList();
    }

    public List<AccountDetailsDto> getAccountByUser(Long id) {
        System.out.println(id);
        List<Account> accounts = accountRepository.findByUsers_Id(id);
        System.out.println(accounts);
        return accounts.stream()
                .map(account ->
                        AccountDetailsDto.builder()
                                .accountName(account.getAccountName())
                                .awsId(account.getAwsId())
                                .build()
                )
                .toList();
    }

}

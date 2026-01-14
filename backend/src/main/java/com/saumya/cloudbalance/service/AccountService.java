package com.saumya.cloudbalance.service;

import com.saumya.cloudbalance.dto.AccountDetailsDto;
import com.saumya.cloudbalance.dto.AddAccountRequestDto;
import com.saumya.cloudbalance.entity.Account;
import com.saumya.cloudbalance.exception.CustomException;
import com.saumya.cloudbalance.repository.AccountRepository;
import com.saumya.cloudbalance.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;
    private final UserRepository userRepository;

    public String addAccount(AddAccountRequestDto req){
        if (accountRepository.existsByAwsARN(req.getAwsArn())) {
            throw new CustomException(
                    "AWS ARN already exists",
                    HttpStatus.CONFLICT
            );
        }

        if (accountRepository.existsByAccountName(req.getAccountName())) {
            throw new CustomException(
                    "Account name already exists",
                    HttpStatus.CONFLICT
            );
        }

        if (accountRepository.existsByAwsId(req.getAccountId())) {
            throw new CustomException(
                    "AWS Account ID already exists",
                    HttpStatus.CONFLICT
            );
        }

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
        if (!userRepository.existsById(id)) {
            throw new CustomException(
                    "User not found with id: " + id,
                    HttpStatus.NOT_FOUND
            );
        }
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

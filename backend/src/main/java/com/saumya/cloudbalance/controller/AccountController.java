package com.saumya.cloudbalance.controller;

import com.saumya.cloudbalance.dto.AccountDetailsDto;
import com.saumya.cloudbalance.dto.AddAccountDto;
import com.saumya.cloudbalance.dto.UserDetailsDto;
import com.saumya.cloudbalance.service.AccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<String> addAccount(@Valid @RequestBody AddAccountDto req){
        String res=accountService.addAccount(req);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasAnyRole('ADMIN','READ-ONLY')")
    @GetMapping
    public ResponseEntity<List<AccountDetailsDto>> getAllAccounts(){
        List<AccountDetailsDto> res=accountService.getAllAccount();
        return ResponseEntity.ok(res);
    }

//    @PreAuthorize("hasAnyRole('ADMIN','READ-ONLY')")
    @GetMapping("/get/{id}")
    public ResponseEntity<AccountDetailsDto> getAccount(@PathVariable Long id){
        AccountDetailsDto res=accountService.getAccount(id);
        return ResponseEntity.ok(res);
    }
}

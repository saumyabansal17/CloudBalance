package com.saumya.cloudbalance.service;

import com.saumya.cloudbalance.dto.AddUserRequestDto;
import com.saumya.cloudbalance.dto.ProfileResponseDto;
import com.saumya.cloudbalance.dto.GetUserResponseDto;
import com.saumya.cloudbalance.dto.UpdateUserRequestDto;
import com.saumya.cloudbalance.entity.Account;
import com.saumya.cloudbalance.entity.Role;
import com.saumya.cloudbalance.entity.User;
import com.saumya.cloudbalance.exception.CustomException;
import com.saumya.cloudbalance.repository.AccountRepository;
import com.saumya.cloudbalance.repository.RoleRepository;
import com.saumya.cloudbalance.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AccountRepository accountRepository;

    public List<GetUserResponseDto> getAllUsers(Authentication authentication) {
//        List<User> users = userRepository.findAll();
        String loggedInEmail = authentication.getName();

        return userRepository.findAll().stream()
                .filter(user -> !user.getEmail().equalsIgnoreCase(loggedInEmail))
                .map(user ->
                        GetUserResponseDto.builder()
                                .id(user.getId())
                                .firstName(user.getFirstName())
                                .lastName(user.getLastName())
                                .email(user.getEmail())
                                .lastLoginTime(user.getLastLoginTime())
                                .roleId(user.getRole().getId())
                                .role(user.getRole().getRole())
                                .build()
                )
                .toList();

    }

    public GetUserResponseDto getUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(()->new CustomException("User not found", HttpStatus.NOT_FOUND));
        GetUserResponseDto result = GetUserResponseDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .lastLoginTime(user.getLastLoginTime())
                .role(user.getRole().getRole())
                .build();
        return result;
    }

    public String addUser(AddUserRequestDto user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new CustomException("Email already exists", HttpStatus.CONFLICT);
        }
        Role role=roleRepository.findById(user.getRoleId()).orElseThrow(()->new CustomException("Invalid Role", HttpStatus.NOT_FOUND));

        List<Account> acc = new ArrayList<>();

        if(role.getId()==3 && !user.getAccountIds().isEmpty()){
            List<Long> accountIds = user.getAccountIds();

            long validCount = accountRepository.countByAwsIdIn(accountIds);

            if (validCount != accountIds.size()) {
                throw new CustomException("One or more account IDs are invalid", HttpStatus.NOT_FOUND);
            }

            acc=accountRepository.findAllByAwsIdIn(user.getAccountIds());
            System.out.println(acc);
        }

        User newUser = User.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .password(passwordEncoder.encode(user.getPassword()))
                .role(role)
                .accounts(acc)
                .build();
        System.out.println("newUser");
        userRepository.save(newUser);
        return "User added";
    }

//    @Transactional
    public String updateUser(Long id, UpdateUserRequestDto user) {
        User oldUser=userRepository.findById(id).orElseThrow(()->new CustomException("User not found", HttpStatus.NOT_FOUND));

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()
                && !existingUser.get().getId().equals(oldUser.getId())) {
            throw new CustomException("Email already exists", HttpStatus.CONFLICT);
        }

        Role role=roleRepository.findById(user.getRoleId()).orElseThrow(()->new CustomException("Invalid Role", HttpStatus.NOT_FOUND));

        oldUser.setFirstName(user.getFirstName());
        oldUser.setLastName(user.getLastName());
        oldUser.setEmail(user.getEmail());
        oldUser.setRole(role);

        if (user.getRoleId() == 3) {
//            if (user.getAccountIds() == null || user.getAccountIds().isEmpty()) {
//                throw new RuntimeException("Customer must have at least one account");
//            }

            List<Long> accountIds = user.getAccountIds();

            long validCount = accountRepository.countByAwsIdIn(accountIds);

            if (validCount != accountIds.size()) {
                throw new CustomException("One or more account IDs are invalid", HttpStatus.NOT_FOUND);
            }

            List<Account> accounts =
                    accountRepository.findAllByAwsIdIn(user.getAccountIds());

            oldUser.setAccounts(accounts);

        } else {
            oldUser.getAccounts().clear();
        }

        userRepository.save(oldUser);
        return "User updated";
    }

    public ProfileResponseDto getInfo(Authentication authentication){
        String email=authentication.getName();
        User user=userRepository.findByEmail(email).orElseThrow(()->new CustomException("User Not Found",HttpStatus.NOT_FOUND));
        ProfileResponseDto res=ProfileResponseDto.builder()
                .name(user.getFirstName() + " " + user.getLastName())
                .role(user.getRole().getRole())
                .build();
        return res;
    }

}

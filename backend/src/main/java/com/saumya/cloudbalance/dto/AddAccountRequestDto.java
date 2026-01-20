package com.saumya.cloudbalance.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AddAccountRequestDto {

    @NotBlank(message = "ARN number should not be empty")
    String awsArn;

    @NotBlank(message = "Account Name should not be empty")
    String accountName;

    @NotNull(message = "Account Id can not be empty")
    @Min(value = 1000000000L, message = "Account Id must be exactly 10 digits")
    @Max(value = 9999999999L, message = "Account Id must be exactly 10 digits")
    Long accountId;

}

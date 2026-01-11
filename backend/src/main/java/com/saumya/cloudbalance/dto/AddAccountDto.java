package com.saumya.cloudbalance.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AddAccountDto {

    @NotBlank
    String awsArn;

    @NotBlank
    String accountName;

    @NotNull
    @Min(1000000000L)
    @Max(9999999999L)
    Long accountId;

}

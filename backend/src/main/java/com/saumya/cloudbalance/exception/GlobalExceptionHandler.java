package com.saumya.cloudbalance.exception;

import com.saumya.cloudbalance.dto.ApiErrorDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ApiErrorDto> handleCustomException(
            CustomException ex,
            HttpServletRequest request
    ) {
        return ResponseEntity
                .status(ex.getStatus())
                .body(ApiErrorDto.builder()
                        .timestamp(LocalDateTime.now())
                        .status(ex.getStatus().value())
                        .message(ex.getMessage())
                        .path(request.getRequestURI())
                        .build());
    }


    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiErrorDto> handleBadCredentials(
            BadCredentialsException ex,
            HttpServletRequest request
    ) {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(ApiErrorDto.builder()
                        .timestamp(LocalDateTime.now())
                        .status(HttpStatus.UNAUTHORIZED.value())
                        .message("Invalid email or password")
                        .path(request.getRequestURI())
                        .build());
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ApiErrorDto> handleInvalidEnumValue(
            HttpMessageNotReadableException ex,
            HttpServletRequest request
    ) {

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ApiErrorDto.builder()
                        .timestamp(LocalDateTime.now())
                        .status(HttpStatus.BAD_REQUEST.value())
                        .message("Invalid value provided for one of the request fields")
                        .path(request.getRequestURI())
                        .build());
    }



    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorDto> handleValidationException(
            MethodArgumentNotValidException ex,
            HttpServletRequest request
    ) {
        String errorMessage = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(err -> err.getField() + ": " + err.getDefaultMessage())
                .findFirst()
                .orElse("Validation failed");

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ApiErrorDto.builder()
                        .timestamp(LocalDateTime.now())
                        .status(HttpStatus.BAD_REQUEST.value())
                        .message(errorMessage)
                        .path(request.getRequestURI())
                        .build());
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorDto> handleGenericException(
            Exception ex,
            HttpServletRequest request
    ) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiErrorDto.builder()
                        .timestamp(LocalDateTime.now())
                        .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                        .message("Something went wrong")
                        .path(request.getRequestURI())
                        .build());
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ApiErrorDto> handleMethodNotAllowed(
            HttpRequestMethodNotSupportedException ex,
            HttpServletRequest request
    ) {
        return ResponseEntity
                .status(HttpStatus.METHOD_NOT_ALLOWED)
                .body(ApiErrorDto.builder()
                        .timestamp(LocalDateTime.now())
                        .status(HttpStatus.METHOD_NOT_ALLOWED.value())
                        .message("HTTP method not allowed for this endpoint")
                        .path(request.getRequestURI())
                        .build());
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ApiErrorDto> handleUniqueConstraintViolation(
            DataIntegrityViolationException ex,
            HttpServletRequest request
    ) {
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(ApiErrorDto.builder()
                        .timestamp(LocalDateTime.now())
                        .status(HttpStatus.CONFLICT.value())
                        .message("Duplicate value violates unique constraint")
                        .path(request.getRequestURI())
                        .build());
    }
}



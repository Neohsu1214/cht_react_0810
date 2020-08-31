package com.chtti.fullstack.memo.Backend1_gradle.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 針對 給定 ProjjectId 錯誤而報錯的狀況 實作一個 RuntimeException
 * 一般 Exception 必須要 try-catch
 * RuntimeException 可不用 try-catch
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdIncorrectException extends RuntimeException{
    public ProjectIdIncorrectException(String message) {
        super(message);
    }
}

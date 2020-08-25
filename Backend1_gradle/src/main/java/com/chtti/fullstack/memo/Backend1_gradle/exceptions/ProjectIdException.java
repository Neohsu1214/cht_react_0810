package com.chtti.fullstack.memo.Backend1_gradle.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 針對 ProjectIdentifier 的 constrain 實作一個 RuntimeException
 * 一般 Exception 必須要 try-catch
 * RuntimeException 可不用 try-catch
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdException extends RuntimeException{
    public ProjectIdException(String message) {
        super(message);
    }
}

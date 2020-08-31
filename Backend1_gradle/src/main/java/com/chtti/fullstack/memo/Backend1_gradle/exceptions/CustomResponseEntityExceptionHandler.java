package com.chtti.fullstack.memo.Backend1_gradle.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * 定義一個 ControllerAdvice 類別來 Globally 處理指定接取的 Exception 類別
 * 例如：ProjectIdException
 * 並建立 handler 來回傳 ResponseEntity
 */

@ControllerAdvice // 定義此Class是個 ControllerAdvice
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * 定義此 Method 是專門用來面對 JPA ORM Constrain 時，處理Column ProjectIdentifier 相關的 Exception
     * 並且把它轉換成 Http 400 的錯誤訊息（原本丟出的是 Http 500）
     * method名稱無所謂，但是第一個參數 Exception類別 不可重複定義多個method！
     * ExceptionResponse也必須與Exception類別對應！
     * @param exception
     * @param request
     * @return
     */
    @ExceptionHandler
    public final ResponseEntity<Object>
    handleProjectIdException(ProjectIdException exception, WebRequest request) {
        ProjectIdExceptionResponse response =
                new ProjectIdExceptionResponse(exception.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    /**
     * 定義此 Method 是專門用來面對 所給定的 ProjectId 找不到的時候產生的 RuntimeException
     * 並且把它轉換成 Http 400 的錯誤訊息（原本丟出的是 Http 500）
     * ExceptionResponse也必須與Exception類別對應！
     * @param exception
     * @param request
     * @return
     */
    @ExceptionHandler
    public final ResponseEntity<Object>
    handleProjectIdIncorrectException(ProjectIdIncorrectException exception, WebRequest request) {
        ProjectIdIncorrectExceptionResponse response =
                new ProjectIdIncorrectExceptionResponse(exception.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    /**
     * 定義此 Method 是專門用來面對 所給定的 ProjectTaskId 找不到的時候產生的 RuntimeException
     * 並且把它轉換成 Http 400 的錯誤訊息（原本丟出的是 Http 500）
     * ExceptionResponse也必須與Exception類別對應！
     * @param exception
     * @param request
     * @return
     */
    @ExceptionHandler
    public final ResponseEntity<Object>
    handleProjectTaskNotFoundException(ProjectTaskNotFoundException exception, WebRequest request) {
        ProjectTaskNotFoundExceptionResponse response =
                new ProjectTaskNotFoundExceptionResponse(exception.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}

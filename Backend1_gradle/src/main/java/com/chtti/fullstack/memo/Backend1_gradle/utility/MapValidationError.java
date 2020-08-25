package com.chtti.fullstack.memo.Backend1_gradle.utility;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

public class MapValidationError {

    public static ResponseEntity<Map<String, String>> MapValidation(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // if validate error, then get collected errors here
            // LV1. 只回傳簡短錯誤訊息
            //return new ResponseEntity<>("Invalid Project Object", HttpStatus.BAD_REQUEST);
            // LV2. 透過BindingResult取得完整錯誤訊息(有透露業務邏輯的風險)
            //return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
            // LV3. 改用更客製化的回應錯誤訊息
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error: bindingResult.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}

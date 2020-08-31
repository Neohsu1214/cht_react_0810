package com.chtti.fullstack.memo.Backend1_gradle.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
/**
 * 對應 ProjectIdIncorrectException 的 Response Entity
 */

@Data // 告訴 lombok 要幫我產生 getters/setters
@AllArgsConstructor // 告訴 lombok 要幫我產生一個『有所有field』的建構子
public class ProjectIdIncorrectExceptionResponse {
    private String projectIdIncorrect;
}

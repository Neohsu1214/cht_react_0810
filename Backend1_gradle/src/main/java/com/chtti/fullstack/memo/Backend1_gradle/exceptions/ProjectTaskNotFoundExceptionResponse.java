package com.chtti.fullstack.memo.Backend1_gradle.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProjectTaskNotFoundExceptionResponse {
    private String projectTask_id;
}

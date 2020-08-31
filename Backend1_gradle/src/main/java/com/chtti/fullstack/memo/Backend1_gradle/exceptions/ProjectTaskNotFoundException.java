package com.chtti.fullstack.memo.Backend1_gradle.exceptions;

//@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectTaskNotFoundException extends RuntimeException {
    public ProjectTaskNotFoundException(String message) {
        super(message);
    }
}

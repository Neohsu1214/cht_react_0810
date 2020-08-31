package com.chtti.fullstack.memo.Backend1_gradle.controller;

import com.chtti.fullstack.memo.Backend1_gradle.model.ProjectTask;
import com.chtti.fullstack.memo.Backend1_gradle.service.ProjectTaskService;
import com.chtti.fullstack.memo.Backend1_gradle.utility.MapValidationError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/task")
@CrossOrigin
public class ProjectTaskController {
    @Autowired
    private ProjectTaskService projectTaskService;

    @GetMapping("/{task_id}")
    public ResponseEntity<?> getProjectTask(@PathVariable String task_id) {
        ProjectTask projectTask = projectTaskService.findTaskByProjectSequence(task_id);
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }

    @PatchMapping("")
    public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask,
                                               BindingResult result) {
        ResponseEntity<?> errorMap = MapValidationError.MapValidation(result);
        if (errorMap != null) {
            return errorMap;
        }
        ProjectTask updateTask = projectTaskService.updateByProjectSequence(projectTask);
        return new ResponseEntity<>(updateTask, HttpStatus.OK);
    }
}

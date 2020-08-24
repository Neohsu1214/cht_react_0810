package com.chtti.fullstack.memo.Backend1_gradle.controller;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.service.ProjectService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProjectController.class);

    @PostMapping("")
    public ResponseEntity<?> // 表示可回傳任何型態的 ResponseEntity
    createNewProject(@Valid @RequestBody Project project
            , BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>("Invalid Project Object", HttpStatus.BAD_REQUEST);
        }
        // 送一個 project 進來處理
        Project project1 = projectService.saveOrUpdateProject(project);
        // 處理完後再傳一個 project 回去（難怪TAIS回傳一堆資料還包含我傳進去的，看得好煩，但既然是通則，就接受吧！）
        return new ResponseEntity<>(project1, HttpStatus.CREATED);
    }

}

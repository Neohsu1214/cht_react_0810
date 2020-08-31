package com.chtti.fullstack.memo.Backend1_gradle.controller;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.service.ProjectService;
import com.chtti.fullstack.memo.Backend1_gradle.utility.MapValidationError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProjectController.class);

    @PostMapping("")
    public ResponseEntity<?> // 表示可回傳任何型態的 ResponseEntity
    createNewProject(@Valid @RequestBody Project project
            , BindingResult bindingResult) { // 有下達 @Valid 的話，會把驗證(NotBlank, Size等)的結果丟給 bindingResult 中
        /*
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
        } 透過 Refactor/ExtractMethod 獨立成一個 method，再透過 Refactor/Move Member 提出到獨立的Error處理 Class
        */
        // LV4. 將錯誤訊息處理提出來跟其他RestController共用
        ResponseEntity<Map<String, String>> errorMap = MapValidationError.MapValidation(bindingResult);
        if (errorMap != null) return errorMap;
        // 送一個 project 進來處理
        Project project1 = projectService.saveOrUpdateProject(project);
        // 處理完後再傳一個 project 回去（難怪TAIS回傳一堆資料還包含我傳進去的，看得好煩，但既然是通則，就接受吧！）
        return new ResponseEntity<>(project1, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects() {
        return projectService.findAllProjects(true); // 不使用 cache
    }

    @GetMapping("/{projectId}") // {projectId} 的值會經由 @PathVariable 傳遞給 method 參數 projectId
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    private static final String DELETE_STRING = "Project with ID %s was deleted!";
    @DeleteMapping("/{projectId}") // 因為 HTTP Method 不同，所以 path 相同做的事情也不一樣
    public ResponseEntity<?> deleteProjectById(@PathVariable String projectId) {
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<>(String.format(DELETE_STRING, projectId), HttpStatus.OK);
    }
}

package com.chtti.fullstack.memo.Backend1_gradle.service;

import com.chtti.fullstack.memo.Backend1_gradle.exceptions.ProjectIdException;
import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 透過實作一個 Service 來作為 model 與 controller 之間的橋樑
 *
 */
@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project project) {
        String upperCaseProjectId = project.getProjectIdentifier().toUpperCase();
        try {
            project.setProjectIdentifier(upperCaseProjectId);
            return repository.save(project);
        } catch (Exception e) {
            // 針對 ProjectId 的 constrain 攔截 Exception 並自動轉給已註冊的全域 CustomResponseEntityExceptionHandler 處理
            throw new ProjectIdException(String.format("Project ID %s already existed!", upperCaseProjectId));
        }
    }
}

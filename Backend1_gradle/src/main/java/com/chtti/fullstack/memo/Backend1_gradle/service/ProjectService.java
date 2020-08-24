package com.chtti.fullstack.memo.Backend1_gradle.service;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 透過實作一個 Service 來作為 model 與 controller 之間的橋樑
 */
@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project project) {
        return repository.save(project);
    }
}

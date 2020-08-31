package com.chtti.fullstack.memo.Backend1_gradle.service;

import com.chtti.fullstack.memo.Backend1_gradle.exceptions.ProjectIdException;
import com.chtti.fullstack.memo.Backend1_gradle.model.Backlog;
import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.repository.BacklogRepository;
import com.chtti.fullstack.memo.Backend1_gradle.repository.ProjectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;


/**
 * 透過實作一個 Service 來作為 model 與 controller 之間的橋樑
 * 企業邏輯大多實作在 Service 中
 */
@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project) {
        String upperCaseProjectId = project.getProjectIdentifier().toUpperCase();
        try {
            // 要建立/儲存 project 時，要一併處理1對1的 backlog 資料！
            if (project.getId() == null) { // new project
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier());
            } else { // old project
                project.setBacklog(backlogRepository.findByProjectIdentifier(project.getProjectIdentifier()));
            }

            project.setProjectIdentifier(upperCaseProjectId);
            return projectRepository.save(project);
        } catch (Exception e) {
            // 針對 ProjectId 的 constrain 攔截 Exception 並自動轉給已註冊的全域 CustomResponseEntityExceptionHandler 處理
            throw new ProjectIdException(String.format("Project ID %s already existed!", upperCaseProjectId));
        }
    }

    private static final Logger LOGGER = LoggerFactory.getLogger(ProjectService.class);
    @Cacheable(value = "projects", condition = "!#noCache") // 當啟用 cache之後會發現，只有第一次呼叫時會輸出 Log! ehcache 是 method level 的 cache!如果不要也可以設定『noCache』
    public Iterable<Project> findAllProjects(boolean noCache) {
        LOGGER.info("get all projects from repository");
        return projectRepository.findAll();
    }

    public Project findProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project ID "+projectId+" does not exist!");
        }
        return project;
    }

    public void deleteProjectByIdentifier(String projectId) {
        // 先查找指定資料
        Project projectToDelete = projectRepository.findByProjectIdentifier(projectId);
        // 不存在要丟出 Exception
        if (projectToDelete == null) {
            throw new ProjectIdException(String.format("Can not delete project with Id %s, this project does not exist!", projectId));
        }
        // 存在才進行刪除
        projectRepository.delete(projectToDelete);
    }
}

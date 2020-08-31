package com.chtti.fullstack.memo.Backend1_gradle.service;

import com.chtti.fullstack.memo.Backend1_gradle.exceptions.ProjectIdException;
import com.chtti.fullstack.memo.Backend1_gradle.exceptions.ProjectIdIncorrectException;
import com.chtti.fullstack.memo.Backend1_gradle.exceptions.ProjectTaskNotFoundException;
import com.chtti.fullstack.memo.Backend1_gradle.model.Backlog;
import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.model.ProjectTask;
import com.chtti.fullstack.memo.Backend1_gradle.repository.BacklogRepository;
import com.chtti.fullstack.memo.Backend1_gradle.repository.ProjectRepository;
import com.chtti.fullstack.memo.Backend1_gradle.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    // 定義一組離散值(enum)決定優先序
    public enum Priority {
        NOT_SET(0), LOW(1), MEDIUM(2), HIGH(3);
        public final int value;

        private Priority(int value) {
            this.value = value;
        }
    }

    // 定義一組離散值(enum)決定狀態
    public enum Status {
        NOT_SET(""), TO_DO("TO_DO");
        public final String value;

        private Status(String value) {
            this.value = value;
        }
    }

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        // 先用 projectIdentifier 找到 backlog 並設定 projectTask 關聯
        Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
        if (backlog == null) {
            // 當 backlog 抓不到時，要進行處理，否則會丟出 500 的內部錯誤
            String message = String.format("Project identifier: %s not found", projectIdentifier);
            throw new ProjectIdException(message);
        }
        projectTask.setBacklog(backlog);
        //
        Integer backlogSequence = backlog.getPTSequence();
        backlogSequence++;
        backlog.setPTSequence(backlogSequence);
        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);
        // 設定預設優先序: Medium
        if (projectTask.getPriority() == null || projectTask.getPriority() == Priority.NOT_SET.value) {
            projectTask.setPriority(Priority.MEDIUM.value);
        }
        // 設定預設狀態: Status
        if (projectTask.getStatus() == null || projectTask.getStatus() == Status.NOT_SET.value) {
            projectTask.setStatus(Status.TO_DO.value);
        }
        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findTaskById(String projectIdentifier) {
        Project project = projectRepository.findByProjectIdentifier(projectIdentifier);
        if (project == null) {
            // 如果不存在這樣 ProjectId 的 Project，要丟出 Exception
            String message = String.format("Project Identifier:%s is not existed!", projectIdentifier);
            throw new ProjectIdIncorrectException(message);
        }
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(projectIdentifier);
    }

    public ProjectTask findTaskByProjectSequence(String task_id) {
        ProjectTask task = projectTaskRepository.findByProjectSequence(task_id);
        if (task == null) {
            String message = String.format("Project Task with Task Id:%s does not exist!", task_id);
            throw new ProjectTaskNotFoundException(message);
        }
        return task;
    }

    public ProjectTask updateByProjectSequence(ProjectTask updateTask) {
        Backlog backlog = backlogRepository.findByProjectIdentifier(updateTask.getProjectIdentifier());
        updateTask.setBacklog(backlog);// 因為前端不會知道關聯，所以必須手動再將關聯更新，ORM才會去 mapping
        return projectTaskRepository.save(updateTask);
    }
}

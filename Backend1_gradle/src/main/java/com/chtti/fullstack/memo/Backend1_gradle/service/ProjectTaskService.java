package com.chtti.fullstack.memo.Backend1_gradle.service;

import com.chtti.fullstack.memo.Backend1_gradle.exceptions.ProjectIdException;
import com.chtti.fullstack.memo.Backend1_gradle.model.Backlog;
import com.chtti.fullstack.memo.Backend1_gradle.model.ProjectTask;
import com.chtti.fullstack.memo.Backend1_gradle.repository.BacklogRepository;
import com.chtti.fullstack.memo.Backend1_gradle.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {
    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    // 定義一組離散值(enum)決定優先序
    public enum Priority {
        NOT_SET(0), LOW(1), MEDIUM(2), HIGH(3);
        public final int value;
        private Priority(int value){
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
        if (projectTask.getPriority() == null ||  projectTask.getPriority() ==Priority.NOT_SET.value){
            projectTask.setPriority(Priority.MEDIUM.value);
        }
        // 設定預設狀態: Status
        if (projectTask.getStatus() == null || projectTask.getStatus() == Status.NOT_SET.value) {
            projectTask.setStatus(Status.TO_DO.value);
        }
        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findTaskById(String projectIdentifier) {
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(projectIdentifier);
    }
}

package com.chtti.fullstack.memo.Backend1_gradle.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Backlog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PTSequence = 0;
    private String projectIdentifier;

    /**
     * 跟 JPA 說明 Backlog 與 Project 之間的join關係為 1對1
     */
    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "project_id", nullable = false) // 會在Table中自動產生一個欄位: PROJECT_ID
    @JsonIgnore // 代表此欄位不要在 ResponseEntity 中輸出
    private Project project;
    /**
     * 跟 JPA 說明 Backlog 與 ProjectTask 之間的join關係為 1對多
     */
    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.EAGER, mappedBy = "backlog")
    private List<ProjectTask> projectTasks = new ArrayList<>();
}

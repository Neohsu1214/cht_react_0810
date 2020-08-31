package com.chtti.fullstack.memo.Backend1_gradle.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
public class ProjectTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(updatable = false, unique = true)
    private String projectSequence;
    @NotBlank(message="please include a task summary")
    private String summary;
    private String acceptanceCriteria;
    private String status;
    private Integer priority;
    private Date dueDate;
    private Date createdAt;
    private Date updatedAt;
    @Column(updatable = false)
    private String projectIdentifier;

    /**
     * 跟 JPA 說明 ProjectTask 與 Backlog 之間的join關係為 多對ㄧ
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="backlog_id", nullable = false) // 會在Table中自動產生一個欄位: BACKLOG_ID
    @JsonIgnore // ResponseEntity別印出此內容
    private Backlog backlog;

    @PrePersist // 要在創建前，記下時間
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate // 要在更新前，記下時間
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

}

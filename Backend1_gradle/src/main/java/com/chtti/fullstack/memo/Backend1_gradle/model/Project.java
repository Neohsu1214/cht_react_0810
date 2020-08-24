package com.chtti.fullstack.memo.Backend1_gradle.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

/**
 * @Data
 * 使用 lombok 自動生成 空constructor, toString, getter, setter...etc.
 * 所以程式內容可以簡易很多
 * 如果有自定義的 有參數Constructor 又想保留自動生成 空constructor，則可加上
 *   ＠NoArgsConstructor
 * @Entity
 * 說明用於JPA對應
 */
@Data
@NoArgsConstructor
@Entity
public class Project {
    /**
     * @Id 說明是JPA中的pk
     * @GeneratedValue(strategy = GenerationType.AUTO) 說明是交給JPA自動產生
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "project name is required!")
    private String projectName;
    @NotBlank(message = "project identifier is required!") // 不可為空白，會透過 BindingResult 反應錯誤
    @Size(min=6, max=16,message = "project identifier length should between 6 to 16 chars") //限制內容長度，會透過 BindingResult 反應錯誤
    @Column(updatable = false, unique = true) // 限制不可修改，限制不可重複。由於是DB上的限制，所以不會透過 BindingResult 反應錯誤
    private String projectIdentifier;
    @NotBlank(message = "description is required!")
    private String description;
    @JsonFormat(pattern="yyyy-MM-dd") // 標注日期格式
    private Date startDate;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDate;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    @PrePersist // 要在創建前，記下時間
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate // 要在更新前，記下時間
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    public Project(String projectName, String projectIdentifier) {
        this.projectName = projectName;
        this.projectIdentifier = projectIdentifier;
    }
}

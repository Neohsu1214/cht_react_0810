package com.chtti.fullstack.memo.Backend1_gradle.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @Data
 * 使用 lombok 自動生成 空constructor, toString, getter, setter...etc.
 * 所以程式內容可以簡易很多
 * 如果有自定義的 有參數Constructor 又想保留自動生成 空constructor，則可加上
 *   ＠NoArgsConstructor
 */
@Data
@NoArgsConstructor
public class Project {
    private Long id;
    private String projectName;
    private String projectIdentifier;
    private String description;
    private Date startDate;
    private Date endDate;

    public Project(String projectName, String projectIdentifier) {
        this.projectName = projectName;
        this.projectIdentifier = projectIdentifier;
    }
}

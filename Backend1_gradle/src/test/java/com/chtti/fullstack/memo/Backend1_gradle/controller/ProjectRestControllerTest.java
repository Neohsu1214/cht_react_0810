package com.chtti.fullstack.memo.Backend1_gradle.controller;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT) // 要有這段才能Inject TestRestTemplate 與 LocalServerPort
public class ProjectRestControllerTest {
    @LocalServerPort // 自動取得 local服務啟動後的 port ex: 8080, 8081...etc
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;

    /**
     * 先驗證是否可以建立一個 Rest 測試連線
     */
    @Test
    public void addProject() {
        Project project = new Project();
        restTemplate.postForObject(String.format("http://localhost:%d/api/project", port),
                project, Project.class
        );
    }

}

package com.chtti.fullstack.memo.Backend1_gradle.service;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.service.ProjectService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * @SpringBootTest
 * 由於是要進行Service的測試，必須要把整個 Springboot 叫起來才能測
 */
@SpringBootTest
public class ProjectServiceTest {
    @Autowired
    private ProjectService service;

    @BeforeEach // 每次測試之前都要執行一次驗證 service 是否有 wire 成功
    public void testPrecondition() {
        assertNotNull(service);
    }

    @Test
    public void serviceTest1() {
        Project project1 = new Project("project1", "PROJECT_1");
        project1.setDescription("This is my first project");
        service.saveOrUpdateProject(project1);

    }

}

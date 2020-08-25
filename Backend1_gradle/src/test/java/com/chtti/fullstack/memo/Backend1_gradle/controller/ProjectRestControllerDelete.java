package com.chtti.fullstack.memo.Backend1_gradle.controller;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT) // 要有這段才能Inject TestRestTemplate 與 LocalServerPort
public class ProjectRestControllerDelete {
    @LocalServerPort // 自動取得 local服務啟動後的 port ex: 8080, 8081...etc
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;

    private static final Logger LOGGER = LoggerFactory.getLogger(TestRestTemplate.class);
    private static final String PROJECT_IDENTIFIER = "abc1234";
    private static final String API_URL = "http://localhost:%d/api/project";
    /**
     * 每次測試之前要先確定 TestRestTemplate 是可以被成功建立的才進行測試
     */
    @BeforeEach
    public void testPrecondition() {
        assertNotNull(restTemplate);
        // 由於此 Class 是針對刪除進行測試，所以每次測試之前都要先新增一筆進去後再進行刪除測試
        Project project = new Project();
        project.setProjectName("My first Project");
        project.setProjectIdentifier(PROJECT_IDENTIFIER);
        project.setDescription("project to be deleted!");

        ResponseEntity<String> result =
                restTemplate.postForEntity(String.format(API_URL, port),
                        project, String.class);
        LOGGER.info("A Project Added!");
    }

    @Test
    public void singleProjectDelete() {
        // 先查看目前筆數
        ResponseEntity<Project[]> entity1 = restTemplate.getForEntity(String.format(API_URL + "/all", port), Project[].class);
        LOGGER.info(String.format("Project Count: %d",entity1.getBody().length));
        assertEquals(entity1.getBody().length, 1);
        // 刪除
        restTemplate.delete(String.format(API_URL + "/" + PROJECT_IDENTIFIER, port));
        LOGGER.info("Delete Complete!");
        // 再查看目前筆數
        ResponseEntity<Project[]> entity2 = restTemplate.getForEntity(String.format(API_URL + "/all", port), Project[].class);
        LOGGER.info(String.format("Project Count: %d", entity2.getBody().length));
        assertEquals(entity2.getBody().length, 0);
    }

}

package com.chtti.fullstack.memo.Backend1_gradle.controller;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT) // 要有這段才能Inject TestRestTemplate 與 LocalServerPort
public class ProjectRestControllerTest {
    @LocalServerPort // 自動取得 local服務啟動後的 port ex: 8080, 8081...etc
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;

    private static final Logger LOGGER = LoggerFactory.getLogger(TestRestTemplate.class);

    /**
     * 驗證可增加資料
     */
    @Test
    public void addProjectSuccess() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");

        ResponseEntity<String> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                project, String.class);
        LOGGER.info("response code={}", response.getStatusCode());
        LOGGER.info("response={}", response.getBody());
        // 驗證結果
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    /**
     * 驗證可塞入值後取得筆數與內容
     */
    @Test
    public void getAllProject() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");
        String localURL = String.format("http://localhost:%d/api/project", port);
        ResponseEntity<String> response =
                restTemplate.postForEntity(localURL,
                        project, String.class);
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
        ResponseEntity<Project[]> response2 =
                restTemplate.getForEntity(localURL + "/all", Project[].class);
        Project[] projects = response2.getBody();
        MediaType contentType = response2.getHeaders().getContentType();
        assertEquals(projects.length, 1);
        // 另一種 assertion 寫法
        assertThat(contentType).isEqualByComparingTo(MediaType.APPLICATION_JSON);
        assertThat(response2.getStatusCode()).isEqualByComparingTo(HttpStatus.OK);
    }

    /**
     * 驗證針對資料不足的，可有效攔截並處理
     */
    @Test
    public void addProjectMissingName() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        //project.setProjectName("Demo Project1");
        ResponseEntity<String> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, String.class);
        LOGGER.info("response={}", response.getStatusCode());
        LOGGER.info("response={}",response.getBody());
        assertEquals(response.getStatusCode(), HttpStatus.BAD_REQUEST);
    }

    /**
     * 驗證針對資料不足的，可取得更詳細的錯誤訊息
     */
    @Test
    public void addProjectMissingName2() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        //project.setProjectName("Demo Project1");
        ResponseEntity<Map> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, Map.class);
        Map<String, String> errorMessages = response.getBody();
        LOGGER.info("response={}", response.getStatusCode());
        LOGGER.info("response={}", errorMessages.get("projectName"));
        assertEquals(errorMessages.get("projectName"), "project name is required!");
    }

    /**
     * 驗證 PorjectIdentifier 重複的，可有效攔截
     */
    @Test
    public void addProjectDuplicateId() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");

        // 故意塞兩次同樣的值，造成 PorjectIdException
        ResponseEntity<Map> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, Map.class);
        Map<String, String> errorMessages = response.getBody();
        ResponseEntity<Map> response2 =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, Map.class);
        Map<String, String> errorMessages2 = response2.getBody();
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
        assertEquals(response2.getStatusCode(), HttpStatus.BAD_REQUEST);
        LOGGER.info("duplicate message = {}", errorMessages2.get("projectIdentifier"));
    }
}

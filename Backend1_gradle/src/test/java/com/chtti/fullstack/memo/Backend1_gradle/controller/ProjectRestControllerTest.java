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
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT) // 要有這段才能Inject TestRestTemplate 與 LocalServerPort
public class ProjectRestControllerTest {
    @LocalServerPort // 自動取得 local服務啟動後的 port ex: 8080, 8081...etc
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;

    private static final Logger LOGGER = LoggerFactory.getLogger(TestRestTemplate.class);

    /**
     * 每次測試之前要先確定 TestRestTemplate 是可以被成功建立的才進行測試
     */
    @BeforeEach
    public void testPrecondition() {
        assertNotNull(restTemplate);
    }

    /**
     * 驗證可增加資料
     */
    @Test
    public void addProjectSuccess() {
        Project project = new Project();
        project.setProjectIdentifier("ABC1234567");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");

        ResponseEntity<String> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                project, String.class);
        LOGGER.info("response code={}", response.getStatusCode());
        LOGGER.info("response={}", response.getBody());
        // 驗證結果
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }

    /**
     * 驗證可塞入值後取得筆數與內容
     */
    @Test
    public void getAllProject() {
        Project project = new Project();
        project.setProjectIdentifier("ABC12345");
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");
        String localURL = String.format("http://localhost:%d/api/project", port);
        ResponseEntity<String> response =
                restTemplate.postForEntity(localURL,
                        project, String.class);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        ResponseEntity<Project[]> response2 =
                restTemplate.getForEntity(localURL + "/all", Project[].class);
        Project[] projects = response2.getBody();
        MediaType contentType = response2.getHeaders().getContentType();
        assertEquals(3, projects.length);
        // 另一種 assertion 寫法
        assertThat(contentType).isEqualByComparingTo(MediaType.APPLICATION_JSON);
        assertThat(response2.getStatusCode()).isEqualByComparingTo(HttpStatus.OK);
    }

    @Test
    public void getProjectByIdentifier() {
        String projectIdentifier = "AAA-1234";
        Project project = new Project();
        project.setProjectIdentifier(projectIdentifier);
        project.setDescription("Hi this is my first project");
        project.setProjectName("Demo Project1");
        String localURL = String.format("http://localhost:%d/api/project", port);
        ResponseEntity<String> response =
                restTemplate.postForEntity(localURL,
                        project, String.class);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        ResponseEntity<Project> response2 =
                restTemplate.getForEntity(localURL + "/" + projectIdentifier, Project.class);
        Project getBackProject = response2.getBody();
        MediaType contentType = response2.getHeaders().getContentType();
        // 驗證取出的 ProjectIdentifier 資料是否一致
        assertEquals(projectIdentifier, getBackProject.getProjectIdentifier());
    }

    /**
     * 驗證針對資料不足的，可有效攔截並處理
     */
    @Test
    public void addProjectMissingName() {
        Project project = new Project();
        project.setProjectIdentifier("ABC123456");
        project.setDescription("Hi this is my first project");
        //project.setProjectName("Demo Project1");
        ResponseEntity<String> response =
                restTemplate.postForEntity(String.format("http://localhost:%d/api/project", port),
                        project, String.class);
        LOGGER.info("response={}", response.getStatusCode());
        LOGGER.info("response={}",response.getBody());
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
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
        assertEquals("project name is required!", errorMessages.get("projectName"));
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
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(HttpStatus.BAD_REQUEST, response2.getStatusCode());
        LOGGER.info("duplicate message = {}", errorMessages2.get("projectIdentifier"));
    }
}

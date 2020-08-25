package com.chtti.fullstack.memo.Backend1_gradle.repository;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import com.chtti.fullstack.memo.Backend1_gradle.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest // 加上此說明後 Autowired 才可正常
public class ProjectRepositoryTest {

    @Autowired
    private ProjectRepository repository;

    @Test
    public void testAddProjectToRepository() {
        Project project = new Project();
        project.setProjectName("project1");
        project.setProjectIdentifier("TEST_PROJECT1");
        project.setDescription("this is my first test project");
        repository.save(project); // 嘗試寫入！

        Project project2 = new Project();
        project2.setProjectName("project1");
        project2.setProjectIdentifier("TEST_PROJECT1");
        project2.setDescription("this is my first test project");
        repository.save(project2); // 嘗試寫入！
        
        // 透過 assert 判斷測試結果
        assertEquals(repository.count(), 2);
    }
}

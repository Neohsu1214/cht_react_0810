package com.chtti.fullstack.memo.Backend1_gradle.repository;

import com.chtti.fullstack.memo.Backend1_gradle.model.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

}

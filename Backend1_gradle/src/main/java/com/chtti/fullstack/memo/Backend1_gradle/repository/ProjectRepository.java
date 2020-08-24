package com.chtti.fullstack.memo.Backend1_gradle.repository;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

}

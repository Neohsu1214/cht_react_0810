package com.chtti.fullstack.memo.Backend1_gradle.repository;

import com.chtti.fullstack.memo.Backend1_gradle.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @Repository
 * 建立一個 約定俗成名稱 的 CRUD Repository Interface
 * 記得後面要 extends CrudRepository<EntityClass名稱, Entity的Id>
 */
@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

}

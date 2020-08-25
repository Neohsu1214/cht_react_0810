package com.chtti.fullstack.memo.Backend1_gradle.repository;

import com.chtti.fullstack.memo.Backend1_gradle.model.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {
    Backlog findByProjectIdentifier(String identifier);
}

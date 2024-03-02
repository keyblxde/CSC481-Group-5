package com.group5.api.repositories;

import com.group5.api.models.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "sessions",
                        path = "sessions")
public interface SessionRepository extends JpaRepository<Session, Integer> {}

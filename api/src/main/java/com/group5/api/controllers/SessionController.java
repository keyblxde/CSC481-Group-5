package com.group5.api.controllers;

import com.group5.api.models.Session;
import com.group5.api.repositories.SessionRepository;
import org.springframework.data.domain.Sort;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@RepositoryRestController
public class SessionController {
    private final SessionRepository sessionRepo;

    public SessionController(SessionRepository sessionRepo) {
        this.sessionRepo = sessionRepo;
    }

    @GetMapping("/sessions")
    public @ResponseBody List<Session> getSessions() {
        Sort sort = Sort.by("language");
        return sessionRepo.findAll(sort);
    }
}

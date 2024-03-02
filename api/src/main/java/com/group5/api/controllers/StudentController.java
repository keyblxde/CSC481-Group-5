package com.group5.api.controllers;

import com.group5.api.models.Student;
import com.group5.api.repositories.StudentRepository;
import org.springframework.data.domain.Sort;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@RepositoryRestController
public class StudentController {
    private final StudentRepository studentRepo;

    public StudentController(StudentRepository studentRepo) {
        this.studentRepo = studentRepo;
    }

    @GetMapping("/students")
    public @ResponseBody List<Student> getStudents() {
        Sort sort = Sort.by("lastName", "firstName");
        return studentRepo.findAll(sort);
    }
}

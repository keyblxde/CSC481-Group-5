package com.group5.api.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "sessions", schema = "public")
public class Session {
    @Id
    @Column(name = "session_id")
    private Integer id;
    @Column(name = "subject")
    private String subject;
    @Column(name = "language")
    private String language;
    @Column(name = "students")
    private List<Integer> students; // list of enrolled student id's

    public Session() {}

    public Integer getId() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public String getLanguage() {
        return language;
    }

    public List<Integer> getStudents() {
        return students;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setStudents(List<Integer> students) {
        this.students = students;
    }
}

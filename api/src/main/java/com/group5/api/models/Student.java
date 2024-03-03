package com.group5.api.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "students", schema = "public")
public class Student {
    @Id
    @Column(name = "student_id")
    private Integer id;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "native_language")
    private String nativeLanguage;
    @Column(name = "sessions", columnDefinition = "integer[]")
    private List<Integer> sessions; // list of enrolled session id's

    public Student() {}

    public Integer getId() {
        return id;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getNativeLanguage() {
        return nativeLanguage;
    }

    public List<Integer> getSessions() {
        return sessions;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setNativeLanguage(String nativeLanguage) {
        this.nativeLanguage = nativeLanguage;
    }

    public void setSessions(List<Integer> enrolledSessions) {
        this.sessions = enrolledSessions;
    }
}

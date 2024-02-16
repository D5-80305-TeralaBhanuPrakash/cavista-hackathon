package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "tasks")
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "taskId")
    private Integer taskId;

    @Column(name = "title", nullable = false)
    private String title;
    
    @Column(name = "description", nullable = false)
    private String description;
    
//    @ManyToMany
//    @JoinTable(name="tasks_diseases", joinColumns = @JoinColumn(name="disease_id",nullable=false),inverseJoinColumns = @JoinColumn(name="task_id",nullable= false))
//    private Set<Disease> diseases = new HashSet<>();
    
    private String disease;
    
}

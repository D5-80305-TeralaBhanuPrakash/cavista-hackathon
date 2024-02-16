package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "completedTasks")
public class CompletedTasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "completedTasksId")
    private Integer completedTasksId;

    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId",nullable = false)
    private Customer customer;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="taskId",nullable = false)
    private Tasks task;
    
    private LocalDate date;
    
    public CompletedTasks(Customer customer,Tasks task,LocalDate date){
    	this.customer = customer;
    	this.task = task;
    	this.date = date;
    }
}

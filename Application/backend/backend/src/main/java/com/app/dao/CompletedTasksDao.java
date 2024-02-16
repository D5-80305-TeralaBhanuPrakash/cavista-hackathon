package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CompletedTasks;

public interface CompletedTasksDao extends JpaRepository<CompletedTasks,Integer> {

}

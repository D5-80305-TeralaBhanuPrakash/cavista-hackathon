package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Tasks;

public interface TaskDao extends JpaRepository<Tasks,Integer> {
	
	List<Tasks> findByDisease(String disease);

}

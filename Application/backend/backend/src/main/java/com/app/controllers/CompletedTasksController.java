package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CompletedTaskDTO;
import com.app.service.CompletedTasksService;

@RestController
@RequestMapping("/completed-tasks")
@CrossOrigin(origins="http://localhost:3000")
@Validated
public class CompletedTasksController {
	@Autowired
	private CompletedTasksService comTaskService;
	
	@PostMapping("/{userId}/{taskId}")
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<CompletedTaskDTO> addCompletedTask(@PathVariable Integer userId,@PathVariable Integer taskId){
		CompletedTaskDTO compltaskDto = comTaskService.addCompletedTask(userId, taskId);
	    return ResponseEntity.status(HttpStatus.CREATED).body(compltaskDto);
	}
}

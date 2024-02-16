package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TaskDTO;
import com.app.service.TasksService;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins="http://localhost:3000")
@Validated
public class TasksController {
	@Autowired
	private TasksService taskService;
	
	@GetMapping("/{taskId}")
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<TaskDTO> getTaskByTaskId(@PathVariable Integer taskId){
		TaskDTO taskDto = taskService.getTaskByTaskId(taskId);
		return ResponseEntity.ok(taskDto);
	}
	
	@GetMapping("/get/{disease}")
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<List<TaskDTO>> getTaskByDisease(@PathVariable String disease){
		List<TaskDTO> dtoList = taskService.getTaskByDisease(disease);
		return ResponseEntity.ok(dtoList);
	}
	
	@PostMapping
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<TaskDTO> addTask(@RequestBody TaskDTO task){
		TaskDTO taskDto = taskService.addTask(task);
		return ResponseEntity.ok(taskDto);
	}
	
	@GetMapping
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<List<TaskDTO>> getAllTasks(){
		List<TaskDTO> dtoList = taskService.getAllTasks();
		return ResponseEntity.ok(dtoList);
	} 
}

package com.app.service;

import java.util.List;

import com.app.dto.TaskDTO;

public interface TasksService {

	TaskDTO getTaskByTaskId(Integer taskId);

	List<TaskDTO> getTaskByDisease(String disease);

	TaskDTO addTask(TaskDTO task);

	List<TaskDTO> getAllTasks();

}

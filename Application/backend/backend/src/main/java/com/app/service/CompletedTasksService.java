package com.app.service;

import com.app.dto.CompletedTaskDTO;

public interface CompletedTasksService {

	CompletedTaskDTO addCompletedTask(Integer userId, Integer taskId);

}

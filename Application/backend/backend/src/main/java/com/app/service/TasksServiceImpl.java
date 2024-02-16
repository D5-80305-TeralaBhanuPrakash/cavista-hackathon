package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.TaskDao;
import com.app.dto.TaskDTO;
import com.app.entities.Tasks;

@Service
@Transactional
public class TasksServiceImpl implements TasksService{
	@Autowired
	private TaskDao taskDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public TaskDTO getTaskByTaskId(Integer taskId) {
		Tasks task = taskDao.findById(taskId).orElseThrow();
		return mapper.map(task,TaskDTO.class);
	}

	@Override
	public List<TaskDTO> getTaskByDisease(String disease) {
		List<Tasks> taskList = taskDao.findByDisease(disease);
		return taskList.stream()
				.map(task -> mapper.map(task, TaskDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public TaskDTO addTask(TaskDTO taskdto) {
		Tasks task = taskDao.save(mapper.map(taskdto, Tasks.class));
		return mapper.map(task, TaskDTO.class);
	}

	@Override
	public List<TaskDTO> getAllTasks() {
		List<Tasks> taskList = taskDao.findAll();
		return taskList.stream()
				.map(task -> mapper.map(task, TaskDTO.class))
				.collect(Collectors.toList());
	}
}

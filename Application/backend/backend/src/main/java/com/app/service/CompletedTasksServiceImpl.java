package com.app.service;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CompletedTasksDao;
import com.app.dao.CustomerDao;
import com.app.dao.TaskDao;
import com.app.dto.CompletedTaskDTO;
import com.app.entities.CompletedTasks;
import com.app.entities.Customer;
import com.app.entities.Tasks;

@Service
@Transactional
public class CompletedTasksServiceImpl implements CompletedTasksService{

	@Autowired
	private CompletedTasksDao complTaskDao;
	
	@Autowired
	private CustomerDao custDao;
	
	@Autowired
	private TaskDao taskDao;
	
	@Autowired
	private CustomerService custService;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public CompletedTaskDTO addCompletedTask(Integer userId, Integer taskId) {
		Customer user = custDao.findById(userId).orElseThrow();
		Tasks task = taskDao.findById(taskId).orElseThrow();
		
		CompletedTasks complTask = new CompletedTasks();
		complTask.setCustomer(user);
		complTask.setTask(task);
		complTask.setDate(LocalDate.now());
		System.out.println(complTask);
		CompletedTasks insTask = complTaskDao.save(complTask);
		if(insTask!=null) {
			custService.updateCustomerRewards(userId);
		}
		return mapper.map(insTask,CompletedTaskDTO.class);
	}
}

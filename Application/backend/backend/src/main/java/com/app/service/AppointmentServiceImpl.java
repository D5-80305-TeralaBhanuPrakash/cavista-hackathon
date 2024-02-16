package com.app.service;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.app.dao.AppointmentDao;
import com.app.dao.CustomerDao;
import com.app.dao.HospitalDao;
import com.app.dto.AppointmentDTO;
import com.app.entities.Appointments;
import com.app.entities.Customer;
import com.app.entities.Hospital;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService{
	@Autowired
	private AppointmentDao appointDao;
	
	@Autowired
	private CustomerDao custDao;
	
	@Autowired
	private HospitalDao hospDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public AppointmentDTO addAppointment(@PathVariable Integer userId,@PathVariable Integer hospId) {
		Customer user = custDao.findById(userId).orElseThrow();
		Hospital hosp = hospDao.findById(hospId).orElseThrow();
		Appointments appoint = new Appointments(1,LocalDate.now(),user,hosp);
		Appointments insApp = appointDao.save(appoint);
		return mapper.map(insApp,AppointmentDTO.class);
	}
}

package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.HospitalDao;
import com.app.dto.HospitalDTO;
import com.app.entities.Hospital;

@Service
@Transactional
public class HospitalServiceImpl implements HospitalService{
	@Autowired
	private HospitalDao hospDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public HospitalDTO addHospital(HospitalDTO hospDto) {
		Hospital hosp = hospDao.save(mapper.map(hospDto,Hospital.class));
		return mapper.map(hosp, HospitalDTO.class);
	}
}

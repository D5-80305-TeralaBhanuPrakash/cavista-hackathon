package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

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
		
		Hospital hosp = mapper.map(hospDto,Hospital.class);
		System.out.println(hosp);
		hospDao.save(hosp);
		return mapper.map(hosp, HospitalDTO.class);
	}

	@Override
	public List<HospitalDTO> getAllHospitals() {
		List<Hospital> hospList = hospDao.findAll();
		return hospList.stream()
				.map(hosp->mapper.map(hosp, HospitalDTO.class))
				.collect(Collectors.toList());
	}
}

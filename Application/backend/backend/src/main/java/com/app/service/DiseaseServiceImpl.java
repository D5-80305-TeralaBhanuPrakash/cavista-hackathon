package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DiseaseDao;
import com.app.dto.DiseaseDTO;
import com.app.entities.Disease;

@Service
@Transactional
public class DiseaseServiceImpl implements DiseaseService{
	
	@Autowired
	private DiseaseDao disDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public DiseaseDTO addDisease(DiseaseDTO disDto) {
		Disease dis = disDao.save(mapper.map(disDto, Disease.class));
		return mapper.map(dis,DiseaseDTO.class);
	}
}

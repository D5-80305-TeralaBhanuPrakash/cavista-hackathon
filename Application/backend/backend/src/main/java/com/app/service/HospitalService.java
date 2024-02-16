package com.app.service;

import java.util.List;

import com.app.dto.HospitalDTO;

public interface HospitalService {

	HospitalDTO addHospital(HospitalDTO hospDto);

	List<HospitalDTO> getAllHospitals();

}

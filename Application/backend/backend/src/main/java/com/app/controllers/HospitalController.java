package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.HospitalDTO;
import com.app.service.HospitalService;

@RestController
@RequestMapping("/hospital")
@CrossOrigin(origins="http://localhost:3000")
@Validated
public class HospitalController {
	@Autowired
	private HospitalService hospService;
	
	@PostMapping
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<HospitalDTO> addHospial(@RequestBody HospitalDTO hospDto) {
		System.out.println(hospDto);
		HospitalDTO hosp = hospService.addHospital(hospDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(hosp);
	}
	
	@GetMapping
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<List<HospitalDTO>> getAllHospitals(){
		List<HospitalDTO> listHosp = hospService.getAllHospitals();
		return ResponseEntity.ok(listHosp);
	}
	
}

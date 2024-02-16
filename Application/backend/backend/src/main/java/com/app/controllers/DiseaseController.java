package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DiseaseDTO;
import com.app.service.DiseaseService;

@RestController
@RequestMapping("/disease")
@CrossOrigin(origins="http://localhost:3000")
@Validated
public class DiseaseController {
	
	@Autowired
	private DiseaseService disService;
	
	
	@PostMapping
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public ResponseEntity<DiseaseDTO> addDisease(@RequestBody DiseaseDTO disDto){
		DiseaseDTO diseaseDto = disService.addDisease(disDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(diseaseDto);
	}
	
}

package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDTO;
import com.app.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins="http://localhost:3000")
@Validated
public class AppointmentController {
	@Autowired
	private AppointmentService appointService;
	
	@PostMapping("/{userId}/{hospId}")
	@PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
	public AppointmentDTO addAppointment(@PathVariable Integer userId,@PathVariable Integer hospId) {
		return appointService.addAppointment(userId,hospId);
	}
}

package com.app.service;

import com.app.dto.AppointmentDTO;

public interface AppointmentService {

	AppointmentDTO addAppointment(Integer userId, Integer hospId);

}

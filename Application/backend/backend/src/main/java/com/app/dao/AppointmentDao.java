package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Appointments;

public interface AppointmentDao extends JpaRepository<Appointments,Integer>{

}

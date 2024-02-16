package com.app.controllers;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/complted-tasks")
@CrossOrigin(origins="http://localhost:3000")
@Validated
public class CompletedTasksController {
	
}

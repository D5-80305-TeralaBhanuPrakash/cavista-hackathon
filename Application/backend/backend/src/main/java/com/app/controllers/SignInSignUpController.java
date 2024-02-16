package com.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CustomerDTO;
import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.security.JwtUtils;
import com.app.service.CustomerService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@Validated
public class SignInSignUpController {

	@Autowired
	private CustomerService custService;
	
	@Autowired
	private JwtUtils utils;

	@Autowired
	private AuthenticationManager mgr;
	
	// Endpoint to add a new customer
    // URL: http://localhost:8080/customer
    @PostMapping("/register")
    public ResponseEntity<CustomerDTO> addCustomer(@RequestBody CustomerDTO custDto) {
        //try {
            CustomerDTO createdCustomer = custService.addCustomer(custDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCustomer);
        //}
//        catch (CustomerServiceException e) {
//            throw new CustomerControllerException("Error while adding customer: " + e.getMessage());
//        }
    }

    // Endpoint for customer login
    // URL: http://localhost:8080/customer/login
//    @PostMapping("/signin")
//    public ResponseEntity<CustomerDTO> loginCustomer(@RequestParam String email, @RequestParam String password) {
//        CustomerDTO customer = custService.loginCustomer(email, password);
//        if (customer != null) {
//            return ResponseEntity.ok(customer);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }
    
    @PostMapping("/signin")
	public ResponseEntity<?> signinUser(@RequestBody @Valid SigninRequest reqDTO) {
    	try {
            // Perform user authentication
            Authentication verifiedAuth = mgr.authenticate(
                    new UsernamePasswordAuthenticationToken(reqDTO.getEmail(), reqDTO.getPassword()));

            // If authentication is successful, return a JWT token
            if (verifiedAuth.isAuthenticated()) {
            	CustomerDTO custDto = custService.getCustomerByEmailAddress(reqDTO.getEmail());
                return ResponseEntity.ok(new SigninResponse(utils.generateJwtToken(verifiedAuth), custDto));
            } else {
                // If authentication fails, return a 401 Unauthorized status code
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid user credentials");
            }
        } catch (AuthenticationException e) {
        	
        	System.out.println("inside signin exception");
            // If an AuthenticationException occurs (e.g., invalid credentials), return a 401 Unauthorized status code
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid user credentials");
        }
	}
}

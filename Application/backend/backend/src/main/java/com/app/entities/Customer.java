package com.app.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerId")
    private Integer customerId;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "dateOfBirth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name = "gender", nullable = false)
    private String gender;
    
    @Column(name="role",nullable=false)
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "email",unique=true ,nullable = false)
    private String email;
    
    @Column(name="password",nullable=false)
    private String password;

    @Column(name = "phoneNumber", nullable = false)
    private String phoneNumber;

    @Column(name = "registrationDate", nullable = false)
    private LocalDate registrationDate;
    
    @Column(name = "status",nullable=false,columnDefinition = "TINYINT(1)")
    private boolean status;
    
//    @ManyToMany(mappedBy = "customers")
//    private Set<Disease> diseases = new HashSet<>();
    
    @Column(name="disease",nullable=false)
    private String disease;
    
    @Column(name="rewards",nullable=false)
    private int rewards;
    
    
    
    
    
    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", gender='" + gender + '\'' +
                ", role=" + role +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", registrationDate=" + registrationDate +
                ", status=" + status +
                '}';
    }
}



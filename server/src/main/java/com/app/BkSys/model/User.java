package com.app.BkSys.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="SEC_USERS")
public class User {

	@Id
    
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long account_number;
	private double balance;
	private String username;
	private String email ;
	private String password;
	private String role;
	private String phone;

	public User() {
		super();
	
	}

	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	

	public long getAccount_number() {
		return account_number;
	}


	public void setAccount_number(long account_number) {
		this.account_number = account_number;
	}


	
	public double getBalance() {
		return balance;
	}


	public void setBalance(double balance) {
		this.balance = balance;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


}

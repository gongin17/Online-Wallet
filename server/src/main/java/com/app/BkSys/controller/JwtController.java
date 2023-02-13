package com.app.BkSys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.app.BkSys.config.JwtTokenUtil;
import com.app.BkSys.model.JwtRequest;
import com.app.BkSys.model.JwtResponse;
import com.app.BkSys.model.Transaction;
import com.app.BkSys.model.User;
import com.app.BkSys.service.JwtUserDetailsService;
import com.app.BkSys.service.TransactionService;


@CrossOrigin(origins = "http://onlinewallet.s3-website-us-east-1.amazonaws.com",allowedHeaders="*", allowCredentials="true")
@RequestMapping("/")

@RestController
public class JwtController {
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;
	

	@RequestMapping(value = "/signin", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}

	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@Validated @RequestBody User user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	@RequestMapping(value = "/transfer", method = RequestMethod.PUT)
	public ResponseEntity<?>  updateUser(@Validated @RequestBody Transaction transaction) throws Exception {
		
		return ResponseEntity.ok(userDetailsService.updateUser(transaction));
	}
	
	@RequestMapping(value = "/accountlist", method = RequestMethod.GET)
	public List<User> getAllCustomers() {
		
		return userDetailsService.findAllCustomers();
	
	}
	
	@RequestMapping(value ="/user/{username}" , method = RequestMethod.GET)
	public User findUserBYName(@PathVariable String username) {
		
		return userDetailsService.getUserByUsername(username);
	
	
	}
	
	@RequestMapping(value ="/u" , method = RequestMethod.GET)
	
	public User findUserId(@PathVariable Long id) {
		
		return userDetailsService.findUserById(id);
	
	
	}
	

	

}

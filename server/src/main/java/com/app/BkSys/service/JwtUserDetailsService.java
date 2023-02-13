package com.app.BkSys.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.security.core.userdetails.User;

import com.app.BkSys.model.Transaction;
import com.app.BkSys.model.User;
import com.app.BkSys.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRep;

	@Autowired
	public PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRep.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	public User save(User user) {
		User newUser = new User();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setEmail(user.getEmail());
		newUser.setBalance(user.getBalance());
		newUser.setRole(user.getRole());
		newUser.setPhone(user.getPhone());

		return userRep.save(newUser);
	}

	public List<User> updateUser(Transaction transaction) {

		List<User> lt = new ArrayList<>();

		User sender = userRep.findByUsername(transaction.getSender());
		User reciever = userRep.findByUsername(transaction.getReciever());

		// if(transaction.getAmount() <= sender.getBalance()) {

		double newBalanceS = sender.getBalance() - transaction.getAmount();
		double newBalanceR = reciever.getBalance() + transaction.getAmount();

		sender.setBalance(newBalanceS);
		reciever.setBalance(newBalanceR);

		lt.add(reciever);
		lt.add(sender);

		userRep.saveAll(lt);

		return lt;

//	}else {
		// return null;
		// }

	}

	public List<User> findAllCustomers() {

		return userRep.findAll();

	}

	public User getUserByUsername(String username) {
		return userRep.findByUsername(username);
	}

	public User findUserById(long id) {
	
		return userRep.findById(id).orElse(null);
	}

}

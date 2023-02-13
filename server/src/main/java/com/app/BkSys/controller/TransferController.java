package com.app.BkSys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.BkSys.model.Transaction;
import com.app.BkSys.service.TransactionService;



@CrossOrigin(origins = "http://onlinewallet.s3-website-us-east-1.amazonaws.com" ,allowedHeaders="*", allowCredentials="true")
@RestController

public class TransferController {
	
	@Autowired
	TransactionService transactionService ;
	
	@RequestMapping(value = "/transactions", method = RequestMethod.GET)
	public List<Transaction> findAllTransactions(){		
		return transactionService.findAllTransactions();
	}
	
	
	@RequestMapping(value = "/transfer", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody Transaction transaction) throws Exception {
		return ResponseEntity.ok(transactionService.makeTransfer(transaction) );
	}
	

	/* Transaction by a user in a duration of time */
	
	@RequestMapping(value = "/transactions/sevendays/{currentdate}/{username}", method = RequestMethod.GET)
	public List<Transaction> findTLastSevenDays(@PathVariable String currentdate ,@PathVariable String username) {
		return transactionService.findTLastSevenDays(currentdate,username);
	}
	
	@RequestMapping(value = "/transactions/month/{currentdate}/{username}", method = RequestMethod.GET)
	 public List<Transaction> findTLastMonth(@PathVariable String currentdate ,@PathVariable String username) {
		return transactionService.findTLastMonth(currentdate,username);
	}
	
	@RequestMapping(value = "/transactions/today/{currentdate}/{username}", method = RequestMethod.GET)
	public List<Transaction> findTtoDay(@PathVariable String currentdate ,@PathVariable String username) {
		return transactionService.findTtoDay(currentdate,username);
	}
	
	/* total */
	
	@RequestMapping(value = "/transactions/sent/{username}", method = RequestMethod.GET)
	public double findTotalSent(@PathVariable String username) {
		return transactionService.totaleSent(username);
	}
	

	@RequestMapping(value = "/transactions/receive/{username}", method = RequestMethod.GET)
	public double findTotalReceived(@PathVariable String username) {
		return transactionService.totaleReceive(username);
	}
	
	
	/* Money in */
	@RequestMapping(value = "/transactions/receive/today/{currentdate}/{username}", method = RequestMethod.GET)
	public double amountInTtoDay(@PathVariable String currentdate,@PathVariable String username) {
		return transactionService.amountInTtoDay(currentdate, username) ;
	}

	@RequestMapping(value = "/transactions/receive/sevendays/{currentdate}/{username}", method = RequestMethod.GET)
	public double amountInTLastSevenDays(@PathVariable String currentdate,@PathVariable String username) {
		return transactionService.amountInTLastSevenDays(currentdate, username);
	}
	
	@RequestMapping(value = "/transactions/receive/month/{currentdate}/{username}", method = RequestMethod.GET)
	public double amountInTLastMonth(@PathVariable String currentdate,@PathVariable String username) {
		return transactionService.amountInTLastMonth(currentdate, username);
	}
	
	/* Money out */
	
	@RequestMapping(value = "/transactions/sent/today/{currentdate}/{username}", method = RequestMethod.GET)
	public double amountOutTtoDay(@PathVariable String currentdate,@PathVariable String username) {
		return transactionService.amountOutTtoDay(currentdate, username) ;
	}

	@RequestMapping(value = "/transactions/sent/sevendays/{currentdate}/{username}", method = RequestMethod.GET)
	public double amountOutTLastSevenDays(@PathVariable String currentdate,@PathVariable String username) {
		return transactionService.amountOutTLastSevenDays(currentdate, username);
	}
	
	@RequestMapping(value = "/transactions/sent/month/{currentdate}/{username}", method = RequestMethod.GET)
	public double amountOutTLastMonth(@PathVariable String currentdate,@PathVariable String username) {
		return transactionService.amountOutTLastMonth(currentdate, username);
	}
	
	
}

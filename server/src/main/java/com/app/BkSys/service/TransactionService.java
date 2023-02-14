package com.app.BkSys.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.BkSys.model.Transaction;
import com.app.BkSys.model.User;
import com.app.BkSys.repository.TransactionRepository;
import com.app.BkSys.repository.UserRepository;

@Service
public class TransactionService {

	@Autowired
	private TransactionRepository tr;

	@Autowired
	private UserRepository ur;

	public User getUserByUsername(String username) {
		return ur.findByUsername(username);
	}

	public Transaction makeTransfer(Transaction transaction) {

                 
		 User sender = getUserByUsername(transaction.getSender());
		 User reciever =getUserByUsername(transaction.getReciever());

		 if(transaction.getAmount() <= sender.getBalance()) {

		Transaction newTransaction = new Transaction();

		newTransaction.setAmount(transaction.getAmount());
		newTransaction.setSender(transaction.getSender());
		newTransaction.setReciever(transaction.getReciever());
		newTransaction.setDatetransfer(transaction.getDatetransfer());
		newTransaction.setPurpose(transaction.getPurpose());

		return tr.save(newTransaction);

		 }

		

	}

	public List<Transaction> findTtoDay(String currentdate ,String username) {
		return tr.findTtoDay(currentdate,  username);
	}

	public List<Transaction> findTLastSevenDays(String currentdate ,String username) {
		return tr.findTLastSevenDays(currentdate ,  username);
	}

	public List<Transaction> findTLastMonth(String currentdate ,String username) {
		return tr.findTLastMonth(currentdate ,  username);
	}

	public List<Transaction> findAllTransactions() {

		return tr.findAll();

	}
	

	/* Money in */
	public double amountInTtoDay(String currentDate, String username) {
		return tr.amountInTtoDay(currentDate, username);
	}

	public double amountInTLastSevenDays(String currentDate, String username) {
		return tr.amountInTLastSevenDays(currentDate, username);
	}

	public double amountInTLastMonth(String currentDate, String username) {
		return tr.amountInTLastMonth(currentDate, username);
	}

	public double totaleReceive(String username) {
		return tr.searchTotalAmountReceived(username);
	}

	/* Money out */
	public double amountOutTtoDay(String currentDate, String username) {
		return tr.amountOutTtoDay(currentDate, username);
	}

	public double amountOutTLastSevenDays(String currentDate, String username) {
		return tr.amountOutTLastSevenDays(currentDate, username);
	}

	public double amountOutTLastMonth(String currentDate, String username) {
		return tr.amountOutTLastMonth(currentDate, username);
	}

	public double totaleSent(String username) {

		return tr.searchTotalAmountSent(username);
	}
}

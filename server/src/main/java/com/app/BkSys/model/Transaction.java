package com.app.BkSys.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TRANSACTIONS")
public class Transaction {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long IdTransaction;
	private double Amount;
	private String Sender;
	private String Reciever;
	private String Datetransfer;
	private String Purpose;
	
	
	
	
	public long getIdTransaction() {
		return IdTransaction;
	}




	public void setIdTransaction(long idTransaction) {
		IdTransaction = idTransaction;
	}




	public double getAmount() {
		return Amount;
	}




	public void setAmount(double amount) {
		Amount = amount;
	}




	public void setPurpose(String purpose) {
		Purpose = purpose;
	}




	public String getSender() {
		return Sender;
	}




	public void setSender(String sender) {
		Sender = sender;
	}




	public String getReciever() {
		return Reciever;
	}




	public void setReciever(String reciever) {
		Reciever = reciever;
	}




	public String getDatetransfer() {
		return Datetransfer;
	}




	public void setDatetransfer(String datetransfer) {
		Datetransfer = datetransfer;
	}




	public String getPurpose() {
		return Purpose;
	}




	public Transaction() {
		super();
	}




	public Transaction(long idTransaction, double amount, String sender, String reciever, String datetransfer,
			String purpose) {
		super();
		IdTransaction = idTransaction;
		Amount = amount;
		Sender = sender;
		Reciever = reciever;
		Datetransfer = datetransfer;
		Purpose = purpose;
	}








	




	
	
	

}

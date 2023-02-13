package com.app.BkSys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.BkSys.model.Transaction;


@Repository
public interface TransactionRepository  extends JpaRepository<Transaction, Long>  {
	
	
	/*money total in or out */
	@Query(value="select  IFNULL(sum(amount), 0) from Transactions where  reciever =  :usernameBind   ", nativeQuery = true)
	public double searchTotalAmountReceived(@Param("usernameBind") String username);
	
	@Query(value="select  IFNULL(sum(amount), 0) from Transactions where  sender =  :usernameBind ", nativeQuery = true)
	public double searchTotalAmountSent(@Param("usernameBind") String username);
	
	
	/* transaction in  duration of time*/
	@Query(value="select * from Transactions where datetransfer = :currentDateBind and sender =  :usernameBind or reciever =  :usernameBind   ", nativeQuery = true)
	public List<Transaction> findTtoDay(@Param("currentDateBind") String currentDateBind,@Param("usernameBind") String username);
	
	@Query(value="select * from Transactions where   DATEDIFF( :currentDateBind , datetransfer  ) <= 7  and (sender =  :usernameBind or reciever =  :usernameBind) ", nativeQuery = true)
	public List<Transaction> findTLastSevenDays(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
	
	@Query(value="select * from Transactions where  ( DATEDIFF( :currentDateBind , datetransfer  ) <= 30) and (sender =  :usernameBind or reciever =  :usernameBind)  ", nativeQuery = true)
	public List<Transaction> findTLastMonth(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
	
	/*money out duration of time*/
	@Query(value="select IFNULL(sum(amount), 0)from Transactions where (datetransfer = :currentDateBind) and (sender = :usernameBind) ", nativeQuery = true)
	public double amountOutTtoDay(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
    
	@Query(value="select  IFNULL(sum(amount), 0) from Transactions where  (DATEDIFF( :currentDateBind , datetransfer  ) <= 7) and (sender = :usernameBind )", nativeQuery = true)
	public double amountOutTLastSevenDays(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
	
	@Query(value="select  IFNULL(sum(amount), 0) from Transactions where   (DATEDIFF( :currentDateBind , datetransfer  ) <= 30) and (sender = :usernameBind )", nativeQuery = true)
	public double amountOutTLastMonth(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
	
	/*money in duration of time*/
	@Query(value="select IFNULL(sum(amount), 0) from Transactions where datetransfer = :currentDateBind and reciever = :usernameBind ", nativeQuery = true)
	public double amountInTtoDay(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
    
	@Query(value="select IFNULL(sum(amount), 0) from Transactions where  DATEDIFF( :currentDateBind , datetransfer  ) <= 7 and reciever = :usernameBind ", nativeQuery = true)
	public double amountInTLastSevenDays(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
	
	@Query(value="select IFNULL(sum(amount), 0) from Transactions where   DATEDIFF( :currentDateBind , datetransfer  ) <= 30 and reciever = :usernameBind ", nativeQuery = true)
	public double amountInTLastMonth(@Param("currentDateBind") String currentDateBind ,@Param("usernameBind") String username);
	
}

import axios from 'axios';


const ACCOUNT_LOGIN_API_URL = 'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/signin';
const ACCOUNT_ADD_API_URL = 'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/signup';

const ACCOUNT_TRANSFER_API_URL = 'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/transfer';
const ACCOUNT_UPDATE_API_URL = 'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/upuser';
const ACCOUNT_CUSTOMERS_API_URL = 'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/accountlist';
const ACCOUNT_USER_API_URL = 'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/user';

class AccountService{

     addNewAccount(accountInfo){
         return axios.post(ACCOUNT_ADD_API_URL,accountInfo)
     }

     UpdateSNR(transaction){
        return axios.put(ACCOUNT_TRANSFER_API_URL,transaction)
    }

     loginAccount(emailpw){
        return axios.post(ACCOUNT_LOGIN_API_URL,emailpw)
    }
    getUserData(username){
        return axios.get(ACCOUNT_USER_API_URL+"/"+username);
    }
     
    getAccounts(){
        return axios.get(ACCOUNT_CUSTOMERS_API_URL);
    }
}
export default new AccountService();
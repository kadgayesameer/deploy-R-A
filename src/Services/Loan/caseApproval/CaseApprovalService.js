import axios from "axios";

const DEPOSITEACCOUNT_API_BASE_URL = "http://localhost:7878/depositAccountsDate";
const APPROVE_DEPOSITEACCOUNT_API_BASE_URL = "http://localhost:7878/depositAccounts";
const APPROVE_LOANACCOUNT_API_BASE_URL = "http://localhost:7878/depositAccounts";

class CaseApprovalService {

    getDepositeAccountByFromAndToDate(fromDate,toDate){

        return axios.get(DEPOSITEACCOUNT_API_BASE_URL+"/"+fromDate+"/"+toDate);
    }

    updateDepositAccountApprove(depositAccId,Approveflag, modalObject){

        return axios.put(APPROVE_DEPOSITEACCOUNT_API_BASE_URL+"/"+depositAccId+"/"+Approveflag, modalObject);
    }

    updateLoanAccountApprove(loanAccId,Approveflag, modalObject){

        return axios.put(APPROVE_LOANACCOUNT_API_BASE_URL+"/"+loanAccId+"/"+Approveflag, modalObject);
    }
}

export default new CaseApprovalService();
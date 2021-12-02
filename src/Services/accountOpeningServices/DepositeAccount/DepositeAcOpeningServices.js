import axios from "axios";
// import ApiUrl from '../../../../Constants/ApiUrl'
import {
    ApiUrl
} from '../../../Constants/ApiUrl'

const Get_All_Customer_Mst_API_BASE_URL = `${ApiUrl}/master/customers`;
const Save_Deposite_Acc_API_BASE_URL = `${ApiUrl}/depositAccount`;
// const GET_COMPANY_MASTER_LIST_BASE_URL = "http://localhost:7878/master/companyMasters";
// const GET_STATE_MASTER_LIST_BASE_URL = "http://localhost:7878/master/states";
// const GET_TALUKAS_API_BASE_URL = "http://localhost:7878/master/talukas";
// const GET_DISTRICTS_API_BASE_URL = "http://localhost:7878/master/districts";
// const GET_DISTRICT_BYSTATEID_API_BASE_URI = "http://localhost:7878/master/state/districts";
// const GET_TALUKA_BYDISTRICTID_API_BASE_URI = "http://localhost:7878/master/districts/taluka";
class DepositeAcOpeningServices {

    getAllCustomers() {
        return axios.get(Get_All_Customer_Mst_API_BASE_URL);
    }
    saveDepositeAccountFirstTab(saveDepositeAccountTab) {
        return axios.post(Save_Deposite_Acc_API_BASE_URL, saveDepositeAccountTab);
    }

}
export default new DepositeAcOpeningServices();
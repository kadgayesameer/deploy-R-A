import axios from "axios";

const GET_USERS_API_BASE_URL = "http://localhost:7878/master/users";
const GET_CUSTOMERS_API_BASE_URL = "http://localhost:7878/master/customers";
const CUSTOMER_API_BASE_URL = "http://localhost:7878/master/customer";
const SAVE_CUSTOMER_DETAILS_API_BASE_URL =
  "http://localhost:7878/master/customerDetails";
const SAVE_CUSTOMER_ADDRESS_API_BASE_URL =
  "http://localhost:7878/master/customerAddress";

class CustomerMasterService {
  getUsers() {
    return axios.get(GET_USERS_API_BASE_URL);
  }

  getCustomers() {
    return axios.get(GET_CUSTOMERS_API_BASE_URL);
  }

  getCustomerById(customerMasterId) {
    console.log("getCustomerById : " + customerMasterId);
    return axios.get(CUSTOMER_API_BASE_URL + "/" + customerMasterId);
  }

  saveCustomerDetails(customerDetails) {
    return axios.post(SAVE_CUSTOMER_DETAILS_API_BASE_URL, customerDetails);
  }

  saveCustomerAddress(customerAddress) {
    return axios.post(SAVE_CUSTOMER_ADDRESS_API_BASE_URL, customerAddress);
  }

  updateCustomerDetails(customerDetails, customerMasterId) {
    return axios.put(
      CUSTOMER_API_BASE_URL + "/" + customerMasterId,
      customerDetails
    );
  }

  deleteCustomerDetails(customerMasterId) {
    return axios.delete(CUSTOMER_API_BASE_URL + "/" + customerMasterId);
  }
}

export default new CustomerMasterService();

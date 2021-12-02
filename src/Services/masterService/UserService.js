import axios from "axios";


const GET_USERLIST_API_BASE_URL = "http://localhost:7878/master/users";
const GET_STATE_API_BASE_URL = "http://localhost:7878/master/states";
const GET_COMPANYLIST_API_BASE_URL = "http://localhost:7878/master/companyMasters";
const GET_BRANCHLIST_API_BASE_URL = "http://localhost:7878/master/branches";
const SAVE_USER_API_BASE_URL = "http://localhost:7878/master/user";
const GET_USER_API_BASE_URL = "http://localhost:7878/master/user";
const UPDATE_USER_API_BASE_URL = "http://localhost:7878/master/user";
const DELETE_USER_API_BASE_URL = "http://localhost:7878/master/user";
const GET_COMP_BY_USER_ID = "http://localhost:7878/master/user/company";
const GET_BRANCH_BY_COMP_ID = "http://localhost:7878/master/company/branch";



class userService {

    createUser(user) {

        console.log("user Data Service One");
        console.log("user Data Service Two"+user);
        return axios.post(SAVE_USER_API_BASE_URL,user);
    }

    getUsers() {
        return axios.get(GET_USERLIST_API_BASE_URL);
    }

    getUser(userId) {
        return axios.get(GET_USER_API_BASE_URL + "/" + userId);
    }

    getCompByuserId(userId) {
        return axios.get(GET_COMP_BY_USER_ID + "/" + userId);
    }

    getBranchByCompId(companyId) {
        return axios.get(GET_BRANCH_BY_COMP_ID + "/" + companyId);
    }


    getStateData() {
        return axios.get(GET_STATE_API_BASE_URL);
    }
    getCompanyList() {
        return axios.get(GET_COMPANYLIST_API_BASE_URL);
    }

    getBranchList() {
        return axios.get(GET_BRANCHLIST_API_BASE_URL);
    }


    updateUser(updateUser, userId) {
        return axios.put(UPDATE_USER_API_BASE_URL + "/" + userId, updateUser);

    }

    deleteUser(userId) {
        return axios.delete(DELETE_USER_API_BASE_URL + "/" + userId);
    }



}

export default new userService()

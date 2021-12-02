import axios from "axios";

const GET_USERMASTER_API_BASE_URL = "http://localhost:7878/master/users";
const GET_MENU_API_BASE_URL = "http://localhost:7878/master/menus";
const GET_MODULEMASTER_API_BASE_URL = "http://localhost:7878/master/module";
const USER_ROLE_API_BASE_URL = "http://localhost:7878/master/userRole";


class UserRoleService{

    getMenu(){
        return axios.get(GET_MENU_API_BASE_URL);
    } 

    getModuleMasters() {
        return axios.get(GET_MODULEMASTER_API_BASE_URL);
      }

      getUserMasters() {
        return axios.get(GET_USERMASTER_API_BASE_URL);
      }

      saveUserRoleMaster(userRole) {
        console.log("Object : "+JSON.stringify(userRole));
        // let 
        return axios.post(USER_ROLE_API_BASE_URL, userRole);
      }
      

      getUserRoleUpdatedData(id){
        return axios.get(USER_ROLE_API_BASE_URL+"/"+id);
      }

}
export default new UserRoleService;
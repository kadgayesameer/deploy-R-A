import axios from "axios";
import { API_URL } from "../../Constants/ApiUrl";

const GET_MENUS_API_BASE_URL = `${API_URL}/master/module`;
const GET_SUBMENUS_API_BASE_URL = `${API_URL}/master/menus`;

class SidebarService {
  getMenus() {
    return axios.get(GET_MENUS_API_BASE_URL);
  }

  getSubMenus() {
    return axios.get(GET_SUBMENUS_API_BASE_URL);
  }
}

export default new SidebarService();

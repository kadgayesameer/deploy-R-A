import axios from "axios";

const SAVE_MENU_API_BASE_URL = "http://localhost:7878/master/menu";
const GET_MENU_API_BASE_URL = "http://localhost:7878/master/menus";
const GET_BY_ID_MENU_API_BASE_URL = "http://localhost:7878/master/menu";
const GET_MODULEMASTER_API_BASE_URL = "http://localhost:7878/master/module";


class MenuMasterService{

    getMenu(){
        return axios.get(GET_MENU_API_BASE_URL);
    } 
    
    createMenu(menuData){
        return axios.post(SAVE_MENU_API_BASE_URL, menuData);
    }

    getMenuListById(menuId){
        return axios.get(GET_BY_ID_MENU_API_BASE_URL +'/'+menuId);
    }

    updateMenuListById(menuId, menuData){
        return axios.put(SAVE_MENU_API_BASE_URL +'/'+menuId, menuData);
    }

    deleteMenu(menuId){
        return axios.delete(GET_BY_ID_MENU_API_BASE_URL +'/'+menuId);
    }
    
    getModule(){
        return axios.get(GET_MODULEMASTER_API_BASE_URL);
    }
    
}

export default new MenuMasterService()
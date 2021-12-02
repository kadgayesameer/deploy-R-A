import axios from "axios";

import {ApiUrl} from '../../Constants/ApiUrl'
class DashboardService {
    welcomeMsg(){
        axios.get(`${ApiUrl}/welcome`).then((response) =>{
            console.log(JSON.stringify(response.data));
        },
        (error)=>{
            console.log(error);
        })
    }
}
export default new DashboardService();
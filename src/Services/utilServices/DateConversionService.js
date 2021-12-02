class DateConversionService {
  
    convertDateToYyyyMmDd = (date) => {
       // alert("inside yyyy mm dd format ==>> " + date);
        let splitString = date.split("/");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("-");
        //alert("Join Array yyyy mm dd format ====>>> "+joinArray);
        return joinArray;
    }

    convertDateToDdMmYyyy = (date) => {
        //alert("inside yyyy mm dd format ==>> " + date);
        let splitString = date.split("-");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("/");
        return joinArray;
    }
}
export default new DateConversionService();
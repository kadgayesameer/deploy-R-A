//HERE HREF FOR AGRICULTURE REDIRECT Starts

function getAgriculturePage() {
   // alert("Welcome To agriculture JSP");
    var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "agriculture?fromDate=" +fromDate + "&ToDate="+toDate;		
    
}

//HERE HREF FOR AGRICULTURE REDIRECT ENDS


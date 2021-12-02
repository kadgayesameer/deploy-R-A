console.log("Hello Layout page");


//Ready1 Started
//Date Range Picker Script started
$(document).ready(function(){
	var currentFirstFinanacialYear= $("#financialYear").text().split('-')[0].trim();
	var currentSecondFinanacialYear= $("#financialYear").text().split('-')[1].trim();

//	var currentFirstFinanacialYear= $("#fromDateFinancialYear").val();
//	var currentSecondFinanacialYear= $("#toDateFinancialYear").val();
	
	var startDate = $("#fromDateFinancialYear").val();
	var endDate =  $("#toDateFinancialYear").val();

	
	$('#chartDate').daterangepicker({
	    //minDate: new Date(currentFirstFinanacialYear, '03', '01'),
	    //maxDate: new Date(currentSecondFinanacialYear, '02', '31')
		minDate: new Date(currentFirstFinanacialYear, '03', '01'),
	    maxDate: new Date(currentSecondFinanacialYear, '02', '31')
	    , dateFormat: 'yy-mm-dd'
	    , startDate: moment(startDate,'DD/MM/YYYY')
	    , endDate:  moment(endDate,'DD/MM/YYYY')
	    , locale: {
	        format: 'DD/MM/YYYY'
	    }
	});
		
});
//Date Range Picker Script Ends
//Ready1 Started Ends


//Ready2 Started
$(document).ready(function() {
	$("#logOut").click(function() {
		$("#branch").val('');
		$("#company").val('');
		window.location.href = "logOut"
	});
});
//Ready2 Started
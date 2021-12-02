// Cash book Data Start here

function getCashBookData() {

//			alert("Hiiiiiiii");
			var branch = $("#branch").val();
	        var company = $("#company").val();
//				alert("Company "+company);
//				alert("branch :"+branch);

			var fromDate = $("#fromDate").val().split("'").join("");
			var toDate = $("#toDate").val().split("'").join("");
			
//			alert(fromDate);
//			alert(toDate);

			var bookName = "Cash_Book";
			//	alert(lastYear);
			//	alert(toDate);

			var tr = "";

			 		$("#CashBookSubHeading").text("Cash Book From Date " + fromDate + " To Date "+toDate);

			$
					.ajax({
						url : getContextUrl() + '/finance/CashBook',
						method : 'POST',
						async : true,
						data : {
							company : company,
							branch : branch,
							fromDate : fromDate,
							toDate : toDate,
							
						},
						success : function(resp) {

							// 			alert("Cash Book Data : "+JSON.stringify(resp));
							console.log("cash : " + JSON.stringify(resp));
							var cashBookData = resp.P_GL_DATA;

							$
									.each(
											cashBookData,
											function(i, obj) {

												if (!("NULL" in obj)) {

													tr += '<tr>'

													tr += "<td style='color:blue;font:bold;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span class='center' onclick='cashBookDetl(\""
															+ obj.GL_ID
															+ "\",\""
															+ obj.GL_NAME
															+ "\",\""
															+ fromDate
															+ "\",\""
															+ toDate
															+ "\",\""
															+ bookName
															+ "\")'>"
															+ obj.GL_CODE
															+ "</span></a></b></td>";

													tr += "<td style='color:black;font:bold;'><b><span class='center' >"
															+ obj.GL_NAME
															+ "</span></b></td>";

													if (obj.AMOUNT == null
															|| obj.AMOUNT == 0) {
														//					    alert(" opening debit balance : "+obj.AMOUNT)
														tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
													} else {
														tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"
																+ parseFloat(
																		obj.AMOUNT)
																		.toFixed(
																				2)
																+ "</span></b></td>";
													}

													if (obj.CRDR == "CR") {
														tr += "<td style='color:red;'><b><span>"
																+ obj.CRDR
																+ "</span></b></td>";
													} else if (obj.CRDR == "DR") {
														tr += "<td style='color:green;'><b><span>"
																+ obj.CRDR
																+ "</span></b></td>";
													}

													tr += '</tr>';

												}
												$("#CashBookTable tbody")
														.empty().append(tr);

											});

						}

					});

		}
//cash Book Data End Here



//	Cash Book Date Wise 
	
function dateWiseCashBook(){

if ($("#cashBook_formDate").val() !== ""
					&& $("#cashBook_toDate").val() !== "") {

	var company = $("#company").val();
	var branch = $("#branch").val();
	
	var fromDate = $("#cashBook_formDate").val();
	var toDate = $("#cashBook_toDate").val();
	
//	alert(lastYear);
//	alert(toDate);
	var bookName = "Cash_Book";
	
	var tr = "";
	
		$("#CashBookSubHeading").text("Cash Book From Date " + fromDate + " To Date "+toDate);

	$.ajax({
		url: getContextUrl() + '/finance/CashBook',
		method: 'POST', async: true,
		data: {
			company: company,
			branch: branch,
			toDate: toDate,
			fromDate: fromDate,
		},
		success: function(resp) {
		
//			alert("Cash Book Data : "+JSON.stringify(resp));
			console.log("cash : "+JSON.stringify(resp));
			var cashBookData = resp.P_GL_DATA;
			
			$.each(cashBookData, function(i, obj) {
				
			
				if(!("NULL" in obj)){
				
					tr += '<tr>'

						tr += "<td style='color:blue;font:bold;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span class='center' onclick='cashBookDetl(\""+obj.GL_ID+"\",\""+ obj.GL_NAME+"\",\""+fromDate+"\",\""+toDate+"\",\""+bookName+"\")'>"+obj.GL_CODE+"</span></a></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >"+obj.GL_NAME+"</span></b></td>";
						
						if (obj.AMOUNT == null || obj.AMOUNT == 0) {
						//					    alert(" opening debit balance : "+obj.AMOUNT)
						tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
						} else {
						tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.AMOUNT).toFixed(2)+"</span></b></td>";
						}
						

						if(obj.CRDR == "CR"){
				 		tr += "<td style='color:red;'><b><span>"+obj.CRDR+"</span></b></td>";
				 		}
				 		else if(obj.CRDR == "DR"){
				 		tr += "<td style='color:green;'><b><span>"+obj.CRDR+"</span></b></td>";
				 		}


						tr += '</tr>';
				
				
				
				}
					$("#CashBookTable tbody").empty().append(tr);
			
			});
		
		}
		
	});
	
	}
}
//************************* Cash Book End here **************************************

		
// Bank book Data Start here



function getBankBookData() {
//			alert("Hiiiiiiii");
			var branch = $("#branch").val();
	        var company = $("#company").val();
//				alert("Company "+company);
//				alert("branch :"+branch);

			var fromDate = $("#fromDate").val();
			var toDate = $("#toDate").val();
			
//			alert(fromDate);
//			alert(toDate);

			var bookName = "Bank_Book";
			//	alert(lastYear);
			//	alert(toDate);

			var tr = "";

			 		$("#BankBookSubHeading").text("Bank Book From Date " + fromDate + " To Date "+toDate);

			$
					.ajax({
						url : getContextUrl() + '/finance/BankBook',
						method : 'POST',
						async : true,
						data : {
							company : company,
							branch : branch,
							fromDate : fromDate,
							toDate : toDate,
							
						},
						success : function(resp) {

							// 			alert("Cash Book Data : "+JSON.stringify(resp));
							console.log("cash : " + JSON.stringify(resp));
							var bankBookData = resp.P_GL_DATA;

							$
									.each(
											bankBookData,
											function(i, obj) {

												if (!("NULL" in obj)) {

													tr += '<tr>'

													tr += "<td style='color:blue;font:bold;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span class='center' onclick='cashBookDetl(\""
															+ obj.GL_ID
															+ "\",\""
															+ obj.GL_NAME
															+ "\",\""
															+ fromDate
															+ "\",\""
															+ toDate
															+ "\",\""
															+ bookName
															+ "\")'>"
															+ obj.GL_CODE
															+ "</span></a></b></td>";

													tr += "<td style='color:black;font:bold;'><b><span class='center' >"
															+ obj.GL_NAME
															+ "</span></b></td>";

													if (obj.AMOUNT == null
															|| obj.AMOUNT == 0) {
														//					    alert(" opening debit balance : "+obj.AMOUNT)
														tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
													} else {
														tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"
																+ parseFloat(
																		obj.AMOUNT)
																		.toFixed(
																				2)
																+ "</span></b></td>";
													}

													if (obj.CRDR == "CR") {
														tr += "<td style='color:red;'><b><span>"
																+ obj.CRDR
																+ "</span></b></td>";
													} else if (obj.CRDR == "DR") {
														tr += "<td style='color:green;'><b><span>"
																+ obj.CRDR
																+ "</span></b></td>";
													}

													tr += '</tr>';

												}
												$("#BankBookTable tbody")
														.empty().append(tr);

											});

						}

					});

		}
//Bank Book Data End Here
		
		
//	Bank Book Date Wise 
	
function dateWiseBankBook(){

if ($("#bankBook_formDate").val() !== ""
					&& $("#bankBook_toDate").val() !== "") {

	var company = $("#company").val();
	var branch = $("#branch").val();
	
	var fromDate = $("#bankBook_formDate").val();
	var toDate = $("#bankBook_toDate").val();
	
//	alert(lastYear);
//	alert(toDate);

	var bookName = "Bank_Book";
	
	var tr = "";
	
		$("#BankBookSubHeading").text("Bank Book From Date " + fromDate + " To Date "+toDate);

	$.ajax({
		url: getContextUrl() + '/finance/BankBook',
		method: 'POST', async: true,
		data: {
			company: company,
			branch: branch,
			toDate: toDate,
			fromDate: fromDate,
		},
		success: function(resp) {
		
//			alert("Bank Book Data : "+JSON.stringify(resp));
			console.log("Bank : "+JSON.stringify(resp));
			var BankBookData = resp.P_GL_DATA;
			
			$.each(BankBookData, function(i, obj) {
				
			
				if(!("NULL" in obj)){
				
					tr += '<tr>'

						tr += "<td style='color:blue;font:bold;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span class='center' onclick='cashBookDetl(\""+obj.GL_ID+"\",\""+ obj.GL_NAME+"\",\""+fromDate+"\",\""+toDate+"\",\""+bookName+"\")'>"+obj.GL_CODE+"</span></a></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >"+obj.GL_NAME+"</span></b></td>";
						
						if (obj.AMOUNT == null || obj.AMOUNT == 0) {
						//					    alert(" opening debit balance : "+obj.AMOUNT)
						tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
						} else {
						tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.AMOUNT).toFixed(2)+"</span></b></td>";
						}
						
						if(obj.CRDR == "CR"){
				 		tr += "<td style='color:red;'><b><span>"+obj.CRDR+"</span></b></td>";
				 		}
				 		else if(obj.CRDR == "DR"){
				 		tr += "<td style='color:green;'><b><span>"+obj.CRDR+"</span></b></td>";
				 		}


						tr += '</tr>';
				
				
				
				}
					$("#BankBookTable tbody").empty().append(tr);
			
			});
		
		}
		
	});
	
	}
}


//********************************** Bank Book End Here ****************************************

		
// to show cashandBankBook Page
function cashBookDetl(gl_id,gl_name,fromDate,toDate,bookName) {
//	alert("gl_name=="+gl_name);
	var str;
	str=gl_name.replace(/ /g,"_");
	var logId =  $("#LoguserId").val();
	
//	alert(logId);	

						
	window.location.href = "cashAndBankBook?fromDate=" +fromDate + "&toDate="+toDate +"&Gl_name="+str+"&Gl_id="+gl_id+"&BookName="+bookName+"&logId="+logId;		
}
//End Cash and Bank Book jsp call code 

// Month Summary Code Start Here

function monthSummaryDetails(gl_id, gl_name,bookName){
	var company = $("#company").val();
	var branch = $("#branch").val();
	var fromDate = $("#fromDate").val();
	var toDate = $("#toDate").val();
	
	
	
	var date = fromDate.split("/")[0].trim();
	var month = fromDate.split("/")[1].trim();
	var year = fromDate.split("/")[2].trim();
	
	var date1 = toDate.split("/")[0].trim();
	var month1 = toDate.split("/")[1].trim();
	var year1 = toDate.split("/")[2].trim();
	
	var newFromD = month +'/'+ date +'/'+ year;
	var newToD =  month1 +'/'+ date1 +'/'+ year1;
	
    var newFdate = moment(newFromD).format("MMM-YYYY");
    var newTdate = moment(newToD).format("MMM-YYYY");
    
	var str = gl_name.split("_").join(" ");
	var tr = "";
//	alert(newFdate);
//	alert(newTdate);

	$("#MonthSummarySubHeading").text("Month Summary From Month " + newFdate + " To "+newTdate);
		$("#GlNameHeading").text(str);
	
	$.ajax({
		url: getContextUrl() + '/finance/MonthSummary',
		method: 'POST', async: true,
		data: {
			company: company,
			branch: branch,
			fromDate: fromDate,
			toDate: toDate,
			gl_id: gl_id,
		},
		success: function(resp) {
			
			var totalReceipt = 0.00, totalPayment = 0.00;
//			alert(JSON.stringify(resp));
			console.log(JSON.stringify(resp));
			
			var monthRecord = resp.P_GL_DATA;
			
			$.each(monthRecord, function(i,obj){
			
				if(!("NULL" in obj)){
				
				 tr += '<tr>'
				 tr += "<td style='color:blue;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span onclick='getDateWiseReport(\""+gl_id+"\",\""+gl_name+"\",\""+obj.TR_DATE2+"\",\""+bookName+"\");nextTab(\"" +'1' +"\");'>"+obj.TR_DATE2+"</span></a></b></td>";
				 
				 if (obj.OPENING == null || obj.OPENING == 0) {
						//					    alert(" opening debit balance : "+obj.OPENING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.OPENING).toFixed(2)+"</span></b></td>";
				 }
				 if(obj.OP_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 else if(obj.OP_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 if (obj.RECEIPT == null || obj.RECEIPT == 0) {
						//					    alert(" opening debit balance : "+obj.RECEIPT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.RECEIPT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.PAYMENT == null || obj.PAYMENT == 0) {
						//					    alert(" opening debit balance : "+obj.PAYMENT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.PAYMENT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.CLOSING == null || obj.CLOSING == 0) {
						//					    alert(" opening debit balance : "+obj.CLOSING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.CLOSING).toFixed(2)+"</span></b></td>";
				 }
				 
				 if(obj.CL_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 else if(obj.CL_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 
				 tr += '</tr>';
				 
				 totalReceipt = (totalReceipt + parseFloat(obj.RECEIPT));
				 totalPayment = (totalPayment + parseFloat(obj.PAYMENT));
				 
				
				 
				 	
				}
			
			});
			
			$("#MonthSummaryTable tbody").empty().append(tr);
				$("#totalReceipt1").text(totalReceipt.toFixed(2));
				$("#totalPayment1").text(totalPayment.toFixed(2));
			
		}
		
	});	
	
}

function dateWiseMonthSummary(){

if ($("#month_formDate").val() !== ""
					&& $("#month_toDate").val() !== "") {
					
	var company = $("#company").val();
	var branch = $("#branch").val();
	var fromDate = $("#month_formDate").val();
	var toDate = $("#month_toDate").val();
//	alert(fromDate);
//	alert(toDate);
	
	var gl_id =  $("#Gl_id").val();
   var gl_name = $("#Gl_name").val();
   var bookName = $("#Book_Name").val();
	
	var month = fromDate.split("/")[0].trim();
	var year = fromDate.split("/")[1].trim();
	
	if(month == "January"){
		var monthNo = 0;
	}
	if(month == "February"){
		var monthNo = 1;
	}
	if(month == "March"){
		var monthNo = 2;
	}
	if(month == "April"){
		var monthNo = 3;
	}
	if(month == "May"){
		var monthNo = 4;
	}
	if(month == "June"){
		var monthNo = 5;
	}
	if(month == "July"){
		var monthNo = 6;
	}
	if(month == "August"){
		var monthNo = 7;
	}
	if(month == "September"){
		var monthNo = 8;
	}
	if(month == "October"){
		var monthNo = 9;
	}
	if(month == "November"){
		var monthNo = 10;
	}
	if(month == "December"){
		var monthNo = 11;
	}
	
	var month1 = toDate.split("/")[0].trim();
	var year1 = toDate.split("/")[1].trim();
	
	if(month1 == "January"){
		var monthNo1 = 0;
	}
	if(month1 == "February"){
		var monthNo1 = 1;
	}
	if(month1 == "March"){
		var monthNo1 = 2;
	}
	if(month1 == "April"){
		var monthNo1 = 3;
	}
	if(month1 == "May"){
		var monthNo1 = 4;
	}
	if(month1 == "June"){
		var monthNo1 = 5;
	}
	if(month1 == "July"){
		var monthNo1 = 6;
	}
	if(month1 == "August"){
		var monthNo1 = 7;
	}
	if(month1 == "September"){
		var monthNo1 = 8;
	}
	if(month1 == "October"){
		var monthNo1 = 9;
	}
	if(month1 == "November"){
		var monthNo1 = 10;
	}
	if(month1 == "December"){
		var monthNo1 = 11;
	}
	
	
	var date = new Date();
 	var firstDay = new Date(year, monthNo, 1);
	var lastDay = new Date(year1, monthNo1 + 1, 0);
	
	var datef = new Date(firstDay);
	
	var datet = new Date(lastDay);
	var month_firstDate = ((datef.getDate() > 9) ? datef.getDate() : ('0' + datef.getDate())) + '/' + ((datef.getMonth() > 8) ? (datef.getMonth() + 1) : ('0' + (datef.getMonth() + 1))) + '/' + datef.getFullYear();
	var month_lastDate = ((datet.getDate() > 9) ? datet.getDate() : ('0' + datet.getDate())) + '/' + ((datet.getMonth() > 8) ? (datet.getMonth() + 1) : ('0' + (datet.getMonth() + 1))) + '/' + datet.getFullYear();
//	alert(month_firstDate);
//	alert(month_lastDate);
	
	
    
	var str = gl_name.split("_").join(" ");
	
//	alert(str);
	var tr = "";
	
		$("#MonthSummarySubHeading").empty().append("<span>Month Summary From Month </span><span ><b>" + fromDate + "</b></span> <span>To</span> <span><b>"+toDate+"</b></span>");
		$("#GlNameHeading").text(str);

	$.ajax({
		url: getContextUrl() + '/finance/MonthSummary',
		method: 'POST', async: true,
		data: {
			company: company,
			branch: branch,
			fromDate: month_firstDate,
			toDate: month_lastDate,
			gl_id: gl_id,
		},
		success: function(resp) {
			
			var totalReceipt = 0.00, totalPayment = 0.00;
//			alert(JSON.stringify(resp));
			console.log(JSON.stringify(resp));
			
			var monthRecord = resp.P_GL_DATA;
			
			$.each(monthRecord, function(i,obj){
			
				if(!("NULL" in obj)){
				
				 tr += '<tr>'
				 tr += "<td style='color:blue;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span onclick='getDateWiseReport(\""+gl_id+"\",\""+gl_name+"\",\""+obj.TR_DATE2+"\",\""+bookName+"\");nextTab(\"" +'1' +"\")'>"+obj.TR_DATE2+"</span></a></b></td>";
				 
				 if (obj.OPENING == null || obj.OPENING == 0) {
						//					    alert(" opening debit balance : "+obj.OPENING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.OPENING).toFixed(2)+"</span></b></td>";
				 }
				 if(obj.OP_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 else if(obj.OP_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 if (obj.RECEIPT == null || obj.RECEIPT == 0) {
						//					    alert(" opening debit balance : "+obj.RECEIPT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.RECEIPT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.PAYMENT == null || obj.PAYMENT == 0) {
						//					    alert(" opening debit balance : "+obj.PAYMENT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.PAYMENT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.CLOSING == null || obj.CLOSING == 0) {
						//					    alert(" opening debit balance : "+obj.CLOSING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.CLOSING).toFixed(2)+"</span></b></td>";
				 }
				 
				 if(obj.CL_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 else if(obj.CL_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 
				 tr += '</tr>';
				 
				 totalReceipt = (totalReceipt + parseFloat(obj.RECEIPT));
				 totalPayment = (totalPayment + parseFloat(obj.PAYMENT));
				 
				
				 
				 	
				}
			
			});
			 $("#MonthSummaryTable tbody").empty().append(tr);
				$("#totalReceipt1").text(totalReceipt.toFixed(2));
				$("#totalPayment1").text(totalPayment.toFixed(2));
		
		}
	});

}

}


//Month summary code end here

//Date Summary Code Start Here
	
	function getDateWiseReport(gl_id, gl_name, gl_date,bookName){

//alert(gl_id);
	var company = $("#company").val();
	var branch = $("#branch").val();
	var fromDate = gl_date;
	var toDate = gl_date;
//	alert(fromDate);
//	alert(toDate);
	var month = gl_date.split("-")[0].trim();
	if(month == "JAN"){
		var monthNo = 0;
	}
	if(month == "FEB"){
		var monthNo = 1;
	}
	if(month == "MAR"){
		var monthNo = 2;
	}
	if(month == "APR"){
		var monthNo = 3;
	}
	if(month == "MAY"){
		var monthNo = 4;
	}
	if(month == "JUN"){
		var monthNo = 5;
	}
	if(month == "JUL"){
		var monthNo = 6;
	}
	if(month == "AUG"){
		var monthNo = 7;
	}
	if(month == "SEP"){
		var monthNo = 8;
	}
	if(month == "OCT"){
		var monthNo = 9;
	}
	if(month == "NOV"){
		var monthNo = 10;
	}
	if(month == "DEC"){
		var monthNo = 11;
	}
	
	var year = gl_date.split("-")[1].trim();
//	alert(year);
	var str = gl_name.split("_").join(" ");
//	alert(str);
	

	
	var date = new Date();
 	var firstDay = new Date(year, monthNo, 1);
	var lastDay = new Date(year, monthNo + 1, 0);
	
	var datef = new Date(firstDay);
	
	var datet = new Date(lastDay);
	var month_firstDate = ((datef.getDate() > 9) ? datef.getDate() : ('0' + datef.getDate())) + '/' + ((datef.getMonth() > 8) ? (datef.getMonth() + 1) : ('0' + (datef.getMonth() + 1))) + '/' + datef.getFullYear();
	var month_lastDate = ((datet.getDate() > 9) ? datet.getDate() : ('0' + datet.getDate())) + '/' + ((datet.getMonth() > 8) ? (datet.getMonth() + 1) : ('0' + (datet.getMonth() + 1))) + '/' + datet.getFullYear();
//	alert(month_firstDate);
//	alert(month_lastDate);
	
	$("#dateWise_formDate").val(month_firstDate);
	$("#dateWise_toDate").val(month_lastDate);
	
	var tr = "";
	
		$("#DateWiseSummarySubHeading").text("Date Wise Summary");
		$("#GlmonthHeading").text(gl_date);
//		alert("abc "+str);
		$("#NameHeading").text(str);
		
	$.ajax({
		url: getContextUrl() + '/finance/DateSummary',
		method: 'POST', async: true,
		data: {
			company: company,
			branch: branch,
			fromDate: month_firstDate,
			toDate: month_lastDate,
			gl_id: gl_id,
		},
		success: function(resp) {
			
			var totalReceipt = 0.00, totalPayment = 0.00;
//			alert(JSON.stringify(resp));
			console.log("date :"+JSON.stringify(resp));
			
			var dateRecord = resp.P_GL_DATA;
			
			if(dateRecord.length == 0){
			tr += '<tr>'
				
			tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
			tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
			 tr += "<td style='color:Red;text-align:center;'><b><span>No Record Found</span></b></td>";
			
			tr += '</tr>';
			}
			else{
			$.each(dateRecord, function(i,obj){
				if(!("NULL" in obj)){
				
					tr += '<tr>'
					
				 tr += "<td style='color:black;text-align:center;'><b><span>"+obj.BRANCH+"</span></b></td>";
				 
				 tr += "<td style='color:blue;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span onclick='getDetailsTransactionReport(\""+gl_id+"\",\""+gl_name+"\",\""+obj.DATES+"\",\""+bookName+"\");nextTab(\"" +'2' +"\")'>"+obj.DATES+"</span></a></b></td>";
				 
				 if (obj.OPENING == null || obj.OPENING == 0) {
						//					    alert(" opening debit balance : "+obj.OPENING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.OPENING).toFixed(2)+"</span></b></td>";
				 }
				 
				 if(obj.OP_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 else if(obj.OP_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 
				 if (obj.RECEIPT == null || obj.RECEIPT == 0) {
						//					    alert(" opening debit balance : "+obj.RECEIPT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.RECEIPT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.PAYMENT == null || obj.PAYMENT == 0) {
						//					    alert(" opening debit balance : "+obj.PAYMENT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.PAYMENT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.CLOSING == null || obj.CLOSING == 0) {
						//					    alert(" opening debit balance : "+obj.CLOSING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.CLOSING).toFixed(2)+"</span></b></td>";
				 }
				 
				 if(obj.CL_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 else if(obj.CL_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 
				 tr += '</tr>';
				 
				 totalReceipt = (totalReceipt + obj.RECEIPT);
				 totalPayment = (totalPayment + obj.PAYMENT);
				 
				
				
				
				}
				else
				{
				 
				}
			
			});
			}
				 $("#DateWiseSummaryTable tbody").empty().append(tr);
				$("#dateWiseReceiptTotal").text(totalReceipt.toFixed(2));
				$("#dateWisePaymentTotal").text(totalPayment.toFixed(2));
			
		}
	});


}

function getdateWiseDateWiseSummary(gl_id, gl_name, bookName){
if ($("#dateWise_formDate").val() !== ""
					&& $("#dateWise_toDate").val() !== "") {
		
		//alert(gl_id);
	var company = $("#company").val();
	var branch = $("#branch").val();
	
//	alert(fromDate);
//	alert(toDate);
	
	
	
	var str = gl_name.split("_").join(" ");
//	alert(str);
	
	
	var fromDate = $("#dateWise_formDate").val();
	var toDate = $("#dateWise_toDate").val();
	
	var tr = "";
	
		$("#DateWiseSummarySubHeading").text("Date Wise Summary from Date "+fromDate+" to Date "+toDate);
//		$("#GlmonthHeading").text(gl_date);
//		alert("abc "+str);
		$("#NameHeading").text(str);
		
	$.ajax({
		url: getContextUrl() + '/finance/DateSummary',
		method: 'POST', async: true,
		data: {
			company: company,
			branch: branch,
			fromDate: fromDate,
			toDate: toDate,
			gl_id: gl_id,
		},
		success: function(resp) {
			
			var totalReceipt = 0.00, totalPayment = 0.00;
//			alert(JSON.stringify(resp));
			console.log("date :"+JSON.stringify(resp));
			
			var dateRecord = resp.P_GL_DATA;
			
			$.each(dateRecord, function(i,obj){
				if(!("NULL" in obj)){
				
					tr += '<tr>'
					
				 tr += "<td style='color:black;text-align:center;'><b><span>"+obj.BRANCH+"</span></b></td>";
				 
				 tr += "<td style='color:blue;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span onclick='getDetailsTransactionReport(\""+gl_id+"\",\""+gl_name+"\",\""+obj.DATES+"\",\""+bookName+"\");nextTab(\"" +'2' +"\")'>"+obj.DATES+"</span></a></b></td>";
				 
				 if (obj.OPENING == null || obj.OPENING == 0) {
						//					    alert(" opening debit balance : "+obj.OPENING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.OPENING).toFixed(2)+"</span></b></td>";
				 }
				 
				 if(obj.OP_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 else if(obj.OP_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.OP_CRDR+"</span></b></td>";
				 }
				 
				 if (obj.RECEIPT == null || obj.RECEIPT == 0) {
						//					    alert(" opening debit balance : "+obj.RECEIPT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.RECEIPT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.PAYMENT == null || obj.PAYMENT == 0) {
						//					    alert(" opening debit balance : "+obj.PAYMENT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.PAYMENT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.CLOSING == null || obj.CLOSING == 0) {
						//					    alert(" opening debit balance : "+obj.CLOSING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.CLOSING).toFixed(2)+"</span></b></td>";
				 }
				 
				 if(obj.CL_CRDR == "CR"){
				 tr += "<td style='color:red;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 else if(obj.CL_CRDR == "DR"){
				 tr += "<td style='color:green;'><b><span>"+obj.CL_CRDR+"</span></b></td>";
				 }
				 
				 tr += '</tr>';
				 
				 totalReceipt = (totalReceipt + obj.RECEIPT);
				 totalPayment = (totalPayment + obj.PAYMENT);
				 
				
				
				
				}
			
			});
				 $("#DateWiseSummaryTable tbody").empty().append(tr);
				$("#dateWiseReceiptTotal").text(totalReceipt.toFixed(2));
				$("#dateWisePaymentTotal").text(totalPayment.toFixed(2));
			
		}
	});
		


}
}

	

// Date Summary Code End Here

//Details Summary Code Start Here
	
function getDetailsTransactionReport(gl_id, gl_name, gl_date,bookName){

//alert(gl_id);
	var company = $("#company").val();
	var branch = $("#branch").val();
	var fromDate = gl_date;
	var toDate = gl_date;
//		
	var str = gl_name.split("_").join(" ");
	var Book_Name = bookName.split("_").join(" ");
	
//	alert("From Date : "+fromDate);
//	alert("to Date : "+toDate);
	
	
	
	var tr = "";
	
		$("#detailsTranSubHeading").text("Details Transaction As of Date : " + fromDate);
//		$("#GlmonthHeading").text(gl_date);
//		alert("abc "+str);
		$("#GlNameDetailTran").text(str);
		
	$.ajax({
		url: getContextUrl() + '/finance/DetailsTransaction',
		method: 'POST', async: true,
		data: {
			company: company,
			branch: branch,
			fromDate: fromDate,
			toDate: toDate,
			gl_id: gl_id,
		},
		success: function(resp) {
			var a = 0;
			var receiptT = 0.00, paymentT = 0.00;
//			alert(JSON.stringify(resp));
			console.log("DetailsTransaction : "+JSON.stringify(resp));
			
			var dateRecord = resp.P_GL_DATA;
			
			$.each(dateRecord, function(i,obj){
				if(!("NULL" in obj)){
				
					tr += '<tr>'
					
				 /*tr += "<td style='color:black;text-align:center;'><b><span>"+obj.BRANCH+"</span></b></td>";
				 
				 tr += "<td style='color:black;text-align:center;'><b><span>"+obj.TCODE+"</span></b></td>";*/
				 
				 tr += "<td style='color:black;text-align:center;'><b>"+obj.DATES+"</b></td>";
				 
				 if (obj.DOCNO == null || obj.DOCNO == 0) {
						//					    alert(" opening debit balance : "+obj.DOCNO)
				 tr += "<td style='color:blue;font:bold;text-align:center;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:blue;font:bold;text-align:center;cursor: pointer;white-space:nowrap;'><b>&nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp;<a href='#'><span onclick='getVoucherTransaction(\""+gl_id+"\",\""+gl_name+"\",\""+obj.DATES+"\",\""+obj.TRNO+"\");nextTab(\"" +'3' +"\")'>"+obj.DOCNO+"</span></a></b></td>";
				 }
				 
				 if (obj.PARTICULAR == null) {
						//					    alert(" opening debit balance : "+obj.RECEIPT)
				 tr += "<td style='color:black;font:bold;text-align:left;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:black;text-align:left;' class='DVTTSurekhNormal'><b>"+obj.PARTICULAR+"</b></td>";
				 }
				 
				 if (obj.CHEQUE_NO == null) {
						//					    alert(" opening debit balance : "+obj.PAYMENT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+obj.CHEQUE_NO+"</span></b></td>";
				 }
				 
				 if (obj.RECEIPT == null) {
						//					    alert(" opening debit balance : "+obj.CLOSING)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+(obj.RECEIPT.toFixed(2))+"</span></b></td>";
				 }
				 
				 if (obj.PAYMENT == null) {
						//					    alert(" opening debit balance : "+obj.PAYMENT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+(obj.PAYMENT.toFixed(2))+"</span></b></td>";
				 }
				 
				 
				 tr += '</tr>';
				 
				 receiptT = (receiptT + obj.RECEIPT);
				 paymentT = (paymentT + obj.PAYMENT);
			
			
			
				 
				 $("#OpeningDetailTran").text(obj.OPENING.toFixed(2));
				 
				 
				 if(obj.OP_CRDR==='CR'){
				 	$("#OpeningCRDR").text(obj.OP_CRDR);
				 	$("#OpeningCRDR").css({'color':'red'});
				 } else if(obj.OP_CRDR==='DR'){
				 	$("#OpeningCRDR").text(obj.OP_CRDR);
				 	$("#OpeningCRDR").css({'color':'green'});
				 }
				
				 //$("#OpeningCRDR").text(obj.OP_CRDR=='CR' ? obj.OP_CRDR $("#OpeningCRDR").css({'color':'red'}) : $("#OpeningCRDR").css({'color':'green'}));
				
				
				
				
				 
				  $("#ClosingDetailTran").text(obj.CLOSING.toFixed(2));
				  
				 //alert(obj.CL_CRDR);
				 if(obj.CL_CRDR==='DR'){
				  // alert("inside if closing : "+obj.OP_CRDR);
				 	$("#ClosingCRDR").text(obj.CL_CRDR);
				 	$("#ClosingCRDR").css({'color':'green'});
				 } else if(obj.CL_CRDR==='CR'){
				 	$("#ClosingCRDR").text(obj.CL_CRDR);
				 	$("#ClosingCRDR").css({'color':'red'});
				 }
//				 /*$("#ClosingCRDR").text(obj.CL_CRDR);*/
				
				
				a = i;
				}
				
			});
			a = a+1;
			
				 $("#DetailsTranTable tbody").empty().append(tr);
				 
				 
				 $("#transaction").text(Book_Name);
				 $("#completeParticular").text();
				
				$("#totalRec").text(a);
				$("#detailsReceiptTotal").text(receiptT.toFixed(2));
				$("#detailsPaymentTotal").text(paymentT.toFixed(2));
			
		}
	});


}	

// Details Summary Code End Here

//Voucher Transaction Code Start Here

	
	function getVoucherTransaction(gl_id, gl_name, gl_date,trno){

//alert(gl_id);
	var company = $("#company").val();
	var branch = $("#branch").val();
	var fromDate = gl_date;
	var toDate = gl_date;
//		
	var str = gl_name.split("_").join(" ");
//	var Book_Name = bookName.split("_").join(" ");
	
	var tr = "";
	
		
//		$("#GlmonthHeading").text(gl_date);
//		alert("abc "+str);
//		$("#GlNameVT").text(str);
		
	$.ajax({
		url: getContextUrl() + '/finance/VoucherTransaction',
		method: 'POST', async: true,
		data: {
			trno: trno,
		},
		success: function(resp) {
		
		VTdebitTotal = 0.00, VTcreditTotal = 0.00;
//			alert(JSON.stringify(resp));
			console.log("DetailsTransaction : "+JSON.stringify(resp));
			
			var dateRecord = resp.P_GL_DATA;
			
			$.each(dateRecord, function(i,obj){
				if(!("NULL" in obj)){
				
					tr += '<tr>'
					
				 
				 
//				 tr += "<td style='color:black;text-align:center;'><b>"+obj.DATES+"</b></td>";
				 
				
				 
				 if (obj.GL_AC_CODE == null || obj.GL_AC_CODE == 0) {
						//					    alert(" opening debit balance : "+obj.DOCNO)
				 tr += "<td style='color:black;text-align:center;'><b></b></td>";
				 } else {
				 tr += "<td style='color:black;text-align:center;'><b>"+obj.GL_AC_CODE+"</b></td>";
				 }
				 
				 
				 if (obj.GL_AC_NAME == null) {
						//					    alert(" opening debit balance : "+obj.GL_AC_NAME)
				 tr += "<td style='color:black;font:bold;text-align:left;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:left;'><b><span class='center' >"+obj.GL_AC_NAME+"</span></b></td>";
				 }
				 
				 if (obj.PARTICULAR == null) {
						//					    alert(" opening debit balance : "+obj.PARTICULAR)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:black;text-align:center;font-size:18px;' class='DVTTSurekhNormal'><b>"+obj.PARTICULAR+"</b></td>";
				 }
				 
				 
				 if (obj.CHEQUE_NO == null) {
						//					    alert(" opening debit balance : "+obj.PAYMENT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+obj.CHEQUE_NO+"</span></b></td>";
				 }
				 
				 if (obj.DEBIT == null || obj.DEBIT == 0) {
						//					    alert(" opening debit balance : "+obj.DEBIT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.DEBIT).toFixed(2)+"</span></b></td>";
				 }
				 
				 if (obj.CREDIT == null || obj.CREDIT == 0) {
						//					    alert(" opening credit balance : "+obj.CREDIT)
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >0.00</span></b></td>";
				 } else {
				 tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >"+parseFloat(obj.CREDIT).toFixed(2)+"</span></b></td>";
				 }
				 
				 
				 tr += '</tr>';
				 
				 VTdebitTotal = VTdebitTotal + obj.DEBIT;
				 VTcreditTotal = VTcreditTotal + obj.CREDIT;
				 
				 
				 
				if (obj.NARRATION != null) {
				
					$("#GlNameVT").empty().append("<b><span style='font-size:16px;'>Narration : </span><span style='color:black;' class='DVTTSurekhNormal'>"+obj.NARRATION+"</span></b>");
				
				 } 
				
				$("#VoucherTransactionSubHeading").empty().append("<span>Voucher Transaction As of Date &nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp; </span><span ><b> " + gl_date+" </b></span><span style='padding-left:50px;color:white'><b> Document No. &nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp; </b></span><span style='color:white;'><b>"+obj.DOCNO+"</b></span>");
				}
				
			});
				$("#VoucherTranTable tbody").empty().append(tr);
				$("#vocherTdebitTotal").text(VTdebitTotal.toFixed(2));
				$("#vocherTcreditTotal").text(VTcreditTotal.toFixed(2));
			
		}
	});


}
// Voucher Transaction Code End Here

// Next Tab

		
function nextTab(pillCount){
    $("#pills-tab-with-icon li:eq("+pillCount+") a").tab('show');
}

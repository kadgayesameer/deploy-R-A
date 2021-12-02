alert("i am in");
var sub_groupGl ={};
$(document).ready(function(){
// $('#myModal').modal('show');
// $("#pin1").focus();
	
	var loginSaleData = '';
	// // console.log('loginSaleData::',loginSaleData);
	var loginPurchaseData = '';
	// console.log('loginPurchaseData::',loginPurchaseData);
	var loginExpenseData = '';
	// console.log('loginExpenseData::',loginExpenseData);
	var loginProfitLossData = '';
	// console.log('loginProfitLossData::',loginProfitLossData);
	var loginBankData = '';
	// console.log('loginBankData::',loginBankData);
	var loginOverdueData = '';
	console.log('loginOverdueData::',loginOverdueData);
	var loginUserId= "";
	var loginFromDate = $("#loginFromDate").val();// '${loginFromDate}';
	var loginToDate = $("#loginToDate").val();// '${loginToDate}';
	// var userId = $("#LoginuserId").val();
	// alert("LoginuserId =="+userId);
	console.log('loginFromDate::',loginFromDate);
	console.log('loginToDate::',loginToDate);
	var b = '${branch}';

	$(document).ajaxStart(function () {
	    $("#overlay").show();
	}); 
	$(document).ajaxStop(function () {
	    $("#overlay").hide();
	});
	$('.number_only').bind('keyup paste', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
	});
	$('.pin').on('keyup', function() {
	    if ($(this).val()) {
	        $(this).next().focus().select();
	    }
	});
	$('#myTab a').on('click', function (e) {
		// alert("In click a");
		  e.preventDefault()
		    // $("#pills-BalanceSheet").css("display", "block");
		  
		  $(this).tab('show');
		});
	 /*$(".nlink").click(function () {
         var nlink_name = $(this).attr("name");
        alert("nlink_name=="+nlink_name);
         $.ajax({
             url: "${pageContext.request.contextPath}/" + nlink_name + "",
             type: 'post',
             data: {
             },
             success: function (resp) {
                 $("#bodyDiv").hide();
                 $("#frmdiv").show();
                 $("#frmdiv").empty();
                 $("#frmdiv").append(resp);
             }
         });
     });*/

		
	/*
	 * $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) { e.target //
	 * newly activated tab e.relatedTarget // previous active tab })
	 */
	//alert("login.js");
	 $(document).ready(function() {
	 $.ajax({
		url : "getRecordLst",
		type : 'post',
		dataType : 'json',
		data : {
			sqlMstId : 44,
			param : "null",
		},
		success : function(resp)              
		{ 
			$.each(resp, function(key, value) {
				nKey = parseInt(key) + 1;				
				var addr = resp[key].ADCM_ADD1 +' '+resp[key].ADCM_ADD2+' '+resp[key].ADCM_ADD3;
				$("#company1").append(resp[key].ADCM_NAME );
				$("#company").val(resp[key].ADCM_ID);
				$("#address").append(addr)
			});
			
			// console.log("test company==="+$("#company1").text());
			// titleCase();
			var str = $("#company1").text();
			// alert(str);
			
			str = str.toLowerCase().split(' '); 
			for (var i = 0; i < str.length; i++) { 
				str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
				// console.log("str check==="+str[i]);
			} 
			
		 console.log("str check==="+str.join(' '));
		$("#company1").text(str.join(' '));
		},
	});
	

	$.ajax({
		url : "getRecordLst",
		type : 'post',
		dataType : 'json',
		data : {
			sqlMstId : 43,
			param : "null",
		},
		success : function(resp) {
			$("#branchId").append('<option value="">Please Select');
			$.each(resp, function(key, value) {
				branchList = "Select Branch" + resp[key].ADCM_NAME;
				nKey = parseInt(key) + 1;
// $("#branch").append(
// '<option value="' + resp[key].ADCM_ID + '">'
// + resp[key].ADCM_NAME + '');
				$("#branchId").append(
						'<option value="' + resp[key].ADCM_ID + '">'
								+ resp[key].ADCM_NAME + '');
			});
		},
	});

	$.ajax({
		url : "getRecordLst",
		type : 'post',
		dataType : 'json',
		data : {
			sqlMstId : 44,
			param : "null",
		},
		success : function(resp) {
			$.each(resp, function(key, value) {
				nKey = parseInt(key) + 1;
				$("#company").append(
						'<option value="' + resp[key].ADCM_ID + '">'
								+ resp[key].ADCM_NAME + '');
			});

		},
	});
		
		var currentMonth = moment().month()+1;
		console.log('currentMonth::',currentMonth);
		var currentYear = moment().year();
		console.log('currentYear::',currentYear);
		var quarters = [[4,6],[7,9],[10,12],[1,3]];
		var halfYear = [[7,12],[1,6]];
		
		var quarterMonthStart = null;
		var quarterMonthEnd = null;
		
		var halfYearMonthStart = null;
		var halfYearMonthEnd = null;

		if(currentMonth>=quarters[0][0] && currentMonth<=quarters[0][1]){
			quarterMonthStart = quarters[0][0]; 
			quarterMonthEnd = quarters[0][1];   
		}else if(currentMonth>=quarters[1][0] && currentMonth<=quarters[1][1]){
			quarterMonthStart = quarters[1][0]; 
			quarterMonthEnd = quarters[1][1];  
		}else if(currentMonth>=quarters[2][0] && currentMonth<=quarters[2][1]){
			quarterMonthStart = quarters[2][0]; 
			quarterMonthEnd = quarters[2][1];  
		}else if(currentMonth>=quarters[3][0] && currentMonth<=quarters[3][1]){
			quarterMonthStart = quarters[3][0]; 
			quarterMonthEnd = quarters[3][1];  
		}
		
		if(currentMonth>=halfYear[0][0] && currentMonth<=halfYear[0][1]){
			halfYearMonthStart = halfYear[0][0];
			halfYearMonthEnd = halfYear[0][1];
		}else if(currentMonth>=halfYear[1][0] && currentMonth<=halfYear[1][1]){
			halfYearMonthStart = halfYear[1][0];
			halfYearMonthEnd = halfYear[1][1];
		}
		var finYearStartDate = '';
		var finYearEndDate = '';
		if(currentMonth < 3){
			finYearStartDate = '01/04/'+(moment().year()-1);
			finYearEndDate = '31/03/'+(moment().year());
		} else {
			finYearStartDate = '01/04/'+moment().year();
			finYearEndDate = '31/03/'+(moment().year() +1);
		}
		console.log('quarterMonthStart::',quarterMonthStart);
		console.log('quarterMonthEnd::',quarterMonthEnd);
		console.log('halfYearMonthStart::',halfYearMonthStart);
		console.log('halfYearMonthEnd::',halfYearMonthEnd);
			
	 	var start = moment(loginFromDate,'DD/MM/YYYY');  
	    var end = moment(loginToDate,'DD/MM/YYYY');
	    var end1 = end;
	    var finYearStartDate = moment(finYearStartDate,'DD/MM/YYYY');
		var finYearEndDate = moment(finYearEndDate,'DD/MM/YYYY');
		/*var YearDate= finYearStartDate.slice(6);
	     console.log("Session2==="+(YearDate-1));
	     var FinYrDate = "01/04/"+(YearDate-1);*/
    	console.log("finYearEndDate  finYearEndDate"+finYearEndDate)
	    console.log('start::',start);
    	console.log('end::',end);
    	console.log('moment().quarter()::', moment(finYearStartDate).subtract(1, 'ms').quarter())
    	console.log('moment().quarters()::', moment(finYearStartDate).quarters())

        function cb(start, end) {
    		$('.choosenLabel').empty();

    		console.log("CBBBBBBBBBBB");
    	    $('#sugarnByprodStockRage .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    		$('#BalanceSheetsPanelDate .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));    		
    	    $('#dailyCrushingRage .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    	    $('#expenseRage .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    	    $('#cashAndBankRage .date').html('As On Date - ' + end1.format('MMMM D, YYYY'));
    	    $('#pendingBillsRage .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    	    $('#vehicleStatusRage .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    	    $('#saleRage .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            $('#purchaseRage .date').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    		console.log(start.format('MMMM D, YYYY')+"CBBBBBBBBBBB");
    		
// $('#sugarnByprodStockRage .date').html(start.format('MMMM D, YYYY') + ' - ' +
// end.format('MMMM D, YYYY'));
// $('#dailyCrushingRage .date').html(start.format('MMMM D, YYYY') + ' - ' +
// end.format('MMMM D, YYYY'));
// $('#expenseRage .date').html(start.format('MMMM D, YYYY') + ' - ' +
// end.format('MMMM D, YYYY'));
// $('#cashAndBankRage .date').html('As On Date - ' + end1.format('MMMM D,
// YYYY'));
// $('#pendingBillsRage .date').html(start.format('MMMM D, YYYY') + ' - ' +
// end.format('MMMM D, YYYY'));
// $('#vehicleStatusRage .date').html(start.format('MMMM D, YYYY') + ' - ' +
// end.format('MMMM D, YYYY'));
// $('#saleRage .date').html(start.format('MMMM D, YYYY') + ' - ' +
// end.format('MMMM D, YYYY'));
// $('#purchaseRage .date').html(start.format('MMMM D, YYYY') + ' - ' +
// end.format('MMMM D, YYYY'));
           
        }            

    /*
	 * $('#sugarnByprodStockRage').daterangepicker(getDateRangeOptions('right'),
	 * cb).on('apply.daterangepicker', function(ev, picker) {
	 * $(this).find('.choosenLabel').empty().append('<span class="chosenLabel"> -
	 * '+picker.chosenLabel+' </span>');
	 * getSingleChartDataByChartId("","","",picker.startDate.format('DD/MM/YYYY'),picker.endDate.format('DD/MM/YYYY'),null,0);
	 * });
	 * 
	 * $('#BalanceSheetsPanelDate').daterangepicker(getDateRangeOptions('right'),
	 * cb).on('apply.daterangepicker', function(ev, picker) {
	 * $(this).find('.choosenLabel').empty().append('<span class="chosenLabel"> -
	 * '+picker.chosenLabel+' </span>');
	 * //getBalanceSheetData(picker.startDate.format('DD/MM/YYYY'),picker.endDate.format('DD/MM/YYYY'),null,0);
	 * });
	 * 
	 * $('#expenseRage').daterangepicker(getDateRangeOptions('right'),
	 * cb).on('apply.daterangepicker', function(ev, picker) {
	 * $(this).find('.choosenLabel').empty().append('<span class="chosenLabel"> -
	 * '+picker.chosenLabel+' </span>');
	 * getSingleChartDataByChartId("Expense","#expenseChart","donut",picker.startDate.format('DD/MM/YYYY'),picker.endDate.format('DD/MM/YYYY'),null,0);
	 * });
	 * 
	 * $('#saleRage').daterangepicker(getDateRangeOptions('right'),
	 * cb).on('apply.daterangepicker', function(ev, picker) {
	 * $(this).find('.choosenLabel').empty().append('<span class="chosenLabel"> -
	 * '+picker.chosenLabel+' </span>'); var monthFlag =
	 * picker.chosenLabel.indexOf('Quarter') > 0 ||
	 * picker.chosenLabel.indexOf('Year') > 0 ? 'Y' : 'N';
	 * getSingleChartDataByChartId("Sale","#saleChart","line",picker.startDate.format('DD/MM/YYYY'),picker.endDate.format('DD/MM/YYYY'),monthFlag,0);
	 * });
	 * 
	 * $('#purchaseRage').daterangepicker(getDateRangeOptions('right'),
	 * cb).on('apply.daterangepicker', function(ev, picker) {
	 * $(this).find('.choosenLabel').empty().append('<span class="chosenLabel"> -
	 * '+picker.chosenLabel+' </span>'); var monthFlag =
	 * picker.chosenLabel.indexOf('Quarter') > 0 ||
	 * picker.chosenLabel.indexOf('Year') > 0 ? 'Y' : 'N';
	 * getSingleChartDataByChartId("Purchase","#purchaseChart","line",picker.startDate.format('DD/MM/YYYY'),picker.endDate.format('DD/MM/YYYY'),monthFlag,0);
	 * });
	 * 
	 * $('#pendingBillsRage').daterangepicker(getDateRangeOptions('left'),
	 * cb).on('apply.daterangepicker', function(ev, picker) {
	 * $(this).find('.choosenLabel').empty().append('<span class="chosenLabel"> -
	 * '+picker.chosenLabel+' </span>'); //
	 * getSingleChartDataByChartId("ProfitLoss","#profitLossChart","area",picker.startDate.format('DD/MM/YYYY'),picker.endDate.format('DD/MM/YYYY'),null);
	 * });
	 * 
	 * $('#dailyCrushingRage').daterangepicker(getDateRangeOptions('left'),
	 * cb).on('apply.daterangepicker', function(ev, picker) {
	 * $(this).find('.choosenLabel').empty().append('<span class="chosenLabel"> -
	 * '+picker.chosenLabel+' </span>');
	 * getSingleChartDataByChartId("dailyCrushing","#dailyCrushingChart","area",picker.startDate.format('DD/MM/YYYY'),picker.endDate.format('DD/MM/YYYY'),null,0);
	 * });
	 */
    	
    	$('#chartDate').daterangepicker(getDateRangeOptions('right'), cb);
        cb(start, end);
        console.log("finYearStartDate"+finYearStartDate+"finYearEndDate"+finYearEndDate);
        console.log("quarterMonthStart"+quarterMonthStart+"quarterMonthEnd"+quarterMonthEnd);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        $('#chartDate').val("01/04/"+(moment().year()-1) + " - "+ today);
        
        function getDateRangeOptions(position){        	
        	return {
        		startDate: start.format('DD/MM/YYYY'),
                endDate: end.format('DD/MM/YYYY'),
                // showDropdowns: true,
                minYear: 1901,
                maxYear: parseInt(moment().format('YYYY'), 10),
                // maxDate: end,
                opens: position,
               locale: {
                    format: 'DD/MM/YYYY'
                },
                "alwaysShowCalendars": true,
                /*  ranges: {
                	'As On Date' : [finYearStartDate, moment()],
                  'Today': [moment(), moment()],
                    'This Week': [moment().startOf('week'), moment().endOf('week')],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'This Quarter': [moment(quarterMonthStart,'MM').startOf('month'), moment(quarterMonthEnd,'MM').endOf('month')],
                    'This Half Year': [moment(halfYearMonthStart, 'MM').startOf('month'), moment(halfYearMonthEnd, 'MM').endOf('month')],
                    'This Year': [finYearStartDate, finYearEndDate]
                }*/
        	}
        }
// });
		
	var expenseTotalValue = 0;
	var loginExpenseChartData = [];
	var loginExpenseChartLabelsData = [];
	
	var saleTotalValue = 0;
	var loginSaleChartYaxisData = [];
	var loginSaleChartXaxisData = [];
	
	var purchaseTotalValue = 0;
	var loginPurchaseChartYaxisData = [];
	var loginPurchaseChartXaxisData = [];
	
	var profitTotalValue = 0;
	var lossTotalValue = 0;
	var loginProfitChartData = [];
	var loginLossChartData = [];
	var loginLossChartXais = [];
		
	console.log("loginProfitChartData:",loginProfitChartData);
	console.log("loginLossChartData:",loginLossChartData);	
	
	$('.profitLossPanel').find('.profitTotalValue').text(profitTotalValue);
	$('.profitLossPanel').find('.lossTotalValue').text(Math.abs(lossTotalValue));	
	$('.gl_accounts_div').empty();
	
    var seriesNames= ["Expense","Sale", "Purchase" ,["Income", "Expense"]];
    var chartIds=["#expenseChart","#saleChart","#purchaseChart","#profitLossChart"];
    var chartTypes=["donut","line","line","area"];
    var axises = [[loginExpenseChartData,loginExpenseChartLabelsData],[loginSaleChartYaxisData,loginSaleChartXaxisData],[loginPurchaseChartYaxisData,loginPurchaseChartXaxisData],[loginProfitChartData,loginLossChartData,loginLossChartXais]];
    
    console.log("loginFromDate"+loginFromDate);
    var dateRanges = [moment(loginFromDate,'DD/MM/YYYY'),moment(loginToDate,'DD/MM/YYYY')];
    
});
});

function getInoviceOverdueData(fromDate,toDate){
	$.ajax({
		  url: '/login/getLoginChartData',
		  method : 'POST', async: true,
		  data:{
			  chartName: 'overdue',
			  fromDate: fromDate,
			  toDate: toDate,
		  },
		  success: function(resp){
			  console.log('resp::',resp);
			  if(JSON.parse(resp.data)){
				    $('.invoice-panel').find('.saleInvoiceTotalValue').text(parseFloat(JSON.parse(resp.data)[0].total_sale).toFixed(2));
					$('.invoice-panel').find('.overdue .amt').text("Rs. "+parseFloat(JSON.parse(resp.data)[0].sale_overdue_amt).toFixed(2));
					$('.invoice-panel').find('.n-overdue .amt').text("Rs. "+parseFloat(JSON.parse(resp.data)[0].total_receipt).toFixed(2));
					
					var soPercent = parseFloat(JSON.parse(resp.data)[0].sale_overdue_amt)/parseFloat(JSON.parse(resp.data)[0].total_sale) * 100;
					
					$('.invoice-panel').find('.overdue-progress').attr('title','Overdue Percentage : '+(soPercent ? soPercent.toFixed(2) : 0)+' %');
					$('.invoice-panel').find('.overdue-progress .progress-bar').attr('aria-valuenow',(soPercent ? soPercent.toFixed(2) : 0));
					$('.invoice-panel').find('.overdue-progress .progress-bar').css('width',(soPercent ? soPercent.toFixed(2) : 0)+'%');
					$('.invoice-panel').find('.overdue-progress .h6').text((soPercent ? soPercent.toFixed(2) : 0)+' %');
										
					$('.invoice-panel').find('.purchaseInvoiceTotalValue').text(parseFloat(JSON.parse(resp.data)[0].total_purchase).toFixed(2));
					$('.invoice-panel').find('.deposite .amt').text("Rs. "+parseFloat(JSON.parse(resp.data)[0].total_payment).toFixed(2));
					$('.invoice-panel').find('.n-deposite .amt').text("Rs. "+parseFloat(JSON.parse(resp.data)[0].purchase_overdue_amt).toFixed(2));
					
					var poPercent = parseFloat(JSON.parse(resp.data)[0].total_payment)/parseFloat(JSON.parse(resp.data)[0].total_purchase) * 100;
					console.log('poPercent',poPercent)
					
					$('.invoice-panel').find('.deposite-progress').attr('title','Non Deposite Percentage : '+(poPercent ? poPercent.toFixed(2) : 0)+' %');
					$('.invoice-panel').find('.deposite-progress .progress-bar').attr('aria-valuenow',(poPercent ? poPercent.toFixed(2) : 0));
					$('.invoice-panel').find('.deposite-progress .progress-bar').css('width',(poPercent ? poPercent.toFixed(2) : 0)+'%');
					$('.invoice-panel').find('.deposite-progress .h6').text((poPercent ? poPercent.toFixed(2) : 0)+' %');
			  }
		  }
	  });
}

function getSingleChartDataByChartId(chartName,chartId,chartType,fromDate,toDate,monthFlag, p_type){
	var char_fromDate = $("#chartDate").val().split('-')[0].trim();
	var char_toDate = $("#chartDate").val().split('-')[1].trim();					
	$.ajax({
		  url: 'login/getLoginChartData',
		  method : 'POST', 
		  async: true,
		  data:{
			  branch : $("#branch").val(),
			  company : $("#company").val(),
			  chartName: chartName,
			  fromDate: char_fromDate,
			  toDate: char_toDate,
			  monthFlag: monthFlag,
			  p_type : p_type
		  },
		  success: function(resp){
			  console.log('resp::',resp);
			  // if(JSON.parse(resp.data)){
				  var firstDataset = [];
				  var secondDataset = [];
				  var thirdDataset = [];
				  var totalChartValue = 0;
				  var PTotQty =0;
				  var STotQty=0;
				 
				  // if(chartId=='#saleChart'){
				  console.log('resp::',resp);
				    $("#stockInTotal").text('');
					$("#stockOutTotal").text('');
					$("#sugarnBiprodStockTable tbody").empty();
				  var table = '';
				  var sale_stock_details = resp.data.SALE_STOCK_DETAILS;
				  var txt = '';
				  var stockInTotal = 0;
				  var stockOutTotal = 0;
				  var openingTot = 0; 
				  if(sale_stock_details.length == 0){
					  txt += '<tr>'
							+'<th colspan="6"  class="center"><span>No Record Found</span></th>'
							+'</tr>';
				  } else {
					  $.each(sale_stock_details,function(i,obj){
						  if(!("NULL" in obj)){							  
							txt += '<tr>'
						    txt += '<th class="center">'+(i+1)+'</td>';
							if(obj.SUBTCODE=="X"){
								txt += "<th ><a><span class='pull-left itemname' style='cursor: pointer;' onclick='SockPurchaseDetl(\""+obj.SUBTCODE+"\",\""+ obj.GROUP_NAME+"\")'>" + obj.GROUP_NAME +"</span></a></th>";
							}else{
								txt += "<th ><a><span class='pull-left itemname' style='cursor: pointer;' onclick='SockDetl(\""+obj.SUBTCODE+"\",\""+ obj.GROUP_NAME+"\")'>" + obj.GROUP_NAME +"</span></a></th>";
							}
							
							
							//----Note By Ashwini Talwekar.----Opening value is pending from database side so assignig 0.00 hardcoded value to this field please assign database value by communicating with Database team(Specially Nishant Sir and Nikhil sir.)
							//txt += '<th class=""><span class="pull-right">0.00</th>';
							if(obj.OPENING==null){
								txt += '<th class=""><span class="pull-right">'+parseFloat("0.00").toFixed(3)  +'</th>';
							}else{
								txt += '<th class=""><span class="pull-right">'+parseFloat(obj.OPENING).toFixed(3)  +'</th>';
							}
							
							
							txt += '<th class=""><span class="pull-right">'+parseFloat(obj.RECEIVED).toFixed(3)  +'</th>';
							txt += '<th class=""><span class="pull-right">'+parseFloat(obj.ISSUED).toFixed(3)    +'</th>';
							//txt += "<th ><a><span class='pull-right itemclosing' style='cursor: pointer;' onclick='showItemGodownModal( \""+fromDate+"\",\""+toDate+"\","+obj.SUBTCODE+")'>" + parseFloat(obj.CLOSING).toFixed(3) +"</span></a></th>";
							txt += '<th class=""><span class="pull-right">'+parseFloat(obj.CLOSING).toFixed(3) +'</th>';
							txt += '</tr>';
							stockInTotal += obj.ISSUED;
							stockOutTotal += obj.RECEIVED;
							openingTot +=obj.OPENING;
						}
					  })
						$("#stockInTotal").text(parseFloat(stockInTotal).toFixed(3));
						$("#stockOutTotal").text(parseFloat(stockOutTotal).toFixed(3));
						//$("#openingTot").text(parseFloat(openingTot).toFixed(3));
						
						$("#sugarnBiprodStockTable tbody").empty().append(txt);
				  }
				  
				  
				  
			//Code of Store Starts From Here
				  $("#overlay").show();
				  $("#openingTotStore").text('');
				  $("#receivedTotal").text('');
				  $("#issuedTotal").text('');
				  $("#closingTotal").text('');
                  $("#sugarnBiprodStoreTable tbody").empty();
				  var table = '';
				  var store_details = resp.data.STORE_DETAILS;
				  var txtStore = '';
				  var recievedTotal = 0;
				  var issuedTotal = 0;
				  var openingTotStore = 0; 
				  var closingTotStore = 0; 
				  if(store_details.length == 0){
                    txtStore += '<tr>'
							+'<th colspan="6"  class="center"><span>No Record Found</span></th>'
							+'</tr>';
				  } else {
					  $.each(store_details,function(i,obj){
						  if(!("NULL" in obj)){							  
							txtStore += '<tr>'
						    txtStore += '<th class="center">'+(i+1)+'</td>';
							if(obj.SUBTCODE=="X"){
								//txtStore += "<th ><a><span class='pull-left itemname' style='cursor: pointer; color: blue;' onclick='StorePurchaseDetl(\""+obj.SUBTCODE+"\",\""+ obj.GROUP_NAME+"\")'>" + obj.GROUP_NAME +"</span></a></th>";
							txtStore += "<th><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer fa-lg'><a href='#' class='continue itemname' style='color: BLUE;margin-left:10px;font-size: 15px;font-weight: bold;'><span onclick='StorePurchaseDetl(\""+obj.SUBTCODE+"\",\""+ obj.GROUP_NAME+"\")'>" + obj.GROUP_NAME +"</span></a></i></th>";
							}else{
								//txtStore += "<th ><a><span class='pull-left itemname' style='cursor: pointer; color: blue;' onclick='StoreSaleDetl(\""+obj.SUBTCODE+"\",\""+ obj.GROUP_NAME+"\")'>" + obj.GROUP_NAME +"</span></a></th>";
							txtStore += "<th><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer fa-lg'><a href='#' class='continue' style='color: BLUE;margin-left:10px;font-size: 15px;font-weight: bold;'><span onclick='StoreSaleDetl(\""+obj.SUBTCODE+"\",\""+ obj.GROUP_NAME+"\")'>" + obj.GROUP_NAME +"</span></a></i></th>";
							}
							
							
							//----Note By Ashwini Talwekar.----Opening value is pending from database side so assignig 0.00 hardcoded value to this field please assign database value by communicating with Database team(Specially Nishant Sir and Nikhil sir.)
							//txtStore += '<th class=""><span class="pull-right">0.00</th>';
							if(obj.OPENING==null){
								txtStore += '<th class=""><span class="pull-right">'+parseFloat("0.00").toFixed(3)  +'</th>';
							}else{
								txtStore += '<th class=""><span class="pull-right">'+parseFloat(obj.OPENING).toFixed(3)  +'</th>';
							}
							
							
							txtStore += '<th class=""><span class="pull-right">'+parseFloat(obj.RECEIVED).toFixed(3)  +'</th>';
							txtStore += '<th class=""><span class="pull-right">'+parseFloat(obj.ISSUED).toFixed(3)    +'</th>';
							txtStore += '<th class=""><span class="pull-right">'+parseFloat(obj.CLOSING).toFixed(3) +'</th>';
							txtStore += '</tr>';
							
				  			openingTotStore += obj.OPENING;
							recievedTotal += obj.RECEIVED;
				  			issuedTotal += obj.ISSUED;
				  			closingTotStore += obj.CLOSING;
						}
					  })
						$("#openingTotStore").text(parseFloat(openingTotStore).toFixed(3));
						$("#receivedTotal").text(parseFloat(recievedTotal).toFixed(3));
						$("#issuedTotal").text(parseFloat(issuedTotal).toFixed(3));
						$("#closingTotal").text(parseFloat(closingTotStore).toFixed(3));
						
						$("#sugarnBiprodStoreTable tbody").empty().append(txtStore);
						$("#overlay").hide();
				  }
              //Code of Store Ends From Here
				  
				  
				  
				  
					 var sale_data = resp.data.SALE_DATA;
					  var txt = '';
					  if(sale_data.length == 0){
						  txt += '<tr>'
								+'<th colspan="3"  class="center"><span>No Record Found</span></th>'
								+'</tr>';
					  } else {
					  $.each(sale_data,function(i,obj){
							  if(!("NULL" in obj)){
								  console.log("exp "+obj)
								  txt += '<tr>'
									+'<th>'+(i+1)+'</th>'
									//+"<th><a href='#' style='color:blue' onclick='callSale()'"+obj.GROUP_NAME+"'</th>"
									+"<td><span class='pull-left'><b><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer'></i><a href='#' style='color:#674ddf;margin-left: 10px;' onclick='Sale(\""+obj.SUBTCODE+"\")'>"+obj.GROUP_NAME +"</a></b></span></td>"
									+'<th><span class="pull-right">'+parseFloat(obj.QTY).toFixed(3)+'</span></th>'
									+'<th><span class="pull-right">'+(Math.round(obj.AMOUNT * 100) / 100).toFixed(2);+'</span></th>'
									+'</tr>';
								  console.log("exp  "+JSON.stringify(obj))
								  totalChartValue = totalChartValue + (parseFloat(obj.AMOUNT)== NaN?0:parseFloat(obj.AMOUNT));
								  STotQty = STotQty + (parseFloat(obj.QTY)== NaN?0:parseFloat(obj.QTY));								  								  
							  }else{								  
								  txt += '<tr>'
										+'<th colspan="3" class="center"><span >No Record Found<span></th>'
										+'</tr>';
							  } 
					    })
					}					   
					   
					   $("#saleTable tbody").empty().append(txt);
					   $('.salePanel').find('.saleTotalValue').text(totalChartValue.toFixed(2));
					   $("#SaleQtyTotal").text(STotQty);
					   $("#SaleAmtTotal").text(totalChartValue.toFixed(2));
					   totalChartValue = 0;
					   
		 var purchase_data = resp.data.PURCHASE_DATA;
		 var txt = '';
		  if(purchase_data.length == 0){
			  txt += '<tr>'
					+'<th colspan="3" class="center"><span >No Record Found</span></th>'
					+'</tr>';
		  } else {
		  $.each(purchase_data,function(i,obj){
				  if(!("NULL" in obj)){
					  console.log("exp "+obj)
					  txt += '<tr>'
						+'<th>'+(i+1)+'</th>'
						//+'<th>'+obj.GROUP_NAME+'</th>'						
					  
						+"<td><span class='pull-left square'><b><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer'></i><a  href='#' style='color:#674ddf;margin-left: 10px;' onclick='NewPurchase(\""+obj.GROUP_ID+"\")'>"+obj.GROUP_NAME +"</a></b></span></td>"
						+'<th><span class="pull-right">'+parseFloat(obj.QTY).toFixed(3)+'</span></th>'
						+'<th><span class="pull-right">'+(Math.round(obj.AMOUNT * 100) / 100).toFixed(2);+'</span></th>'
						+'</tr>';
						
					  totalChartValue = totalChartValue + (parseFloat(obj.AMOUNT)== NaN?0:parseFloat(obj.AMOUNT));
					  PTotQty = PTotQty + (parseFloat(obj.QTY)== NaN?0:parseFloat(obj.QTY));
				  }
		   })
		  }
		  
		  $("#purchaseTable tbody").empty().append(txt);
		  $("#PurchaseQtyTotal").text(PTotQty);
		  $("#PurchaseAmtTotal").text(totalChartValue.toFixed(2));
		   
		    $('.purchasePanel').find('.purchaseTotalValue').text(totalChartValue.toFixed(2));
		    totalChartValue = 0;

					  var expense = resp.data.EXPENSE_DATA;
					  var txt = '';
					  if(expense.length == 0){
						  txt += '<tr>'
								+'<th colspan="3" class="center"><span >No Record Found</span></th>'
								+'</tr>';
					  } else {
					  $.each(expense,function(i,obj){
						  if(!("NULL" in obj)){							  
							  txt += '<tr>'
								+'<th>'+(i+1)+'</th>'
								+'<th>'+obj.GROUP_NAME+'</th>'
								+'<th><span class="pull-right">'+(Math.round(obj.AMOUNT * 100) / 100).toFixed(2);+'</span></th>'
								+'</tr>';
							  totalChartValue = totalChartValue + (parseFloat(obj.AMOUNT)== NaN?0:parseFloat(obj.AMOUNT));
							  
						  }
					  });
					}
					  
					  $("#expenseTable tbody").empty().append(txt);
					  $('.expensePanel').find('.expenseTotalValue').text(totalChartValue.toFixed(2));
					  totalChartValue = 0;					  
					  txt = '';
					 var cash_and_bank_data = resp.data.CASH_AND_BANK_DATA;					 
					 if(cash_and_bank_data.length == 0){
						  txt += '<tr>'
								+'<th colspan="3" class="center"><span >No Record Found</span></th>'
								+'</tr>';
					  } else {
						  $.each(cash_and_bank_data,function(i,obj){
							  if(!("NULL" in obj)){
								 var glBal = "";
								 if((obj.AMOUNT).indexOf('DR')>0){
									 glBal = glBal + '<b style="color:red;">'+(Math.round(obj.AMOUNT.replace('DR','') * 100) / 100).toFixed(2)+'</b>';
								 }else{
									 glBal = glBal + '<b style="color:green;">'+(Math.round(obj.AMOUNT.replace('CR','') * 100) / 100).toFixed(2)+'</b>';
								 }
								  txt += '<tr>'
									+'<th>'+(i+1)+'</th>'
									+'<th> Shift '+(obj.GROUP_NAME)+'</th>'
									+'<th><span class="pull-right">'+glBal+'</span></th>'
									+'</tr>';
								  totalChartValue = totalChartValue + (parseFloat(obj.AMOUNT)== NaN?0:parseFloat(obj.AMOUNT));
							  }
						  });
					  }
					  
					  $("#cashAndBankTable tbody").empty().append(txt);					  			  
					  txt = '';
						 var pending_bills = resp.data.PENDING_BILLS;
						 var pendingcount = '';
						 if(pending_bills.length == 0){
							  txt += '<tr>'
									+'<th colspan="3" class="center"><span >No Record Found</span></th>'
									+'</tr>';
						  } else {
							  
							  $.each(pending_bills,function(i,obj){
								  if(!("NULL" in obj)){
									  txt += '<tr>'
										+'<th>'+(i+1)+'</th>'
										+'<th>'+(obj.NAME)+'</th>'
										+'<th><span class="pull-right">'+((obj.AMOUNT==('null'||null))? 0:obj.AMOUNT) +'</span></th>'
										+'</tr>';
									  pendingcount = obj.PENDING_COUNT;
								  }
							  });
						  }
						  
						  $("#pendingbillsTable tbody").empty().append(txt);
						  $('.pendingBillsPanel').find('.pendingCountValue').text(pendingcount);
						  						  
					  var curshing_data = resp.data.CURSHING_DATA;
					  var txt = '';
					  totalChartValue = 0;
					  if(curshing_data.length == 0){
						  txt += '<tr>'
								+'<th colspan="3" class="center"><span >No Record Found</span></th>'
								+'</tr>';
					  } else {
						  $.each(curshing_data,function(i,obj){
							  if(!("NULL" in obj)){
								  txt += '<tr>'
									+'<th>'+(i+1)+'</th>'
									+'<th> Shift '+(obj.GROUP_NAME)+'</th>'
									+'<th><span class="pull-right">'+(Math.round(obj.AMOUNT * 100) / 100).toFixed(3);+'</span></th>'
									+'</tr>';
								  totalChartValue = totalChartValue + (parseFloat(obj.AMOUNT)== NaN?0:parseFloat(obj.AMOUNT));
							  }
						  });
					  }
					  $("#dailyCrushingTable tbody").empty().append(txt);
					  $('.dailyCrushingPanel').find('.dailyTotalValue').text(totalChartValue.toFixed(3));
					  totalChartValue = 0;
					  
					  var vehicle_curshing_data = resp.data.VEHICLE_CURSHING_DATA;
					  var txt = '';
					  if(vehicle_curshing_data.length == 0){
						  txt += '<tr>'
								+'<th colspan="3" class="center"><span >No Record Found</span></th>'
								+'</tr>';
					  } else {
					  $.each(vehicle_curshing_data,function(i,obj){
						  if(!("NULL" in obj)){
							  txt += '<tr>'
								+'<th>'+(i+1)+'</th>'
								+'<th>'+obj.NAME+'</th>'
								+'<th><span class="pull-right">'+(Math.round(obj.AMOUNT * 100) / 100).toFixed(2);+'</span></th>'
								+'</tr>';
							  totalChartValue = totalChartValue + (parseFloat(obj.AMOUNT)== NaN?0:parseFloat(obj.AMOUNT));
						  } 
					  });
					  }
					  $("#vehicleStatusTable tbody").empty().append(txt);
					  $('.vehicleStatusPanel').find('.dailyTotalValue').text(totalChartValue.toFixed(2));
				  
// var dataSet = [firstDataset,secondDataset,thirdDataset];
// console.log('secondDataset',secondDataset);
// console.log('firstDataset',firstDataset);
// generateChart(chartId,chartType,dataSet,chartName,'Y', null);
			  // }
					  
					  
		  }
	  });
}



var saleChart = null;
var purchaseChart = null;
var expenseChart = null;
var profitLossChart = null;



function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
function checkLogin(){
	alert("I am Clicked =====>>>");
	console.log("dfsfs")
	var mpin1 = $("#pin1").val();
	var mpin2 = $("#pin2").val();
	var mpin3 = $("#pin3").val();
	var mpin4 = $("#pin4").val();
	var branch = $("#branchId").val();
	var company = $("#company").val();
	if(mpin1 == "" || mpin2 == "" || mpin3 == "" || mpin4 == ""){
		$("#mpinMsgDiv").html("Incorrect MPIN. Try again.");
		$("#mpinMsgDiv").show().delay(5000).fadeOut();
		setTimeout(function() {
			$("#mpin1").focus(), 10
		});
		return false;
	}
	if (branch == "" || branch == null) {
		$("#mpinMsgDiv").html("Please Select Branch.");
		$("#mpinMsgDiv").show().delay(5000).fadeOut();
		setTimeout(function() {
			$("#branchId").focus(), 10
		});
		return false;
	}
		var mpin = mpin1+mpin2+mpin3+mpin4;
		$.ajax({
			url : "login/checkmPin",
			type : 'post',
			dataType : 'json',
			data : {
				mpin : mpin,
				branch : branch,
				company : company
			},
			success : function(resp) {
			alert("login resp =====>>>"+resp);
				// window.location.href =
				// "${pageContext.request.contextPath}/login"
				console.log('checkPin'+resp.data);
				console.log('UserSession'+JSON.stringify(resp.UserSession));
				var loginusersId = resp.UserSession;
				loginUserId = loginusersId.userId;
				$("#LoguserId").val(loginUserId);
			   // alert("loginUserId  in login check==="+loginUserId);
				if(resp.data.length > 0){
					alert("i am if STATEMENT =====>>>");
					$("#mpinMsgDiv").html('<b>Login Success</b>');
					$('#mpinMsgDiv').css('color', 'green');
					$("#mpinMsgDiv").show();
					$("#branch").val(branch);
					$("#company").val(company);
					 $('#myModal').modal('hide');
					 console.log("loginFromDate"+$("#loginFromDate").val());
					 var monthFlag = 'N';
				     getSingleChartDataByChartId("Expense","#expenseChart","donut",$("#loginFromDate").val(),$("#loginFromDate").val(),null,0);			    
				     getBalanceSheetData(loginUserId);
				     getPrfitLoss(loginUserId);
				    
				     $("#logout").show();
				} else {
					alert("i am eLSE STATEMENT =====>>>");
					$("#mpinMsgDiv").html('<b>Incorrect MPIN. Try again.</b>');
					$('#mpinMsgDiv').css('color', 'red');
					$("#mpinMsgDiv").show();
				}
			}
		});
}

	function dashboard(){
		window.location.href ="welcome"
		//$("#loginStatus").val("Y");
		
	}

function Assets(){
	//window.location.href ="Assets"
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "Assets?fromDate=" +fromDate + "&ToDate="+toDate;	
	/* $.ajax({
         url: "Assets",
         type: 'post',
         data: {
         },
         success: function (resp) {
             //$("#bodyDiv").hide();
             //$("#frmdiv").show();
             $("#frmdiv").empty();
             $("#frmdiv").append(resp);
         }
     });*/	
}



function Liability(){
	//window.location.href ="Liability"
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "Liability?fromDate=" +fromDate + "&ToDate="+toDate;	
}
function Income(){
	//window.location.href ="Revenue"
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "Revenue?fromDate=" +fromDate + "&ToDate="+toDate;	
}

function Expense(){
	//window.location.href ="Expense"
		var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "Expense?fromDate=" +fromDate + "&ToDate="+toDate;	
}

function callCrushingDetails(){
	//window.location.href ="crushingDetails"
	window.location.href = "/CrushingDashboard"
	/*$.ajax({
        url: "http://192.168.5.76:8086/KATSSKL/CrushingDashboard",
        type: 'post',
        data: {
        },
        success: function (resp) {
            //$("#bodyDiv").hide();
            //$("#frmdiv").show();
            $("#frmdiv").empty();
            $("#frmdiv").append(resp);
        }
    });*/
}

function Sale(SUBTCODE) {
	//alert("In sale logjsp");
	//window.location.href = "SaleDetails"			
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "NewSale?fromDate=" +fromDate + "&ToDate="+toDate + "&SUBTCODE="+SUBTCODE;			
}

function SockDetl(item_id,grp_name) {
	
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "stockDetails?fromDate=" +fromDate + "&ToDate="+toDate +"&Item_id="+item_id+"&grp_name="+grp_name;			
}
function SockPurchaseDetl(item_id,grp_name) {
	//alert("grp_name=="+grp_name);
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "StockDetailPurchase?fromDate=" +fromDate + "&ToDate="+toDate +"&Item_id="+item_id+"&grp_name="+grp_name;			
}


//HERE HREF FOR STORE REDIRECT STARTS
function StorePurchaseDetl(item_id,grp_name) {
    //alert("Welcome To Store JSP with StorePurchaseDetl");
   // alert("item_id as a SUBTCODE  ============>>>>>>>  "+item_id);
    var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "StorePurchaseDetail?fromDate=" +fromDate + "&ToDate="+toDate +"&Item_id="+item_id+"&grp_name="+grp_name;
}
    
    
function StoreSaleDetl(SUBTCODE, grp_name) {
   // alert("Welcome To Store JSP with StoreStoreDetl");
    var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "StoreSaleDetail?fromDate=" +fromDate + "&ToDate="+toDate +"&grp_name="+grp_name+ "&SUBTCODE="+SUBTCODE;		
    
}
//HERE HREF FOR STORE REDIRECT ENDS

//HERE HREF FOR AGRICULTURE REDIRECT Starts

function getAgriculturePage() {
   // alert("Welcome To agriculture JSP");
    var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "agriculture?fromDate=" +fromDate + "&ToDate="+toDate;		
    
}

//HERE HREF FOR AGRICULTURE REDIRECT ENDS


function NewPurchase(GROUP_ID){
	
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();					
	window.location.href = "NewPurchase?fromDate=" +fromDate + "&ToDate="+toDate + "&GROUP_ID="+GROUP_ID;	
}

function callPurchase(){
	window.location.href ="Purchase"
}

function getBalanceSheetData(logId){
	//alert("logId in balsheet==="+logId);
	
	/*if(logId=="" || logId==null){
		 logId =  $("#LoguserId").val();
	}else{
		logId = logId;
	}*/
	var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();
	 var Session1 = fromDate.slice(0, 4);
	
     var Session2 = toDate.slice(6);
     console.log("Session2==="+(Session2-1));
   
	 $("#current_Rep_prd").text("As on :"+toDate);
     $("#prev_Rep_prd").text("Last Year : 31/03/" +(Session2-1));     
 	 $("#current_Rep_prdA").text("As on :"+toDate);
     $("#prev_Rep_prdA").text("Last Year : 31/03/" +(Session2-1));
	
	var company = $("#company").val();
	var branch = $("#branch").val();
	var tr = "";
	var tr1 = ""; 
	var rowdata = [];
	//alert("logId in balsheet==="+logId);
	 var lastYear = "01/04/" +(Session2-1);
	$.ajax({
	    url: getContextUrl()+'/login/BalanceSheetData',
		method : 'POST' ,async : true,
		data : {
			branch : branch,
			company : company,
			user_Id : logId,			
			fromDate : lastYear,
			toDate : toDate,
		},
		success : function(resp){
			console.log("resp===="+JSON.stringify(resp));
			var BALANCE_SHEET_LIABILITY = resp.BALANCE_SHEET_LIABILITY;
			var BALANCE_SHEET_ASSETS = resp.BALANCE_SHEET_ASSETS;
			var dataPoints=[];
			var colNameArr = [];
			var newChartDataArrLiability = [];
			var newChartDataArrAssets = [];
			GLgroup = [];
			var newBarGraph = [];
			// console.log("bal_sheet==="+JSON.stringify(BALANCE_SHEET_LIABILITY));
			$.each(BALANCE_SHEET_LIABILITY, function(key,obj){
			
				 if(!("NULL" in obj)){					
					  tr += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
					    	   tr += "<td><span class='pull-left'><b><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer'></i><a href='#' style='color:#674ddf;margin-left: 10px;' onclick='Liability()'>"+obj.PARTICULARS +"</a></b></span></td>";
					    	   
					       }
						  else if(obj.RECORD_TYPE=="GROUP"){							  
					    	   tr += "<th ><span class='pull-left' style='margin-left:15px;color:red' >"+obj.PARTICULARS + ' ('+obj.GRAPH_CODE +")</span></th>";		
					    	   colNameArr.push("LastYear" ,"CurrentYear");
	                            var newObj = {};
	                            newObj['GroupName'] = obj.GRAPH_CODE;   
	                            
	                               for (var i = 0; i < colNameArr.length; i++) {	
	                            	  //console.log("newChartDataArrLiability in LastYear===="+obj.LAST_YEAR_BAL);
	                            	//  console.log("newChartDataArrLiability in CURRENT_YEAR_BAL===="+obj.CURRENT_YEAR_BAL);
	                                       /* newObj[colNameArr[i]] = parseFloat(obj.LAST_YEAR_BAL);
	                                        newObj[colNameArr[i]] = parseFloat(obj.CURRENT_YEAR_BAL);		      
	                                      */
	                            	  // console.log("in CurrentYear check===="+colNameArr);
	                            	
	                                       for (var i = 0; i < colNameArr.length; i++) {	                                          
	                                    	   newObj[colNameArr[0]] = obj.LAST_YEAR_BAL;
	                                    	   newObj[colNameArr[1]] = obj.CURRENT_YEAR_BAL;
	                                          // console.log("newChartDataArrLiability in LastYear===="+JSON.stringify(newObj));
	                                       }
	                                  
	                               }
	                               newChartDataArrLiability.push(newObj);
	                               
					       }else  if(obj.RECORD_TYPE=="SUBGROUP"){					    	 
					    	   tr += "<th><span class='pull-left' style='margin-left:35px;color:green'>"+obj.PARTICULARS +"</span></th>";					    	   		                            
					       }else if(obj.PARTICULARS=="TOTAL LIABILITY"){					    	   
					    	   $("#as_on_dateTotal23").text(parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2));
					    	   $("#as_on_dateTotal3").text(parseFloat(obj.LAST_YEAR_BAL).toFixed(2));					    	  
					       }else{
					    	   tr += "<th><span class='pull-right' style='color:black'>"+obj.PARTICULARS +"</span></th>";
					       }
						  	if(obj.NOTE_NO==null){
							     tr += '<th class=""><span class="pull-right"></th>';
						  	}else{
								 tr += '<th class=""><span class="pull-right">'+obj.NOTE_NO + '</th>';
						  	}
					  		
					  	if(obj.CURRENT_YEAR_BAL==null)	{
							tr += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
						}	else{
							tr += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
						}											 
						if(obj.LAST_YEAR_BAL==null ){
							tr += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
						}	else{
							tr += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
						}					
					  		tr += '</tr>';					  							  		
					  		// -----------------------Liability Graphs
							// ---------------------------
					  		
					  		// alert("dataPoints==="+JSON.stringify(dataPoints));
					 }				 				 	
			});
			
			// console.log("newBarGraph===="+JSON.stringify(newBarGraph));
			
			// alert("dataPoints===="+JSON.stringify(dataPoints));
			
			$.each(BALANCE_SHEET_ASSETS, function(key,obj){
				 if(!("NULL" in obj)){		
					var dataPoints = [];
					var newLiabGraph = [];
					 tr1 += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
							  //tr1 += "<th ><span class='pull-left'><u><a href='#' style='color:blue' onclick='Assets()'><a href='#'>"+obj.PARTICULARS +"</a></u></span></th>";
							  tr1 += "<th ><span class='pull-left'><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer'></i><a name='Assets' class='nlink' href='#Assets' onclick='Assets()' style='color:#674ddf;margin-left: 10px;'>"+obj.PARTICULARS +" </a></span></th>";							  
					       }
						  else if(obj.RECORD_TYPE=="GROUP"){
							  // alert("In GROUP");
							 // tr1 += "<th ><span class='pull-left '
								// style='margin-left:15px;color:red'
								// >"+obj.PARTICULARS +" </span></th>";
							  tr1 += "<th ><span class='pull-left' style='margin-left:15px;color:red' >"+obj.PARTICULARS + ' ('+obj.GRAPH_CODE +")</span></th>";		
					    	   var colNameArr1 = [];
					    	   colNameArr1.push("LastYear" ,"CurrentYear");
	                            var newObj1 = {};
	                            newObj1['GroupName'] = obj.GRAPH_CODE;   
	                            
	                            for (var i = 0; i < colNameArr1.length; i++) {
	                            	
                             	   newObj1[colNameArr1[0]] = obj.LAST_YEAR_BAL;
                             	   newObj1[colNameArr1[1]] = obj.CURRENT_YEAR_BAL;
                                   // console.log("newChartDataArrLiability in LastYear===="+JSON.stringify(newObj));
                                }
	                               newChartDataArrAssets.push(newObj1);
								
					       }else  if(obj.RECORD_TYPE=="SUBGROUP"){					    	  
					    	   tr1 += "<th><span class='pull-left' style='margin-left:35px;color:green'>"+obj.PARTICULARS +"</span></th>";
					       }else if(obj.PARTICULARS=="TOTAL ASSETS"){					    	   
					    	   $("#as_on_dateTotal2").text(parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2));
					    	   $("#as_on_dateTotal36").text(parseFloat(obj.LAST_YEAR_BAL).toFixed(2));
					    	  
					       }else {
					    	  // alert("In SUBGROUP" + obj.PARTICULARS);
					    	   tr1 += "<th><span class='pull-right' style='color:black'>"+obj.PARTICULARS +"</span></th>";
					       }	   
						   if(obj.NOTE_NO==null){
								     tr1 += '<th class=""><span class="pull-right"></th>';
						   }else{
									 tr1 += '<th class=""><span class="pull-right">'+obj.NOTE_NO + '</th>';
							}if(obj.CURRENT_YEAR_BAL==null)	{
								tr1 += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
							}else{
								tr1 += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
							}					
							 // tr1 += '<th class=""><span
								// class="pull-right">'+obj.CURRENT_YEAR_BAL==null
								// ? "0.000" :
								// parseFloat(obj.CURRENT_YEAR_BAL).toFixed(3)
								// +'</th>';
							
							if(obj.LAST_YEAR_BAL==null)	{
								tr1 += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
							}	else{
								tr1 += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
							}			
							 tr1 += '</tr>';
							 // console.log("obj===="+JSON.stringify(obj));
							 
							 // -----------------------------------------Graph------------------------------------------
							 
				  }	
			});
			
			// console.log("newChartDataArrLiability===="+JSON.stringify(newChartDataArrLiability));
			
			BalshhetLiabilityGraph(newChartDataArrLiability);
			BalshhetAssetsGraph(newChartDataArrAssets);
					
			
	         function handleLegendClick(graph) {
                 var chart = graph.chart;
                 var lengthG = chart.graphs.length;
                 for (var i = 0; i < lengthG; i++) {
                     if (graph.id == chart.graphs[i].id) {
                         if (!chart.graphs[i].hidden) {
                             if (count === lengthG - 1) {
                                 chart.showGraph(chart.graphs[i]);
                             } else {
                                 chart.hideGraph(chart.graphs[i]);
                                 count++;
                             }
                         }
                         else {
                             chart.showGraph(chart.graphs[i]);
                             count--;
                         }
                     }
                 }
                 return false;
             }
	        	        
    		// AmCharts.checkEmptyData(chart);
			 $("#BalanceSheetsTable tbody").empty().append(tr);
			 $("#BalanceSheetsAssetsTable tbody").empty().append(tr1);		
			 $('#BalanceSheetsTable tbody tr:last').remove();
			 $('#BalanceSheetsAssetsTable tbody tr:last').remove();
		},		
	});
}

function getPrfitLoss(logId){
/*	var logId = "";
	
	if(logId=="" || logId==null){
		 logId =  $("#LoguserId").val();
	}else{
		logId = logId;
	}*/
	var fromDate = $("#chartDate").val().split('-')[0].trim()
	var toDate = $("#chartDate").val().split('-')[1].trim();
	var Session2 = toDate.slice(6);
	$("#current_Rep_prdI").text("As on :"+toDate);
    $("#prev_Rep_prdI").text("Last Year : 31/03/" +(Session2-1));
    $("#current_Rep_prdE").text("As on :"+toDate);
    $("#prev_Rep_prdE").text("Last Year : 31/03/" +(Session2-1));
	var company = $("#company").val();
	var branch = $("#branch").val();
	var tr = "";
	var tr1 = ""; 
	var rowdata = [];
    var lastYear = "01/04/" +(Session2-1);
	$.ajax({
	    url: getContextUrl()+'/login/ProfitLossData',
		method : 'POST' ,async : true,
		data : {
			branch : branch,
			company : company,
			user_Id : logId,			
			fromDate : lastYear,
			toDate : toDate,
		},
		success : function(resp){
			console.log("resp===="+JSON.stringify(resp));
			var PROFIT_LOSS_INCOME = resp.PROFIT_LOSS_INCOME;
			var PROFIT_LOSS_EXPENSE = resp.PROFIT_LOSS_EXPENSE;			
			var colNameArr = [];
			var newChartDataArrIncome = [];
			var newChartDataArrExpense = [];
			GLgroup = [];
			// var newBarGraph = [];
			// console.log("bal_sheet==="+JSON.stringify(BALANCE_SHEET_LIABILITY));
			$.each(PROFIT_LOSS_INCOME, function(key,obj){
			
				 if(!("NULL" in obj)){					
					  tr += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
					    	   tr += "<th ><span class='pull-left' ><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer'></i><a href='#'  style='color:#674ddf;margin-left: 10px;' onclick='Income()'>"+obj.PARTICULARS +"</a></span></th>";
					       }
						  else if(obj.RECORD_TYPE=="GROUP"){
							  // alert("In GROUP");
							 // console.log("obj.GRAPH_CODE====="+obj.GRAPH_CODE);
					    	   tr += "<th ><span class='pull-left' style='margin-left:15px;color:red' >"+obj.PARTICULARS + ' ('+obj.GRAPH_CODE +")</span></th>";		
					    	  var colNameArrP = [];
					    	  colNameArrP.push("LastYear" ,"CurrentYear");                        
	                            var newObj1 = {};
	                            newObj1['GroupName'] = obj.GRAPH_CODE;   
	                            
	                            for (var i = 0; i < colNameArrP.length; i++) {	                            	
                             	   newObj1[colNameArrP[0]] = obj.LAST_YEAR_BAL;
                             	   newObj1[colNameArrP[1]] = obj.CURRENT_YEAR_BAL;
                                   // console.log("newChartDataArrLiability in LastYear===="+JSON.stringify(newObj));
                                }	                            	                            
	                               newChartDataArrIncome.push(newObj1);	                               
					       }else  if(obj.RECORD_TYPE=="SUBGROUP"){					    	
					    	   tr += "<th><span class='pull-left' style='margin-left:35px;color:green'>"+obj.PARTICULARS +"</span></th>";					    	   
					       }else if(obj.PARTICULARS=="TOTAL REVENUE"){					    	   
					    	   $("#as_on_dateTotalI1").text(parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2));
					    	   $("#as_on_dateTotalI2").text(parseFloat(obj.LAST_YEAR_BAL).toFixed(2));					    	  
					       }else {					    	 
					    	   tr += "<th><span class='pull-right' style='color:black'>"+obj.PARTICULARS +"</span></th>";
					       }
						  if(obj.NOTE_NO==null){
							     tr += '<th class=""><span class="pull-right"></th>';
						  }else{
								 tr += '<th class=""><span class="pull-right">'+obj.NOTE_NO + '</th>';
						  }
					  		
					  	if(obj.CURRENT_YEAR_BAL==null)	{
							tr += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
						}	else{
							tr += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
						}					
						
					
						
						if(obj.LAST_YEAR_BAL==null)	{
							tr += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
						}	else{
							tr += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
						}					
					  		tr += '</tr>';					  							  		
					  		// -----------------------Liability Graphs
							// ---------------------------
					  		
					  		// alert("dataPoints==="+JSON.stringify(dataPoints));
					 }				 				 	
			});
			
			// console.log("newBarGraph===="+JSON.stringify(newBarGraph));
			
			// alert("dataPoints===="+JSON.stringify(dataPoints));
			//stickybits('table th');
			$.each(PROFIT_LOSS_EXPENSE, function(key,obj){
				 if(!("NULL" in obj)){		
					var dataPoints = [];
					var newLiabGraph = [];
					 tr1 += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
							  tr1 += "<th ><span class='pull-left' onclick='Expense()'><i class='ace-icon fa fa-hand-o-right icon-animated-hand-pointer'></i><a href='#'  style='color:#674ddf;margin-left: 10px;'>"+obj.PARTICULARS +"</a></span></th>";
							 // tr1 += "<th ><span class='pull-left'style='color:blue' onclick='Expense()'><u>"+obj.PARTICULARS +"</u></span></th>";
					       }
						  else if(obj.RECORD_TYPE=="GROUP"){
							  // alert("In GROUP");
							 // tr1 += "<th ><span class='pull-left '
								// style='margin-left:15px;color:red'
								// >"+obj.PARTICULARS +" </span></th>";
							  tr1 += "<th ><span class='pull-left' style='margin-left:15px;color:red' >"+obj.PARTICULARS + ' ('+obj.GRAPH_CODE +")</span></th>";		
							  var colNameArrE = [];
							  colNameArrE.push("LastYear" ,"CurrentYear");
	                            var newObj = {};
	                            newObj['GroupName'] = obj.GRAPH_CODE;   
	                            
	                               for (var i = 0; i < colNameArrE.length; i++) {		                            	   
	                                        newObj[colNameArrE[0]] = parseFloat(obj.LAST_YEAR_BAL);
	                                        newObj[colNameArrE[1]] = parseFloat(obj.CURRENT_YEAR_BAL);		      
	                                        // GLgroup.push(obj.LAST_YEAR_BAL,obj.CURRENT_YEAR_BAL);
	                               }
	                               newChartDataArrExpense.push(newObj);
								
					       }else  if(obj.RECORD_TYPE=="SUBGROUP"){
					    	  // alert("In SUBGROUP" + obj.PARTICULARS);
					    	   tr1 += "<th><span class='pull-left' style='margin-left:35px;color:green'>"+obj.PARTICULARS +"</span></th>";
					       }
					       else if(obj.PARTICULARS=="TOTAL EXPENSES"){					    	   
					    	   $("#as_on_dateTotalE1").text(parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2));
					    	   $("#as_on_dateTotalE2").text(parseFloat(obj.LAST_YEAR_BAL).toFixed(2));
					    	  
					       }else if(obj.RECORD_TYPE==null){
					    	  // alert("In SUBGROUP" + obj.PARTICULARS);
					    	   tr1 += "<th><span class='pull-right' style='color:black'></span></th>";
					    	  // alert("as_on_dateTotal2==="+parseFloat(obj.LAST_YEAR_BAL).toFixed(3));
					    	  // as_on_dateTotal2.val(parseFloat(obj.CURRENT_YEAR_BAL).toFixed(3));
					       }	   
						   if(obj.NOTE_NO==null){
								     tr1 += '<th class=""><span class="pull-right"></th>';
						   }else{
									 tr1 += '<th class=""><span class="pull-right">'+obj.NOTE_NO + '</th>';
							}if(obj.CURRENT_YEAR_BAL==null)	{
								tr1 += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
							}else{
								tr1 += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
							}					
							 // tr1 += '<th class=""><span
								// class="pull-right">'+obj.CURRENT_YEAR_BAL==null
								// ? "0.000" :
								// parseFloat(obj.CURRENT_YEAR_BAL).toFixed(3)
								// +'</th>';
							
							if(obj.LAST_YEAR_BAL==null)	{
								tr1 += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
							}	else{
								tr1 += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
							}			
							 tr1 += '</tr>';
							 // console.log("obj===="+JSON.stringify(obj));
							 
							 // -----------------------------------------Graph------------------------------------------
							 
				  }	
			});
			// console.log("newChartDataArrAssets===="+JSON.stringify(newChartDataArrAssets));
			IncomeGraph(newChartDataArrIncome);
			ExpenseGraph(newChartDataArrExpense);
			
			
			
	         function handleLegendClick(graph) {
                 var chart = graph.chart;
                 var lengthG = chart.graphs.length;
                 for (var i = 0; i < lengthG; i++) {
                     if (graph.id == chart.graphs[i].id) {
                         if (!chart.graphs[i].hidden) {
                             if (count === lengthG - 1) {
                                 chart.showGraph(chart.graphs[i]);
                             } else {
                                 chart.hideGraph(chart.graphs[i]);
                                 count++;
                             }
                         }
                         else {
                             chart.showGraph(chart.graphs[i]);
                             count--;
                         }
                     }
                 }
                 return false;
             }
	        
	        
    		// AmCharts.checkEmptyData(chart);
			 $("#ProfitLossIncomeTable tbody").empty().append(tr);
			 $("#ProfitLossExpenseTable tbody").empty().append(tr1);		
			 $('#ProfitLossIncomeTable tbody tr:last').remove();
			 $('#ProfitLossExpenseTable tbody tr:last').remove();
		},		
	});
}

function IncomeGraph(newChartDataIncome){

	var newChartDataArrI = [];
    var colNameArr = [];
    var amtArr = [];
    myJsonString1 = JSON.stringify(newChartDataIncome);
    var obj = JSON.parse(myJsonString1);
    console.log("obj==="+JSON.stringify(obj));
    var obj1 = newChartDataIncome[0];
   /*
	 * if (obj1.ITEM_NAME.toString().indexOf(',') != -1) { colNameArr =
	 * obj1.ITEM_NAME.split(','); } else {
	 */
        //colNameArr.push(obj1.LastYear,obj1.CurrentYear);
    colNameArr.push("Last Year","CurrentYear");
   // }
        console.log("colNameArr in obj"+JSON.stringify(colNameArr));
    $.each(newChartDataIncome, function (i, value) {
        var newObj = {};
        newObj['GroupName'] = value.GroupName;
       // $.each(value, function (k, v) {
       	 newObj[colNameArr[0]] = parseFloat(value.LastYear);
       	 newObj[colNameArr[1]] = parseFloat(value.CurrentYear);
       	 //console.log("v==="+v);
            /*if (k != 'GroupName' && k == 'LastYear') {
                for (var i = 0; i < colNameArr.length; i++) {                    
                        newObj[colNameArr[i]] = parseFloat(v);
                        console.log("newObj in LastYear===="+parseFloat(v));
                }
            }else if (k != 'GroupName' && k == 'CurrentYear') {
           	 for (var i = 0; i < colNameArr.length; i++) {
                    
           		 newObj[colNameArr[i]] = parseFloat(v);
                    console.log("newObj in CurrentYear===="+parseFloat(v));
                     
                 }
            }*/
        //});
       	newChartDataArrI.push(newObj);
    });
    
    console.log('bar newChartDataIncome', JSON.stringify(colNameArr));
    console.log('bar newChartDataArrI', JSON.stringify(newChartDataArrI));
    var newBarGraph = [];
    for (var i = 0; i < colNameArr.length; i++) {
        let graph = {};
        graph["id"] = "vBarChart-" + (i + 1);
       
            // graph["lineColor"]= colorArray[i];
        if(i==0){
       	 graph["balloonText"] = "[[category]] LastYear:[[value]]";
       	 // graph["title"] = "Last Year : "+colNameArr[i];
       	 graph["title"] = "Last Year "
        }
        else{
       	 graph["balloonText"] = "[[category]] CurrentYear:[[value]]";
       	 graph["title"] = "Current Year  "
       	// graph["title"] = "Current Year : "+colNameArr[i];
        }
        graph["valueField"] = colNameArr[i];
        graph["fillAlphas"] = 0.8;
        graph["lineAlpha"] = 0.2;
        graph["type"] = "column";
        newBarGraph.push(graph);
    }
   // console.log('newBarGraph', newBarGraph);
    var cnthold = 0;   
    chart = AmCharts.makeChart("IncomeDiv", {
        "type": "serial",
        "theme": "light",
        "categoryField": "GroupName",        
        "startDuration": 1,
        "trendLines": [],
        "legend": {
            "useGraphSettings": true
        },
        // //"depth3D": 20,
        "angle": 30,
        "graphs": newBarGraph,
        "guides": [],
        "titles": [{             
       	 "text": "Income Graph"
        }],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "axisAlpha": 0,
                "position": "left",
                "title": "Amount"
            }
        ],
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 90,
            "title": "GroupName",
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": newChartDataArrI,
        "export": {
            "enabled": true
        }, "listeners": [{
            "event": "clickGraphItem",
            "method": function (event) {
                var index = event.index
                // alert(event.item.category,index);
               // CategoryDatewise(event.item.category, index);
                // monthWiseChart(event.item.category);
            }
        }]
    });
    // for empty data
    AmCharts.checkEmptyData = function (chart) {
        if (0 == chart.dataProvider.length) {
            // set min/max on the value axis
            chart.valueAxes[0].minimum = 0;
            chart.valueAxes[0].maximum = 100;
            // add dummy data point
            var dataPoint = {
                dummyValue: 0
            };
            dataPoint[chart.categoryField] = '';
            chart.dataProvider = [newChartDataArr];
            // add label
            chart.addLabel(0, '50%', 'The chart contains no data', 'center');
            // set opacity of the chart div
            chart.chartdiv.style.opacity = 0.5;
            // redraw it
            chart.validateNow();
        }
    }
}

function ExpenseGraph(newChartDataExpense){
	var newChartDataArrE = [];
    var colNameArr = [];
    var amtArr = [];
    myJsonString1 = JSON.stringify(newChartDataExpense);
    var obj = JSON.parse(myJsonString1);
  //  console.log("obj==="+JSON.stringify(obj));
    var obj1 = newChartDataExpense[0];
   /*
	 * if (obj1.ITEM_NAME.toString().indexOf(',') != -1) { colNameArr =
	 * obj1.ITEM_NAME.split(','); } else {
	 */
        //colNameArr.push(obj1.LastYear,obj1.CurrentYear);
    colNameArr.push("Last Year","CurrentYear");
   // }
        console.log("colNameArr in obj"+JSON.stringify(colNameArr));
    $.each(newChartDataExpense, function (i, value) {
        var newObj = {};
        newObj['GroupName'] = value.GroupName;
       // $.each(value, function (k, v) {
       	 newObj[colNameArr[0]] = parseFloat(value.LastYear);
       	 newObj[colNameArr[1]] = parseFloat(value.CurrentYear);
       	 //console.log("v==="+v);
            /*if (k != 'GroupName' && k == 'LastYear') {
                for (var i = 0; i < colNameArr.length; i++) {                    
                        newObj[colNameArr[i]] = parseFloat(v);
                        console.log("newObj in LastYear===="+parseFloat(v));
                }
            }else if (k != 'GroupName' && k == 'CurrentYear') {
           	 for (var i = 0; i < colNameArr.length; i++) {
                    
           		 newObj[colNameArr[i]] = parseFloat(v);
                    console.log("newObj in CurrentYear===="+parseFloat(v));
                     
                 }
            }*/
        //});
       	newChartDataArrE.push(newObj);
    });
    console.log('bar newChartDataIncome', JSON.stringify(colNameArr));
   console.log('bar newChartDataExpense', JSON.stringify(newChartDataExpense));
    var newBarGraph = [];
    for (var i = 0; i < colNameArr.length; i++) {
        let graph = {};
        graph["id"] = "vBarChart-" + (i + 1);
       
            // graph["lineColor"]= colorArray[i];
        if(i==0){
       	 graph["balloonText"] = "[[category]] LastYear:[[value]]";
       	 // graph["title"] = "Last Year : "+colNameArr[i];
       	 graph["title"] = "Last Year "
        }
        else{
       	 graph["balloonText"] = "[[category]] CurrentYear:[[value]]";
       	 graph["title"] = "Current Year  "
       	// graph["title"] = "Current Year : "+colNameArr[i];
        }
        graph["valueField"] = colNameArr[i];
        graph["fillAlphas"] = 0.8;
        graph["lineAlpha"] = 0.2;
        graph["type"] = "column";
        newBarGraph.push(graph);
    }
   // console.log('newBarGraph', newBarGraph);
    var cnthold = 0;
   
    chart = AmCharts.makeChart("ExpenseDiv", {
        "type": "serial",
        "theme": "light",
        "categoryField": "GroupName",        
        "startDuration": 1,
        "trendLines": [],
        "legend": {
            "useGraphSettings": true
        },
        // //"depth3D": 20,
        "angle": 30,
        "graphs": newBarGraph,
        "guides": [],
        "titles": [{             
       	 "text": "Expense Graph"
        }],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "axisAlpha": 0,
                "position": "left",
                "title": "Amount"
            }
        ],
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 90,
            "title": "GroupName",
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": newChartDataArrE,
        "export": {
            "enabled": true
        }, "listeners": [{
            "event": "clickGraphItem",
            "method": function (event) {
                var index = event.index
                // alert(event.item.category,index);
               // CategoryDatewise(event.item.category, index);
                // monthWiseChart(event.item.category);
            }
        }]
    });
    // for empty data
    AmCharts.checkEmptyData = function (chart) {
        if (0 == chart.dataProvider.length) {
            // set min/max on the value axis
            chart.valueAxes[0].minimum = 0;
            chart.valueAxes[0].maximum = 100;
            // add dummy data point
            var dataPoint = {
                dummyValue: 0
            };
            dataPoint[chart.categoryField] = '';
            chart.dataProvider = [newChartDataArr];
            // add label
            chart.addLabel(0, '50%', 'The chart contains no data', 'center');
            // set opacity of the chart div
            chart.chartdiv.style.opacity = 0.5;
            // redraw it
            chart.validateNow();
        }
    }
}

function BalshhetLiabilityGraph(newChartData){
	 var newChartDataArr = [];
     var colNameArr = [];
     var amtArr = [];
     myJsonString1 = JSON.stringify(newChartData);
     var obj = JSON.parse(myJsonString1);
     console.log("obj==="+JSON.stringify(obj));
     var obj1 = newChartData[0];
    /*
	 * if (obj1.ITEM_NAME.toString().indexOf(',') != -1) { colNameArr =
	 * obj1.ITEM_NAME.split(','); } else {
	 */
         //colNameArr.push(obj1.LastYear,obj1.CurrentYear);
     colNameArr.push("Last Year","CurrentYear");
    // }
         console.log("colNameArr in obj"+JSON.stringify(colNameArr));
     $.each(newChartData, function (i, value) {
         var newObj = {};
         newObj['GroupName'] = value.GroupName;
        // $.each(value, function (k, v) {
        	 newObj[colNameArr[0]] = parseFloat(value.LastYear);
        	 newObj[colNameArr[1]] = parseFloat(value.CurrentYear);
        	 //console.log("v==="+v);
             /*if (k != 'GroupName' && k == 'LastYear') {
                 for (var i = 0; i < colNameArr.length; i++) {                    
                         newObj[colNameArr[i]] = parseFloat(v);
                         console.log("newObj in LastYear===="+parseFloat(v));
                 }
             }else if (k != 'GroupName' && k == 'CurrentYear') {
            	 for (var i = 0; i < colNameArr.length; i++) {
                     
            		 newObj[colNameArr[i]] = parseFloat(v);
                     console.log("newObj in CurrentYear===="+parseFloat(v));
                      
                  }
             }*/
         //});
         newChartDataArr.push(newObj);
     });
     console.log('bar colNameArrss', JSON.stringify(colNameArr));
    console.log('bar newChartDataArrss', JSON.stringify(newChartDataArr));
     var newBarGraph = [];
     for (var i = 0; i < colNameArr.length; i++) {
         let graph = {};
         graph["id"] = "vBarChart-" + (i + 1);
        
             // graph["lineColor"]= colorArray[i];
         if(i==0){
        	 graph["balloonText"] = "[[category]] LastYear:[[value]]";
        	 // graph["title"] = "Last Year : "+colNameArr[i];
        	 graph["title"] = "Last Year "
         }
         else{
        	 graph["balloonText"] = "[[category]] CurrentYear:[[value]]";
        	 graph["title"] = "Current Year  "
        	// graph["title"] = "Current Year : "+colNameArr[i];
         }
         graph["valueField"] = colNameArr[i];
         graph["fillAlphas"] = 0.8;
         graph["lineAlpha"] = 0.2;
         graph["type"] = "column";
         newBarGraph.push(graph);
     }
    // console.log('newBarGraph', newBarGraph);
     var cnthold = 0;
    
     chart = AmCharts.makeChart("LiabDiv", {
         "type": "serial",
         "theme": "light",
         "categoryField": "GroupName",        
         "startDuration": 1,
         "trendLines": [],
         "legend": {
             "useGraphSettings": true
         },
         // //"depth3D": 20,
         "angle": 30,
         "graphs": newBarGraph,
         "guides": [],
         "titles": [{             
        	 "text": "Liability Balance Sheet Graph"
         }],
         "valueAxes": [
             {
                 "id": "ValueAxis-1",
                 "axisAlpha": 0,
                 "position": "left",
                 "title": "Amount"
             }
         ],
         "categoryAxis": {
             "gridPosition": "start",
             "labelRotation": 90,
             "title": "GroupName",
         },
         "allLabels": [],
         "balloon": {},
         "dataProvider": newChartDataArr,
         "export": {
             "enabled": true
         }, "listeners": [{
             "event": "clickGraphItem",
             "method": function (event) {
                 var index = event.index
                 // alert(event.item.category,index);
                // CategoryDatewise(event.item.category, index);
                 // monthWiseChart(event.item.category);
             }
         }]
     });
     // for empty data
     AmCharts.checkEmptyData = function (chart) {
         if (0 == chart.dataProvider.length) {
             // set min/max on the value axis
             chart.valueAxes[0].minimum = 0;
             chart.valueAxes[0].maximum = 100;
             // add dummy data point
             var dataPoint = {
                 dummyValue: 0
             };
             dataPoint[chart.categoryField] = '';
             chart.dataProvider = [newChartDataArr];
             // add label
             chart.addLabel(0, '50%', 'The chart contains no data', 'center');
             // set opacity of the chart div
             chart.chartdiv.style.opacity = 0.5;
             // redraw it
             chart.validateNow();
         }
     }
}

function BalshhetAssetsGraph(newChartData){
	 var newChartDataArr = [];
    var colNameArr = [];
    var amtArr = [];
    myJsonString1 = JSON.stringify(newChartData);
    var obj = JSON.parse(myJsonString1);
   // console.log(obj);
    var obj1 = newChartData[0];  
    
    colNameArr.push(obj1.LastYear,obj1.CurrentYear);
  
    $.each(newChartData, function (i, value) {
        var newObj = {};
        newObj['GroupName'] = value.GroupName;
        newObj[colNameArr[0]] = parseFloat(value.LastYear);
        newObj[colNameArr[1]] = parseFloat(value.CurrentYear);
       /* $.each(value, function (k, v) {
       	// // console.log("v==="+v);
            if (k != 'GroupName' && k == 'LastYear') {
                for (var i = 0; i < colNameArr.length; i++) {
                   
                        newObj[colNameArr[i]] = parseFloat(v);
                    
                }
            }else if (k != 'GroupName' && k == 'CurrentYear') {
           	 for (var i = 0; i < colNameArr.length; i++) {
                    
                         newObj[colNameArr[i]] = parseFloat(v);
                     
                 }
            }
        });*/
        newChartDataArr.push(newObj);
    });
   // console.log('bar colNameArrss', JSON.stringify(colNameArr));
   // console.log('bar newChartDataArrss', JSON.stringify(newChartDataArr));
    var newBarGraph = [];
    for (var i = 0; i < colNameArr.length; i++) {
        let graph = {};
        graph["id"] = "vBarChart-" + (i + 1);
       
            // graph["lineColor"]= colorArray[i];
        if(i==0){
       	 graph["balloonText"] = "[[category]] LastYear:[[value]]";
       	 // graph["title"] = "Last Year : "+colNameArr[i];
       	 graph["title"] = "Last Year "
        }
        else{
       	 graph["balloonText"] = "[[category]] CurrentYear:[[value]]";
       	 graph["title"] = "Current Year  "
       	// graph["title"] = "Current Year : "+colNameArr[i];
        }
        graph["valueField"] = colNameArr[i];
        graph["fillAlphas"] = 0.8;
        graph["lineAlpha"] = 0.2;
        graph["type"] = "column";
        newBarGraph.push(graph);
    }
   // console.log('newBarGraph', newBarGraph);
    var cnthold = 0;
   
    chart = AmCharts.makeChart("AssetsDiv", {
        "type": "serial",
        "theme": "light",
        "categoryField": "GroupName",        
        "startDuration": 1,
        "trendLines": [],
        "legend": {
            "useGraphSettings": true
        },
        // //"depth3D": 20,
        "angle": 30,
        "graphs": newBarGraph,
        "guides": [],
        "titles": [{             
       	 "text": "Assets Balance Sheet Graph"
        }],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "axisAlpha": 0,
                "position": "left",
                "title": "Amount"
            }
        ],
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 90,
            "title": "GroupName",
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": newChartDataArr,
        "export": {
            "enabled": true
        }, "listeners": [{
            "event": "clickGraphItem",
            "method": function (event) {
                var index = event.index
                // alert(event.item.category,index);
               // CategoryDatewise(event.item.category, index);
                // monthWiseChart(event.item.category);
            }
        }]
    });
    // for empty data
    AmCharts.checkEmptyData = function (chart) {
        if (0 == chart.dataProvider.length) {
            // set min/max on the value axis
            chart.valueAxes[0].minimum = 0;
            chart.valueAxes[0].maximum = 100;
            // add dummy data point
            var dataPoint = {
                dummyValue: 0
            };
            dataPoint[chart.categoryField] = '';
            chart.dataProvider = [newChartDataArr];
            // add label
            chart.addLabel(0, '50%', 'The chart contains no data', 'center');
            // set opacity of the chart div
            chart.chartdiv.style.opacity = 0.5;
            // redraw it
            chart.validateNow();
        }
    }
} 

function showItemGodownModal(from_date,to_date,item){
// rrrr= rowss;
	var fromDate = $("#chartDate").val().split('-')[0].trim()
	var toDate = $("#chartDate").val().split('-')[1].trim();
	$("#fromDate").empty().append(fromDate);
	$("#toDate").empty().append(toDate);
	$("#itemGodownTable tbody").empty();
	$("#itemName").empty();
	
	var branch = $("#branch").val();
	//var param= branch+"~'"+from_date+"'~"+item+"~"+branch+"~'"+from_date+"'~'"+to_date+"'~"+item+"~"+branch+"~'"+from_date+"'~'"+to_date+"'~"+item+"~"+branch+"~'"+to_date+"'~"+item;
	$.ajax({
		url : "getRecordLst",
		type : 'post',
		dataType : 'json',
		data : {
			/*sqlMstId : 123,
			param : param*/
			sqlMstId : 130,
			param : branch + "~'"+toDate+"'" + "~" + item
		},
		success : function(resp) {			
			console.log('checkPin'+resp)
			var txt = '';
			var curshing_data = resp;
			var stockBagTot = 0;
			var stockQntlTot = 0;
			console.log("curshing_data.length"+curshing_data.length)
			 if(curshing_data.length == 0){
				 $("#alertModal").modal('show');
			  } else {
				  $("#itemGodownModal").modal('show');
				  $("#itemName").empty().append(curshing_data[0].PPPM_PROD_NAME);
				  $.each(curshing_data,function(i,obj){
					  if(!("NULL" in obj)){
						  txt += '<tr>'
							txt += '<tr>'
							txt += '<th class="center">'+(i+1)+'</td>';
							txt += "<th ><span class='pull-left'>" + obj.LOCATION_NAME +"</span></th>";
							txt += '<th class=""><span class="pull-right">'+obj.SEASON_CODE +'</th>';
							txt += '<th class=""><span class="pull-right">'+parseFloat(obj.BAGS).toFixed(3)  +'</th>';
							txt += '<th class=""><span class="pull-right">'+parseFloat(obj.QUINTALS).toFixed(2)+'</th>';							
							txt += '</tr>';
							
							stockBagTot  = parseFloat(stockBagTot) + parseFloat(obj.BAGS);
							stockQntlTot = parseFloat(stockQntlTot) + parseFloat(obj.QUINTALS);
					  }
				  });
			  }
			 $("#itemGodownTable tbody").empty().append(txt);
			 $("#stockBagTotal").text(stockBagTot.toFixed(3));
			 $("#stockQntlTotal").text(stockQntlTot.toFixed(2));
			 
		}
	});
// CLOSING: 111250
// ITEM: 26887
// ITEM_NAME: "S-30-S2"
// LOCATION_ID: 8
// LOCATION_NAME: "1"
// OPENING: 111250
// SUBTCODE: "S"
// TO_DATE_PRODUCTION: 0
// TO_DATE_SALE: 0
// $('#itemGodownTable').DataTable();
}

function loginCheck() {
	var userName = $("#userName").val();
	var password = $("#password").val();
	var branch = $("#branch").find('option:selected').attr("value");
	// // console.log("branch1",branch);
	var company = $("#company").find('option:selected').attr("value");
	// // console.log("company1",company);
	if (userName == "") {
		$("#msgDiv").html("Please Enter User Name.");
		$("#msgDiv").show().delay(5000).fadeOut();
		setTimeout(function() {
			$("#userName").focus(), 10
		});
		return false;
	}
	if (password == "") {
		$("#msgDiv").html("Please Enter Password.");
		$("#msgDiv").show().delay(5000).fadeOut();
		setTimeout(function() {
			$("#password").focus(), 10
		});
		return false;
	}
	$.ajax({
				url : '${pageContext.request.contextPath}/login',
				type : 'post',
				async : false,
				data : {
					userName : userName,
					password : password,
					branch : branch,
					company : company,
				},
				success : function(data) {
					if (data.msg == "Success") {
						setpanels();
						
// window.location.href = "${pageContext.request.contextPath}/welcome"
					} else {
						$("#msgDiv").html(data.msg);
						$("#msgDiv").show().delay(5000).fadeOut();
					}
				}
			});
}

// function getContextUrl(){
// //return '${pageContext.request.contextPath}/showDashboard';
// return '${pageContext.request.contextPath}';
// }

function getCurrentFinancialYear(strDocDate) {
	  var startYear = "";
	  var endYear = "";
	  var docDate = new Date(strDocDate);
	  if ((docDate.getMonth() + 1) <= 3) {
	    startYear = docDate.getFullYear() - 1;
	    endYear = docDate.getFullYear();
	  } else {
	    startYear = docDate.getFullYear();
	    endYear = docDate.getFullYear() + 1;
	  }
	  return {
		  startDate : "01-Apr-" + startYear, endDate: "31-Mar-" + endYear 
		  };
	}

/*$(window).on('load',function(){
	//alert("status==="+$("#loginStatus").val());
			
	  var b = $("#sessionBranch").val();
		// console.log("${branch}"+b);
		  if(b == ''){
		
			 $('#branch').val('').change();
			// $('#myModal').css("display", "block");
			 $('#myModal').modal('show');
			
      $("#pin1").focus();
      
      $("#logout").hide()
	} else {
		// refreshData();
		$("#logout").show();
	}
//}
});*/

function refreshData(){
	
	if ($("#loginStatus").val() == "Y") {
		// $("#loginStatus").val("N");
			
		var from_Date = $("#Form_fromDate").val();				
		var to_Date = $("#Form_toDate").val();				
	    $("#chartDate").val(from_Date + "-"+ to_Date);
	    logId =  $("#LoguserId").val();
	    	
	    var Tab = $("#Tab").val();
		var fromDate = $("#chartDate").val().split('-')[0].trim()
		var toDate = $("#chartDate").val().split('-')[1].trim();
		var monthFlag = 'N';
		var p_type = 0;		 	
			getSingleChartDataByChartId("","","",fromDate,toDate,monthFlag, p_type);
			getBalanceSheetData(logId);
			getPrfitLoss(logId);
			//alert("Tab===="+Tab);
		 if(Tab=="Sale"){ 
				//$('#pills-sale').tab('show');
				$('#myTab a[href="#pills-sale"]').tab('show');
			}else if(Tab=="BalanceSheet"){
				$('#myTab a[href="#pills-BalanceSheet"]').tab('show');
			}
			else if(Tab=="ProfitLoss"){
				$('#myTab a[href="#pills-Profit"]').tab('show');
			}else if(Tab=="DailyCrushing"){
				$('#myTab a[href="#pills-Crushing"]').tab('show');
			}else if(Tab=="Purchase"){
				$('#myTab a[href="#pills-purchase"]').tab('show');
			}	else if(Tab=="StockDetails"){
				$('#myTab a[href="#pills-By-product"]').tab('show');
			}	else if(Tab=="StoreDetails"){
				$('#myTab a[href="#pills-By-product-store"]').tab('show');
			}			
	     }else{ 	    	 
				logId =  $("#LoguserId").val();		 
				var fromDate = $("#chartDate").val().split('-')[0].trim()
				var toDate = $("#chartDate").val().split('-')[1].trim();
				var monthFlag = 'N';
				var p_type = 0;
				getSingleChartDataByChartId("","","",fromDate,toDate,monthFlag, p_type);
				getBalanceSheetData(logId);
				getPrfitLoss(logId);
			}															
}

/*function refreshData(){
	alert("In refresh data"); /
	logId =  $("#LoguserId").val();		 
	var fromDate = $("#chartDate").val().split('-')[0].trim()
	var toDate = $("#chartDate").val().split('-')[1].trim();
	var monthFlag = 'N';
	var p_type = 0;
	getSingleChartDataByChartId("","","",fromDate,toDate,monthFlag, p_type);
	getBalanceSheetData(logId);
	getPrfitLoss(logId);
}
	 
function BackRefreshData(){
	alert("In Backrefresh data");
	var from_Date = $("#Form_fromDate").val();				
	var to_Date = $("#Form_toDate").val();				
    $("#chartDate").val(from_Date + "-"+ to_Date);
    logId =  $("#LoguserId").val();
   
    var Tab = $("#Tab").val();
	var fromDate = $("#chartDate").val().split('-')[0].trim()
	var toDate = $("#chartDate").val().split('-')[1].trim();
	 var monthFlag = 'N';
	 var p_type = 0;
	 if(Tab=="Sale"){
			//$('#pills-sale').tab('show');
			$('#myTab a[href="#pills-sale"]').tab('show');
		}else if(Tab=="BalanceSheet"){
			$('#myTab a[href="#pills-BalanceSheet"]').tab('show');
		}
	 
	getSingleChartDataByChartId("","","",fromDate,toDate,monthFlag, p_type);
	getBalanceSheetData(logId);
	getPrfitLoss(logId);
}*/

function logout(){
	$("#logoutModal").modal('show');
}

function logoutYes(){	
	window.location.href = "logOut"
//		
//	
// $
// .ajax({
// url : 'logOut',
// type : 'get',
// async : false,
// success : function(data) {
// // console.log("logout"+data)
// if (data == "Success") {
// window.location.href = "";
// }
// }
// });
}


function cancel(){
	$("#logoutModal").modal('hide');
}

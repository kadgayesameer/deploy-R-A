//For Balance Sheet Code Start here

function getBalanceSheetData(logId){
//	alert("logId in balsheet==="+logId);

	var finYear = $("#loginFinYearId").val();
	var finlastYear = finYear.slice(0,4);
	
//	var fromDate = $("#chartDate").val().split('-')[0].trim();
//	var toDate = $("#chartDate").val().split('-')[1].trim();
	
	var fromDate = $("#fromDate").val();
	var toDate = $("#toDate").val();
	 var Session1 = fromDate.slice(0, 4);
	
     var Session2 = toDate.slice(6);
     //console.log("Session2==="+(Session2-1));
   
	 $("#current_Rep_prd").text("As on :"+toDate);
     $("#prev_Rep_prd").text("Last Year : 31/03/" +finlastYear);     
 	 $("#current_Rep_prdA").text("As on :"+toDate);
     $("#prev_Rep_prdA").text("Last Year : 31/03/" +finlastYear);
	
	var company = $("#company").val();
	var branch = $("#branch").val();
	var tr = "";
	var tr1 = ""; 
	var rowdata = [];
	//alert("logId in balsheet==="+logId);
	 var lastYear = "01/04/" +finlastYear;
//	 alert(lastYear);
///*	var toDate = $("#Form_toDate").val();
//	var lastYear = $("#Form_fromDate").val();*/
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
			//console.log("resp===="+JSON.stringify(resp));
			var BALANCE_SHEET_LIABILITY = resp.BALANCE_SHEET_LIABILITY;
			var BALANCE_SHEET_ASSETS = resp.BALANCE_SHEET_ASSETS;
			var dataPoints=[];
			var colNameArr = [];
			var newChartDataArrLiability = [];
			var newChartDataArrAssets = [];
			GLgroup = [];
			var newBarGraph = [];
			console.log("bal_sheet==="+JSON.stringify(BALANCE_SHEET_LIABILITY));
			$.each(BALANCE_SHEET_LIABILITY, function(key,obj){
				 if(!("NULL" in obj)){					
					  tr += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
					    	   tr += "<td style='white-space:nowrap;'><span class='pull-left'><b><i class='fas fa-hand-point-right fa-lg text-primary'></i><a href='#' style='color:#674ddf;margin-left: 10px;' onclick='Liability()'>"+obj.PARTICULARS +"</a></b></span></td>";
					    	   
					       }
						  else if(obj.RECORD_TYPE=="GROUP"){							  
					    	   tr += "<th ><span class='pull-left' style='margin-left:15px;color:red' >"+obj.PARTICULARS + ' ('+obj.GRAPH_CODE +")</span></th>";		
					    	   colNameArr.push("LastYear" ,"CurrentYear");
	                            var newObj = {};
	                            newObj['GroupName'] = obj.GRAPH_CODE;   
	                            
	                               for (var i = 0; i < colNameArr.length; i++) {	
	                            	  ////console.log("newChartDataArrLiability in LastYear===="+obj.LAST_YEAR_BAL);
	                            	//  //console.log("newChartDataArrLiability in CURRENT_YEAR_BAL===="+obj.CURRENT_YEAR_BAL);
//	                                      //  newObj[colNameArr[i]] = parseFloat(obj.LAST_YEAR_BAL);
	                                      //  newObj[colNameArr[i]] = parseFloat(obj.CURRENT_YEAR_BAL);		      
	                                      
	                            	  // //console.log("in CurrentYear check===="+colNameArr);
	                            	
	                                       for (var i = 0; i < colNameArr.length; i++) {	                                          
	                                    	   newObj[colNameArr[0]] = obj.LAST_YEAR_BAL;
	                                    	   newObj[colNameArr[1]] = obj.CURRENT_YEAR_BAL;
	                                          // //console.log("newChartDataArrLiability in LastYear===="+JSON.stringify(newObj));
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
					
					  	
					  	if(obj.RECORD_TYPE=="MAINGROUP"){
					  	
						  	if(obj.CURRENT_YEAR_BAL==null)	{
							}	else{
							}											 
							if(obj.LAST_YEAR_BAL==null ){
							}	else{
							}	
					  	
					  	}
					  	else{
					  		if(obj.RECORD_TYPE=="GROUP"){
					  			if(obj.CURRENT_YEAR_BAL==null)	{
									tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
								}	else{
									tr += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
								}											 
								if(obj.LAST_YEAR_BAL==null ){
									tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
								}	else{
									tr += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
								}
					  		}
					  		else{
					  			if(obj.RECORD_TYPE=="SUBGROUP"){
					  				
					  				if(obj.CURRENT_YEAR_BAL==null)	{
										tr += '<td class=""><span class="pull-right">'+ "0.00"  +'</th>';
									}	else{
										tr += '<td class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
									}											 
									if(obj.LAST_YEAR_BAL==null ){
										tr += '<td class=""><span class="pull-right">'+ "0.00"  +'</th>';
									}	else{
										tr += '<td class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
									}
					  			
					  			}
					  			else
					  			{
								  	if(obj.CURRENT_YEAR_BAL==null)	{
										tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
									}	else{
										tr += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
									}											 
									if(obj.LAST_YEAR_BAL==null ){
										tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
									}	else{
										tr += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
									}
								}
							}	
						}				
					  		tr += '</tr>';					  							  		
					  		// -----------------------Liability Graphs
							// ---------------------------
					  		
					  		// alert("dataPoints==="+JSON.stringify(dataPoints));
					 }				 				 	
			});
			
			// //console.log("newBarGraph===="+JSON.stringify(newBarGraph));
			
			// alert("dataPoints===="+JSON.stringify(dataPoints));
			
			$.each(BALANCE_SHEET_ASSETS, function(key,obj){
				 if(!("NULL" in obj)){		
					var dataPoints = [];
					var newLiabGraph = [];
					 tr1 += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
							  //tr1 += "<th ><span class='pull-left'><u><a href='#' style='color:blue' onclick='Assets()'><a href='#'>"+obj.PARTICULARS +"</a></u></span></th>";
							  tr1 += "<th style='white-space:nowrap;'><span class='pull-left'><i class='fas fa-hand-point-right fa-lg text-primary'></i><a name='Assets' class='nlink' href='#Assets' onclick='Assets()' style='color:#674ddf;margin-left: 10px;'>"+obj.PARTICULARS +" </a></span></th>";							  
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
                                   // //console.log("newChartDataArrLiability in LastYear===="+JSON.stringify(newObj));
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
							}
							
							
							if(obj.RECORD_TYPE=="MAINGROUP"){
							
							}
							else{
								if(obj.RECORD_TYPE=="GROUP"){
									
									if(obj.CURRENT_YEAR_BAL==null)	{
										tr1 += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
									}else{
										tr1 += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
									}					
									
									if(obj.LAST_YEAR_BAL==null)	{
										tr1 += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
									}	else{
										tr1 += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
									}
								
								}
								else{
									if(obj.RECORD_TYPE=="SUBGROUP"){
									
											if(obj.CURRENT_YEAR_BAL==null)	{
												tr1 += '<td class=""><span class="pull-right">'+ "0.00"  +'</th>';
											}else{
												tr1 += '<td class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
											}					
											
											
											if(obj.LAST_YEAR_BAL==null)	{
												tr1 += '<td class=""><span class="pull-right">'+ "0.00"  +'</th>';
											}	else{
												tr1 += '<td class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
											}
									}
									else{
											if(obj.CURRENT_YEAR_BAL==null)	{
												tr1 += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
											}else{
												tr1 += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
											}					
											
											
											if(obj.LAST_YEAR_BAL==null)	{
												tr1 += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
											}	else{
												tr1 += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
											}
										
										}
								}
							
							}
										
							 tr1 += '</tr>';
							 // //console.log("obj===="+JSON.stringify(obj));
							 
							 // -----------------------------------------Graph------------------------------------------
							 
				  }	
			});
			
			// //console.log("newChartDataArrLiability===="+JSON.stringify(newChartDataArrLiability));
			
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
//Balance Sheet and Asset Table Code End Here

// Balance Sheet and Asset Chart code Start here

function BalshhetLiabilityGraph(newChartData){

//alert("Inside Chart");

	    var colNameArray = [];
//	    alert(JSON.stringify(newChartData));
	    
	   
        colNameArray.push("LastYear","CurrentYear");
    	

    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create("LiabDiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
	chart.scrollbarY = new am4core.Scrollbar();
	chart.exporting.menu = new am4core.ExportMenu(); 

    // Add data
    chart.data = newChartData;
    
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "GroupName";
    categoryAxis.title.text = "[bold]GroupName";
    categoryAxis.renderer.grid.template.location = 0;
	categoryAxis.renderer.minGridDistance = 20;
	categoryAxis.renderer.cellStartLocation = 0.1;
	categoryAxis.renderer.cellEndLocation = 0.9;

	//x and y axis labels rotate and align center and right Starts
	categoryAxis.renderer.labels.template.horizontalCenter = "right";
	categoryAxis.renderer.labels.template.verticalCenter = "middle";
	categoryAxis.renderer.labels.template.rotation = 270;
	//x and y axis labels rotate and align center and right Ends

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//    valueAxis.min = 0;
	valueAxis.title.text = "[bold]Amount";


    // Add chart title
    var title = chart.titles.create();
	title.text = "[bold] Liability Balance Sheet Graph";
	title.fontSize = 14;
	title.marginBottom = 18;


    // Create series
    function createSeries( field, name){ 
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "GroupName"; 
        series.name = name;
        series.columns.template.tooltipText = "{GroupName}"+ " {name} : [bold]{valueY}[/]";
        
        
         		
		       
		       // Set up tooltip
				  series.adapter.add("tooltipText", function(ev) {
				    var text = "[bold]{categoryX}[/]\n"
				    chart.series.each(function(item) {
				      if (!item.isHidden) {
				        text += "[" + item.stroke.hex + "]●[/] " + item.name + ": {" + item.dataFields.valueY + "}\n";
				      }
				    });
				    return text;
				  });
				  
				  series.tooltip.getFillFromObject = false;
				  series.tooltip.background.fill = am4core.color("#fff");
				  series.tooltip.label.fill = am4core.color("#00");
				  
				  // Prevent cross-fading of tooltips
				  series.tooltip.defaultState.transitionDuration = 0;
				  series.tooltip.hiddenState.transitionDuration = 0;
				  
//				  var bullet = series.bullets.push(new am4charts.CircleBullet());
//				  bullet.circle.stroke = am4core.color("#fff");
//				  bullet.circle.strokeWidth = 2;

		      
        
    }

    createSeries("LastYear","Last Year");
    createSeries("CurrentYear","Current Year");

			chart.cursor = new am4charts.XYCursor();
			chart.cursor.maxTooltipDistance = 0;
			valueAxis.cursorTooltipEnabled = false;

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;


chart.responsive.enabled = true;

chart.responsive.rules.push({
  relevant: function(target) {
    return false;
  },
  state: function(target, stateId) {
    return;
  }
});
}


//Asset

function BalshhetAssetsGraph(newChartData){
	
	//alert("Inside Chart");

	    var colNameArray = [];
//	    alert(JSON.stringify(newChartData));
	    
	   
        colNameArray.push("LastYear","CurrentYear");
    	

    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create("AssetsDiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
	chart.scrollbarY = new am4core.Scrollbar();
	chart.exporting.menu = new am4core.ExportMenu(); 

    // Add data
    chart.data = newChartData;
    
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "GroupName";
    categoryAxis.title.text = "[bold]GroupName";
    categoryAxis.renderer.grid.template.location = 0;
	categoryAxis.renderer.minGridDistance = 20;
	categoryAxis.renderer.cellStartLocation = 0.1;
	categoryAxis.renderer.cellEndLocation = 0.9;

	//x and y axis labels rotate and align center and right Starts
	categoryAxis.renderer.labels.template.horizontalCenter = "right";
	categoryAxis.renderer.labels.template.verticalCenter = "middle";
	categoryAxis.renderer.labels.template.rotation = 270;
	//x and y axis labels rotate and align center and right Ends

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//    valueAxis.min = 0;
	valueAxis.title.text = "[bold]Amount";


    // Add chart title
    var title = chart.titles.create();
	title.text = "[bold] Assets Balance Sheet Graph";
	title.fontSize = 14;
	title.marginBottom = 18;


    // Create series
    function createSeries( field, name){ 
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "GroupName"; 
        series.name = name;
        series.columns.template.tooltipText = "{GroupName}"+ " {name} : [bold]{valueY}[/]";
        
        // Set up tooltip
				  series.adapter.add("tooltipText", function(ev) {
				  
				    var text = "[bold]{categoryX}[/]\n"
				    chart.series.each(function(item) {
				      if (!item.isHidden) {
				        text += "[" + item.stroke.hex + "]●[/] " + item.name + ": {" + item.dataFields.valueY + "}\n";
				      }
				    });
				    return text;
				  });
				  
				  series.tooltip.getFillFromObject = false;
				  series.tooltip.background.fill = am4core.color("#fff");
				  series.tooltip.label.fill = am4core.color("#00");
				  
				  // Prevent cross-fading of tooltips
				  series.tooltip.defaultState.transitionDuration = 0;
				  series.tooltip.hiddenState.transitionDuration = 0;
    }

    createSeries("LastYear","Last Year");
    createSeries("CurrentYear","Current Year");

	chart.cursor = new am4charts.XYCursor();
	chart.cursor.maxTooltipDistance = 0;
	valueAxis.cursorTooltipEnabled = false;

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;


	chart.responsive.enabled = true;

	chart.responsive.rules.push({
  			relevant: function(target) {
    		return false;
  		},
 	 		state: function(target, stateId) {
   		 	return;
  		}
	});
	
} 

//Balance Sheet and Asset Chart code End Here

//Profit and Loss Code Start Here

function getPrfitLoss(logId){

	var finYear = $("#loginFinYearId").val();
	var finlastYear = finYear.slice(0,4);
/*	var logId = "";

	
	
	if(logId=="" || logId==null){
		 logId =  $("#LoguserId").val();
	}else{
		logId = logId;
	}*/
//	var fromDate = $("#chartDate").val().split('-')[0].trim();
//	var toDate = $("#chartDate").val().split('-')[1].trim();
	
	var fromDate = $("#fromDate").val();
	var toDate = $("#toDate").val();
	
	var Session2 = toDate.slice(6);
	$("#current_Rep_prdI").text("As on :"+toDate);
    $("#prev_Rep_prdI").text("Last Year : 31/03/" +finlastYear);
    $("#current_Rep_prdE").text("As on :"+toDate);
    $("#prev_Rep_prdE").text("Last Year : 31/03/" +finlastYear);
	var company = $("#company").val();
	var branch = $("#branch").val();
	var tr = "";
	var tr1 = ""; 
	var rowdata = [];
    var lastYear = "01/04/" +finlastYear;
	/*var lastYear = $("#Form_fromDate").val();
	var toDate = $("#Form_toDate").val();*/
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
			console.log(resp);
			var PROFIT_LOSS_INCOME = resp.PROFIT_LOSS_INCOME;
			var PROFIT_LOSS_EXPENSE = resp.PROFIT_LOSS_EXPENSE;			
			var colNameArr = [];
			var newChartDataArrIncome = [];
			var newChartDataArrExpense = [];
			GLgroup = [];
			// var newBarGraph = [];
			// //console.log("bal_sheet==="+JSON.stringify(BALANCE_SHEET_LIABILITY));
			$.each(PROFIT_LOSS_INCOME, function(key,obj){
			
				 if(!("NULL" in obj)){					
					  tr += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
					    	   tr += "<th style='white-space:nowrap;'><span class='pull-left' ><i class='fas fa-hand-point-right fa-lg text-primary'></i><a href='#'  style='color:#674ddf;margin-left: 10px;' onclick='Income()'>"+obj.PARTICULARS +"</a></span></th>";
					       }
						  else if(obj.RECORD_TYPE=="GROUP"){
							  // alert("In GROUP");
							 // //console.log("obj.GRAPH_CODE====="+obj.GRAPH_CODE);
					    	   tr += "<th ><span class='pull-left' style='margin-left:15px;color:red' >"+obj.PARTICULARS + ' ('+obj.GRAPH_CODE +")</span></th>";		
					    	  var colNameArrP = [];
					    	  colNameArrP.push("LastYear" ,"CurrentYear");                        
	                            var newObj1 = {};
	                            newObj1['GroupName'] = obj.GRAPH_CODE;   
	                            
	                            for (var i = 0; i < colNameArrP.length; i++) {	                            	
                             	   newObj1[colNameArrP[0]] = obj.LAST_YEAR_BAL;
                             	   newObj1[colNameArrP[1]] = obj.CURRENT_YEAR_BAL;
                                   // //console.log("newChartDataArrLiability in LastYear===="+JSON.stringify(newObj));
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
					  	
					  	
					  	 if(obj.RECORD_TYPE=="MAINGROUP"){
					  	 
					  	 }
					  	 else{
					  	 	if(obj.RECORD_TYPE=="GROUP"){
					  	 		if(obj.CURRENT_YEAR_BAL==null)	{
									tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
								}	else{
									tr += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
								}					
								
								if(obj.LAST_YEAR_BAL==null)	{
									tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
								}	else{
									tr += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
								}
					  	 	}
					  	 	else{
					  	 		if(obj.RECORD_TYPE=="SUBGROUP"){
					  	 				
					  	 				if(obj.CURRENT_YEAR_BAL==null)	{
											tr += '<td class=""><span class="pull-right">'+ "0.00"  +'</th>';
										}	else{
											tr += '<td class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
										}					
										
										if(obj.LAST_YEAR_BAL==null)	{
											tr += '<td class=""><span class="pull-right">'+ "0.00"  +'</th>';
										}	else{
											tr += '<td class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
										}
					  	 		}
					  	 		else{
					  	 				if(obj.CURRENT_YEAR_BAL==null)	{
											tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
										}	else{
											tr += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
										}					
										
										if(obj.LAST_YEAR_BAL==null)	{
											tr += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
										}	else{
											tr += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
										}
					  	 		}
					  	 	}
					  	 }
					  						
					  		tr += '</tr>';					  							  		
					  		// -----------------------Liability Graphs
							// ---------------------------
					  		
					  		// alert("dataPoints==="+JSON.stringify(dataPoints));
					 }				 				 	
			});
			
			// //console.log("newBarGraph===="+JSON.stringify(newBarGraph));
			
			// alert("dataPoints===="+JSON.stringify(dataPoints));
			//stickybits('table th');
			$.each(PROFIT_LOSS_EXPENSE, function(key,obj){
				 if(!("NULL" in obj)){		
					var dataPoints = [];
					var newLiabGraph = [];
					 tr1 += '<tr>'
						  if(obj.RECORD_TYPE=="MAINGROUP"){
							// alert("In MainGrp");
							  tr1 += "<th style='white-space:nowrap;'><span class='pull-left' onclick='Expense()'><i class='fas fa-hand-point-right fa-lg text-primary'></i><a href='#'  style='color:#674ddf;margin-left: 10px;'>"+obj.PARTICULARS +"</a></span></th>";
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
					    	   alert("In SUBGROUP" + obj.PARTICULARS);
					    	   tr1 += "<th><span class='pull-right' style='color:black'></span></th>";
					    	  //tr1 += "<th><span class='pull-right' style='color:black'>"+obj.PARTICULARS +"</span></th>";
					    	  // alert("as_on_dateTotal2==="+parseFloat(obj.LAST_YEAR_BAL).toFixed(3));
					    	  // as_on_dateTotal2.val(parseFloat(obj.CURRENT_YEAR_BAL).toFixed(3));
					       }	   
						   if(obj.NOTE_NO==null){
								     tr1 += '<th class=""><span class="pull-right"></th>';
						   }else{
									 tr1 += '<th class=""><span class="pull-right">'+obj.NOTE_NO + '</th>';
							}
							
							 if(obj.RECORD_TYPE=="MAINGROUP"){
					  	 
					  	 }
					  	 else{
					  	 	if(obj.RECORD_TYPE=="GROUP"){
							
							
							
							if(obj.CURRENT_YEAR_BAL==null)	{
								tr1 += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
							}else{
								tr1 += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
							}					
							
							
							if(obj.LAST_YEAR_BAL==null)	{
								tr1 += '<th class=""><span class="pull-right">'+ "0.000"  +'</th>';
							}	else{
								tr1 += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
							}	
							}
							else{
					  	 		if(obj.RECORD_TYPE=="SUBGROUP"){
					  	 				
					  	 				if(obj.CURRENT_YEAR_BAL==null)	{
											tr1 += '<td class=""><span class="pull-right">'+ "0.00"  +'</td>';
										}	else{
											tr1 += '<td class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</td>';
										}					
										
										if(obj.LAST_YEAR_BAL==null)	{
											tr1 += '<td class=""><span class="pull-right">'+ "0.00"  +'</td>';
										}	else{
											tr1 += '<td class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</td>';			
										}
					  	 		}
					  	 		else{
					  	 				if(obj.CURRENT_YEAR_BAL==null)	{
											tr1 += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
										}	else{
											tr1 += '<th class=""><span class="pull-right">'+ parseFloat(obj.CURRENT_YEAR_BAL).toFixed(2)  +'</th>';
										}					
										
										if(obj.LAST_YEAR_BAL==null)	{
											tr1 += '<th class=""><span class="pull-right">'+ "0.00"  +'</th>';
										}	else{
											tr1 += '<th class=""><span class="pull-right">'+parseFloat(obj.LAST_YEAR_BAL).toFixed(2)  +'</th>';			
										}
					  	 		}
					  	 	}	
							}	
							 tr1 += '</tr>';
							 // //console.log("obj===="+JSON.stringify(obj));
							 
							 // -----------------------------------------Graph------------------------------------------
							 
				  }
			});
			// //console.log("newChartDataArrAssets===="+JSON.stringify(newChartDataArrAssets));
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

//		alert("Inside Income Chart");

	    var colNameArray = [];
//	    alert(JSON.stringify(newChartDataIncome));
	    
	   
        colNameArray.push("LastYear","CurrentYear");
    	

    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create("IncomeDiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
	chart.scrollbarY = new am4core.Scrollbar();
	chart.exporting.menu = new am4core.ExportMenu(); 

    // Add data
    chart.data = newChartDataIncome;
    
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "GroupName";
    categoryAxis.title.text = "[bold]GroupName";
    categoryAxis.renderer.grid.template.location = 0;
	categoryAxis.renderer.minGridDistance = 20;
	categoryAxis.renderer.cellStartLocation = 0.1;
	categoryAxis.renderer.cellEndLocation = 0.9;

	//x and y axis labels rotate and align center and right Starts
	categoryAxis.renderer.labels.template.horizontalCenter = "right";
	categoryAxis.renderer.labels.template.verticalCenter = "middle";
	categoryAxis.renderer.labels.template.rotation = 270;
	//x and y axis labels rotate and align center and right Ends

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//    valueAxis.min = 0;
	valueAxis.title.text = "[bold]Amount";


    // Add chart title
    var title = chart.titles.create();
	title.text = "[bold] Income Graph";
	title.fontSize = 14;
	title.marginBottom = 18;


    // Create series
    function createSeries( field, name){ 
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "GroupName"; 
        series.name = name;
        series.columns.template.tooltipText = "{GroupName}"+ " {name} : [bold]{valueY}[/]";
        
         // Set up tooltip
				  series.adapter.add("tooltipText", function(ev) {
				    var text = "[bold]{categoryX}[/]\n"
				    chart.series.each(function(item) {
				      if (!item.isHidden) {
				        text += "[" + item.stroke.hex + "]●[/] " + item.name + ": {" + item.dataFields.valueY + "}\n";
				      }
				    });
				    return text;
				  });
				  
				  series.tooltip.getFillFromObject = false;
				  series.tooltip.background.fill = am4core.color("#fff");
				  series.tooltip.label.fill = am4core.color("#00");
				  
				  // Prevent cross-fading of tooltips
				  series.tooltip.defaultState.transitionDuration = 0;
				  series.tooltip.hiddenState.transitionDuration = 0;
        
    }

    createSeries("LastYear","Last Year");
    createSeries("CurrentYear","Current Year");
	
	chart.cursor = new am4charts.XYCursor();
	chart.cursor.maxTooltipDistance = 0;
	valueAxis.cursorTooltipEnabled = false;
   

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;


	chart.responsive.enabled = true;

	chart.responsive.rules.push({
  			relevant: function(target) {
    		return false;
  		},
 	 		state: function(target, stateId) {
   		 	return;
  		}
	});
}

function ExpenseGraph(newChartDataExpense){
		
		
//			alert("Inside Income Chart");

	    var colNameArray = [];
//	    alert(JSON.stringify(newChartDataExpense));
	    
	   
        colNameArray.push("LastYear","CurrentYear");
    	

    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create("ExpenseDiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
	chart.scrollbarY = new am4core.Scrollbar();
	chart.exporting.menu = new am4core.ExportMenu(); 

    // Add data
    chart.data = newChartDataExpense;
    
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "GroupName";
    categoryAxis.title.text = "[bold]GroupName";
    categoryAxis.renderer.grid.template.location = 0;
	categoryAxis.renderer.minGridDistance = 20;
	categoryAxis.renderer.cellStartLocation = 0.1;
	categoryAxis.renderer.cellEndLocation = 0.9;

	//x and y axis labels rotate and align center and right Starts
	categoryAxis.renderer.labels.template.horizontalCenter = "right";
	categoryAxis.renderer.labels.template.verticalCenter = "middle";
	categoryAxis.renderer.labels.template.rotation = 270;
	//x and y axis labels rotate and align center and right Ends

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//    valueAxis.min = 0;
	valueAxis.title.text = "[bold]Amount";


    // Add chart title
    var title = chart.titles.create();
	title.text = "[bold] Expense Graph";
	title.fontSize = 14;
	title.marginBottom = 18;


    // Create series
    function createSeries( field, name){ 
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "GroupName"; 
        series.name = name;
        series.columns.template.tooltipText = "{GroupName}"+ " {name} : [bold]{valueY}[/]";
        
//         series.columns.template.adapter.add("fill", (fill, target) => {
//                                  return chart.colors.getIndex(target.dataItem.index);
//                                });
        
         // Set up tooltip
				  series.adapter.add("tooltipText", function(ev) {
				    var text = "[bold]{categoryX}[/]\n"
				    chart.series.each(function(item) {
				      if (!item.isHidden) {
				        text += "[" + item.stroke.hex + "]●[/] " + item.name + ": {" + item.dataFields.valueY + "}\n";
				      }
				    });
				    return text;
				  });
				  
				  series.tooltip.getFillFromObject = false;
				  series.tooltip.background.fill = am4core.color("#fff");
				  series.tooltip.label.fill = am4core.color("#00");
				  
				  // Prevent cross-fading of tooltips
				  series.tooltip.defaultState.transitionDuration = 0;
				  series.tooltip.hiddenState.transitionDuration = 0;
				  
				 
				  
    }

    createSeries("LastYear","Last Year");
    createSeries("CurrentYear","Current Year");
	
	chart.cursor = new am4charts.XYCursor();
	chart.cursor.maxTooltipDistance = 0;
	valueAxis.cursorTooltipEnabled = false;

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;


	chart.responsive.enabled = true;

	chart.responsive.rules.push({
  			relevant: function(target) {
    		return false;
  		},
 	 		state: function(target, stateId) {
   		 	return;
  		}
	});
}

function Assets(){
	//window.location.href ="Assets"
	/*var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();	*/
	
	var fromDate = $("#fromDate").val();
	var toDate = $("#toDate").val();				
	
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
	/*var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();	*/
	var fromDate = $("#fromDate").val();
	var toDate = $("#toDate").val();
	window.location.href = "Liability?fromDate=" +fromDate + "&ToDate="+toDate;	
}
function Income(){
	//window.location.href ="Revenue"
	/*var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();	*/	
	
	var fromDate = $("#fromDate").val();
	var toDate = $("#toDate").val();
	
	window.location.href = "Revenue?fromDate=" +fromDate + "&ToDate="+toDate;	
}

function Expense(){
	//window.location.href ="Expense"
		/*var fromDate = $("#chartDate").val().split('-')[0].trim();
	var toDate = $("#chartDate").val().split('-')[1].trim();*/
	
	var fromDate = $("#fromDate").val();
	var toDate = $("#toDate").val();
						
	window.location.href = "Expense?fromDate=" +fromDate + "&ToDate="+toDate;	
}


//Profit and Loss code End Here

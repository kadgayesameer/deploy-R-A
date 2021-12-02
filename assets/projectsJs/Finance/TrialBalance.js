function TrialBalanceData() {
	// alert("ala re resp Trial Balance");
	var company = $("#company").val();
	var branch = $("#branch").val();


	
	var tr = "";
	
	
	var rowdata = [];
	var lastYear = $("#fromDate").val();
	var toDate = $("#toDate").val();
//		alert(toDate);
//		alert(lastYear);


	var openingCredit3 = 0.00;
	var openingDebit3 = 0.00;
	var receiptValue3 = 0.00;
	var paymentValue3 = 0.00;
	var closingCredit3 = 0.00;
	var ClosignDebit3 = 0.00;

	var openingCredit4 = 0.00;
	var openingDebit4 = 0.00;
	var receiptValue4 = 0.00;
	var paymentValue4 = 0.00;
	var closingCredit4 = 0.00;
	var ClosignDebit4 = 0.00;

	var openingCredit5 = 0.00;
	var openingDebit5 = 0.00;
	var receiptValue5 = 0.00;
	var paymentValue5 = 0.00;
	var closingCredit5 = 0.00;
	var ClosignDebit5 = 0.00;
	
	var openingCredit6 = 0.00;
	var openingDebit6 = 0.00;
	var receiptValue6 = 0.00;
	var paymentValue6 = 0.00;
	var closingCredit6 = 0.00;
	var ClosignDebit6 = 0.00;
	
	var openingCredit7 = 0.00;
	var openingDebit7 = 0.00;
	var receiptValue7 = 0.00;
	var paymentValue7 = 0.00;
	var closingCredit7 = 0.00;
	var ClosignDebit7 = 0.00;

	

	$("#TrialBalanceDate").text("Trial Balance From Date " + lastYear + " To "+toDate);

			var a = 0;
			
			var li = 1;
			var as = 1;
			var ex = 1;
			var ic = 1;

	$.ajax({
		url: getContextUrl() + '/finance/TrialBalance',
		method: 'POST', async: true,
		data: {
			branch: branch,
			company: company,
			fromDate: lastYear,
			toDate: toDate,
		},
		success: function(resp) {

			var MainGroupData = resp.CURSOR_DATA_1;
			var SubGroupData = resp.CURSOR_DATA_2;
			var tableData = resp.CURSOR_DATA_3;
//			alert("TrialBalance");
			console.log(JSON.stringify(MainGroupData));
			var balance = [{"BAL_SHEET_TYPE_NAME":"LIABILITY"},{"BAL_SHEET_TYPE_NAME":"ASSET"},
			{"BAL_SHEET_TYPE_NAME":"EXPENSE"},{"BAL_SHEET_TYPE_NAME":"INCOME"}];

//			alert("hii234");
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "LIABILITY")
				{
					
											openingCredit3 = (openingCredit3 + parseFloat(obj2.CROPBAL));
											openingDebit3 = (openingDebit3 + parseFloat(obj2.DROPBAL));
											receiptValue3 = (receiptValue3 + parseFloat(obj2.CRAMT));
											paymentValue3 = (paymentValue3 + parseFloat(obj2.DRAMT));
											closingCredit3 = (closingCredit3 + parseFloat(obj2.CRCLBAL));
											ClosignDebit3 = (ClosignDebit3 + parseFloat(obj2.DRCLBAL));
											
											 $("#libilityTotal1").text(openingCredit3.toFixed(2));
										      $("#libilityTotal2").text(openingDebit3.toFixed(2));
										      $("#libilityTotal3").text(receiptValue3.toFixed(2));
										      $("#libilityTotal4").text(paymentValue3.toFixed(2));
										      $("#libilityTotal5").text(closingCredit3.toFixed(2));
										      $("#libilityTotal6").text(ClosignDebit3.toFixed(2));
					
				}
			
				
			
			
			});
			
//			alert("hii2344566");
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "ASSET")
				{
					
											openingCredit4 = (openingCredit4 + parseFloat(obj2.CROPBAL));
											openingDebit4 = (openingDebit4 + parseFloat(obj2.DROPBAL));
											receiptValue4 = (receiptValue4 + parseFloat(obj2.CRAMT));
											paymentValue4 = (paymentValue4 + parseFloat(obj2.DRAMT));
											closingCredit4 = (closingCredit4 + parseFloat(obj2.CRCLBAL));
											ClosignDebit4 = (ClosignDebit4 + parseFloat(obj2.DRCLBAL));


											$("#AssetTotal1").text(openingCredit4.toFixed(2));
											$("#AssetTotal2").text(openingDebit4.toFixed(2));
											$("#AssetTotal3").text(receiptValue4.toFixed(2));
											$("#AssetTotal4").text(paymentValue4.toFixed(2));
											$("#AssetTotal5").text(closingCredit4.toFixed(2));
											$("#AssetTotal6").text(ClosignDebit4.toFixed(2));
					
				}
			
				
			
			
			});
			
//			alert("E");
			
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "EXPENSE")
				{
					
											openingCredit5 = (openingCredit5 + parseFloat(obj2.CROPBAL));
											openingDebit5 = (openingDebit5 + parseFloat(obj2.DROPBAL));
											receiptValue5 = (receiptValue5 + parseFloat(obj2.CRAMT));
											paymentValue5 = (paymentValue5 + parseFloat(obj2.DRAMT));
											closingCredit5 = (closingCredit5 + parseFloat(obj2.CRCLBAL));
											ClosignDebit5 = (ClosignDebit5 + parseFloat(obj2.DRCLBAL));



											$("#ExpenseTotal1").text(openingCredit5.toFixed(2));
											$("#ExpenseTotal2").text(openingDebit5.toFixed(2));
											$("#ExpenseTotal3").text(receiptValue5.toFixed(2));
											$("#ExpenseTotal4").text(paymentValue5.toFixed(2));
											$("#ExpenseTotal5").text(closingCredit5.toFixed(2));
											$("#ExpenseTotal6").text(ClosignDebit5.toFixed(2));
					
				}
			
				
			
			
			});
					
					
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "INCOME")
				{
					
											openingCredit6 = (openingCredit6 + parseFloat(obj2.CROPBAL));
											openingDebit6 = (openingDebit6 + parseFloat(obj2.DROPBAL));
											receiptValue6 = (receiptValue6 + parseFloat(obj2.CRAMT));
											paymentValue6 = (paymentValue6 + parseFloat(obj2.DRAMT));
											closingCredit6 = (closingCredit6 + parseFloat(obj2.CRCLBAL));
											ClosignDebit6 = (ClosignDebit6 + parseFloat(obj2.DRCLBAL));


											$("#IncomeTotal1").text(openingCredit6.toFixed(2));
											$("#IncomeTotal2").text(openingDebit6.toFixed(2));
											$("#IncomeTotal3").text(receiptValue6.toFixed(2));
											$("#IncomeTotal4").text(paymentValue6.toFixed(2));
											$("#IncomeTotal5").text(closingCredit6.toFixed(2));
											$("#IncomeTotal6").text(ClosignDebit6.toFixed(2));
					
				}
			
				
			
			
			});
			
			$.each(tableData, function(i, obj2) {
			
				
					
										openingCredit7 = (openingCredit7 + parseFloat(obj2.CROPBAL));
										openingDebit7 = (openingDebit7 + parseFloat(obj2.DROPBAL));
										receiptValue7 = (receiptValue7 + parseFloat(obj2.CRAMT));
										paymentValue7 = (paymentValue7 + parseFloat(obj2.DRAMT));
										closingCredit7 = (closingCredit7 + parseFloat(obj2.CRCLBAL));
										ClosignDebit7 = (ClosignDebit7 + parseFloat(obj2.DRCLBAL));


										$(".final_Grand_Total_id1").text(openingCredit7.toFixed(2));
										$(".final_Grand_Total_id2").text(openingDebit7.toFixed(2));
										$(".final_Grand_Total_id3").text(receiptValue7.toFixed(2));
										$(".final_Grand_Total_id4").text(paymentValue7.toFixed(2));
										$(".final_Grand_Total_id5").text(closingCredit7.toFixed(2));
										$(".final_Grand_Total_id6").text(ClosignDebit7.toFixed(2));
					
				
			
				
			
			
			});
			
			
			$.each(MainGroupData, function(i, obj) {
	
		

				if (!("NULL" in obj)) {

					//alert(obj.BAL_SHEET_TYPE_NAME);
					
					

					if (obj.BAL_SHEET_TYPE_NAME == "LIABILITY") {
					
						if (obj.BAL_SHEET_TYPE_NAME == "LIABILITY") {
					
						
						if(li == 1){
						
						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >1</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;font-size:14px;'><span class='center' >"+obj.BAL_SHEET_TYPE_NAME+"</span></td>";



						tr += '</tr>';
						
						}
						
						li = li + 1;
						
						

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td class='font-weight-bold' style='color:green;font:bold;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
						

									var openingCredit2 = 0.00;
									var openingDebit2 = 0.00;
									var receiptValue2 = 0.00;
									var paymentValue2 = 0.00;
									var closingCredit2 = 0.00;
									var ClosignDebit2 = 0.00;
									
										
						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj.BAL_SHEET_TYPE_NAME == "LIABILITY" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td class='font-weight-bold' style='color:blue;font:bold;'><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></td>";



									tr += '</tr>';


									
									var openingCredit = 0.00;
									var openingDebit = 0.00;
									var receiptValue = 0.00;
									var paymentValue = 0.00;
									var closingCredit = 0.00;
									var ClosignDebit = 0.00;


									$.each(tableData, function(i, obj2) {


										



										if (obj1.GROUP_ID == obj2.MAIN_GROUP) {
											if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
												tr += '<tr>';

												tr += "<td style='color:black;font:bold;'><span class='center' >" + (a = a + 1) + "</span></td>";

												tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

												tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";



												if (obj2.CROPBAL == null || obj2.CROPBAL == 0) {
													//					    alert(" opening credit balance : "+obj.CROPBAL)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
												}

												if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
													//					    alert(" opening debit balance : "+obj2.DROPBAL)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
												}

												if (obj2.CRAMT == null || obj2.CRAMT == 0) {
													//					    alert(" opening Receipt balance : "+obj.CRAMT)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
												}

												if (obj2.DRAMT == null || obj2.DRAMT == 0) {
													//					    alert(" opening Payment balance : "+obj.DRAMT)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
												}

												if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
													//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
												}

												if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
													//					    alert(" Closing credit balance : "+obj.DRCLBAL)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
												}


												tr += '</tr>';

												openingCredit = (openingCredit + parseFloat(obj2.CROPBAL));
												openingDebit = (openingDebit + parseFloat(obj2.DROPBAL));
												receiptValue = (receiptValue + parseFloat(obj2.CRAMT));
												paymentValue = (paymentValue + parseFloat(obj2.DRAMT));
												closingCredit = (closingCredit + parseFloat(obj2.CRCLBAL));
												ClosignDebit = (ClosignDebit + parseFloat(obj2.DRCLBAL));
												
												openingCredit2 = (openingCredit2 + parseFloat(obj2.CROPBAL));
											openingDebit2 = (openingDebit2 + parseFloat(obj2.DROPBAL));
											receiptValue2 = (receiptValue2 + parseFloat(obj2.CRAMT));
											paymentValue2 = (paymentValue2 + parseFloat(obj2.DRAMT));
											closingCredit2 = (closingCredit2 + parseFloat(obj2.CRCLBAL));
											ClosignDebit2 = (ClosignDebit2 + parseFloat(obj2.DRCLBAL));
											}

											

										}


										
										//											$("#libilityData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#libilityData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';

						//						$("#libilityData").empty().append(tr);
						}
						
						
						
						
						
					}

					else if (obj.BAL_SHEET_TYPE_NAME == "ASSET") {
					
						if(obj.BAL_SHEET_TYPE_NAME == "ASSET" ){
						
						if(as == 1){
						
						tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Liability Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit3.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						
						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >2</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;font:bold;'><span class='center' >" + obj.BAL_SHEET_TYPE_NAME + "</span></td>";



						tr += '</tr>';
						
						}
						as = as + 1;
						
						
						}

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td class='font-weight-bold' style='color:green;font:bold;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
						var AopeningCredit2 = 0.00;
						var AopeningDebit2 = 0.00;
						var AreceiptValue2 = 0.00;
						var ApaymentValue2 = 0.00;
						var AclosingCredit2 = 0.00;
						var AClosignDebit2 = 0.00;
					
						
						
						
						

						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj.BAL_SHEET_TYPE_NAME == "ASSET" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td class='font-weight-bold' style='color:blue;font:bold;'><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></td>";



									tr += '</tr>';


									var AopeningCredit = 0.00;
									var AopeningDebit = 0.00;
									var AreceiptValue = 0.00;
									var ApaymentValue = 0.00;
									var AclosingCredit = 0.00;
									var AClosignDebit = 0.00;

									$.each(tableData, function(i, obj2) {




										

											if (obj1.GROUP_ID == obj2.MAIN_GROUP) {
												if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
													tr += '<tr>';

													tr += "<td style='color:black;font:bold;'><span class='center' >" + (a = a + 1) + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";



													if (obj2.CROPBAL == null || obj2.CROPBAL == 0) {
														//					    alert(" opening credit balance : "+obj.CROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
														//					    alert(" opening debit balance : "+obj2.DROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.CRAMT == null || obj2.CRAMT == 0) {
														//					    alert(" opening Receipt balance : "+obj.CRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
													}

													if (obj2.DRAMT == null || obj2.DRAMT == 0) {
														//					    alert(" opening Payment balance : "+obj.DRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
													}

													if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
													}

													if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj.DRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
													}


													tr += '</tr>';

													AopeningCredit = (AopeningCredit + parseFloat(obj2.CROPBAL));
													AopeningDebit = (AopeningDebit + parseFloat(obj2.DROPBAL));
													AreceiptValue = (AreceiptValue + parseFloat(obj2.CRAMT));
													ApaymentValue = (ApaymentValue + parseFloat(obj2.DRAMT));
													AclosingCredit = (AclosingCredit + parseFloat(obj2.CRCLBAL));
													AClosignDebit = (AClosignDebit + parseFloat(obj2.DRCLBAL));
													
													
													AopeningCredit2 = (AopeningCredit2 + parseFloat(obj2.CROPBAL));
												AopeningDebit2 = (AopeningDebit2 + parseFloat(obj2.DROPBAL));
												AreceiptValue2 = (AreceiptValue2 + parseFloat(obj2.CRAMT));
												ApaymentValue2 = (ApaymentValue2 + parseFloat(obj2.DRAMT));
												AclosingCredit2 = (AclosingCredit2 + parseFloat(obj2.CRCLBAL));
												AClosignDebit2 = (AClosignDebit2 + parseFloat(obj2.DRCLBAL));
												}

												

											}

											
										//											$("#AssetData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AreceiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ApaymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AclosingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#AssetData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AreceiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ApaymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AclosingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						//						$("#AssetData").empty().append(tr);
					}

					else if (obj.BAL_SHEET_TYPE_NAME == "EXPENSE") {
					
						if(obj.BAL_SHEET_TYPE_NAME == "EXPENSE"){
						
						if(ex == 1){
						
						tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Assets Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit4.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						
							tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >3</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;font:bold;'><span class='center' >" + obj.BAL_SHEET_TYPE_NAME + "</span></td>";



						tr += '</tr>';
						
						}
						ex = ex+1;
						
						
						}

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td class='font-weight-bold' style='color:green;font:bold;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
							var EopeningCredit2 = 0.00;
							var EopeningDebit2 = 0.00;
							var EreceiptValue2 = 0.00;
							var EpaymentValue2 = 0.00;
							var EclosingCredit2 = 0.00;
							var EClosignDebit2 = 0.00;
						
							
							
							

						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj.BAL_SHEET_TYPE_NAME == "EXPENSE" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td class='font-weight-bold' style='color:blue;font:bold;'><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></td>";



									tr += '</tr>';

									var EopeningCredit = 0.00;
							var EopeningDebit = 0.00;
							var EreceiptValue = 0.00;
							var EpaymentValue = 0.00;
							var EclosingCredit = 0.00;
							var EClosignDebit = 0.00;


									$.each(tableData, function(i, obj2) {




										

											if (obj1.GROUP_ID == obj2.MAIN_GROUP) {
												if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
													tr += '<tr>';

													tr += "<td style='color:black;font:bold;'><span class='center' >" + (a = a + 1) + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";



													if (obj2.CROPBAL == null || obj2.CROPBAL == 0) {
														//					    alert(" opening credit balance : "+obj.CROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
														//					    alert(" opening debit balance : "+obj2.DROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.CRAMT == null || obj2.CRAMT == 0) {
														//					    alert(" opening Receipt balance : "+obj.CRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
													}

													if (obj2.DRAMT == null || obj2.DRAMT == 0) {
														//					    alert(" opening Payment balance : "+obj.DRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
													}

													if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
													}

													if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj.DRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
													}


													tr += '</tr>';

													EopeningCredit = (EopeningCredit + parseFloat(obj2.CROPBAL));
													EopeningDebit = (EopeningDebit + parseFloat(obj2.DROPBAL));
													EreceiptValue = (EreceiptValue + parseFloat(obj2.CRAMT));
													EpaymentValue = (EpaymentValue + parseFloat(obj2.DRAMT));
													EclosingCredit = (EclosingCredit + parseFloat(obj2.CRCLBAL));
													EClosignDebit = (EClosignDebit + parseFloat(obj2.DRCLBAL));
													
													EopeningCredit2 = (EopeningCredit2 + parseFloat(obj2.CROPBAL));
												EopeningDebit2 = (EopeningDebit2 + parseFloat(obj2.DROPBAL));
												EreceiptValue2 = (EreceiptValue2 + parseFloat(obj2.CRAMT));
												EpaymentValue2 = (EpaymentValue2 + parseFloat(obj2.DRAMT));
												EclosingCredit2 = (EclosingCredit2 + parseFloat(obj2.CRCLBAL));
												EClosignDebit2 = (EClosignDebit2 + parseFloat(obj2.DRCLBAL));
												}

												

											}


											
										//											$("#ExpenseData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EreceiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EpaymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EclosingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#ExpenseData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EreceiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EpaymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EclosingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						//						$("#ExpenseData").empty().append(tr);
					}

					else if (obj.BAL_SHEET_TYPE_NAME == "INCOME") {
					
						if(obj.BAL_SHEET_TYPE_NAME == "INCOME"){
						
						if(ic == 1){
						
						tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Expense Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit5.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						
							tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >4</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;font:bold;'><span class='center' >" + obj.BAL_SHEET_TYPE_NAME + "</span></td>";



						tr += '</tr>';
						
						}
						ic = ic + 1;
						
						
						}

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td class='font-weight-bold' style='color:green;font:bold;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
						var IopeningCredit2 = 0.00;
						var IopeningDebit2 = 0.00;
						var IreceiptValue2 = 0.00;
						var IpaymentValue2 = 0.00;
						var IclosingCredit2 = 0.00;
						var IClosignDebit2 = 0.00;
					
						
						
						

						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj.BAL_SHEET_TYPE_NAME == "INCOME" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td class='font-weight-bold' style='color:blue;font:bold;'><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></td>";



									tr += '</tr>';


									var IopeningCredit = 0.00;
						var IopeningDebit = 0.00;
						var IreceiptValue = 0.00;
						var IpaymentValue = 0.00;
						var IclosingCredit = 0.00;
						var IClosignDebit = 0.00;

									$.each(tableData, function(i, obj2) {




										

											if (obj1.GROUP_ID == obj2.MAIN_GROUP) {
												if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
													tr += '<tr>';

													tr += "<td style='color:black;font:bold;'><span class='center' >" + (a = a + 1) + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";



													if (obj2.CROPBAL == null || obj2.CROPBAL == 0) {
														//					    alert(" opening credit balance : "+obj.CROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
														//					    alert(" opening debit balance : "+obj2.DROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.CRAMT == null || obj2.CRAMT == 0) {
														//					    alert(" opening Receipt balance : "+obj.CRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
													}

													if (obj2.DRAMT == null || obj2.DRAMT == 0) {
														//					    alert(" opening Payment balance : "+obj.DRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
													}

													if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
													}

													if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj.DRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
													}


													tr += '</tr>';

													IopeningCredit = (IopeningCredit + parseFloat(obj2.CROPBAL));
													IopeningDebit = (IopeningDebit + parseFloat(obj2.DROPBAL));
													IreceiptValue = (IreceiptValue + parseFloat(obj2.CRAMT));
													IpaymentValue = (IpaymentValue + parseFloat(obj2.DRAMT));
													IclosingCredit = (IclosingCredit + parseFloat(obj2.CRCLBAL));
													IClosignDebit = (IClosignDebit + parseFloat(obj2.DRCLBAL));
													
													IopeningCredit2 = (IopeningCredit2 + parseFloat(obj2.CROPBAL));
												IopeningDebit2 = (IopeningDebit2 + parseFloat(obj2.DROPBAL));
												IreceiptValue2 = (IreceiptValue2 + parseFloat(obj2.CRAMT));
												IpaymentValue2 = (IpaymentValue2 + parseFloat(obj2.DRAMT));
												IclosingCredit2 = (IclosingCredit2 + parseFloat(obj2.CRCLBAL));
												IClosignDebit2 = (IClosignDebit2 + parseFloat(obj2.DRCLBAL));
												}

												

											}


											
										//											$("#IncomeData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IreceiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IpaymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IclosingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#IncomeData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IreceiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IpaymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IclosingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						
					}
					
					

				
					
				$("#TrialBalanceTable tbody").empty().append(tr);
				}
				

				
			

			});
			
			
			










		}
	});


}




function dateWiseTrialBalance() {
//alert("G");

if ($("#frmDate12").val() !== ""
					&& $("#toDailyDate12").val() !== "") {
					
	$("#TrialBalanceTable tbody").empty();
	// alert("ala re resp Trial Balance");
	var company = $("#company").val();
	var branch = $("#branch").val();



	var tr = "";
	
	
	var rowdata = [];
	
	var lastYear = $("#frmDate12").val();
	var toDate = $("#toDailyDate12").val();
	
	let fromDateForRef=$("#frmDate12").val();
	let toDateForRef=$("#toDailyDate12").val();

	let properFromDate = fromDateForRef.split("/").reverse().join("-");
	console.log("properFromDate ========>>>>>>> "+properFromDate);
	console.log("new Date(properFromDate).getTime() ========>>>>>>> "+new Date(properFromDate).getTime());

	let properToDate = toDateForRef.split("/").reverse().join("-");
	console.log("properToDate ========>>>>>>> "+properToDate);
	console.log("new Date(properToDate).getTime() ========>>>>>>> "+new Date(properToDate).getTime());

	let TodayDate = new Date();
	console.log("Today wali Date ========>>>>>>> "+TodayDate);
	console.log("new Date(TodayDate).getTime() ========>>>>>>> "+new Date(TodayDate).getTime());
	
	
	if (new Date(properToDate).getTime() < new Date(properFromDate).getTime()) {
	
	swal({
			title: "Warning",
			text: "From Date Field Need To Equal Or Less Than To Date Field",
			icon: "info",
			button: "Ok",
		});
		$("#IncomeTotal1").text(0.00);
											$("#IncomeTotal2").text(0.00);
											$("#IncomeTotal3").text(0.00);
											$("#IncomeTotal4").text(0.00);
											$("#IncomeTotal5").text(0.00);
											$("#IncomeTotal6").text(0.00);
											
		$(".final_Grand_Total_id1").text(0.00);
										$(".final_Grand_Total_id2").text(0.00);
										$(".final_Grand_Total_id3").text(0.00);
										$(".final_Grand_Total_id4").text(0.00);
										$(".final_Grand_Total_id5").text(0.00);
										$(".final_Grand_Total_id6").text(0.00);
		return false;
//		$("#TrialBalanceTable tbody").empty().append("<tr><th colspan='9' style='text-align: center;'>No Data Found For Trial Balance  Report</th></tr>");
	
	
	} 	
	
	if($("#frmDate12").val() !== "" && new Date(properFromDate).getTime() > new Date(TodayDate).getTime()){
		swal({
			title: "Warning",
			text: "From Date Field Need To Equal Or Less Than Today's Date",
			icon: "info",
			button: "Ok",
		});
		
		$("#IncomeTotal1").text(0.00);
											$("#IncomeTotal2").text(0.00);
											$("#IncomeTotal3").text(0.00);
											$("#IncomeTotal4").text(0.00);
											$("#IncomeTotal5").text(0.00);
											$("#IncomeTotal6").text(0.00);
											
		$(".final_Grand_Total_id1").text(0.00);
										$(".final_Grand_Total_id2").text(0.00);
										$(".final_Grand_Total_id3").text(0.00);
										$(".final_Grand_Total_id4").text(0.00);
										$(".final_Grand_Total_id5").text(0.00);
										$(".final_Grand_Total_id6").text(0.00);
		return false;
		
}

if($("#toDailyDate12").val() !== "" && new Date(properToDate).getTime() > new Date(TodayDate).getTime()){
		swal({
			title: "Warning",
			text: "To Date Field Need To Equal Or Less Than Today's Date",
			icon: "info",
			button: "Ok",
		});
		
		$("#IncomeTotal1").text(0.00);
											$("#IncomeTotal2").text(0.00);
											$("#IncomeTotal3").text(0.00);
											$("#IncomeTotal4").text(0.00);
											$("#IncomeTotal5").text(0.00);
											$("#IncomeTotal6").text(0.00);
											
		$(".final_Grand_Total_id1").text(0.00);
										$(".final_Grand_Total_id2").text(0.00);
										$(".final_Grand_Total_id3").text(0.00);
										$(".final_Grand_Total_id4").text(0.00);
										$(".final_Grand_Total_id5").text(0.00);
										$(".final_Grand_Total_id6").text(0.00);
		return false;
		
}




	var openingCredit3 = 0.00;
	var openingDebit3 = 0.00;
	var receiptValue3 = 0.00;
	var paymentValue3 = 0.00;
	var closingCredit3 = 0.00;
	var ClosignDebit3 = 0.00;

	var openingCredit4 = 0.00;
	var openingDebit4 = 0.00;
	var receiptValue4 = 0.00;
	var paymentValue4 = 0.00;
	var closingCredit4 = 0.00;
	var ClosignDebit4 = 0.00;

	var openingCredit5 = 0.00;
	var openingDebit5 = 0.00;
	var receiptValue5 = 0.00;
	var paymentValue5 = 0.00;
	var closingCredit5 = 0.00;
	var ClosignDebit5 = 0.00;
	
	var openingCredit6 = 0.00;
	var openingDebit6 = 0.00;
	var receiptValue6 = 0.00;
	var paymentValue6 = 0.00;
	var closingCredit6 = 0.00;
	var ClosignDebit6 = 0.00;
	
	var openingCredit7 = 0.00;
	var openingDebit7 = 0.00;
	var receiptValue7 = 0.00;
	var paymentValue7 = 0.00;
	var closingCredit7 = 0.00;
	var ClosignDebit7 = 0.00;

	

	$("#TrialBalanceDate").text("Trial Balance From Date " + lastYear + " To "+toDate);



	$.ajax({
		url: getContextUrl() + '/finance/TrialBalance',
		method: 'POST', async: true,
		data: {
			branch: branch,
			company: company,
			fromDate: lastYear,
			toDate: toDate,
		},
		success: function(resp) {

			var MainGroupData = resp.CURSOR_DATA_1;
			var SubGroupData = resp.CURSOR_DATA_2;
			var tableData = resp.CURSOR_DATA_3;

			console.log(JSON.stringify(resp));

			
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "LIABILITY")
				{
					
					
											openingCredit3 = (openingCredit3 + parseFloat(obj2.CROPBAL));
											openingDebit3 = (openingDebit3 + parseFloat(obj2.DROPBAL));
											receiptValue3 = (receiptValue3 + parseFloat(obj2.CRAMT));
											paymentValue3 = (paymentValue3 + parseFloat(obj2.DRAMT));
											closingCredit3 = (closingCredit3 + parseFloat(obj2.CRCLBAL));
											ClosignDebit3 = (ClosignDebit3 + parseFloat(obj2.DRCLBAL));
											
											 $("#libilityTotal1").text(openingCredit3.toFixed(2));
										      $("#libilityTotal2").text(openingDebit3.toFixed(2));
										      $("#libilityTotal3").text(receiptValue3.toFixed(2));
										      $("#libilityTotal4").text(paymentValue3.toFixed(2));
										      $("#libilityTotal5").text(closingCredit3.toFixed(2));
										      $("#libilityTotal6").text(ClosignDebit3.toFixed(2));
					
				}
			
				
			
			
			});
			
			
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "ASSET")
				{
											
											openingCredit4 = (openingCredit4 + parseFloat(obj2.CROPBAL));
											openingDebit4 = (openingDebit4 + parseFloat(obj2.DROPBAL));
											receiptValue4 = (receiptValue4 + parseFloat(obj2.CRAMT));
											paymentValue4 = (paymentValue4 + parseFloat(obj2.DRAMT));
											closingCredit4 = (closingCredit4 + parseFloat(obj2.CRCLBAL));
											ClosignDebit4 = (ClosignDebit4 + parseFloat(obj2.DRCLBAL));


											$("#AssetTotal1").text(openingCredit4.toFixed(2));
//											alert("Total : "+openingCredit4.toFixed(2));
											$("#AssetTotal2").text(openingDebit4.toFixed(2));
											$("#AssetTotal3").text(receiptValue4.toFixed(2));
											$("#AssetTotal4").text(paymentValue4.toFixed(2));
											$("#AssetTotal5").text(closingCredit4.toFixed(2));
											$("#AssetTotal6").text(ClosignDebit4.toFixed(2));
					
				}
			
				
			
			
			});
			
			
			
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "EXPENSE")
				{
					
											openingCredit5 = (openingCredit5 + parseFloat(obj2.CROPBAL));
											openingDebit5 = (openingDebit5 + parseFloat(obj2.DROPBAL));
											receiptValue5 = (receiptValue5 + parseFloat(obj2.CRAMT));
											paymentValue5 = (paymentValue5 + parseFloat(obj2.DRAMT));
											closingCredit5 = (closingCredit5 + parseFloat(obj2.CRCLBAL));
											ClosignDebit5 = (ClosignDebit5 + parseFloat(obj2.DRCLBAL));



											$("#ExpenseTotal1").text(openingCredit5.toFixed(2));
											$("#ExpenseTotal2").text(openingDebit5.toFixed(2));
											$("#ExpenseTotal3").text(receiptValue5.toFixed(2));
											$("#ExpenseTotal4").text(paymentValue5.toFixed(2));
											$("#ExpenseTotal5").text(closingCredit5.toFixed(2));
											$("#ExpenseTotal6").text(ClosignDebit5.toFixed(2));
					
				}
			
				
			
			
			});
					
					
			$.each(tableData, function(i, obj2) {
			
				if(obj2.BAL_SHEET_TYPE_NAME == "INCOME")
				{
					
											openingCredit6 = (openingCredit6 + parseFloat(obj2.CROPBAL));
											openingDebit6 = (openingDebit6 + parseFloat(obj2.DROPBAL));
											receiptValue6 = (receiptValue6 + parseFloat(obj2.CRAMT));
											paymentValue6 = (paymentValue6 + parseFloat(obj2.DRAMT));
											closingCredit6 = (closingCredit6 + parseFloat(obj2.CRCLBAL));
											ClosignDebit6 = (ClosignDebit6 + parseFloat(obj2.DRCLBAL));


											$("#IncomeTotal1").text(openingCredit6.toFixed(2));
											$("#IncomeTotal2").text(openingDebit6.toFixed(2));
											$("#IncomeTotal3").text(receiptValue6.toFixed(2));
											$("#IncomeTotal4").text(paymentValue6.toFixed(2));
											$("#IncomeTotal5").text(closingCredit6.toFixed(2));
											$("#IncomeTotal6").text(ClosignDebit6.toFixed(2));
					
				}
			
				
			
			
			});
			
			$.each(tableData, function(i, obj2) {
				
				if(obj2.BAL_SHEET_TYPE_NAME == "LIABILITY" || obj2.BAL_SHEET_TYPE_NAME == "ASSET" || obj2.BAL_SHEET_TYPE_NAME == "EXPENSE" || obj2.BAL_SHEET_TYPE_NAME == "INCOME"){
										
//										console.log(JSON.stringify(tableData));
										openingCredit7 = (openingCredit7 + parseFloat(obj2.CROPBAL));
										openingDebit7 = (openingDebit7 + parseFloat(obj2.DROPBAL));
										receiptValue7 = (receiptValue7 + parseFloat(obj2.CRAMT));
										paymentValue7 = (paymentValue7 + parseFloat(obj2.DRAMT));
										closingCredit7 = (closingCredit7 + parseFloat(obj2.CRCLBAL));
										ClosignDebit7 = (ClosignDebit7 + parseFloat(obj2.DRCLBAL));


										$(".final_Grand_Total_id1").text(openingCredit7.toFixed(2));
										$(".final_Grand_Total_id2").text(openingDebit7.toFixed(2));
										$(".final_Grand_Total_id3").text(receiptValue7.toFixed(2));
										$(".final_Grand_Total_id4").text(paymentValue7.toFixed(2));
										$(".final_Grand_Total_id5").text(closingCredit7.toFixed(2));
										$(".final_Grand_Total_id6").text(ClosignDebit7.toFixed(2));
					
				
			
				}
			
			
			});
			
			var a = 0;
			
			var li = 1;
			var as = 1;
			var ex = 1;
			var ic = 1;
				
//				alert("hIII");
var balance = [{"BAL_SHEET_TYPE_NAME":"LIABILITY"},{"BAL_SHEET_TYPE_NAME":"ASSET"},
			{"BAL_SHEET_TYPE_NAME":"EXPENSE"},{"BAL_SHEET_TYPE_NAME":"INCOME"}];
			
			$.each(balance, function(i,value){
			
			if(value.BAL_SHEET_TYPE_NAME == "LIABILITY"){
			
			$.each(MainGroupData, function(i, obj) {
	
//				alert("AL");	
				
				if (!("NULL" in obj)) {

				
					
					

					if (obj.BAL_SHEET_TYPE_NAME == "LIABILITY") {
					
					
						if(obj.BAL_SHEET_TYPE_NAME == "LIABILITY"){
						
						if(li == 1){
						
						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >1</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;'><span class='center' >"+obj.BAL_SHEET_TYPE_NAME+"</span></td>";



						tr += '</tr>';
						
						}
						
						li = li + 1;
						
						
						}
						
						

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td class='font-weight-bold' style='color:green;font:bold;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
						

									var openingCredit2 = 0.00;
									var openingDebit2 = 0.00;
									var receiptValue2 = 0.00;
									var paymentValue2 = 0.00;
									var closingCredit2 = 0.00;
									var ClosignDebit2 = 0.00;
									
										
						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj.BAL_SHEET_TYPE_NAME == "LIABILITY" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></b></td>";



									tr += '</tr>';


									var openingCredit = 0.00;
									var openingDebit = 0.00;
									var receiptValue = 0.00;
									var paymentValue = 0.00;
									var closingCredit = 0.00;
									var ClosignDebit = 0.00;



									$.each(tableData, function(i, obj2) {


										

//										if(obj.BAL_SHEET_TYPE_NAME == "LIABILITY"){
											
//											alert(" Hi baddy");
											
											if(obj1.GROUP_ID == obj2.MAIN_GROUP){
										
											if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
												tr += '<tr>';

												tr += "<td style='color:black;font:bold;'><span class='center' >" + (a = a+1) + "</span></td>";

												tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

												tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";


//												 alert(" opening credit balance : "+obj.GLNM);
												if (obj2.CROPBAL == 0) {
																		   
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
												}

												if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
													//					    alert(" opening debit balance : "+obj2.DROPBAL)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
												}

												if (obj2.CRAMT == null || obj2.CRAMT == 0) {
													//					    alert(" opening Receipt balance : "+obj.CRAMT)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
												}

												if (obj2.DRAMT == null || obj2.DRAMT == 0) {
//																		    alert(" opening Payment balance : "+obj.DRAMT)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
												}

												if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
													//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
												}

												if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
													//					    alert(" Closing credit balance : "+obj.DRCLBAL)
													tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
												} else {
													tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
												}


												tr += '</tr>';

												openingCredit = (openingCredit + parseFloat(obj2.CROPBAL));
												openingDebit = (openingDebit + parseFloat(obj2.DROPBAL));
												receiptValue = (receiptValue + parseFloat(obj2.CRAMT));
												paymentValue = (paymentValue + parseFloat(obj2.DRAMT));
												closingCredit = (closingCredit + parseFloat(obj2.CRCLBAL));
												ClosignDebit = (ClosignDebit + parseFloat(obj2.DRCLBAL));
												
												openingCredit2 = (openingCredit2 + parseFloat(obj2.CROPBAL));
											openingDebit2 = (openingDebit2 + parseFloat(obj2.DROPBAL));
											receiptValue2 = (receiptValue2 + parseFloat(obj2.CRAMT));
											paymentValue2 = (paymentValue2 + parseFloat(obj2.DRAMT));
											closingCredit2 = (closingCredit2 + parseFloat(obj2.CRCLBAL));
											ClosignDebit2 = (ClosignDebit2 + parseFloat(obj2.DRCLBAL));
//											}


											
										}
										
										}
										


										
										//											$("#libilityData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#libilityData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';

						//						$("#libilityData").empty().append(tr);
						
						
						
						
						
					}
				}
				
				});
				tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Liability Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit3.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit3.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
				
			} else if (value.BAL_SHEET_TYPE_NAME == "ASSET"){
			
			$.each(MainGroupData, function(i, obj) {
	
//				alert("AL");	
				
				if (!("NULL" in obj)) {
				

					if (obj.BAL_SHEET_TYPE_NAME == "ASSET") {
					
						if(obj.BAL_SHEET_TYPE_NAME == "ASSET"){
						
						if(as == 1){
						
//						alert("HEHEHEH");
						
						/*tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><b><span class="pull-right">Total :</span></b></td>';
									tr += '<td class=""><b><span class="pull-right">' + openingCredit3.toFixed(2) + '</span></b></td>';
									tr += '<td class=""><b><span class="pull-right">' + openingDebit3.toFixed(2) + '</span></b></td>';
									tr += '<td class=""><b><span class="pull-right">' + receiptValue3.toFixed(2) + '</span></b></td>';
									tr += '<td class=""><b><span class="pull-right">' + paymentValue3.toFixed(2) + '</span></b></td>';
									tr += '<td class=""><b><span class="pull-right">' + closingCredit3.toFixed(2) + '</span></b></td>';
									tr += '<td class=""><b><span class="pull-right">' + ClosignDebit3.toFixed(2) + '</span></b></td>';


						tr += '</tr>';*/
						
						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >2</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;font:bold;'><span class='center' >" + obj.BAL_SHEET_TYPE_NAME + "</span></td>";



						tr += '</tr>';
						
						
						}
						as = as + 1;
						
						
						}

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td class='font-weight-bold' style='color:black;font:bold;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
						var AopeningCredit2 = 0.00;
						var AopeningDebit2 = 0.00;
						var AreceiptValue2 = 0.00;
						var ApaymentValue2 = 0.00;
						var AclosingCredit2 = 0.00;
						var AClosignDebit2 = 0.00;
					
						
						
						
						

						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj.BAL_SHEET_TYPE_NAME == "ASSET" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td class='font-weight-bold' style='color:blue;font:bold;'><b><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></b></td>";



									tr += '</tr>';

									
									var AopeningCredit = 0.00;
						var AopeningDebit = 0.00;
						var AreceiptValue = 0.00;
						var ApaymentValue = 0.00;
						var AclosingCredit = 0.00;
						var AClosignDebit = 0.00;


									$.each(tableData, function(i, obj2) {




										

											if (obj1.GROUP_ID == obj2.MAIN_GROUP) {
												if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
													tr += '<tr>';

													tr += "<td style='color:black;font:bold;'><span class='center' >" + (a = a+1) + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";



													if (obj2.CROPBAL == null || obj2.CROPBAL == 0) {
														//					    alert(" opening credit balance : "+obj.CROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
														//					    alert(" opening debit balance : "+obj2.DROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.CRAMT == null || obj2.CRAMT == 0) {
														//					    alert(" opening Receipt balance : "+obj.CRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
													}

													if (obj2.DRAMT == null || obj2.DRAMT == 0) {
														//					    alert(" opening Payment balance : "+obj.DRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
													}

													if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
													}

													if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj.DRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
													}


													tr += '</tr>';

													AopeningCredit = (AopeningCredit + parseFloat(obj2.CROPBAL));
													AopeningDebit = (AopeningDebit + parseFloat(obj2.DROPBAL));
													AreceiptValue = (AreceiptValue + parseFloat(obj2.CRAMT));
													ApaymentValue = (ApaymentValue + parseFloat(obj2.DRAMT));
													AclosingCredit = (AclosingCredit + parseFloat(obj2.CRCLBAL));
													AClosignDebit = (AClosignDebit + parseFloat(obj2.DRCLBAL));
													
													AopeningCredit2 = (AopeningCredit2 + parseFloat(obj2.CROPBAL));
												AopeningDebit2 = (AopeningDebit2 + parseFloat(obj2.DROPBAL));
												AreceiptValue2 = (AreceiptValue2 + parseFloat(obj2.CRAMT));
												ApaymentValue2 = (ApaymentValue2 + parseFloat(obj2.DRAMT));
												AclosingCredit2 = (AclosingCredit2 + parseFloat(obj2.CRCLBAL));
												AClosignDebit2 = (AClosignDebit2 + parseFloat(obj2.DRCLBAL));
												}

												

											}

											
										//											$("#AssetData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AreceiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ApaymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AclosingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#AssetData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AopeningDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AreceiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ApaymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AclosingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + AClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						//						$("#AssetData").empty().append(tr);
					}
					
					}
					
				});
				
					tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Assets Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit4.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
				
				}	else if (value.BAL_SHEET_TYPE_NAME == "EXPENSE"){
			
			$.each(MainGroupData, function(i, obj) {
	
//				alert("AL");	
				
				if (!("NULL" in obj)) {

				if (obj.BAL_SHEET_TYPE_NAME == "EXPENSE") {
					
						if(obj.BAL_SHEET_TYPE_NAME == "EXPENSE"){
						
						
						if(ex == 1){
						
						
						
						
						/*tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit4.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit4.toFixed(2) + '</span></b></td>';


						tr += '</tr>';*/
						
							tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >3</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;font:bold;'><span class='center' >" + obj.BAL_SHEET_TYPE_NAME + "</span></td>";



						tr += '</tr>';
						
						}
						ex = ex + 1 ;
						
						
						}

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td class='font-weight-bold' style='color:green;font:bold;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
							var EopeningCredit2 = 0.00;
							var EopeningDebit2 = 0.00;
							var EreceiptValue2 = 0.00;
							var EpaymentValue2 = 0.00;
							var EclosingCredit2 = 0.00;
							var EClosignDebit2 = 0.00;
						
							
							
							

						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj.BAL_SHEET_TYPE_NAME == "EXPENSE" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td class='font-weight-bold' style='color:blue;font:bold;'><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></td>";



									tr += '</tr>';


									var EopeningCredit = 0.00;
							var EopeningDebit = 0.00;
							var EreceiptValue = 0.00;
							var EpaymentValue = 0.00;
							var EclosingCredit = 0.00;
							var EClosignDebit = 0.00;

									$.each(tableData, function(i, obj2) {




										

											if (obj1.GROUP_ID == obj2.MAIN_GROUP) {
												if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
													tr += '<tr>';

													tr += "<td style='color:black;font:bold;'><span class='center' >" + (a=a+1) + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";



													if (obj2.CROPBAL == null || obj2.CROPBAL == 0) {
														//					    alert(" opening credit balance : "+obj.CROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
														//					    alert(" opening debit balance : "+obj2.DROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.CRAMT == null || obj2.CRAMT == 0) {
														//					    alert(" opening Receipt balance : "+obj.CRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
													}

													if (obj2.DRAMT == null || obj2.DRAMT == 0) {
														//					    alert(" opening Payment balance : "+obj.DRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
													}

													if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
													}

													if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj.DRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
													}


													tr += '</tr>';

													EopeningCredit = (EopeningCredit + parseFloat(obj2.CROPBAL));
													EopeningDebit = (EopeningDebit + parseFloat(obj2.DROPBAL));
													EreceiptValue = (EreceiptValue + parseFloat(obj2.CRAMT));
													EpaymentValue = (EpaymentValue + parseFloat(obj2.DRAMT));
													EclosingCredit = (EclosingCredit + parseFloat(obj2.CRCLBAL));
													EClosignDebit = (EClosignDebit + parseFloat(obj2.DRCLBAL));
													
													EopeningCredit2 = (EopeningCredit2 + parseFloat(obj2.CROPBAL));
												EopeningDebit2 = (EopeningDebit2 + parseFloat(obj2.DROPBAL));
												EreceiptValue2 = (EreceiptValue2 + parseFloat(obj2.CRAMT));
												EpaymentValue2 = (EpaymentValue2 + parseFloat(obj2.DRAMT));
												EclosingCredit2 = (EclosingCredit2 + parseFloat(obj2.CRCLBAL));
												EClosignDebit2 = (EClosignDebit2 + parseFloat(obj2.DRCLBAL));
												}

												

											}


											
										//											$("#ExpenseData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EreceiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EpaymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EclosingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#ExpenseData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EopeningDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EreceiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EpaymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EclosingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + EClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						//						$("#ExpenseData").empty().append(tr);
					}
					
					}
					
				});
				tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Expense Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit5.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
				}
				else if (value.BAL_SHEET_TYPE_NAME == "INCOME"){
			
			$.each(MainGroupData, function(i, obj) {
	
//				alert("AL");	
				
				if (!("NULL" in obj)) {

					 if (obj.BAL_SHEET_TYPE_NAME == "INCOME") {
					 
					
					
						if(obj.BAL_SHEET_TYPE_NAME == "INCOME" ){
						
						if(ic == 1){
						
						
						
						/*tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit5.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit5.toFixed(2) + '</span></b></td>';


						tr += '</tr>';*/
						
						
							tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' >4</span></b></td>";

						tr += "<td class='font-weight-bold' style='color:red;'><span class='center' >" + obj.BAL_SHEET_TYPE_NAME + "</span></td>";



						tr += '</tr>';
						
						}
						ic = ic + 1;
						
						
						}

						tr += '<tr>'

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

						tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";
//						alert("Income Main Group Name : "+obj.GROUP_NAME);
						tr += "<td class='font-weight-bold' style='color:green;'><span class='center' >" + obj.GROUP_NAME + "</span></td>";



						tr += '</tr>';
						
						var IopeningCredit2 = 0.00;
						var IopeningDebit2 = 0.00;
						var IreceiptValue2 = 0.00;
						var IpaymentValue2 = 0.00;
						var IclosingCredit2 = 0.00;
						var IClosignDebit2 = 0.00;
					
						
						
						

						$.each(SubGroupData, function(i, obj1) {


							if (!("NULL" in obj1)) {

								if (obj1.BAL_SHEET_TYPE_NAME == "INCOME" && obj.GROUP_ID == obj1.GROUP_ID) {

									tr += '<tr>'

									tr += "<td style='color:black;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td style='color:blue;font:bold;'><b><span class='center' ></span></b></td>";

									tr += "<td class='font-weight-bold' style='color:blue;'><span class='center' >" + obj1.SUB_GROUP_NAME + "</span></td>";



									tr += '</tr>';


									var IopeningCredit = 0.00;
						var IopeningDebit = 0.00;
						var IreceiptValue = 0.00;
						var IpaymentValue = 0.00;
						var IclosingCredit = 0.00;
						var IClosignDebit = 0.00;

									$.each(tableData, function(i, obj2) {



//											if (obj1.GROUP_ID == obj2.MAIN_GROUP) {
												if (obj1.GROUP_ID == obj2.MAIN_GROUP && obj1.SUB_GROUP_ID == obj2.SUB_GROUP) {
													tr += '<tr>';

													tr += "<td style='color:black;font:bold;'><span class='center' >" + (a=a + 1) + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.CODE + "</span></td>";

													tr += "<td style='color:black;font:bold;'><span class='center' >" + obj2.GLNM + "</span></td>";



													if (obj2.CROPBAL == null || obj2.CROPBAL == 0) {
														//					    alert(" opening credit balance : "+obj.CROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.DROPBAL == null || obj2.DROPBAL == 0) {
														//					    alert(" opening debit balance : "+obj2.DROPBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DROPBAL).toFixed(2) + '</td>';
													}

													if (obj2.CRAMT == null || obj2.CRAMT == 0) {
														//					    alert(" opening Receipt balance : "+obj.CRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRAMT).toFixed(2) + '</td>';
													}

													if (obj2.DRAMT == null || obj2.DRAMT == 0) {
														//					    alert(" opening Payment balance : "+obj.DRAMT)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRAMT).toFixed(2) + '</td>';
													}

													if (obj2.CRCLBAL == null || obj2.CRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj2.CRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.CRCLBAL).toFixed(2) + '</td>';
													}

													if (obj2.DRCLBAL == null || obj2.DRCLBAL == 0) {
														//					    alert(" Closing credit balance : "+obj.DRCLBAL)
														tr += '<td class=""><span class="pull-right">' + "0.00" + '</td>';
													} else {
														tr += '<td class=""><span class="pull-right">' + parseFloat(obj2.DRCLBAL).toFixed(2) + '</td>';
													}


													tr += '</tr>';

													IopeningCredit = (IopeningCredit + parseFloat(obj2.CROPBAL));
													IopeningDebit = (IopeningDebit + parseFloat(obj2.DROPBAL));
													IreceiptValue = (IreceiptValue + parseFloat(obj2.CRAMT));
													IpaymentValue = (IpaymentValue + parseFloat(obj2.DRAMT));
													IclosingCredit = (IclosingCredit + parseFloat(obj2.CRCLBAL));
													IClosignDebit = (IClosignDebit + parseFloat(obj2.DRCLBAL));
													
													IopeningCredit2 = (IopeningCredit2 + parseFloat(obj2.CROPBAL));
												IopeningDebit2 = (IopeningDebit2 + parseFloat(obj2.DROPBAL));
												IreceiptValue2 = (IreceiptValue2 + parseFloat(obj2.CRAMT));
												IpaymentValue2 = (IpaymentValue2 + parseFloat(obj2.DRAMT));
												IclosingCredit2 = (IclosingCredit2 + parseFloat(obj2.CRCLBAL));
												IClosignDebit2 = (IClosignDebit2 + parseFloat(obj2.DRCLBAL));
												}

												

//											}


											
										//											$("#IncomeData").empty().append(tr);




									});


									tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">Sub Group Wise Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningDebit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IreceiptValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IpaymentValue.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IclosingCredit.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IClosignDebit.toFixed(2) + '</span></b></td>';


									tr += '</tr>';


								}
								//								$("#IncomeData").empty().append(tr);

							}


						});



						tr += '<tr>';

						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class=""><span class="pull-right"></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">Main Group Wise Total :</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IopeningDebit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IreceiptValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IpaymentValue2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IclosingCredit2.toFixed(2) + '</span></b></td>';
						tr += '<td class="" style="color:black;"><b><span class="pull-right">' + IClosignDebit2.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
						
					}
					
					}
					
					});
					tr += '<tr>';

									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class=""><span class="pull-right"></td>';
									tr += '<td class="" style="color:red;"><b><span class="pull-right">Income Total :</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingCredit6.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + openingDebit6.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + receiptValue6.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + paymentValue6.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + closingCredit6.toFixed(2) + '</span></b></td>';
									tr += '<td class="" style="color:black;"><b><span class="pull-right">' + ClosignDebit6.toFixed(2) + '</span></b></td>';


						tr += '</tr>';
					
					}
					
					
				
//				
		
			});
			$("#TrialBalanceTable tbody").empty().append(tr);
			
			
			




			//			************** Asset*******************






		}
	});

	}
}


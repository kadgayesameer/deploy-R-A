// Date Book Code Here
function getDayBookData() {
    //	alert("Allo re Day book");
    var company = $("#company").val();
    var branch = $("#branch").val();

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var currentYear = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + currentYear;




    //Set previous year last date and current date as depend on login year
    var finYear = $("#loginFinYearId").val();

    var sessionYear = finYear.slice(0, 4);
    var sessionlastYear = finYear.slice(4);
    //alert(sessionlastYear);

    if (mm == 1 || mm == 2 || mm == 3) {
		
        $("#DBvoucherTypeDate").val(onDate);
        var onDate = today;

    } else {

        if (sessionYear == currentYear) {
        	var onDate = today;
            $("#DBvoucherTypeDate").val(onDate);
        } else {
            $("#DBvoucherTypeDate").val("31/03/" + sessionlastYear);
            var onDate = "31/03/" + sessionlastYear;
        }
    }

    //Set previous year last date and current date as depend on login year end




    if ($.fn.DataTable.isDataTable('#DayBookTable')) {


        $('#DayBookTable').dataTable().fnClearTable();
        $('#DayBookTable').dataTable().fnDestroy();

    }

    $('#DayBookTable').DataTable({
        "bPaginate": false,
        "columnDefs": [{
            "visible": false,
            "targets": 9
        }],
        bInfo: false,
        bFilter: false
    });



    $("#DayBookSubHeading").empty().append("<b><span>Day Book As of Date &nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp; </span><span > " + onDate + " </span></b>");

    //	alert("Hi "+onDate);
    var voucherType = "AL";

    var tr = "";


    $.ajax({
        url: getContextUrl() + '/finance/AllDayBook',
        method: 'POST',
        async: true,
        data: {
            company: company,
            branch: branch,
            onDate: onDate,
            voucherType: voucherType,
        },
        success: function (resp) {
            //		alert("Inside Day Book Resp");
            //			console.log("Day Book : "+JSON.stringify(resp));
            var DayBookData = resp.P_DATA;

            var Vtype = [{
                    "TCODE": "BB",
                    "TCODE_NAME": "Bank Book"
                },
                {
                    "TCODE": "CB",
                    "TCODE_NAME": "Cash Book"
                },
                {
                    "TCODE": "CT",
                    "TCODE_NAME": "Contra Voucher"
                },
                {
                    "TCODE": "JV",
                    "TCODE_NAME": "Journal Voucher"
                },
                {
                    "TCODE": "PB",
                    "TCODE_NAME": "Purchase Voucher"
                },
                {
                    "TCODE": "SB",
                    "TCODE_NAME": "Sale Voucher"
                },
                {
                    "TCODE": "AL",
                    "TCODE_NAME": "All Voucher"
                }
            ];

            var debitGTotal = 0.00,
                creditGTotal = 0.00;

            if ($.fn.DataTable.isDataTable('#DayBookTable')) {


                $('#DayBookTable').dataTable().fnClearTable();
                $('#DayBookTable').dataTable().fnDestroy();

            }

            if (DayBookData.length == 0) {
                tr += '<tr>'

                tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                tr += "<td style='color:red;text-align:center;'><b><span>No Record Found</span></b></td>";

                tr += '</tr>';

                var table = $('#DayBookTable').DataTable({

                    "bPaginate": false,
                    "columnDefs": [{
                        "visible": false,
                        "targets": 9
                    }],
                    bInfo: false,
                    bFilter: false
                });

            } else {
                $.each(Vtype, function (i, value) {

                    if (value.TCODE == "BB" || value.TCODE == "CB" || value.TCODE == "CT" || value.TCODE == "JV" || value.TCODE == "PB" || value.TCODE == "SB" || value.TCODE == "AL") {

                        var debitTotal = 0.00,
                            creditTotal = 0.00;

                        $.each(DayBookData, function (i, obj) {
                            if (value.TCODE == obj.TCODE) {

                                tr += '<tr>'

                                //				if (obj.TCODE == "CB") {
                                ////				alert(" opening debit balance : "+obj.DOCNO)
                                //				 tr += "<td style='color:black;text-align:center;'><b>Cash Book</b></td>";
                                //				 } else if (obj.TCODE == "BB") {
                                //				 tr += "<td style='color:black;text-align:center;'><b>Bank Book</b></td>";
                                //				 } else if (obj.TCODE == "CT") {
                                //				 tr += "<td style='color:black;text-align:center;'><b>Contra Voucher</b></td>";
                                //				 } else if (obj.TCODE == "JV") {
                                //				 tr += "<td style='color:black;text-align:center;'><b>Journal Voucher</b></td>";
                                //				 } else if (obj.TCODE == "PB") {
                                //				 tr += "<td style='color:black;text-align:center;'><b>Purchase Voucher</b></td>";
                                //				 } else if (obj.TCODE == "SB") {
                                //				 tr += "<td style='color:black;text-align:center;'><b>Sale Voucher</b></td>";
                                //				 }

                                tr += "<td style='color:black;text-align:center;'><b>" + value.TCODE_NAME + "</b></td>";

                                tr += "<td style='color:black;text-align:center;'><b>" + obj.DATES + "</b></td>";


                                tr += "<td style='color:black;text-align:center;'><b>" + obj.DOCNO + "</b></td>";


                                if (obj.GL_AC_CODE == null || obj.GL_AC_CODE == 0) {
                                    //					    alert(" opening debit balance : "+obj.DOCNO)
                                    tr += "<td style='color:black;text-align:center;'><b></b></td>";
                                } else {
                                    tr += "<td style='color:black;text-align:center;'><b>" + obj.GL_AC_CODE + "</b></td>";
                                }


                                if (obj.GL_AC_NAME == null) {
                                    //					    alert(" opening debit balance : "+obj.GL_AC_NAME)
                                    tr += "<td ></td>";
                                } else {
                                    tr += "<td style='color:black;font:bold;text-align:left;'><b><span class='center' >" + obj.GL_AC_NAME + "</span></b></td>";
                                }

                                if (obj.PARTICULAR == null) {
                                    //					    alert(" opening debit balance : "+obj.PARTICULAR)
                                    tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
                                } else {
                                    tr += "<td style='color:black;text-align:center;' class='DVTTSurekhNormal'><b>" + obj.PARTICULAR + "</b></td>";
                                }


                                if (obj.CHEQUE_NO == null) {
                                    //					    alert(" opening debit balance : "+obj.PAYMENT)
                                    tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
                                } else {
                                    tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >" + obj.CHEQUE_NO + "</span></b></td>";
                                }

                                if (obj.DEBIT == null || obj.DEBIT == 0) {
                                    //					    alert(" opening debit balance : "+obj.DEBIT)
                                    tr += "<td style='color:black;font:bold;text-align:right;'>0.00</td>";
                                } else {
                                    tr += "<td style='color:black;font:bold;text-align:right;'>" + parseFloat(obj.DEBIT).toFixed(2) + "</td>";
                                }

                                if (obj.CREDIT == null || obj.CREDIT == 0) {
                                    //					    alert(" opening credit balance : "+obj.CREDIT)
                                    tr += "<td style='color:black;font:bold;text-align:right;'>0.00</td>";
                                } else {
                                    tr += "<td style='color:black;font:bold;text-align:right;'>" + parseFloat(obj.CREDIT).toFixed(2) + "</td>";
                                }

                                if (obj.NARRATION == null) {
                                    //					    alert(" opening debit balance : "+obj.PARTICULAR)
                                    tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
                                } else {
                                    tr += "<td style='color:black;text-align:center;' class='DVTTSurekhNormal'><b>" + obj.NARRATION + "</b></td>";
                                }


                                tr += '</tr>';

                                debitTotal = debitTotal + parseFloat(obj.DEBIT);
                                creditTotal = creditTotal + parseFloat(obj.CREDIT);

                                debitGTotal = debitGTotal + parseFloat(obj.DEBIT);
                                creditGTotal = creditGTotal + parseFloat(obj.CREDIT);

                            }



                        });

                    }

                });
                $("#DayBookTable tbody").empty().append(tr);




                $('#DayBookTable').DataTable({
                    bInfo: false,
                    "columnDefs": [{
                        "visible": false,
                        "targets": 9
                    }],
                    //    responsive : true,
                    scrollCollapse: true,
                    "bPaginate": false,
                    bFilter: false,
                    "drawCallback": function (settings) {
                        var api = this.api();
                        var rows = api.rows({
                            page: 'current'
                        }).nodes();
                        var last = null;
                        var subTotal = new Array();
                        var groupID = -1;
                        var aData = new Array();
                        var bData = new Array();
                        var index = 0;

                        api.column(2, {
                            page: 'current'
                        }).data().each(function (group, i) {

                            // console.log(group+">>>"+i);

                            var vals = api.row(api.row($(rows).eq(i)).index()).data();
                            //              console.log(vals);
                            //              console.log(vals[8]);
                            var Credit = vals[8] != undefined ? parseFloat(vals[8]) : 0;
                            var Debit = vals[7] != undefined ? parseFloat(vals[7]) : 0;
                            var NarrationData = vals[9] != undefined ? vals[9] : 0;


                            if (typeof aData[group] == 'undefined') {
                                aData[group] = new Array();
                                aData[group].rows = [];
                                aData[group].Credit = [];
                                aData[group].Debit = [];
                                aData[group].NarrationData = [];
                            }

                            aData[group].rows.push(i);
                            aData[group].Credit.push(Credit);
                            aData[group].Debit.push(Debit);
                            aData[group].NarrationData.push(NarrationData);


                        });


                        var idx = 0;


                        for (var office in aData) {

                            idx = Math.max.apply(Math, aData[office].rows);



                            var sum = 0;
                            var sum2 = 0;
                            var VTNarration = "";

                            $.each(aData[office].Credit, function (k, v) {
                                sum = sum + v;
                            });
                            $.each(aData[office].Debit, function (k, v) {
                                sum2 = sum2 + v;
                            });
                            var y = 1;
                            $.each(aData[office].NarrationData, function (k, v) {
                                if (y == 1) {
                                    VTNarration = v;
                                }
                                y = y + 1;
                            });
                            //  									console.log(aData[office].Credit);
                            //  									console.log(aData[office].Debit);
                            $(rows).eq(idx).after(
                                '<tr class="group" style="background-color:;"><td style="color:red;white-space:nowrap;">Narration :</td>' +
                                '<td colspan="5" class="DVTTSurekhNormal">' + VTNarration + '</td>' +
                                '<td class="pull-right" style="color:red;">Total :</td>' +
                                '<td style="font-size:14px;color:black;text-align: right;">' + sum2.toFixed(2) + '</td>' +
                                '<td style="font-size:14px;color:black;text-align: right;">' + sum.toFixed(2) + '</td></tr>'
                            );
                        };


                    }
                });

            }

            $("#dayBookdebitTotal").text(debitGTotal.toFixed(2));
            $("#dayBookcreditTotal").text(creditGTotal.toFixed(2));

        }
    });


}

// Day book Data End Here

//Day book Data Type and Date Wise Start here


function getTypeWiseData() {

    if ($("#DBvoucherTypeDate").val() !== "") {

        //	alert("Allo re Day book");
        var company = $("#company").val();
        var branch = $("#branch").val();

        var onDate = $("#DBvoucherTypeDate").val();
        var voucherType = $("#VTypeAll").val();

        //	alert(onDate);
        //	alert(voucherType);

        $("#DayBookSubHeading").empty().append("<b><span>Day Book As of Date &nbsp;&nbsp;<i class='fas fa-hand-point-right fa-lg'></i> &nbsp; </span><span > " + onDate + " </span></b>");

        var tr = "";

        $.ajax({
            url: getContextUrl() + '/finance/AllDayBook',
            method: 'POST',
            async: true,
            data: {
                company: company,
                branch: branch,
                onDate: onDate,
                voucherType: voucherType,
            },
            success: function (resp) {

                //			console.log("Day Book : "+JSON.stringify(resp));
                var DayBookData = resp.P_DATA;

                var Vtype = [{
                        "TCODE": "BB",
                        "TCODE_NAME": "Bank Book"
                    },
                    {
                        "TCODE": "CB",
                        "TCODE_NAME": "Cash Book"
                    },
                    {
                        "TCODE": "CT",
                        "TCODE_NAME": "Contra Voucher"
                    },
                    {
                        "TCODE": "JV",
                        "TCODE_NAME": "Journal Voucher"
                    },
                    {
                        "TCODE": "PB",
                        "TCODE_NAME": "Purchase Voucher"
                    },
                    {
                        "TCODE": "SB",
                        "TCODE_NAME": "Sale Voucher"
                    },
                    {
                        "TCODE": "AL",
                        "TCODE_NAME": "All Voucher"
                    }
                ];

                var debitGTotal = 0.00,
                    creditGTotal = 0.00;

                if ($.fn.DataTable.isDataTable('#DayBookTable')) {


                    $('#DayBookTable').dataTable().fnClearTable();
                    $('#DayBookTable').dataTable().fnDestroy();

                }

                if (DayBookData.length == 0) {
                    tr += '<tr>'

                    tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                    tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                    tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                    tr += "<td style='color:black;text-align:center;'><b><span></span></b></td>";
                    tr += "<td style='color:Red;text-align:center;'><b><span>No Record Found</span></b></td>";

                    tr += '</tr>';

                    var table = $('#DayBookTable').DataTable({
                        "bPaginate": false,
                        bInfo: false,
                        bFilter: false,
                        "columnDefs": [{
                            "visible": false,
                            "targets": 9
                        }],
                    });

                } else {
                    const array = [];

                    //this.items = [];
                    //this.narrationArray = [];
                    //			items.push('dummy');
                    $.each(Vtype, function (i, value) {

                        if (value.TCODE == "BB" || value.TCODE == "CB" || value.TCODE == "CT" || value.TCODE == "JV" || value.TCODE == "PB" || value.TCODE == "SB" || value.TCODE == "AL") {

                            var debitTotal = 0.00,
                                creditTotal = 0.00;
                            var b = 0;


                            $.each(DayBookData, function (i, obj) {

                                if (!array.includes(obj.NARRATION)) {
                                    array.push(obj.NARRATION);
                                }
                                if (value.TCODE == obj.TCODE) {
                                    tr += '<tr>'

                                    if (obj.TCODE == "CB") {
                                        //				alert(" opening debit balance : "+obj.DOCNO)
                                        tr += "<td style='color:black;text-align:center;'><b>Cash Book</b></td>";
                                    } else if (obj.TCODE == "BB") {
                                        tr += "<td style='color:black;text-align:center;'><b>Bank Book</b></td>";
                                    } else if (obj.TCODE == "CT") {
                                        tr += "<td style='color:black;text-align:center;'><b>Contra Voucher</b></td>";
                                    } else if (obj.TCODE == "JV") {
                                        tr += "<td style='color:black;text-align:center;'><b>Journal Voucher</b></td>";
                                    } else if (obj.TCODE == "PB") {
                                        tr += "<td style='color:black;text-align:center;'><b>Purchase Voucher</b></td>";
                                    } else if (obj.TCODE == "SB") {
                                        tr += "<td style='color:black;text-align:center;'><b>Sale Voucher</b></td>";
                                    }



                                    tr += "<td style='color:black;text-align:center;'><b>" + obj.DATES + "</b></td>";


                                    tr += "<td style='color:black;text-align:center;'><b>" + obj.DOCNO + "</b></td>";


                                    if (obj.GL_AC_CODE == null || obj.GL_AC_CODE == 0) {
                                        //					    alert(" opening debit balance : "+obj.DOCNO)
                                        tr += "<td style='color:black;text-align:center;'><b></b></td>";
                                    } else {
                                        tr += "<td style='color:black;text-align:center;'><b>" + obj.GL_AC_CODE + "</b></td>";
                                    }


                                    if (obj.GL_AC_NAME == null) {
                                        //					    alert(" opening debit balance : "+obj.GL_AC_NAME)
                                        tr += "<td style='color:black;font:bold;text-align:left;'><b><span class='center' ></span></b></td>";
                                    } else {
                                        tr += "<td style='color:black;font:bold;text-align:left;'><b><span class='center' >" + obj.GL_AC_NAME + "</span></b></td>";
                                    }

                                    if (obj.PARTICULAR == null) {
                                        //					    alert(" opening debit balance : "+obj.PARTICULAR)
                                        tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
                                    } else {
                                        tr += "<td style='color:black;text-align:center;font-size:18px;' class='DVTTSurekhNormal'><b>" + obj.PARTICULAR + "</b></td>";
                                    }


                                    if (obj.CHEQUE_NO == null) {
                                        //					    alert(" opening debit balance : "+obj.PAYMENT)
                                        tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' ></span></b></td>";
                                    } else {
                                        tr += "<td style='color:black;font:bold;text-align:right;'><b><span class='center' >" + obj.CHEQUE_NO + "</span></b></td>";
                                    }

                                    if (obj.DEBIT == null || obj.DEBIT == 0) {
                                        //					    alert(" opening debit balance : "+obj.DEBIT)
                                        tr += "<td style='color:black;font:bold;text-align:right;'>0.00</td>";
                                    } else {
                                        tr += "<td style='color:black;font:bold;text-align:right;'>" + parseFloat(obj.DEBIT).toFixed(2) + "</td>";
                                    }

                                    if (obj.CREDIT == null || obj.CREDIT == 0) {
                                        //					    alert(" opening credit balance : "+obj.CREDIT)
                                        tr += "<td style='color:black;font:bold;text-align:right;'>0.00</td>";
                                    } else {
                                        tr += "<td style='color:black;font:bold;text-align:right;'>" + parseFloat(obj.CREDIT).toFixed(2) + "</td>";
                                    }

                                    tr += "<td style='color:black;text-align:center;' class=''>" + obj.NARRATION + "</td>";

                                    tr += '</tr>';

                                    debitTotal = debitTotal + parseFloat(obj.DEBIT);
                                    creditTotal = creditTotal + parseFloat(obj.CREDIT);

                                    debitGTotal = debitGTotal + parseFloat(obj.DEBIT);
                                    creditGTotal = creditGTotal + parseFloat(obj.CREDIT);

                                }


                            });

                        }

                    });

                    $("#DayBookTable tbody").empty().append(tr);



                    var table = $('#DayBookTable').DataTable({
                        bInfo: false,
                        "columnDefs": [{
                            "visible": false,
                            "targets": 9
                        }],
                        "bPaginate": false,
                        bFilter: false,
                        "drawCallback": function (settings) {
                            var api = this.api();
                            var rows = api.rows({
                                page: 'current'
                            }).nodes();
                            var last = null;
                            var subTotal = new Array();
                            var groupID = -1;
                            var aData = new Array();
                            var bData = new Array();
                            var index = 0;

                            api.column(2, {
                                page: 'current'
                            }).data().each(function (group, i) {

                                // console.log(group+">>>"+i);

                                var vals = api.row(api.row($(rows).eq(i)).index()).data();
                                //              console.log(vals);
                                //              console.log(vals[8]);
                                var Credit = vals[8] != undefined ? parseFloat(vals[8]) : 0;
                                var Debit = vals[7] != undefined ? parseFloat(vals[7]) : 0;
                                var NarrationData = vals[9] != undefined ? vals[9] : 0;


                                if (typeof aData[group] == 'undefined') {
                                    aData[group] = new Array();
                                    aData[group].rows = [];
                                    aData[group].Credit = [];
                                    aData[group].Debit = [];
                                    aData[group].NarrationData = [];
                                }

                                aData[group].rows.push(i);
                                aData[group].Credit.push(Credit);
                                aData[group].Debit.push(Debit);
                                aData[group].NarrationData.push(NarrationData);


                            });


                            var idx = 0;


                            for (var office in aData) {

                                idx = Math.max.apply(Math, aData[office].rows);

                                var arrayl = array.length;
                                var count = 0;
                                //      				console.log("IDX : "+idx);
                                //      				console.log(" Array Length :"+arrayl);

                                var sum = 0;
                                var sum2 = 0;
                                var VTNarration = "";

                                $.each(aData[office].Credit, function (k, v) {
                                    sum = sum + v;
                                });
                                $.each(aData[office].Debit, function (k, v) {
                                    sum2 = sum2 + v;
                                });
                                var y = 1;
                                $.each(aData[office].NarrationData, function (k, v) {

                                    if (y == 1) {
                                        VTNarration = v;
                                    }
                                    y = y + 1;
                                });
                                //  									console.log(aData[office].Credit);
                                //  									console.log(aData[office].Debit);
                                $(rows).eq(idx).after(
                                    '<tr class="group font-weight-bold" style="background-color:;"><td style="color:red;font-size:14px;white-space:nowrap;">Narration :</td>' +
                                    '<td colspan="5" class="DVTTSurekhNormal font-weight-bold" style="font-size:20px;"><b>' + VTNarration + '</b></td>' +
                                    '<td class="pull-right font-weight-bold" style="color:red;font-size:14px;">Total :</td>' +
                                    '<td class="font-weight-bold" style="font-size:14px;color:black;text-align: right;font-size:14px;">' + sum2.toFixed(2) + '</td>' +
                                    '<td class="font-weight-bold" style="font-size:14px;color:black;text-align: right;font-size:14px;">' + sum.toFixed(2) + '</td></tr>'
                                );

                            };


                        }
                    });

                }
                $("#dayBookdebitTotal").text(debitGTotal.toFixed(2));
                $("#dayBookcreditTotal").text(creditGTotal.toFixed(2));




            }


        });

    }

}



//Day book Data Type and Date Wise End here
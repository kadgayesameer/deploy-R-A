"use strict";
// Cicle Chart
//Circles.create({
//	id:           'payableGraph',
//	radius:       50,
//	value:        80,
//	maxValue:     100,
//	width:        5,
//	text:         function(value){return value + '%';},
//	colors:       ['#36a3f7', '#fff'],
//	duration:     400,
//	wrpClass:     'circles-wrp',
//	textClass:    'circles-text',
//	styleWrapper: true,
//	styleText:    true
//})

// Cicle Chart
//Circles.create({
//	id:           'receivableGraph',
//	radius:       50,
//	value:        80,
//	maxValue:     100,
//	width:        5,
//	text:         function(value){return value + '%';},
//	colors:       ['#36a3f7', '#fff'],
//	duration:     400,
//	wrpClass:     'circles-wrp',
//	textClass:    'circles-text',
//	styleWrapper: true,
//	styleText:    true
//})

//Notify
//$.notify({
//	icon: 'flaticon-alarm-1',
//	title: 'Virtual Galaxy InfoTech Pvt Ltd',
//	message: 'ERP MIS',
//},{
//	type: 'info',
//	placement: {
//		from: "bottom",
//		align: "right"
//	},
//	time: 1000,
//});

// JQVmap
$('#map-example').vectorMap(
{
	map: 'world_en',
	backgroundColor: 'transparent',
	borderColor: '#fff',
	borderWidth: 2,
	color: '#e4e4e4',
	enableZoom: true,
	hoverColor: '#35cd3a',
	hoverOpacity: null,
	normalizeFunction: 'linear',
	scaleColors: ['#b6d6ff', '#005ace'],
	selectedColor: '#35cd3a',
	selectedRegions: ['ID', 'RU', 'US', 'AU', 'CN', 'BR'],
	showTooltip: true,
	onRegionClick: function(element, code, region)
	{
		return false;
	},
	onResize: function (element, width, height) {
		console.log('Map Size: ' +  width + 'x' +  height);
	},
});

var dailySalesChart = document.getElementById('dailySalesChart').getContext('2d');

var myDailySalesChart = new Chart(dailySalesChart, {
	type: 'line',
	data: {
		labels:["January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September"],
		datasets:[ {
			label: "Sales Analytics", fill: !0, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "#fff", borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, pointBorderColor: "#fff", pointBackgroundColor: "#fff", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "#fff", pointHoverBorderWidth: 1, pointRadius: 1, pointHitRadius: 5, data: [65, 59, 80, 81, 56, 55, 40, 35, 30]
		}]
	},
	options : {
		maintainAspectRatio:!1, legend: {
			display: !1
		}
		, animation: {
			easing: "easeInOutBack"
		}
		, scales: {
			yAxes:[ {
				display:!1, ticks: {
					fontColor: "rgba(0,0,0,0.5)", fontStyle: "bold", beginAtZero: !0, maxTicksLimit: 10, padding: 0
				}
				, gridLines: {
					drawTicks: !1, display: !1
				}
			}
			], xAxes:[ {
				display:!1, gridLines: {
					zeroLineColor: "transparent"
				}
				, ticks: {
					padding: -20, fontColor: "rgba(255,255,255,0.2)", fontStyle: "bold"
				}
			}
			]
		}
	}
});

$("#activeUsersChart").sparkline([112,109,120,107,110,85,87,90,102,109,120,99,110,85,87,94], {
	type: 'bar',
	height: '100',
	barWidth: 9,
	barSpacing: 10,
	barColor: 'rgba(255,255,255,.3)'
});

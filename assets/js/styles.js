//nice select
$(document).ready(function () {
	$('select').niceSelect();
});

//datepicker
$(function () {
	$('#profit-loss-datepicker').daterangepicker({
		"opens": "left",
		"locale": {
			"format": "YYYY-MM-DD",
			"separator": " ~ ",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		"startDate": "2022-01-01",
		"endDate": "2022-01-31",
		"drops": "down"
	}, function (start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
});
$(function () {
	$('#stat-datepicker').daterangepicker({
		"opens": "left",
		"locale": {
			"format": "YYYY-MM-DD",
			"separator": " ~ ",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		"startDate": "2022-01-01",
		"endDate": "2022-01-31",
		"drops": "down"
	}, function (start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
});
$(function () {
	$('#visiter-datepicker').daterangepicker({
		"opens": "left",
		"locale": {
			"format": "YYYY-MM-DD",
			"separator": " ~ ",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		"startDate": "2022-01-01",
		"endDate": "2022-01-31",
		"drops": "down"
	}, function (start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
});
$(function () {
	$('#distribution-datepicker').daterangepicker({
		"opens": "left",
		"locale": {
			"format": "YYYY-MM-DD",
			"separator": " ~ ",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		"startDate": "2022-01-01",
		"endDate": "2022-01-31",
		"drops": "down"
	}, function (start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
});
$(function () {
	$('#table-datepicker').daterangepicker({
		"opens": "right",
		"locale": {
			"format": "YYYY-MM-DD",
			"separator": " ~ ",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		"startDate": "2022-01-01",
		"endDate": "2022-01-31",
		"drops": "down"
	}, function (start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
});
$(function () {
	$('#registDate').daterangepicker({
		"locale": {
			"format": "YYYY-MM-DD",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		singleDatePicker: true,
		showDropdowns: true,
		minYear: 1901,
		maxYear: parseInt(moment().format('YYYY'),10)
	});
});
$(function () {
	$('#dateStart').daterangepicker({
		"locale": {
			"format": "YYYY-MM-DD",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		singleDatePicker: true,
		showDropdowns: true,
		minYear: 1901,
		maxYear: parseInt(moment().format('YYYY'),10)
	});
});
$(function () {
	$('#dateEnd').daterangepicker({
		"locale": {
			"format": "YYYY-MM-DD",
			"applyLabel": "확인",
			"cancelLabel": "취소",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["월", "화", "수", "목", "금", "토", "일"],
			"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			"firstDay": 1
		},
		singleDatePicker: true,
		showDropdowns: true,
		minYear: 1901,
		maxYear: parseInt(moment().format('YYYY'),10)
	});
});

//google chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Year', '입금', '출금', '수익'],
		['2004', 1000, 400, 300],
		['2005', 1170, 460, 300],
		['2006', 660, 1120, 500],
		['2007', 1030, 540, 200]
	]);

	var options = {
		curveType: 'function',
		chartArea: {
			width: '80%',
			height: '75%'
		},
		legend: {
			position: 'top',
			textStyle: {
				color: '#aaa'
			}
		},
		colors: ['#31ACF5', '#ED7E84', '#F8CA6B'],
		backgroundColor: "#2C2D31",
		hAxis: {
			textStyle: {
				color: '#aaa'
			},
			baselineColor: '#000',
		},
		vAxis: {
			textStyle: {
				color: '#aaa'
			},
			baselineColor: '#aaa',
			gridlineColor: '#201E20',
		}
	};

	var curve_chart = document.getElementById('curve_chart');

	if (curve_chart !== null) {

		var chart = new google.visualization.LineChart(curve_chart);

		chart.draw(data, options);
	}
};

function userWin(){
	var popup = window.open('../win/user_win.html', '개인 유저', 'width=1500px,height=920px');
};
function moneyLogWin(){
	var popup = window.open('../win/moneyLog_win.html', '머니로그', 'width=1500px,height=920px');
};
function pointLogWin(){
	var popup = window.open('../win/pointLog_win.html', '포인트로그', 'width=1500px,height=920px');
};
function loginWin(){
	var popup = window.open('../win/login_win.html', '로그인내역', 'width=1500px,height=920px');
};

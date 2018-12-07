// Dashboard 1 Morris-chart
$( function () {
	"use strict";
	// Morris bar chart
	var $arrColors = ['#51585b','#e0d8c6','#947c44','#ff4444','#ff4444','#c0c0c0','#cc11cc','#eea3ee','#ffc0cb','#ff7f50','#bada55','#3b5998','#6897bb','#660066','#088da5','#0e2f44','#daa520','#ff6666','#f6546a','#003366','#ff7373','#ffa500','#ffe4e1','#008080','#bed2e7','#42dff4','#bdb76b','#3ca392','#6bdbcb','#49c4af','#ebbb32'];
	
	Morris.Bar( {
		element: 'morris-bar-chart',
		data: [ {
			y: '행정/안전',
			a: 1000
        }, {
			y: '과학기술',
			a: 25
        }, {
			y: '교육',
			a: 558
        }, {
			y: '문화',
			a: 954
        }, {
			y: '관광',
			a: 401
        }, {
			y: '체육',
			a: 327
        }, {
			y: '보건',
			a: 666
        }, {
			y: '복지',
			a: 619
        }, {
			y: '노동',
			a: 352
        }, {
			y: '환경',
			a: 687
        }, {
			y: '국방',
			a: 1334
        }, {
			y: '농림',
			a: 400
        }, {
			y: '해양수산',
			a: 350
        }, {
			y: '재정',
			a: 536
        }, {
			y: '세무',
			a: 354
        }, {
			y: '산업',
			a: 0
        }, {
			y: '자원',
			a: 209
        }, {
			y: '우정',
			a: 192
        }, {
			y: '방송통신',
			a: 794
        }, {
			y: '주택',
			a: 458
        }, {
			y: '도시',
			a: 295
        }, {
			y: '도로',
			a: 155
        }, {
			y: '수자원',
			a: 292
        }, {
			y: '교통',
			a: 390
        }, {
			y: '외무통일',
			a: 570
        }, {
			y: '민사',
			a: 0
        }, {
			y: '경찰',
			a: 1107
        }, {
			y: '법무',
			a: 307
        }, {
			y: '청원',
			a: 46,
        } ],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['A'],
		xLabelAngle:60,		
		barColors: function (row) {
			return $arrColors[row.x]
		},
		hideHover: 'auto',		
		resize: true
	} );
	
	// LINE CHART
	var line = new Morris.Line( {
		element: 'morris-line-chart',
		resize: true,
		data: [
			{
				y: '2011 Q1',
				item1: 2666
			},
			{
				y: '2011 Q2',
				item1: 2778
			},
			{
				y: '2011 Q3',
				item1: 4912
			},
			{
				y: '2011 Q4',
				item1: 3767
			},
			{
				y: '2012 Q1',
				item1: 6810
			},
			{
				y: '2012 Q2',
				item1: 5670
			},
			{
				y: '2012 Q3',
				item1: 4820
			},
			{
				y: '2012 Q4',
				item1: 15073
			},
			{
				y: '2013 Q1',
				item1: 10687
			},
			{
				y: '2013 Q2',
				item1: 8432
			}
          ],
		xkey: 'y',
		ykeys: [ 'item1' ],
		labels: [ 'Item 1' ],
		gridLineColor: '#eef0f2',
		lineColors: [ '#007BFF' ],
		lineWidth: 1,
		hideHover: 'auto'
	} );
	// Morris donut chart

	Morris.Donut( {
		element: 'morris-donut-chart',
		data: [ {
			label: "Download Sales",
			value: 12,

        }, {
			label: "In-Store Sales",
			value: 30
        }, {
			label: "Mail-Order Sales",
			value: 20
        } ],
		resize: true,
		colors: [ '#007BFF', '#28A745', '#DC3545' ]
	} );


	// Extra chart
	Morris.Area( {
		element: 'extra-area-chart',
		data: [ {
				period: '2001',
				smartphone: 0,
				windows: 0,
				mac: 0
        }, {
				period: '2002',
				smartphone: 90,
				windows: 60,
				mac: 25
        }, {
				period: '2003',
				smartphone: 40,
				windows: 80,
				mac: 35
        }, {
				period: '2004',
				smartphone: 30,
				windows: 47,
				mac: 17
        }, {
				period: '2005',
				smartphone: 150,
				windows: 40,
				mac: 120
        }, {
				period: '2006',
				smartphone: 25,
				windows: 80,
				mac: 40
        }, {
				period: '2007',
				smartphone: 10,
				windows: 10,
				mac: 10
        }


        ],
		lineColors: [ '#28A745', '#DC3545', '#007BFF' ],
		xkey: 'period',
		ykeys: [ 'smartphone', 'windows', 'mac' ],
		labels: [ 'Phone', 'Windows', 'Mac' ],
		pointSize: 0,
		lineWidth: 0,
		resize: true,
		fillOpacity: 0.8,
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		hideHover: 'auto'

	} );
	Morris.Area( {
		element: 'morris-area-chart',
		data: [ {
				period: '2001',
				smartphone: 0,
				windows: 0,
				mac: 0
        }, {
				period: '2002',
				smartphone: 90,
				windows: 60,
				mac: 25
        }, {
				period: '2003',
				smartphone: 40,
				windows: 80,
				mac: 35
        }, {
				period: '2004',
				smartphone: 30,
				windows: 47,
				mac: 17
        }, {
				period: '2005',
				smartphone: 150,
				windows: 40,
				mac: 120
        }, {
				period: '2006',
				smartphone: 25,
				windows: 80,
				mac: 40
        }, {
				period: '2007',
				smartphone: 10,
				windows: 10,
				mac: 10
        }


        ],
		xkey: 'period',
		ykeys: [ 'smartphone', 'windows', 'mac' ],
		labels: [ 'Phone', 'Windows', 'Mac' ],
		pointSize: 3,
		fillOpacity: 0,
		pointStrokeColors: [ '#28A745', '#007BFF', '#DC3545' ],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 3,
		hideHover: 'auto',
		lineColors: [ '#28A745', '#007BFF', '#DC3545' ],
		resize: true

	} );

	Morris.Area( {
		element: 'morris-area-chart2',
		data: [ {
				period: '2010',
				SiteA: 0,
				SiteB: 0,

        }, {
				period: '2011',
				SiteA: 130,
				SiteB: 100,

        }, {
				period: '2012',
				SiteA: 80,
				SiteB: 60,

        }, {
				period: '2013',
				SiteA: 70,
				SiteB: 200,

        }, {
				period: '2014',
				SiteA: 180,
				SiteB: 150,

        }, {
				period: '2015',
				SiteA: 105,
				SiteB: 90,

        },
			{
				period: '2016',
				SiteA: 250,
				SiteB: 150,

        } ],
		xkey: 'period',
		ykeys: [ 'SiteA', 'SiteB' ],
		labels: [ 'Site A', 'Site B' ],
		pointSize: 0,
		fillOpacity: 0.4,
		pointStrokeColors: [ '#b4becb', '#007BFF' ],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 0,
		smooth: false,
		hideHover: 'auto',
		lineColors: [ '#b4becb', '#007BFF' ],
		resize: true

	} );


} );

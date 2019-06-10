
// // data = ["ID", "Data"]
// let createChart = function(data) {
//   // console.log(data[1])
//   var ctx = document.getElementById(data[0]).getContext('2d');
//   var chart = new Chart(ctx, {
//     type: 'line',
//     data: data[1],
//     options: option_chart
//   });
// }

// var option_chart = {
//   elements: {
//     line: {
//       tension: 0
//     }
//   },
//   legend: {
//     display: false,
//   },
//   tooltips: {
//     callbacks: {
//       label: function(tooltipItem) {
//         return tooltipItem.yLabel;
//       }
//     }
//   },
//   scales: {
//     yAxes: [{
//       ticks: {
//         // Include a dollar sign in the ticks
//         beginAtZero: true,
//         display: false,
//         stepSize: 2
//       },
//       gridLines: {
//         display: false
//       }
//     }],
//     xAxes: [{
//       ticks: {
//         display: false //this will remove only the label
//       },
//       gridLines: {
//         display: false
//       }
//     }]
//   }
// }

// var data = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [{
//     label: '# of BTC',
//     data: [12, 13, 11, 8, 12, 11, 12, 11, 8, 10, 12, 11, 12, 8, 11, 10, 12, 7, 12, 11, 11, 10, 12, 8],
//     backgroundColor: ['rgba(131, 70, 255, .2)'],
//     borderColor: [
//       'rgba(131, 70, 255, 1)'
//     ],
//     borderWidth: 1,
//   }]
// }
// var data_btc = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [{
//     label: '# of BTC',
//     data: [12, 13, 11, 8, 12, 11, 12, 11, 8, 10, 12, 11, 12, 8, 11, 10, 12, 7, 12, 11, 11, 10, 12, 8],
//     backgroundColor: ['rgba(131, 70, 255, .2)'],
//     borderColor: [
//       'rgba(131, 70, 255, 1)'
//     ],
//     borderWidth: 1,
//   }]
// }

// var data_eth = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [{
//     label: '# of BTC',
//     data: [12, 13, 11, 8, 12, 11, 12, 11, 8, 10, 12, 11, 12, 8, 11, 10, 12, 7, 12, 11, 11, 10, 12, 13],
//     backgroundColor: ['rgba(131, 70, 255, .2)'],
//     borderColor: [
//       'rgba(131, 70, 255, 1)'
//     ],
//     borderWidth: 1,
//   }]
// }

// var data_xrp = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [{
//     label: '# of BTC',
//     data: [12, 13, 11, 8, 12, 11, 12, 11, 8, 10, 12, 11, 12, 8, 11, 10, 12, 7, 12, 11, 11, 10, 12, 13],
//     backgroundColor: ['rgba(131, 70, 255, .2)'],
//     borderColor: [
//       'rgba(131, 70, 255, 1)'
//     ],
//     borderWidth: 1,
//   }]
// }

// var data_ltc = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [{
//     label: '# of BTC',
//     data: [12, 13, 11, 8, 12, 11, 12, 11, 8, 10, 12, 11, 12, 8, 11, 10, 12, 7, 12, 11, 11, 10, 12, 13],
//     backgroundColor: ['rgba(131, 70, 255, .2)'],
//     borderColor: [
//       'rgba(131, 70, 255, 1)'
//     ],
//     borderWidth: 1,
//   }]
// }

// var data_zec = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [{
//     label: '# of BTC',
//     data: [12, 13, 11, 8, 12, 11, 12, 11, 8, 10, 12, 11, 12, 8, 11, 10, 12, 7, 12, 11, 11, 10, 12, 13],
//     backgroundColor: ['rgba(131, 70, 255, .2)'],
//     borderColor: [
//       'rgba(131, 70, 255, 1)'
//     ],
//     borderWidth: 1,
//   }]
// }
  
// const arr_id = [['BTC_chart', data_btc],['ETH_chart', data_eth],['XRP_chart',data_xrp],['LTC_chart', data_ltc], ['ZEC_chart', data_zec]]
// const count = arr_id.length;

// for (i = 0; i < count; i++) {
//   createChart(arr_id[i]);
// }

// // // this is ugly, don't judge me
// // var updateData = function(oldData, count) {
// //   var labels = oldData["labels"];
// //   var dataSetA = oldData["datasets"][0]["data"];
  
// //   labels.shift();
// //   count++;
// //   labels.push(count.toString());
// //   var newDataA = dataSetA[9] + (20 - Math.floor(Math.random() * (41)));
// //   dataSetA.push(newDataA);
// //   dataSetA.shift();   
// // };

// // setInterval(function(){
// //   updateData(data, 20);
// //   myNewChart.Line(data, optionsNoAnimation)
// //   ;}, 2000
// // );



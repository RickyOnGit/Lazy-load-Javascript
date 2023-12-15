var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });
  
  
  var xValues = [50,60,70,80,90,100,110,120,130,140,150];
  var yValues = [7,8,8,9,9,9,10,11,14,14,15];
  
  new Chart("myChart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });
  
  
  var iValues = [100,200,300,400,500,600,700,800,900,1000];
  
  new Chart("myChart3", {
    type: "line",
    data: {
      labels: iValues,
      datasets: [{ 
        data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
        borderColor: "red",
        fill: false
      }, { 
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
        borderColor: "green",
        fill: false
      }, { 
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      legend: {display: false}
    }
  });
  
  var rValues = [];
  var tValues = [];
  generateData("x * 2 + 7", 0, 10, 0.5);
  
  new Chart("myChart4", {
    type: "line",
    data: {
      labels: rValues,
      datasets: [{
        fill: false,
        pointRadius: 1,
        borderColor: "rgba(255,0,0,0.5)",
        data: tValues
      }]
    },    
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "y = x * 2 + 7",
        fontSize: 16
      }
    }
  });
  function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      tValues.push(eval(value));
      rValues.push(x);
    }
  }
  
  
  
  
  var aValues = [];
  var bValues = [];
  generateOtherData("Math.sin(x)", 0, 10, 0.5);
  
  new Chart("myChart5", {
    type: "line",
    data: {
      labels: aValues,
      datasets: [{
        fill: false,
        pointRadius: 2,
        borderColor: "rgba(0,0,255,0.5)",
        data: bValues
      }]
    },    
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "y = x * 2 + 7",
        fontSize: 16
      }
    }
  });
  function generateOtherData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      bValues.push(eval(value));
      aValues.push(x);
    }
  }
  
  
  
  var cValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var dValues = [55, 49, 44, 24, 19];
  var barColors = ["red", "green","blue","orange","brown"];
  
  new Chart("myChart6", {
    type: "bar",
    data: {
      labels: cValues,
      datasets: [{
        backgroundColor: barColors,
        data: dValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "World Wine Production 2018"
      }
    }
  });
  
  
  var fValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var gValues = [55, 49, 44, 24, 15];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  new Chart("myChart7", {
    type: "pie",
    data: {
      labels: fValues,
      datasets: [{
        backgroundColor: barColors,
        data: gValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018"
      }
    }
  });
  
  
  var pValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var qValues = [55, 49, 44, 24, 15];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  new Chart("myChart8", {
    type: "doughnut",
    data: {
      labels: pValues,
      datasets: [{
        backgroundColor: barColors,
        data: qValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018"
      }
    }
  });
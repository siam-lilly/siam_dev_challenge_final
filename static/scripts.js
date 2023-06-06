const canvas = document.getElementById('chart')
const ctx = canvas.getContext('2d')

function drawLine (start, end, style) {
  ctx.beginPath()
  ctx.strokeStyle = style || 'black'
  ctx.moveTo(...start)
  ctx.lineTo(...end)
  ctx.stroke()
}

function drawTriangle (apex1, apex2, apex3) {
  ctx.beginPath()
  ctx.moveTo(...apex1)
  ctx.lineTo(...apex2)
  ctx.lineTo(...apex3)
  ctx.fill()
}

// Query backend for the list of available stocks

setTimeout(() => {
  fetch('http://localhost:3000/stocks')
  .then((res) => {
  return res.json();
  })
  .then((dataArray) => {
  console.log(dataArray.stockSymbols);
  document.getElementById('listOfStocks').innerHTML  += "List of stocks: " + dataArray.stockSymbols;
  })

  //Error handling

  .catch(err => console.log("Error! Try again!"))
}, 2000);



// Make the spinner disappear after data is loaded

setTimeout(() => {
  document.getElementById('spin').style.display='none';
}, 2000);

// query backend to get data about each stock and organize the data - was not able to do it

drawLine([50, 50], [50, 550])
drawTriangle([35, 50], [65, 50], [50, 35])

drawLine([50, 550], [950, 550])
drawTriangle([950, 535], [950, 565], [965, 550])

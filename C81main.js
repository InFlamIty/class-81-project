canvas = document.getElementById("canvas1")
ctx = canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = 5
ctx.arc(250, 210, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.arc(400, 210, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 5
ctx.arc(550, 210, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.lineWidth = 5
ctx.arc(325, 260, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.lineWidth = 5
ctx.arc(475, 260, 50, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "grey"
ctx.lineWidth = 2
ctx.rect(150, 143, 500, 200)
ctx.stroke()
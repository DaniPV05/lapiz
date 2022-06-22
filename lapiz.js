let canv = document.querySelector("#myCanvas")
let ctx = canv.getContext ("2d")
ctx.fillStyle = "#dbaf00"
ctx.strokeStyle = "#0f0f0f"
ctx.beginPath()
ctx.rect (300, 50, 70, 300)
ctx.stroke()
ctx.fill()
 
ctx.fillStyle = "#fcc186"
ctx.strokeStyle = "#0f0f0f"
ctx.beginPath()
ctx.moveTo(300, 350)
ctx.lineTo(335, 325)
ctx.lineTo(370, 350)
ctx.lineTo(300, 350)
ctx.stroke()
ctx.fill()
 
ctx.beginPath()
ctx,moveTo(362.5, 50)
ctx.lineTo(362.5, 350)
ctx.stroke()
ctx.fill()
 
ctx.fillStyle = "#0f0f0f"
ctx.strokeStyle = "#0f0f0f"
ctx.beginPath()
ctx,moveTo(310, 50)
ctx.lineTo(310, 350)
ctx.stroke()
ctx.fill()
 
ctx.fillStyle = "#0f0f0f"
ctx.strokeStyle = "#0f0f0f"
ctx.beginPath()
ctx.moveTo(335, 325)
ctx.lineTo(350, 390)
ctx.lineTo(319, 390)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#E36161"
ctx.strokeStyle = "#E36161"
ctx.beginPath()
ctx.arc(335, 50, 35.8, 1*Math.PI,0*Math.PI)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#2f353b"
ctx.strokeStyle = "#0f0f0f"
ctx.beginPath()
ctx.rect (300, 50, 70, 20)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#f59622"
ctx.strokeStyle = "#f59622"
ctx.beginPath()
ctx.moveTo(300, 55)
ctx.lineTo(370, 55)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#f59622"
ctx.strokeStyle = "#f59622"
ctx.beginPath()
ctx.moveTo(300, 60)
ctx.lineTo(370, 60)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#f59622"
ctx.strokeStyle = "#f59622"
ctx.beginPath()
ctx.moveTo(300, 65)
ctx.lineTo(370, 65)
ctx.stroke()
ctx.fill()




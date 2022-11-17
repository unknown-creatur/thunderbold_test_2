function doSomething () {
	
}
let y = 0
let bright = 0
let 倍數 = 0
let x = 2
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    倍數 = -1
    bright = 250
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        for (let 倍數 = 0; 倍數 <= 4; 倍數++) {
            bright += -50
            led.plotBrightness(x - dx * 倍數, y, bright)
        }
        y += 1
        basic.pause(100)
    }
})

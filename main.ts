let X = 4
let Y = 4
basic.forever(function () {
    while (Y >= 0) {
        led.plot(X, Y)
        basic.pause(500)
        if (Y % 2 == 0 && X > 0) {
            X += -1
        } else if (Y % 2 != 0 && X < 4) {
            X += 1
        } else {
            Y += -1
        }
    }
})

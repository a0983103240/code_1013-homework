let X = 4
let Y = 4
basic.forever(function () {
    while (Y >= 0) {
        led.plot(X, Y)
        basic.pause(500)
        if (Y % 2 == 0) {
            if (X > 0) {
                X += -1
            } else {
                Y += -1
            }
        } else {
            if (X < 4) {
                X += 1
            } else {
                Y += -1
            }
        }
    }
})

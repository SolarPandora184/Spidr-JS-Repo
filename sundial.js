let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 15 || bearing > 365) {
        basic.showString("N")
    } else {
        basic.showString("")
    }
})

input.onButtonPressed(Button.A, function () {
    DigitA += 1
    basic.showNumber(DigitA)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 5)
})
input.onButtonPressed(Button.B, function () {
    DigitB += 1
    basic.showNumber(DigitB)
    basic.pause(500)
    basic.clearScreen()
})
/**
 * password 2,6//
 */
let DigitB = 0
let DigitA = 0
DigitA = 0
DigitB = 0
basic.forever(function () {
    if (DigitA > 9) {
        DigitA = 0
    } else if (DigitB > 9) {
        DigitB = 0
    }
    if (DigitA == 2 && DigitB == 6) {
        pins.servoWritePin(AnalogPin.P1, 100)
        DigitA = 0
        DigitB = 0
        basic.clearScreen()
    }
})

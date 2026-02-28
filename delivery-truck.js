input.onButtonPressed(Button.A, function () {
    Onoff = 1
})
input.onButtonPressed(Button.B, function () {
    Onoff = 0
})
let Distance = 0
let Onoff = 0
pins.servoWritePin(AnalogPin.P0, 90)
Onoff = 0
basic.forever(function () {
    Distance = RoboticsWorkshop.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if ((Distance == 0 || Distance > 15) && Onoff == 1) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        80,
        1
        )
    } else {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        0
        )
    }
})

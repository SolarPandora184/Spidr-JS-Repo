input.onButtonPressed(Button.A, function () {
    ONOFF = 1
    basic.showString("on")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("reset")
    control.reset()
})
let Check = 0
let Distance = 0
let ONOFF = 0
ONOFF = 0
let Count = 0
RoboticsWorkshop.DDMmotor2(
MotorChannel.MotorA,
15,
1
)
basic.pause(100)
RoboticsWorkshop.DDMmotor2(
MotorChannel.MotorA,
0,
1
)
loops.everyInterval(50, function () {
    Distance = RoboticsWorkshop.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    serial.writeValue("x", Check)
    basic.showNumber(Count)
    if (ONOFF == 1) {
        if (Distance >= 2 && Distance <= 4) {
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorA,
            60,
            0
            )
        } else if (Check >= 1 && Distance >= 6) {
            Check = 0
            Check += 1
            basic.pause(1000)
        } else if (Count >= 3) {
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorA,
            60,
            0
            )
            basic.pause(1000)
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            15,
            0
            )
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorA,
            0,
            0
            )
            basic.pause(1500)
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            0,
            0
            )
            basic.pause(5000)
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            15,
            1
            )
            basic.pause(1500)
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            0,
            1
            )
            Count = 0
        }
    } else {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        0
        )
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        0
        )
    }
})

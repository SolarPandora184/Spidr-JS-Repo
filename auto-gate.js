let Distance = 0
basic.forever(function () {
    Distance = RoboticsWorkshop.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (Distance > 2 && Distance < 20) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        100,
        0
        )
        basic.pause(10000)
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        0
        )
        basic.pause(2000)
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        100,
        1
        )
        basic.pause(10000)
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        0
        )
    } else {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        1
        )
    }
})

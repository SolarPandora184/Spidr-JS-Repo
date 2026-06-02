let Status = 0
basic.forever(function () {
    if (input.soundLevel() >= 100 && input.soundLevel() < 200) {
        Status = 1
    } else if (input.soundLevel() > 60 && input.soundLevel() < 100) {
        Status = 2
    } else {
        Status = 0
    }
    if (Status == 1) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        30,
        1
        )
        basic.pause(3000)
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        0
        )
        basic.pause(1000)
    } else if (Status == 2) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        0
        )
        for (let index = 0; index < 2; index++) {
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            60,
            0
            )
            basic.pause(1000)
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            60,
            1
            )
            basic.pause(1000)
        }
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        0
        )
        basic.pause(1000)
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

//Ignore servo commands added for digital testing purposes.//

let Status = 0
basic.forever(function () {
    if (input.soundLevel() >= 100 && input.soundLevel() < 200) {
        Status = 1
    } else if (false) {
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
        servos.P0.run(50)
        basic.pause(1000)
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        0
        )
        servos.P0.run(0)
        basic.pause(1000)
    } else if (Status == 2) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        1
        )
        servos.P0.run(50)
        for (let index = 0; index < 2; index++) {
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            60,
            0
            )
            servos.P0.run(0)
            basic.pause(1000)
            RoboticsWorkshop.DDMmotor2(
            MotorChannel.MotorB,
            60,
            1
            )
            servos.P0.run(50)
            basic.pause(1000)
        }
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        0
        )
        servos.P0.run(0)
        basic.pause(1000)
    } else {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        1
        )
        servos.P0.run(50)
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorB,
        0,
        1
        )
        servos.P0.run(0)
    }
})

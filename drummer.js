basic.forever(function () {
    if (input.lightLevel() > 120 && input.lightLevel() <= 170) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        20,
        0
        )
        basic.showIcon(IconNames.SmallDiamond)
    } else if (input.lightLevel() > 170 && input.lightLevel() <= 220) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        40,
        0
        )
        basic.showIcon(IconNames.Diamond)
    } else if (input.lightLevel() > 220 && input.lightLevel() <= 225) {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        70,
        0
        )
        basic.showIcon(IconNames.Chessboard)
    } else {
        RoboticsWorkshop.DDMmotor2(
        MotorChannel.MotorA,
        0,
        0
        )
        basic.clearScreen()
    }
})

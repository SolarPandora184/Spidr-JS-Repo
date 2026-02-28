/**
 * Servos have been added to test digitally.
 */
input.onButtonPressed(Button.A, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    30,
    1
    )
    servos.P0.run(30)
})
input.onButtonPressed(Button.AB, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    0,
    1
    )
    servos.P0.run(0)
})
input.onButtonPressed(Button.B, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    40,
    1
    )
    servos.P0.run(40)
})

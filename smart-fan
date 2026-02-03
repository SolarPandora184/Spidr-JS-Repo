input.onButtonPressed(Button.A, function () {
    status = 1
})
input.onButtonPressed(Button.B, function () {
    status = 0
})
let distance = 0
let status = 0
let speed = 0
basic.showNumber(input.temperature())
if (input.temperature() <= 25) {
    speed = 0
} else if (input.temperature() > 25) {
    speed = 15
}
RoboticsWorkshop.DDMmotor2(
MotorChannel.MotorA,
speed,
0
)
basic.forever(function () {
    distance = RoboticsWorkshop.ping(
    DigitalPin.P8,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    if (distance <= 10 || status == 0) {
        speed = 0
    } else if (distance > 10 || status == 1) {
        speed = 20
    }
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    speed,
    1
    )
})

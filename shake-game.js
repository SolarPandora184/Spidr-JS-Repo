input.onButtonPressed(Button.A, function () {
    Shake_amount = 0
})
input.onGesture(Gesture.Shake, function () {
    Shake_amount += 1
})
let Shake_amount = 0
Shake_amount = 0
basic.forever(function () {
    basic.showString("" + (Shake_amount))
    if (Shake_amount >= 10) {
        basic.showNumber(10)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        basic.pause(2000)
        Shake_amount = 0
    }
})

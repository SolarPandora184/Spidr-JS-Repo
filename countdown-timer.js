input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        if (index < 4) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.showNumber(5 - index)
        } else if (index == 4) {
            pins.servoWritePin(AnalogPin.P1, 95)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.SmallHeart)
                basic.showIcon(IconNames.Heart)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
	
})

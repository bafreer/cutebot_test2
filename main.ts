let sonar2 = 0
cuteBot.forward()
basic.forever(function () {
    sonar2 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar2 > 2 && sonar2 < 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            music.playTone(659, music.beat(BeatFraction.Whole))
        }
        basic.pause(2000)
        cuteBot.motors(-31, 0)
        basic.pause(500)
    } else {
        cuteBot.forward()
    }
})

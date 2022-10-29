radio.setGroup(3)
basic.forever(function () {
    radio.sendNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    ))
})

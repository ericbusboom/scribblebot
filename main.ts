servos.P0.setAngle(90)
servos.P1.setAngle(90)
servos.P2.setAngle(90)

let run = false;

basic.forever(function () {
    if(!run){
        return
    }
    for (let i = 90; i <= 90+45; i+=2) {
        servos.P0.setAngle(i)
        servos.P1.setAngle(i)
        servos.P2.setAngle(i)
        serial.writeValue("i", i)
        basic.pause(20)
        
    }
    for (let i = 90+45; i >= 90; i -= 2) {
        servos.P0.setAngle(i)
        servos.P1.setAngle(i)
        servos.P2.setAngle(i)
        serial.writeValue("i", i)
        basic.pause(20)
    }
})
input.onButtonPressed(Button.A, function() {
    run = !run
})
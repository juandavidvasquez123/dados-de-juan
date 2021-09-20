let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 12)
    basic.showNumber(numero)
    if (numero) {
        basic.showNumber(randint(1, 6))
        basic.showString("ganaste")
    }
    if (numero) {
        basic.showNumber(randint(7, 12))
        basic.showString("perdiste")
    }
})

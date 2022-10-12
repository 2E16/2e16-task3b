let number = 0
input.onButtonPressed(Button.A, function () {
    number = 10
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            basic.pause(1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
        } else {
            if (number >= 0) {
                number += -1
                basic.showNumber(number)
            }
        }
        if (number == 0) {
            basic.showNumber(0)
            basic.pause(2000)
            number += -1
        }
        if (number < 0) {
            for (let index = 0; index < 1; index++) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # . # .
                    . . # . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    # . . . #
                    . # . # .
                    . . # . .
                    `)
                basic.showLeds(`
                    . # . # .
                    # . . . #
                    . . . . .
                    # . . . #
                    . # . # .
                    `)
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    number = 0
})

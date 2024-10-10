/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen
 * Created on: Oct 2024
 * This program play rock, paper, scissors
*/

// variables
let randomNumber: number = 0
let totalPoint = 0
randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
})

input.onButtonPressed(Button.A, function () {
    totalPoint += 1
    basic.showIcon(IconNames.Yes)
    pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.showString("Score is: " + totalPoint)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
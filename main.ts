function checkWin () {
    if (playerAPoints >= 5) {
        basic.showString("A wins")
        playerAPoints = 0
        playerBPoints = 0
    }
    if (playerBPoints >= 5) {
        basic.showString("B wins")
        playerAPoints = 0
        playerBPoints = 0
    }
}
input.onButtonPressed(Button.A, function () {
    playerAPoints += 1
    basic.showString("A")
    basic.showNumber(playerAPoints)
    checkWin()
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A")
    basic.showNumber(playerAPoints)
    basic.pause(1000)
    basic.showString("B")
    basic.showNumber(playerBPoints)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    playerBPoints += 1
    basic.showString("B")
    basic.showNumber(playerBPoints)
    checkWin()
    basic.pause(1000)
    basic.clearScreen()
})
let playerAPoints = 0
let playerBPoints = 0
playerBPoints = 0
playerBPoints = 0

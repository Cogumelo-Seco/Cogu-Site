export default async (ctx, canvas, game, Listener, functions) => {
    let playerScoreElement = document.getElementById('playerScore')

    playerScoreElement.innerText = `ERROR_SCORE [${("00000"+game.state.playerInfo.score).slice(-5)}]`
}
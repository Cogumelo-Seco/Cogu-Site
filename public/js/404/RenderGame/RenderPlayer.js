export default async (ctx, canvas, game, Listener, functions) => {
    let playerInfo = game.state.playerInfo
    let screenInfo = game.state.screenInfo

    
    ctx.shadowColor = game.state.colors['snakeBodyShadow'];
    ctx.shadowBlur = 12;

    for (let trace of playerInfo.traces) {
        ctx.fillStyle = game.state.colors['snakeBody']
        ctx.globalAlpha = 0.5
        ctx.fillRect(trace.x*screenInfo.tileSize, trace.y*screenInfo.tileSize, screenInfo.tileSize, screenInfo.tileSize)
    }

    ctx.fillStyle = game.state.colors['snakeHead']
    ctx.globalAlpha = 1
    ctx.fillRect(playerInfo.x*screenInfo.tileSize, playerInfo.y*screenInfo.tileSize, screenInfo.tileSize, screenInfo.tileSize)
}
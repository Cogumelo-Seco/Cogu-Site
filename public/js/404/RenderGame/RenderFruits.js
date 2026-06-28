export default async (ctx, canvas, game, Listener, functions) => {
    let x = game.state.fruit.x*game.state.screenInfo.tileSize
    let y = game.state.fruit.y*game.state.screenInfo.tileSize
    let size = game.state.screenInfo.tileSize

    ctx.save();

    ctx.shadowColor = game.state.colors.glowPurple;
    ctx.shadowBlur = 12;

    ctx.fillStyle = game.state.colors.food;
    ctx.beginPath();
    ctx.moveTo(x + size / 2, y + 2);
    ctx.lineTo(x + size - 3, y + size / 2);
    ctx.lineTo(x + size / 2, y + size - 2);
    ctx.lineTo(x + 3, y + size / 2);
    ctx.closePath();
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = game.state.colors.foodHighlight;
    ctx.fillRect(x + size / 2 - 2, y + 5, 3, 3);

    ctx.restore();
}
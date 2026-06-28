export default async (ctx, canvas, game, Listener, functions) => {
    let animations = game.state.animations
    let text = "GAME OVER";
    let subtext = "sinal perdido...";

    ctx.save();

    ctx.font = "bold 100px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    if (animations.gameOverGlitch.frame > 5 && animations.gameOverGlitch.frame < 10) {
        let frame = animations.gameOverGlitch.frame
        ctx.fillStyle = "rgba(255, 0, 80, 0.75)";
        if (frame%2 == 0) ctx.fillText(text, cx - frame, cy);
        else ctx.fillText(text, cx + frame, cy);

        ctx.fillStyle = "rgba(80, 0, 255, 0.75)";
        if (frame%2 == 0) ctx.fillText(text, cx + frame, cy + frame);
        else ctx.fillText(text, cx - frame, cy - frame);
    } else {
        ctx.fillStyle = "rgba(255, 0, 80, 0.75)";
        ctx.fillText(text, cx - 3, cy);

        ctx.fillStyle = "rgba(80, 0, 255, 0.75)";
        ctx.fillText(text, cx + 3, cy + 2);
    }
    
    ctx.shadowColor = "#ff003c";
    ctx.shadowBlur = 22;
    ctx.fillStyle = "#ff1a1a";
    ctx.fillText(text, cx, cy);

    ctx.font = "bold 20px monospace";

    ctx.globalAlpha = animations.gameOverSubText.frame/animations.gameOverSubText.endFrame
    ctx.shadowColor = "#ff003c";
    ctx.shadowBlur = 22;
    ctx.fillStyle = "#ff1a1a";
    ctx.fillText(subtext, cx, cy+60);
    ctx.globalAlpha = 1

    ctx.restore();
}
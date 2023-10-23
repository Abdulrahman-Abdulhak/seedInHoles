import { Game } from "./game";

export const setUpCanvas = (canvas = new HTMLCanvasElement()) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");

  return ctx;
};

export const init = (canvas = new HTMLCanvasElement()) => {
  const ctx = setUpCanvas(canvas);
  const game = new Game(ctx, canvas.offsetWidth, canvas.offsetHeight);

  const animate = () => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    game.update();
    game.draw();

    requestAnimationFrame(animate);
  };
  animate();

  const resizeCanvas = () => {
    const ctx = setUpCanvas(canvas);

    game.updateContext(ctx);
    game.setSize(ctx.canvas.offsetWidth, ctx.canvas.offsetHeight);
  };

  window.addEventListener("resize", resizeCanvas);
};

import * as tty from "../mod.ts";

await tty.hideCursor();

setInterval(() => {
  tty.clearScreenSync();
  tty.goHomeSync();
  console.log("HELLO WORLD");
}, 200);

await tty.showCursor();

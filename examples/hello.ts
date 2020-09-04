import * as tty from "../mod.ts";

await tty.hideCursor();

let i = 0;

setInterval(() => {
  tty.clearScreenSync();
  tty.goHomeSync();
  console.log(i++);
}, 200);

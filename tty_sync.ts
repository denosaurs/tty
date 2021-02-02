import { encode } from "./util.ts";

import {
  SyncStream,
  RESTORE,
  ESC,
  POSITION,
  HIDE,
  SHOW,
  SCROLL_UP,
  SCROLL_DOWN,
  CLEAR_UP,
  CLEAR_DOWN,
  CLEAR_LEFT,
  CLEAR_RIGHT,
  CLEAR_LINE,
  CLEAR_SCREEN,
  NEXT_LINE,
  PREV_LINE,
  HOME,
  UP,
  DOWN,
  LEFT,
  RIGHT,
} from "./mod.ts";

export function writeSync(str: string, writer: SyncStream): void {
  writer.writeSync(encode(str));
}

export function restoreSync(writer: SyncStream = Deno.stdout): void {
  writeSync(RESTORE, writer);
}

export function cursorSync(
  action: string,
  writer: SyncStream = Deno.stdout,
): void {
  writeSync(ESC + action, writer);
}

export function positionSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(POSITION, writer);
}

export function hideCursorSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(HIDE, writer);
}

export function showCursorSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(SHOW, writer);
}

export function scrollUpSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(SCROLL_UP, writer);
}

export function scrollDownSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(SCROLL_DOWN, writer);
}

export function clearUpSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(CLEAR_UP, writer);
}

export function clearDownSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(CLEAR_DOWN, writer);
}

export function clearLeftSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(CLEAR_LEFT, writer);
}

export function clearRightSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(CLEAR_RIGHT, writer);
}

export function clearLineSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(CLEAR_LINE, writer);
}

export function clearScreenSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(CLEAR_SCREEN, writer);
}

export function nextLineSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(NEXT_LINE, writer);
}

export function prevLineSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(PREV_LINE, writer);
}

export function goHomeSync(writer: SyncStream = Deno.stdout): void {
  cursorSync(HOME, writer);
}

export function goUpSync(y = 1, writer: SyncStream = Deno.stdout): void {
  cursorSync(y + UP, writer);
}

export function goDownSync(y = 1, writer: SyncStream = Deno.stdout): void {
  cursorSync(y + DOWN, writer);
}

export function goLeftSync(x = 1, writer: SyncStream = Deno.stdout): void {
  cursorSync(x + LEFT, writer);
}

export function goRightSync(x = 1, writer: SyncStream = Deno.stdout): void {
  cursorSync(`${x}${RIGHT}`, writer);
}

export function goToSync(
  x: number,
  y: number,
  writer: SyncStream = Deno.stdout,
): void {
  writeSync(ESC + y + ";" + x + HOME, writer);
}

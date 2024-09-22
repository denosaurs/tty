export async function isInteractiveAsync(
  stream: { isTerminal(): boolean },
): Promise<boolean> {
  if (await Deno.permissions.query({ name: "env" })) {
    return (
      stream.isTerminal() &&
      Deno.env.get("TERM") !== "dumb" &&
      !Deno.env.get("CI")
    );
  }
  return stream.isTerminal();
}

export function isInteractive(stream: { isTerminal(): boolean }): boolean {
  return stream.isTerminal();
}

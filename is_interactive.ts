export async function isInteractiveAsync(
  stream: Pick<typeof Deno.stdout, "isTerminal">,
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

export function isInteractive(
  stream: Pick<typeof Deno.stdout, "isTerminal">,
): boolean {
  return stream.isTerminal();
}

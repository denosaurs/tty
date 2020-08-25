export function isInteractive(stream: { rid: number }): boolean {
  if (Deno.permissions.query({ name: "env" })) {
    return (
      Deno.isatty(stream.rid) &&
      Deno.env.get("TERM") !== "dumb" &&
      !Deno.env.get("CI")
    );
  }
  return Deno.isatty(stream.rid);
}

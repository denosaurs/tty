export async function isInteractive(stream: { rid: number }): Promise<boolean> {
  if (await Deno.permissions.query({ name: "env" })) {
    return (
      Deno.isatty(stream.rid) &&
      Deno.env.get("TERM") !== "dumb" &&
      !Deno.env.get("CI")
    );
  }
  return Deno.isatty(stream.rid);
}

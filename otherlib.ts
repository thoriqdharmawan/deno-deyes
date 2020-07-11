import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({port: 3000});
console.log("listening for request on port: 3000")

for await (const req of server) {
  const url = req.url
  req.respond({body: `Hello world, ${url}`})
}
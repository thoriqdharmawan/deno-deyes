// import { serve } from "https://deno.land/std/http/server.ts";

// const server = serve({port: 3000});
// console.log("listening for request on port: 3000")

// for await (const req of server) {
//   const url = req.url
//   req.respond({body: `Hello world, ${url}`})
// }

import { camelCase, constantCase, snakeCase } from "https://deno.land/x/case/mod.ts";

const text = 'hello ini contoh text nya'

const camel = camelCase(text)
const constant = constantCase(text)
const snake = snakeCase(text)

console.log(camel)
console.log(constant)
console.log(snake)
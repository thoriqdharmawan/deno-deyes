import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";

const app = new Application()

// static files
app.static('/', './public')

// Routes
app.get("/", async (ctx: Context) => {
  await ctx.file('./public/index.html')
})

// listen
app.start({port: 3000})
import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
import {
  get_all_books,
  get_book,
  create_book,
  delete_book,
} from "./controllers/bookControllers.ts";

const app = new Application();

// static files
app.static("/", "./public");

// Routes
app.get("/", async (ctx: Context) => {
  await ctx.file("./public/index.html");
});

app
  .get("/books", get_all_books)
  .get("/books/:id", get_book)
  .post("/books", create_book)
  .delete("/books/:id", delete_book);

// listen
app.start({ port: 3000 });

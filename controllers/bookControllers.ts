import { Context } from "https://deno.land/x/abc@v1/mod.ts";
import { Book } from "../models/booksModel.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let books: Book[] = [
  { id: "1", title: "name of book one", author: "THoriq", pages: 100 },
  { id: "2", title: "Book of the books", author: "Biili books", pages: 120 },
  { id: "3", title: "Story child", author: "Zilili", pages: 121 },
];

export const get_all_books = (ctx: Context) => {
  return ctx.json(books, 200);
};

export const get_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    return ctx.json(book, 200);
  }
  return ctx.string("no book with that id", 404);
};

export const create_book = async (ctx: Context) => {
  const { title, author, pages } = await ctx.body();
  // validate data & types of the data
  const id = v4.generate();
  const book = { id, title, author, pages };
  books.push(book);
  return ctx.json(book, 201);
};

export const delete_book = (ctx: Context) => {
  const {id} = ctx.params
  const book = books.find((b: Book) => b.id === id)

  if (book) {
    books = books.filter((b: Book) => b.id !== id)
    return ctx.json(book, 200)
  }
  return ctx.string("no book with that id", 404)
};

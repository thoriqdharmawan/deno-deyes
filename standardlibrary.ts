// uuid module
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate()
console.log(uid)

import { readJson, readJsonSync, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson('data.json')
console.log(jsonObj)

const books = [
  {
    title: 'legend og aang', author: 'zuko'
  },
  {
    title: 'legend og aang2', author: 'zuko2'
  },
]

await writeJson('books.json', books, {spaces: 2})
console.log('books created')
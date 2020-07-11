// Reading Files

// const decoder = new TextDecoder('utf-8')

// const data = await Deno.readFile('readme.txt')
// console.log(decoder.decode(data))

const data = await Deno.readTextFile('readme.txt')
console.log(data)

// Writing files

// const encoder = new TextEncoder()
// const text = encoder.encode('hello, ini teks baru')
// await Deno.writeFile('readme.txt', text)

// // Renameing and removing files

// await Deno.rename('readme.txt', 'deleteme.txt')
// await Deno.remove('deleteme.txt')
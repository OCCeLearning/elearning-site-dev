const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify

const allFiles = fs.readdirSync('./src/')
const htmlFiles = allFiles.filter((file) => path.extname(file) === '.html')

console.log('BUILDING...')
htmlFiles.forEach((file) => {
  fs.readFile(`./src/${file}`, 'utf-8', (err, data) => {
    if (err) throw err
    const result = data
      .replace(/(sm:)/g, 'sm-')
      .replace(/(md:)/g, 'md-')
      .replace(/(lg:)/g, 'lg-')
      .replace(/(xl:)/g, 'xl-')
      .replace(/(hover:)/g, 'hover-')
      .replace(
        /(<link href=\"\/dist\/output\.css\" rel=\"stylesheet\" \/>)/g,
        '<link href="output.css" rel="stylesheet" />'
      )
    const minresult = minify(result, { collapseWhitespace: true })
    fs.writeFile(`./dist/${file}`, minresult, 'utf-8', (err) => {
      if (err) throw err
    })
  })
})
fs.readFile('./dist/output.css', 'utf-8', (err, data) => {
  if (err) throw err
  const result = data
    .replace(/(sm\\:)/g, 'sm-')
    .replace(/(md\\:)/g, 'md-')
    .replace(/(lg\\:)/g, 'lg-')
    .replace(/(xl\\:)/g, 'xl-')
    .replace(/(hover\\:)/g, 'hover-')
  fs.writeFile('./dist/output.css', result, 'utf-8', (err) => {
    if (err) throw err
  })
})

const fs = require('fs')
const path = require('path')

const allFiles = fs.readdirSync('./dist/')
const htmlFiles = allFiles.filter((file) => path.extname(file) === '.html')
console.log('RESTORING...')

htmlFiles.forEach((file) => {
  fs.readFile(`./dist/${file}`, 'utf-8', (err, data) => {
    if (err) throw err
    const result = data
      .replace(/(sm-)/g, 'sm:')
      .replace(/(md-)/g, 'md:')
      .replace(/(lg-)/g, 'lg:')
      .replace(/(xl-)/g, 'xl:')
      .replace(/(hover-)/g, 'hover:')

    fs.writeFile(`./src/restored-${file}`, result, 'utf-8', (err) => {
      if (err) throw err
    })
  })
})

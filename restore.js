const fs = require('fs')

console.log('RESTORING...')

fs.readFile('./dist/index.html', 'utf-8', (err, data) => {
  if (err) throw err
  const result = data
    .replace(/(sm-)/g, 'sm:')
    .replace(/(md-)/g, 'md:')
    .replace(/(lg-)/g, 'lg:')
    .replace(/(xl-)/g, 'xl:')
    .replace(/(hover-)/g, 'hover:')
  fs.writeFile('./src/restored.html', result, 'utf-8', (err) => {
    if (err) throw err
  })
})

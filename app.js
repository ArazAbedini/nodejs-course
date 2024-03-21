
const messgae = require('./note.js')
const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
console.log(chalk.green.inverse.bold('green is the best color!'))
const msg = messgae('hello')
console.log(msg)
yargs.command({
    command: 'list',
    descript: 'list all command',
    handler: function () {
        console.log('list notes!')
    }
})

yargs.command({
    command: 'read',
    descript: 'read all command',
    biulder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(argv.title)
    }
})
yargs.parse()
// const add = require('./utils.js')
// console.log(add(4, 5))



//const name = require('./utile.js')
//console.log(name)
//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'this is test')
//fs.appendFileSync('notes.txt', '\nthis is my challenge')
#!/usr/bin/env node

var fs   = require('fs'),

    lib  = require('./lib/lib.js'),

    cla  = require('command-line-args')(require('./config/args.js')),
    cli  = cla.parse();

if (cli.help) {
  console.log(cla.getUsage(require('./config/usage.json')));
} else {

  try {

    var rsets = cli.input.map(function(ThisFile) { return JSON.parse(fs.readFileSync(ThisFile, 'utf8')); }),
        rules = lib.resolve(rsets),
        res   = lib.act(cli, rules);

  } catch (e) {
    console.log("Caught unknown error: " + JSON.stringify(e));
  }

}
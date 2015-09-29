
'use strict';

var fs   = require('fs'),
    path = require('path');





function build(rules, suffix) {

  var result = '@charset "UTF-8";\n\n';

  for (var i in rules) {
    if (rules.hasOwnProperty(i)) {
      result += (i + ': ' + rules[i] + ';\n');
    }
  }

  if (suffix) {
    result += ('\n' + suffix + '\n');
  }

  return result;

}





function makeSass(rules)      { return build(rules, '@import "node_modules/muicss/src/sass/mui.scss";'); }
function diskSass(rules, tgt) { fs.writeFileSync(tgt, makeSass(rules)); }

function makeEmailSass(rules) { return build(rules, '@import "node_modules/muicss/src/email/mui-email-inline.scss";'); }
function diskESass(rules,tgt) { fs.writeFileSync(tgt, makeEmailSass(rules)); }





function act(cli, rules) {

  console.log("act cli: " + JSON.stringify(cli));
  console.log("act rules: " + JSON.stringify(rules));

  if (cli.mdl)   { diskSass( rules, cli.dir + '/' + path.basename(cli.input[cli.input.length - 1] + '.scss')); }
  if (cli.email) { diskESass(rules, cli.dir + '/' + path.basename(cli.input[cli.input.length - 1] + '.email.scss')); }

}





function resolve(rsets) {

  var rules = {};

  rsets.map(
    function(rset) {

      for (var key in rset) {
        if (rset.hasOwnProperty(key)) {
          rules[key] = rset[key];
        }
      }

    }
  );

  console.log(makeSass(rules));

  return rules;

}





module.exports = {

  resolve : resolve,
  act     : act

};

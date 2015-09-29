
'use strict';





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
function makeEmailSass(rules) { return build(rules, '@import "node_modules/muicss/src/email/mui-email-inline.scss";'); }





function writeSass(rules) {

  return resolveSass(rules)                                    +
         '\n@import "node_modules/muicss/src/sass/mui.scss";\n';

}





function writeEmailSass(rules) {

  return resolveSass(rules)                                                  +
         '\n@import "node_modules/muicss/src/email/mui-email-inline.scss";\n';

}





function writeEmailCss(rules) {

  return resolveSass(rules)                                                  +
         '\n@import "node_modules/muicss/src/email/mui-email-inline.scss";\n';

}





function act(cli, rules) {

  console.log("act cli: " + JSON.stringify(cli));
  console.log("act rules: " + JSON.stringify(rules));

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

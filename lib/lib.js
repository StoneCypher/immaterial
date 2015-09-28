
'use strict';





function resolveSass(rules) {

  var result = '@charset "UTF-8";\n\n';

  for (var i in rules) {
    if (rules.hasOwnProperty(i)) {
      result += (i + ': ' + rules[i] + ';\n');
    }
  }

  return result;

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

  console.log(resolveSass(rules));

  return rules;

}





module.exports = {

  resolve : resolve,
  act     : act

};

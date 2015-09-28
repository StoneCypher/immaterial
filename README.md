# immaterial

Google Material can be customized with just a SASS sheet.  Sadly, wrapper libraries break that.  Let's unbreak them.





## tl;dr

`npm install -g immaterial`
`immaterial yourrules.json`

You should now see `yourrules.scss`, `yourrules.css`, `yourrules.materialui.js`, and `yourrules.ngmaterial.js`.

You may create a `yourrules.json` by copying `lib/material defaults.json` to the main directory, configuring the
rules you're interested in, and if you like, removing the others.





## What's this all about then guvna

So maybe you're at a company that uses more than one frontend strategy - say, `Angular` and `React` (or vanilla and `Ember`,
or `Meteor` and `Riot`, or ... eh.)

And, y'know, at one point people will make the correct observation that UI unification is a Good Thing&trade;.
And they might, sensibly, think Google Material is a good approach to solving that, because ostensibly it's a
nearly pure CSS approach, and that means portability, and yadda yadda.  And a cheer will go up among the devs,
and everyone will get emotionally committed.





## Sounds great!

Then the real world hits.

See, kids, there's only two complete `React` solutions out there, and only one complete `Angular` solution, and of *course*
they're not the vendor ones.  And of *course* they're written by people who think that if you're using their solution, then
your entire company is committed to that frontend tech, and they can just break the CSS thing without consequences.

Which, of course, has consequences.





## Why I oughta

You don't have to.  I already did.

Meet `Immaterial`.  Because that's into what I'm trying to turn this problem.  (Woo tortured sentence structure!  Wooo.)

The idea is simple.

1. Tokenize all the rules that can be represented
1. Make a tiny pluggable build system (aww lookit it's so cute)
1. Consuming one meta-stylesheet, produce N outputs
1. Pre-offer outputs for:
  1. `mdl` (`CSS`) style SASS rulesheet
  1. `Material-UI` (`React`) style imperative API
  1. `ng-material` (`angular`) style imperative API




# Polemic :neckbeard:

`immaterial` is MIT licensed, because viral licenses and newspeak language modification are evil.
Free is ***only*** free when it's free for everyone.


// not in json because the primitive types String and Boolean wouldn't be available

module.exports = [

  { name: "input",       alias: "i", type: String,  defaultOption: true, multiple: true, description: "Name the [bold]{input} source file(s); applied in-order, last-wins" },
  { name: "output",      alias: "o", type: String,                                       description: "[bold]{Output} base name (extension added; defaults last; omit or use hyphen for console out)" },

  { name: "dir",         alias: "d", type: String,  defaultValue:  '.',                  description: "Set the [bold]{output directory} (defaults to '.')" },

  { name: "help",        alias: "h",                                                     description: "Show this [bold]{help text}" },

  { name: "explicit",    alias: "e", type: Boolean, defaultValue: false,                 description: "Spell out the properties not overridden (full override / [bold]{MDL reset})" },

  { name: "verbose",     alias: "v", type: Boolean, defaultValue: false,                 description: "Tool should [bold]{dump diagnostics} while working" },
  { name: "silent",      alias: "s", type: Boolean, defaultValue: false,                 description: "Tool should [bold]{emit nothing} but error codes" },

  { name: "mdl",         alias: "1", type: String,  defaultValue: true,                  description: "Output an [bold]{mdl.css} transform" },
  { name: "css",         alias: "2", type: String,  defaultValue: true,                  description: "Output a compiled [bold]{css} from the SASS" },
  { name: "email",       alias: "3", type: String,  defaultValue: true,                  description: "Output a lightweight email-appropriate [bold]{css}" },
  { name: "material-ui", alias: "4", type: String,  defaultValue: true,                  description: "Output a [bold]{material-ui} transform" },
  { name: "ng-material", alias: "5", type: String,  defaultValue: true,                  description: "Output a [bold]{ng-material} transform" }

];

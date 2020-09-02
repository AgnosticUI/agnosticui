const fs = require('fs');
let css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');
fs.writeFileSync('./src/stories/button.css', css, 'utf8');

css = fs.readFileSync('../agnosticui-css/button-group.css', 'utf8');
/*
  Need to match all three of these:
  .btn-group > button {...
  .btn-group > button:not(:last-child) {...
  .btn-group > button:not(:first-child) {...
  */
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ')
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ')
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ')
fs.writeFileSync('./src/stories/button-group.css', css, 'utf8');
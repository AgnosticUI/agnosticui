const fs = require('fs');
const css = fs.readFileSync('../button.css', 'utf8');
fs.writeFileSync('./src/stories/button.css', css, 'utf8');
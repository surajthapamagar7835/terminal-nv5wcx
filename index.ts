// Import stylesheets
import './style.css';

import { Terminal } from 'xterm';

var term = new Terminal();
term.open(document.getElementById('terminal'));
term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');

term.setOption('cursorBlink', true);

document.addEventListener('keydown', (event: KeyboardEvent) => {
  term.write(event.key);
});
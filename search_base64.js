const fs = require('fs');
const file = fs.readFileSync('dist/carbon-energy-card.js', 'utf8');

// regex to find things that look like base64 strings
const base64Regex = /([A-Za-z0-9+/]{40,}(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?)/g;
let match;
let found = false;

/* Helper to get line number */
function getLineFromPos(str, pos) {
    return str.substring(0, pos).split('\n').length;
}

while ((match = base64Regex.exec(file)) !== null) {
    const raw = match[1];
    try {
        const decoded = Buffer.from(raw, 'base64').toString('utf8');
        if (decoded.toLowerCase().includes('lumina')) {
            const lineNum = getLineFromPos(file, match.index);
            console.log(`Found "lumina" in base64 on line ${lineNum}!`);
            console.log('Decoded:', decoded);
            found = true;
        }
    } catch (e) {
        // Ignore decode errors
    }
}

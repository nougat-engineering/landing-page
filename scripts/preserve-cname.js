const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'out');
const cnamePath = path.join(outDir, 'CNAME');

try {
  const ghPagesCname = execSync('git show origin/gh-pages:CNAME 2>/dev/null', { encoding: 'utf-8' }).trim();
  if (ghPagesCname) {
    fs.writeFileSync(cnamePath, ghPagesCname);
    console.log('✓ CNAME preserved from gh-pages branch');
  } else {
    console.log('⚠ No CNAME found in gh-pages branch');
  }
} catch (error) {
  console.log('⚠ Could not retrieve CNAME from gh-pages branch');
}


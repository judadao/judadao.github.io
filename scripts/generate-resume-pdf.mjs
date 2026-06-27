import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';

const port = 4174;
const baseUrl = `http://127.0.0.1:${port}`;
const isWindows = process.platform === 'win32';

function commandArgs(command, args) {
  if (!isWindows) {
    return [command, args];
  }

  return ['cmd.exe', ['/d', '/s', '/c', command, ...args]];
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const [spawnCommand, spawnArgs] = commandArgs(command, args);
    const child = spawn(spawnCommand, spawnArgs, {
      shell: false,
      stdio: 'inherit',
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(' ')} exited with ${code}`));
      }
    });
  });
}

async function waitForServer() {
  const started = Date.now();

  while (Date.now() - started < 60000) {
    try {
      const response = await fetch(`${baseUrl}/resume`);
      if (response.ok) {
        return;
      }
    } catch {
      // Server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error('Timed out waiting for static server');
}

await run('npm', ['run', 'build']);

const [serveCommand, serveArgs] = commandArgs('npx', [
  'serve',
  'out',
  '-l',
  String(port),
]);
const serve = spawn(serveCommand, serveArgs, {
  shell: false,
  stdio: 'inherit',
});

try {
  await waitForServer();
  await mkdir('public/assets', { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: {
      width: 794,
      height: 1123,
    },
  });

  await page.goto(`${baseUrl}/resume`, { waitUntil: 'networkidle' });
  await page.pdf({
    path: 'public/assets/English_CV.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    preferCSSPageSize: true,
  });

  await browser.close();
} finally {
  serve.kill();
}

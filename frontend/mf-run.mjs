import { readdirSync } from 'fs';
import { resolve } from 'node:path';
import { spawn } from 'child_process';
import { parseArgs } from 'node:util';

const args = process.argv;

const options = {
  help: {
    type: 'boolean',
    short: 'h'
  },
};

const optionsConfig = {
  allowPositionals: true,
  strict: true
}

const { values, positionals } = parseArgs({ args, options, ...optionsConfig});

function printHelp() {
  process.stdout.write(
    `
      run a command for all microfrontends in the specified directory.
      Usage: node mf-run.js <path to microfrontends> <command> [<command arguments>...]
    `
  );
}

if (values.help) {
  printHelp();
  process.exit(0);
}

// [0] is `node` binary
// [1] is `mf-run.js`
// [2] is `microfrontends root directory'
// [3] is `command`

if (positionals.length < 3) {
  console.error('microfrontend root is not specified');
  printHelp();
  process.exit(1);
}
const mfRoot = positionals[2];
if (positionals.length < 4) {
  console.error('command is not specified');
  printHelp();
  process.exit(1);
}
const cmd = positionals[3];
const cmdArgs = positionals.slice(4);

const children = readdirSync(mfRoot, {withFileTypes: true})
  .filter((item) => item.isDirectory())
  .map((mf) => {
    const cwd = resolve(mfRoot, mf.name);
    const stdio = ['inherit', 'pipe', 'pipe'];
    console.debug(`[${mf.name}] running \`${cmd} ${cmdArgs.join(' ')}\` in ${cwd}`);
    const child = spawn(cmd, cmdArgs, {cwd, stdio});
    child.stdout.on('data', (data) => {
      console.log(`[${mf.name}] ${data}`);
    });
    child.stderr.on('data', (data) => {
      console.error(`[${mf.name}] ${data}`);
    });
    return new Promise((resolve) => {
      child.on('error', (err) => {
        console.error(`[${mf.name}] failed to run \`${cmd} ${cmdArgs.join(' ')}\`: ${err}`);
        resolve(127);
      })
      child.on('exit', (code) => {
        console.log(`[${mf.name}] command \`${cmd} ${cmdArgs.join(' ')}\` exit code ${code}`);
        resolve(code);
      })
    });
  });

const exitCodes = await Promise.all(children);
process.exit(exitCodes.every((exitCode) => exitCode == 0) ? 0 : 1);

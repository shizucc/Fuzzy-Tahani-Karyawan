const yargs = require('yargs');

// Define the first command
yargs.command('command1', 'Description of command 1', (yargs) => {
  // Configure command 1 options
}, (argv) => {
  // Handle command 1 logic
  console.log('Executing command 1');
});

// Define the second command
yargs.command('command2', 'Description of command 2', (yargs) => {
  // Configure command 2 options
}, (argv) => {
  // Handle command 2 logic
  console.log('Executing command 2');
});

// Parse the command-line arguments
yargs.parse();

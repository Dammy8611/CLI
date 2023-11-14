#! /usr/bin/env node

const yargs = require("yargs");

yargs
  .command({
    command: "greet",
    describe: "Greet the user",
    handler: () => {
      console.log("Hello, user!");
    },
  })

  .command({
    command: "*",
    describe: "Command not found",
    handler: (argv) => {
      if (argv._.length === 0) {
        console.log(argv);
        return;
      }
      console.log(`Command not found: ${argv._.join(" ")}`);
    },
  })
  .demandCommand(1, "Please provide a command.")
  .parse();

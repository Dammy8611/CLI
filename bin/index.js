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
    command: "node",
    describe: "Run node",
    handler: (argv) => {
      console.log("npm");
    },
  })

  .command({
    command: "*",
    describe: "",
    handler: (argv) => {
      if (argv._.length === 0) {
        console.log(
          "Welcome to jar (I wanted to write jarvis but my keyboard is acting up)"
        );
        console.log("Run jar help for more info");
        return;
      }
      console.log(`Command not found: ${argv._.join(" ")}`);
    },
  })
  .demandCommand(1, "Please provide a command.")
  .parse();

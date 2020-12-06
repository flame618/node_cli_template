const program = require("commander");
function initProgram() {
  program.version("1.0.0");
  /**写入命令代码 */
  program
    .command("init <name>")
    .option("-r, --param1 <param1>", "参数1")
    .option("-o, --param2 <param2>", "参数2")
    .action(async (name, obj) => {
      console.log(name);
      console.log(obj.param1);
      console.log(obj.param2);
    });
  
  program.parse(process.argv);
}

module.exports = {
  initProgram
}
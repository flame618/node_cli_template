const program = require("commander");
const pkg = require("../package.json")
function initProgram() {
  program.version(pkg.version);
  /**写入命令代码 */
  program
    .command("init <name>")
    .option("-r, --param1 <param1>", "参数1")
    .option("-o, --param2 <param2>", "参数2")
    .option("-i --param3", "参数3")
    .action(async (name, obj) => {
      console.log(name);
      console.log(obj.param1);
      console.log(obj.param2);
      console.log(obj.param3);
    });
  
  program.parse(process.argv);
}

module.exports = {
  initProgram
}
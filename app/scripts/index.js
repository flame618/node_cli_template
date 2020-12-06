const program = require("commander");
function initProgram() {
  program.version("1.0.0");
  /**写入命令代码 */
  program.parse(process.argv);
}

module.exports = {
  initProgram
}
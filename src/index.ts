export class Log {
  static textV(msg: string) {
    console.log(`%c ${msg}`, "color:violet");
  }
  static textI(msg: string) {
    console.log(`%c ${msg}`, "color:indigo");
  }
  static textB(msg: string) {
    console.log(`%c ${msg}`, "color:blue");
  }
  static textG(msg: string) {
    console.log(`%c ${msg}`, "color:green");
  }
  static textY(msg: string) {
    console.log(`%c ${msg}`, "color:yellow");
  }
  static textO(msg: string) {
    console.log(`%c ${msg}`, "color:orange");
  }
  static textR(msg: string) {
    console.log(`%c ${msg}`, "color:red");
  }
  static bgV(msg: string) {
    console.log(`%c ${msg}`, "background:violet;color:black");
  }
  static bgI(msg: string) {
    console.log(`%c ${msg}`, "background:indigo");
  }
  static bgB(msg: string) {
    console.log(`%c ${msg}`, "background:blue");
  }
  static bgG(msg: string) {
    console.log(`%c ${msg}`, "background:green");
  }
  static bgY(msg: string) {
    console.log(`%c ${msg}`, "background:yellow;color:black");
  }
  static bgO(msg: string) {
    console.log(`%c ${msg}`, "background:blue;color:black");
  }
  static bgR(msg: string) {
    console.log(`%c ${msg}`, "background:red");
  }
}

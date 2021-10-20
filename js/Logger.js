class Logger {
  constructor(textColor) {
    this.headerStyle = `color:${textColor};font-size:16px;`;
    this.titleStyle = this.headerStyle + 'margin-top:15px;';
    this.logStyle = `color:${textColor};`;
  }
  header(...args) {
    console.log('%c%s', this.headerStyle, ...args);
  }
  title(...args) {
    console.log('%c%s', this.titleStyle, ...args);
  }
  log(...args) {
    console.log('%c%s', this.logStyle, ...args);
  }
}

const COLOURS = {
  trace: '#aaa',
  info: 'blue',
  warn: 'pink',
  error: 'red'
};

class Log {
  private debug = true

  

  generateMessage(level: 'trace' | 'info' | 'warn' | 'error', message : unknown | unknown[], source : string| null, group ?: 'start' | 'end') {
    if (!this.debug) {return}

    var textColor = COLOURS[level];

    if(!group){
      if(typeof message === "object"){
        let _message = ''
        try { 
          _message = JSON.parse(JSON.stringify(message))
        } catch (err) {_message = 'Cyclic Object'}

        console.log("%c"+source+"  ||  %c"+ _message, "color:#000;", "color:"+textColor+";")
      } else {
        console.log("%c"+source+"  ||  %c"+message, "color:#000;", "color:"+textColor+";")
      }

    } else if(group === "start") {
      console.group("%c"+source+"  ||  %c"+message, "color:#000;", "color:"+textColor+";")
    } else if(group === "end"){
      console.groupEnd();
    }

  }

  trace(message: unknown | unknown[], source: string | null, group ?: 'start' | 'end') {
    return this.generateMessage('trace', message, source, group);
  }

  info(message: unknown | unknown[], source: string | null, group ?: 'start' | 'end') {
    return this.generateMessage('info', message, source, group);
  }

  warn(message: unknown | unknown[], source: string | null, group ?: 'start' | 'end') {
    return this.generateMessage('warn', message, source, group);
  }

  error(message: unknown | unknown[], source: string | null, group ?: 'start' | 'end') {
    return this.generateMessage('error', message, source, group);
  }
}

export default new Log();
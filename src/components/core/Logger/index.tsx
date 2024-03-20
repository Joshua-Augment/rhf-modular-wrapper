const COLOURS = {
  trace: "#aaa",
  info: "blue",
  warn: "pink",
  error: "red",
};

class Log {
  private debug = false;

  generateMessage(level: "trace" | "info" | "warn" | "error", message: unknown | unknown[], source: string | null, group?: "start" | "end") {
    if (!this.debug) {
      return;
    }

    var textColor = COLOURS[level];

    if (!group) {
      if (typeof message === "object") {
        let _message = "";
        try {
          _message = JSON.parse(JSON.stringify(message));
        } catch (err) {
          _message = "Cyclic Object";
        }

        console.log("%c" + source + "  ||  %c" + _message, "color:#000;", "color:" + textColor + ";");
      } else {
        console.log("%c" + source + "  ||  %c" + message, "color:#000;", "color:" + textColor + ";");
      }
    } else if (group === "start") {
      console.group("%c" + source + "  ||  %c" + message, "color:#000;", "color:" + textColor + ";");
    } else if (group === "end") {
      console.groupEnd();
    }
  }

  trace(debug : boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end") {
    this.debug = debug;
    return this.generateMessage("trace", message, source, group);
  }

  info(debug : boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end") {
    this.debug = debug;
    return this.generateMessage("info", message, source, group);
  }

  warn(debug : boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end") {
    this.debug = debug;
    return this.generateMessage("warn", message, source, group);
  }

  error(debug : boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end") {
    this.debug = debug;
    return this.generateMessage("error", message, source, group);
  }

  nullifyCircular(obj: Record<any, any>):Record<any, any>|null {
    // Base case: if obj is not an object, return it as it is
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    // If obj is an HTMLInputElement, nullify it
    if (obj instanceof HTMLInputElement) {
      return null;
    }

    // Recursively process arrays
    if (Array.isArray(obj)) {
      return obj.map((item:any) => this.nullifyCircular(item));
    }

    // Recursively process objects
    const newObj:Record<any,any> = {};
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = this.nullifyCircular(obj[key]);
      }
    }
    return newObj;
  }
}

export default new Log();

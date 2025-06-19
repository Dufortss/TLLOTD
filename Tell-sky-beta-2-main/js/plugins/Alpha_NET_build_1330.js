/*
 * Official Web Page
 * <https: //kagedesuworkshop.blogspot.com/p/alpha-net.html>
 *
 * License
 * Creative Commons 4.0 Attribution, Share Alike, Non-Commercial
 * <https://creativecommons.org/licenses/by-nc-sa/4.0/>
 *
 * Copyright (c) 2020 Vladimir Skrypnikov (Pheonix KageDesu)
 * <https://kagedesuworkshop.blogspot.ru/>
 *
 */

//=============================================================================
// Alpha_NET
//=============================================================================

/*:
 * @author Pheonix KageDesu
 * @plugindesc Build 1330[Pro] Network system(Beta)
 * @help
 * 
 * Web Page: 
 * https://kagedesuworkshop.blogspot.com/p/alpha-net.html
 * Wiki Page: 
 * https://github.com/KageDesu/AlphaNET/wiki
 * Patreon Page: 
 * https://www.patreon.com/KageDesu
 * YouTube Channel:
 * https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 * 
 * Thanks to ALL my patrons!!!
 * 
 * And Special thanks to:
 * 
 * Plugin sponsor
 *  - Lombok Meals
 * 
 * Plugin partners:
 *  - Fiquei
 * 
 * Plugin supporters+:
 * - Ans Ank
 * 
 * Plugin supporters:
 *  - Donald Derrick
 *  - Timothy Barry
 *  - Coops
 *  - Rick Aston
 *  - The Sandbox Games Database (https://merchantlegends.com/)
 *  - Jonathan Pate
 *  - Bryan Larson
 *  - Matheus Peixoto
 *  - Cameron Mills
 *  - freezEpic
 *  - 于 堃
 *  - EVOL ONE
 *  - Jamar Carter
 * 
 * Plugin testers:
 *  - SMO_Valadorn
 *  - Zee
 * 
 * ==============================================================
 * Plugin Commands
 * ==============================================================
 *  --- Game Host ---
 * NET start - start server (only for PC)
 * NET hotSeat - start split screen
 *    (server must be started on your PC first)
 * NET stop - stop server
 * 
 * NET restrict - disable connection other players to the game
 * NET allow - enable connection to the game
 * 
 *  --- Game Client ---
 * NET connect - join to the game
 * NET disconnect - left the game
 * 
 * [!] Please read Wiki Page for more information and documentation
 * 
 * === === === === === === === === === === === === === === === === ===
 * 
 * @param Alpha NET
 * 
 * @param IPConfig
 * @parent Alpha NET
 * @text IP Adress and Port
 * @type string
 * @default 127.0.0.1:3032
 * @desc Default IP Adress
 * 
 * @param GameMode
 * @parent Alpha NET
 * @type combo
 * @text Game Mode
 * @option Cooperative
 * @option Multiplayer
 * @default Cooperative
 * @desc Read more about game modes on Wiki Page
 * 
 * @param ActorsForPlayers
 * @parent Alpha NET
 * @text Actors for players
 * @type string
 * @default 1, 2, 3, 4
 * @desc Actor ID for each player, separate by comma. Actors count = how many players can join to the game
 * 
 * @param UseActorSelectWindow
 * @parent Alpha NET
 * @text Allow Select Character?
 * @type boolean
 * @default true
 * @desc Can players select character when connect to the game
 * 
 * @param ShowPlayerInParty
 * @parent Alpha NET
 * @text Party List in Multiplayer GM?
 * @type boolean
 * @default true
 * @desc Show another players in your party in Multiplayer GM
 * 
 * @param UseInGameChat
 * @parent Alpha NET
 * @text Use in-game chat?
 * @type boolean
 * @default true
 * @desc Can players use in-game chat
 * 
 * @param UseHotKeys
 * @parent Alpha NET
 * @text Use network hotkeys?
 * @type boolean
 * @default false
 * @desc F6 (start), F7 (connect), F9(disconnect), F11(hotSeat)
 * 
 * @param UsePvP
 * @parent Alpha NET
 * @text Allow PvP?
 * @type boolean
 * @default true
 * @desc Can players fight with each other (PvP) in multiplayer game mode
 * 
 * @param PvPDisabledMaps
 * @parent UsePvP
 * @text Maps with PvP restriction
 * @type string
 * @default 0
 * @desc Maps ID's separated by comma, for expl: 1, 2, 3
 * 
 * @param UseTrade
 * @parent Alpha NET
 * @text Allow Trade?
 * @type boolean
 * @default true
 * @desc Can players trades items with each other
 * 
 * @param NetworkEvents
 * @text Network Events
 * @parent Alpha NET
 * @type string
 * @default --- --- --- --- ---
 * 
 * @param ServerStarted
 * @text On Server Started
 * @parent NetworkEvents
 * @type number
 * @default 0
 * @desc CommonEvent ID, called when Server get started (only for host)
 * 
 * @param OnConnect
 * @text On Join
 * @parent NetworkEvents
 * @type number
 * @default 0
 * @desc CommonEvent ID, called when you join the game
 * 
 * @param OnDisconect
 * @text On Disconect
 * @parent NetworkEvents
 * @type number
 * @default 0
 * @desc CommonEvent ID, called when you lost connection with game
 * 
 * @param OnOtherCon
 * @text On Another Join
 * @parent NetworkEvents
 * @type number
 * @default 0
 * @desc CommonEvent ID, called when another player join your game
 * 
 * @param OnOtherDisc
 * @text On Another Left
 * @parent NetworkEvents
 * @type number
 * @default 0
 * @desc CommonEvent ID, called when another player left your game
 * 
 * @param OnPvPEnd
 * @text On PvP Battle End
 * @parent NetworkEvents
 * @type number
 * @default 0
 * @desc CommonEvent ID, called when PvP battle ends (only for PvP participants)
 * 
 * @param NetworkUI
 * @text UI Settings
 * @parent Alpha NET
 * @type string
 * @default --- --- --- --- ---
 * 
 * @param NameplatesMode
 * @parent NetworkUI
 * @type combo
 * @text Nameplate display mode
 * @option Others
 * @option All
 * @option Never
 * @default Others
 * @desc How display players names above characters
 * 
 */

//Show NET Icons?
//Show ICON while Chat?
//Show ICON while Wait?
//Show ICON while Menu?
//PICs for All Three Icons (стандартные хранить в памяти?)


//@[CODE STANDARD X2]

/* jshint -W097 */
/* jshint -W117 */

"use strict";

var Imported = Imported || {};
Imported.AlphaNET = true;

var AlphaNET = {};
AlphaNET.Build = 1330;

//? GLOBAL SHORTCUT
window.ANET = AlphaNET;

AlphaNET._define = 'build';

AlphaNET.Versions = {
    'KDCore': '1.2',
    'NET': AlphaNET.Build,
    'Socket.io': '2.0.4',
    'CoffeeScript CLI': '2.3.1'
};

AlphaNET.LIBS = {};

AlphaNET.register = function (library) {
    this.LIBS[library.name] = library;
};

AlphaNET.isDEV = function () {
    return AlphaNET._define == 'dev';
};

// ------------------------- MAIN MODULES ---------------------------------
function Network() {
    throw new Error('This is a static class');
}

function NetPartyManager() {
    throw new Error('This is a static class');
}

function MakerManager() {
    throw new Error('This is a static class');
}

function HotSeatKeyMapper() {
    throw new Error('This is a static class');
}

function NetWorldManager() {
    throw new Error('This is a static class');
}

function InfoPrinter() {
    throw new Error('This is a static class');
}

function NetUIManager() {
    throw new Error('This is a static class');
}
// -------------------------------------------------------------------------

//@[GLOBAL DEFINITON]
function executeFunctionByName(functionName, context /*, args */ ) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

(function () {
    //@[ALIAS]
    var _SceneManager_catchException_NET = SceneManager.catchException;
    SceneManager.catchException = function (e) {
        AlphaNET._printPluginInfo();
        _SceneManager_catchException_NET.call(this, e);
        AlphaNET._showDevTools();
    };

    //@[ALIAS]
    var _SceneManager_onError_NET = SceneManager.onError;
    SceneManager.onError = function (e) {
        AlphaNET._printPluginInfo();
        _SceneManager_onError_NET.call(this, e);
        AlphaNET._showDevTools();
    };

    // * Данный метод отвечает чтобы при загрузке сохранённой игры нашлись классы библиотек
    //@[ALIAS]
    var _JsonEx_decode = JsonEx._decode;
    JsonEx._decode = function (value, circular, registry) {
        var type = Object.prototype.toString.call(value);
        if (type === '[object Object]' || type === '[object Array]') {
            if (value['@']) {
                var constructor = AlphaNET.LIBS[value['@']] || KDCore[value['@']];
                if (constructor) {
                    value = this._resetPrototype(value, constructor.prototype);
                    value['@'] = null;
                }
            }
        }
        return _JsonEx_decode.call(this, value, circular, registry);
    };
})();

// -------------------------------------------------------------------------

// * Вывод текста
AlphaNET.print = function (message) {
    if (AlphaNET._warningLog == undefined) {
        AlphaNET._warningLog = new KDCore.DevLog('Alpha NET');
        AlphaNET._warningLog.setColors(KDCore.Color.ORANGE, KDCore.Color.BLACK.getLightestColor(60));
        AlphaNET._warningLog.on();
    }
    if (message) {
        AlphaNET._warningLog.p(message);
    }
};

// * Просто предупреждение в консоль
AlphaNET.warning = function (message, error = null) {
    console.warn("Alpha NET warning!");
    if (error)
        AlphaNET.print(message + ": " + error.message);
    else
        AlphaNET.print(message);
};

// * Критическая ошибка -> завершение приложения
AlphaNET.criticalError = function (error, message) {
    AlphaNET.error(null, message);
    SceneManager.catchException(error);
};

AlphaNET._printPluginInfo = function () {
    console.error("Using Alpha NET [Build: " + AlphaNET.Build + " ; on MV  " + Utils.RPGMAKER_VERSION + "]");
};

AlphaNET._showDevTools = function () {
    if (Utils.isNwjs()) {
        require('nw.gui').Window.get().showDevTools();
    }
};

// * Ошибка с предупреждением пользователя
AlphaNET.error = function (error, message) {
    if (AlphaNET._errorLog == undefined) {
        AlphaNET._errorLog = new KDCore.DevLog('ANET Error');
        AlphaNET._errorLog.setColors(KDCore.Color.RED, KDCore.Color.BLACK.getLightestColor(225));
        AlphaNET._errorLog.on();
    }
    console.error(error);
    if (message) {
        AlphaNET._errorLog.p(message);
        AlphaNET.alert(message);
    }
};

AlphaNET.alert = function (message) {
    if (message) {
        alert(message);
    }
};

// * Лог для разработки
AlphaNET.log = function (message, obj) {
    if (!ANET.isDEV()) {
        return;
    }
    if (AlphaNET._devLog == undefined) {
        AlphaNET._devLog = new KDCore.DevLog('ANET');
        AlphaNET._devLog.setColors(KDCore.Color.FromHex("#04BED9"), KDCore.Color.BLACK.getLightestColor(30));
        AlphaNET._devLog.on();
    }
    if (message) {
        if (!obj)
            AlphaNET._devLog.p(message);
        else
            AlphaNET._devLog.p(obj.constructor.name + " : " + message);
    }
};
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ KDCore.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//?{rev: 10.01.2020}
var KDCore;

KDCore = KDCore || {};

KDCore.Version = '1.3';

KDCore.LIBS = {};

KDCore.register = function(library) {
  return this.LIBS[library.name] = library;
};

(function() {
  var BitmapSrc, Color, DevLog, ParametersManager, SDK, StringsLoader, __TMP_LOGS__, ___Sprite_alias_Move_KDCORE, __alias_Bitmap_fillAll;
  //Array Extension
  //------------------------------------------------------------------------------
  Array.prototype.delete = function() {
    var L, a, ax, what;
    what = void 0;
    a = arguments;
    L = a.length;
    ax = void 0;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  Array.prototype.include = function(value) {
    return this.indexOf(value) !== -1;
  };
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  Array.prototype.sample = function() {
    if (this.length === 0) {
      return [];
    }
    return this[SDK.rand(0, this.length - 1)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.shuffle = function() {
    var k, n, v;
    n = this.length;
    while (n > 1) {
      n--;
      k = SDK.rand(0, n + 1);
      v = this[k];
      this[k] = this[n];
      this[n] = v;
    }
  };
  Array.prototype.count = function() {
    return this.length;
  };
  Array.prototype.isEmpty = function() {
    return this.length === 0;
  };
  //Number Extension
  //------------------------------------------------------------------------------
  Number.prototype.do = function(method) {
    return SDK.times(this, method);
  };
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
  //Sprite Extension
  //------------------------------------------------------------------------------
  Sprite.prototype.moveToCenter = function(dx = 0, dy = 0) {
    return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
  };
  Sprite.prototype.setStaticAnchor = function(floatX, floatY) {
    this.x -= Math.round(this.width * floatX);
    this.y -= Math.round(this.height * floatY);
  };
  Sprite.prototype.moveToParentCenter = function() {
    if (!this.parent) {
      return;
    }
    return this.move(this.parent.width / 2, this.parent.height / 2);
  };
  ___Sprite_alias_Move_KDCORE = Sprite.prototype.move;
  Sprite.prototype.move = function(x, y) {
    if (x instanceof Array) {
      return ___Sprite_alias_Move_KDCORE.call(this, x[0], x[1]);
    } else if (x instanceof PointX) {
      return ___Sprite_alias_Move_KDCORE.call(this, x.x, x.y);
    } else if (typeof AAPoint !== "undefined" && x instanceof AAPoint) {
      return ___Sprite_alias_Move_KDCORE.call(this, x.x, x.y);
    } else {
      return ___Sprite_alias_Move_KDCORE.call(this, x, y);
    }
  };
  //Bitmap Extension
  //------------------------------------------------------------------------------
  __alias_Bitmap_fillAll = Bitmap.prototype.fillAll;
  Bitmap.prototype.fillAll = function(color) {
    if (color instanceof KDCore.Color) {
      return this.fillRect(0, 0, this.width, this.height, color.CSS);
    } else {
      return __alias_Bitmap_fillAll.call(this, color);
    }
  };
  Bitmap.prototype.drawIcon = function(x, y, icon, size = 32) {
    var bitmap;
    bitmap = null;
    if (icon instanceof Bitmap) {
      bitmap = icon;
    } else {
      bitmap = BitmapSrc.LoadFromIconIndex(icon).bitmap;
    }
    return this.drawOnMe(bitmap, x, y, size, size);
  };
  Bitmap.prototype.drawOnMe = function(bitmap, x = 0, y = 0, sw = 0, sh = 0) {
    if (sw <= 0) {
      sw = bitmap.width;
    }
    if (sh <= 0) {
      sh = bitmap.height;
    }
    this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
  };
  Bitmap.prototype.drawTextFull = function(text, position = 'center') {
    return this.drawText(text, 0, 0, this.width, this.height, position);
  };
  //String Extenstion
  //------------------------------------------------------------------------------
  String.prototype.replaceAll = function(search, replacement) {
    var target;
    target = this;
    return target.split(search).join(replacement);
  };
  //SDK
  //------------------------------------------------------------------------------
  SDK = function() {
    throw new Error('This is a static class');
  };
  SDK.rand = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  SDK.setConstantToObject = function(object, constantName, constantValue) {
    object[constantName] = constantValue;
    if (typeof object[constantName] === 'object') {
      Object.freeze(object[constantName]);
    }
    Object.defineProperty(object, constantName, {
      writable: false
    });
  };
  SDK.convertBitmapToBase64Data = function(bitmap) {
    return bitmap._canvas.toDataURL('image/png');
  };
  SDK.times = function(times, method) {
    var i, results;
    i = 0;
    results = [];
    while (i < times) {
      method(i);
      results.push(i++);
    }
    return results;
  };
  SDK.toGlobalCoord = function(layer, coordSymbol = 'x') {
    var node, t;
    t = layer[coordSymbol];
    node = layer;
    while (node) {
      t -= node[coordSymbol];
      node = node.parent;
    }
    return (t * -1) + layer[coordSymbol];
  };
  SDK.isInt = function(n) {
    return Number(n) === n && n % 1 === 0;
  };
  SDK.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
  };
  SDK.checkSwitch = function(switchValue) {
    if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
      return true;
    }
    return false;
  };
  SDK.toNumber = function(string, none = 0) {
    var number;
    if (string == null) {
      return none;
    }
    number = Number(string);
    if (isNaN(number)) {
      return none;
    }
    return number;
  };
  //Color
  //------------------------------------------------------------------------------
  Color = class Color {
    constructor(r1 = 255, g1 = 255, b1 = 255, a1 = 255) {
      this.r = r1;
      this.g = g1;
      this.b = b1;
      this.a = a1;
    }

    getLightestColor(lightLevel) {
      var bf, newColor, p;
      bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
      p = 0;
      newColor = [0, 0, 0, 0];
      if (bf - lightLevel >= 0) {
        if (bf >= 0) {
          p = Math.abs(bf - lightLevel) / lightLevel;
        }
        newColor = this.ARR.map(function(c) {
          return c - (p * c);
        });
      } else {
        if (bf >= 0) {
          p = (lightLevel - bf) / (255 - bf);
        }
        newColor = this.ARR.map(function(c) {
          return [(255 - c) * p + c, 255].min();
        });
      }
      return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
    }

    clone() {
      return this.reAlpha(this.a);
    }

    reAlpha(newAlpha) {
      return new Color(this.r, this.g, this.b, newAlpha || 255);
    }

    static AddConstantColor(name, color) {
      color.toHex();
      color.toArray();
      color.toCSS();
      SDK.setConstantToObject(Color, name, color);
    }

    toHex() {
      var b, g, r;
      if (this._colorHex != null) {
        return this._colorHex;
      }
      r = Math.floor(this.r).toString(16).padStart(2, "0");
      g = Math.floor(this.g).toString(16).padStart(2, "0");
      b = Math.floor(this.b).toString(16).padStart(2, "0");
      return this._colorHex = '#' + r + g + b;
    }

    toArray() {
      if (this._colorArray != null) {
        return this._colorArray;
      }
      return this._colorArray = [this.r, this.g, this.b, this.a];
    }

    toCSS() {
      var na, nb, ng, nr;
      if (this._colorCss != null) {
        return this._colorCss;
      }
      nr = Math.round(this.r);
      ng = Math.round(this.g);
      nb = Math.round(this.b);
      na = this.a / 255;
      return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
    }

    toNumber() {
      return Number(this.toHex().replace("#", "0x"));
    }

    static Random() {
      var a, b, c;
      a = SDK.rand(1, 254);
      b = SDK.rand(1, 254);
      c = SDK.rand(1, 254);
      return new Color(a, b, c, 255);
    }

    static FromHex(hexString) {
      var color, result;
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
      color = null;
      if (result != null) {
        color = {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        };
      }
      if (color != null) {
        return new Color(color.r, color.g, color.b, 255);
      } else {
        return Color.NONE;
      }
    }

  };
  Object.defineProperties(Color.prototype, {
    R: {
      get: function() {
        return this.r;
      },
      configurable: true
    },
    G: {
      get: function() {
        return this.g;
      },
      configurable: true
    },
    B: {
      get: function() {
        return this.b;
      },
      configurable: true
    },
    A: {
      get: function() {
        return this.a;
      },
      configurable: true
    },
    ARR: {
      get: function() {
        return this.toArray();
      },
      configurable: true
    },
    CSS: {
      get: function() {
        return this.toCSS();
      },
      configurable: true
    },
    HEX: {
      get: function() {
        return this.toHex();
      },
      configurable: true
    },
    OX: {
      get: function() {
        return this.toNumber();
      },
      configurable: true
    }
  });
  Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));
  Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));
  Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));
  Color.AddConstantColor('RED', new Color(255, 0, 0, 255));
  Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));
  Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));
  Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));
  Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));
  Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));
  Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));
  //DevLog
  //------------------------------------------------------------------------------
  __TMP_LOGS__ = [];
  DevLog = class DevLog {
    constructor(prefix = "") {
      this.prefix = prefix;
      this._isShow = typeof DEV !== 'undefined';
      this._color = Color.BLACK;
      this._backColor = Color.WHITE;
      __TMP_LOGS__.push(this);
    }

    on() {
      this._isShow = true;
      return this;
    }

    off() {
      this._isShow = false;
      return this;
    }

    applyRandomColors() {
      this.applyRandomWithoutBackgroundColors();
      this.setBackColor(Color.Random());
      return this;
    }

    applyRandomWithoutBackgroundColors() {
      this.setColor(Color.Random());
      return this;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setBackColor(backColor) {
      this._backColor = backColor;
      return this;
    }

    applyLibraryColors() {
      this.setColors(new Color(22, 120, 138, 0), Color.WHITE);
      return this;
    }

    setColors(color, backColor) {
      this.setColor(color);
      this.setBackColor(backColor);
      return this;
    }

    applyExtensionColors() {
      this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
      return this;
    }

    applyWarningColors() {
      this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
      return this;
    }

    p(text) {
      if (!this._isShow) {
        return;
      }
      if (text == null) {
        console.log("");
      }
      this._printText(text);
    }

    _printText(text) {
      text = this.prefix + " : " + text;
      if (this._isUsingColor()) {
        return this._printTextWithColors(text);
      } else {
        return console.log(text);
      }
    }

    _isUsingColor() {
      return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
    }

    _printTextWithColors(text) {
      var args;
      args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
      return window.console.log.apply(console, args);
    }

    static CreateForLib(library) {
      var dlog;
      dlog = new DevLog(library.name);
      dlog.applyLibraryColors();
      return dlog;
    }

    static EnableAllLogs() {
      return __TMP_LOGS__.forEach(function(log) {
        return log.on();
      });
    }

  };
  BitmapSrc = (function() {
    //BitmapSrc
    //------------------------------------------------------------------------------
    class BitmapSrc {
      constructor() {
        this.bitmap = null;
      }

      static LoadFromIconIndex(iconIndex) {
        var bs, icon_bitmap, iconset, ph, pw, sx, sy;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[iconIndex] == null) {
          iconset = ImageManager.loadSystem('IconSet');
          pw = Window_Base._iconWidth;
          ph = Window_Base._iconHeight;
          sx = iconIndex % 16 * pw;
          sy = Math.floor(iconIndex / 16) * ph;
          icon_bitmap = new Bitmap(pw, ph);
          icon_bitmap.addLoadListener(function() {
            icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          });
          BitmapSrc.CACHE[iconIndex] = icon_bitmap;
        }
        bs.bitmap = BitmapSrc.CACHE[iconIndex];
        return bs;
      }

      static LoadFromImageFolder(filename) {
        var bs;
        bs = new BitmapSrc();
        bs.bitmap = ImageManager.loadPicture(filename);
        return bs;
      }

      static LoadFromBase64(data, name) {
        var bs;
        bs = new BitmapSrc();
        if (name != null) {
          if (BitmapSrc.CACHE[name] != null) {
            bs.bitmap = BitmapSrc.CACHE[name];
          } else {
            BitmapSrc.CACHE[name] = Bitmap.load(data);
            bs.bitmap = BitmapSrc.CACHE[name];
          }
        } else {
          bs.bitmap = Bitmap.load(data);
        }
        return bs;
      }

      static LoadFromMemory(symbol) {
        var bs;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[symbol] != null) {
          bs.bitmap = BitmapSrc.CACHE[symbol];
        } else {
          bs.bitmap = ImageManager.loadEmptyBitmap();
        }
        return bs;
      }

    };

    BitmapSrc.CACHE = {};

    return BitmapSrc;

  }).call(this);
  //ParametersManager
  //------------------------------------------------------------------------------
  PluginManager.getPluginParametersByRoot = function(rootName) {
    var pluginParameters, property;
    for (property in this._parameters) {
      if (this._parameters.hasOwnProperty(property)) {
        pluginParameters = this._parameters[property];
        if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
          return pluginParameters;
        }
      }
    }
    return PluginManager.parameters(rootName);
  };
  PluginManager.isPluginParametersContentKey = function(pluginParameters, key) {
    return pluginParameters[key] !== void 0;
  };
  ParametersManager = class ParametersManager {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this._cache = {};
      this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
    }

    isLoaded() {
      return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
    }

    isHasParameter(name) {
      return this._parameters[name] != null;
    }

    getString(name) {
      return this._parameters[name];
    }

    convertField(object, fieldName) {
      var e;
      try {
        object[fieldName] = JSON.parse(object[fieldName] || 'false');
      } catch (error) {
        e = error;
        console.error('Error while convert field ' + e.name);
        object[fieldName] = false;
      }
      return object;
    }

    convertImage(object, fieldName) {
      return object[fieldName] = this.loadImage(object[fieldName]);
    }

    loadImage(filename, smooth) {
      var e, path;
      try {
        if (filename) {
          path = filename.split('/');
          filename = path.last();
          path = path.first() + '/';
          return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
        } else {
          return ImageManager.loadEmptyBitmap();
        }
      } catch (error) {
        e = error;
        console.error(e);
        return ImageManager.loadEmptyBitmap();
      }
    }

    getFromCacheOrInit(name, func) {
      var object;
      if (!this.isInCache(name)) {
        if (func != null) {
          object = func.call(this);
          this.putInCache(name, object);
        }
      }
      return this.getFromCache(name);
    }

    isInCache(name) {
      return this._cache.hasOwnProperty(name);
    }

    putInCache(name, object) {
      return this._cache[name] = object;
    }

    getFromCache(name) {
      return this._cache[name];
    }

    getNumber(name) {
      var number;
      number = this.getObject(name);
      if (SDK.isInt(number)) {
        return number;
      }
      return 0;
    }

    getObject(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || '{}');
      } else {
        return {};
      }
    }

    getBoolean(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || false);
      } else {
        return false;
      }
    }

    getNumberFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        var obj;
        obj = this.getNumber(name);
        return obj;
      });
    }

    getBooleanFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        var obj;
        obj = this.getBoolean(name);
        return obj;
      });
    }

    getBooleanFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getBooleanFromCache(name);
      } else {
        return defaultValue;
      }
    }

  };
  //StringsLoader
  //------------------------------------------------------------------------------
  StringsLoader = class StringsLoader {
    constructor(_parameters) {
      this._parameters = _parameters;
    }

    loadAllStringsToObject(object) {
      var strings;
      strings = this._collect(object);
      this._writeNewString(object, strings);
    }

    _collect(object) {
      var properties, strings;
      properties = Object.getOwnPropertyNames(object);
      strings = properties.filter(function(item) {
        return item.includes("STRING_");
      });
      return strings;
    }

    _writeNewString(object, strings) {
      var j, len, string;
      for (j = 0, len = strings.length; j < len; j++) {
        string = strings[j];
        this._setStringFromPluginParametersToObject(object, string);
      }
    }

    _setStringFromPluginParametersToObject(object, stringName) {
      var newValue;
      newValue = this._parameters[stringName];
      if (newValue) {
        object[stringName] = newValue;
      }
    }

    loadAllStringsToObjectFromJSON(object, data) {
      var j, len, string, strings;
      strings = this._collect(object);
      for (j = 0, len = strings.length; j < len; j++) {
        string = strings[j];
        this._setStringFromJSONDataToObject(object, data, string);
      }
    }

    _setStringFromJSONDataToObject(object, data, stringName) {
      var newValue;
      newValue = data[stringName];
      if (newValue != null) {
        object[stringName] = newValue;
      }
    }

  };
  //EXTENSION TO GLOBAL
  //------------------------------------------------------------------------------
  KDCore.SDK = SDK;
  KDCore.Color = Color;
  KDCore.DevLog = DevLog;
  KDCore.BitmapSrc = BitmapSrc;
  KDCore.ParametersManager = ParametersManager;
  KDCore.StringsLoader = StringsLoader;
})();

// ■ END KDCore.coffee
//---------------------------------------------------------------------------

/*!
 * pixi-filters - v2.6.1
 * Compiled Thu, 03 May 2018 14:20:43 UTC
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var __filters=function(e,t){"use strict";var n="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",r="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n",o=function(e){function t(t){e.call(this,n,r),Object.assign(this,{gamma:1,saturation:1,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:1},t)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.apply=function(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},t}(t.Filter),i=n,l="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}",s="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n",a=function(e){function n(n,r,o){void 0===n&&(n=4),void 0===r&&(r=3),void 0===o&&(o=!1),e.call(this,i,o?s:l),this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new t.Point,this.pixelSize=1,this._clamp=o,this._kernels=null,Array.isArray(n)?this.kernels=n:(this._blur=n,this.quality=r)}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={kernels:{configurable:!0},clamp:{configurable:!0},pixelSize:{configurable:!0},quality:{configurable:!0},blur:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o,i=this.pixelSize.x/t.size.width,l=this.pixelSize.y/t.size.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,t,n,r);else{for(var s,a=e.getRenderTarget(!0),u=t,c=a,f=this._quality-1,h=0;h<f;h++)o=this._kernels[h]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,c,!0),s=u,u=c,c=s;o=this._kernels[f]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,n,r),e.returnRenderTarget(a)}},n.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var r=e,o=e/t,i=1;i<t;i++)r-=o,n.push(r);this._kernels=n},r.kernels.get=function(){return this._kernels},r.kernels.set=function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},r.clamp.get=function(){return this._clamp},r.pixelSize.set=function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof t.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},r.pixelSize.get=function(){return this._pixelSize},r.quality.get=function(){return this._quality},r.quality.set=function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},r.blur.get=function(){return this._blur},r.blur.set=function(e){this._blur=e,this._generateKernels()},Object.defineProperties(n.prototype,r),n}(t.Filter),u=n,c="\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",f=function(e){function t(t){void 0===t&&(t=.5),e.call(this,u,c),this.threshold=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={threshold:{configurable:!0}};return n.threshold.get=function(){return this.uniforms.threshold},n.threshold.set=function(e){this.uniforms.threshold=e},Object.defineProperties(t.prototype,n),t}(t.Filter),h="uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",p=function(e){function n(n){e.call(this,u,h),"number"==typeof n&&(n={threshold:n}),n=Object.assign({threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:t.settings.RESOLUTION},n),this.bloomScale=n.bloomScale,this.brightness=n.brightness;var r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._extractFilter=new f(n.threshold),this._extractFilter.resolution=s,this._blurFilter=r?new a(r):new a(o,i),this.pixelSize=l,this.resolution=s}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={resolution:{configurable:!0},threshold:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return n.prototype.apply=function(e,t,n,r,o){var i=e.getRenderTarget(!0);this._extractFilter.apply(e,t,i,!0,o);var l=e.getRenderTarget(!0);this._blurFilter.apply(e,i,l,!0,o),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=l,e.applyFilter(this,t,n,r),e.returnRenderTarget(l),e.returnRenderTarget(i)},r.resolution.get=function(){return this._resolution},r.resolution.set=function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},r.threshold.get=function(){return this._extractFilter.threshold},r.threshold.set=function(e){this._extractFilter.threshold=e},r.kernels.get=function(){return this._blurFilter.kernels},r.kernels.set=function(e){this._blurFilter.kernels=e},r.blur.get=function(){return this._blurFilter.blur},r.blur.set=function(e){this._blurFilter.blur=e},r.quality.get=function(){return this._blurFilter.quality},r.quality.set=function(e){this._blurFilter.quality=e},r.pixelSize.get=function(){return this._blurFilter.pixelSize},r.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}(t.Filter),d=n,m="varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}",g=function(e){function t(t){void 0===t&&(t=8),e.call(this,d,m),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.pixelSize},n.size.set=function(e){this.uniforms.pixelSize=e},Object.defineProperties(t.prototype,n),t}(t.Filter),v=n,x="precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n",y=function(e){function n(t){void 0===t&&(t={}),e.call(this,v,x),this.uniforms.lightColor=new Float32Array(3),this.uniforms.shadowColor=new Float32Array(3),t=Object.assign({rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),this.rotation=t.rotation,this.thickness=t.thickness,this.lightColor=t.lightColor,this.lightAlpha=t.lightAlpha,this.shadowColor=t.shadowColor,this.shadowAlpha=t.shadowAlpha}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={rotation:{configurable:!0},thickness:{configurable:!0},lightColor:{configurable:!0},lightAlpha:{configurable:!0},shadowColor:{configurable:!0},shadowAlpha:{configurable:!0}};return n.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},r.rotation.get=function(){return this._angle/t.DEG_TO_RAD},r.rotation.set=function(e){this._angle=e*t.DEG_TO_RAD,this._updateTransform()},r.thickness.get=function(){return this._thickness},r.thickness.set=function(e){this._thickness=e,this._updateTransform()},r.lightColor.get=function(){return t.utils.rgb2hex(this.uniforms.lightColor)},r.lightColor.set=function(e){t.utils.hex2rgb(e,this.uniforms.lightColor)},r.lightAlpha.get=function(){return this.uniforms.lightAlpha},r.lightAlpha.set=function(e){this.uniforms.lightAlpha=e},r.shadowColor.get=function(){return t.utils.rgb2hex(this.uniforms.shadowColor)},r.shadowColor.set=function(e){t.utils.hex2rgb(e,this.uniforms.shadowColor)},r.shadowAlpha.get=function(){return this.uniforms.shadowAlpha},r.shadowAlpha.set=function(e){this.uniforms.shadowAlpha=e},Object.defineProperties(n.prototype,r),n}(t.Filter),_=t.filters,b=_.BlurXFilter,C=_.BlurYFilter,S=_.AlphaFilter,F=function(e){function n(n,r,o,i){var l,s;void 0===n&&(n=2),void 0===r&&(r=4),void 0===o&&(o=t.settings.RESOLUTION),void 0===i&&(i=5),e.call(this),"number"==typeof n?(l=n,s=n):n instanceof t.Point?(l=n.x,s=n.y):Array.isArray(n)&&(l=n[0],s=n[1]),this.blurXFilter=new b(l,r,o,i),this.blurYFilter=new C(s,r,o,i),this.blurYFilter.blendMode=t.BLEND_MODES.SCREEN,this.defaultFilter=new S}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={blur:{configurable:!0},blurX:{configurable:!0},blurY:{configurable:!0}};return n.prototype.apply=function(e,t,n){var r=e.getRenderTarget(!0);this.defaultFilter.apply(e,t,n),this.blurXFilter.apply(e,t,r),this.blurYFilter.apply(e,r,n),e.returnRenderTarget(r)},r.blur.get=function(){return this.blurXFilter.blur},r.blur.set=function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},r.blurX.get=function(){return this.blurXFilter.blur},r.blurX.set=function(e){this.blurXFilter.blur=e},r.blurY.get=function(){return this.blurYFilter.blur},r.blurY.set=function(e){this.blurYFilter.blur=e},Object.defineProperties(n.prototype,r),n}(t.Filter),z=n,A="uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n",w=function(e){function t(t,n,r){e.call(this,z,A),this.uniforms.dimensions=new Float32Array(2),this.center=t||[.5,.5],this.radius=n||100,this.strength=r||1}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={radius:{configurable:!0},strength:{configurable:!0},center:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,e.applyFilter(this,t,n,r)},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},Object.defineProperties(t.prototype,n),t}(t.Filter),T=n,D="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform sampler2D colorMap;\n\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    float sliceIndex = color.b * (_size - 1.0);\n    float zSlice0 = floor(sliceIndex);\n    float zSlice1 = ceil(sliceIndex);\n\n    float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n    float s0 = xOffset + zSlice0 * _sliceSize;\n    float s1 = xOffset + zSlice1 * _sliceSize;\n    vec4 slice0Color = texture2D(colorMap, vec2(s0, color.g));\n    vec4 slice1Color = texture2D(colorMap, vec2(s1, color.g));\n    vec4 adjusted = mix(slice0Color, slice1Color, fract(sliceIndex));\n\n    gl_FragColor = mix(color, adjusted, _mix);\n}\n",O=function(e){function n(t,n,r){void 0===n&&(n=!1),void 0===r&&(r=1),e.call(this,T,D),this._size=0,this._sliceSize=0,this._slicePixelSize=0,this._sliceInnerSize=0,this._scaleMode=null,this._nearest=!1,this.nearest=n,this.mix=r,this.colorMap=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={colorSize:{configurable:!0},colorMap:{configurable:!0},nearest:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},r.colorSize.get=function(){return this._size},r.colorMap.get=function(){return this._colorMap},r.colorMap.set=function(e){e instanceof t.Texture||(e=t.Texture.from(e)),e&&e.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e},r.nearest.get=function(){return this._nearest},r.nearest.set=function(e){this._nearest=e,this._scaleMode=e?t.SCALE_MODES.NEAREST:t.SCALE_MODES.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=!1,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},n.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},n.prototype.destroy=function(t){this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},Object.defineProperties(n.prototype,r),n}(t.Filter),P=n,M="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n",R=function(e){function n(t,n,r){void 0===t&&(t=16711680),void 0===n&&(n=0),void 0===r&&(r=.4),e.call(this,P,M),this.uniforms.originalColor=new Float32Array(3),this.uniforms.newColor=new Float32Array(3),this.originalColor=t,this.newColor=n,this.epsilon=r}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={originalColor:{configurable:!0},newColor:{configurable:!0},epsilon:{configurable:!0}};return r.originalColor.set=function(e){var n=this.uniforms.originalColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._originalColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._originalColor=t.utils.rgb2hex(n))},r.originalColor.get=function(){return this._originalColor},r.newColor.set=function(e){var n=this.uniforms.newColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._newColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._newColor=t.utils.rgb2hex(n))},r.newColor.get=function(){return this._newColor},r.epsilon.set=function(e){this.uniforms.epsilon=e},r.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}(t.Filter),j=n,L="precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",k=function(e){function t(t,n,r){e.call(this,j,L),this.uniforms.texelSize=new Float32Array(9),this.matrix=t,this.width=n,this.height=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={matrix:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};return n.matrix.get=function(){return this.uniforms.matrix},n.matrix.set=function(e){this.uniforms.matrix=new Float32Array(e)},n.width.get=function(){return 1/this.uniforms.texelSize[0]},n.width.set=function(e){this.uniforms.texelSize[0]=1/e},n.height.get=function(){return 1/this.uniforms.texelSize[1]},n.height.set=function(e){this.uniforms.texelSize[1]=1/e},Object.defineProperties(t.prototype,n),t}(t.Filter),I=n,E="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n",B=function(e){function t(){e.call(this,I,E)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(t.Filter),X=n,q="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    vec2 dir = vec2(coord - vec2(0.5, 0.5));\n\n    float _c = curvature > 0. ? curvature : 1.;\n    float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n    vec2 uv = dir * k;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0) {\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n",N=function(e){function t(t){e.call(this,X,q),this.uniforms.dimensions=new Float32Array(2),this.time=0,this.seed=0,Object.assign(this,{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={curvature:{configurable:!0},lineWidth:{configurable:!0},lineContrast:{configurable:!0},verticalLine:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.curvature.set=function(e){this.uniforms.curvature=e},n.curvature.get=function(){return this.uniforms.curvature},n.lineWidth.set=function(e){this.uniforms.lineWidth=e},n.lineWidth.get=function(){return this.uniforms.lineWidth},n.lineContrast.set=function(e){this.uniforms.lineContrast=e},n.lineContrast.get=function(){return this.uniforms.lineContrast},n.verticalLine.set=function(e){this.uniforms.verticalLine=e},n.verticalLine.get=function(){return this.uniforms.verticalLine},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),G=n,K="precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",Y=function(e){function t(t,n){void 0===t&&(t=1),void 0===n&&(n=5),e.call(this,G,K),this.scale=t,this.angle=n}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={scale:{configurable:!0},angle:{configurable:!0}};return n.scale.get=function(){return this.uniforms.scale},n.scale.set=function(e){this.uniforms.scale=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),W=n,Q="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n\n    // Un-premultiply alpha before applying the color\n    if (sample.a > 0.0) {\n        sample.rgb /= sample.a;\n    }\n\n    // Premultiply alpha again\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}",U=function(e){function n(n){n&&n.constructor!==Object&&(console.warn("DropShadowFilter now uses options instead of (rotation, distance, blur, color, alpha)"),n={rotation:n},void 0!==arguments[1]&&(n.distance=arguments[1]),void 0!==arguments[2]&&(n.blur=arguments[2]),void 0!==arguments[3]&&(n.color=arguments[3]),void 0!==arguments[4]&&(n.alpha=arguments[4])),n=Object.assign({rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:t.settings.RESOLUTION},n),e.call(this);var r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._tintFilter=new t.Filter(W,Q),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.resolution=s,this._blurFilter=r?new a(r):new a(o,i),this.pixelSize=l,this.resolution=s,this.targetTransform=new t.Matrix;var u=n.shadowOnly,c=n.rotation,f=n.distance,h=n.alpha,p=n.color;this.shadowOnly=u,this.rotation=c,this.distance=f,this.alpha=h,this.color=p,this._updatePadding()}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={resolution:{configurable:!0},distance:{configurable:!0},rotation:{configurable:!0},alpha:{configurable:!0},color:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=e.getRenderTarget();o.transform=this.targetTransform,this._tintFilter.apply(e,t,o,!0),o.transform=null,this._blurFilter.apply(e,o,n),!0!==this.shadowOnly&&e.applyFilter(this,t,n,r),e.returnRenderTarget(o)},n.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},n.prototype._updateTargetTransform=function(){this.targetTransform.tx=this.distance*Math.cos(this.angle),this.targetTransform.ty=this.distance*Math.sin(this.angle)},r.resolution.get=function(){return this._resolution},r.resolution.set=function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},r.distance.get=function(){return this._distance},r.distance.set=function(e){this._distance=e,this._updatePadding(),this._updateTargetTransform()},r.rotation.get=function(){return this.angle/t.DEG_TO_RAD},r.rotation.set=function(e){this.angle=e*t.DEG_TO_RAD,this._updateTargetTransform()},r.alpha.get=function(){return this._tintFilter.uniforms.alpha},r.alpha.set=function(e){this._tintFilter.uniforms.alpha=e},r.color.get=function(){return t.utils.rgb2hex(this._tintFilter.uniforms.color)},r.color.set=function(e){t.utils.hex2rgb(e,this._tintFilter.uniforms.color)},r.kernels.get=function(){return this._blurFilter.kernels},r.kernels.set=function(e){this._blurFilter.kernels=e},r.blur.get=function(){return this._blurFilter.blur},r.blur.set=function(e){this._blurFilter.blur=e,this._updatePadding()},r.quality.get=function(){return this._blurFilter.quality},r.quality.set=function(e){this._blurFilter.quality=e},r.pixelSize.get=function(){return this._blurFilter.pixelSize},r.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}(t.Filter),Z=n,V="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n",H=function(e){function t(t){void 0===t&&(t=5),e.call(this,Z,V),this.strength=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={strength:{configurable:!0}};return n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},Object.defineProperties(t.prototype,n),t}(t.Filter),$=n,J="// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n",ee=function(e){function n(n){void 0===n&&(n={}),e.call(this,$,J),this.uniforms.dimensions=new Float32Array(2),n=Object.assign({slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},n),this.direction=n.direction,this.red=n.red,this.green=n.green,this.blue=n.blue,this.offset=n.offset,this.fillMode=n.fillMode,this.average=n.average,this.seed=n.seed,this.minSize=n.minSize,this.sampleSize=n.sampleSize,this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=t.Texture.fromCanvas(this._canvas,t.SCALE_MODES.NEAREST),this._slices=0,this.slices=n.slices}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={sizes:{configurable:!0},offsets:{configurable:!0},slices:{configurable:!0},direction:{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=t.sourceFrame.width,i=t.sourceFrame.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,r)},n.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var o=this._slices,i=1,l=0;l<t;l++){var s=i/(o-l),a=Math.max(s*(1-.6*Math.random()),r);e[l]=a,i-=a}e[t]=i}else{for(var u=1,c=Math.sqrt(1/this._slices),f=0;f<t;f++){var h=Math.max(c*u*Math.random(),r);e[f]=h,u-=h}e[t]=u}this.shuffle()},n.prototype.shuffle=function(){for(var e=this._sizes,t=this._slices-1;t>0;t--){var n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},n.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},n.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},n.prototype.redraw=function(){var e,t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var l=this._sizes[i]*t,s=e>0?e:0,a=e<0?-e:0;r.fillStyle="rgba("+s+", "+a+", 0, 1)",r.fillRect(0,o>>0,t,l+1>>0),o+=l}n.baseTexture.emit("update",n.baseTexture),this.uniforms.displacementMap=n},r.sizes.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},r.sizes.get=function(){return this._sizes},r.offsets.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},r.offsets.get=function(){return this._offsets},r.slices.get=function(){return this._slices},r.slices.set=function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},r.direction.get=function(){return this._direction},r.direction.set=function(e){if(this._direction!==e){this._direction=e;var n=e*t.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},r.red.get=function(){return this.uniforms.red},r.red.set=function(e){this.uniforms.red=e},r.green.get=function(){return this.uniforms.green},r.green.set=function(e){this.uniforms.green=e},r.blue.get=function(){return this.uniforms.blue},r.blue.set=function(e){this.uniforms.blue=e},n.prototype.destroy=function(){this.texture.destroy(!0),this.texture=null,this._canvas=null,this.red=null,this.green=null,this.blue=null,this._sizes=null,this._offsets=null},Object.defineProperties(n.prototype,r),n}(t.Filter);ee.TRANSPARENT=0,ee.ORIGINAL=1,ee.LOOP=2,ee.CLAMP=3,ee.MIRROR=4;var te=n,ne="varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float distance;\nuniform float outerStrength;\nuniform float innerStrength;\nuniform vec4 glowColor;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nconst float PI = 3.14159265358979323846264;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float cosAngle;\n    float sinAngle;\n    vec2 displaced;\n    for (float angle = 0.0; angle <= PI * 2.0; angle += %QUALITY_DIST%) {\n       cosAngle = cos(angle);\n       sinAngle = sin(angle);\n       for (float curDistance = 1.0; curDistance <= %DIST%; curDistance++) {\n           displaced.x = vTextureCoord.x + cosAngle * curDistance * px.x;\n           displaced.y = vTextureCoord.y + sinAngle * curDistance * px.y;\n           curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n           totalAlpha += (distance - curDistance) * curColor.a;\n           maxTotalAlpha += (distance - curDistance);\n       }\n    }\n    maxTotalAlpha = max(maxTotalAlpha, 0.0001);\n\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;\n    float resultAlpha = (ownColor.a + outerGlowAlpha);\n    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);\n}\n",re=function(e){function n(t,n,r,o,i){void 0===t&&(t=10),void 0===n&&(n=4),void 0===r&&(r=0),void 0===o&&(o=16777215),void 0===i&&(i=.1),e.call(this,te,ne.replace(/%QUALITY_DIST%/gi,""+(1/i/t).toFixed(7)).replace(/%DIST%/gi,""+t.toFixed(7))),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.distance=t,this.color=o,this.outerStrength=n,this.innerStrength=r}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={color:{configurable:!0},distance:{configurable:!0},outerStrength:{configurable:!0},innerStrength:{configurable:!0}};return r.color.get=function(){return t.utils.rgb2hex(this.uniforms.glowColor)},r.color.set=function(e){t.utils.hex2rgb(e,this.uniforms.glowColor)},r.distance.get=function(){return this.uniforms.distance},r.distance.set=function(e){this.uniforms.distance=e},r.outerStrength.get=function(){return this.uniforms.outerStrength},r.outerStrength.set=function(e){this.uniforms.outerStrength=e},r.innerStrength.get=function(){return this.uniforms.innerStrength},r.innerStrength.set=function(e){this.uniforms.innerStrength=e},Object.defineProperties(n.prototype,r),n}(t.Filter),oe=n,ie="vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n",le="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n}\n",se=function(e){function n(n){e.call(this,oe,le.replace("${perlin}",ie)),this.uniforms.dimensions=new Float32Array(2),"number"==typeof n&&(console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity, time)"),n={angle:n},void 0!==arguments[1]&&(n.gain=arguments[1]),void 0!==arguments[2]&&(n.lacunarity=arguments[2]),void 0!==arguments[3]&&(n.time=arguments[3])),n=Object.assign({angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0]},n),this._angleLight=new t.Point,this.angle=n.angle,this.gain=n.gain,this.lacunarity=n.lacunarity,this.parallel=n.parallel,this.center=n.center,this.time=n.time}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={angle:{configurable:!0},gain:{configurable:!0},lacunarity:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=t.sourceFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},r.angle.get=function(){return this._angle},r.angle.set=function(e){this._angle=e;var n=e*t.DEG_TO_RAD;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},r.gain.get=function(){return this.uniforms.gain},r.gain.set=function(e){this.uniforms.gain=e},r.lacunarity.get=function(){return this.uniforms.lacunarity},r.lacunarity.set=function(e){this.uniforms.lacunarity=e},Object.defineProperties(n.prototype,r),n}(t.Filter),ae=n,ue="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n",ce=function(e){function n(n,r,o){void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=0),e.call(this,ae,ue),this.uniforms.uVelocity=new Float32Array(2),this._velocity=new t.ObservablePoint(this.velocityChanged,this),this.velocity=n,this.kernelSize=r,this.offset=o}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={velocity:{configurable:!0},offset:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?this.kernelSize:0,e.applyFilter(this,t,n,r)},r.velocity.set=function(e){Array.isArray(e)?this._velocity.set(e[0],e[1]):(e instanceof t.Point||e instanceof t.ObservablePoint)&&this._velocity.copy(e)},r.velocity.get=function(){return this._velocity},n.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y},r.offset.set=function(e){this.uniforms.uOffset=e},r.offset.get=function(){return this.uniforms.uOffset},Object.defineProperties(n.prototype,r),n}(t.Filter),fe=n,he="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n",pe=function(e){function n(t,n,r){void 0===n&&(n=.05),void 0===r&&(r=null),r=r||t.length,e.call(this,fe,he.replace(/%maxColors%/g,r)),this.epsilon=n,this._maxColors=r,this._replacements=null,this.uniforms.originalColors=new Float32Array(3*r),this.uniforms.targetColors=new Float32Array(3*r),this.replacements=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={replacements:{configurable:!0},maxColors:{configurable:!0},epsilon:{configurable:!0}};return r.replacements.set=function(e){var n=this.uniforms.originalColors,r=this.uniforms.targetColors,o=e.length;if(o>this._maxColors)throw"Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")";n[3*o]=-1;for(var i=0;i<o;i++){var l=e[i],s=l[0];"number"==typeof s?s=t.utils.hex2rgb(s):l[0]=t.utils.rgb2hex(s),n[3*i]=s[0],n[3*i+1]=s[1],n[3*i+2]=s[2];var a=l[1];"number"==typeof a?a=t.utils.hex2rgb(a):l[1]=t.utils.rgb2hex(a),r[3*i]=a[0],r[3*i+1]=a[1],r[3*i+2]=a[2]}this._replacements=e},r.replacements.get=function(){return this._replacements},n.prototype.refresh=function(){this.replacements=this._replacements},r.maxColors.get=function(){return this._maxColors},r.epsilon.set=function(e){this.uniforms.epsilon=e},r.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}(t.Filter),de=n,me="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n",ge=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,de,me),this.uniforms.dimensions=new Float32Array(2),"number"==typeof t?(this.seed=t,t=null):this.seed=n,Object.assign(this,{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={sepia:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},scratch:{configurable:!0},scratchDensity:{configurable:!0},scratchWidth:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},n.sepia.set=function(e){this.uniforms.sepia=e},n.sepia.get=function(){return this.uniforms.sepia},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.scratch.set=function(e){this.uniforms.scratch=e},n.scratch.get=function(){return this.uniforms.scratch},n.scratchDensity.set=function(e){this.uniforms.scratchDensity=e},n.scratchDensity.get=function(){return this.uniforms.scratchDensity},n.scratchWidth.set=function(e){this.uniforms.scratchWidth=e},n.scratchWidth.get=function(){return this.uniforms.scratchWidth},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),ve=n,xe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n",ye=function(e){function n(t,r,o){void 0===t&&(t=1),void 0===r&&(r=0),void 0===o&&(o=.1);var i=Math.max(o*n.MAX_SAMPLES,n.MIN_SAMPLES),l=(2*Math.PI/i).toFixed(7);e.call(this,ve,xe.replace(/\$\{angleStep\}/,l)),this.uniforms.thickness=new Float32Array([0,0]),this.thickness=t,this.uniforms.outlineColor=new Float32Array([0,0,0,1]),this.color=r,this.quality=o}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={color:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms.thickness[0]=this.thickness/t.size.width,this.uniforms.thickness[1]=this.thickness/t.size.height,e.applyFilter(this,t,n,r)},r.color.get=function(){return t.utils.rgb2hex(this.uniforms.outlineColor)},r.color.set=function(e){t.utils.hex2rgb(e,this.uniforms.outlineColor)},Object.defineProperties(n.prototype,r),n}(t.Filter);ye.MIN_SAMPLES=1,ye.MAX_SAMPLES=100;var _e=n,be="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n",Ce=function(e){function t(t){void 0===t&&(t=10),e.call(this,_e,be),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.size},n.size.set=function(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Se=n,Fe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n",ze=function(e){function t(t,n,r,o){void 0===t&&(t=0),void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1),e.call(this,Se,Fe),this._angle=0,this.angle=t,this.center=n,this.kernelSize=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={angle:{configurable:!0},center:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,t,n,r)},n.angle.set=function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},n.angle.get=function(){return this._angle},n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ae=n,we="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n",Te=function(e){function t(t){e.call(this,Ae,we),this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={mirror:{configurable:!0},boundary:{configurable:!0},amplitude:{configurable:!0},waveLength:{configurable:!0},alpha:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.mirror.set=function(e){this.uniforms.mirror=e},n.mirror.get=function(){return this.uniforms.mirror},n.boundary.set=function(e){this.uniforms.boundary=e},n.boundary.get=function(){return this.uniforms.boundary},n.amplitude.set=function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},n.amplitude.get=function(){return this.uniforms.amplitude},n.waveLength.set=function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},n.waveLength.get=function(){return this.uniforms.waveLength},n.alpha.set=function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},n.alpha.get=function(){return this.uniforms.alpha},Object.defineProperties(t.prototype,n),t}(t.Filter),De=n,Oe="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",Pe=function(e){function t(t,n,r){void 0===t&&(t=[-10,0]),void 0===n&&(n=[0,10]),void 0===r&&(r=[0,0]),e.call(this,De,Oe),this.red=t,this.green=n,this.blue=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.red.get=function(){return this.uniforms.red},n.red.set=function(e){this.uniforms.red=e},n.green.get=function(){return this.uniforms.green},n.green.set=function(e){this.uniforms.green=e},n.blue.get=function(){return this.uniforms.blue},n.blue.set=function(e){this.uniforms.blue=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Me=n,Re="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n",je=function(e){function t(t,n,r){void 0===t&&(t=[0,0]),void 0===n&&(n={}),void 0===r&&(r=0),e.call(this,Me,Re),this.center=t,Array.isArray(n)&&(console.warn("Deprecated Warning: ShockwaveFilter params Array has been changed to options Object."),n={}),n=Object.assign({amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n),this.amplitude=n.amplitude,this.wavelength=n.wavelength,this.brightness=n.brightness,this.speed=n.speed,this.radius=n.radius,this.time=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},amplitude:{configurable:!0},wavelength:{configurable:!0},brightness:{configurable:!0},speed:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},n.amplitude.get=function(){return this.uniforms.amplitude},n.amplitude.set=function(e){this.uniforms.amplitude=e},n.wavelength.get=function(){return this.uniforms.wavelength},n.wavelength.set=function(e){this.uniforms.wavelength=e},n.brightness.get=function(){return this.uniforms.brightness},n.brightness.set=function(e){this.uniforms.brightness=e},n.speed.get=function(){return this.uniforms.speed},n.speed.set=function(e){this.uniforms.speed=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Le=n,ke="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n",Ie=function(e){function n(t,n,r){void 0===n&&(n=0),void 0===r&&(r=1),e.call(this,Le,ke),this.uniforms.dimensions=new Float32Array(2),this.uniforms.ambientColor=new Float32Array([0,0,0,r]),this.texture=t,this.color=n}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={texture:{configurable:!0},color:{configurable:!0},alpha:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,e.applyFilter(this,t,n,r)},r.texture.get=function(){return this.uniforms.uLightmap},r.texture.set=function(e){this.uniforms.uLightmap=e},r.color.set=function(e){var n=this.uniforms.ambientColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],this._color=t.utils.rgb2hex(n))},r.color.get=function(){return this._color},r.alpha.get=function(){return this.uniforms.ambientColor[3]},r.alpha.set=function(e){this.uniforms.ambientColor[3]=e},Object.defineProperties(n.prototype,r),n}(t.Filter),Ee=n,Be="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Xe=function(e){function n(n,r,o,i){void 0===n&&(n=100),void 0===r&&(r=600),void 0===o&&(o=null),void 0===i&&(i=null),e.call(this,Ee,Be),this.uniforms.blur=n,this.uniforms.gradientBlur=r,this.uniforms.start=o||new t.Point(0,window.innerHeight/2),this.uniforms.end=i||new t.Point(600,window.innerHeight/2),this.uniforms.delta=new t.Point(30,30),this.uniforms.texSize=new t.Point(window.innerWidth,window.innerHeight),this.updateDelta()}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return n.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},r.blur.get=function(){return this.uniforms.blur},r.blur.set=function(e){this.uniforms.blur=e},r.gradientBlur.get=function(){return this.uniforms.gradientBlur},r.gradientBlur.set=function(e){this.uniforms.gradientBlur=e},r.start.get=function(){return this.uniforms.start},r.start.set=function(e){this.uniforms.start=e,this.updateDelta()},r.end.get=function(){return this.uniforms.end},r.end.set=function(e){this.uniforms.end=e,this.updateDelta()},Object.defineProperties(n.prototype,r),n}(t.Filter),qe=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.delta.y=t/n},t}(Xe),Ne=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/n,this.uniforms.delta.y=e/n},t}(Xe),Ge=function(e){function t(t,n,r,o){void 0===t&&(t=100),void 0===n&&(n=600),void 0===r&&(r=null),void 0===o&&(o=null),e.call(this),this.tiltShiftXFilter=new qe(t,n,r,o),this.tiltShiftYFilter=new Ne(t,n,r,o)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return t.prototype.apply=function(e,t,n){var r=e.getRenderTarget(!0);this.tiltShiftXFilter.apply(e,t,r),this.tiltShiftYFilter.apply(e,r,n),e.returnRenderTarget(r)},n.blur.get=function(){return this.tiltShiftXFilter.blur},n.blur.set=function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},n.gradientBlur.get=function(){return this.tiltShiftXFilter.gradientBlur},n.gradientBlur.set=function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},n.start.get=function(){return this.tiltShiftXFilter.start},n.start.set=function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},n.end.get=function(){return this.tiltShiftXFilter.end},n.end.set=function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ke=n,Ye="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n",We=function(e){function t(t,n,r){void 0===t&&(t=200),void 0===n&&(n=4),void 0===r&&(r=20),e.call(this,Ke,Ye),this.radius=t,this.angle=n,this.padding=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={offset:{configurable:!0},radius:{configurable:!0},angle:{configurable:!0}};return n.offset.get=function(){return this.uniforms.offset},n.offset.set=function(e){this.uniforms.offset=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Qe=n,Ue="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = 32.0;\n\nfloat random(vec3 scale, float seed) {\n    // use the fragment position for a different seed per-pixel\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Ze=function(e){function t(t,n,r,o){void 0===t&&(t=.1),void 0===n&&(n=[0,0]),void 0===r&&(r=0),void 0===o&&(o=-1),e.call(this,Qe,Ue),this.center=n,this.strength=t,this.innerRadius=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},strength:{configurable:!0},innerRadius:{configurable:!0},radius:{configurable:!0}};return n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.strength.get=function(){return this.uniforms.uStrength},n.strength.set=function(e){this.uniforms.uStrength=e},n.innerRadius.get=function(){return this.uniforms.uInnerRadius},n.innerRadius.set=function(e){this.uniforms.uInnerRadius=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter);return e.AdjustmentFilter=o,e.AdvancedBloomFilter=p,e.AsciiFilter=g,e.BevelFilter=y,e.BloomFilter=F,e.BulgePinchFilter=w,e.ColorMapFilter=O,e.ColorReplaceFilter=R,e.ConvolutionFilter=k,e.CrossHatchFilter=B,e.CRTFilter=N,e.DotFilter=Y,e.DropShadowFilter=U,e.EmbossFilter=H,e.GlitchFilter=ee,e.GlowFilter=re,e.GodrayFilter=se,e.KawaseBlurFilter=a,e.MotionBlurFilter=ce,e.MultiColorReplaceFilter=pe,e.OldFilmFilter=ge,e.OutlineFilter=ye,e.PixelateFilter=Ce,e.RadialBlurFilter=ze,e.ReflectionFilter=Te,e.RGBSplitFilter=Pe,e.ShockwaveFilter=je,e.SimpleLightmapFilter=Ie,e.TiltShiftFilter=Ge,e.TiltShiftAxisFilter=Xe,e.TiltShiftXFilter=qe,e.TiltShiftYFilter=Ne,e.TwistFilter=We,e.ZoomBlurFilter=Ze,e}({},PIXI);Object.assign(PIXI.filters,this?this.__filters:__filters);
//# sourceMappingURL=pixi-filters.js.map

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ PointX.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//@[GLOBAL]
var PointX;

PointX = (function() {
  class PointX {
    constructor(_x, _y) {
      this._x = _x;
      this._y = _y;
    }

    convertToCanvas() {
      return new PointX(Graphics.pageToCanvasX(this._x), Graphics.pageToCanvasY(this._y));
    }

    convertToMap() {
      return new PointX($gameMap.canvasToMapX(this._x), $gameMap.canvasToMapY(this._y));
    }

    convertToScreen() {
      return new PointX(this.screenX(), this.screenY());
    }

    screenX() {
      var t, tw;
      t = $gameMap.adjustX(this._x);
      tw = $gameMap.tileWidth();
      return Math.round(t * tw + tw / 2);
    }

    screenY() {
      var t, th;
      t = $gameMap.adjustY(this._y);
      th = $gameMap.tileHeight();
      return Math.round(t * th + th);
    }

    mapPointOnScreen() {
      var nx, ny;
      nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
      ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
      return new PointX(nx, ny);
    }

    clone() {
      return new PointX(this._x, this._y);
    }

    toString() {
      return `[${this._x}:${this._y}]`;
    }

    static _getEmpty() {
      if (PointX._empty == null) {
        PointX._empty = new PointX(0, 0);
      }
      return PointX._empty;
    }

  };

  Object.defineProperties(PointX.prototype, {
    x: {
      get: function() {
        return this._x;
      },
      configurable: true
    },
    y: {
      get: function() {
        return this._y;
      },
      configurable: true
    }
  });

  Object.defineProperties(PointX, {
    Empty: {
      get: function() {
        return PointX._getEmpty();
      },
      configurable: false
    }
  });

  return PointX;

}).call(this);

//@[EXTEND]
Array.prototype.toPoint = function() {
  return new PointX(this[0], this[1]);
};

Sprite.prototype.toPoint = function() {
  return new PointX(this.x, this.y);
};

Game_CharacterBase.prototype.toPoint = function() {
  return new PointX(this.x, this.y);
};

// ■ END PointX.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UTILS.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//?rev:2
(function() {
  var _;
  _ = {};
  _.hasMeta = function(symbol, obj) {
    return (obj.meta != null) && (obj.meta[symbol] != null);
  };
  _.getValueFromMeta = function(symbol, obj) {
    if (!_.hasMeta(symbol, obj)) {
      return null;
    }
    return obj.meta[symbol];
  };
  _.getNumberFromMeta = function(symbol, obj) {
    var value;
    if (!_.hasMeta(symbol, obj)) {
      return null;
    }
    if (obj.meta[symbol] === true) {
      return 0;
    } else {
      value = Number(obj.meta[symbol]);
    }
    if (isNaN(value)) {
      return 0;
    }
    return value;
  };
  _.isSceneMap = function() {
    try {
      return SceneManager._scene instanceof Scene_Map;
    } catch (error) {
      return false;
    }
  };
  _.isSceneBattle = function() {
    try {
      return SceneManager._scene instanceof Scene_Battle;
    } catch (error) {
      return false;
    }
  };
  _.getPositionPointFromJSON = function(jsonSettings) {
    return _.convertPositionPointFromJSON(jsonSettings.position);
  };
  _.convertPositionPointFromJSON = function(position) {
    var e, x, y;
    try {
      x = position[0];
      y = position[1];
      if (!KDCore.SDK.isInt(x)) {
        x = eval(x);
      }
      if (!KDCore.SDK.isInt(y)) {
        y = eval(y);
      }
      return new PointX(x, y);
    } catch (error) {
      e = error;
      ANET.warning('Utils.getPositionPointFromJSON', e);
      return PointX.Empty;
    }
  };
  _.getVar = function(id) {
    return $gameVariables.value(id);
  };
  _.setVar = function(id, value) {
    return $gameVariables.setValue(id, value);
  };
  _.addToVar = function(id, value) {
    var prevVal;
    prevVal = _.getVar(id);
    return _.setVar(id, prevVal + value);
  };
  _.touchInputPoint = function() {
    var e, x, y;
    try {
      x = $gameMap.canvasToMapX(TouchInput.x);
      y = $gameMap.canvasToMapY(TouchInput.y);
      return new PointX(x, y);
    } catch (error) {
      e = error;
      ANET.warning('touchInputPoint', e);
      return new PointX(0, 0);
    }
  };
  //@[EXTEND]
  ANET.Utils = _;
})();

// ■ END UTILS.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UTILS Math.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AP, _;
  ANET.Utils.Math = {};
  //@[DEFINES]
  _ = ANET.Utils.Math;
  AP = PointX;
  _.moveTo = function(p1, p2, step) {
    var e, fx, fy, rotated;
    try {
      rotated = _.rotateTo(new AP(0, step), _.angle(p1, p2));
      fx = fy = 0;
      if (p2.y < p1.y) {
        fy = p1.y - rotated.y;
      } else {
        fy = p1.y + rotated.y;
      }
      if (p2.x < p1.x) {
        fx = p1.x + rotated.x;
      } else {
        fx = p1.x - rotated.x;
      }
      return new AP(fx, fy);
    } catch (error) {
      e = error;
      ANET.warning('Utils.Math.moveTo', e);
      return AP.Empty;
    }
  };
  _.rotateTo = function(p1, angle) {
    var e, fx, fy;
    try {
      fx = p1.x * Math.cos(angle) - p1.y * Math.sin(angle);
      fy = p1.y * Math.cos(angle) + p1.x * Math.sin(angle);
      return new AP(fx, fy);
    } catch (error) {
      e = error;
      ANET.warning('Utils.Math.rotateTo', e);
      return AP.Empty;
    }
  };
  _.angle = function(p1, p2) {
    var d, e, fx, fy;
    try {
      d = _.getPointDistance(p1, p2);
      fx = Math.abs(p2.x - p1.x);
      fy = Math.abs(p2.y - p1.y);
      if (d === 0 || fx === 0 || fy === 0) {
        return 0;
      }
      return Math.acos((fy * fy + d * d - fx * fx) / (2 * fy * d));
    } catch (error) {
      e = error;
      ANET.warning('Utils.Math.angle', e);
      return 0;
    }
  };
  _.getPointDistance = function(p1, p2) {
    var e;
    try {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    } catch (error) {
      e = error;
      ANET.warning('Utils.Math.getPointDistance', e);
      return 0;
    }
  };
  _.inRect = function(point, rect) {
    var e, x2, y2;
    try {
      x2 = rect.x + rect.width;
      y2 = rect.y + rect.height;
      return point.x > rect.x && point.x < x2 && point.y < y2 && point.y > rect.y;
    } catch (error) {
      e = error;
      ANET.warning('Utils.Math.inRect', e);
      return false;
    }
  };
})();

// ■ END UTILS Math.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DevExt.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var __TMP_LOG__;
  __TMP_LOG__ = null;
  String.prototype.LOG = function() {
    if (__TMP_LOG__ === null) {
      __TMP_LOG__ = new KDCore.DevLog("TMP");
      __TMP_LOG__.setColors(KDCore.Color.WHITE, KDCore.Color.BLACK.getLightestColor(20));
    }
    __TMP_LOG__.p(this);
  };
  Number.prototype.LOG = function() {
    return this.toString().LOG();
  };
  Array.prototype.LOG = function() {
    return this.toString().LOG();
  };
  Boolean.prototype.LOG = function() {
    return this.toString().LOG();
  };
  String.prototype.P = function() {
    return this.LOG();
  };
  String.prototype.p = function(additionText) {
    var str;
    if (additionText != null) {
      str = this + " : " + additionText;
      return str.LOG();
    } else {
      return this.LOG();
    }
  };
  Array.prototype.findElementByField = function(elementField, value) {
    var result;
    result = this.filter(function(item) {
      return item[elementField] === value;
    });
    if (result.length === 0) {
      return null;
    } else {
      return result[0];
    }
  };
  Array.prototype.findElementIndexByField = function(elementField, value) {
    var element;
    element = this.findElementByField(elementField, value);
    return this.indexOf(element);
  };
})();

// ■ END DevExt.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ XInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var DefaultKeyConfig, IKey, KEYS_GAME, KEYS_RAW, UNSAFE, alias_atbs_input_onKeyDown, alias_atbs_input_onKeyUp, i, j, k, l, m;
  DefaultKeyConfig = [
    // * CHAT
    "tab",
    "t",
    // * ACTION MENU
    "q",
    "e"
  ];
  UNSAFE = ['q', 'w', 'x', 'z', 'space'];
  KEYS_RAW = [];
  KEYS_GAME = [];
  Input.KeyMapperPKD = {};
  Input.KeyMapperPKD[8] = "backspace";
  Input.KeyMapperPKD[9] = "tab";
  Input.KeyMapperPKD[13] = "ok";
  Input.KeyMapperPKD[16] = "shift";
  Input.KeyMapperPKD[27] = "escape";
  Input.KeyMapperPKD[32] = "space";
  Input.KeyMapperPKD[189] = "-";
  Input.KeyMapperPKD[187] = "+";
  Input.KeyMapperPKD[188] = ",";
  Input.KeyMapperPKD[190] = ".";
  Input.KeyMapperPKD[191] = "?";
  Input.KeyMapperPKD[222] = '"';
  Input.KeyMapperPKD[186] = ';';
  Input.KeyMapperPKD[219] = '[';
  Input.KeyMapperPKD[221] = ']';
//Numbers
  for (i = j = 48; j <= 57; i = ++j) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
  for (i = k = 58; k <= 90; i = ++k) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
//Letters Upper
  for (i = l = 65; l <= 90; i = ++l) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
//Letters Lower (for key code events)
  for (i = m = 97; m <= 122; i = ++m) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
  Input._setIgnoreSpecial = false;
  alias_atbs_input_onKeyDown = Input._onKeyDown;
  Input._onKeyDown = function(event) {
    if (Input._setIgnoreSpecial === true) {
      Input._setStateWithMapperPKD(event.keyCode, true);
    } else {
      alias_atbs_input_onKeyDown.call(this, event);
      if (Input.keyMapper[event.keyCode]) {
        return;
      }
      Input._setStateWithMapperPKD(event.keyCode, true);
    }
  };
  Input._setStateWithMapperPKD = function(keyCode, state = true) {
    var symbol;
    symbol = Input.KeyMapperPKD[keyCode];
    if (symbol != null) {
      this._currentState[symbol] = state;
    }
  };
  alias_atbs_input_onKeyUp = Input._onKeyUp;
  Input._onKeyUp = function(event) {
    if (Input._setIgnoreSpecial === true) {
      Input._setStateWithMapperPKD(event.keyCode, false);
    } else {
      alias_atbs_input_onKeyUp.call(this, event);
      if (Input.keyMapper[event.keyCode]) {
        return;
      }
      Input._setStateWithMapperPKD(event.keyCode, false);
    }
  };
  Input.isCancel = function() {
    if (Input.isGamepad()) {
      return Input.isTriggered('pageup'); //LB
    } else {
      return Input.isTriggered('cancel') || TouchInput.isCancelled();
    }
  };
  Input.isGamepad = function() {
    return false;
  };
  Input._isAnySymbol = function(method) {
    var n, o, p;
    for (i = n = 48; n <= 90; i = ++n) {
      if (method(Input.KeyMapperPKD[i])) {
        return Input.KeyMapperPKD[i];
      }
    }
    for (i = o = 186; o <= 222; i = ++o) {
      if (method(Input.KeyMapperPKD[i])) {
        return Input.KeyMapperPKD[i];
      }
    }
    for (i = p = 106; p <= 111; i = ++p) {
      if (method(Input.KeyMapperPKD[i])) {
        return Input.KeyMapperPKD[i];
      }
    }
    return null;
  };
  Input.isAnyPressed = function() {
    return Input._isAnySymbol(Input.isPressed.bind(Input));
  };
  Input.isAnyTriggered = function() {
    return Input._isAnySymbol(Input.isTriggered.bind(Input));
  };
  Input.isAnyLongPressed = function() {
    return Input._isAnySymbol(Input.isLongPressed.bind(Input));
  };
  IKey = function() {
    throw new Error('This is a static class');
  };
  IKey.CHAT = function() {
    return KEYS_GAME[0];
  };
  IKey.SAY = function() {
    return KEYS_GAME[1];
  };
  IKey.TRADE = function() {
    return KEYS_GAME[2];
  };
  IKey.PVP = function() {
    return KEYS_GAME[3];
  };
  IKey.loadDefaultKeyConfig = function() {
    return this.loadKeyConfig(DefaultKeyConfig.slice(0)); //Clone
  };
  IKey.loadKeyConfig = function(keyBindingsArray) {
    var n, ref;
    KEYS_RAW = keyBindingsArray;
    for (i = n = 0, ref = KEYS_RAW.length; (0 <= ref ? n < ref : n > ref); i = 0 <= ref ? ++n : --n) {
      if (KEYS_RAW[i] != null) {
        KEYS_GAME[i] = IKey.convertUnsafeSymbols(KEYS_RAW[i]);
      }
    }
  };
  IKey.convertUnsafeSymbols = function(symbol) {
    symbol = symbol.toLowerCase();
    if (!UNSAFE.include(symbol)) {
      return symbol;
    }
    if (symbol === 'q') {
      return 'pageup';
    }
    if (symbol === 'w') {
      return 'pagedown';
    }
    if (symbol === 'x') {
      return 'escape';
    }
    if (symbol === 'z') {
      return 'ok';
    }
    if (symbol === 'space') {
      return 'ok';
    }
  };
  IKey.convertIKeyToLetter = function(symbol) {
    if (symbol === IKey.CHAT()) {
      return KEYS_RAW[0];
    }
    if (symbol === IKey.SAY()) {
      return KEYS_RAW[1];
    }
    if (symbol === IKey.TRADE()) {
      return KEYS_RAW[2];
    }
    if (symbol === IKey.PVP()) {
      return KEYS_RAW[3];
    }
    return "";
  };
  IKey.getGameRawKeys = function() {
    return KEYS_RAW;
  };
  IKey.getGameKeyByIndex = function(index) {
    return KEYS_GAME[index];
  };
  IKey.changeRawKey = function(index, key) {
    KEYS_RAW[index] = key;
    return KEYS_GAME[index] = this.convertUnsafeSymbols(key);
  };
  AlphaNET.LIBS.IKey = IKey;
  ANET.KEYS = IKey;
})();

// ■ END XInput.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetworkClient.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var LOG, NetworkClient, _C, _M, _R;
  LOG = new KDCore.DevLog(" * Client");
  LOG.setColors(KDCore.Color.MAGENTA.reAlpha(200), KDCore.Color.BLACK.getLightestColor(200));
  LOG.on();
  //@[DEFINES]
  _C = null; //? ClientManager
  _M = null; //? NetMessage
  _R = null; //? _registerNetMessage
  NetworkClient = class NetworkClient {
    constructor(socket) {
      this.socket = socket;
      _R = this._registerNetMessage.bind(this);
      _M = NetMessage;
      _C = AlphaNET.LIBS.ClientManager;
      NetMessage.Setup(this.socket);
      this._handleCommands();
    }

    _handleCommands() {
      this._handleError();
      this._handleConnect();
      this._handleDisconect();
      return this._handleNET();
    }

    _handleError() {
      return this.socket.on('connect_error', function() {
        LOG.p('Connect error!');
        Network.onConnectionError();
        return Network.disconnect();
      });
    }

    _handleConnect() { // * WHEN THIS CLIENT CONNECT TO SERVER
      return this.socket.on('connect', function() {
        LOG.p('Connected');
        Network.runEvent(Network.commonEventOnConnectToServer);
        return Network.onConnectToServer();
      });
    }

    _handleDisconect() { // * WHEN SERVER TURN OFF
      return this.socket.on('disconnect', function() {
        LOG.p('Disconnected');
        NetPartyManager.clearParty();
        Network.runEvent(Network.commonEventOnDisconectFromServer);
        return Network.onConnectionLost();
      });
    }

    _handleNET() {
      this.socket.on('trace', function() { // * Используется для теста соединения
        return LOG.p("Trace from Server");
      });
      _R(_M.AlertMessage(), function(netData) {
        return window.alert(netData.data);
      });
      _R(_M.PlayerConnect(), _C.OnAnotherConnected);
      _R(_M.PlayerDisconnect(), _C.OnAnotherDisconnected);
      _R(_M.HostResponse(), _C.OnHostResponse);
      _R(_M.PlayersTableResponse(), _C.SetPlayersTableData);
      _R(_M.RequestPlayerData(), _C.OnAnotherPlayerDataRequested);
      _R(_M.PlayerDataResponse(), _C.OnAnotherPlayerDataResponse);
      _R(_M.PlayerMoveData(), _C.OnAnotherPlayerMove);
      _R(_M.MapEventMoveData(), _C.OnEventMoveData);
      _R(_M.WindowSelect(), _C.OnWindowSelectData);
      _R(_M.BattleInputCommand(), _C.OnBattleInputCommand);
      _R(_M.TempMessage(), _C.OnTempMessage);
      _R(_M.SyncEvent(), _C.OnEventSync);
      _R(_M.LockEvent(), _C.OnEventLock);
      _R(_M.OwnEvent(), _C.OnEventOwned);
      _R(_M.StartSharedEvent(), _C.OnStartSharedEvent);
      _R(_M.BattleBattlerRefreshData(), _C.OnBattleBattlerRefreshCommand);
      _R(_M.BattleAction(), _C.OnBattleActionCommand);
      _R(_M.BattleManager(), _C.OnBattleManagerCommand);
      _R(_M.PlayerNetIcon(), _C.OnPlayerNetIcon);
      _R(_M.VirtualInterpreter(), _C.OnVirtualIterpreterCommand);
      _R(_M.PlayerNetActorData(), _C.OnPlayerNetActorData);
      _R(_M.HostGameMapId(), _C.OnHostGameMapId);
      _R(_M.PlayerWorldData(), _C.OnPlayerWorldData);
      _R(_M.GlobalWorldData(), _C.OnGlobalWorldData);
      _R(_M.PlayerNetMapData(), _C.OnPlayerNetMapData);
      _R(_M.RequestGameMapEventsData(), _C.OnRequestGameMapEventsDataFromServer);
      _R(_M.GameMapEventsDataResponse(), _C.OnResponseGameMapEventsDataFromServer);
      _R(_M.SetOwner(), _C.OnSetOwner);
      _R(_M.CallUApi(), _C.OnUserApiCommand);
      _R(_M.StartPvPBattle(), _C.OnStartPvPBattle);
      _R(_M.BattleManagerPvP(), _C.OnBattleManagerPvPCommand);
      _R(_M.SendChatMessage(), _C.OnChatMessage);
      _R(_M.TradeReady(), _C.OnTradeReady);
      _R(_M.TradeItems(), _C.OnTradeItems);
      _R(_M.StartTrade(), _C.OnTradeStart);
      _R(_M.AbortTrade(), _C.OnTradeAbort);
      _R(_M.RegisterSyncVar(), _C.OnRegisterSyncVar);
      _R(_M.OnSyncVarValue(), _C.OnSyncVarValueChanged);
      _R(_M.VirtualScriptCall(), _C.OnVirtualScriptCallCommand);
      _R(_M.EncounterTroopId(), _C.OnEncounterTroopId);
      _R(_M.StartActorSelect(), _C.OnStartActorSelect);
      // * ABS
      _R(_M.AA_ActorState(), _C.AA_OnActorState);
      _R(_M.AA_Animation(), _C.AA_OnAnimation);
      _R(_M.AA_BattleProcess(), _C.AA_OnBattleProcessAction);
      _R(_M.AA_Info(), _C.AA_OnInfo);
      _R(_M.AA_CastState(), _C.AA_OnCastState);
      _R(_M.AA_AIEventData(), _C.AA_OnAIEventData);
      _R(_M.AA_AIEntityState(), _C.AA_OnAIState);
      // * При завершени ожидания сервера
      this.socket.on(_M.OnWaitResponse().name, function(data) {
        return Network.onServerResponse(data);
      });
      
      //?{TEST}
      return this.socket.on('123', function(data) {
        if ((data != null ? data.waited : void 0) === true) {
          return Network.onServerResponse();
        }
      });
    }

    _registerNetMessage(netMessage, func) {
      return this.socket.on(netMessage.name, func);
    }

    _requestPlayersInitialData() {
      return _M.RequestPlayerData().send();
    }

    disconnect() {
      _C.OnDisconnect();
      if (this.socket != null) {
        return this.socket.disconnect();
      }
    }

  };
  AlphaNET.register(NetworkClient);
})();

// ■ END NetworkClient.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetworkServer.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//* ================ HELP SECTION =================
//client.emit('testX') #ТОЛЬКО ЭТОМУ
//this._server.emit('testX') #ВСЕМ
//client.broadcast.emit('testX') #ВСЕМ, КРОМЕ СЕБЯ

//Как создавать новую команду
//1 - Создаём NetMessage
//2 - Прописываем команду в NetworkServer.coffee (этот файл)
//3 - Прописываем команду в NetworkClient.coffee
//4 - Прописываем логику команды в ClientManager (если это сообщение от сервера)
//5 - Прописываем логику в ServerManager (если это сообщение от клиента к сереру)
//* ==============================================
(function() {
  var LOG, NetworkServer, ServerManager, _M, _R, _RT;
  LOG = new KDCore.DevLog("Server");
  LOG.setColors(KDCore.Color.GREEN, KDCore.Color.BLACK.getLightestColor(120));
  LOG.on();
  //@[DEFINES]
  _M = null; //? NetMessage
  _R = null; //? _registerNetMessage
  _RT = null; //? _retranslate
  ServerManager = null;
  NetworkServer = class NetworkServer {
    constructor(port) {
      this.port = port;
      _M = NetMessage;
      _R = this._registerNetMessage.bind(this);
      _RT = this._retranslate.bind(this);
      ServerManager = AlphaNET.LIBS.ServerManager;
      this._host = null;
      this._startServer();
      ServerManager.Init(this);
      this._handleCommands();
    }

    _startServer() {
      var path;
      path = './js/libs/server';
      this._server = require(path)(this.port);
      Network.runEvent(Network.commonEventOnServerStarted);
      InfoPrinter.p('<font color="blue" size="3">Server started</font>');
      setTimeout(InfoPrinter.clear, 3000);
      return LOG.p("started");
    }

    _handleCommands() {
      return this._server.on('connection', (client) => { // * WHEN ANOTHER CLIENT CONNECTS TO THIS SERVER
        LOG.p("Client connected " + client.id);
        this._handleDisconnect(client);
        this._setupServerCommands(client);
        return this._registerConnection(client);
      });
    }

    _handleDisconnect(client) { // * WHEN ANOTHER CLIENT GONE FROM THIS SERVER
      return client.on('disconnect', function() {
        LOG.p("Client disconnected " + client.id);
        return ServerManager.OnClientDisconnect(client);
      });
    }

    _registerConnection(client) {
      "REGISTER CONNECTION".p();
      if (!this._isHostExists()) {
        return this._registerHost(client);
      } else {
        return ServerManager.OnNewPlayerConnected(client);
      }
    }

    _isHostExists() {
      return this._host !== null;
    }

    _registerHost(client) {
      this._host = client;
      LOG.p("Host is " + client.id);
      //TODO: Это не обязательно, так как Хост = этому клиенту, можно сразу на NEtwork Установить
      NetMessage.HostResponse(client).send();
      if (ANET.P.isAllowCharacterSelect()) {
        ServerManager.StartActorSelectForNewPlayer(client);
      } else {
        ServerManager.RegisterHost(client);
      }
    }

    _setupServerCommands(client) {
      var e;
      try {
        // * Эти команды ретранслируются
        _RT(client, _M.RequestPlayerData());
        _RT(client, _M.PlayerDataResponse());
        _RT(client, _M.PlayerMoveData());
        _RT(client, _M.MapEventMoveData());
        _RT(client, _M.WindowSelect());
        _RT(client, _M.BattleInputCommand());
        _RT(client, _M.TempMessage());
        _RT(client, _M.LockEvent());
        _RT(client, _M.OwnEvent());
        _RT(client, _M.BattleBattlerRefreshData());
        _RT(client, _M.BattleAction());
        _RT(client, _M.BattleManager());
        _RT(client, _M.PlayerNetIcon());
        _RT(client, _M.PlayerNetActorData());
        _RT(client, _M.PlayerNetMapData());
        _RT(client, _M.CallUApi());
        _RT(client, _M.SendChatMessage());
        _RT(client, _M.TradeReady());
        _RT(client, _M.TradeItems());
        _RT(client, _M.AbortTrade());
        _RT(client, _M.RegisterSyncVar());
        _RT(client, _M.OnSyncVarValue());
        _RT(client, _M.VirtualScriptCall());
        _RT(client, _M.StartActorSelect());
        // * AA NET
        _RT(client, _M.AA_ActorState());
        _RT(client, _M.AA_Animation());
        _RT(client, _M.AA_BattleProcess());
        _RT(client, _M.AA_Info());
        _RT(client, _M.AA_CastState());
        _RT(client, _M.AA_AIEventData());
        _RT(client, _M.AA_AIEntityState());
        // * Эти команды выполняются только на сервере
        _R(client, _M.RegisterOnSharedEvent(), ServerManager.RegisterOnSharedEvent);
        _R(client, _M.RegisterOnSharedEventSync(), ServerManager.RegisterOnSharedEventSync);
        _R(client, _M.EncounterSync(), ServerManager.RegisterOnEncounterTroopId);
        _R(client, _M.RequestSync(), ServerManager.RegisterOnSync);
        _R(client, _M.PlayerWorldData(), ServerManager.OnPlayerWorldData);
        _R(client, _M.PlayerNetItemsData(), ServerManager.OnPlayerNetItemsData);
        _R(client, _M.RequestGameMapEventsData(), ServerManager.OnPlayerRequestMapData);
        _R(client, _M.GameMapEventsDataResponse(), ServerManager.OnMapDataResonpse);
        _R(client, _M.PlayerChangeMap(), ServerManager.OnPlayerChangeMap);
        _R(client, _M.RequestPvP(), ServerManager.OnPlayerRequestPvPWithAnother);
        _R(client, _M.BattleManagerPvP(), ServerManager.OnBattleManagerPvPCommand);
        _R(client, _M.RequestTrade(), ServerManager.OnPlayerRequestTradeWithAnother);
        _R(client, _M.OnPlayerSelectActor(), ServerManager.OnPlayerSelectActor);
        // * Эти команды ретранслируются, а также выполняются на сервере
        _RT(client, _M.StartSharedEvent());
        _R(client, _M.StartSharedEvent(), ServerManager.StartSharedEvent);
        _RT(client, _M.SyncEvent());
        _R(client, _M.SyncEvent(), ServerManager.OnSyncEvent);
        _RT(client, _M.VirtualInterpreter());
        _R(client, _M.VirtualInterpreter(), ServerManager.OnVirtualInterpreter);
        //? КАК ДЕЛАТЬ WAIT SERVER COMMAND

        // * Отправляем команду с установленным wait или repeat режимом
        // * Network.sendMessage NetMessage.EncounterTroopId().setRepeat(Network.WAIT_PLAYER).setData(troopId)

        // * Регестрируем тут и перенаправляем
        // * В методе на сервере, надо создать Pool ожидания, см. ServerManager.EncounterTroopId
        _RT(client, _M.EncounterTroopId());
        _R(client, _M.EncounterTroopId(), ServerManager.EncounterTroopId);
      } catch (error) {
        // * Должен быть ещё один вызов уже со стороны клиента, которые просто регестрируется
        // Результат приходит на Network.getLastResponseData()
        e = error;
        LOG.p(' ! ! ! Server CMD Error');
        Network.error(e, ' on Server commands');
      }
      //?{TEST}
      //client.on _M.TempMessage().name, (data) ->
      //    LOG.p('123')
      //    _M.TempMessage(client).send(data.data)
      //    _M.TempMessage(client).broadcast(data.data)

      //@_registerNetMessage client, 'testWaitHard', -> LOG.p('hard wait accepted')

      //?{TEST}
      client.on('testWaitHard', function(data) {
        return LOG.p('hard wait accepted ' + data.data);
      });
      //?{TEST}
      return client.on('testWaitHardRepeated', function(data) {
        return LOG.p('hard repeat wait accepted ' + data.data);
      });
    }

    // * Этот метод перенаправляет команду от сервера на все клиенты (кроме клиента, который прислал эту команду)
    _retranslate(client, netCommand) {
      return _R(client, netCommand, function(networkData) {
        netCommand.socket = client;
        netCommand.setFrom(client.id);
        return netCommand.broadcast(networkData.data);
      });
    }

    _registerNetMessage(client, netMessage, func) {
      return client.on(netMessage.name, func);
    }

    instance() {
      return this._server;
    }

    isStarted() {
      return this.instance() != null;
    }

    onWaitPoolReady(data) {
      return this._server.emit(_M.OnWaitResponse().name, data);
    }

    abortWaitPool(clientId, code) {
      var client;
      client = this._getClientById(clientId);
      return client != null ? client.emit(_M.OnWaitResponse().name, code) : void 0;
    }

    _getClientById(clientId) {
      return this.clients()[clientId];
    }

    //?{TEST}
    test() {
      return this._server.emit('123', {
        waited: true
      });
    }

    stop() {
      var ref;
      if ((ref = this._server) != null) {
        ref.close();
      }
      this._server = null;
      return LOG.p("stopped");
    }

    clients() {
      return this._server.clients().sockets;
    }

    clientsCount() {
      return Object.keys(this.clients()).length;
    }

  };
  AlphaNET.register(NetworkServer);
})();

// ■ END NetworkServer.coffee
//---------------------------------------------------------------------------

//Compressed by MV Plugin Builder
(function(){var _0x3c82 = [
    'release',
    'netTradeItems',
    '_clearTradeState',
    'while\x20accept\x20trade\x20ready\x20state',
    '_isTradeRequestForMe',
    'Dvwyk',
    'netTradeAnotherActorId',
    'myId',
    'ohFuo',
    'YUXBq',
    'unknown\x20trade\x20player\x20index',
    'Scene_Trade',
    'OnTradeItems',
    'FromNetwork',
    'jYVmi',
    'xiRyo',
    'while\x20accept\x20trade\x20items\x20refresh',
    'OnTradeStart',
    '_outerStartTrade',
    'OnTradeAbort',
    'BEmaA',
    'KslVR',
    'netTradeNeedAbort',
    'CkBua',
    'nSBkM',
    'while\x20accept\x20trade\x20abort',
    'isSyncedVariable',
    'while\x20register\x20sync\x20variable',
    'iDSZE',
    'sSuaS',
    'varId',
    'setValue',
    'runEvent',
    'commonEventOnOtherClientConnected',
    'OnAnotherDisconnected',
    'playerData',
    'from',
    'OwQSw',
    'commonEventOnOtherClientDisconected',
    'isHost',
    'players',
    'data',
    'myPlayerData',
    '_isWaitForConnectingDone',
    'RequestPlayerData',
    'send',
    'rZqGX',
    'RequestGameMapEventsData',
    'mapId',
    'PlayerChangeMap',
    'onActroItemsFromNetwork',
    'actorItems',
    'onActorDataFromNetwork',
    'actorData',
    '_synchronizeSyncVariablesToNetwork',
    'networkActorsId',
    'LIBS',
    'Scene_ActorSelect',
    'SetupVirtualUpdate',
    '_virtualUpdateThread',
    'synchronize',
    'SERVER_UPDATE_TIME',
    'PlayerDataResponse',
    'collectDataForNetwork',
    'OnAnotherPlayerDataResponse',
    'GZOpO',
    'error',
    'While\x20try\x20load\x20global\x20world\x20data\x20from\x20server',
    'getCharById',
    'synchronizeFromNetwork',
    'While\x20character\x20synchronization',
    'OnAnotherPlayerMove',
    '_moveCharacterFromNetwork',
    'OaItD',
    'QOVrF',
    'While\x20try\x20synchronize\x20another\x20actor\x20data',
    'charData',
    'onNetworkMoveData',
    'TnmvQ',
    'While\x20moving\x20character',
    'OnEventMoveData',
    'moveData',
    'directionData',
    'QMhXR',
    'EVENT\x20OWN\x20COMMAND',
    'setOwnedEventByNetwork',
    'eventId',
    'isLock',
    'read\x20event\x20sync\x20data',
    'While\x20moving\x20event',
    'OnWindowSelectData',
    'MGFap',
    'index',
    'networkWAction',
    'rZhRG',
    'registerSyncVariable',
    'zMprm',
    'rorZA',
    'read\x20Window\x20Select\x20Data\x20from\x20Server',
    'event',
    'EVENT\x20SYNC\x20COMMAND',
    'executeSyncCommandFromNetwork',
    'OnEventLock',
    'oNZgk',
    'safeRefreshCurrentScene',
    'EVENT\x20LOCK\x20COMMAND',
    'setLockedEventByNetwork',
    'OnEventOwned',
    'DqoKG',
    'sessionData',
    'setPlayerActorData',
    'CPDyw',
    'dtPKo',
    'read\x20shared\x20event\x20data',
    'OnEncounterTroopId',
    'START\x20ENCOUNTER\x20FROM\x20NETWORK',
    'OnBattleInputCommand',
    'BATTLE\x20:\x20ON\x20INPUT\x20COMMAND',
    '_selectInputCommandFromNetwork',
    'OnBattleBattlerRefreshCommand',
    'getBattleSubjectById',
    'scANB',
    '_hp',
    '_mp',
    '_tp',
    '_states',
    'states',
    'BATTLE\x20:\x20GAME\x20ACTION',
    'sbj',
    'target',
    'rjhZJ',
    'setItemFromNet',
    'actionId',
    'clearResult',
    'setupFromOuterData',
    'result',
    '_result',
    'memberByActorId',
    'actorId',
    'currentAction',
    'setSkill',
    'WvKMn',
    '_startActionFromNetwork',
    'targets',
    'setTarget',
    'LQkkR',
    'ebzAL',
    'startEventFromNetwork',
    'zakKb',
    'setTargetFromNet',
    'OnBattleManagerCommand',
    'BATTLE\x20:\x20MANAGER',
    'battleOrder',
    '_actionBattlers',
    'convertIdsToBattlers',
    'orderData',
    'enemyIds',
    'setUniqueIdsForEnemies',
    'troopIds',
    'RRgcy',
    'Audqo',
    'While\x20try\x20load\x20player\x20world\x20data\x20from\x20server',
    'endAction',
    'endTurn',
    'izpAY',
    'processVictory',
    'processTurn',
    'qoNSc',
    '_processTurnFromNetwork',
    'subjectId',
    'popScene',
    'startAction',
    'invokeNormal',
    'targetId',
    'abortBattle',
    'victory',
    'processDefeat',
    'escape',
    'uqLei',
    'niHVx',
    '_onEscapeFromNetwork',
    'OnPlayerNetIcon',
    'NETWORK\x20ICON',
    'inBattle',
    'QIJvj',
    'showNetworkIcon',
    'OnVirtualIterpreterCommand',
    '_params',
    'parameters',
    '_mapId',
    '_list',
    'command',
    'function',
    'isCurrentSceneIsMenuBased',
    'terminate',
    'jqLRh',
    'While\x20try\x20execute\x20virtual\x20command',
    'While\x20try\x20response\x20to\x20server\x20map\x20data\x20events\x20request',
    'OnVirtualScriptCallCommand',
    'VIRTUAL\x20SCRIPT\x20CALL',
    '_eventId',
    '_executeVirtualScriptCall',
    'While\x20try\x20execute\x20virtual\x20script\x20call',
    'OnTempMessage',
    'TEMP\x20MESSAGE\x20:\x20NETWORK\x20DATA',
    'OnPlayerNetActorData',
    'YyiGB',
    'onIbK',
    'rUZEO',
    'setSkillFromNet',
    'Olzod',
    '_onEncounterSyncFromNetwork',
    'Hbpii',
    'While\x20try\x20synchronize\x20game\x20map\x20with\x20Server',
    'OnPlayerWorldData',
    'onWorldDataFromNetwork',
    'OnGlobalWorldData',
    'onGlobalWorldDataFromNetwork',
    'OnPlayerNetMapData',
    'getPlayer',
    'OnRequestGameMapEventsDataFromServer',
    'pjord',
    'GameMapEventsDataResponse',
    'While\x20try\x20save\x20another\x20actor\x20data',
    'zrIvB',
    '_scene',
    'resetTradeState',
    'OnResponseGameMapEventsDataFromServer',
    'setHost',
    'mapData',
    'While\x20responde\x20game\x20map\x20data\x20from\x20server',
    'I\x20map\x20owner!',
    '_isMapOwner',
    'name',
    'zwmQQ',
    'While\x20execute\x20uAPI\x20network\x20command',
    'OnStartPvPBattle',
    '_outerStartPvP',
    'OnBattleManagerPvPCommand',
    'BATTLE\x20:\x20MANAGER\x20PVP:\x20CLIENT',
    'inputActionPvP',
    'action',
    '_setPvPRivalActionFromNetwork',
    'startTurnPvP',
    '_startPvPTurnFromNetwork',
    '_startActionFromNetworkPvP',
    'parse',
    'resultSubject',
    'resultTarget',
    'endActionPvP',
    'subjectData',
    '_actionEndPvPFromNetwork',
    'BBlYQ',
    'while\x20accept\x20Battle\x20Manager\x20PvP\x20Command',
    'OnChatMessage',
    'XOvAh',
    'ULifS',
    'getActorIdBySocketId',
    '_onNewChatMessage',
    'while\x20accept\x20new\x20chat\x20message',
    'OnTradeReady',
    'TRADE\x20READY\x20FROM\x20NETWORK',
    '_isProperSceneForTrade',
    'isReadyForTrade',
    '_tradeButtonClick',
    'netTradeItemsOut',
    'TradeItems'
];
(function (_0x10c161, _0x364900) {
    var _0x19b4ab = function (_0x3742f7) {
        while (--_0x3742f7) {
            _0x10c161['push'](_0x10c161['shift']());
        }
    };
    _0x19b4ab(++_0x364900);
}(_0x3c82, 0x12b));
var _0xa087 = function (_0x47d267, _0x12a37e) {
    _0x47d267 = _0x47d267 - 0x0;
    var _0x6e8722 = _0x3c82[_0x47d267];
    return _0x6e8722;
};
var ClientManager;
ClientManager = class ClientManager {
    static ['OnHostResponse']() {
        return Network['setHost']();
    }
    static ['OnAnotherConnected'](_0x386eac) {
        return Network[_0xa087('0x0')](Network[_0xa087('0x1')]);
    }
    static [_0xa087('0x2')](_0x25cba1) {
        if (!Network[_0xa087('0x3')](_0x25cba1[_0xa087('0x4')])) {
            if (_0xa087('0x5') !== _0xa087('0x5')) {
                return NetWorldManager['onGlobalWorldDataFromNetwork'](_0x25cba1['data']);
            } else {
                return;
            }
        }
        NetPartyManager['removePlayer'](_0x25cba1[_0xa087('0x4')]);
        return Network[_0xa087('0x0')](Network[_0xa087('0x6')]);
    }
    static ['SetPlayersTableData'](_0x2bfa8e) {
        if (!Network[_0xa087('0x7')]()) {
            Network[_0xa087('0x8')] = _0x2bfa8e[_0xa087('0x9')];
            Network[_0xa087('0xa')] = Network[_0xa087('0x3')](Network['myId']());
        }
        NetPartyManager['refreshParty']();
        Network[_0xa087('0xb')] = ![];
        ClientManager['SetupVirtualUpdate']();
        NetMessage[_0xa087('0xc')]()[_0xa087('0xd')]();
        if (!Network[_0xa087('0x7')]()) {
            if (_0xa087('0xe') === _0xa087('0xe')) {
                NetMessage[_0xa087('0xf')]()[_0xa087('0xd')]($gameMap[_0xa087('0x10')]());
                return NetMessage[_0xa087('0x11')]()[_0xa087('0xd')]($gameMap['mapId']());
            } else {
                worldData = _0x2bfa8e['data'];
                NetPartyManager[_0xa087('0x12')](_0x2bfa8e['from'], worldData[_0xa087('0x13')]);
                NetPartyManager[_0xa087('0x14')](_0x2bfa8e[_0xa087('0x4')], worldData[_0xa087('0x15')]);
                return NetWorldManager['onWorldDataFromNetwork'](worldData);
            }
        } else {
            return Network[_0xa087('0x16')]();
        }
    }
    static ['OnStartActorSelect'](_0xfe1154) {
        Network[_0xa087('0x17')] = _0xfe1154[_0xa087('0x9')];
        return SceneManager['push'](ANET[_0xa087('0x18')][_0xa087('0x19')]);
    }
    static [_0xa087('0x1a')]() {
        var _0x18a44f;
        if (ClientManager[_0xa087('0x1b')] != null) {
            return;
        }
        return ClientManager[_0xa087('0x1b')] = setTimeout(_0x18a44f = function () {
            if (!Network['isConnected']()) {
                if ('HkjLj' === 'HkjLj') {
                    return;
                } else {
                    return;
                }
            }
            NetPartyManager['synchronize']();
            NetWorldManager[_0xa087('0x1c')]();
            if (ClientManager['_virtualUpdateThread'] != null) {
                return ClientManager[_0xa087('0x1b')] = setTimeout(_0x18a44f, Network[_0xa087('0x1d')]);
            }
        }, Network[_0xa087('0x1d')]);
    }
    static ['OnAnotherPlayerDataRequested'](_0x4b5364) {
        NetMessage[_0xa087('0x1e')]()[_0xa087('0xd')]($gamePlayer[_0xa087('0x1f')]());
        return NetPartyManager['synchronize']();
    }
    static [_0xa087('0x20')](_0x106e89) {
        var _0x45cfe9, _0x4848b9;
        'PLAYER\x20DATA\x20FROM'['p'](_0x106e89['from']);
        try {
            if (_0xa087('0x21') !== 'GZOpO') {
                _0x4848b9 = error;
                return Network[_0xa087('0x22')](_0x4848b9, _0xa087('0x23'));
            } else {
                _0x45cfe9 = NetPartyManager[_0xa087('0x24')](_0x106e89[_0xa087('0x4')]);
                return _0x45cfe9 != null ? _0x45cfe9[_0xa087('0x25')](_0x106e89[_0xa087('0x9')]) : void 0x0;
            }
        } catch (_0x20a2c4) {
            _0x4848b9 = _0x20a2c4;
            return Network[_0xa087('0x22')](_0x4848b9, _0xa087('0x26'));
        }
    }
    static [_0xa087('0x27')](_0x4e33b6) {
        var _0xaa2353;
        _0xaa2353 = NetPartyManager[_0xa087('0x24')](_0x4e33b6['from']);
        if (_0xaa2353 == null) {
            return;
        }
        return ClientManager[_0xa087('0x28')](_0xaa2353, _0x4e33b6['data']);
    }
    static ['_moveCharacterFromNetwork'](_0x306eaa, _0x406cba) {
        var _0x35a78e;
        try {
            if (_0xa087('0x29') === _0xa087('0x2a')) {
                _0x35a78e = error;
                return Network[_0xa087('0x22')](_0x35a78e, _0xa087('0x2b'));
            } else {
                _0x306eaa['onNetworkCharacterData'](_0x406cba[_0xa087('0x2c')]);
                return _0x306eaa[_0xa087('0x2d')](_0x406cba['moveData']);
            }
        } catch (_0x424c96) {
            if ('TnmvQ' !== _0xa087('0x2e')) {
                return Network[_0xa087('0x0')](Network[_0xa087('0x1')]);
            } else {
                _0x35a78e = _0x424c96;
                return Network[_0xa087('0x22')](_0x35a78e, _0xa087('0x2f'));
            }
        }
    }
    static [_0xa087('0x30')](_0x56f902) {
        var _0x1c2a75, _0x4720a1, _0x1cdad0, _0x7f23da;
        try {
            _0x1c2a75 = _0x56f902[_0xa087('0x9')];
            _0x7f23da = _0x1c2a75[_0xa087('0x10')];
            if ($gameMap['mapId']() !== _0x7f23da) {
                return;
            }
            _0x1cdad0 = $gameMap['event'](_0x1c2a75['eventId']);
            if (!_0x1cdad0) {
                return;
            }
            if (_0x1c2a75[_0xa087('0x31')] != null) {
                ClientManager[_0xa087('0x28')](_0x1cdad0, _0x1c2a75[_0xa087('0x31')]);
            }
            if (_0x1c2a75[_0xa087('0x32')] != null) {
                return _0x1cdad0['onNetworkDirectionData'](_0x1c2a75[_0xa087('0x32')]);
            }
        } catch (_0x3d7b4d) {
            if (_0xa087('0x33') !== 'QMhXR') {
                var _0xc3b86b, _0x8c233;
                try {
                    _0xa087('0x34')['p']();
                    _0xc3b86b = _0x56f902[_0xa087('0x9')];
                    if ($gameMap[_0xa087('0x10')]() !== _0xc3b86b[_0xa087('0x10')]) {
                        return;
                    }
                    return $gameMap[_0xa087('0x35')](_0xc3b86b[_0xa087('0x36')], _0xc3b86b[_0xa087('0x37')]);
                } catch (_0x57933f) {
                    _0x8c233 = _0x57933f;
                    return Network[_0xa087('0x22')](_0x8c233, _0xa087('0x38'));
                }
            } else {
                _0x4720a1 = _0x3d7b4d;
                return Network['error'](_0x4720a1, _0xa087('0x39'));
            }
        }
    }
    static [_0xa087('0x3a')](_0x32f261) {
        var _0x5b11a2, _0x4b490a;
        try {
            if ('MGFap' === _0xa087('0x3b')) {
                _0x5b11a2 = _0x32f261[_0xa087('0x9')];
                $gameTemp['networkWSelectedIndex'] = _0x5b11a2[_0xa087('0x3c')];
                if ($gameTemp[_0xa087('0x3d')] == null) {
                    if (_0xa087('0x3e') !== _0xa087('0x3e')) {
                        Network[_0xa087('0x3f')](varId);
                    } else {
                        return $gameTemp[_0xa087('0x3d')] = _0x5b11a2['action'];
                    }
                }
            } else {
                return event['onNetworkDirectionData'](_0x5b11a2['directionData']);
            }
        } catch (_0x4aa0d7) {
            if (_0xa087('0x40') !== _0xa087('0x41')) {
                _0x4b490a = _0x4aa0d7;
                return Network['error'](_0x4b490a, _0xa087('0x42'));
            } else {
                var _0x33e8b4, _0x11c11f, _0x14add3, _0x13ce8d;
                try {
                    'EVENT\x20SYNC\x20COMMAND'['p']();
                    _0x33e8b4 = _0x32f261[_0xa087('0x9')];
                    _0x13ce8d = _0x33e8b4['mapId'];
                    if ($gameMap[_0xa087('0x10')]() !== _0x13ce8d) {
                        return;
                    }
                    _0x14add3 = $gameMap[_0xa087('0x43')](_0x33e8b4['eventId']);
                    return _0x14add3 != null ? _0x14add3['executeSyncCommandFromNetwork'](_0x33e8b4['pi'], _0x33e8b4['li']) : void 0x0;
                } catch (_0xe844b0) {
                    _0x11c11f = _0xe844b0;
                    return Network[_0xa087('0x22')](_0x11c11f, _0xa087('0x38'));
                }
            }
        }
    }
    static ['OnEventSync'](_0x4f4aa8) {
        var _0x426a4f, _0x22f153, _0x4d47cc, _0x414066;
        try {
            _0xa087('0x44')['p']();
            _0x426a4f = _0x4f4aa8[_0xa087('0x9')];
            _0x414066 = _0x426a4f[_0xa087('0x10')];
            if ($gameMap[_0xa087('0x10')]() !== _0x414066) {
                return;
            }
            _0x4d47cc = $gameMap[_0xa087('0x43')](_0x426a4f[_0xa087('0x36')]);
            return _0x4d47cc != null ? _0x4d47cc[_0xa087('0x45')](_0x426a4f['pi'], _0x426a4f['li']) : void 0x0;
        } catch (_0x148041) {
            _0x22f153 = _0x148041;
            return Network[_0xa087('0x22')](_0x22f153, _0xa087('0x38'));
        }
    }
    static [_0xa087('0x46')](_0xe8e13b) {
        var _0x50bd15, _0x5eea19;
        try {
            if (_0xa087('0x47') !== 'oNZgk') {
                SceneManager[_0xa087('0x48')]();
            } else {
                _0xa087('0x49')['p']();
                _0x50bd15 = _0xe8e13b['data'];
                if ($gameMap[_0xa087('0x10')]() !== _0x50bd15[_0xa087('0x10')]) {
                    return;
                }
                return $gameMap[_0xa087('0x4a')](_0x50bd15[_0xa087('0x36')], _0x50bd15[_0xa087('0x37')]);
            }
        } catch (_0x49283d) {
            _0x5eea19 = _0x49283d;
            return Network[_0xa087('0x22')](_0x5eea19, _0xa087('0x38'));
        }
    }
    static [_0xa087('0x4b')](_0x4dfc92) {
        var _0x150d4c, _0x3bd02a;
        try {
            if ('OtZcj' !== _0xa087('0x4c')) {
                _0xa087('0x34')['p']();
                _0x150d4c = _0x4dfc92['data'];
                if ($gameMap[_0xa087('0x10')]() !== _0x150d4c[_0xa087('0x10')]) {
                    return;
                }
                return $gameMap[_0xa087('0x35')](_0x150d4c[_0xa087('0x36')], _0x150d4c[_0xa087('0x37')]);
            } else {
                return Network[_0xa087('0x4d')][_0xa087('0x4e')](actorId, _0x4dfc92[_0xa087('0x9')]);
            }
        } catch (_0x33d1b7) {
            if (_0xa087('0x4f') !== _0xa087('0x50')) {
                _0x3bd02a = _0x33d1b7;
                return Network[_0xa087('0x22')](_0x3bd02a, _0xa087('0x38'));
            } else {
                return;
            }
        }
    }
    static ['OnStartSharedEvent'](_0x12e6cb) {
        var _0x6b5fb3;
        try {
            'START\x20SHARED\x20EVENT\x20FROM\x20NETWORK'['p']();
            return $gameMap['startEventFromNetwork'](_0x12e6cb[_0xa087('0x9')]);
        } catch (_0x230dd8) {
            _0x6b5fb3 = _0x230dd8;
            return Network[_0xa087('0x22')](_0x6b5fb3, _0xa087('0x51'));
        }
    }
    static [_0xa087('0x52')](_0x355987) {
        var _0x3a696f, _0xb6bc06;
        try {
            _0xa087('0x53')['p']();
            _0x3a696f = _0x355987['data'];
            return $gamePlayer['_onEncounterSyncFromNetwork'](_0x3a696f['troopId']);
        } catch (_0x5ab661) {
            _0xb6bc06 = _0x5ab661;
            return Network['error'](_0xb6bc06, 'start\x20encounte\x20from\x20network');
        }
    }
    static [_0xa087('0x54')](_0x3b4a7e) {
        _0xa087('0x55')['p']();
        return BattleManager[_0xa087('0x56')](_0x3b4a7e['data']);
    }
    static [_0xa087('0x57')](_0x314fbf) {
        var _0x3ec51f, _0x3a81aa;
        _0x3a81aa = _0x314fbf['data'];
        'BATTLE\x20:\x20ACTOR\x20REFRESH'['p'](_0x3a81aa['id']);
        _0x3ec51f = BattleManager[_0xa087('0x58')](_0x3a81aa['id']);
        if (_0x3ec51f != null) {
            if (_0xa087('0x59') === 'SpIsp') {
                return;
            } else {
                _0x3ec51f[_0xa087('0x5a')] = _0x3a81aa['hp'];
                _0x3ec51f[_0xa087('0x5b')] = _0x3a81aa['mp'];
                _0x3ec51f[_0xa087('0x5c')] = _0x3a81aa['tp'];
                _0x3ec51f[_0xa087('0x5d')] = _0x3a81aa[_0xa087('0x5e')];
            }
        }
    }
    static ['OnBattleActionCommand'](_0x4744f4) {
        var _0x5382e9, _0x4c97b9, _0x9d96e2, _0x27f277, _0x30c9e8, _0x17a135;
        _0x9d96e2 = _0x4744f4[_0xa087('0x9')];
        _0xa087('0x5f')['p'](_0x9d96e2['id']);
        if (_0x9d96e2['id'] === 'setResult') {
            _0x30c9e8 = BattleManager[_0xa087('0x58')](_0x9d96e2[_0xa087('0x60')]);
            _0x17a135 = BattleManager[_0xa087('0x58')](_0x9d96e2[_0xa087('0x61')]);
            if (_0x30c9e8 != null) {
                if (_0xa087('0x62') !== _0xa087('0x62')) {
                    if (_0x5382e9 != null) {
                        _0x5382e9[_0xa087('0x63')](_0x9d96e2[_0xa087('0x64')]);
                    }
                    return;
                } else {
                    _0x30c9e8[_0xa087('0x65')]();
                }
            }
            _0x27f277 = new Game_ActionResult();
            _0x27f277[_0xa087('0x66')](_0x9d96e2[_0xa087('0x67')]);
            _0x17a135[_0xa087('0x68')] = _0x27f277;
            return;
        }
        _0x4c97b9 = $gameParty[_0xa087('0x69')](_0x9d96e2[_0xa087('0x6a')]);
        _0x5382e9 = _0x4c97b9[_0xa087('0x6b')]();
        if (_0x9d96e2['id'] === _0xa087('0x6c')) {
            if (_0xa087('0x6d') !== _0xa087('0x6d')) {
                BattleManager[_0xa087('0x6e')](_0x9d96e2[_0xa087('0x6f')]);
                return;
            } else {
                if (_0x5382e9 != null) {
                    _0x5382e9['setSkillFromNet'](_0x9d96e2[_0xa087('0x64')]);
                }
                return;
            }
        }
        if (_0x9d96e2['id'] === 'setItem') {
            if (_0x5382e9 != null) {
                _0x5382e9[_0xa087('0x63')](_0x9d96e2[_0xa087('0x64')]);
            }
            return;
        }
        if (_0x9d96e2['id'] === _0xa087('0x70')) {
            if (_0xa087('0x71') === _0xa087('0x72')) {
                var _0x43d811;
                try {
                    'START\x20SHARED\x20EVENT\x20FROM\x20NETWORK'['p']();
                    return $gameMap[_0xa087('0x73')](_0x4744f4[_0xa087('0x9')]);
                } catch (_0x482f7d) {
                    _0x43d811 = _0x482f7d;
                    return Network[_0xa087('0x22')](_0x43d811, _0xa087('0x51'));
                }
            } else {
                if (_0x5382e9 != null) {
                    if (_0xa087('0x74') === 'cAghN') {
                        var _0xfbd846, _0x309bbb, _0x5736c3;
                        try {
                            _0x309bbb = _0x4744f4[_0xa087('0x9')]['mapId'];
                            if ($gameMap[_0xa087('0x10')]() !== _0x309bbb) {
                                'SERVER\x20MAP\x20IS\x20OTHER,\x20TRANSFER\x20PLAYER!'['p']();
                                _0x5736c3 = _0x4744f4['data'];
                                return $gamePlayer['reserveTransfer'](_0x309bbb, _0x5736c3['x'], _0x5736c3['y'], _0x5736c3['d'], 0x0);
                            }
                        } catch (_0x59e445) {
                            _0xfbd846 = _0x59e445;
                            return Network['error'](_0xfbd846, 'While\x20try\x20synchronize\x20game\x20map\x20with\x20Server');
                        }
                    } else {
                        _0x5382e9[_0xa087('0x75')](_0x9d96e2[_0xa087('0x64')]);
                    }
                }
            }
        }
    }
    static [_0xa087('0x76')](_0x17f300) {
        var _0x583889, _0x185c9d;
        _0x185c9d = _0x17f300[_0xa087('0x9')];
        _0x583889 = _0x185c9d['id'];
        _0xa087('0x77')['p'](_0x583889);
        if (_0x583889 === _0xa087('0x78')) {
            BattleManager[_0xa087('0x79')] = BattleManager[_0xa087('0x7a')](_0x185c9d[_0xa087('0x7b')]);
            return;
        }
        if (_0x583889 === _0xa087('0x7c')) {
            $gameTroop[_0xa087('0x7d')](_0x185c9d[_0xa087('0x7e')]);
            return;
        }
        if (_0x583889 === 'endAction') {
            if (_0xa087('0x7f') === _0xa087('0x80')) {
                e = error;
                return Network['error'](e, _0xa087('0x81'));
            } else {
                BattleManager[_0xa087('0x82')]();
                return;
            }
        }
        if (_0x583889 === _0xa087('0x83')) {
            if (_0xa087('0x84') === 'izpAY') {
                BattleManager[_0xa087('0x83')]();
                return;
            } else {
                BattleManager[_0xa087('0x85')]();
                return;
            }
        }
        if (_0x583889 === _0xa087('0x86')) {
            if (_0xa087('0x87') === _0xa087('0x87')) {
                BattleManager[_0xa087('0x88')](_0x185c9d[_0xa087('0x89')]);
                return;
            } else {
                s[_0xa087('0x8a')]();
            }
        }
        if (_0x583889 === _0xa087('0x8b')) {
            BattleManager['_startActionFromNetwork'](_0x185c9d[_0xa087('0x6f')]);
            return;
        }
        if (_0x583889 === _0xa087('0x8c')) {
            BattleManager['_invokeNormalActionFromNetwork'](_0x185c9d['subjectId'], _0x185c9d[_0xa087('0x8d')]);
            return;
        }
        if (_0x583889 === _0xa087('0x8e')) {
            BattleManager['_abortBattleCommandFromNetwork']();
            return;
        }
        if (_0x583889 === _0xa087('0x8f')) {
            BattleManager[_0xa087('0x85')]();
            return;
        }
        if (_0x583889 === 'defeat') {
            BattleManager[_0xa087('0x90')]();
            return;
        }
        if (_0x583889 === _0xa087('0x91')) {
            if (_0xa087('0x92') !== _0xa087('0x93')) {
                BattleManager[_0xa087('0x94')](_0x185c9d['success']);
            } else {
                'SERVER\x20MAP\x20IS\x20OTHER,\x20TRANSFER\x20PLAYER!'['p']();
                transferData = _0x17f300[_0xa087('0x9')];
                return $gamePlayer['reserveTransfer'](mapId, transferData['x'], transferData['y'], transferData['d'], 0x0);
            }
        }
    }
    static [_0xa087('0x95')](_0x53e73e) {
        var _0x510467, _0x3de1d5;
        _0xa087('0x96')['p']();
        try {
            _0x510467 = NetPartyManager[_0xa087('0x24')](_0x53e73e[_0xa087('0x4')]);
            if (!Network[_0xa087('0x97')]()) {
                if (_0xa087('0x98') === 'wUquT') {
                    playerData = NetPartyManager['getPlayer'](_0x53e73e[_0xa087('0x4')]);
                    return playerData[_0xa087('0x10')] = _0x53e73e[_0xa087('0x9')];
                } else {
                    return _0x510467 != null ? _0x510467[_0xa087('0x99')](_0x53e73e[_0xa087('0x9')]) : void 0x0;
                }
            }
        } catch (_0x3df096) {
            _0x3de1d5 = _0x3df096;
            return Network[_0xa087('0x22')](_0x3de1d5, 'While\x20start\x20network\x20icon');
        }
    }
    static [_0xa087('0x9a')](_0x207bbb) {
        var _0x35586a, _0x84a51c, _0x52b8fa, _0x287d4f, _0x5049f7;
        'VIRTUAL\x20INTERPRETER'['p'](_0x207bbb[_0xa087('0x9')]['id']);
        _0x35586a = _0x207bbb[_0xa087('0x9')];
        try {
            _0x52b8fa = new Game_Interpreter();
            _0x52b8fa[_0xa087('0x9b')] = _0x35586a[_0xa087('0x9c')];
            _0x52b8fa[_0xa087('0x9d')] = _0x35586a[_0xa087('0x10')];
            _0x52b8fa['_eventId'] = _0x35586a[_0xa087('0x36')];
            _0x52b8fa[_0xa087('0x9e')] = [];
            _0x52b8fa[_0xa087('0x9e')][0x0] = {
                'code': _0x35586a['id'],
                'indent': 0x0,
                'parameters': _0x35586a[_0xa087('0x9c')]
            };
            _0x5049f7 = _0xa087('0x9f') + _0x35586a['id'];
            _0x287d4f = _0x52b8fa[_0x5049f7];
            if (_0x287d4f != null && typeof _0x287d4f === _0xa087('0xa0')) {
                _0x52b8fa[_0x5049f7]();
                if (SceneManager[_0xa087('0xa1')]()) {
                    SceneManager['safeRefreshCurrentScene']();
                }
            }
            return _0x52b8fa[_0xa087('0xa2')]();
        } catch (_0x3a9f9d) {
            if (_0xa087('0xa3') === 'jqLRh') {
                _0x84a51c = _0x3a9f9d;
                return Network['error'](_0x84a51c, _0xa087('0xa4'));
            } else {
                _0x84a51c = _0x3a9f9d;
                return Network[_0xa087('0x22')](_0x84a51c, _0xa087('0xa5'));
            }
        }
    }
    static [_0xa087('0xa6')](_0xb0eec5) {
        var _0x215a67, _0x4e734e, _0x265324, _0x2d37d4;
        _0xa087('0xa7')['p']();
        _0x215a67 = _0xb0eec5['data'];
        try {
            if ('nZqpI' === 'nZqpI') {
                _0x265324 = new Game_Interpreter();
                _0x265324['_mapId'] = _0x215a67[_0xa087('0x10')];
                _0x265324[_0xa087('0xa8')] = _0x215a67[_0xa087('0x36')];
                _0x2d37d4 = _0xb0eec5[_0xa087('0x9')]['script'];
                _0x265324[_0xa087('0xa9')](_0x2d37d4);
                if (SceneManager['isCurrentSceneIsMenuBased']()) {
                    SceneManager[_0xa087('0x48')]();
                }
                return _0x265324[_0xa087('0xa2')]();
            } else {
                char = NetPartyManager[_0xa087('0x24')](_0xb0eec5[_0xa087('0x4')]);
                if (!Network[_0xa087('0x97')]()) {
                    return char != null ? char[_0xa087('0x99')](_0xb0eec5[_0xa087('0x9')]) : void 0x0;
                }
            }
        } catch (_0x243dc2) {
            _0x4e734e = _0x243dc2;
            return Network[_0xa087('0x22')](_0x4e734e, _0xa087('0xaa'));
        }
    }
    static [_0xa087('0xab')](_0x4c969d) {
        return _0xa087('0xac')['p']();
    }
    static [_0xa087('0xad')](_0x1fa936) {
        var _0x4d0f0b, _0x204ebf;
        try {
            NetPartyManager['onActorDataFromNetwork'](_0x1fa936[_0xa087('0x4')], _0x1fa936[_0xa087('0x9')]);
            try {
                if (_0xa087('0xae') === _0xa087('0xaf')) {
                    _0x204ebf = error;
                    return Network['error'](_0x204ebf, 'while\x20accept\x20new\x20chat\x20message');
                } else {
                    if (Network[_0xa087('0x7')]()) {
                        _0x4d0f0b = NetPartyManager['getActorIdBySocketId'](_0x1fa936['from']);
                        if (_0x4d0f0b != null) {
                            if (_0xa087('0xb0') === 'rUZEO') {
                                return Network[_0xa087('0x4d')][_0xa087('0x4e')](_0x4d0f0b, _0x1fa936[_0xa087('0x9')]);
                            } else {
                                act[_0xa087('0xb1')](data[_0xa087('0x64')]);
                            }
                        }
                    }
                }
            } catch (_0x3a0940) {
                if (_0xa087('0xb2') === 'Olzod') {
                    _0x204ebf = _0x3a0940;
                    return Network[_0xa087('0x22')](_0x204ebf, 'While\x20try\x20save\x20another\x20actor\x20data');
                } else {
                    'START\x20ENCOUNTER\x20FROM\x20NETWORK'['p']();
                    data = _0x1fa936[_0xa087('0x9')];
                    return $gamePlayer[_0xa087('0xb3')](data['troopId']);
                }
            }
        } catch (_0x423876) {
            _0x204ebf = _0x423876;
            return Network[_0xa087('0x22')](_0x204ebf, _0xa087('0x2b'));
        }
    }
    static ['OnHostGameMapId'](_0x17b086) {
        var _0x1a8503, _0x327b64, _0x4df6c0;
        try {
            _0x327b64 = _0x17b086[_0xa087('0x9')][_0xa087('0x10')];
            if ($gameMap[_0xa087('0x10')]() !== _0x327b64) {
                'SERVER\x20MAP\x20IS\x20OTHER,\x20TRANSFER\x20PLAYER!'['p']();
                _0x4df6c0 = _0x17b086[_0xa087('0x9')];
                return $gamePlayer['reserveTransfer'](_0x327b64, _0x4df6c0['x'], _0x4df6c0['y'], _0x4df6c0['d'], 0x0);
            }
        } catch (_0x399ec4) {
            if (_0xa087('0xb4') !== _0xa087('0xb4')) {
                return;
            } else {
                _0x1a8503 = _0x399ec4;
                return Network[_0xa087('0x22')](_0x1a8503, _0xa087('0xb5'));
            }
        }
    }
    static [_0xa087('0xb6')](_0x44d28a) {
        var _0x28d6ab, _0x2db6cb;
        try {
            _0x2db6cb = _0x44d28a['data'];
            NetPartyManager['onActroItemsFromNetwork'](_0x44d28a[_0xa087('0x4')], _0x2db6cb[_0xa087('0x13')]);
            NetPartyManager[_0xa087('0x14')](_0x44d28a['from'], _0x2db6cb[_0xa087('0x15')]);
            return NetWorldManager[_0xa087('0xb7')](_0x2db6cb);
        } catch (_0x132932) {
            _0x28d6ab = _0x132932;
            return Network[_0xa087('0x22')](_0x28d6ab, _0xa087('0x81'));
        }
    }
    static [_0xa087('0xb8')](_0x81d970) {
        var _0x2035e1;
        try {
            return NetWorldManager[_0xa087('0xb9')](_0x81d970['data']);
        } catch (_0xa7e6bd) {
            _0x2035e1 = _0xa7e6bd;
            return Network[_0xa087('0x22')](_0x2035e1, _0xa087('0x23'));
        }
    }
    static [_0xa087('0xba')](_0x4d49a7) {
        var _0x13d950, _0x32ac5f;
        try {
            _0x32ac5f = NetPartyManager[_0xa087('0xbb')](_0x4d49a7['from']);
            return _0x32ac5f['mapId'] = _0x4d49a7[_0xa087('0x9')];
        } catch (_0x4f4157) {
            _0x13d950 = _0x4f4157;
            return Network[_0xa087('0x22')](_0x13d950, 'While\x20try\x20load\x20global\x20world\x20data\x20from\x20server');
        }
    }
    static [_0xa087('0xbc')](_0x1aa860) {
        var _0x28cd8e, _0x20dc2f, _0x15e930, _0x3c5a97;
        try {
            _0x15e930 = _0x1aa860[_0xa087('0x9')];
            if ($gameMap['mapId']() === _0x15e930) {
                if (_0xa087('0xbd') === _0xa087('0xbd')) {
                    _0x20dc2f = $gameMap[_0xa087('0x1f')]();
                    _0x3c5a97 = {
                        'mapId': $gameMap[_0xa087('0x10')](),
                        'mapData': _0x20dc2f
                    };
                    NetMessage[_0xa087('0xbe')]()[_0xa087('0xd')](_0x3c5a97);
                    return NetMessage['RequestPlayerData']()[_0xa087('0xd')]();
                } else {
                    _0x28cd8e = error;
                    return Network[_0xa087('0x22')](_0x28cd8e, _0xa087('0xbf'));
                }
            }
        } catch (_0x32abc5) {
            if (_0xa087('0xc0') !== _0xa087('0xc0')) {
                return SceneManager[_0xa087('0xc1')][_0xa087('0xc2')]();
            } else {
                _0x28cd8e = _0x32abc5;
                return Network[_0xa087('0x22')](_0x28cd8e, 'While\x20try\x20response\x20to\x20server\x20map\x20data\x20events\x20request');
            }
        }
    }
    static [_0xa087('0xc3')](_0x4f8517) {
        var _0x30c3ff, _0x33fb06, _0x43a945;
        try {
            if ('HLZLM' === 'cgbPj') {
                return Network[_0xa087('0xc4')]();
            } else {
                _0x43a945 = _0x4f8517[_0xa087('0x9')][_0xa087('0x10')];
                if ($gameMap[_0xa087('0x10')]() === _0x43a945) {
                    _0x33fb06 = _0x4f8517[_0xa087('0x9')][_0xa087('0xc5')];
                    return $gameMap[_0xa087('0x25')](_0x33fb06);
                }
            }
        } catch (_0x2ba569) {
            _0x30c3ff = _0x2ba569;
            return Network[_0xa087('0x22')](_0x30c3ff, _0xa087('0xc6'));
        }
    }
    static ['OnSetOwner'](_0x4e3b32) {
        _0xa087('0xc7')['p']();
        return Network[_0xa087('0xc8')] = !![];
    }
    static ['OnUserApiCommand'](_0x576df0) {
        var _0x2ae12a, _0x160c01, _0x30bc43;
        try {
            _0x2ae12a = _0x576df0['data'][_0xa087('0xc9')];
            _0x30bc43 = _0x576df0[_0xa087('0x9')]['parameters'];
            return uAPI[_0x2ae12a](..._0x30bc43);
        } catch (_0x4375ac) {
            if (_0xa087('0xca') !== 'IHeUR') {
                _0x160c01 = _0x4375ac;
                return Network['error'](_0x160c01, _0xa087('0xcb'));
            } else {
                _0xa087('0x49')['p']();
                _ = _0x576df0['data'];
                if ($gameMap['mapId']() !== _[_0xa087('0x10')]) {
                    return;
                }
                return $gameMap[_0xa087('0x4a')](_['eventId'], _[_0xa087('0x37')]);
            }
        }
    }
    static [_0xa087('0xcc')](_0x59eb5f) {
        return Network[_0xa087('0xcd')](_0x59eb5f[_0xa087('0x9')]);
    }
    static [_0xa087('0xce')](_0x144d76) {
        var _0x5ac4e6, _0x28f14d, _0x5540ee, _0x423253, _0x394642, _0x2aaf70, _0x2a75f0, _0x3b2ed0;
        try {
            _0x5540ee = _0x144d76[_0xa087('0x9')];
            _0x28f14d = _0x5540ee['id'];
            _0xa087('0xcf')['p'](_0x28f14d);
            if (_0x28f14d === _0xa087('0xd0')) {
                _0x5ac4e6 = JsonEx['parse'](_0x5540ee[_0xa087('0xd1')]);
                BattleManager[_0xa087('0xd2')](_0x5ac4e6);
                return;
            }
            if (_0x28f14d === _0xa087('0xd3')) {
                BattleManager[_0xa087('0xd4')]();
                return;
            }
            if (_0x28f14d === 'startActionPvP') {
                _0x5ac4e6 = JsonEx['parse'](_0x5540ee[_0xa087('0xd1')]);
                BattleManager[_0xa087('0xd5')](_0x5540ee[_0xa087('0x89')], _0x5ac4e6, _0x5540ee[_0xa087('0x6f')]);
                return;
            }
            if (_0x28f14d === 'invokeNormalActionPvP') {
                _0x2a75f0 = JsonEx[_0xa087('0xd6')](_0x5540ee[_0xa087('0xd7')]);
                _0x3b2ed0 = JsonEx['parse'](_0x5540ee[_0xa087('0xd8')]);
                BattleManager['_invokeNormalActionFromNetworkPvP'](_0x5540ee['subjectId'], _0x5540ee[_0xa087('0x8d')], _0x2a75f0, _0x3b2ed0);
                return;
            }
            if (_0x28f14d === _0xa087('0xd9')) {
                _0x423253 = JsonEx[_0xa087('0xd6')](_0x5540ee[_0xa087('0xda')]);
                _0x394642 = JsonEx[_0xa087('0xd6')](_0x5540ee['targetData']);
                BattleManager[_0xa087('0xdb')](_0x423253, _0x394642);
            }
        } catch (_0x262078) {
            if (_0xa087('0xdc') === _0xa087('0xdc')) {
                _0x2aaf70 = _0x262078;
                return Network[_0xa087('0x22')](_0x2aaf70, _0xa087('0xdd'));
            } else {
                sbj[_0xa087('0x65')]();
            }
        }
    }
    static [_0xa087('0xde')](_0x254b6e) {
        var _0x368adb, _0xef4ccf;
        try {
            if (_0xa087('0xdf') === _0xa087('0xe0')) {
                action = JsonEx[_0xa087('0xd6')](data[_0xa087('0xd1')]);
                BattleManager[_0xa087('0xd2')](action);
                return;
            } else {
                _0x368adb = NetPartyManager[_0xa087('0xe1')](_0x254b6e[_0xa087('0x4')]);
                if (_0x368adb != null) {
                    return Network[_0xa087('0xe2')](_0x368adb, _0x254b6e[_0xa087('0x9')]);
                }
            }
        } catch (_0x1b4873) {
            _0xef4ccf = _0x1b4873;
            return Network[_0xa087('0x22')](_0xef4ccf, _0xa087('0xe3'));
        }
    }
    static [_0xa087('0xe4')](_0x5a4d21) {
        var _0x57b891, _0x19eaa2;
        try {
            _0xa087('0xe5')['p']();
            if (!ClientManager['_isTradeRequestForMe'](_0x5a4d21)) {
                return;
            }
            if (!ClientManager[_0xa087('0xe6')]()) {
                return;
            }
            _0x19eaa2 = SceneManager[_0xa087('0xc1')];
            'PROPER\x20SCENE'['p']();
            if (_0x19eaa2[_0xa087('0xe7')]()) {
                _0x19eaa2[_0xa087('0xe8')]();
                if (ClientManager['_isProperSceneForTrade']()) {
                    _0x19eaa2[_0xa087('0x8a')]();
                }
                $gameTemp[_0xa087('0xe9')] = ANET[_0xa087('0x18')][_0xa087('0xea')]['FromNetwork'](_0x5a4d21[_0xa087('0x9')]);
                $gameTemp[_0xa087('0xe9')][_0xa087('0xeb')]();
                $gameTemp[_0xa087('0xec')]['consume']();
                return Network[_0xa087('0xed')]();
            }
        } catch (_0x23981b) {
            _0x57b891 = _0x23981b;
            return Network[_0xa087('0x22')](_0x57b891, _0xa087('0xee'));
        }
    }
    static [_0xa087('0xef')](_0x3045ff) {
        var _0x2f626b, _0x135604;
        try {
            _0x2f626b = NetPartyManager[_0xa087('0xe1')](_0x3045ff[_0xa087('0x4')]);
            if (_0x2f626b != null) {
                if (_0xa087('0xf0') !== 'qOOXh') {
                    return _0x2f626b === $gameTemp[_0xa087('0xf1')];
                } else {
                    Network[_0xa087('0x8')] = _0x3045ff[_0xa087('0x9')];
                    Network['myPlayerData'] = Network['playerData'](Network[_0xa087('0xf2')]());
                }
            } else {
                if (_0xa087('0xf3') === _0xa087('0xf3')) {
                    return ![];
                } else {
                    mapId = _0x3045ff['data'][_0xa087('0x10')];
                    if ($gameMap[_0xa087('0x10')]() === mapId) {
                        mapData = _0x3045ff[_0xa087('0x9')]['mapData'];
                        return $gameMap['synchronizeFromNetwork'](mapData);
                    }
                }
            }
        } catch (_0x4206bf) {
            if (_0xa087('0xf4') !== 'szpZf') {
                _0x135604 = _0x4206bf;
                Network['error'](_0x135604, _0xa087('0xf5'));
                return ![];
            } else {
                _0x135604 = _0x4206bf;
                return Network[_0xa087('0x22')](_0x135604, _0xa087('0x38'));
            }
        }
    }
    static [_0xa087('0xe6')]() {
        return SceneManager[_0xa087('0xc1')] instanceof ANET['LIBS'][_0xa087('0xf6')];
    }
    static [_0xa087('0xf7')](_0x1bb753) {
        var _0x235367;
        try {
            if (!ClientManager[_0xa087('0xef')](_0x1bb753)) {
                return;
            }
            $gameTemp[_0xa087('0xe9')] = ANET[_0xa087('0x18')][_0xa087('0xea')][_0xa087('0xf8')](_0x1bb753[_0xa087('0x9')]);
            if (ClientManager['_isProperSceneForTrade']()) {
                if (_0xa087('0xf9') !== _0xa087('0xfa')) {
                    return SceneManager['_scene']['resetTradeState']();
                } else {
                    data = _0x1bb753['data'];
                    $gameTemp['networkWSelectedIndex'] = data['index'];
                    if ($gameTemp['networkWAction'] == null) {
                        return $gameTemp['networkWAction'] = data[_0xa087('0xd1')];
                    }
                }
            }
        } catch (_0x5aee64) {
            _0x235367 = _0x5aee64;
            return Network['error'](_0x235367, _0xa087('0xfb'));
        }
    }
    static [_0xa087('0xfc')](_0x1ff797) {
        return Network[_0xa087('0xfd')](_0x1ff797[_0xa087('0x9')]);
    }
    static [_0xa087('0xfe')](_0x42a21e) {
        var _0x23179d;
        try {
            if (!ClientManager[_0xa087('0xef')](_0x42a21e)) {
                if (_0xa087('0xff') === _0xa087('0x100')) {
                    _0x23179d = error;
                    return Network['error'](_0x23179d, _0xa087('0xfb'));
                } else {
                    return;
                }
            }
            return $gameTemp[_0xa087('0x101')] = !![];
        } catch (_0x2e72e2) {
            if (_0xa087('0x102') === _0xa087('0x103')) {
                varId = _0x42a21e[_0xa087('0x9')];
                if (!Network['isSyncedVariable'](varId)) {
                    Network['registerSyncVariable'](varId);
                }
            } else {
                _0x23179d = _0x2e72e2;
                return Network[_0xa087('0x22')](_0x23179d, _0xa087('0x104'));
            }
        }
    }
    static ['OnRegisterSyncVar'](_0x3e433b) {
        var _0xdf40cf, _0x201e05;
        try {
            _0x201e05 = _0x3e433b[_0xa087('0x9')];
            if (!Network[_0xa087('0x105')](_0x201e05)) {
                Network['registerSyncVariable'](_0x201e05);
            }
        } catch (_0x486a2f) {
            _0xdf40cf = _0x486a2f;
            Network[_0xa087('0x22')](_0xdf40cf, _0xa087('0x106'));
        }
    }
    static ['OnSyncVarValueChanged'](_0x108f23) {
        var _0x4cf976, _0x5a83de, _0x1a2f42;
        try {
            if (_0xa087('0x107') !== _0xa087('0x108')) {
                _0x1a2f42 = _0x108f23[_0xa087('0x9')][_0xa087('0x109')];
                _0x5a83de = _0x108f23[_0xa087('0x9')]['value'];
                if (!Network[_0xa087('0x105')](_0x1a2f42)) {
                    Network[_0xa087('0x3f')](_0x1a2f42);
                }
                $gameVariables[_0xa087('0x10a')](_0x1a2f42, _0x5a83de);
            } else {
                return ClientManager['_virtualUpdateThread'] = null;
            }
        } catch (_0x20347b) {
            _0x4cf976 = _0x20347b;
            Network[_0xa087('0x22')](_0x4cf976, 'while\x20register\x20sync\x20variable');
        }
    }
    static ['OnDisconnect']() {
        return ClientManager[_0xa087('0x1b')] = null;
    }
};
AlphaNET['register'](ClientManager);
})();

//Compressed by MV Plugin Builder
(function(){var _0x15e9 = [
    'registerNewPlayer',
    'players',
    'first',
    'myPlayerData',
    'mapId',
    '_isMapOwner',
    'sessionData',
    'LIBS',
    'NetSessionData',
    'OnNewPlayerConnected',
    'canConnectToServer',
    'AlertMessage',
    'send',
    'Server\x20is\x20Busy!\x20Try\x20again\x20later!',
    'disconnect',
    'isMaximumForNetwork',
    'Server\x20is\x20Full!',
    'allowConnect',
    'Connection\x20restricted\x20by\x20Server!',
    'WgZBf',
    'ooJML',
    'StartActorSelectForNewPlayer',
    'StartActorSelect',
    'networkActorsId',
    'OnPlayerSelectActor',
    '_GetClientById',
    'from',
    '_netServer',
    '_host',
    'data',
    'RegisterNewPlayer',
    'REGISTER\x20ACTOR\x20INDEX',
    'PlayersTableResponse',
    'PlayerConnect',
    'broadcast',
    'hasInfoAbout',
    'PlayerWorldData',
    'isMultiMode',
    'SugKO',
    'addClient',
    '_SendHostMapIdToClient',
    'getGlobalData',
    'getWorldDataNetwork',
    'GlobalWorldData',
    'error',
    'when\x20new\x20player\x20register',
    'direction',
    'HostGameMapId',
    'OnClientDisconnect',
    'oNdrw',
    'myRivalActorId',
    'BattleManagerPvP',
    '_CheckExistsOwner',
    'PlayerDisconnect',
    'setFrom',
    'EncounterTroopId',
    'IsEventPoolExists',
    'GVwWN',
    'CreateEventPool',
    'waitTag',
    'RegisterOnEncounterTroopId',
    'REGISTER\x20\x20ON\x20ENCTROOP',
    'waitId',
    'rVhac',
    'CfDVk',
    'SetOwner',
    '!!!\x20ABORT,\x20something\x20wrong!',
    'abortWaitPool',
    'StartSharedEvent',
    'SERVER\x20START\x20NET\x20MESSAGE',
    'AxgqB',
    'ANOTHER\x20OWNER',
    'eventId',
    'RegisterOnSharedEvent',
    'RegisterOnSharedEventSync',
    'REGISTER\x20\x20ON\x20EVENT\x20SYNC\x20LINE',
    'line',
    'toTgT',
    'NetWaitPool',
    '_waitPoolThread',
    'clientsCount',
    'AjzIE',
    'isPoolReady',
    'onWaitPoolReady',
    'RegisterOnSync',
    'SERVER\x20ACCEPT\x20SYNC\x20REQUEST',
    'RegisterOnSyncPool',
    'gGaPd',
    '_startSyncPoolThread',
    'YdiVq',
    'QNWEo',
    'JoSkM',
    'getPoolSize',
    'sJtIy',
    'dsPrB',
    'OnPlayerWorldData',
    'getActorIdBySocketId',
    'OnSyncEvent',
    'onEventSyncCommand',
    'OnVirtualInterpreter',
    'onEventVirtualCommand',
    'While\x20try\x20check\x20virtual\x20command\x20on\x20Server',
    'OnPlayerNetItemsData',
    'isHost',
    'NXRtw',
    'getAllData',
    'BIgPX',
    'While\x20try\x20save\x20another\x20actor\x20data',
    'forEach',
    'CDNoD',
    'RequestGameMapEventsData',
    'While\x20try\x20get\x20map\x20events\x20data\x20from\x20server',
    '_SendMapDataResponseToClient',
    '_getClientById',
    'SLIKa',
    'pGppS',
    'eVsfn',
    'setPlayerItemsData',
    'OnPlayerChangeMap',
    'while\x20get\x20map\x20data\x20response',
    'GameMapEventsDataResponse',
    'AcAnb',
    'UDsrD',
    'SEND\x20REQUEST\x20TO\x20PLAYER',
    'mrtrF',
    'ImFrk',
    'find',
    'JhTsC',
    'etAtP',
    'NOT\x20OWNER\x20ANYMORE',
    'OnPlayerRequestPvPWithAnother',
    'getPlayer',
    'getPlayerByIndex',
    'StartPvPBattle',
    'actorId',
    'aMEmU',
    'kfkcg',
    'VFfRy',
    'siyes',
    'StartTrade',
    'OnBattleManagerPvPCommand',
    'jRKkX',
    'qpSSS',
    'getPlayerByActorId',
    'startTurnPvP',
    'OYvpT',
    'kZzfC',
    'invokeNormalActionPvP',
    'endActionPvP',
    'SwOTw',
    'register',
    'Init',
    'serv',
    'instance',
    'eventWaitPool',
    'syncPools',
    'mapUpdateWaitPool',
    'mapOwnerPool',
    'RegisterHost',
    'REGISTER\x20HOST'
];
(function (_0x2b4883, _0x3f4e20) {
    var _0x1bf5df = function (_0x315193) {
        while (--_0x315193) {
            _0x2b4883['push'](_0x2b4883['shift']());
        }
    };
    _0x1bf5df(++_0x3f4e20);
}(_0x15e9, 0x1d7));
var _0x46dc = function (_0x184221, _0x27957c) {
    _0x184221 = _0x184221 - 0x0;
    var _0x296d8a = _0x15e9[_0x184221];
    return _0x296d8a;
};
var ServerManager;
ServerManager = class ServerManager {
    static [_0x46dc('0x0')](_0xe036e4) {
        this['_netServer'] = _0xe036e4;
        this[_0x46dc('0x1')] = _0xe036e4[_0x46dc('0x2')]();
        this[_0x46dc('0x3')] = null;
        this[_0x46dc('0x4')] = {};
        this[_0x46dc('0x5')] = {};
        return this[_0x46dc('0x6')] = {};
    }
    static [_0x46dc('0x7')](_0x3e7241, _0x1f2828) {
        _0x46dc('0x8')['p']();
        NetPartyManager[_0x46dc('0x9')](_0x3e7241['id'], _0x1f2828);
        Network['myPlayerData'] = Network[_0x46dc('0xa')][_0x46dc('0xb')]();
        Network[_0x46dc('0xc')][_0x46dc('0xd')] = $gameMap[_0x46dc('0xd')]();
        ServerManager[_0x46dc('0x6')][$gameMap[_0x46dc('0xd')]()] = _0x3e7241['id'];
        Network[_0x46dc('0xe')] = !![];
        if (Network[_0x46dc('0xf')] === null) {
            return Network[_0x46dc('0xf')] = new AlphaNET[(_0x46dc('0x10'))][(_0x46dc('0x11'))]();
        }
    }
    static [_0x46dc('0x12')](_0x34475b) {
        if (!Network[_0x46dc('0x13')]()) {
            NetMessage[_0x46dc('0x14')](_0x34475b)[_0x46dc('0x15')](_0x46dc('0x16'));
            _0x34475b[_0x46dc('0x17')]();
            return;
        }
        if ($gameParty[_0x46dc('0x18')]()) {
            NetMessage[_0x46dc('0x14')](_0x34475b)['send'](_0x46dc('0x19'));
            _0x34475b[_0x46dc('0x17')]();
            return;
        }
        if (!Network[_0x46dc('0x1a')]()) {
            NetMessage[_0x46dc('0x14')](_0x34475b)[_0x46dc('0x15')](_0x46dc('0x1b'));
            _0x34475b[_0x46dc('0x17')]();
            return;
        }
        if (ANET['P']['isAllowCharacterSelect']()) {
            if (_0x46dc('0x1c') === _0x46dc('0x1d')) {
                return;
            } else {
                return this[_0x46dc('0x1e')](_0x34475b);
            }
        } else {
            return this['RegisterNewPlayer'](_0x34475b);
        }
    }
    static ['StartActorSelectForNewPlayer'](_0x3df248) {
        return NetMessage[_0x46dc('0x1f')](_0x3df248)[_0x46dc('0x15')](Network[_0x46dc('0x20')]);
    }
    static [_0x46dc('0x21')](_0x53167e) {
        var _0x593aec;
        _0x593aec = ServerManager[_0x46dc('0x22')](_0x53167e[_0x46dc('0x23')]);
        if (_0x593aec === ServerManager[_0x46dc('0x24')][_0x46dc('0x25')]) {
            return ServerManager[_0x46dc('0x7')](_0x593aec, _0x53167e[_0x46dc('0x26')]);
        } else {
            return ServerManager[_0x46dc('0x27')](_0x593aec, _0x53167e[_0x46dc('0x26')]);
        }
    }
    static [_0x46dc('0x27')](_0x180eea, _0x42405b) {
        var _0x42146d, _0xc42c68, _0x535ea2, _0x4a4fd6;
        try {
            _0x46dc('0x28')['p'](_0x42405b);
            NetPartyManager[_0x46dc('0x9')](_0x180eea['id'], _0x42405b);
            NetMessage[_0x46dc('0x29')](ServerManager[_0x46dc('0x1')])[_0x46dc('0x15')](Network['players']);
            NetMessage[_0x46dc('0x2a')](_0x180eea)[_0x46dc('0x2b')]();
            _0x535ea2 = NetPartyManager['getActorIdBySocketId'](_0x180eea['id']);
            if (Network[_0x46dc('0xf')][_0x46dc('0x2c')](_0x535ea2)) {
                _0x4a4fd6 = Network[_0x46dc('0xf')]['getAllData'](_0x535ea2);
                NetMessage[_0x46dc('0x2d')](_0x180eea)[_0x46dc('0x15')](_0x4a4fd6);
            }
            if (!Network[_0x46dc('0x2e')]()) {
                if (_0x46dc('0x2f') !== _0x46dc('0x2f')) {
                    return ServerManager[_0x46dc('0x3')][_0x46dc('0x30')](networkData[_0x46dc('0x23')], !![]);
                } else {
                    ServerManager[_0x46dc('0x31')](_0x180eea);
                }
            }
            _0xc42c68 = Network['sessionData'][_0x46dc('0x32')]()[_0x46dc('0x33')]();
            return NetMessage[_0x46dc('0x34')](_0x180eea)[_0x46dc('0x15')](_0xc42c68);
        } catch (_0x153035) {
            _0x42146d = _0x153035;
            return Network[_0x46dc('0x35')](_0x42146d, _0x46dc('0x36'));
        }
    }
    static [_0x46dc('0x31')](_0x9eb99f) {
        var _0x2d0d7e;
        _0x2d0d7e = {
            'mapId': $gameMap[_0x46dc('0xd')](),
            'x': $gamePlayer['x'],
            'y': $gamePlayer['y'],
            'd': $gamePlayer[_0x46dc('0x37')]()
        };
        return NetMessage[_0x46dc('0x38')](_0x9eb99f)['send'](_0x2d0d7e);
    }
    static [_0x46dc('0x39')](_0x4c7967) {
        if (_0x4c7967['id'] === ServerManager[_0x46dc('0x24')][_0x46dc('0x25')]['id']) {
            if (_0x46dc('0x3a') !== 'zCfZs') {
                return Network['stopServer']();
            } else {
                _0x4c7967 = _getClient(data[_0x46dc('0x3b')]);
                NetMessage[_0x46dc('0x3c')](_0x4c7967)[_0x46dc('0x15')](data);
            }
        } else {
            ServerManager[_0x46dc('0x3d')](_0x4c7967['id']);
            return NetMessage[_0x46dc('0x3e')](_0x4c7967)[_0x46dc('0x3f')](_0x4c7967['id'])['broadcast']();
        }
    }
    static [_0x46dc('0x40')](_0x3444d9) {
        if (!ServerManager[_0x46dc('0x41')]()) {
            if (_0x46dc('0x42') !== _0x46dc('0x42')) {
                ServerManager[_0x46dc('0x43')](_0x3444d9[_0x46dc('0x26')]['eventId']);
            } else {
                ServerManager[_0x46dc('0x43')](_0x3444d9[_0x46dc('0x26')][_0x46dc('0x44')]);
            }
        }
        return ServerManager[_0x46dc('0x45')](_0x3444d9);
    }
    static ['RegisterOnEncounterTroopId'](_0x556b4d) {
        _0x46dc('0x46')['p']();
        if (ServerManager[_0x46dc('0x3')] != null && _0x556b4d[_0x46dc('0x26')][_0x46dc('0x44')] === ServerManager[_0x46dc('0x3')][_0x46dc('0x47')]) {
            if (_0x46dc('0x48') === _0x46dc('0x49')) {
                ServerManager[_0x46dc('0x6')][mapId] = _0x556b4d[_0x46dc('0x23')];
                client = ServerManager['_GetClientById'](_0x556b4d[_0x46dc('0x23')]);
                if (client != null) {
                    NetMessage[_0x46dc('0x4a')](client)[_0x46dc('0x15')]();
                }
            } else {
                return ServerManager[_0x46dc('0x3')][_0x46dc('0x30')](_0x556b4d[_0x46dc('0x23')], !![]);
            }
        } else {
            Network[_0x46dc('0x35')]('', _0x46dc('0x45'));
            _0x46dc('0x4b')['p']();
            return ServerManager[_0x46dc('0x24')][_0x46dc('0x4c')](_0x556b4d['from'], -0x64);
        }
    }
    static [_0x46dc('0x4d')](_0x143c35) {
        _0x46dc('0x4e')['p']();
        if (!ServerManager[_0x46dc('0x41')]()) {
            if ('FKGTo' === _0x46dc('0x4f')) {
                ServerManager[_0x46dc('0x6')][ownedMap] = playerOnMap['id'];
                client = ServerManager[_0x46dc('0x22')](playerOnMap['id']);
                if (client != null) {
                    NetMessage[_0x46dc('0x4a')](client)[_0x46dc('0x15')]();
                }
                return _0x46dc('0x50')['p']();
            } else {
                ServerManager[_0x46dc('0x43')](_0x143c35[_0x46dc('0x26')][_0x46dc('0x51')]);
            }
        }
        return ServerManager[_0x46dc('0x52')](_0x143c35);
    }
    static [_0x46dc('0x52')](_0x5a9ae1) {
        'REGISTER\x20\x20ON\x20EVENT'['p']();
        if (ServerManager['eventWaitPool'] != null && _0x5a9ae1['data']['eventId'] === ServerManager['eventWaitPool'][_0x46dc('0x47')]) {
            return ServerManager[_0x46dc('0x3')][_0x46dc('0x30')](_0x5a9ae1[_0x46dc('0x23')], !![]);
        } else {
            Network[_0x46dc('0x35')]('', _0x46dc('0x52'));
            _0x46dc('0x4b')['p']();
            return ServerManager[_0x46dc('0x24')]['abortWaitPool'](_0x5a9ae1[_0x46dc('0x23')], -0x64);
        }
    }
    static [_0x46dc('0x53')](_0x3111b2) {
        _0x46dc('0x54')['p'](_0x3111b2['data'][_0x46dc('0x55')]);
        if (!ServerManager[_0x46dc('0x41')]()) {
            ServerManager['CreateEventPool'](_0x3111b2[_0x46dc('0x26')][_0x46dc('0x51')]);
        }
        if (_0x3111b2[_0x46dc('0x26')]['eventId'] !== ServerManager[_0x46dc('0x3')][_0x46dc('0x47')]) {
            if ('dSIbD' !== _0x46dc('0x56')) {
                return;
            } else {
                _0x46dc('0x54')['p'](_0x3111b2[_0x46dc('0x26')]['line']);
                if (!ServerManager[_0x46dc('0x41')]()) {
                    ServerManager[_0x46dc('0x43')](_0x3111b2[_0x46dc('0x26')][_0x46dc('0x51')]);
                }
                if (_0x3111b2[_0x46dc('0x26')]['eventId'] !== ServerManager['eventWaitPool'][_0x46dc('0x47')]) {
                    return;
                }
                return ServerManager['eventWaitPool']['addClient'](_0x3111b2[_0x46dc('0x23')], !![]);
            }
        }
        return ServerManager[_0x46dc('0x3')][_0x46dc('0x30')](_0x3111b2['from'], !![]);
    }
    static [_0x46dc('0x41')]() {
        return this[_0x46dc('0x3')] != null;
    }
    static [_0x46dc('0x43')](_0x758889) {
        var _0x4f9233;
        ServerManager[_0x46dc('0x3')] = new AlphaNET[(_0x46dc('0x10'))][(_0x46dc('0x57'))](_0x758889);
        return ServerManager[_0x46dc('0x58')] = setTimeout(_0x4f9233 = function () {
            var _0x505fb6, _0x24982b;
            if (((_0x24982b = ServerManager['eventWaitPool']) != null ? _0x24982b['getPoolSize']() : void 0x0) === ServerManager[_0x46dc('0x24')][_0x46dc('0x59')]()) {
                if ('qyOOK' !== _0x46dc('0x5a')) {
                    if (ServerManager[_0x46dc('0x3')][_0x46dc('0x5b')]()) {
                        _0x505fb6 = ServerManager[_0x46dc('0x3')][_0x46dc('0x47')];
                        ServerManager[_0x46dc('0x24')][_0x46dc('0x5c')](_0x505fb6);
                        ServerManager[_0x46dc('0x3')] = null;
                        return;
                    }
                } else {
                    ServerManager[_0x46dc('0x3d')](client['id']);
                    return NetMessage['PlayerDisconnect'](client)['setFrom'](client['id'])[_0x46dc('0x2b')]();
                }
            }
            if (ServerManager[_0x46dc('0x3')] != null) {
                ServerManager[_0x46dc('0x58')] = setTimeout(_0x4f9233, 0x64);
            }
        }, 0x64);
    }
    static [_0x46dc('0x5d')](_0x4de375) {
        var _0xb09dfe;
        _0x46dc('0x5e')['p'](_0x4de375['data']);
        _0xb09dfe = _0x4de375[_0x46dc('0x26')];
        return ServerManager[_0x46dc('0x5f')](_0xb09dfe, _0x4de375[_0x46dc('0x23')]);
    }
    static ['RegisterOnSyncPool'](_0x41b953, _0x2f7335) {
        var _0x3374f5;
        if (ServerManager[_0x46dc('0x4')][_0x41b953] == null) {
            if (_0x46dc('0x60') === _0x46dc('0x60')) {
                ServerManager[_0x46dc('0x4')][_0x41b953] = new AlphaNET[(_0x46dc('0x10'))][(_0x46dc('0x57'))](_0x41b953);
                ServerManager[_0x46dc('0x61')](_0x41b953);
            } else {
                return ServerManager[_0x46dc('0x7')](_0x2f7335, networkData['data']);
            }
        }
        _0x3374f5 = ServerManager[_0x46dc('0x4')][_0x41b953];
        return _0x3374f5[_0x46dc('0x30')](_0x2f7335, !![]);
    }
    static ['_startSyncPoolThread'](_0x170da6) {
        var _0x215709;
        return setTimeout(_0x215709 = function () {
            if (_0x46dc('0x62') === _0x46dc('0x63')) {
                return;
            } else {
                var _0x46b62d, _0x3b7595;
                _0x46b62d = ServerManager[_0x46dc('0x4')][_0x170da6];
                if (_0x46b62d == null) {
                    if (_0x46dc('0x64') !== 'JoSkM') {
                        client = _getClient(data[_0x46dc('0x3b')]);
                        NetMessage[_0x46dc('0x3c')](client)[_0x46dc('0x15')](data);
                        return;
                    } else {
                        return;
                    }
                }
                _0x3b7595 = ServerManager[_0x46dc('0x24')][_0x46dc('0x59')]();
                if (_0x46b62d[_0x46dc('0x65')]() === _0x3b7595 && _0x46b62d[_0x46dc('0x5b')]()) {
                    if (_0x46dc('0x66') === _0x46dc('0x67')) {
                        Network[_0x46dc('0x35')]('', _0x46dc('0x52'));
                        _0x46dc('0x4b')['p']();
                        return ServerManager[_0x46dc('0x24')][_0x46dc('0x4c')](networkData[_0x46dc('0x23')], -0x64);
                    } else {
                        ServerManager['_netServer'][_0x46dc('0x5c')](_0x46b62d['waitId']);
                        ServerManager[_0x46dc('0x4')][_0x170da6] = null;
                        return;
                    }
                } else {
                    setTimeout(_0x215709, 0x64);
                }
            }
        }, 0x64);
    }
    static [_0x46dc('0x68')](_0x3e0dea) {
        var _0x4ad254;
        _0x4ad254 = NetPartyManager[_0x46dc('0x69')](_0x3e0dea[_0x46dc('0x23')]);
        if (_0x4ad254 == null) {
            return;
        }
        Network[_0x46dc('0xf')]['setPlayerWorldData'](_0x4ad254, _0x3e0dea[_0x46dc('0x26')]);
    }
    static [_0x46dc('0x6a')](_0x5bfaaa) {
        return NetWorldManager[_0x46dc('0x6b')](_0x5bfaaa['data']);
    }
    static [_0x46dc('0x6c')](_0x2588f4) {
        var _0x4c1f04, _0x319fb6;
        _0x4c1f04 = _0x2588f4[_0x46dc('0x26')];
        try {
            return NetWorldManager[_0x46dc('0x6d')](_0x4c1f04);
        } catch (_0x3ae0ff) {
            _0x319fb6 = _0x3ae0ff;
            return Network[_0x46dc('0x35')](_0x319fb6, _0x46dc('0x6e'));
        }
    }
    static [_0x46dc('0x6f')](_0x239110) {
        var _0xbbd01a, _0x2a9a75;
        try {
            if (Network[_0x46dc('0x70')]()) {
                if (_0x46dc('0x71') !== 'KtKhh') {
                    _0xbbd01a = NetPartyManager[_0x46dc('0x69')](_0x239110[_0x46dc('0x23')]);
                    return Network[_0x46dc('0xf')]['setPlayerItemsData'](_0xbbd01a, _0x239110[_0x46dc('0x26')]);
                } else {
                    'REGISTER\x20ACTOR\x20INDEX'['p'](actorIndex);
                    NetPartyManager[_0x46dc('0x9')](client['id'], actorIndex);
                    NetMessage['PlayersTableResponse'](ServerManager[_0x46dc('0x1')])['send'](Network[_0x46dc('0xa')]);
                    NetMessage[_0x46dc('0x2a')](client)[_0x46dc('0x2b')]();
                    newPlayerActorId = NetPartyManager[_0x46dc('0x69')](client['id']);
                    if (Network[_0x46dc('0xf')][_0x46dc('0x2c')](newPlayerActorId)) {
                        worldData = Network[_0x46dc('0xf')][_0x46dc('0x72')](newPlayerActorId);
                        NetMessage[_0x46dc('0x2d')](client)[_0x46dc('0x15')](worldData);
                    }
                    if (!Network['isMultiMode']()) {
                        ServerManager['_SendHostMapIdToClient'](client);
                    }
                    global = Network[_0x46dc('0xf')]['getGlobalData']()[_0x46dc('0x33')]();
                    return NetMessage[_0x46dc('0x34')](client)[_0x46dc('0x15')](global);
                }
            }
        } catch (_0x235a7b) {
            if (_0x46dc('0x73') !== _0x46dc('0x73')) {
                return item;
            } else {
                _0x2a9a75 = _0x235a7b;
                return Network['error'](_0x2a9a75, _0x46dc('0x74'));
            }
        }
    }
    static ['OnPlayerRequestMapData'](_0x13cfff) {
        var _0x2c7246, _0xfe6bba, _0x254326, _0x1cea11;
        try {
            ServerManager[_0x46dc('0x5')][_0x13cfff[_0x46dc('0x23')]] = _0x13cfff[_0x46dc('0x26')];
            _0x1cea11 = null;
            Network[_0x46dc('0xa')][_0x46dc('0x75')](function (_0x53356f) {
                if (_0x46dc('0x76') !== _0x46dc('0x76')) {
                    'SERVER\x20START\x20NET\x20MESSAGE'['p']();
                    if (!ServerManager['IsEventPoolExists']()) {
                        ServerManager['CreateEventPool'](_0x13cfff[_0x46dc('0x26')][_0x46dc('0x51')]);
                    }
                    return ServerManager[_0x46dc('0x52')](_0x13cfff);
                } else {
                    if (_0x53356f[_0x46dc('0xd')] === _0x13cfff[_0x46dc('0x26')] && _0x53356f['id'] !== _0x13cfff[_0x46dc('0x23')]) {
                        return _0x1cea11 = _0x53356f['id'];
                    }
                }
            });
            if (_0x1cea11 != null) {
                'SEND\x20REQUEST\x20TO\x20PLAYER'['p']();
                _0x2c7246 = ServerManager[_0x46dc('0x22')](_0x1cea11);
                if (_0x2c7246 != null) {
                    if ('orAlr' !== 'VlyNr') {
                        return NetMessage[_0x46dc('0x77')](_0x2c7246)['send'](_0x13cfff[_0x46dc('0x26')]);
                    } else {
                        if (ServerManager['eventWaitPool'][_0x46dc('0x5b')]()) {
                            poolId = ServerManager[_0x46dc('0x3')][_0x46dc('0x47')];
                            ServerManager[_0x46dc('0x24')][_0x46dc('0x5c')](poolId);
                            ServerManager[_0x46dc('0x3')] = null;
                            return;
                        }
                    }
                }
            } else {
                if ('pwHOt' === 'wJpNb') {
                    _0xfe6bba = error;
                    return Network[_0x46dc('0x35')](_0xfe6bba, _0x46dc('0x78'));
                } else {
                    _0x254326 = {
                        'mapId': _0x13cfff[_0x46dc('0x26')],
                        'mapData': []
                    };
                    return ServerManager[_0x46dc('0x79')](_0x13cfff[_0x46dc('0x23')], _0x254326);
                }
            }
        } catch (_0x399a6c) {
            _0xfe6bba = _0x399a6c;
            return Network['error'](_0xfe6bba, _0x46dc('0x78'));
        }
    }
    static [_0x46dc('0x22')](_0x1d0778) {
        return ServerManager[_0x46dc('0x24')][_0x46dc('0x7a')](_0x1d0778);
    }
    static ['OnMapDataResonpse'](_0x567e3b) {
        var _0x57d767, _0x32abb2, _0x4b2586, _0x129318;
        try {
            if (_0x46dc('0x7b') === _0x46dc('0x7b')) {
                _0x4b2586 = _0x567e3b['data'][_0x46dc('0xd')];
                _0x129318 = null;
                for (_0x32abb2 in ServerManager[_0x46dc('0x5')]) {
                    if (_0x46dc('0x7c') === _0x46dc('0x7d')) {
                        actorId = NetPartyManager[_0x46dc('0x69')](_0x567e3b['from']);
                        return Network[_0x46dc('0xf')][_0x46dc('0x7e')](actorId, _0x567e3b[_0x46dc('0x26')]);
                    } else {
                        if (ServerManager[_0x46dc('0x5')][_0x32abb2] === _0x4b2586) {
                            _0x129318 = _0x32abb2;
                            break;
                        }
                    }
                }
                if (_0x129318 != null) {
                    return ServerManager[_0x46dc('0x79')](_0x129318, _0x567e3b['data']);
                }
            } else {
                _0x57d767 = error;
                return Network[_0x46dc('0x35')](_0x57d767, _0x46dc('0x7f'));
            }
        } catch (_0x3e2ee9) {
            _0x57d767 = _0x3e2ee9;
            return Network['error'](_0x57d767, _0x46dc('0x80'));
        }
    }
    static [_0x46dc('0x79')](_0x590ae3, _0x100542) {
        var _0x1d77c2;
        _0x1d77c2 = ServerManager['_GetClientById'](_0x590ae3);
        if (_0x1d77c2 != null) {
            ServerManager[_0x46dc('0x5')][_0x590ae3] = null;
            NetMessage[_0x46dc('0x81')](_0x1d77c2)[_0x46dc('0x15')](_0x100542);
        }
    }
    static [_0x46dc('0x7f')](_0x4ae38d) {
        var _0x252b4e, _0x34c913, _0x16b22f;
        try {
            if (_0x46dc('0x82') === 'JxeQm') {
                var _0x4b1ac1, _0x1b46f1;
                if (((_0x1b46f1 = ServerManager[_0x46dc('0x3')]) != null ? _0x1b46f1[_0x46dc('0x65')]() : void 0x0) === ServerManager[_0x46dc('0x24')]['clientsCount']()) {
                    if (ServerManager[_0x46dc('0x3')]['isPoolReady']()) {
                        _0x4b1ac1 = ServerManager[_0x46dc('0x3')][_0x46dc('0x47')];
                        ServerManager['_netServer'][_0x46dc('0x5c')](_0x4b1ac1);
                        ServerManager[_0x46dc('0x3')] = null;
                        return;
                    }
                }
                if (ServerManager[_0x46dc('0x3')] != null) {
                    ServerManager[_0x46dc('0x58')] = setTimeout(mama, 0x64);
                }
            } else {
                if (!Network[_0x46dc('0x2e')]()) {
                    if (_0x46dc('0x83') !== 'UDsrD') {
                        _0x46dc('0x84')['p']();
                        _0x252b4e = ServerManager[_0x46dc('0x22')](playerId);
                        if (_0x252b4e != null) {
                            return NetMessage[_0x46dc('0x77')](_0x252b4e)[_0x46dc('0x15')](_0x4ae38d['data']);
                        }
                    } else {
                        return;
                    }
                }
                ServerManager[_0x46dc('0x3d')](_0x4ae38d[_0x46dc('0x23')]);
                _0x16b22f = _0x4ae38d[_0x46dc('0x26')];
                if (ServerManager[_0x46dc('0x6')][_0x16b22f] == null) {
                    ServerManager['mapOwnerPool'][_0x16b22f] = _0x4ae38d['from'];
                    _0x252b4e = ServerManager[_0x46dc('0x22')](_0x4ae38d['from']);
                    if (_0x252b4e != null) {
                        NetMessage[_0x46dc('0x4a')](_0x252b4e)[_0x46dc('0x15')]();
                    }
                }
            }
        } catch (_0x5537cd) {
            if ('mrtrF' === _0x46dc('0x85')) {
                _0x34c913 = _0x5537cd;
                return Network['error'](_0x34c913, _0x46dc('0x7f'));
            } else {
                var _0xac3d70;
                _0x46dc('0x5e')['p'](_0x4ae38d['data']);
                _0xac3d70 = _0x4ae38d[_0x46dc('0x26')];
                return ServerManager[_0x46dc('0x5f')](_0xac3d70, _0x4ae38d[_0x46dc('0x23')]);
            }
        }
    }
    static [_0x46dc('0x3d')](_0x2f7616) {
        var _0x3e94af, _0x435d82, _0x56cb87, _0x1c12f3;
        if (!Network[_0x46dc('0x2e')]()) {
            return;
        }
        _0x1c12f3 = null;
        _0x56cb87 = 0x0;
        for (_0x435d82 in ServerManager[_0x46dc('0x6')]) {
            if (ServerManager['mapOwnerPool'][_0x435d82] === _0x2f7616) {
                if (_0x46dc('0x86') === _0x46dc('0x86')) {
                    _0x1c12f3 = Network[_0x46dc('0xa')][_0x46dc('0x87')](function (_0x418b2e) {
                        if (_0x418b2e[_0x46dc('0xd')] === Number(_0x435d82)) {
                            if (_0x46dc('0x88') !== 'BAIuW') {
                                return _0x418b2e;
                            } else {
                                e = error;
                                return Network[_0x46dc('0x35')](e, 'OnBattleManagerPvPCommand');
                            }
                        }
                    });
                    if (_0x1c12f3 != null) {
                        if (_0x46dc('0x89') === _0x46dc('0x89')) {
                            _0x56cb87 = _0x435d82;
                            break;
                        } else {
                            return NetWorldManager[_0x46dc('0x6d')](data);
                        }
                    } else {
                        ServerManager[_0x46dc('0x6')][_0x435d82] = null;
                        _0x46dc('0x8a')['p']();
                    }
                } else {
                    e = error;
                    return Network[_0x46dc('0x35')](e, 'While\x20try\x20check\x20virtual\x20command\x20on\x20Server');
                }
            }
        }
        if (_0x1c12f3 != null) {
            ServerManager['mapOwnerPool'][_0x56cb87] = _0x1c12f3['id'];
            _0x3e94af = ServerManager[_0x46dc('0x22')](_0x1c12f3['id']);
            if (_0x3e94af != null) {
                NetMessage[_0x46dc('0x4a')](_0x3e94af)[_0x46dc('0x15')]();
            }
            return _0x46dc('0x50')['p']();
        }
    }
    static [_0x46dc('0x8b')](_0x430b77) {
        var _0x28c433, _0x436589, _0x5d0a11, _0x1586c0, _0x4d18e2;
        try {
            _0x1586c0 = NetPartyManager[_0x46dc('0x8c')](_0x430b77[_0x46dc('0x23')]);
            _0x4d18e2 = NetPartyManager[_0x46dc('0x8d')](_0x430b77['data']);
            _0x28c433 = ServerManager['_GetClientById'](_0x430b77[_0x46dc('0x23')]);
            _0x436589 = ServerManager[_0x46dc('0x22')](_0x4d18e2['id']);
            if (_0x28c433 && _0x436589) {
                NetMessage[_0x46dc('0x8e')](_0x28c433)[_0x46dc('0x15')](_0x4d18e2[_0x46dc('0x8f')]);
                return NetMessage[_0x46dc('0x8e')](_0x436589)[_0x46dc('0x15')](_0x1586c0[_0x46dc('0x8f')]);
            } else {
            }
        } catch (_0x1805ad) {
            _0x5d0a11 = _0x1805ad;
            return Network[_0x46dc('0x35')](_0x5d0a11, 'OnPlayerStartPvPWithAnother');
        }
    }
    static ['OnPlayerRequestTradeWithAnother'](_0x7fd362) {
        var _0x3f9490, _0x2adec2, _0x291684, _0x522855, _0x520864;
        try {
            if (_0x46dc('0x90') !== _0x46dc('0x91')) {
                _0x522855 = NetPartyManager[_0x46dc('0x8c')](_0x7fd362['from']);
                _0x520864 = NetPartyManager[_0x46dc('0x8d')](_0x7fd362[_0x46dc('0x26')]);
                _0x3f9490 = ServerManager[_0x46dc('0x22')](_0x7fd362[_0x46dc('0x23')]);
                _0x2adec2 = ServerManager[_0x46dc('0x22')](_0x520864['id']);
                if (_0x3f9490 && _0x2adec2) {
                    if (_0x46dc('0x92') === _0x46dc('0x93')) {
                        ServerManager[_0x46dc('0x31')](_0x3f9490);
                    } else {
                        NetMessage[_0x46dc('0x94')](_0x3f9490)['send'](_0x520864[_0x46dc('0x8f')]);
                        return NetMessage['StartTrade'](_0x2adec2)['send'](_0x522855[_0x46dc('0x8f')]);
                    }
                }
            } else {
                if (!ServerManager[_0x46dc('0x41')]()) {
                    ServerManager[_0x46dc('0x43')](_0x7fd362[_0x46dc('0x26')][_0x46dc('0x44')]);
                }
                return ServerManager[_0x46dc('0x45')](_0x7fd362);
            }
        } catch (_0x17690f) {
            _0x291684 = _0x17690f;
            return Network[_0x46dc('0x35')](_0x291684, 'OnPlayerRequestTradeWithAnother');
        }
    }
    static [_0x46dc('0x95')](_0x37c04f) {
        var _0x4b47e0, _0x5436da, _0x30e23a, _0x59d705, _0x43c517;
        try {
            if (_0x46dc('0x96') !== _0x46dc('0x97')) {
                _0x4b47e0 = function (_0x52cea1) {
                    var _0x5436da, _0x4eab4c;
                    _0x4eab4c = NetPartyManager[_0x46dc('0x98')](_0x52cea1);
                    _0x5436da = ServerManager[_0x46dc('0x22')](_0x4eab4c['id']);
                    return _0x5436da;
                };
                _0x59d705 = _0x37c04f[_0x46dc('0x26')];
                _0x30e23a = _0x59d705['id'];
                'BATTLE\x20:\x20MANAGER\x20PVP'['p'](_0x30e23a);
                if (_0x30e23a === 'inputActionPvP') {
                    _0x5436da = _0x4b47e0(_0x59d705[_0x46dc('0x3b')]);
                    NetMessage[_0x46dc('0x3c')](_0x5436da)[_0x46dc('0x15')](_0x59d705);
                    return;
                }
                if (_0x30e23a === _0x46dc('0x99')) {
                    if (_0x46dc('0x9a') !== _0x46dc('0x9b')) {
                        _0x5436da = _0x4b47e0(_0x59d705['whoStart']);
                        NetMessage[_0x46dc('0x3c')](_0x5436da)[_0x46dc('0x15')](_0x59d705);
                        return;
                    } else {
                        if (item['mapId'] === _0x37c04f[_0x46dc('0x26')] && item['id'] !== _0x37c04f[_0x46dc('0x23')]) {
                            return playerId = item['id'];
                        }
                    }
                }
                if (_0x30e23a === 'startActionPvP') {
                    _0x5436da = _0x4b47e0(_0x59d705[_0x46dc('0x3b')]);
                    NetMessage[_0x46dc('0x3c')](_0x5436da)[_0x46dc('0x15')](_0x59d705);
                    return;
                }
                if (_0x30e23a === _0x46dc('0x9c')) {
                    _0x5436da = _0x4b47e0(_0x59d705['myRivalActorId']);
                    NetMessage['BattleManagerPvP'](_0x5436da)[_0x46dc('0x15')](_0x59d705);
                    return;
                }
                if (_0x30e23a === _0x46dc('0x9d')) {
                    if ('fnwEz' !== _0x46dc('0x9e')) {
                        _0x5436da = _0x4b47e0(_0x59d705['myRivalActorId']);
                        NetMessage[_0x46dc('0x3c')](_0x5436da)[_0x46dc('0x15')](_0x59d705);
                    } else {
                        var _0x1b4ca3, _0x3d5c4f;
                        _0x1b4ca3 = _0x37c04f[_0x46dc('0x26')];
                        try {
                            return NetWorldManager[_0x46dc('0x6d')](_0x1b4ca3);
                        } catch (_0xd9da7c) {
                            _0x3d5c4f = _0xd9da7c;
                            return Network[_0x46dc('0x35')](_0x3d5c4f, _0x46dc('0x6e'));
                        }
                    }
                }
            } else {
                return ServerManager[_0x46dc('0x24')][_0x46dc('0x7a')](id);
            }
        } catch (_0x142bc7) {
            _0x43c517 = _0x142bc7;
            return Network[_0x46dc('0x35')](_0x43c517, _0x46dc('0x95'));
        }
    }
};
AlphaNET[_0x46dc('0x9f')](ServerManager);
})();

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AASprite.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Расширение - методы быстрого доступа к рисованию
var AASprite;

AASprite = class AASprite extends Sprite {
  constructor() {
    super(...arguments);
  }

  b() {
    return this.bitmap;
  }

  clear() {
    return this.bitmap.clear();
  }

  bNew(w, h) {
    if (h == null) {
      h = w;
    }
    return this.bitmap = new Bitmap(w, h);
  }

  bImg(filename) {
    return this.bitmap = ImageManager.loadAA(filename);
  }

  onReady(method) {
    if (method != null) {
      return this.bitmap.addLoadListener(method);
    }
  }

  fillAll(c) {
    return this.bitmap.fillAll(c);
  }

  add(child) {
    return this.addChild(child);
  }

  drawText() {
    return this.bitmap.drawText(...arguments);
  }

  drawTextFull(text, position) {
    return this.bitmap.drawTextFull(text, position);
  }

  drawIcon() {
    return this.bitmap.drawIcon(...arguments);
  }

  moveByJson(settings) {
    var pos;
    pos = ANET.Utils.getPositionPointFromJSON(settings);
    return this.move(pos.x, pos.y);
  }

  applyTextSettingsByJson(sprite, settings) {
    this.applyTextSettingsByExtraSettings(sprite, settings.text);
  }

  applyTextSettingsByExtraSettings(sprite, s) {
    sprite.move(s.marginX, s.marginY);
    sprite.b().fontSize = s.fontSize;
    sprite.b().textColor = KDCore.Color.FromHex(s.textColor).CSS;
    sprite.b().outlineWidth = s.outlineWidth;
    if (s.outlineColor != null) {
      sprite.b().outlineColor = KDCore.Color.FromHex(s.outlineColor).CSS;
    }
    if ((s.fontFace != null) && AlphaNET.isUseFonts()) {
      sprite.b().fontFace = s.fontFace;
    }
    sprite.b().fontItalic = s.fontItalic;
    sprite.visible = s.visible;
  }

  setGlowFilter(color, power = 0.8) { //color is 16 number, like 0xF00080
    if (PIXI.filters == null) {
      return;
    }
    return this.filters = [new PIXI.filters.GlowFilter(2, power, 0, color, 0.5)];
  }

  setOutlineFilter(color, power = 0.8) {
    if (PIXI.filters == null) {
      return;
    }
    return this.filters = [new PIXI.filters.OutlineFilter(power, color, 0.5)];
  }

  clearFilters() {
    return this.filters = [];
  }

  // * Не работает Push команда, это не массив?
  //_addNewFilter: (f) -> if @filters? then @filters.push(f) else @filters = [f]
  inPosition(point) {
    var rect, rx, ry;
    rx = KDCore.SDK.toGlobalCoord(this, 'x');
    ry = KDCore.SDK.toGlobalCoord(this, 'y');
    rect = new Rectangle(rx, ry, this.width, this.height);
    return ANET.Utils.Math.inRect(point, rect);
  }

  isReady() {
    var i, j, ref;
    if (this.bitmap != null) {
      if (!this.bitmap.isReady()) {
        return false;
      }
    }
    for (i = j = 0, ref = this.children.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      if (!this.children[i].bitmap.isReady()) {
        return false;
      }
    }
    return true;
  }

  static FromImg(filename) {
    var s;
    s = new AASprite();
    s.bImg(filename);
    return s;
  }

  static FromBitmap(w, h) {
    var s;
    s = new AASprite();
    s.bNew(w, h);
    return s;
  }

};

// ■ END AASprite.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AATimer.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
// * Time in FRAMES
var AATimer;

AATimer = class AATimer {
  constructor(maxValue1 = 0, value1 = 0) {
    this.maxValue = maxValue1;
    this.value = value1;
  }

  update() {
    if (!this.isReady()) {
      return this.value++;
    }
  }

  isReady() {
    return this.value >= this.maxValue;
  }

  start(maxValue) {
    this.reset();
    return this.maxValue = Math.abs(Math.round(maxValue));
  }

  reset() {
    return this.value = 0;
  }

  getPercent() {
    return this.value / this.maxValue;
  }

  getSeconds() {
    return AATimer.ConvertFramesToSeconds(this.value);
  }

  getMaxSeconds() {
    return AATimer.ConvertFramesToSeconds(this.maxValue);
  }

  static ConvertFramesToSeconds(value) {
    return Math.round((value / 60) * 10) / 10;
  }

};

// ■ END AATimer.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Alpha NET JSON Settings.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var ANJsonSettings;

ANJsonSettings = function() {
  throw new Error('This is a static class');
};

(function() {
  var _;
  //@[DEFINES]
  _ = ANJsonSettings;
  _.ChatSettings = 'ChatSettings';
  _.CharNameplate = 'CharNameplate';
  _.TradeWindowSettings = 'TradeWindowSettings';
  _.ActorActionMenuSettings = 'ActorActionMenuSettings';
  _.KeyBinding = 'KeyBinding';
  _._FILES = [_.CharNameplate, _.ChatSettings, _.TradeWindowSettings, _.ActorActionMenuSettings, _.KeyBinding];
  //@[PUBLIC]
  //@[=====================================================================]
  _.InitAndLoad = function() {
    var i, j, ref, results;
    this.data = {};
    results = [];
    for (i = j = 0, ref = _._FILES.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      results.push(_._loadAAJSONFile(_._FILES[i]));
    }
    return results;
  };
  _.getNamePlateDataForId = function(id) {
    return this.data[_.CharNameplate][id];
  };
  _.getChatSettings = function() {
    return this.data[_.ChatSettings];
  };
  _.getTradeWindowSettings = function() {
    return this.data[_.TradeWindowSettings];
  };
  _.getActorActionMenuSettings = function() {
    return this.data[_.ActorActionMenuSettings];
  };
  // * Надо загружать через другой метод
  _.getKeyBinding = function() {
    return this.data[_.KeyBinding];
  };
  //@[PRIVATE]
  //@[=====================================================================]
  _._loadAAJSONFile = function(name) {
    var src, url, xhr;
    xhr = new XMLHttpRequest();
    src = name + '.json';
    url = 'data/ANET/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
      var data, e, message;
      if (xhr.status < 400) {
        try {
          data = JSON.parse(xhr.responseText);
        } catch (error) {
          e = error;
          ANET.criticalError(e, "Error in JSON file " + src);
          return;
        }
        ANJsonSettings._loadJSONData(name, data);
        if (name === _.KeyBinding) {
          return ANJsonSettings._loadKeyBinding();
        }
      } else {
        message = url + " not found!";
        return ANET.criticalError(new Error(message), message);
      }
    };
    xhr.send();
  };
  _._loadJSONData = function(name, settings) {
    return this.data[name] = settings;
  };
  _._getSettingsById = function(id, name) {
    var result;
    result = this.data[_[name]].find(function(i) {
      return i.id === id;
    });
    if (result != null) {
      return result;
    }
    return ANET.criticalError(new Error('ID not found!'), id + ' not found in ' + name + '.json');
  };
  _._loadKeyBinding = function() {
    var db, keys;
    ANET.KEYS.loadDefaultKeyConfig();
    keys = [];
    db = _.getKeyBinding()[0].chat;
    keys[0] = db.inOutChatWindow;
    keys[1] = db.sayToChat;
    keys[2] = db.trade;
    keys[3] = db.pvp;
    return ANET.KEYS.loadKeyConfig(keys);
  };
})();

//@[EXTEND]
ANET.JSON = ANJsonSettings;

// ■ END Alpha NET JSON Settings.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ANSprite.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var ANSprite;

ANSprite = class ANSprite extends AASprite {
  constructor() {
    super();
  }

  bImg(filename) {
    return this.bitmap = ImageManager.loadNetwork(filename);
  }

  static FromImg(filename) {
    var s;
    s = new ANSprite();
    s.bImg(filename);
    return s;
  }

  static FromBitmap(w, h) {
    var s;
    s = new ANSprite();
    s.bNew(w, h);
    return s;
  }

};

// ■ END ANSprite.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////

(function () {
    //@[DEFINES]
    var _ = BattleManager;

    //@[ALIAS]
    var _alias__startBattle = _.startBattle;
    _.startBattle = function () {
        _alias__startBattle.call(this, ...arguments);
        if (BattleManager.isNetworkBattleServer())
            $gameParty.refreshForNetwork();
        if(BattleManager.isNetworkBattlePvP()) {
            BattleManager._battlersMakeTurns = 0;
            BattleManager._battlersMakeInput = 0;
        }
    };

    //@[ALIAS]
    var _alias__isBusy = _.isBusy;
    _.isBusy = function () {
        var result = _alias__isBusy.call(this, ...arguments);
        return result || Network.isBusy();
    };

    //@[ALIAS]
    var _alias__updateTurn = _.updateTurn;
    _.updateTurn = function () {
        if(BattleManager.isNetworkBattlePvP()) {
            $gameParty.requestMotionRefresh();
        } else {
            if (!BattleManager.isNetworkBattle()) {
                _alias__updateTurn.call(this, ...arguments);
                return;
            }
            if (BattleManager.isNetworkBattleServer()) {
                // * Только на сервере происходит обновление хода
                _alias__updateTurn.call(this, ...arguments);
            } else
                $gameParty.requestMotionRefresh();
        }
    };

    //@[ALIAS]
    var _alias__startTurn = _.startTurn;
    _.startTurn = function () {
        if(BattleManager.isNetworkBattlePvP()) {
            this._phase = 'turn';
            this.clearActor();
            $gameTroop.increaseTurn();
            $gameParty.requestMotionRefresh();
            this._logWindow.startTurn();
            this._startTurnPvP();
        } else {
            _alias__startTurn.call(this, ...arguments);
            if (BattleManager.isNetworkBattleServer()) {
                this._sendBattleOrderToNetwork();
            }
        }
    };

    //@[ALIAS]
    var _alias__setup = _.setup;
    _.setup = function () {
        if (Network.isConnected())
            Network._inBattle = true;
        _alias__setup.call(this, ...arguments);
        if(BattleManager.isNetworkBattleServer()) {
            this._sendTroopNetworkIds();
        }
    };

    //@[ALIAS]
    var _alias__endAction = _.endAction;
    _.endAction = function () {
        _alias__endAction.call(this, ...arguments);
        if(BattleManager.isNetworkBattleServer()) {
            this._sendActionEndToNetwork();
        }
        if(BattleManager.isNetworkBattlePvP()){
            this._sendEndActionPvPToServer();
        }
    };

    //@[ALIAS]
    var _alias__endTurn = _.endTurn;
    _.endTurn = function () {
        if (BattleManager.isNetworkBattleServer()) {
            this._sendTurnEndToNetwork();
        }
        _alias__endTurn.call(this, ...arguments);
        if (BattleManager.isNetworkBattle())
            BattleManager.syncNet();
    };

    // * Данный метод работает только на сервере
    //@[ALIAS]
    var _alias__processTurn = _.processTurn;
    _.processTurn = function () { 
        if(BattleManager.isNetworkBattlePvP()) {
            var subject = this._subject;
            var action = subject.currentAction();
            _alias__processTurn.call(this, ...arguments);
            if(!action) {
                BattleManager._battlersMakeTurns++;
                //"ON ALL END".p();
                BattleManager._checkTurnEndPvP();
            }
            //BattleManager._processTurnPvP();
            return;
        }
        if (!BattleManager.isNetworkBattle()) {
            _alias__processTurn.call(this, ...arguments);
            return;
        }
        if(BattleManager.isNetworkBattleServer()) {
            var subject = this._subject;
            var action = subject.currentAction();
            _alias__processTurn.call(this, ...arguments);
            if (!action) {
                this._sendProcessTurnToNetwork(subject);
            }
        }
    };

    // * Данный метод работает только на сервере (от processTurn)
    //@[ALIAS]
    var _alias__startAction = _.startAction;
    _.startAction = function () {
        if (BattleManager.isNetworkBattlePvP()) {
            _alias__startAction.call(this, ...arguments);
            BattleManager._sendStartActionPvPToNetwork();
            return;
        }
        if (!BattleManager.isNetworkBattle()) {
            _alias__startAction.call(this, ...arguments);
            return;
        }
        if (BattleManager.isNetworkBattleServer()) {
            _alias__startAction.call(this, ...arguments);
            this._sendStartActionToNetwork(this._targets);
        }
    };

    //TODO: Временно!
    // * Временно отключил его для сети
    //@[ALIAS]
    var _alias__displayStartMessages = _.displayStartMessages;
    _.displayStartMessages = function () {
        if(BattleManager.isNetworkBattle()) {
            return;
        }
        _alias__displayStartMessages.call(this, ...arguments);  
    };

    // * Данный метод работает только на сервере (от startAction)
    //@[ALIAS]
    var _alias__invokeNormalAction = _.invokeNormalAction;
    _.invokeNormalAction = function (subject, target) {
        if(BattleManager.isNetworkBattlePvP()){
            BattleManager._invokeNormalActionPvP(subject, target);
            return;
        }
        if (BattleManager.isNetworkBattle()) {
            var realTarget = this.applySubstitute(target);
            _alias__invokeNormalAction.call(this, ...arguments);
            $gameParty.refreshForNetwork();
            if(BattleManager.isNetworkBattleServer()) {
                this._sendInvokeNormalToNetwork(subject, realTarget);
            }
        } else {
            _alias__invokeNormalAction.call(this, ...arguments);
        }
    };

    //TODO: invokeCounterAttack
    // * Данный метод работает только на сервере (от startAction)
    //@[ALIAS]
    var _alias__invokeCounterAttack = _.invokeCounterAttack;
    _.invokeCounterAttack = function (subject, target) {
        if (!BattleManager.isNetworkBattle()) {
            _alias__invokeCounterAttack.call(this, ...arguments);
            return;
        }
        // * Пока Counter Attack не реализована, обычная  NormalAction
        if (BattleManager.isNetworkBattleServer()) {
            this.invokeNormalAction(subject, target);
        }
    };

    //TODO: invokeMagicReflection
    // * Данный метод работает только на сервере (от startAction)
    //@[ALIAS]
    var _alias__invokeMagicReflection = _.invokeMagicReflection;
    _.invokeMagicReflection = function (subject, target) {
        if (!BattleManager.isNetworkBattle()) {
            _alias__invokeMagicReflection.call(this, ...arguments);
            return;
        }
        // * Пока Magic Reflection не реализована, обычная  NormalAction
        if (BattleManager.isNetworkBattleServer()) {
            this.invokeNormalAction(subject, target);
        }
    };

    //@[ALIAS]
    BattleManager._alias__selectNextCommand = _.selectNextCommand;
    _.selectNextCommand = function () {
        if (!BattleManager.isNetworkBattle()) {
            this._alias__selectNextCommand.call(this, ...arguments);
            return;
        }
        this._selectInputCommandNetwork('next');
    };

    //@[ALIAS]
    BattleManager._alias__selectPreviousCommand = _.selectPreviousCommand;
    _.selectPreviousCommand = function () {
        if (!BattleManager.isNetworkBattle()) {
            this._alias__selectPreviousCommand.call(this, ...arguments);
            return;
        }
        this._selectInputCommandNetwork('prev');
    };


    //@[ALIAS]
    var _alias__endBattle = _.endBattle;
    _.endBattle = function (result) {
        if(BattleManager.isNetworkBattlePvP()) {
            Network.clearPvPBattleWithResult(result);
            _alias__endBattle.call(this, ...arguments);
            return;
        }
        if (BattleManager.isNetworkBattle()) {
            BattleManager.syncNet();
            _alias__endBattle.call(this, ...arguments);
        } else {
            _alias__endBattle.call(this, ...arguments);
        }
    };

    // * Данный метод работает только на сервере
    //@[ALIAS]
    var _alias__checkBattleEnd = _.checkBattleEnd;
    _.checkBattleEnd = function () {
        if (BattleManager.isNetworkBattle()) {
            if (BattleManager.isNetworkBattleServer()) {
                return _alias__checkBattleEnd.call(this, ...arguments);
            } else {
                return false;
            }
        } else 
            return _alias__checkBattleEnd.call(this, ...arguments);
    };

    // * Данный метод работает только на сервере (из checkBattleEnd)
    //@[ALIAS]
    var _alias__checkAbort = _.checkAbort;
    _.checkAbort = function () {
        if (BattleManager.isNetworkBattle()) {
            if ($gameParty.isEmpty() || this.isAborting()) {
                SoundManager.playEscape();
                this._escaped = true;
                this._sendAbortBattleToNetwork();
                this.processAbort();
            }
            return false;
        } else {
            return _alias__checkAbort.call(this);
        }
    };

    // * Данный метод работает только на сервере (из checkBattleEnd)
    //@[ALIAS]
    var _alias__processVictory = _.processVictory;
    _.processVictory = function () {
        if (BattleManager.isNetworkBattleServer()) {
            this._sendVictoryToNetwork();
        }
        _alias__processVictory.call(this, ...arguments);
    };

    // * Данный метод работает только на сервере (из checkBattleEnd)
    //@[ALIAS]
    var _alias__processDefeat = _.processDefeat;
    _.processDefeat = function () {
        if (BattleManager.isNetworkBattleServer()) {
            this._sendDefeatToNetwork();
        }
        _alias__processDefeat.call(this, ...arguments);
    };

    //@[ALIAS]
    var _alias__processEscape = _.processEscape;
    _.processEscape = function () {
        if (BattleManager.isNetworkBattle()) {
            return _alias__processEscape.call(this, ...arguments);
        } else {
            if (BattleManager.isNetworkBattleServer()) {
                var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
                this._sendEscapeToNetwork(success);
                this._onEscapeFromNetwork(success); // * Логика вынесена отдельно для севрера и клиента
                return success;
            }
            return false;
        }
    };

    //@[ALIAS]
    var _alias__invokeAction = _.invokeAction;
    _.invokeAction = function (subject, target) {
        if(BattleManager.isNetworkBattlePvP()) {
            BattleManager._invokeActionPvP(subject, target);
        } else
            _alias__invokeAction.call(this, subject, target);
    };

})();

// ■ END BattleManager.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//?[NEW]
BattleManager.setupPvPBattle = function (enemyActorId) {
    this.initMembers();
    this._canEscape = false;
    this._canLose = true;
    $gameTroop.setupPvPBattle(enemyActorId);
    $gameScreen.onBattleStart();
    this.makeEscapeRatio();
    Network._inPvPBattle = true;
    Network._lastPvPResult = -1;
};

//?[NEW]
BattleManager.isNetworkBattlePvP = function () {
    if (Network.isConnected() && Network.isMultiMode() && Network.inPvPBattle()) {
        return true;
    }
    return false;
};

//?[NEW]
BattleManager.isNetworkBattlePvPServer = function () {
    return BattleManager.isNetworkBattlePvP() && Network.isPvPBattleServer();
};

//?[NEW]
BattleManager.isNetworkBattle = function () {
    if(Network.isMultiMode()) {
        return false;
    } else
        return Network.isConnected() && Network.inBattle();
};

//?[NEW]
BattleManager.isNetworkBattleServer = function () {
    return BattleManager.isNetworkBattle() && Network.isHost();
};

//?[NEW]
BattleManager.convertBattlersToIds = function (arrayOfBattlers) {
    return arrayOfBattlers.map(item => {
        return BattleManager.getIdByBattleSubject(item);
    });
};

//?[NEW]
BattleManager.convertIdsToBattlers = function (arrayOfIds) {
    return arrayOfIds.map(item => {
        return BattleManager.getBattleSubjectById(item);
    });
};

//?[NEW]
BattleManager.getBattleSubjectById = function (id) {
    if(BattleManager.isNetworkBattlePvP()) {
        if(id == $gameParty.leader().actorId()) {
            return $gameParty.leader();
        } else {
            return $gameTroop.rival();
        }
    } else {
        var result = null;
        if (id < 900)
            result = $gameParty.memberByActorId(id);
        else
            result = $gameTroop.getEnemyByNetId(id);
        if(!result) {
            console.warn("getBattleSubjectById: not find ID " + id);
            result = $gameParty.leader();
        }
        return result;
    }
};

//?[NEW]
BattleManager.getIdByBattleSubject = function (subject) {
    if (subject == null)
        subject = this._subject;
    if (subject.isActor()) {
        return subject.actorId();
    } else {
        return subject.uniqueNetworkId();
    }
};

//?[NEW]
BattleManager.isMyActorInput = function () {
    if (!BattleManager.isNetworkBattle()) return true;
    var myIndex = $gameParty.memberIndexByActorId(NetPartyManager.getMyActorId());
    return myIndex == this._actorIndex;
};

//?[NEW]
BattleManager.syncNet = function () {
    if (BattleManager.isNetworkBattle()) {
        Network.requestSync();
    }
};

//?[NEW]
BattleManager._processTurnFromNetwork = function (subjectId) {
    try {
        var subject = this.getBattleSubjectById(subjectId);
        subject.onAllActionsEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(subject);
        this._logWindow.displayCurrentState(subject);
        this._logWindow.displayRegeneration(subject);
    } catch (error) {
        AlphaNET.error(error, ' processTurnFromNetwork');
    }
};

//?[NEW]
BattleManager._startActionFromNetwork = function (targets) {
    this._startActionFromNetworkDefault(targets);
};

//?[NEW]
BattleManager._startActionFromNetworkDefault = function (targets) {
    try {
        this._subject = this.getNextSubject();
        if (this._subject == null) {
            return;
        }
        this._action = this._subject.currentAction();
        if(this._action == null) {
            this._subject.makeActions();
            this._action = this._subject.currentAction();
            if(this._action == null)
                return;
        }
        this._subject.useItem(this._action.item());
        this.refreshStatus();
        this._action.applyGlobal();
        this._targets = this.convertIdsToBattlers(targets);
    } catch (error) {
        AlphaNET.error(error, ' startActionFromNetwork  : DEFAULT');
        return;
    }
    if (this._targets.length > 0) {
        try {
            this._logWindow.startAction(this._subject, this._action, this._targets);
        } catch (error) {
            console.error(error);
        }
    }
};

//?[NEW]
BattleManager._selectInputCommandFromNetwork = function (commnadName) {
    try {
        if (commnadName == 'next')
            this._alias__selectNextCommand.call(this);
        else
            this._alias__selectPreviousCommand.call(this);
    } catch (error) {
        AlphaNET.error(error, ' _selectInputCommandFromNetwork');
        this._alias__selectNextCommand.call(this);
    }
};

//?[NEW]
BattleManager._invokeNormalActionFromNetwork = function (subjectId, targetId) {
    try {
        var subject = this.getBattleSubjectById(subjectId);
        var target = this.getBattleSubjectById(targetId);
        if(target != null && subject != null)
            this._logWindow.displayActionResults(subject, target);
    } catch (error) {
        AlphaNET.error(error, 'invokeNormalActionFromNetwork');
    }
};

//?[NEW]
BattleManager._abortBattleCommandFromNetwork = function () {
    SoundManager.playEscape();
    this._escaped = true;
    this.processAbort();
};

//?[NEW]
BattleManager._onEscapeFromNetwork = function (success) {
    $gameParty.performEscape();
    SoundManager.playEscape();
    if (success) {
        this.displayEscapeSuccessMessage();
        this._escaped = true;
        this.processAbort();
    } else {
        this.displayEscapeFailureMessage();
        this._escapeRatio += 0.1;
        $gameParty.clearActions();
        this.startTurn();
    }
};

//?[NEW]
BattleManager._sendBattleOrderToNetwork = function () {
    var orderData = this.convertBattlersToIds(BattleManager._actionBattlers);
    //console.info(BattleManager._actionBattlers);
    var data = NetMessage.CreateSubMessageData('battleOrder');
    data.orderData = orderData;
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._sendNetworkMsg = function (data) {
    Network.sendMessage(NetMessage.BattleManager().setData(data));
};

//?[NEW]
BattleManager._sendTroopNetworkIds = function () {
    var troopIds = $gameTroop.members().map(item => item.uniqueNetworkId());
    var data = NetMessage.CreateSubMessageData('enemyIds');
    data.troopIds = troopIds;
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._sendActionEndToNetwork = function () {
    this._sendNetworkMsg(NetMessage.CreateSubMessageData('endAction'));
};

//?[NEW]
BattleManager._sendTurnEndToNetwork = function () {
    this._sendNetworkMsg(NetMessage.CreateSubMessageData('endTurn'));
};

//?[NEW]
BattleManager._sendProcessTurnToNetwork = function (subject) {
    var data = NetMessage.CreateSubMessageData('processTurn');
    data.subjectId = this.getIdByBattleSubject(subject);
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._sendStartActionToNetwork = function (targets) {
    var data = NetMessage.CreateSubMessageData('startAction');
    data.targets = this.convertBattlersToIds(targets);
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._sendInvokeNormalToNetwork = function (subject, target) {
    var data = NetMessage.CreateSubMessageData('invokeNormal');
    data.subjectId = this.getIdByBattleSubject(subject);
    data.targetId = this.getIdByBattleSubject(target);
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._selectInputCommandNetwork = function (commandName) {
    var method = this._alias__selectNextCommand;
    if (commandName == 'prev')
        method = this._alias__selectPreviousCommand;
    if (this.actor()) {
        if (BattleManager.isMyActorInput()) {
            method.call(this);
            Network.sendMessage(NetMessage.BattleInputCommand().setData(commandName));
        }
    } else {
        method.call(this);
    }
};

//?[NEW]
BattleManager._sendAbortBattleToNetwork = function () {
    var data = NetMessage.CreateSubMessageData('abortBattle');
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._sendVictoryToNetwork = function () {
    var data = NetMessage.CreateSubMessageData('victory');
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._sendDefeatToNetwork = function () {
    var data = NetMessage.CreateSubMessageData('defeat');
    this._sendNetworkMsg(data);
};

//?[NEW]
BattleManager._sendEscapeToNetwork = function (success) {
    var data = NetMessage.CreateSubMessageData('escape');
    data.success = success;
    this._sendNetworkMsg(data);
};

// * DEPRECATED
//?[NEW]
BattleManager.isWaitInputtingForPvP = function () {
    return this._waitInputPvP === true;
};

// * NOT USED
//?[NEW]
BattleManager._onPvPStartInputCommandFromServer = function() {
    this._waitInputPvP = false;
};

//?[NEW]
BattleManager._startTurnPvP = function() {
    ///"StartTurnPvP".p();
    BattleManager._battlersMakeTurns = 0;
    BattleManager._battlersMakeInput++;
    //console.info($gameParty.leader().currentAction());
    if (BattleManager.isNetworkBattlePvPServer()) {
        //WAIT ANOTHER ACTOR INPUT FROM SERVER
        if (BattleManager._battlersMakeInput == 2) {
            BattleManager._startPvP();
        }
    } else {
        //SEND MY INPPUTING ACTION
        BattleManager._sendInputActionPvPToServer($gameParty.leader().currentAction());
    }
};

//?[NEW]
BattleManager._sendInputActionPvPToServer = function (action) {
    if(!this.isNetworkBattlePvP()) return;
    var data = BattleManager._collectBasicPvPData('inputActionPvP');
    data.action = JsonEx.stringify(action);
    this._sendNetworkMsgPvP(data);
};

//?[NEW]
BattleManager._collectBasicPvPData = function (commandName) {
    var data = NetMessage.CreateSubMessageData(commandName);
    data.myActorId = $gameParty.leader().actorId();
    data.myRivalActorId = $gameTroop.rival().actorId();
    return data;
};

//?[NEW]
BattleManager._sendNetworkMsgPvP = function (data) {
    Network.sendMessage(NetMessage.BattleManagerPvP().setData(data));
};

//?[NEW]
BattleManager._setPvPRivalActionFromNetwork = function (action) {
    $gameTroop.rival()._actions[0] = action;
    BattleManager._battlersMakeInput++;
    if (BattleManager.isNetworkBattlePvPServer()) {
        if(BattleManager._battlersMakeInput == 2)
            BattleManager._startPvP();
    }
};

//?[NEW]
BattleManager._startPvP = function () {
    BattleManager._battlersMakeInput = 0;
    BattleManager.makeActionOrders();
    //BattleManager._actionBattlers = [$gameParty.leader(), $gameTroop.rival()];
    ///"START".p(BattleManager._actionBattlers[0].name());
    BattleManager._sendStartTurnPvPToServer(BattleManager._actionBattlers[0].actorId());
};

//?[NEW]
BattleManager._sendStartTurnPvPToServer = function (actorId) {
    var data = BattleManager._collectBasicPvPData('startTurnPvP');
    data.whoStart = actorId;
    BattleManager._sendNetworkMsgPvP(data);
};

//?[NEW]
BattleManager._startPvPTurnFromNetwork = function() {
    //"START PVP TURN FROM NETWORK".p();
    BattleManager._actionBattlers = [$gameParty.leader(), $gameTroop.rival()];
    BattleManager._subject = BattleManager._actionBattlers[0];
    BattleManager.processTurn();
};

//?[NEW]
BattleManager._sendStartActionPvPToNetwork = function() {
    var data = BattleManager._collectBasicPvPData('startActionPvP');
    data.subjectId = $gameParty.leader().actorId();
    data.action = JsonEx.stringify(BattleManager._action);
    data.targets = BattleManager.convertBattlersToIds(BattleManager._targets);
    BattleManager._sendNetworkMsgPvP(data);
};

//?[NEW]
BattleManager._startActionFromNetworkPvP = function(subjectId, action, targetsIds) {
    //"START ACTION FROM NETWORK".p();
    var subject = BattleManager.getBattleSubjectById(subjectId);
    var targets = BattleManager.convertIdsToBattlers(targetsIds);
    BattleManager._logWindow.startAction(subject, action, targets);
};

//?[NEW]
// * Только Normal Action
//TODO: Magic Reflection, CounterAttack
BattleManager._invokeActionPvP = function (subject, target) {
    this._logWindow.push('pushBaseLine');
    this.invokeNormalAction(subject, target);
    subject.setLastTarget(target);
    this._logWindow.push('popBaseLine');
    this.refreshStatus();
};

//?[NEW]
BattleManager._invokeNormalActionPvP = function (subject, target) {
    this._action.apply(target);
    this._logWindow.displayActionResults(subject, target);

    var data = BattleManager._collectBasicPvPData('invokeNormalActionPvP');
    data.subjectId = subject.actorId();
    data.targetId = target.actorId();
    data.resultSubject = JsonEx.stringify(subject.result());
    data.resultTarget = JsonEx.stringify(target.result());
    BattleManager._sendNetworkMsgPvP(data);
};

//?[NEW]
BattleManager._invokeNormalActionFromNetworkPvP = function (subjectId, targetId, subResult, tarResult) {
    //"NORMAL ACTION FROM NETWORK".p();
    BattleManager._logWindow.push('pushBaseLine');
    var subject = BattleManager.getBattleSubjectById(subjectId);
    var target = BattleManager.getBattleSubjectById(targetId);
    subject._result = subResult;
    target._result = tarResult;
    BattleManager._logWindow.displayActionResults(subject, target);
    BattleManager._logWindow.push('popBaseLine');
    BattleManager.refreshStatus();
};

//?[NEW]
BattleManager._sendEndActionPvPToServer = function() {
    ///"END ACTION -> SERVER".p();
    var data = BattleManager._collectBasicPvPData('endActionPvP');
    data.subjectData = JsonEx.stringify($gameParty.leader()._collectDataPvPForNetwork());
    data.targetData = JsonEx.stringify($gameTroop.rival()._collectDataPvPForNetwork());
    BattleManager._sendNetworkMsgPvP(data);
    BattleManager.processTurn();
};

//?[NEW]
BattleManager._actionEndPvPFromNetwork = function(targetData, partyLeaderData) {
    //"END ACTION FROM SERVER".p();
    BattleManager._logWindow.endAction($gameTroop.rival());
    BattleManager.refreshStatus();
    BattleManager._battlersMakeTurns++;
    $gameParty.leader()._onNetworkPvPData(partyLeaderData);
    $gameTroop.rival()._onNetworkPvPData(targetData);
    if(BattleManager._battlersMakeTurns == 1) {
        // * Так как это пришло от сервера, значит следующий ход - мой
        BattleManager._sendStartTurnPvPToServer($gameParty.leader().actorId());
    } else
        BattleManager._checkTurnEndPvP();
};

//?[NEW]
BattleManager._checkTurnEndPvP = function () {
    if (BattleManager._battlersMakeTurns == 2) {
        //"END TURN".p();
        BattleManager._battlersMakeTurns = 0;
        BattleManager.endTurn();
    }
};

//TODO: СБОС ФЛАГОВ PVP в NETWORK!!

// ■ END BattleManager_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ConfigManager.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {

    //@[DEFINES]
    var _ = ConfigManager;

    //@[ALIAS]
    var _alias__makeData = _.makeData;
    _.makeData = function () {
        var config = _alias__makeData.call(this);
        config._netDefIPPort = this._netDefIPPort;
        return config;
    };

    //@[ALIAS]
    var _alias__applyData = _.applyData;
    _.applyData = function (config) {
        _alias__applyData.call(this, config);
        this._netDefIPPort = config._netDefIPPort;
    };

})();
// ■ END ConfigManager.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {

    //@[ALIAS]
    var _alias_DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function () {
        var contents = _alias_DataManager_makeSaveContents.call(this, ...arguments);
        try {
            if (Network.isConnected()) {
                if (Network.isHost() && Network.sessionData != null) {
                    contents.network = Network.sessionData.makeSaveContents();
                }
            }
        } catch (error) {
            AlphaNET.error(error, ' create network world save data');
        }
        return contents;
    };

    //@[ALIAS]
    var _alias_DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        _alias_DataManager_extractSaveContents.call(this, ...arguments);
        try {
            if (contents.network != null) {
                if (Network.sessionData == null)
                    Network.sessionData = new AlphaNET.LIBS.NetSessionData();
                Network.sessionData.extractSaveContents(contents.network);
            }
        } catch (error) {
            AlphaNET.error(error, ' load network world save data');
        }
    };

    //@[ALIAS]
    var _alias_DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        _alias_DataManager_createGameObjects.call(this, ...arguments);
        AlphaNET.ExtraPluginSupport();
    };

    //@[ALIAS]
    var _alias_DataManager_loadDatabase = DataManager.loadDatabase;
    DataManager.loadDatabase = function () {
        _alias_DataManager_loadDatabase.call(this, ...arguments);
        ANJsonSettings.InitAndLoad();
    };

})();
// ■ END DataManager.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager_PRO.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_DataManager_setupNewGame = DataManager.setupNewGame;
    DataManager.setupNewGame = function () {
        _alias_DataManager_setupNewGame.call(this);
        ANET.loadFonts();
    };
})();
// ■ END DataManager_PRO.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Game_EncounterEvent;

(function() {
  var _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  _._initEncounterBase = function() {
    return this._encMapEvData = {};
  };
  _._registerEncounterEvMap = function(mapId, evId) {
    if (this._encMapEvData == null) {
      this._initEncounterBase();
    }
    this._encMapEvData[mapId] = evId;
  };
  _._getEncounterEvMap = function(mapId) {
    if (this._encMapEvData == null) {
      this._initEncounterBase();
    }
    return this._encMapEvData[mapId];
  };
  _._executeEncounterNetwork = function() {
    var result;
    //return if @_isEncBattleStarted is true
    if (this._waitEncounterToStart === true) {
      this._executeEncounterWait();
    } else {
      if (!this.canEncounter()) {
        return;
      }
      if (Network.isMultiMode()) {
        return;
      }
      if (!Network.isHost()) {
        return;
      }
      result = !$gameMap.isEventRunning() && this._encounterCount <= 0;
      if (!result) {
        return;
      }
      this._tryStartEncEventNetwork();
    }
  };
  _._executeEncounterWait = function() {
    //"WAIT".p()
    if (Network.isBusy()) {
      return;
    }
    if (Network.getLastResponseData() === "encounter") {
      this._waitEncounterToStart = false;
      this._encEventToStart.start();
      this._encEventToStart = null;
    }
  };
  _._tryStartEncEventNetwork = function() {
    var data, encEvent, ev, troopId;
    //"START BATTLE FROM ENCOUNTER".p()
    ev = this._getEncounterEvMap($gameMap.mapId());
    if ((ev != null) && ev > 0) {
      encEvent = $gameMap.event(ev);
      if (encEvent != null) {
        troopId = this.makeEncounterTroopId();
        if ($dataTroops[troopId] != null) {
          //encEvent.encounterTroopId = troopId
          data = {};
          data.waitTag = "encounter";
          data.troopId = troopId;
          Network.sendMessage(NetMessage.EncounterTroopId().setRepeat(Network.WAIT_PLAYER).setData(data));
          this._waitEncounterToStart = true;
          Network._encounterTroopId = troopId;
          //"START EENTS".p()
          this._encEventToStart = encEvent;
        }
      }
    }
  };
  //encEvent.start()
  //$gameMap.event(2).start()
  //@_isEncBattleStarted = true
  _._onEncounterSyncFromNetwork = function(troopId) {
    var data;
    if (SceneManager._scene instanceof Scene_Map && !$gameMap.isAnyEventStarting()) {
      Network._encounterTroopId = troopId;
      data = {};
      data.waitTag = 'encounter';
      Network.sendMessage(NetMessage.EncounterSync().setRepeat("encounter").setData(data));
    }
  };
})();

(function() {  // ■ END Game_Player.coffee
  //---------------------------------------------------------------------------

  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Game_Map.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(mapId) {
    var ref;
    ALIAS__setup.call(this, mapId);
    if (((ref = this.encounterList()) != null ? ref.length : void 0) > 0) {
      return this._createEncounterSpecialEvent();
    }
  };
  _._createEncounterSpecialEvent = function() {
    var event, eventId;
    if ($gamePlayer._getEncounterEvMap(this.mapId()) != null) {
      return;
    }
    eventId = this.events().length + 1;
    event = new Game_EncounterEvent(this.mapId(), eventId);
    this._events[eventId] = event;
    $gamePlayer._registerEncounterEvMap(this.mapId(), eventId);
    this.refresh();
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------
Game_EncounterEvent = class Game_EncounterEvent extends Game_Event {
  constructor(mapId, eventId) {
    super(mapId, eventId);
    this._myId = eventId;
  }

  event() {
    return {
      id: this._myId,
      x: -10,
      y: -10,
      pages: [
        {
          conditions: {
            actorId: 1,
            actorValid: false,
            itemId: 1,
            itemValid: false,
            selfSwitchCh: "A",
            selfSwitchValid: false,
            switch1Id: 1,
            switch1Valid: false,
            switch2Id: 1,
            switch2Valid: false,
            variableId: 1,
            variableValid: false,
            variableValue: 0
          },
          image: {
            tileId: 0,
            characterName: "",
            direction: 2,
            pattern: 1,
            characterIndex: 0
          },
          list: [
            {
              code: 301,
              indent: 0,
              parameters: [0,
            Network._encounterTroopId,
            false,
            false]
            },
            {
              code: 0,
              indent: 0,
              parameters: []
            }
          ],
          moveRoute: null,
          moveFrequency: 3,
          moveSpeed: 3,
          moveType: 0,
          priorityType: 0,
          stepAnime: false,
          through: false,
          trigger: 0,
          walkAnime: true
        }
      ],
      note: "NET"
    };
  }

  //meetsConditions: -> true

    //findProperPageIndex: -> 0

    //isTriggerIn: -> true

    //setupPage: ->
  //    @_pageIndex = 0
  //    @clearPageSettings()
  //    @clearStartingFlag()

    //checkEventTriggerAuto: -> # * NOTHING
  setMoveRoute() {} // * NOTHING

};


//locate: ->
//    Game_Character::locate.call(@, -10, -10)

//updateParallel: -> # * NOTHING
/*list: -> [
    {
        code: 301,
        indent: 0,
        parameters: [0, @encounterTroopId, true, false]
    },
    {
        code: 0,
        indent: 0,
        parameters: []
    }
]*/

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ExtraPluginsSupport.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
AlphaNET.ExtraPluginSupport = (function () {

    // * Yanfly Engine Plugins - Item Core
    (function(){
        if (Imported.YEP_ItemCore == null)
            return;
        try {
            //@[ALIAS]
            var _alias_Game_Party_getDataForNetwork = Game_Party.prototype.getDataForNetwork;
            Game_Party.prototype.getDataForNetwork = function () {
                var result = _alias_Game_Party_getDataForNetwork.call(this, ...arguments);
                
                var weapons = {};
                for (const [key, value] of Object.entries($gameParty._weapons)) {
                    var newKey = Number(key) - Yanfly.Param.ItemStartingId;
                    weapons[newKey] = value;
                }
                result.weapons = JSON.stringify(weapons);

                var armors = {};
                var realArmors = $gameParty.armors();
                for(var i = 0; i<realArmors.length; i++) {
                    var baseId = DataManager.getBaseItem(realArmors[i]).id;
                    if (armors[baseId] == null)
                        armors[baseId] = 1;
                    else
                        armors[baseId] += 1;
                }
                result.armors = JSON.stringify(armors);

                return result;
            };

            //$[OVER]
            Game_Party.prototype._setArmorsFromNetwork = function (armors) {
                if (armors != null) {
                    try {
                        var temp = JSON.parse(armors);
                        for (const [key, value] of Object.entries(temp)) {
                            var item = $dataArmors[Number(key)];
                            $gameParty.gainItem(item, value);
                        }
                    } catch(error) {
                        AlphaNET.error(error, ' load player armors from Network');
                    }
                }
            };


        } catch(error) {
            AlphaNET.warning('Alpha NET compatibility for YEP_ItemCore.js not loaded!');
        }
    })();

});
// ■ END ExtraPluginsSupport.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ FontLoadManager_PRO.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
var FontLoadManager = function () {
    throw new Error('This is a static class');
};

FontLoadManager.initAndLoadAll = function () {
    FontLoadManager.init();
    FontLoadManager.loadAll();
};

FontLoadManager.init = function () {
    var fs = require('fs');
    this._files = fs.readdirSync(this.localFileDirectoryPath());
};


FontLoadManager.loadAll = function () {
    for (var i = 0; i < this._files.length; i++) {
        if (this._files[i].contains("mplus-1m-regular"))
            continue;
        if (this._files[i].includes('.ttf') || this._files[i].includes('.TTF')) {
            ANET.log("Load font " + this._files[i]);
            var name = this._files[i].substring(0, this._files[i].length - 4);
            var url = this.localFileDirectoryPath() + this._files[i];
            url = url.replaceAll("\\", "\\\\");
            Graphics.loadFont(name, url);
        }
    }
};

FontLoadManager._localFileDirectoryPath = null;
FontLoadManager.localFileDirectoryPath = function () {
    if (this._localFileDirectoryPath == null) {
        const path = require('path');
        const base = path.dirname(process.mainModule.filename);
        this._localFileDirectoryPath = path.join(base, 'fonts/');
    }
    return this._localFileDirectoryPath;
};
// ■ END FontLoadManager_PRO.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Action.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function (target) {
        _alias_Game_Action_apply.call(this, ...arguments);
        if(BattleManager.isNetworkBattleServer()) {
            this._sendActionResultToNetwork(target);
        }
    };

    //@[ALIAS]
    var _alias_Game_Action_setSkill = Game_Action.prototype.setSkill;
    Game_Action.prototype.setSkill = function (skillId) {
        _alias_Game_Action_setSkill.call(this, ...arguments);
        if (BattleManager.isNetworkBattle()) {
            this._sendSetActionSkillToNetwork(skillId);
        }
        this._outerCall = false;
    };

    //@[ALIAS]
    var _alias_Game_Action_setItem = Game_Action.prototype.setItem;
    Game_Action.prototype.setItem = function (itemId) {
        _alias_Game_Action_setItem.call(this, ...arguments);
        if (BattleManager.isNetworkBattle()) {
            this._sendSetActionItemToNetwork(itemId);
        }
        this._outerCall = false;
    };

    //@[ALIAS]
    var _alias_Game_Action_setTarget = Game_Action.prototype.setTarget;
    Game_Action.prototype.setTarget = function (targetIndex) {
        _alias_Game_Action_setTarget.call(this, ...arguments);
        if (BattleManager.isNetworkBattle()) {
            this._sendSetActionTargetToNetwork(targetIndex);
        }
        this._outerCall = false;
    };

    //?[NEW]
    Game_Action.prototype.setSkillFromNet = function (skillId) {
        this._outerCall = true;
        "Game_Action: Skill set from Net".p(skillId);
        this.setSkill(skillId);
    };

    //?[NEW]
    Game_Action.prototype.setItemFromNet = function (itemId) {
        this._outerCall = true;
        "Game_Action: Item set from Net".p(itemId);
        this.setItem(itemId);
    };

    //?[NEW]
    Game_Action.prototype.setTargetFromNet = function (targetIndex) {
        this._outerCall = true;
        "Game_Action: Target set from Net".p(targetIndex);
        this.setTarget(targetIndex);
    };

    //@[ALIAS]
    var _alias_Game_Action_setSubject = Game_Action.prototype.setSubject;
    Game_Action.prototype.setSubject = function (subject) {
        if(BattleManager.isNetworkBattlePvP()) {
            this._subjectActorId = subject.actorId();
            this._subjectEnemyIndex = -1;
        } else
            _alias_Game_Action_setSubject.call(this, subject);
    };

    //@[ALIAS]
    var _alias_Game_Action_subject = Game_Action.prototype.subject;
    Game_Action.prototype.subject = function () {
        if (BattleManager.isNetworkBattlePvP()) {
            if (this._subjectActorId == $gameParty.leader().actorId()) {
                return $gameParty.leader();
            } else {
                return $gameTroop.rival();
            }
        } else
            return _alias_Game_Action_subject.call(this);
    };

})();
// ■ END Game_Action.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Action_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[CLASS IMPL ONLY]

  //@[DEFINES]
  _ = Game_Action.prototype;
  _._sendActionResultToNetwork = function(target) {
    var data;
    if (BattleManager._phase !== 'action') {
      return;
    }
    data = NetMessage.CreateSubMessageData('setResult');
    data.sbj = BattleManager.getIdByBattleSubject(this.subject());
    data.target = BattleManager.getIdByBattleSubject(target);
    data.result = target.result();
    this._sendActionNetMsg(data);
  };
  _._sendActionNetMsg = function(data) {
    return Network.sendMessage(NetMessage.BattleAction().setData(data));
  };
  _._sendSetActionSkillToNetwork = function(skillId) {
    return this._createActionNetMessage('setSkill', skillId);
  };
  _._createActionNetMessage = function(name, actionId) {
    var data;
    if (this._outerCall === true) {
      return;
    }
    if (!(this._subjectActorId > 0)) {
      return;
    }
    data = NetMessage.CreateSubMessageData(name);
    data.actionId = actionId;
    data.actorId = this._subjectActorId;
    this._sendActionNetMsg(data);
  };
  _._sendSetActionItemToNetwork = function(itemId) {
    return this._createActionNetMessage('setItem', itemId);
  };
  _._sendSetActionTargetToNetwork = function(targetIndex) {
    return this._createActionNetMessage('setTarget', targetIndex);
  };
})();

// ■ END Game_Action_private.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_ActionResult_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//?[NEW]
Game_ActionResult.prototype.setupFromOuterData = function (data) {
    var item = this;
    Object.getOwnPropertyNames(data).forEach(function (key, index) {
        item[key] = data[key];
    });
};
// ■ END Game_ActionResult_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Game_Actor_refresh = Game_Actor.prototype.refresh;
    Game_Actor.prototype.refresh = function () {
        _alias_Game_Actor_refresh.call(this, ...arguments);
        if (this._isNeedNetworkRefresh()) {
            this._sendRefreshMessageToNetwork(this.actorId());
        }
    };

    //@[ALIAS]
    var _alias_Game_Actor_initMembers = Game_Actor.prototype.initMembers;
    Game_Actor.prototype.initMembers = function () {
        _alias_Game_Actor_initMembers.call(this, ...arguments);
        this._networkNameplateStyleId = null;
    };

    //?[NEW]
    Game_Actor.prototype.networkStyleId = function () {
        return this._networkNameplateStyleId;
    };

    //?[NEW]
    Game_Actor.prototype._collectDataPvPForNetwork = function () {
        var data = {};
        data._hp = this._hp;
        data._mp = this._mp;
        data._tp = this._tp;
        data._paramPlus = this._paramPlus;
        data._states = this._states;
        data._stateTurns = this._stateTurns;
        data._buffs = this._buffs;
        data._buffTurns = this._buffTurns;
        return data;
    };

    //?[NEW]
    Game_Actor.prototype._onNetworkPvPData = function (data) {
        for (var key in data) {
            this[key] = data[key];
        }
    };
})();
// ■ END Game_Actor.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor_X.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//$[OVER]
Game_Actor.prototype.performDamage = function () {
    Game_Battler.prototype.performDamage.call(this);
    if (this.isSpriteVisible()) {
        this.requestMotion('damage');
    } else {
        if (this == $gameParty.leader())
            $gameScreen.startShake(5, 5, 10);
    }
    SoundManager.playActorDamage();
};
// ■ END Game_Actor_X.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {

    //TODO: Game_Battler.escape - не синхронизирован. Т.е. один игрок может  убежать, если у вещи есть
    //специальный эффект, но это не синхронизируется, бой встаёт!

    //@[ALIAS]
    var _alias_Game_Battler_consumeItem = Game_Battler.prototype.consumeItem;
    Game_Battler.prototype.consumeItem = function (item) {
        if (BattleManager.isNetworkBattle()) {
            if (this == $gameParty.leader()) {
                "CONSUME ITEM".p();
                _alias_Game_Battler_consumeItem.call(this, ...arguments);
            }
        } else {
            _alias_Game_Battler_consumeItem.call(this, ...arguments);
        }
    };

    //@[ALIAS]
    var _alias_Game_Battler_meetsItemConditions = Game_Battler.prototype.meetsItemConditions;
    Game_Battler.prototype.meetsItemConditions = function (item) {
        if (BattleManager.isNetworkBattle()) {
            if (this == $gameParty.leader()) {
                return _alias_Game_Battler_meetsItemConditions.call(this, item);
            } else {
                return this.meetsUsableItemConditions(item);
            }
        } else
            return _alias_Game_Battler_meetsItemConditions.call(this, item);
    };
})();
// ■ END Game_Battler.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[CLASS IMPL ONLY]

  //@[DEFINES]
  _ = Game_Battler.prototype;
  _._sendRefreshMessageToNetwork = function(netId) {
    var data, msg;
    data = this._collectDataForNetwork();
    data.id = netId;
    msg = NetMessage.BattleBattlerRefreshData().setData(data);
    Network.sendMessage(msg);
  };
  _._collectDataForNetwork = function() {
    var data;
    return data = {
      hp: this._hp,
      mp: this._mp,
      tp: this._tp,
      states: this._states
    };
  };
  _._isNeedNetworkRefresh = function() {
    var phase;
    if (BattleManager.isNetworkBattleServer()) {
      phase = BattleManager._phase;
      return phase === 'action' || phase === 'start';
    }
    return false;
  };
})();

// ■ END Game_Battler_private.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Character.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Game_Character_initMembers = Game_Character.prototype.initMembers;
    Game_Character.prototype.initMembers = function () {
        _alias_Game_Character_initMembers.call(this, ...arguments);
        this._networkIconId = 0;
    };
})();
// ■ END Game_Character.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Character_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////

//?[NEW]
Game_Character.prototype.synchronizeFromNetwork = function (netCharData) {
    this.onNetworkCharacterData(netCharData.charData);
    this.locate(netCharData.locatePoint.x, netCharData.locatePoint.y);
    this.onNetworkDirectionData(netCharData.locatePoint.direction);
};

//?[NEW]
Game_Character.prototype.onNetworkCharacterData = function (characterData) {
    this.updateNetworkData(characterData);
};

//?[NEW]
Game_Character.prototype.updateNetworkData = function (characterData) {
    for (var key in characterData) {
        this[key] = characterData[key];
    }
};

//?[NEW]
Game_Character.prototype.onNetworkDirectionData = function (d) {
    this._direction = d;
};

//?[NEW]
Game_Character.prototype.collectDataForNetwork = function () {
    var data = this._collectDataForNetwork();
    data.locatePoint = {
        x: this._x,
        y: this._y,
        direction: this._direction
    };
    return data;
};

//?[NEW]
Game_Character.prototype._collectDataForNetwork = function () {
    var data = {};
    data.charData = this._collectCharDataForNetwork();
    data.moveData = this._collectMoveDataForNetwork();
    return data;
};

//?[NEW]
Game_Character.prototype._collectCharDataForNetwork = function () {
    var data = {};
    data._moveSpeed = this.realMoveSpeed();
    data._opacity = this.opacity();
    data._blendMode = this.blendMode();
    data._walkAnime = this.hasWalkAnime();
    data._stepAnime = this.hasStepAnime();
    data._directionFix = this.isDirectionFixed();
    data._transparent = this.isTransparent();
    data._direction = this._direction;
    return data;
};

//?[NEW]
Game_Character.prototype._collectMoveDataForNetwork = function () {
    return {
        x: this.x,
        y: this.y
    };
};

//?[NEW]
Game_Character.prototype.onNetworkMoveData = function (moveData) {
    this._moveFromNetwork(moveData);
};

//?[NEW]
Game_Character.prototype._moveFromNetwork = function (point) {
    try {
        var sx = this.deltaXFrom(point.x);
        var sy = this.deltaYFrom(point.y);
        if (sx !== 0 && sy !== 0) {
            this.moveDiagonally(sx > 0 ? 4 : 6, sy > 0 ? 8 : 2);
        } else if (sx !== 0) {
            this._moveStraightNetwork(sx > 0 ? 4 : 6);
        } else if (sy !== 0) {
            this._moveStraightNetwork(sy > 0 ? 8 : 2);
        }
    } catch (e) {

    }
};

//?[NEW]
Game_Character.prototype._moveStraightNetwork = function (d) {
    this.setMovementSuccess(true);
    this.setDirection(d);
    this._x = $gameMap.roundXWithDirection(this._x, d);
    this._y = $gameMap.roundYWithDirection(this._y, d);
    this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
    this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
    this.increaseSteps();
};

//?[NEW]
Game_Character.prototype.networkIconId = function () {
    if (this.isTransparent())
        return -1;
    else
        return this._networkIconId;
};

//?[NEW]
Game_Character.prototype._startNetworkIcon = function () {
    this._networkIconId = 0;
};

//?[NEW]
Game_Character.prototype.showNetworkIcon = function (iconId) {
    this._networkIconId = iconId;
};

//?[NEW]
Game_Character.prototype.getNetworkName = function() {
    return null;
};

//?[NEW]
Game_Character.prototype.getNetworkNameStyleId = function() {
    return null;
};
// ■ END Game_Character_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Enemy.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Game_Enemy_setup = Game_Enemy.prototype.setup;
    Game_Enemy.prototype.setup = function () {
        _alias_Game_Enemy_setup.call(this, ...arguments);
        if (BattleManager.isNetworkBattleServer()) {
            this._uniqueNetworkId = 901 + $gameTroop.members().length;
            "UID".p(this._uniqueNetworkId);
        }
    };

    //?[NEW]
    Game_Enemy.prototype.uniqueNetworkId = function () {
        return this._uniqueNetworkId;
    };

    //@[ALIAS]
    var _alias_Game_Enemy_refresh = Game_Enemy.prototype.refresh;
    Game_Enemy.prototype.refresh = function () {
        _alias_Game_Enemy_refresh.call(this, ...arguments);
        if (this._isNeedNetworkRefresh()) {
            this._sendRefreshMessageToNetwork(this.uniqueNetworkId());
        }
    };
})();
// ■ END Game_Enemy.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_EnemyPvP.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {

    function Game_EnemyPvP() {
        this.initialize.apply(this, arguments);
    }

    Game_EnemyPvP.prototype = Object.create(Game_Actor.prototype);
    Game_EnemyPvP.prototype.constructor = Game_EnemyPvP;

    Game_EnemyPvP.prototype.initialize = function (actorId, x, y) {
        Game_Actor.prototype.initialize.call(this, actorId);
        this._screenX = x;
        this._screenY = y;
    };

    //$[OVER FROM GAME_ACTOR]
    Game_EnemyPvP.prototype.setup = function (actorId) {
        Game_Actor.prototype.setup.call(this, actorId);
        this._setupFromActor();
    };

    //?[NEW]
    Game_EnemyPvP.prototype._setupFromActor = function () {
        var actor = $gameActors.actor(this._actorId);
        this._name = actor.name();
        this._nickname = actor.nickname();
        this._profile = actor.profile();
        this._classId = actor._classId;
        this._level = actor._level;
        
        this._characterName = actor.characterName();
        this._characterIndex = actor.characterIndex();
        this._faceName = actor.faceName();
        this._faceIndex = actor.faceIndex();
        this._battlerName = actor.battlerName();

        this._exp[this._classId] = actor._exp[this._classId];
        this._skills = actor._skills;
        this._equips = actor._equips;

        var data = actor._collectDataPvPForNetwork();
        this._onNetworkPvPData(data);
    };


    //?[BASE]
    Game_EnemyPvP.prototype.initMembers = function () {
        Game_Actor.prototype.initMembers.call(this);
        this._screenX = 0;
        this._screenY = 0;
    };

    //$[OVER FROM GAME_ACTOR]
    Game_EnemyPvP.prototype.isActor = function () {
        return false;
    };

    Game_EnemyPvP.prototype.isEnemy = function () {
        return true;
    };

    Game_EnemyPvP.prototype.friendsUnit = function () {
        return $gameTroop;
    };

    Game_EnemyPvP.prototype.opponentsUnit = function () {
        return $gameParty;
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.index = function () {
        return 0; // * PvP only 1 by 1
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.isBattleMember = function () {
        return true;
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.enemyId = function () {
        return Game_Actor.prototype.actorId.call(this);
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.enemy = function () {
        return Game_Actor.prototype.actor.call(this);
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.exp = function () {
        return 0; // * TODO: EXP
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.gold = function () {
        return 0; // * TODO: GOLD
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.makeDropItems = function () {
        return []; // * TODO: DROP ITEMS
    };

    Game_EnemyPvP.prototype.isSpriteVisible = function () {
        return true;
    };

    Game_EnemyPvP.prototype.screenX = function () {
        return Game_Enemy.prototype.screenX.call(this);
    };

    Game_EnemyPvP.prototype.screenY = function () {
        return Game_Enemy.prototype.screenY.call(this);
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.battlerHue = function () {
        return 0;
    };

    //$[OVER FROM GAME_ENEMY]
    Game_EnemyPvP.prototype.originalName = function () {
        return this.battlerName();
    };

    //$[OVER GAME_ACTOR]
    Game_EnemyPvP.prototype.performActionStart = function (action) {
        Game_Enemy.prototype.performActionStart.call(this, action);
    };

    //$[OVER GAME_ACTOR]
    Game_EnemyPvP.prototype.performDamage = function () {
        Game_Enemy.prototype.performDamage.call(this);
    };

    //$[OVER GAME_ACTOR]
    Game_EnemyPvP.prototype.performCollapse = function () {
        Game_Battler.prototype.performCollapse.call(this);
        this.requestEffect('collapse');
        SoundManager.playEnemyCollapse();
    };

    //$[OVER GAME_ENEMY]
    Game_EnemyPvP.prototype.meetsCondition = function (action) {
        return false; // * In PvP Interpreter not working!
    };

    //$[OVER GAME_ACTOR]
    Game_EnemyPvP.prototype.makeActions = function () {
        Game_Battler.prototype.makeActions.call(this);
        this.makeAutoBattleActions(); //TODO: Auto Battle in TEST
    };

    //$[OVER GAME_ENEMY]
    Game_EnemyPvP.prototype.uniqueNetworkId = function () {
        return this.enemyId();
    };

    AlphaNET.register(Game_EnemyPvP);
})();
// ■ END Game_EnemyPvP.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////

(function () {

    //@[ALIAS]
    var _Game_Event_prototype_initMembers = Game_Event.prototype.initMembers;
    Game_Event.prototype.initMembers = function () {
        _Game_Event_prototype_initMembers.call(this);
        this._isOnlyLocalMovement = false;
        this._isNetworkSharedMode = false;
        this._isStartedFromNetwork = false;
        this._networkSyncCommands = [];
    };

    //@[ALIAS]
    var _alias_Game_Event_initialize = Game_Event.prototype.initialize;
    Game_Event.prototype.initialize = function () {
        _alias_Game_Event_initialize.call(this, ...arguments);
        this._checkNetworkGlobalSymbols();
    };

    //?[NEW]
    Game_Event.prototype.isLockedByNet = function () {
        return $gameMap.isEventLockedByNet(this.eventId());
    };

    //?[NEW]
    Game_Event.prototype._checkNetworkGlobalSymbols = function () {
        try {
            var ev = this.event();
            if (ev.note.contains('LOCAL')) {
                //"LOCAL".p(ev.id);
                this.setLocalMovementMode(true);
            }
            if (ev.note.contains('NET')) {
                if (Network.isMultiMode() == false) {
                    // * Возможно это нужно?
                    //this.setLocalMovementMode(true);
                    this.setNetworkSharedMode(true);
                } else {
                    AlphaNET.warning(`using NET event (id ${this._eventId}) in multiplayer game mode on ${$gameMap.mapId()}`);
                }
            }
        } catch (error) {
            AlphaNET.error(error, ' read network global symbols from Event');
        }
    };

    //?[NEW]
    Game_Event.prototype.isOnlyLocalMoveMode = function () {
        return this._isOnlyLocalMovement == true;
    };

    //?[NEW]
    Game_Event.prototype.setLocalMovementMode = function (bool) {
        this._isOnlyLocalMovement = bool;
    };

    //?[NEW]
    Game_Event.prototype.setNetworkSharedMode = function (bool) {
        this._isNetworkSharedMode = bool;
    };

    //?[NEW]
    Game_Event.prototype.isNetworkSharedMode = function () {
        return (this._isNetworkSharedMode == true);
    };

    // * Когда Event движется, он передаёт все свои данные через сервер другим игрокам
    //@[ALIAS]
    var _Game_Event_prototype_moveStraight = Game_Event.prototype.moveStraight;
    Game_Event.prototype.moveStraight = function (d) {
        _Game_Event_prototype_moveStraight.call(this, d);
        if (Network.isConnected() && !this.isOnlyLocalMoveMode()) {
            var data = this._collectEventBasicDataForNetwork();
            data.moveData = this._collectDataForNetwork();
            Network.sendMessage(NetMessage.MapEventMoveData().setData(data));
        }
    };

    //?[NEW]
    Game_Event.prototype._collectEventBasicDataForNetwork = function () {
        var data = {
            eventId: this.eventId(),
            mapId: $gameMap.mapId()
        };
        return data;
    };

    // * Когда Event меняет Direction, он передаёт все свои данные через сервер другим игрокам
    //@[ALIAS]
    var _Game_Event_prototype_setDirection = Game_Event.prototype.setDirection;
    Game_Event.prototype.setDirection = function (d) {
        _Game_Event_prototype_setDirection.call(this, d);
        if (Network.isConnected() && !this.isOnlyLocalMoveMode()) {
            this._syncDirectionNetwork(d);
        }
    };

    //?[NEW]
    Game_Event.prototype._syncDirectionNetwork = function (d) {
        if (!this.isDirectionFixed() && d) {
            var data = this._collectEventBasicDataForNetwork();
            data.directionData = d;
            Network.sendMessage(NetMessage.MapEventMoveData().setData(data));
        }
    };

    //@[ALIAS]
    var _Game_Event_prototype_updateSelfMovement = Game_Event.prototype.updateSelfMovement;
    Game_Event.prototype.updateSelfMovement = function () {
        if(Network.isConnected()) {
            this._updateSelfMovementForNetwork();
        } else {
            _Game_Event_prototype_updateSelfMovement.call(this);
        }
    };

    //?[NEW]
    Game_Event.prototype._updateSelfMovementForNetwork = function () {
        if(Network.isMultiMode()) {
            if ($gameMap.isEventOwnedByNet(this.eventId())) {
                //?EMPTY
                //* Если другой игрок заблокировал событие, то оно не обновляется в любом случае!
                return;
            }
            if(!Network.isMapOwner() && 
            !this.isOnlyLocalMoveMode()) {
                //?EMPTY
                //* Все движения событий обрабатываются на том клиенте, который первый попал на карту
            } else {
                _Game_Event_prototype_updateSelfMovement.call(this);
            }
        } else {
            if (!Network.isHost() &&
                !this.isOnlyLocalMoveMode()) {
                //?EMPTY
                //* Все движения событий обрабатываются на хосте, кроме только локальных
            } else {
                _Game_Event_prototype_updateSelfMovement.call(this);
            }
        }
    };

    // * Эта функция вызывается на Хосте, когда он находится не на сцене карты
    // * Она нужна, чтобы события продолжали SelfMovement и не зависали у всех игроков
    //?[NEW]
    Game_Event.prototype.updateForNetwork = function () {
        Game_Character.prototype.update.call(this);
    };

    //@[ALIAS]
    var _alias_Game_Event_list = Game_Event.prototype.list;
    Game_Event.prototype.list = function () {
        if (this.isNeedStartSyncCommand()) {
            "RUN EVENT SYNC COMMAND".p();
            return this._createSyncCommandsList();
        } else if (this.isLockedByNet()) {
            return [];
        } else
            return _alias_Game_Event_list.call(this, ...arguments);
    };

    //@[ALIAS]
    var _alias_Game_Event_update = Game_Event.prototype.update;
    Game_Event.prototype.update = function () {
        _alias_Game_Event_update.call(this, ...arguments);
        if (this.isNeedStartSyncCommand()) {
            this._starting = true;
        }
    };

    //?[NEW]
    Game_Event.prototype.startFromNetwork = function () {       
        this._isStartedFromNetwork = true;
        if (this.sharedPageIndex >= 0) {
            this._pageIndex = this.sharedPageIndex;
            this.sharedPageIndex = -1;
        }
        this.start();
    };

    //?[NEW]
    Game_Event.prototype.isStartedFromNetwork = function () {
        return this._isStartedFromNetwork == true;
    };

    //?[NEW]
    Game_Event.prototype.clearStartFromNetwork = function () {
        this._isStartedFromNetwork = false;
    };

    //@[ALIAS]
    var _alias_Game_Event_lock = Game_Event.prototype.lock;
    Game_Event.prototype.lock = function () {
        if (!this._locked) {
            this._setEventOwned(true);
        }
        _alias_Game_Event_lock.call(this, ...arguments);
    };

    //@[ALIAS]
    var _alias_Game_Event_unlock = Game_Event.prototype.unlock;
    Game_Event.prototype.unlock = function () {
        if (this._locked) {
            this._setEventOwned(false);
        }
        _alias_Game_Event_unlock.call(this, ...arguments);
    };
})();

// ■ END Game_Event.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[CLASS IMPL ONLY]

  //@[DEFINES]
  _ = Game_Event.prototype;
  _.isNeedStartSyncCommand = function() {
    return this._networkSyncCommands.length > 0;
  };
  _.executeSyncCommandFromNetwork = function(pageIndex = 0, listIndex = -1) {
    this._networkSyncCommands.push([...arguments]);
    "COMMAND ADDED TO networkSyncCommands".p();
    if (!this.isStarting()) {
      return this._starting = true;
    }
  };
  _._createSyncCommandsList = function() {
    var list;
    list = this._networkSyncCommands.map((command) => {
      var item;
      item = this._getSyncCommand(...command);
      if (item != null) {
        return item;
      }
    });
    this._networkSyncCommands = [];
    return list;
  };
  _._getSyncCommand = function(pageIndex = 0, listIndex = -1) {
    var page;
    page = this.event().pages[pageIndex];
    if (page != null) {
      return this._getSyncCommandLine(page, listIndex);
    } else {
      return this._syncCommandLineNotFounded();
    }
  };
  _._getSyncCommandLine = function(page, index = -1) {
    var line, list;
    if (index < 0) {
      this._syncCommandLineNotFounded();
    }
    list = page.list;
    if (!((list != null) && list.length > 1)) {
      this._syncCommandLineNotFounded();
    }
    line = list[index];
    if (line != null) {
      return line;
    } else {
      return this._syncCommandLineNotFounded();
    }
  };
  _._syncCommandLineNotFounded = function() {
    AlphaNET.error('', 'Cannot Sync. Event Line not founded!');
    return null;
  };
  _._setEventOwned = function(isOwned) {
    var data;
    if (this._isEventNeedBeOwned()) {
      data = this._collectEventBasicDataForNetwork();
      data.isLock = isOwned;
      Network.sendMessage(NetMessage.OwnEvent().setData(data));
    }
  };
  _._isEventNeedBeOwned = function() {
    return Network.isConnected() && Network.isMultiMode() && !Network.isMapOwner();
  };
})();

// ■ END Game_Event_private.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Followers.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//$[OVER]
Game_Followers.prototype.initialize = function () {
    this._visible = true;
    this._gathering = false;
    this._data = [];
    for (var i = 0; i < Network.maximumNetworkPlayers; i++) {
        this._data.push(new AlphaNET.LIBS.NetworkCharacter(i));
    }
    this._netCharIdStore = null; // * Для оптимизации
};

//?[NEW]
Game_Followers.prototype.getNetworkCharById = function (id) {
    if (this._netCharIdStore == null)
        this._generateStore();
    return this._netCharIdStore[id];
};

// * Создаём хэш ID и character, чтобы каждый раз не искать по ID в _data
//?[NEW] 
Game_Followers.prototype._generateStore = function () {
    this._netCharIdStore = {};
    this._data.forEach(item => {
        this._netCharIdStore[item.netId] = item;
    });
};

//?[NEW]
Game_Followers.prototype.getNetworkCharByActorId = function (actorId) {
    for (var i = 0; i < this._data.length; i++) {
        if(this._data[i]) {
            var actor = this._data[i].actor();
            if(actor) {
                if (actor._actorId == actorId) {
                    return this._data[i];
                }
            }
        }
    }
    return null;
};


//$[OVER]
Game_Followers.prototype.update = function () {
    this.forEach(function (follower) {
        follower.update();
    }, this);
};

//@[ALIAS]
/*var _alias_Game_Followers_updateMove = Game_Followers.prototype.updateMove;
Game_Followers.prototype.updateMove = function () {
    if(Network.isConnected()) {
        if (!Network.isHost()) return;
        for (var i = this._data.length - 1; i >= 0; i--) {
            var precedingCharacter = (i > 0 ? this._data[i - 1] : $gamePlayer);
            this._data[i].chaseCharacter(precedingCharacter);
        }
    } else
        _alias_Game_Followers_updateMove.call(this, ...arguments);
};*/ //TODO: Gather можно реализовать

//?[NEW]
Game_Followers.prototype.count = function () {
    return this._data.length;
};

//?[NEW]
Game_Followers.prototype.refreshNetwork = function () {
    this._data.forEach(item => item.refreshNet());
    this._generateStore();
};

//?[NEW]
Game_Followers.prototype.getNetworkPlayerOnPosition = function(x, y) {
    if(!Network.isConnected()) {
        return null;
    }
    var networkPlayer = this._data.find(item => (item.x == x && item.y == y && item.actor()));
    return networkPlayer;
};
// ■ END Game_Followers.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {

  // * 1 - сделать выполнение событий с Sync, only, except командами - OK
  //  Проверить если событие запущено другое, а приходит синхронизация - OK
  //  Проверить очередь - OK
  // * 2 - сделать NET ALL событие с Sync, only, except командами + регулировка одновременного старта - OK
  // * 3 - параллельные события ???
  // * 4 - indent, ветвление ???
  // * 5 - общие события (обыные, параллельные, автоматические) ???

  //@[DEFINES]
  var _ = Game_Interpreter.prototype;

  //@[ALIAS]
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'NET') {
      switch (args[0]) {
        /* jshint -W086 */
        case 'start':
          AlphaNET.startServer();
          // * Тут нет Break намеренно, так как сразу соединение нужно к серверу
        case 'connect':
          AlphaNET.connectToServer();
          break;
        case 'disconnect':
          AlphaNET.disconnectFromServer();
          break;
        case 'hotSeat':
          AlphaNET.startAnotherClient();
          break;
        case 'stop':
          AlphaNET.stopServer();
          break;
        case 'sync':
          this._onNETSyncCommand();
          break;
        case 'lock':
          this._onNETLockCommand();
          break;
        case 'only':
        case 'except':
          this._onNETConditionCommand(args);
          break;
        case 'virtual':
          this._onNETVirtualCommand();
          break;
        case 'restrict':
          if (Network.isHost())
            Network._allowConnection = false;
          break;
        case 'allow':
          if (Network.isHost())
            Network._allowConnection = true;
          break;
        case 'setVariableSync':
          try {
            var varId = Number(args[1]);
            if(varId > 0) {
              this._registerNewSyncVariable(varId);
            }
          } catch (e) {
            ANET.warning(e, ' while execute setVariableSync plugin command');
          }
        default:
          break;
      }
    }
  };


  //@[ALIAS]
  var _alias_Game_Interpreter_clear = Game_Interpreter.prototype.clear;
  Game_Interpreter.prototype.clear = function () {
    _alias_Game_Interpreter_clear.call(this);
    this._network = new AlphaNET.LIBS.InterpreterNET();
  };

  //@[ALIAS]
  var _alias__setup = _.setup;
  _.setup = function () {
    _alias__setup.call(this, ...arguments);
    if (Network.isConnected() && this._eventId > 0) {
      this._network.setup(this._eventId, this._list);
      if (this._network.isShared() && this.isRunning()) {
        this._network.startNetwork();
      }
    }
  };

  //@[ALIAS]
  var _alias__updateWaitMode = _.updateWaitMode;
  _.updateWaitMode = function () {
    if (this._waitMode == 'network') {
      return this._updateWaitModeNetwork();
    } else 
      {
        this._network.resetWait();
        return _alias__updateWaitMode.call(this, ...arguments);
      }
  };

  //?[NEW]
  _._updateWaitModeNetwork = function () {
    if (!Network.isBusy()) {
      return this._network.updateWaitMode();
    }
    return true; // * Continue waiting
  };

  //@[ALIAS]
  var _alias__setupChoices = _.setupChoices;
  _.setupChoices = function () {
    _alias__setupChoices.call(this, ...arguments);
    if (Network.isConnected()) {
      $gameMessage.setSharedChoiseMode(this._network.isShared());
    }
  };

  // * Transfer Player
  //@[ALIAS]
  var _alias__command201 = _.command201;
  _.command201 = function () {
    return this._startCommandOnlyInSharedMode(_alias__command201, arguments);
  };


  // * Battle Processing
  //@[ALIAS]
  var _alias__command301 = _.command301;
  _.command301 = function () {
    return this._startCommandOnlyInSharedMode(_alias__command301, arguments);
  };

  //@[ALIAS]
  var _alias__terminate = _.terminate;
  _.terminate = function () {
    _alias__terminate.call(this, ...arguments);
    if (this._needEventUnlock) { // * Unlock the event
      this._onNETLockCommand(false);
    }
  };

  //?[NEW]
  _.command900 = function () {
    this.setWaitMode('network');
    return this._network.command900();
  };

  //?[NEW]
  _.command901 = function () {
    this.setWaitMode('network');
    return this._network.command901(this._index, this._indent);
  };

  // * Change Party Member
  //@[ALIAS]
  var _alias__command129 = _.command129;
  _.command129 = function () {
    if (Network.isConnected()) {
      AlphaNET.warning('Change Party Member (129) - not allowed in Network game!');
      return true;
    } else
      return _alias__command129.call(this, ...arguments);
  };

  // * Getting On and Off Vehicles
  //@[ALIAS]
  var _alias__command206 = _.command206;
  _.command206 = function () {
    if (Network.isConnected()) {
      AlphaNET.warning('Getting On and Off Vehicles (206) - not allowed in Network game!');
      return true;
    } else
      return _alias__command206.call(this, ...arguments);
  };

  // * Change Player Followers
  //@[ALIAS]
  var _alias__command216 = _.command216;
  _.command216 = function () {
    if (Network.isConnected()) {
      AlphaNET.warning('Change Player Followers (216) - not allowed in Network game!');
      return true;
    } else
      return _alias__command216.call(this, ...arguments);
  };

  // * Gather Followers
  //$[OVER]
  _.command217 = function () {
    AlphaNET.warning('Gather Followers (217) - not working with Alpha NET plugin');
    return true;
  };

  //@[ALIAS]
  var _alias__executeCommand = _.executeCommand;
  _.executeCommand = function () {
    if (Network.isConnected())
      this._networkSynchronization();
    return _alias__executeCommand.call(this, ...arguments);
  };

  // * Control Variables
  //@[ALIAS]
  var _alias__command122 = _.command122;
  _.command122 = function () {
      _alias__command122.call(this);
      if(Network.isConnected()) {
        for (var i = this._params[0]; i <= this._params[1]; i++) {
          if (Network.isSyncedVariable(i)) {
            this._onSyncVariableValueChanged(i);
          }
        }
      }
      return true;
  };

})();

// ■ END LibGame_Interpreter
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
//Compressed by MV Plugin Builder
(function(){var _0x4ae1 = [
    'czRjK',
    'VirtualInterpreter',
    '_onNETVirtualCommand',
    'XQrRo',
    'lcoJL',
    'qWtIN',
    'isSyncedVariable',
    'RegisterSyncVar',
    '_onSyncVariableValueChanged',
    '_executeVirtualCommand',
    'uGHAw',
    '_collectScriptCallForNetwork',
    '_sendScriptCall',
    'COhYl',
    'lAhQq',
    'sWiKV',
    'KGRgc',
    '_eventId',
    '_registerNewSyncVariable',
    'NnPBt',
    'FddhE',
    'XZVNc',
    '_sendSyncVarValue',
    '_executeVirtualScriptCall',
    'osExu',
    '_onNETSyncCommand',
    'isConnected',
    '_isSyncCommandValid',
    '_executeSyncCommand',
    'nextEventCode',
    'include',
    '_getCurrentPageIndexForNet',
    '_index',
    'sendMessage',
    'SyncEvent',
    'setData',
    'qsxCM',
    '_mapId',
    'eventId',
    'lToKx',
    'getMyPlayerIndex',
    'getMyActorId',
    'contains',
    '_pageIndex',
    'error',
    'get\x20page\x20index\x20for\x20event\x20sync\x20command',
    '_onNETLockCommand',
    'kdgmR',
    'tDuGx',
    '_needEventUnlock',
    '_getBasicEventDataForNet',
    'isLock',
    'VirtualScriptCall',
    'CreateSubMessageData',
    'mapId',
    '_onNETConditionCommand',
    'DsFte',
    '_executeConditionCommand',
    'split',
    'map',
    'jUZDU',
    'zKipW',
    'warning',
    'When\x20Execute\x20Virtual\x20Script\x20Call',
    'while\x20read\x20condition\x20excpet\x20or\x20only',
    'isHost',
    'nckDF',
    'only',
    '_isListLineIsSynced',
    'LDiZt',
    'dacBx',
    '_list',
    '_startCommandOnlyInSharedMode',
    'HEzJD',
    'code',
    'parameters',
    'NET\x20sync',
    'isMultiMode',
    'call',
    '_network',
    'LbFCb',
    'This\x20command\x20allowed\x20only\x20in\x20NET\x20shared\x20events',
    'isShared',
    'currentCommand',
    '_isSyncCommandRequire',
    'sHFmh',
    'ATYZc',
    '_sendVirtualCommand',
    'hmvWZ'
];
(function (_0x10865b, _0x70602f) {
    var _0x4f57bd = function (_0x46c623) {
        while (--_0x46c623) {
            _0x10865b['push'](_0x10865b['shift']());
        }
    };
    _0x4f57bd(++_0x70602f);
}(_0x4ae1, 0x1d6));
var _0x3cc4 = function (_0x3eff0e, _0x35e1a0) {
    _0x3eff0e = _0x3eff0e - 0x0;
    var _0x376dce = _0x4ae1[_0x3eff0e];
    return _0x376dce;
};
(function () {
    var _0x3b1aea, _0x5ade01, _0x5d37a9;
    _0x5d37a9 = Game_Interpreter['prototype'];
    _0x5ade01 = [
        0x65,
        0x66,
        0x67,
        0x68,
        0x6c
    ];
    _0x3b1aea = [
        0x137,
        0x138,
        0x146,
        0x139,
        0x13a,
        0x13b,
        0x13c,
        0x13d,
        0x13e,
        0x13f,
        0x140,
        0x141,
        0x142,
        0x143,
        0x144,
        0x145,
        0xca,
        0xcb,
        0x119,
        0x11a,
        0x11b,
        0x11c,
        0x14b,
        0x14c,
        0x156,
        0x14d,
        0x14e,
        0x14f,
        0x150,
        0x151,
        0x153,
        0x154
    ];
    _0x5d37a9[_0x3cc4('0x0')] = function () {
        if (!Network[_0x3cc4('0x1')]()) {
            return;
        }
        if (this[_0x3cc4('0x2')]()) {
            return this[_0x3cc4('0x3')]();
        }
    };
    _0x5d37a9['_isSyncCommandValid'] = function () {
        var _0x2dd56d;
        _0x2dd56d = this[_0x3cc4('0x4')]();
        return !_0x5ade01['include'](_0x2dd56d) && !_0x3b1aea[_0x3cc4('0x5')](_0x2dd56d);
    };
    _0x5d37a9[_0x3cc4('0x3')] = function () {
        var _0x1a194b;
        _0x1a194b = this['_getBasicEventDataForNet']();
        _0x1a194b['pi'] = this[_0x3cc4('0x6')]();
        _0x1a194b['li'] = this[_0x3cc4('0x7')] + 0x1;
        return Network[_0x3cc4('0x8')](NetMessage[_0x3cc4('0x9')]()[_0x3cc4('0xa')](_0x1a194b));
    };
    _0x5d37a9['_getBasicEventDataForNet'] = function () {
        if (_0x3cc4('0xb') !== _0x3cc4('0xb')) {
            eval(script);
        } else {
            return {
                'mapId': this[_0x3cc4('0xc')],
                'eventId': this[_0x3cc4('0xd')]()
            };
        }
    };
    _0x5d37a9['_getCurrentPageIndexForNet'] = function () {
        var _0x223230, _0x32f945, _0xbdfe25;
        try {
            if ('lToKx' !== _0x3cc4('0xe')) {
                myId = !isActorId ? NetPartyManager[_0x3cc4('0xf')]() : NetPartyManager[_0x3cc4('0x10')]();
                condition = id[_0x3cc4('0x11')](myId);
            } else {
                _0x32f945 = this[_0x3cc4('0xd')]();
                if (_0x32f945) {
                    _0xbdfe25 = $gameMap['event'](_0x32f945);
                    if (_0xbdfe25) {
                        return _0xbdfe25[_0x3cc4('0x12')];
                    }
                }
                return 0x0;
            }
        } catch (_0x3b4b02) {
            _0x223230 = _0x3b4b02;
            AlphaNET[_0x3cc4('0x13')](_0x223230, _0x3cc4('0x14'));
            return 0x0;
        }
    };
    _0x5d37a9[_0x3cc4('0x15')] = function (_0x1f3cc9 = !![]) {
        if (_0x3cc4('0x16') !== _0x3cc4('0x17')) {
            var _0x5be043;
            if (!Network['isConnected']()) {
                return;
            }
            this[_0x3cc4('0x18')] = _0x1f3cc9;
            _0x5be043 = this[_0x3cc4('0x19')]();
            _0x5be043[_0x3cc4('0x1a')] = _0x1f3cc9;
            return Network[_0x3cc4('0x8')](NetMessage['LockEvent']()[_0x3cc4('0xa')](_0x5be043));
        } else {
            var _0x4ebf9a, _0x13224c;
            _0x13224c = NetMessage[_0x3cc4('0x1b')]();
            _0x4ebf9a = NetMessage[_0x3cc4('0x1c')](0x0);
            _0x4ebf9a['script'] = script;
            _0x4ebf9a[_0x3cc4('0x1d')] = this['_mapId'];
            _0x4ebf9a['eventId'] = this['_eventId'];
            _0x13224c['setData'](_0x4ebf9a);
            Network[_0x3cc4('0x8')](_0x13224c);
        }
    };
    _0x5d37a9[_0x3cc4('0x1e')] = function (_0x3cb3a2) {
        var _0x2931b8, _0xe3b7a, _0x4da201;
        try {
            if (!Network[_0x3cc4('0x1')]()) {
                if (_0x3cc4('0x1f') !== _0x3cc4('0x1f')) {
                    var _0x3325a2;
                    _0x3325a2 = this[_0x3cc4('0x19')]();
                    _0x3325a2['pi'] = this[_0x3cc4('0x6')]();
                    _0x3325a2['li'] = this[_0x3cc4('0x7')] + 0x1;
                    return Network[_0x3cc4('0x8')](NetMessage[_0x3cc4('0x9')]()[_0x3cc4('0xa')](_0x3325a2));
                } else {
                    return;
                }
            }
            _0xe3b7a = _0x3cb3a2[0x1];
            if (_0xe3b7a == null) {
                this[_0x3cc4('0x20')](_0x3cb3a2[0x0]);
            } else {
                _0x4da201 = _0x3cb3a2[0x1][_0x3cc4('0x21')]('|')[_0x3cc4('0x22')](function (_0x166d2d) {
                    if (_0x3cc4('0x23') === _0x3cc4('0x24')) {
                        _0x2931b8 = error;
                        ANET[_0x3cc4('0x25')](_0x3cc4('0x26'), _0x2931b8);
                    } else {
                        return Number(_0x166d2d);
                    }
                });
                this[_0x3cc4('0x20')](_0x3cb3a2[0x0], _0x4da201, _0x3cb3a2[0x2] === 'A');
            }
        } catch (_0xb18945) {
            _0x2931b8 = _0xb18945;
            AlphaNET[_0x3cc4('0x13')](_0x2931b8, _0x3cc4('0x27'));
        }
    };
    _0x5d37a9[_0x3cc4('0x20')] = function (_0x230e95, _0x163475 = null, _0x7395f9 = ![]) {
        var _0x1a7f9b, _0x4d581f;
        _0x1a7f9b = Network[_0x3cc4('0x28')]();
        if (_0x163475 != null) {
            if (_0x3cc4('0x29') === _0x3cc4('0x29')) {
                _0x4d581f = !_0x7395f9 ? NetPartyManager['getMyPlayerIndex']() : NetPartyManager['getMyActorId']();
                _0x1a7f9b = _0x163475[_0x3cc4('0x11')](_0x4d581f);
            } else {
                var _0x4a0ff6;
                _0x4a0ff6 = this[_0x3cc4('0x4')]();
                return !_0x5ade01['include'](_0x4a0ff6) && !_0x3b1aea['include'](_0x4a0ff6);
            }
        }
        if (_0x1a7f9b && _0x230e95 === 'except') {
            this['_index']++;
        }
        if (!_0x1a7f9b && _0x230e95 === _0x3cc4('0x2a')) {
            this[_0x3cc4('0x7')]++;
        }
    };
    _0x5d37a9[_0x3cc4('0x2b')] = function (_0xf23296) {
        if (_0x3cc4('0x2c') !== _0x3cc4('0x2c')) {
            if (!Network['isConnected']()) {
                return;
            }
            if (this[_0x3cc4('0x2')]()) {
                return this[_0x3cc4('0x3')]();
            }
        } else {
            var _0x243f22, _0x949830;
            try {
                if (_0x3cc4('0x2d') === _0x3cc4('0x2d')) {
                    _0x243f22 = this[_0x3cc4('0x2e')][_0xf23296];
                    if (_0x243f22['code'] === 0x164) {
                        return _0x243f22['parameters'][0x0] === 'NET\x20sync';
                    }
                } else {
                    return Number(item);
                }
            } catch (_0x298076) {
                _0x949830 = _0x298076;
                AlphaNET[_0x3cc4('0x13')](_0x949830, 'while\x20check\x20list[index]\x20to\x20sync\x20line');
            }
            return ![];
        }
    };
    _0x5d37a9[_0x3cc4('0x2f')] = function (_0x15cc66, _0x3f69e6) {
        if (!Network['isConnected']()) {
            if (_0x3cc4('0x30') !== _0x3cc4('0x30')) {
                var _0x3ea890, _0x595e2c;
                try {
                    _0x3ea890 = this['_list'][index];
                    if (_0x3ea890[_0x3cc4('0x31')] === 0x164) {
                        return _0x3ea890[_0x3cc4('0x32')][0x0] === _0x3cc4('0x33');
                    }
                } catch (_0x571d0b) {
                    _0x595e2c = _0x571d0b;
                    AlphaNET[_0x3cc4('0x13')](_0x595e2c, 'while\x20check\x20list[index]\x20to\x20sync\x20line');
                }
                return ![];
            } else {
                return _0x15cc66['call'](this, ..._0x3f69e6);
            }
        } else {
            if (Network[_0x3cc4('0x34')]()) {
                return _0x15cc66[_0x3cc4('0x35')](this, ..._0x3f69e6);
            } else {
                if (this[_0x3cc4('0x36')]['isShared']()) {
                    return _0x15cc66['call'](this, ..._0x3f69e6);
                } else {
                    if (_0x3cc4('0x37') !== _0x3cc4('0x37')) {
                        return;
                    } else {
                        AlphaNET[_0x3cc4('0x25')](_0x3cc4('0x38'));
                    }
                }
            }
        }
        return !![];
    };
    _0x5d37a9['_networkSynchronization'] = function () {
        var _0x1fea52;
        if (this[_0x3cc4('0x36')][_0x3cc4('0x39')]()) {
            return;
        }
        _0x1fea52 = this[_0x3cc4('0x3a')]();
        if (_0x1fea52 == null) {
            return;
        }
        if (!this[_0x3cc4('0x3b')](_0x1fea52[_0x3cc4('0x31')])) {
            if (_0x3cc4('0x3c') !== _0x3cc4('0x3d')) {
                return;
            } else {
                this[_0x3cc4('0x7')]++;
            }
        }
        return this[_0x3cc4('0x3e')](_0x1fea52);
    };
    _0x5d37a9[_0x3cc4('0x3b')] = function (_0x44287b) {
        return _0x3b1aea[_0x3cc4('0x5')](_0x44287b);
    };
    _0x5d37a9[_0x3cc4('0x3e')] = function (_0x2135aa) {
        if (_0x3cc4('0x3f') === _0x3cc4('0x40')) {
            return;
        } else {
            var _0x28a079, _0x2bae14;
            _0x2bae14 = NetMessage[_0x3cc4('0x41')]();
            _0x28a079 = NetMessage[_0x3cc4('0x1c')](_0x2135aa['code']);
            _0x28a079[_0x3cc4('0x32')] = _0x2135aa['parameters'];
            _0x28a079[_0x3cc4('0x1d')] = this[_0x3cc4('0xc')];
            _0x28a079['eventId'] = this['_eventId'];
            _0x2bae14[_0x3cc4('0xa')](_0x28a079);
            Network[_0x3cc4('0x8')](_0x2bae14);
        }
    };
    _0x5d37a9[_0x3cc4('0x42')] = function () {
        if (!Network[_0x3cc4('0x1')]()) {
            if (_0x3cc4('0x43') === 'gafcs') {
                if (!Network[_0x3cc4('0x1')]()) {
                    return;
                }
                if (this['_network'][_0x3cc4('0x39')]()) {
                    return;
                }
                if (this[_0x3cc4('0x2')]()) {
                    return this['_executeVirtualCommand']();
                }
            } else {
                return;
            }
        }
        if (this[_0x3cc4('0x36')][_0x3cc4('0x39')]()) {
            if (_0x3cc4('0x44') !== _0x3cc4('0x45')) {
                return;
            } else {
                var _0x5de1eb;
                if (Network[_0x3cc4('0x46')](varId)) {
                    return;
                }
                Network['registerSyncVariable'](varId);
                _0x5de1eb = NetMessage[_0x3cc4('0x47')]();
                _0x5de1eb[_0x3cc4('0xa')](varId);
                Network[_0x3cc4('0x8')](_0x5de1eb);
                this[_0x3cc4('0x48')](varId);
            }
        }
        if (this[_0x3cc4('0x2')]()) {
            return this['_executeVirtualCommand']();
        }
    };
    _0x5d37a9[_0x3cc4('0x49')] = function () {
        var _0x132a80, _0x515306;
        _0x132a80 = this[_0x3cc4('0x2e')][this[_0x3cc4('0x7')] + 0x1];
        if (_0x132a80['code'] === 0x163) {
            if (_0x3cc4('0x4a') !== _0x3cc4('0x4a')) {
                return event[_0x3cc4('0x12')];
            } else {
                _0x515306 = this[_0x3cc4('0x4b')](_0x132a80);
                return this[_0x3cc4('0x4c')](_0x515306);
            }
        } else {
            if ('JGseC' === _0x3cc4('0x4d')) {
                return;
            } else {
                return this[_0x3cc4('0x3e')](_0x132a80);
            }
        }
    };
    _0x5d37a9[_0x3cc4('0x4b')] = function (_0x359210) {
        if (_0x3cc4('0x4e') === _0x3cc4('0x4f')) {
            return;
        } else {
            var _0xcf5f04, _0x256550, _0x2e953b;
            _0x2e953b = _0x359210[_0x3cc4('0x32')][0x0] + '\x0a';
            _0xcf5f04 = 0x2;
            _0x256550 = this[_0x3cc4('0x2e')][this['_index'] + _0xcf5f04]['code'];
            while (_0x256550 === 0x28f) {
                _0x359210 = this[_0x3cc4('0x2e')][this[_0x3cc4('0x7')] + _0xcf5f04];
                _0x2e953b += _0x359210[_0x3cc4('0x32')][0x0] + '\x0a';
                _0xcf5f04++;
                _0x256550 = this['_list'][this[_0x3cc4('0x7')] + _0xcf5f04][_0x3cc4('0x31')];
            }
            return _0x2e953b;
        }
    };
    _0x5d37a9['_sendScriptCall'] = function (_0x37142a) {
        if ('KGRgc' !== _0x3cc4('0x50')) {
            return;
        } else {
            var _0x3c687a, _0x27855b;
            _0x27855b = NetMessage[_0x3cc4('0x1b')]();
            _0x3c687a = NetMessage[_0x3cc4('0x1c')](0x0);
            _0x3c687a['script'] = _0x37142a;
            _0x3c687a[_0x3cc4('0x1d')] = this['_mapId'];
            _0x3c687a['eventId'] = this[_0x3cc4('0x51')];
            _0x27855b['setData'](_0x3c687a);
            Network[_0x3cc4('0x8')](_0x27855b);
        }
    };
    _0x5d37a9[_0x3cc4('0x52')] = function (_0x302d5a) {
        var _0x26fe8c;
        if (Network[_0x3cc4('0x46')](_0x302d5a)) {
            return;
        }
        Network['registerSyncVariable'](_0x302d5a);
        _0x26fe8c = NetMessage[_0x3cc4('0x47')]();
        _0x26fe8c[_0x3cc4('0xa')](_0x302d5a);
        Network[_0x3cc4('0x8')](_0x26fe8c);
        this[_0x3cc4('0x48')](_0x302d5a);
    };
    _0x5d37a9[_0x3cc4('0x48')] = function (_0x5c1195) {
        if (_0x3cc4('0x53') !== _0x3cc4('0x53')) {
            return this[_0x3cc4('0x3')]();
        } else {
            if (!Network[_0x3cc4('0x46')](_0x5c1195)) {
                if (_0x3cc4('0x54') === _0x3cc4('0x55')) {
                    return cmd[_0x3cc4('0x32')][0x0] === _0x3cc4('0x33');
                } else {
                    return;
                }
            }
            Network[_0x3cc4('0x56')](_0x5c1195);
        }
    };
    _0x5d37a9[_0x3cc4('0x57')] = function (_0x1ff70a) {
        if ('QQWrh' !== _0x3cc4('0x58')) {
            var _0x3d6b35;
            try {
                eval(_0x1ff70a);
            } catch (_0xf596fc) {
                _0x3d6b35 = _0xf596fc;
                ANET[_0x3cc4('0x25')]('When\x20Execute\x20Virtual\x20Script\x20Call', _0x3d6b35);
            }
        } else {
            return;
        }
    };
}());
})();

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //?[NEW]
    Game_Map.prototype.updateEventsForNetwork = function () {
        this.events().forEach(function (event) {
            event.updateForNetwork();
        });
        //TODO: Можно просто вызывать updateEvents
        //TODO: Сейчас в этой функции не обновляются commonEvents
    };


    //@[ALIAS]
    var _alias_Game_Map_update = Game_Map.prototype.update;
    Game_Map.prototype.update = function () {
        _alias_Game_Map_update.call(this, ...arguments);
        this._checkSharedEvent();
    };

    //?[NEW]
    Game_Map.prototype._checkSharedEvent = function () {
        if (this._sharedEventData != null) {
            this._sharedEventData.startFromNetwork();
            this._sharedEventData = null;
        }
    };

    //@[ALIAS]
    var _alias_Game_Map_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function () {
        //console.groupCollapsed('Game_Map_setup');
        _alias_Game_Map_setup.call(this, ...arguments);
        this._sharedEventData = null;
        this._lockedEventsIds = [];
        this._ownedEventIds = [];
        this._isNeedRefreshSpritesForNetwork = false;
        ///console.groupEnd();
    };

    //?[NEW]
    Game_Map.prototype.startEventFromNetwork = function (data) {
        if (data.mapId == this.mapId()) {
            var event = this.event(data.eventId);
            if (event && !$gameMap.isAnyEventStarting()) {
                "DATA PAGE INDEX".p(data.pageIndex);
                event.sharedPageIndex = data.pageIndex;
                this._sharedEventData = event;
            }
        }
    };

    //?[NEW]
    Game_Map.prototype.setLockedEventByNetwork = function (eventId, isLocked = true) {
        if (!eventId || eventId <= 0) return;
        if (!this.event(eventId)) return;
        if (isLocked) {
            "GAME MAP LOCK EVENT".p(eventId);
            this._lockedEventsIds.push(eventId);
        } else {
            "  GAME MAP UNLOCK EVENT".p(eventId);
            this._lockedEventsIds.delete(eventId);
        }
    };

    //?[NEW]
    Game_Map.prototype.isEventLockedByNet = function (eventId) {
        if(this._lockedEventsIds != null)
            return this._lockedEventsIds.includes(eventId);
        return false;
    };

})();
// ■ END Game_Map.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //?[NEW]
    // * Собирает информацию о позициях всех глобальных событий
    Game_Map.prototype.collectDataForNetwork = function () {
        try {
            var eventsForNet = this._getLocalOnlyEvents();
            var dataForNet = [];
            var data;
            eventsForNet.forEach(event => {
                data = event.collectDataForNetwork();
                data.eventId = event.eventId();
                dataForNet.push(data);
            });
            return dataForNet;
        } catch (error) {
            AlphaNET.error(error, ' while try collect event moving data for Network');
            return [];
        }
    };

    //?[NEW]
    // * Обновляет позицию для всех глобальных событий
    Game_Map.prototype.synchronizeFromNetwork = function (netMapData) {
        if (netMapData == null || netMapData.length == 0)
            return;
        var event;
        netMapData.forEach(data => {
            event = this.event(data.eventId);
            if (event != null) {
                if (!event.isOnlyLocalMoveMode()) {
                    event.synchronizeFromNetwork(data);
                }
            }
        });
    };

    //?[NEW]
    Game_Map.prototype.setOwnedEventByNetwork = function (eventId, isOwned = true) {
        if (!eventId || eventId <= 0) return;
        if (!this.event(eventId)) return;
        if (isOwned) {
            "GAME MAP OWNED EVENT".p(eventId);
            this._ownedEventIds.push(eventId);
        } else {
            "  GAME MAP OWNED EVENT".p(eventId);
            this._ownedEventIds.delete(eventId);
        }
    };

    //?[NEW]
    Game_Map.prototype.isEventOwnedByNet = function (eventId) {
        if (this._ownedEventIds != null)
            return this._ownedEventIds.includes(eventId);
        return false;
    };

    //?[NEW]
    Game_Map.prototype.isSpritesRefreshRequestedForNetwork = function () {
        return this._isNeedRefreshSpritesForNetwork;
    };

    //?[NEW]
    Game_Map.prototype.spritesRefreshForNetworkComplete = function () {
        this._isNeedRefreshSpritesForNetwork = false;
    };

    //?[NEW]
    Game_Map.prototype.requestNetworkRefresh = function () {
        this._isNeedRefreshSpritesForNetwork = true;
    };
})();
// ■ END Game_Map_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[CLASS IMPL ONLY]

  //@[DEFINES]
  _ = Game_Map.prototype;
  _._getLocalOnlyEvents = function() {
    return this.events().filter(function(event) {
      return !event.isOnlyLocalMoveMode();
    });
  };
})();

// ■ END Game_Map_private.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Message.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Game_Message_clear6565 = Game_Message.prototype.clear;
    Game_Message.prototype.clear = function () {
        _alias_Game_Message_clear6565.call(this, ...arguments);
        this._isChoiseShared = false;
    };

    //?[NEW]
    Game_Message.prototype.setSharedChoiseMode = function (bool) {
        this._isChoiseShared = bool;
    };

    //?[NEW]
    Game_Message.prototype.isChoiseSharedMode = function () {
        return (this._isChoiseShared == true);
    };
})();
// ■ END Game_Message.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //?[NEW]
    Game_Party.prototype.isMaximumForNetwork = function () {
        return Network.maximumNetworkPlayers == this.size();
    };

    //@[ALIAS]
    var _alias_Game_Party_leader = Game_Party.prototype.leader;
    Game_Party.prototype.leader = function () {
        if (Network.isConnected() && !Network.isHost()) {
            return this._networkLeader();
        } else {
            return _alias_Game_Party_leader.call(this);
        }
    };

    //?[NEW]
    Game_Party.prototype._networkLeader = function () {
        if (Network.myPlayerData != null && Network.myPlayerData.actorId != null)
            return this.memberByActorId(Network.myPlayerData.actorId);
        else
            return this.members()[0];
    };

    //@[ALIAS]
    var _alias_Game_Party_battleMembers = Game_Party.prototype.battleMembers;
    Game_Party.prototype.battleMembers = function () {
        if (Network.isConnected() && Network.isMultiMode()) {
            return this._networkBattleMembers();
        } else
            return _alias_Game_Party_battleMembers.call(this, ...arguments);
    };

    //?[NEW]
    Game_Party.prototype._networkBattleMembers = function () {
        return [this._networkLeader()];
    };

    //?[NEW]
    Game_Party.prototype.memberByActorId = function (actorId) {
        return $gameActors.actor(actorId);
    };

    //?[NEW]
    Game_Party.prototype.memberIndexByActorId = function (actorId) {
        return this.members().findElementIndexByField("_actorId", actorId);
    };

    //?[NEW]
    Game_Party.prototype.refreshForNetwork = function () {
        if (Network.isConnected())
            this.members().forEach(item => item.refresh());
    };

    //?[NEW]
    Game_Party.prototype.getDataForNetwork = function () {
        var itemsData = {
            items: JSON.stringify($gameParty._items),
            weapons: JSON.stringify($gameParty._weapons),
            armors: JSON.stringify($gameParty._armors),
            gold: JSON.stringify($gameParty._gold)
        };
        return itemsData;
    };

    //?[NEW]
    Game_Party.prototype.setDataFromNetwork = function (data) {
        if (data.items != null) {
            $gameParty._items = JSON.parse(data.items);
        }
        if (data.weapons != null) {
            $gameParty._weapons = JSON.parse(data.weapons);
        }
        if (data.gold != null) {
            $gameParty._gold = JSON.parse(data.gold);
        }
        if (data.armors != null)
            this._setArmorsFromNetwork(data.armors);
    };

    // * Отдельный метод для совместимости с YEP плагином
    //?[NEW]
    Game_Party.prototype._setArmorsFromNetwork = function (armors) {
        if (armors != null) {
            $gameParty._armors = JSON.parse(armors);
        }
    };

    //@[ALIAS]
    var _alias_Game_Party_menuActor = Game_Party.prototype.menuActor;
    Game_Party.prototype.menuActor = function () {
        if (Network.isRestrictedPartyList()) {
            return this.leader();
        } else
            return _alias_Game_Party_menuActor.call(this);
    };

    //$[OVER]
    // * Данный метод добавляет в группу только одного человека
    // Это устраняет ошибку "Server is Full"
    Game_Party.prototype.setupStartingMembers = function () {
        this._actors = [];
        var mainActorId = $dataSystem.partyMembers[0];
        if ($gameActors.actor(mainActorId)) {
            this._actors.push(mainActorId);
        }
    };

})();
// ■ END Game_Party.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _Game_Player_prototype_moveStraight = Game_Player.prototype.moveStraight;
    Game_Player.prototype.moveStraight = function (d) {
        _Game_Player_prototype_moveStraight.call(this, d);
        if (Network.isConnected()) {
            var moveData = this._collectDataForNetwork();
            Network.sendMessage(NetMessage.PlayerMoveData().setData(moveData));
        }
    };

    //@[ALIAS]
    var _alias_Game_Player_getOnOffVehicle = Game_Player.prototype.getOnOffVehicle;
    Game_Player.prototype.getOnOffVehicle = function () {
        if (Network.isConnected()) {
            return false;
        } else
            return _alias_Game_Player_getOnOffVehicle.call(this, ...arguments);
    };

    //?[BASE]
    Game_Player.prototype.getNetworkName = function () {
        if (AlphaNET.Parameters.get_ShowNameplatesMode() > 1)
            return $gameParty.leader().name();
    };

    //?[BASE]
    Game_Player.prototype.getNetworkNameStyleId = function () {
        return $gameParty.leader().networkStyleId();
    };

    //@[ALIAS]
    var _alias_Game_Player_checkEventTriggerThere = Game_Player.prototype.checkEventTriggerThere;
    Game_Player.prototype.checkEventTriggerThere = function () {

        _alias_Game_Player_checkEventTriggerThere.call(this, ...arguments);
        //if (Network.isConnected()) {
            //this._checkPvPStartTrigger(); // * Данная проверка теперь вынесена в _updateNetworkActionMenu
        //}
    };

    //?[NEW]
    Game_Player.prototype._checkPvPStartTrigger = function () {
        if (this.canStartLocalEvents() && !$gameMap.isAnyEventStarting()) {
            var direction = this.direction();
            var x = $gameMap.roundXWithDirection(this.x, direction);
            var y = $gameMap.roundYWithDirection(this.y, direction);
            var netPlayer = this.followers().getNetworkPlayerOnPosition(x, y);
            if(netPlayer) {
                //"FINDED PLAYER FOR PVP ".p(netPlayer.netIndex);
                var d2 = netPlayer.direction();
                var canStartPvp = false;
                switch (direction) {
                    case 2:
                        canStartPvp = (d2 == 8);
                        break;
                    case 8:
                        canStartPvp = (d2 == 2);
                        break;
                    case 4:
                        canStartPvp = (d2 == 6);
                        break;
                    case 6:
                        canStartPvp = (d2 == 4);
                        break;
                    default:
                        break;
                }
                if(canStartPvp == true) {
                    if (netPlayer.networkIconId() <= 0) { // * Это довольно не серьёзная проверка
                        //Network.requestPvPBattle(netPlayer.netIndex);
                        //Network.requestTrade(netPlayer.netIndex);
                        this._netPlayerForAction = netPlayer;
                        return true;
                    }
                    //else {
                        //"CHAR IS BUSY!".p();
                    //}
                }
                //else
                //    "WRONG DIRECTION".p();
            }
        }
        this._netPlayerForAction = null;
        return false;
    };

    //@[ALIAS]
    var _alias_Game_Player_update = Game_Player.prototype.update;
    Game_Player.prototype.update = function () {
        _alias_Game_Player_update.call(this, ...arguments);
        if (this.isMoving() && this._netActionMenuIsVisible == true) {
            NetUIManager.hideActionMenu();
            this._netActionMenuIsVisible = false;
        }
    };

    //@[ALIAS]
    var _alias_Game_Player_updateNonmoving = Game_Player.prototype.updateNonmoving;
    Game_Player.prototype.updateNonmoving = function () {
        _alias_Game_Player_updateNonmoving.call(this, ...arguments);
        if (Network.isConnected()) {
            this._updateNetworkActionMenu();
        }
    };

    //@[ALIAS]
    var _alias_Game_Player_canMove = Game_Player.prototype.canMove;
    Game_Player.prototype.canMove = function () {
        if(Network.isConnected() && Network.isBusy())
            return false;
        else
            return _alias_Game_Player_canMove.call(this);
    };

})();
// ■ END Game_Player.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player Private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[CLASS IMPL ONLY]

  //@[DEFINES]
  _ = Game_Player.prototype;
  _._updateNetworkActionMenu = function() {
    if (this._actionMenuRefreshTimer == null) {
      this._actionMenuRefreshTimer = new AATimer();
      this._actionMenuRefreshTimer.start(30);
    }
    this._actionMenuRefreshTimer.update();
    if (this._actionMenuRefreshTimer.isReady()) {
      this._checkActionMenu();
      return this._actionMenuRefreshTimer.reset();
    }
  };
  _._checkActionMenu = function() {
    if (this._checkPvPStartTrigger()) {
      this._netActionMenuIsVisible = true;
      return NetUIManager.showActionMenu();
    } else {
      this._netActionMenuIsVisible = false;
      return NetUIManager.hideActionMenu();
    }
  };
})();

// ■ END Game_Player Private.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Troop.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Game_Troop_setup = Game_Troop.prototype.setup;
    Game_Troop.prototype.setup = function () {
        _alias_Game_Troop_setup.call(this, ...arguments);
        this._isPvPTroop = false;
        if (BattleManager.isNetworkBattle()) {
            if (this._uniqueNamesFromNetwork != null) {
                this.setUniqueIdsForEnemies(this._uniqueNamesFromNetwork);
            }
        }
    };

    //?[NEW]
    Game_Troop.prototype.getEnemyByNetId = function (netId) {
        return this.members().find(item => item.uniqueNetworkId() == netId);
    };

    //?[NEW]
    Game_Troop.prototype.setUniqueIdsForEnemies = function (data) {
        var enemies = this.members();
        if (enemies.length > 0) {
            data.forEach((item, index) => enemies[index]._uniqueNetworkId = item);
            this._uniqueNamesFromNetwork = null;
        } else {
            this._uniqueNamesFromNetwork = data;
        }
    };

    //?[NEW]
    Game_Troop.prototype.setupPvPBattle = function (enemyActorId) {
        this.clear();
        this._troopId = 0;
        this._enemies = [];
        var x = 408;
        var y = 436;
        var actorId = enemyActorId;
        var enemy = new AlphaNET.LIBS.Game_EnemyPvP(actorId, x, y);
        this._enemies.push(enemy);
        this._isPvPTroop = true;
    };

    //?[NEW]
    Game_Troop.prototype.isPvPTroop = function () {
        return this._isPvPTroop == true;
    };

    //?[NEW]
    Game_Troop.prototype.rival = function () {
        return this.members()[0];
    };

    //@[ALIAS]
    var _alias_Game_Troop_setupBattleEvent = Game_Troop.prototype.setupBattleEvent;
    Game_Troop.prototype.setupBattleEvent = function () {
        if (this.isPvPTroop() == true) {

        } else 
            _alias_Game_Troop_setupBattleEvent.call(this, ...arguments);    
    };

    //@[ALIAS]
    var _alias_Game_Troop_increaseTurn = Game_Troop.prototype.increaseTurn;
    Game_Troop.prototype.increaseTurn = function () {
        if (this.isPvPTroop() == true) {
            this._turnCount++;
        } else
            _alias_Game_Troop_increaseTurn.call(this, ...arguments);
    };
})();
// ■ END Game_Troop.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ GameChatController.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var GameChatController;
  GameChatController = class GameChatController {
    constructor(chatUI) {
      this.chatUI = chatUI;
      this.settings = ANJsonSettings.getChatSettings()[0];
      this.colors = ANJsonSettings.getChatSettings()[3];
      this.chanels = ['ALL', 'MAP'];
      this.posX = this.settings.firstLineMarginX;
      this.posY = this.settings.firstLineMarginY;
      this.maxLines = this.settings.maxLines;
      this.lines = [];
      if ($gameTemp._chatLinesHistory == null) {
        $gameTemp._chatLinesHistory = [];
      }
      this.hiddenMessages = 0;
      this._loadHistoryLines();
      this._loadLines();
    }

    // * Так как чат пересоздаётся, загружаем историю
    _loadHistoryLines() {
      var e, i, j, line, ref;
      try {
        if ($gameTemp._chatLinesHistory.length > 0) {
          for (i = j = 0, ref = $gameTemp._chatLinesHistory.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            line = $gameTemp._chatLinesHistory[i];
            this._addNewLineChat(line[0], line[1].channelId, line[1].text);
          }
          return this.chatUI.drawNotify(0);
        }
      } catch (error) {
        e = error;
        return ANET.warning('error', e);
      }
    }

    // * Если пришли сообщения, когда была другая сцена
    _loadLines() {
      var e, i, j, line, ref;
      try {
        if ($gameTemp._chatLines.length > 0) {
          for (i = j = 0, ref = $gameTemp._chatLines.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            line = $gameTemp._chatLines[i];
            this.addLine(line[0], line[1]);
          }
          return $gameTemp._chatLines = [];
        }
      } catch (error) {
        e = error;
        return ANET.warning('error', e);
      }
    }

    setUI(chatUI) {
      this.chatUI = chatUI;
    }

    parseEmoji(actorId, chatMessage) {
      var char, emoji, text;
      text = chatMessage.text;
      emoji = GameChatController.GetEmojiCodeFromMessage(text);
      if (emoji > 0) {
        char = NetPartyManager.getCharByActorId(actorId);
        if (char == null) {
          return;
        }
        char.requestBalloon(emoji);
      }
    }

    addLine(actorId, chatMessage) {
      var e;
      if (this.chatUI == null) {
        return;
      }
      if (actorId == null) {
        return;
      }
      if (chatMessage == null) {
        return;
      }
      try {
        $gameTemp._chatLinesHistory.push([actorId, chatMessage]);
        this._addNewLineChat(actorId, chatMessage.channelId, chatMessage.text);
        return this._refreshNotify();
      } catch (error) {
        e = error;
        return AlphaNET.error(e, 'when parse chat message from server');
      }
    }

    _addNewLineChat(actorId, channelId, text) {
      var chatLine, first, up;
      chatLine = this._createSprite(actorId, channelId, text);
      this.chatUI.addChatLine(chatLine);
      up = this.settings.spaceBetweenLines;
      this.lines.forEach(function(item) {
        return item.moveUp(up);
      });
      this.lines.push(chatLine);
      if (this.lines.length & 1) {
        chatLine.changeBackOpacity();
      }
      if (this.lines.length >= this.maxLines) {
        first = this.lines.shift();
        this.chatUI.removeLine(first);
        return $gameTemp._chatLinesHistory.shift();
      }
    }

    _createSprite(actorId, channelId, text) {
      var channel, channelColor, chatLine, e, name, nameColor;
      name = "Unknown";
      channel = "ALL";
      try {
        this._myMessage = false;
        name = $gameActors.actor(actorId).name();
        nameColor = this.colors.NameColor;
        if (actorId === $gameParty.leader().actorId()) {
          nameColor = this.colors.UserNameColor;
          this._myMessage = true;
        }
        channel = this.chanels[channelId];
        channelColor = this.colors.ChannelColors[channelId];
      } catch (error) {
        e = error;
        AlphaNET.error(e, 'when parse chat message from server');
      }
      chatLine = new AlphaNET.LIBS.SpriteChatLine();
      chatLine.drawChannel(channel, channelColor);
      chatLine.drawName(name, nameColor);
      chatLine.drawText(text);
      chatLine.move(this.settings.lineStartPositionX, this.posY);
      chatLine.moveTo(this.posX);
      return chatLine;
    }

    _refreshNotify() {
      if (!this.chatUI.isOpen()) {
        if (this._myMessage === false) {
          this.hiddenMessages++;
        }
        return this.chatUI.drawNotify(this.hiddenMessages);
      } else {
        return this.hiddenMessages = 0;
      }
    }

    isUnderTouch() {
      return this.chatUI.isUnderTouch() && this.chatUI.visible === true;
    }

    hide() {
      return this.chatUI.visible = false;
    }

    show() {
      return this.chatUI.visible = true;
    }

    isActive() {
      return (this.chatUI != null) && this.chatUI.visible === true;
    }

    update() {
      this._loadLines();
      return this.updateButtonsInput();
    }

    updateButtonsInput() {
      if (this.isActive() === false) {
        return;
      }
      if (!ANET.P.isChatUsing()) {
        return;
      }
      if (Input.isTriggered(ANET.KEYS.CHAT())) {
        if (this.chatUI.isOpen()) {
          this.chatUI.close();
        } else {
          this.chatUI.open();
        }
      }
      if (Input.isTriggered(ANET.KEYS.SAY())) {
        return SceneManager.push(ANET.LIBS.Scene_ChatInput);
      }
    }

    static GetEmojiCodeFromMessage(text) {
      if (!text.contains(":")) {
        return 0;
      }
      if (text.contains(":!")) {
        return 1;
      }
      if (text.contains(":?")) {
        return 2;
      }
      if (text.contains(":song")) {
        return 3;
      }
      if (text.contains(":love")) {
        return 4;
      }
      if (text.contains(":angry")) {
        return 5;
      }
      if (text.contains(":drop")) {
        return 6;
      }
      if (text.contains(":conf")) {
        return 7;
      }
      if (text.contains(":...")) {
        return 8;
      }
      if (text.contains(":idea")) {
        return 9;
      }
      if (text.contains(":zzz")) {
        return 10;
      }
      return 0;
    }

  };
  AlphaNET.register(GameChatController);
})();

// ■ END GameChatController.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ HotSeatKeyMapper.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[CLASS IMPL ONLY]

    // * inputType: 1 - Mouse, 2 - Keyboard, null - All
    HotSeatKeyMapper.init = function (inputType, mirror) {
        if (!Utils.isNwjs())
            return;

        this._inputType = inputType;
        this._mirror = mirror; // * Другой маппер
        this._initMapper();
    };

    if (!Utils.isNwjs())
        return;

    Input._setupEventHandlers = function () {
        window.addEventListener('blur', this._onLostFocus.bind(this));
    };

    TouchInput._setupEventHandlers = function () {
        var isSupportPassive = Utils.isSupportPassiveEvent();
        document.addEventListener('mousemove', this._onMouseMove.bind(this));
        document.addEventListener('wheel', this._onWheel.bind(this));
        document.addEventListener('touchstart', this._onTouchStart.bind(this), isSupportPassive ? {
            passive: false
        } : false);
        document.addEventListener('touchmove', this._onTouchMove.bind(this), isSupportPassive ? {
            passive: false
        } : false);
        document.addEventListener('touchend', this._onTouchEnd.bind(this));
        document.addEventListener('touchcancel', this._onTouchCancel.bind(this));
        document.addEventListener('pointerdown', this._onPointerDown.bind(this));
    };

    HotSeatKeyMapper._initMapper = function () {
        document.addEventListener('mousedown', this._onMouseDown.bind(this));
        document.addEventListener('mouseup', this._onMouseUp.bind(this));
        document.addEventListener('keydown', this._onKeyDown.bind(this));
        document.addEventListener('keyup', this._onKeyUp.bind(this));
    };

    HotSeatKeyMapper._onMouseDown = function (eventX) {
        var data = {
            type: 1,
            name: '_onMouseDown',
            event: eventX
        };
        this.map(data);
    };

    HotSeatKeyMapper.map = function (data) {
        if (data.type == 1) {
            this.touchMap(data);
        } else {
            this.keyMap(data);
        }
    };

    HotSeatKeyMapper.touchMap = function (data) {
        if (this.isMouse()) {
            executeFunctionByName(data.name, TouchInput, data.event);
        } else {
            this.sendToMirror(data);
        }
    };

    HotSeatKeyMapper.sendToMirror = function (data) {
        if (this._mirror) {
            this._mirror.map(data);
        }
    };

    HotSeatKeyMapper.keyMap = function (data) {
        if (this.isKeyboard()) {
            executeFunctionByName(data.name, Input, data.event);
        } else {
            this.sendToMirror(data);
        }
    };

    HotSeatKeyMapper._onMouseMove = function (eventX) {
        var data = {
            type: 1,
            name: '_onMouseMove',
            event: eventX
        }
        this.map(data);
    };

    HotSeatKeyMapper._onMouseUp = function (eventX) {
        var data = {
            type: 1,
            name: '_onMouseUp',
            event: eventX
        };
        this.map(data);
    };

    //В event.type записано название типа события
    HotSeatKeyMapper._onKeyDown = function (eventX) {
        var data = {
            type: 2,
            name: '_onKeyDown',
            event: eventX
        };
        this.map(data);
    };

    HotSeatKeyMapper._onKeyUp = function (eventX) {
        var data = {
            type: 2,
            name: '_onKeyUp',
            event: eventX
        };
        this.map(data);
    };

    HotSeatKeyMapper.isKeyboard = function () {
        if (this._inputType == null)
            return true;
        return this._inputType == 2;
    };

    HotSeatKeyMapper.isMouse = function () {
        if (this._inputType == null)
            return true;
        return this._inputType == 1;
    };

    HotSeatKeyMapper.myType = function () {
        return this._inputType;
    };

    HotSeatKeyMapper.isMyType = function (data) {
        if (this.myType() == null)
            return true;
        return this.myType() == data.type;
    };
})();
// ■ END HotSeatKeyMapper.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Image_Manager_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){

    //?[NEW]
    ImageManager.loadNetwork = function (filename, hue) {
        return this.loadBitmap('img/network/', filename, hue, false);
    };

    //?[NEW] * FOR COMPABILITY
    ImageManager.loadAA = function (filename, hue) {
        return this.loadBitmap('img/AABS/', filename, hue, false);
    };
    
})();
// ■ END Image_Manager_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
//Compressed by MV Plugin Builder
(function(){var _0x40e9 = [
    'textAlign',
    'textShadow',
    'fontSize',
    '20px',
    'zIndex',
    '400px',
    'absolute',
    'OKkEp',
    'yUSpi',
    '<font\x20color=\x22white\x22>',
    '</font><br>',
    'innerHTML',
    'clear',
    'loXJv',
    'xQarH',
    'kHGRy',
    'width',
    '1px\x201px\x203px\x20#000',
    'position',
    '_createErrorPrinter',
    'call',
    'create',
    '_infoPrinter',
    'createElement',
    'InfoPrinter',
    'setup',
    'body',
    'appendChild',
    '_width',
    'height',
    'style'
];
(function (_0x32c6fa, _0x552733) {
    var _0x18e137 = function (_0x168352) {
        while (--_0x168352) {
            _0x32c6fa['push'](_0x32c6fa['shift']());
        }
    };
    _0x18e137(++_0x552733);
}(_0x40e9, 0xec));
var _0x4a1c = function (_0x3f0109, _0x548465) {
    _0x3f0109 = _0x3f0109 - 0x0;
    var _0x3838e3 = _0x40e9[_0x3f0109];
    return _0x3838e3;
};
(function () {
    var _0x85f6fd;
    _0x85f6fd = Graphics['_createErrorPrinter'];
    Graphics[_0x4a1c('0x0')] = function () {
        _0x85f6fd[_0x4a1c('0x1')](this);
        return InfoPrinter[_0x4a1c('0x2')]();
    };
    InfoPrinter['create'] = function () {
        InfoPrinter[_0x4a1c('0x3')] = document[_0x4a1c('0x4')]('p');
        InfoPrinter[_0x4a1c('0x3')]['id'] = _0x4a1c('0x5');
        InfoPrinter[_0x4a1c('0x6')]();
        return document[_0x4a1c('0x7')][_0x4a1c('0x8')](InfoPrinter['_infoPrinter']);
    };
    InfoPrinter['setup'] = function () {
        var _0x2aad0e;
        _0x2aad0e = InfoPrinter[_0x4a1c('0x3')];
        _0x2aad0e['width'] = Graphics[_0x4a1c('0x9')] * 0.8;
        _0x2aad0e[_0x4a1c('0xa')] = 0x64;
        _0x2aad0e[_0x4a1c('0xb')][_0x4a1c('0xc')] = 'left';
        _0x2aad0e['style'][_0x4a1c('0xd')] = '1px\x201px\x203px\x20#000';
        _0x2aad0e[_0x4a1c('0xb')][_0x4a1c('0xe')] = _0x4a1c('0xf');
        _0x2aad0e[_0x4a1c('0xb')][_0x4a1c('0x10')] = 0x46;
        _0x2aad0e['style']['width'] = _0x4a1c('0x11');
        _0x2aad0e[_0x4a1c('0xb')]['height'] = _0x4a1c('0x11');
        return _0x2aad0e[_0x4a1c('0xb')]['position'] = _0x4a1c('0x12');
    };
    InfoPrinter['p'] = function (_0x3d17dc) {
        if (_0x4a1c('0x13') !== _0x4a1c('0x14')) {
            var _0x3f10a0;
            if (InfoPrinter[_0x4a1c('0x3')] == null) {
                return;
            }
            _0x3f10a0 = _0x4a1c('0x15') + _0x3d17dc + _0x4a1c('0x16');
            InfoPrinter[_0x4a1c('0x3')][_0x4a1c('0x17')] = _0x3f10a0;
        } else {
            return;
        }
    };
    InfoPrinter[_0x4a1c('0x18')] = function () {
        if ('loXJv' !== _0x4a1c('0x19')) {
            _0x85f6fd['call'](this);
            return InfoPrinter['create']();
        } else {
            if (InfoPrinter[_0x4a1c('0x3')] == null) {
                if (_0x4a1c('0x1a') !== _0x4a1c('0x1b')) {
                    return;
                } else {
                    var _0xe15302;
                    _0xe15302 = InfoPrinter[_0x4a1c('0x3')];
                    _0xe15302[_0x4a1c('0x1c')] = Graphics[_0x4a1c('0x9')] * 0.8;
                    _0xe15302[_0x4a1c('0xa')] = 0x64;
                    _0xe15302['style'][_0x4a1c('0xc')] = 'left';
                    _0xe15302[_0x4a1c('0xb')][_0x4a1c('0xd')] = _0x4a1c('0x1d');
                    _0xe15302[_0x4a1c('0xb')][_0x4a1c('0xe')] = '20px';
                    _0xe15302[_0x4a1c('0xb')][_0x4a1c('0x10')] = 0x46;
                    _0xe15302[_0x4a1c('0xb')][_0x4a1c('0x1c')] = _0x4a1c('0x11');
                    _0xe15302[_0x4a1c('0xb')]['height'] = _0x4a1c('0x11');
                    return _0xe15302[_0x4a1c('0xb')][_0x4a1c('0x1e')] = _0x4a1c('0x12');
                }
            }
            InfoPrinter[_0x4a1c('0x3')][_0x4a1c('0x17')] = '';
        }
    };
}());
})();

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Input.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    ///INPUT
    var i, j;
    Input.KeyMapperNET = {};
    //Numbers
    for (i = j = 48; j <= 57; i = ++j) {
        Input.KeyMapperNET[i] = String.fromCharCode(i);
    }
    //Numbers NUM LOCK
    for (i = j = 96; j <= 105; i = ++j) {
        Input.KeyMapperNET[i] = 'Numpad' + String(i - 96);
    }

    Input.KeyMapperNET[8] = 'Backspace';
    Input.KeyMapperNET[190] = '.';
    Input.KeyMapperNET[110] =  'NumpadDecimal';

    var alias_atbs_input_onKeyDown = Input._onKeyDown;
    Input._onKeyDown = function (event) {
        alias_atbs_input_onKeyDown.call(this, event);
        if (event.code && event.code.contains('Numpad')) {
            Input._setStateWithMapperMYP(event.keyCode);
            return;
        }
        if (Input.keyMapper[event.keyCode]) {
            return;
        }
        Input._setStateWithMapperMYP(event.keyCode);
    };

    Input._setStateWithMapperMYP = function (keyCode, state = true) {
        var symbol;
        symbol = Input.KeyMapperNET[keyCode];
        if (symbol != null) {
            this._currentState[symbol] = state;
        }
    };

    var alias_atbs_input_onKeyUp = Input._onKeyUp;
    Input._onKeyUp = function (event) {
        alias_atbs_input_onKeyUp.call(this, event);
        if (event.code && event.code.contains('Numpad')) {
            Input._setStateWithMapperMYP(event.keyCode, false);
            return;
        }
        Input._setStateWithMapperMYP(event.keyCode, false);
    };
})();
// ■ END Input.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
//Compressed by MV Plugin Builder
(function(){var _0x5e9b = [
    'isShared',
    'isNeedLineSync',
    '_lineSyncIndex',
    'resetWait',
    'setup',
    '_event',
    'event',
    'isNetworkSharedMode',
    'vAFrc',
    'cAmcR',
    'code',
    'indent',
    '_list',
    '_prepareSharedEvent',
    '_prepareEventListForNet',
    '_insertNetShareCommand',
    'CMD_SHARE',
    '_insertNetCommand',
    'index',
    'replace',
    '_isNetCommandExists',
    'dpoOj',
    'HRGCv',
    'qKRTF',
    '_prepareList_replaceSyncCommand',
    'push',
    'TfimD',
    'splice',
    'NET\x20sync',
    '_insertNetSyncCommand',
    'CMD_SYNC',
    'startNetwork',
    'isStartedFromNetwork',
    'updateWaitMode',
    'eventId',
    'getLastResponseData',
    '_checkWaitCount',
    'SHBZt',
    'OxsUd',
    'error',
    'Server\x20wait\x20error,\x20code\x20-\x20100',
    '_interpreter',
    '_index',
    'parameters',
    'contains',
    'command901',
    'command900',
    'CMD\x20900\x20run',
    '_collectEventBasicDataForNetwork',
    'WAIT_PLAYER',
    'Lqwij',
    'StartSharedEvent',
    'setData',
    'sendMessage',
    'RegisterOnSharedEvent',
    'setRepeat',
    'CMD\x20901\x20run',
    'line',
    'RegisterOnSharedEventSync',
    'register',
    '_shared',
    '_waitNetCount',
    'isStartedOutside',
    '_startedOutside'
];
(function (_0x458d88, _0x5798e7) {
    var _0x482657 = function (_0xa5709a) {
        while (--_0xa5709a) {
            _0x458d88['push'](_0x458d88['shift']());
        }
    };
    _0x482657(++_0x5798e7);
}(_0x5e9b, 0x17c));
var _0x41ec = function (_0xa2225c, _0x5cfd7a) {
    _0xa2225c = _0xa2225c - 0x0;
    var _0x4347e3 = _0x5e9b[_0xa2225c];
    return _0x4347e3;
};
var InterpreterNET;
InterpreterNET = class InterpreterNET {
    constructor() {
        this['_startedOutside'] = ![];
        this[_0x41ec('0x0')] = ![];
        this['_lineSyncIndex'] = -0x1;
        this[_0x41ec('0x1')] = 0x0;
    }
    [_0x41ec('0x2')]() {
        return this[_0x41ec('0x3')] === !![];
    }
    [_0x41ec('0x4')]() {
        return this[_0x41ec('0x0')] === !![];
    }
    [_0x41ec('0x5')]() {
        return this[_0x41ec('0x6')] >= 0x0;
    }
    [_0x41ec('0x7')]() {
        return this[_0x41ec('0x1')] = 0x0;
    }
    [_0x41ec('0x8')](_0x560508, _0x50e7fb) {
        this[_0x41ec('0x9')] = $gameMap[_0x41ec('0xa')](_0x560508);
        if (this[_0x41ec('0x9')] == null) {
            return;
        }
        this[_0x41ec('0x0')] = this[_0x41ec('0x9')][_0x41ec('0xb')]();
        if (this['isShared']()) {
            if (_0x41ec('0xc') === _0x41ec('0xd')) {
                var _0x21ae77;
                if (indent != null) {
                    _0x21ae77 = this['_list'][index];
                    return _0x21ae77[_0x41ec('0xe')] === code && _0x21ae77[_0x41ec('0xf')] === indent;
                } else {
                    return this[_0x41ec('0x10')][index][_0x41ec('0xe')] === code;
                }
            } else {
                return this['_prepareSharedEvent'](_0x50e7fb);
            }
        }
    }
    [_0x41ec('0x11')](_0x4d662f) {
        this[_0x41ec('0x10')] = _0x4d662f;
        this['_insertNetShareCommand']();
        return this[_0x41ec('0x12')]();
    }
    [_0x41ec('0x13')]() {
        return this['_insertNetCommand']({
            'index': 0x0,
            'replace': ![],
            'code': InterpreterNET[_0x41ec('0x14')],
            'indent': 0x0
        });
    }
    [_0x41ec('0x15')](_0x47882a) {
        var _0xa92ecc, _0x366bb8;
        _0xa92ecc = _0x47882a[_0x41ec('0x16')] || 0x0;
        _0x366bb8 = _0x47882a[_0x41ec('0x17')];
        if (this[_0x41ec('0x18')](_0xa92ecc, _0x47882a['code'], _0x47882a[_0x41ec('0xf')])) {
            if (_0x41ec('0x19') === _0x41ec('0x19')) {
                return;
            } else {
                this['_list'] = list;
                this['_insertNetShareCommand']();
                return this[_0x41ec('0x12')]();
            }
        }
        return this[_0x41ec('0x10')]['splice'](_0xa92ecc, _0x366bb8, {
            'code': _0x47882a[_0x41ec('0xe')],
            'indent': _0x47882a[_0x41ec('0xf')],
            'parameters': []
        });
    }
    ['_isNetCommandExists'](_0x1f8bef, _0x4b95c0, _0x530383) {
        var _0x3b1a38;
        if (_0x530383 != null) {
            _0x3b1a38 = this[_0x41ec('0x10')][_0x1f8bef];
            return _0x3b1a38['code'] === _0x4b95c0 && _0x3b1a38['indent'] === _0x530383;
        } else {
            if (_0x41ec('0x1a') === _0x41ec('0x1b')) {
                return this[_0x41ec('0x6')] >= 0x0;
            } else {
                return this['_list'][_0x1f8bef][_0x41ec('0xe')] === _0x4b95c0;
            }
        }
    }
    [_0x41ec('0x12')]() {
        var _0x1a304b, _0x310251;
        _0x1a304b = this[_0x41ec('0x10')]['length'] - 0x1;
        _0x310251 = [];
        while (_0x1a304b >= 0x0) {
            this[_0x41ec('0x1c')](_0x1a304b);
            _0x310251[_0x41ec('0x1d')](_0x1a304b--);
        }
        return _0x310251;
    }
    [_0x41ec('0x1c')](_0x228d4f) {
        var _0x4fbb23;
        _0x4fbb23 = this['_list'][_0x228d4f];
        if (_0x4fbb23[_0x41ec('0xe')] !== 0x164) {
            if (_0x41ec('0x1e') !== 'EHVMC') {
                return;
            } else {
                var _0x4bfb06, _0x28bb71;
                _0x4bfb06 = command[_0x41ec('0x16')] || 0x0;
                _0x28bb71 = command[_0x41ec('0x17')];
                if (this[_0x41ec('0x18')](_0x4bfb06, command[_0x41ec('0xe')], command[_0x41ec('0xf')])) {
                    return;
                }
                return this[_0x41ec('0x10')][_0x41ec('0x1f')](_0x4bfb06, _0x28bb71, {
                    'code': command['code'],
                    'indent': command['indent'],
                    'parameters': []
                });
            }
        }
        if (!_0x4fbb23['parameters'][0x0]['contains'](_0x41ec('0x20'))) {
            return;
        }
        this[_0x41ec('0x21')](_0x228d4f, _0x4fbb23['indent']);
    }
    [_0x41ec('0x21')](_0x57fbd8, _0x2597bc) {
        return this['_insertNetCommand']({
            'index': _0x57fbd8,
            'replace': !![],
            'code': InterpreterNET[_0x41ec('0x22')],
            'indent': _0x2597bc
        });
    }
    [_0x41ec('0x23')]() {
        if (!this[_0x41ec('0x4')]()) {
            return;
        }
        this['_startedOutside'] = this[_0x41ec('0x9')][_0x41ec('0x24')]();
        return this['_event']['clearStartFromNetwork']();
    }
    [_0x41ec('0x25')]() {
        var _0x207c0e, _0x3718fd;
        _0x3718fd = this[_0x41ec('0x9')][_0x41ec('0x26')]();
        _0x207c0e = Network[_0x41ec('0x27')]();
        if (this[_0x41ec('0x4')]()) {
            this[_0x41ec('0x28')](_0x207c0e);
        }
        if (_0x207c0e === -0x64) {
            if (_0x41ec('0x29') !== _0x41ec('0x2a')) {
                Network[_0x41ec('0x2b')]('', _0x41ec('0x2c'));
                $gameMap[_0x41ec('0x2d')][_0x41ec('0x2e')] = 0x64;
                return ![];
            } else {
                var _0x42bfcd;
                _0x42bfcd = this[_0x41ec('0x10')][index];
                if (_0x42bfcd['code'] !== 0x164) {
                    return;
                }
                if (!_0x42bfcd[_0x41ec('0x2f')][0x0][_0x41ec('0x30')]('NET\x20sync')) {
                    return;
                }
                this[_0x41ec('0x21')](index, _0x42bfcd[_0x41ec('0xf')]);
            }
        }
        return !(Network[_0x41ec('0x27')]() === _0x3718fd);
    }
    [_0x41ec('0x28')](_0x434995) {
        if (_0x434995 == null) {
            this['_waitNetCount'] += 0x1;
        }
        if (this[_0x41ec('0x1')] >= 0x3c) {
            this['resetWait']();
            return this[_0x41ec('0x31')]();
        }
    }
    [_0x41ec('0x32')]() {
        var _0x426053, _0xa81815;
        _0x41ec('0x33')['p']();
        _0x426053 = this[_0x41ec('0x9')][_0x41ec('0x34')]();
        _0xa81815 = Network[_0x41ec('0x35')];
        if (!this[_0x41ec('0x2')]()) {
            if (_0x41ec('0x36') === _0x41ec('0x36')) {
                _0x426053['pageIndex'] = this[_0x41ec('0x9')]['findProperPageIndex']();
                Network['sendMessage'](NetMessage[_0x41ec('0x37')]()['setRepeat'](_0xa81815)[_0x41ec('0x38')](_0x426053));
            } else {
                this[_0x41ec('0x28')](responseId);
            }
        } else {
            Network[_0x41ec('0x39')](NetMessage[_0x41ec('0x3a')]()[_0x41ec('0x3b')](_0xa81815)[_0x41ec('0x38')](_0x426053));
        }
        return !![];
    }
    [_0x41ec('0x31')](_0x498edc, _0x42eb9e) {
        var _0x2a8a19, _0x3a3909;
        _0x41ec('0x3c')['p']();
        if (this[_0x41ec('0x10')][_0x498edc] != null) {
            if (_0x42eb9e !== this[_0x41ec('0x10')][_0x498edc][_0x41ec('0xf')]) {
                return;
            }
        }
        _0x2a8a19 = this[_0x41ec('0x9')][_0x41ec('0x34')]();
        _0x2a8a19[_0x41ec('0x3d')] = _0x498edc;
        _0x3a3909 = Network['WAIT_PLAYER'];
        Network[_0x41ec('0x39')](NetMessage[_0x41ec('0x3e')]()[_0x41ec('0x3b')](_0x3a3909)[_0x41ec('0x38')](_0x2a8a19));
        return !![];
    }
};
InterpreterNET[_0x41ec('0x14')] = 0x384;
InterpreterNET[_0x41ec('0x22')] = 0x385;
AlphaNET[_0x41ec('0x3f')](InterpreterNET);
})();

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ MakerManager.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[CLASS IMPL ONLY]

    Object.defineProperty(MakerManager, 'childWindow', {
        get: function () {
            return this._childWindow;
        },
        configurable: true
    });

    MakerManager.initManager = function () {
        this._childWindow = null;
        HotSeatKeyMapper.init(null, null);
    };

    MakerManager.setupGameWindow = function () {
        var win = nw.Window.get();
        win.removeAllListeners('close');
        win.on('close', this.onWindowClose.bind(win));

        win.removeAllListeners('restore');
        win.removeAllListeners('focus');
        win.removeAllListeners('minimize');

        win.on('focus', function () {
            if (MakerManager.childWindow) {
                MakerManager.childWindow.restore();
            }
        });
        win.on('restore', function () {
            if (MakerManager.childWindow) {
                MakerManager.childWindow.restore();
            }
        });
        win.on('minimize', function () {
            if (MakerManager.childWindow) {
                MakerManager.childWindow.minimize();
            }
        });

        win.removeAllListeners('move');
        win.on('move', function (x, y) {
            if (MakerManager.childWindow) {
                MakerManager.childWindow.x = x + Graphics.width + 8;
                MakerManager.childWindow.y = y;
            }
        });

    };

    MakerManager.openMaker = function () {
        if (!Utils.isNwjs())
            return;
        if (MakerManager._childWindow == null) {
            HotSeatKeyMapper.init(1, null);
            this.setupGameWindow();
            this.createWindow();
            Network.setHotGame(true);
        }
        else {
            MakerManager.closeMaker();
            MakerManager.deleteMaker();
            MakerManager.openMaker();
        }
    };

    MakerManager.createWindow = function () {
        var win = nw.Window.get();
        var filename = 'www/index.html';
        if (Utils.isOptionValid('test')) {
            filename = 'index.html';
        }
        nw.Window.open(filename, {
            width: win.width - 2,
            height: win.height,
            resizable: false,
            show_in_taskbar: false,
            new_instance: false
        }, function (new_win) {
            MakerManager._childWindow = new_win;
            new_win.on('loaded', this._onWindowCreated.bind(this));
        }.bind(this));
    };

    MakerManager._onWindowCreated = function () {
        this._moveWindow();
        this._setupWindow();
    };

    MakerManager._moveWindow = function () {
        window.moveBy(-400, 0);
        this._childWindow.moveTo(window.screenX + Graphics.boxWidth + 8, window.screenY);
    };

    MakerManager._setupWindow = function () {
        this._childWindow.on('closed', this.deleteMaker.bind(this));
        this._childWindow.on('close', this.closeMaker.bind(this));

        var mapper = this._childWindow.window.HotSeatKeyMapper;
        this._childWindow.window.Network.setHotGame(true);
        // * Пока что чат не будет работать в режиме SplitScreen
        NetUIManager.hideChat();
        HotSeatKeyMapper._mirror = mapper;
        mapper.init(2, HotSeatKeyMapper);
    };

    MakerManager.onWindowClose = function () {
        MakerManager.closeTheWindows.call(this);
    };

    MakerManager.closeMaker = function () {
        HotSeatKeyMapper.init(null, null);
        Network.setHotGame(false);
        this._childWindow.close(true);
    };

    MakerManager.deleteMaker = function () {
        this._childWindow = null;
    };

    MakerManager.closeTheWindows = function () {
        if (MakerManager.childWindow)
            MakerManager.childWindow.close(true);
        this.close(true);
    };

})();
// ■ END MakerManager.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetMessage.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//@[GLOBAL]
var NetMessage;

NetMessage = (function() {
  class NetMessage {
    constructor(socket1) {
      this.socket = socket1;
      this.name = "trace";
      this.from = "";
      this.to = "";
      this.data = "";
      this.waited = false;
    }

    setName(name) {
      this.name = name;
      return this;
    }

    setTo(socketId) {
      this.to = socketId;
      return this;
    }

    setFrom(socketId) {
      this.from = socketId;
      return this;
    }

    setData(data) {
      this.data = data;
      return this;
    }

    setWait(symbol) {
      this.waited = true;
      Network.waitServerResponse(this, symbol);
      return this;
    }

    setRepeat(symbol) {
      this.waited = true;
      Network.waitServerResponseRepeated(this, symbol);
      return this;
    }

    send(data) {
      this.socket.emit(this.name, this._makeData(data));
      return this;
    }

    broadcast(data) {
      return this.socket.broadcast.emit(this.name, this._makeData(data));
    }

    _makeData(data = null) {
      var netData;
      netData = {};
      if (data == null) {
        data = this.data;
      } else {
        this.data = data;
      }
      netData.data = data;
      netData.from = this.from;
      netData.to = this.to;
      netData.waited = this.waited;
      return netData;
    }

    static Setup(socket) {
      return NetMessage.Socket = socket;
    }

    static PlayerDisconnect(socket) {
      return this.EmptyMessage(socket).setName('playerDisconnect');
    }

    static PlayerConnect(socket) {
      return this.EmptyMessage(socket).setName('playerConnect');
    }

    static HostResponse(socket) {
      return this.EmptyMessage(socket).setName('host').setFrom('server');
    }

    static AlertMessage(socket) {
      return this.EmptyMessage(socket).setFrom('server').setName('alertMessage');
    }

    static EmptyMessage(socket = null) {
      var msg, targetSocket;
      targetSocket = socket;
      if (socket == null) {
        targetSocket = this.Socket;
      }
      msg = new NetMessage(targetSocket);
      if (targetSocket != null) {
        msg.setFrom(targetSocket.id);
      }
      return msg;
    }

    static CreateSubMessageData(id) {
      var data;
      return data = {
        id: id
      };
    }

  };

  NetMessage.Socket = null;

  return NetMessage;

}).call(this);

AlphaNET.register(NetMessage);

// ■ END NetMessage.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetMessages.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _CM, _M;
  //@[DEFINES]
  _M = NetMessage;
  _CM = function(socket, name) {
    return _M.EmptyMessage(socket).setName(name);
  };
  //?INITIAL
  _M.RequestPlayerData = function(_) {
    return _CM(_, 'requestInitialPlayerData');
  };
  _M.PlayerDataResponse = function(_) {
    return _CM(_, 'responsePlayerData');
  };
  _M.PlayersTableResponse = function(_) {
    return _CM(_, 'playersTableResponse');
  };
  _M.HostGameMapId = function(_) {
    return _CM(_, 'hostGameMapId');
  };
  _M.GameMapEventsDataResponse = function(_) {
    return _CM(_, 'gameMapEventsDataResponse');
  };
  _M.RequestGameMapEventsData = function(_) {
    return _CM(_, 'requestGameMapEventsData');
  };
  //?PLAYERS
  _M.PlayerMoveData = function(_) {
    return _CM(_, 'playerMove');
  };
  _M.PlayerNetIcon = function(_) {
    return _CM(_, 'playerIcon');
  };
  _M.PlayerNetActorData = function(_) {
    return _CM(_, 'playerNetActorData');
  };
  _M.PlayerNetItemsData = function(_) {
    return _CM(_, 'playerNetItemsData');
  };
  _M.PlayerWorldData = function(_) {
    return _CM(_, 'playerWorldData');
  };
  _M.GlobalWorldData = function(_) {
    return _CM(_, 'globalWorldData');
  };
  _M.PlayerNetMapData = function(_) {
    return _CM(_, 'playerNetCurrentMapData');
  };
  _M.PlayerChangeMap = function(_) {
    return _CM(_, 'playerChangeMap');
  };
  _M.SetOwner = function(_) {
    return _CM(_, 'setMapOwner');
  };
  _M.StartActorSelect = function(_) {
    return _CM(_, 'startActorSelect');
  };
  _M.OnPlayerSelectActor = function(_) {
    return _CM(_, 'onPlayerSelectActor');
  };
  //?PVP
  _M.RequestPvP = function(_) {
    return _CM(_, 'requestPvPWithAnotherPlayer');
  };
  _M.StartPvPBattle = function(_) {
    return _CM(_, 'startPvPWithAnotherPlayer');
  };
  
  //?TRADE
  _M.RequestTrade = function(_) {
    return _CM(_, 'requestTradeWithAnotherPlayer');
  };
  _M.TradeReady = function(_) {
    return _CM(_, 'tradeReady');
  };
  _M.TradeItems = function(_) {
    return _CM(_, 'tradeItems');
  };
  _M.StartTrade = function(_) {
    return _CM(_, 'startTradeWithAnotherPlayer');
  };
  _M.AbortTrade = function(_) {
    return _CM(_, 'abortTradeWithAnotherPlayer');
  };
  //?EVENTS
  _M.MapEventMoveData = function(_) {
    return _CM(_, 'mapEventMove');
  };
  _M.SyncEvent = function(_) {
    return _CM(_, 'mapEventSync');
  };
  _M.LockEvent = function(_) {
    return _CM(_, 'mapEventLock');
  };
  _M.OwnEvent = function(_) {
    return _CM(_, 'mapEventOwn');
  };
  _M.StartSharedEvent = function(_) {
    return _CM(_, 'startSharedEvent');
  };
  _M.RegisterOnSharedEvent = function(_) {
    return _CM(_, 'registerOnSharedEvent');
  };
  _M.RegisterOnSharedEventSync = function(_) {
    return _CM(_, 'registerOnSharedEventSync');
  };
  _M.VirtualInterpreter = function(_) {
    return _CM(_, 'virtualInterpreter');
  };
  _M.RegisterSyncVar = function(_) {
    return _CM(_, 'registerSyncVar');
  };
  _M.OnSyncVarValue = function(_) {
    return _CM(_, 'onSyncVarValue');
  };
  _M.VirtualScriptCall = function(_) {
    return _CM(_, 'onVirtualScriptCallCommand');
  };
  //?COMMUNICATION
  _M.SendChatMessage = function(_) {
    return _CM(_, 'chatMessage');
  };
  //?WINDOWS
  _M.WindowSelect = function(_) {
    return _CM(_, 'window_select_data');
  };
  //?BATTLE
  _M.BattleInputCommand = function(_) {
    return _CM(_, 'battle_inputCommand');
  };
  _M.BattleBattlerRefreshData = function(_) {
    return _CM(_, 'battle_refreshData');
  };
  _M.BattleAction = function(_) {
    return _CM(_, 'battle_action');
  };
  _M.BattleManager = function(_) {
    return _CM(_, 'battle_manager');
  };
  _M.BattleManagerPvP = function(_) {
    return _CM(_, 'battle_manager_pvp');
  };
  _M.EncounterTroopId = function(_) {
    return _CM(_, 'encounter_troop');
  };
  _M.EncounterSync = function(_) {
    return _CM(_, 'encounter_troop_sync');
  };
  //?GLOBAL
  _M.OnWaitResponse = function(_) {
    return _CM(_, 'onWaitResponse');
  };
  _M.RequestSync = function(_) {
    return _CM(_, 'requestSync');
  };
  //?API
  _M.CallUApi = function(_) {
    return _CM(_, 'callUApi');
  };
  //?{TEST}
  _M.TempMessage = function(_) {
    return _CM(_, 'tempMessage');
  };
  //?ABS
  _M.AA_ActorState = function(_) {
    return _CM(_, 'aa_actorState');
  };
  _M.AA_Animation = function(_) {
    return _CM(_, 'aa_animation');
  };
  _M.AA_BattleProcess = function(_) {
    return _CM(_, 'aa_battleProcess');
  };
  _M.AA_Info = function(_) {
    return _CM(_, 'aa_info'); // * Для разных мелких сообщений
  };
  _M.AA_CastState = function(_) {
    return _CM(_, 'aa_castState');
  };
  _M.AA_AIEventData = function(_) {
    return _CM(_, 'aa_aiEventData');
  };
  _M.AA_AIEntityState = function(_) {
    return _CM(_, 'aa_aiEntityState');
  };
})();

// ■ END NetMessages.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetParameters.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var NetParameters;
  // * Если параметры не были загружены, будет возвращять стандартные значения автоматически
  NetParameters = class NetParameters extends KDCore.ParametersManager {
    constructor() {
      super('Alpha NET');
    }

    get_actorsForPlayers() {
      var name;
      if (this.isLoaded()) {
        name = 'ActorsForPlayers';
        return this.getFromCacheOrInit(name, function() {
          var obj;
          try {
            obj = this.getString(name);
            return obj.split(',').map(function(i) {
              return Number(i);
            });
          } catch (error) {
            AlphaNET.warning('wrong plugin parameter Actors for players');
            return [1, 2];
          }
        });
      } else {
        return [1, 2, 3, 4];
      }
    }

    get_DefaultIP() {
      var name;
      if (this.isLoaded()) {
        name = 'IPConfig';
        return this.getFromCacheOrInit(name, function() {
          try {
            return this.getString(name);
          } catch (error) {
            AlphaNET.warning('wrong plugin parameter IPConfig');
            return "127.0.0.1:3032";
          }
        });
      } else {
        return "127.0.0.1:3032";
      }
    }

    isAllowCharacterSelect() {
      return this.getBooleanFromCacheWithDefault('UseActorSelectWindow', true);
    }

    isMultiGameMode() {
      var name;
      if (!this.isLoaded()) {
        return false;
      }
      name = 'GameMode';
      return this.getFromCacheOrInit(name, function() {
        var obj;
        try {
          obj = this.getString(name);
          if (obj === 'Multiplayer') {
            return true;
          }
          return false;
        } catch (error) {
          AlphaNET.warning('wrong plugin parameter: Game Mode');
          return false;
        }
      });
    }

    load_CommonEventsForNetwork() {
      if (!this.isLoaded()) {
        return;
      }
      try {
        Network.commonEventOnServerStarted = this.getNumber("ServerStarted");
        Network.commonEventOnConnectToServer = this.getNumber("OnConnect");
        Network.commonEventOnDisconectFromServer = this.getNumber("OnDisconect");
        Network.commonEventOnOtherClientConnected = this.getNumber("OnOtherCon");
        Network.commonEventOnOtherClientDisconected = this.getNumber("OnOtherDisc");
        Network.commonEventOnPvPBattleEnd = this.getNumber("OnPvPEnd");
      } catch (error) {
        return AlphaNET.warning('wrong plugin parameters for network common events');
      }
    }

    get_ShowNameplatesMode() {
      var name;
      if (!this.isLoaded()) {
        return 1;
      }
      name = 'NameplatesMode';
      return this.getFromCacheOrInit(name, function() {
        var obj;
        try {
          obj = this.getString(name);
          if (obj === 'Others') {
            return 1;
          }
          if (obj === 'All') {
            return 2;
          }
          return 0; // * Never
        } catch (error) {
          AlphaNET.warning('wrong plugin parameter: Nameplate display mode');
          return 0;
        }
      });
    }

    isChatUsing() {
      var name;
      if (!this.isLoaded()) {
        return true;
      }
      name = 'UseInGameChat';
      return this.getFromCacheOrInit(name, function() {
        try {
          return this.getBoolean(name);
        } catch (error) {
          AlphaNET.warning('wrong plugin parameter: Use in-game chat');
          return true;
        }
      });
    }

    getPvPRestrictedMaps() {
      var name;
      if (!this.isLoaded()) {
        return [];
      }
      name = 'PvPDisabledMaps';
      return this.getFromCacheOrInit(name, function() {
        var maps, obj;
        try {
          obj = this.getString(name);
          maps = obj.split(',').map(function(i) {
            return Number(i.trim());
          });
          return maps;
        } catch (error) {
          AlphaNET.warning('wrong plugin parameter: Maps with PvP restriction');
          return [];
        }
      });
    }

    isHotKeysUsing() {
      return this.getBooleanFromCacheWithDefault('UseHotKeys', false);
    }

    isTradeAllowed() {
      return this.getBooleanFromCacheWithDefault('UseTrade', true);
    }

    isPvPAllowed() {
      return this.getBooleanFromCacheWithDefault('UsePvP', true);
    }

    isShowPlayersInParty() {
      return this.getBooleanFromCacheWithDefault('ShowPlayerInParty', true);
    }

    isActionMenuAllowed() {
      return this.isTradeAllowed() || this.isPvPAllowed();
    }

  };
  AlphaNET.register(NetParameters);
  AlphaNET.Parameters = new NetParameters();
  ANET.P = AlphaNET.Parameters;
})();

// ■ END NetParameters.coffee
//---------------------------------------------------------------------------

//Compressed by MV Plugin Builder
(function(){var _0xcdf8 = [
    'getPlayerByIndex',
    'wZKGl',
    'JgGRi',
    'findElementByField',
    'getMe',
    'WdcCj',
    'getActorIdBySocketId',
    'refresh',
    'iSsKG',
    'lkbXF',
    'getCharByActorId',
    'OUSeL',
    'getNetworkCharByActorId',
    'indexOf',
    'getMyPlayerSprite',
    'bgrsz',
    'HiISL',
    'getPlayerSpriteById',
    'jYADX',
    'xqRkw',
    'XpuXa',
    '_scene',
    'clhSi',
    '_characterSprites',
    'eocxI',
    'forEach',
    'WlnNW',
    'HvvvC',
    '_character',
    'myId',
    'IJOPl',
    'bSMjv',
    'PlayerNetActorData',
    'setData',
    'NetworkCharacter',
    'OIcDV',
    'JgcCf',
    'netId',
    'icZpI',
    'SgdlS',
    'networkActorsId_Base',
    'error',
    'while\x20get\x20character\x20sprite\x20on\x20map',
    'ndeys',
    'getPlayer',
    'FFlEl',
    'REGISTER\x20PLAYER',
    'LIBS',
    'bjeti',
    'xsNli',
    'first',
    'kRSTb',
    'removePlayer',
    'ujUZq',
    'FprBg',
    'lBuga',
    'HwPFX',
    'REMOVE\x20PLAYER',
    'unshift',
    'refreshCharacters',
    'memberByActorId',
    'stringify',
    'refreshNetwork',
    'isCurrentSceneIsBattle',
    'isEventRunning',
    'getMyActorDataForNetwork',
    'getDataForNetwork',
    'sendMessage',
    'isMultiMode',
    'synchronizeMapData',
    'HVaqj',
    'EgREf',
    'mapId',
    'PlayerNetMapData',
    'JOyLs',
    'while\x20try\x20collect\x20actor\x20Data\x20to\x20synchronize',
    'onActorDataFromNetwork',
    'vemkD',
    '_data',
    'sYpOJ',
    'ZCsns',
    'PlayerNetItemsData',
    'while\x20try\x20synchronize\x20actor\x20Data\x20from\x20Network',
    'VuuiD',
    'onActroItemsFromNetwork',
    'JVhpl',
    'BZGBy',
    'lHLhv',
    'HACVU',
    'setDataFromNetwork',
    'clearParty',
    'mrCGm',
    'FMzJO',
    'myPlayerData',
    'length',
    'PnZqF',
    'dqlam',
    'actorId',
    'removeActor',
    'networkActorsId',
    'contains',
    'push',
    'getMyActorId',
    'isCurrentSceneIsMap',
    'requestRefresh',
    'isCurrentSceneIsMenuBased',
    'safeRefreshCurrentScene',
    'clearPartyFull',
    'upvxY',
    'followers',
    'getNetworkCharById',
    'refreshParty',
    'addActor',
    'players',
    'delete',
    'requestNetworkRefresh',
    'playerData'
];
(function (_0x52e0d6, _0x186212) {
    var _0x4b5061 = function (_0xa858b5) {
        while (--_0xa858b5) {
            _0x52e0d6['push'](_0x52e0d6['shift']());
        }
    };
    _0x4b5061(++_0x186212);
}(_0xcdf8, 0x144));
var _0x64ad = function (_0x13c468, _0x41f442) {
    _0x13c468 = _0x13c468 - 0x0;
    var _0x1c84f3 = _0xcdf8[_0x13c468];
    return _0x1c84f3;
};
(function () {
    NetPartyManager[_0x64ad('0x0')] = function () {
        if (_0x64ad('0x1') !== _0x64ad('0x2')) {
            var _0x383a3e, _0x4f4e9a, _0x3d83ea, _0x5ee97c, _0x33f3c3, _0x1eefab;
            if (Network[_0x64ad('0x3')] == null) {
                return;
            }
            _0x33f3c3 = $gameParty['members']();
            for (_0x4f4e9a = _0x3d83ea = _0x1eefab = _0x33f3c3[_0x64ad('0x4')] - 0x1; _0x1eefab <= 0x0 ? _0x3d83ea <= 0x0 : _0x3d83ea >= 0x0; _0x4f4e9a = _0x1eefab <= 0x0 ? ++_0x3d83ea : --_0x3d83ea) {
                if (_0x64ad('0x5') === _0x64ad('0x6')) {
                    result = sprite;
                } else {
                    _0x5ee97c = _0x33f3c3[_0x4f4e9a];
                    if (_0x5ee97c != null) {
                        _0x383a3e = _0x5ee97c[_0x64ad('0x7')]();
                        $gameParty[_0x64ad('0x8')](_0x383a3e);
                        if (!Network[_0x64ad('0x9')][_0x64ad('0xa')](_0x383a3e)) {
                            Network['networkActorsId'][_0x64ad('0xb')](_0x383a3e);
                        }
                    }
                }
            }
            return $gameParty['addActor'](NetPartyManager[_0x64ad('0xc')]());
        } else {
            if (SceneManager[_0x64ad('0xd')]()) {
                NetPartyManager['refreshCharacters']();
                $gameMap[_0x64ad('0xe')]();
            }
            if (SceneManager[_0x64ad('0xf')]()) {
                return SceneManager[_0x64ad('0x10')]();
            }
        }
    };
    NetPartyManager[_0x64ad('0x11')] = function () {
        if (_0x64ad('0x12') === _0x64ad('0x12')) {
            NetPartyManager['clearParty']();
            $gameParty[_0x64ad('0x8')](NetPartyManager[_0x64ad('0xc')]());
            Network[_0x64ad('0x9')][_0x64ad('0xb')](NetPartyManager[_0x64ad('0xc')]());
        } else {
            return $gamePlayer[_0x64ad('0x13')]()[_0x64ad('0x14')](id);
        }
    };
    NetPartyManager[_0x64ad('0x15')] = function () {
        var _0x348c42, _0x274c18, _0x26df80, _0x48671e;
        for (_0x274c18 = _0x26df80 = 0x0, _0x48671e = Network['players'][_0x64ad('0x4')]; 0x0 <= _0x48671e ? _0x26df80 < _0x48671e : _0x26df80 > _0x48671e; _0x274c18 = 0x0 <= _0x48671e ? ++_0x26df80 : --_0x26df80) {
            _0x348c42 = Network['players'][_0x274c18][_0x64ad('0x7')];
            $gameParty[_0x64ad('0x16')](Network[_0x64ad('0x17')][_0x274c18][_0x64ad('0x7')]);
            Network['networkActorsId'][_0x64ad('0x18')](_0x348c42);
        }
        NetPartyManager['refreshCharacters']();
        return $gameMap[_0x64ad('0x19')]();
    };
    NetPartyManager['getPlayer'] = function (_0x3bcd5c) {
        return Network[_0x64ad('0x1a')](_0x3bcd5c);
    };
    NetPartyManager[_0x64ad('0x1b')] = function (_0x5e3634) {
        if (_0x64ad('0x1c') === _0x64ad('0x1d')) {
            return null;
        } else {
            return Network[_0x64ad('0x17')][_0x5e3634];
        }
    };
    NetPartyManager['getPlayerByActorId'] = function (_0x2b82e3) {
        return Network['players'][_0x64ad('0x1e')](_0x64ad('0x7'), _0x2b82e3);
    };
    NetPartyManager['getMe'] = function () {
        return Network[_0x64ad('0x3')];
    };
    NetPartyManager[_0x64ad('0xc')] = function () {
        return NetPartyManager[_0x64ad('0x1f')]()[_0x64ad('0x7')];
    };
    NetPartyManager['getHost'] = function () {
        if (_0x64ad('0x20') === _0x64ad('0x20')) {
            return NetPartyManager['getPlayerByIndex'](0x0);
        } else {
            if (data == null) {
                return;
            }
            actorId = NetPartyManager[_0x64ad('0x21')](socketId);
            if (actorId == null) {
                return;
            }
            if (data != null) {
                $gameParty['setDataFromNetwork'](data);
            }
            NetPartyManager[_0x64ad('0x22')]();
        }
    };
    NetPartyManager['getCharById'] = function (_0x2d1665) {
        if (_0x64ad('0x23') === _0x64ad('0x24')) {
            return;
        } else {
            return $gamePlayer[_0x64ad('0x13')]()[_0x64ad('0x14')](_0x2d1665);
        }
    };
    NetPartyManager[_0x64ad('0x25')] = function (_0x4dc058) {
        if ('fAcZs' !== _0x64ad('0x26')) {
            return $gamePlayer['followers']()[_0x64ad('0x27')](_0x4dc058);
        } else {
            member = members[i];
            if (member != null) {
                _0x4dc058 = member[_0x64ad('0x7')]();
                $gameParty[_0x64ad('0x8')](_0x4dc058);
                if (!Network['networkActorsId'][_0x64ad('0xa')](_0x4dc058)) {
                    Network[_0x64ad('0x9')][_0x64ad('0xb')](_0x4dc058);
                }
            }
        }
    };
    NetPartyManager['getMyPlayerIndex'] = function () {
        return Network[_0x64ad('0x17')][_0x64ad('0x28')](NetPartyManager[_0x64ad('0x1f')]()) + 0x1;
    };
    NetPartyManager[_0x64ad('0x29')] = function () {
        if (_0x64ad('0x2a') !== _0x64ad('0x2b')) {
            return NetPartyManager[_0x64ad('0x2c')](Network['myId']());
        } else {
            return NetPartyManager['getPlayerByIndex'](0x0);
        }
    };
    NetPartyManager[_0x64ad('0x2c')] = function (_0x3b5b50) {
        var _0x1aaeb2, _0x4766ec, _0x28ee5d, _0x7472c;
        if (!SceneManager[_0x64ad('0xd')]()) {
            if ('jYADX' === _0x64ad('0x2d')) {
                return null;
            } else {
                return;
            }
        }
        try {
            if (_0x64ad('0x2e') !== _0x64ad('0x2f')) {
                _0x4766ec = null;
                _0x7472c = SceneManager[_0x64ad('0x30')]['_spriteset'];
                if (_0x7472c != null) {
                    if (_0x64ad('0x31') === 'cayat') {
                        return;
                    } else {
                        _0x28ee5d = _0x7472c[_0x64ad('0x32')];
                        if (_0x28ee5d != null) {
                            if ('lWfIf' !== _0x64ad('0x33')) {
                                _0x28ee5d[_0x64ad('0x34')](function (_0x1b2954) {
                                    if (_0x64ad('0x35') === _0x64ad('0x36')) {
                                        return;
                                    } else {
                                        if (_0x1b2954['_character'] != null) {
                                            if (_0x1b2954[_0x64ad('0x37')] instanceof Game_Player) {
                                                if (_0x3b5b50 === Network[_0x64ad('0x38')]()) {
                                                    if (_0x64ad('0x39') === _0x64ad('0x3a')) {
                                                        Network['sendMessage'](NetMessage[_0x64ad('0x3b')]()[_0x64ad('0x3c')](data));
                                                    } else {
                                                        _0x4766ec = _0x1b2954;
                                                    }
                                                }
                                            }
                                            if (_0x1b2954['_character'] instanceof AlphaNET['LIBS'][_0x64ad('0x3d')]) {
                                                if (_0x64ad('0x3e') === _0x64ad('0x3f')) {
                                                    return NetPartyManager[_0x64ad('0x1f')]()[_0x64ad('0x7')];
                                                } else {
                                                    if (_0x1b2954[_0x64ad('0x37')][_0x64ad('0x40')] === _0x3b5b50) {
                                                        if (_0x64ad('0x41') !== _0x64ad('0x42')) {
                                                            return _0x4766ec = _0x1b2954;
                                                        } else {
                                                            newClientActorId = Network[_0x64ad('0x43')][actorIndex];
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                            } else {
                                return Network[_0x64ad('0x17')]['findElementByField'](_0x64ad('0x7'), actorId);
                            }
                        }
                    }
                }
                return _0x4766ec;
            } else {
                actorId = Network[_0x64ad('0x17')][i]['actorId'];
                $gameParty[_0x64ad('0x16')](Network[_0x64ad('0x17')][i][_0x64ad('0x7')]);
                Network[_0x64ad('0x9')][_0x64ad('0x18')](actorId);
            }
        } catch (_0x29a215) {
            _0x1aaeb2 = _0x29a215;
            AlphaNET[_0x64ad('0x44')](_0x1aaeb2, _0x64ad('0x45'));
        }
        return null;
    };
    NetPartyManager['getActorIdBySocketId'] = function (_0x41142f) {
        if ('ndeys' !== _0x64ad('0x46')) {
            return;
        } else {
            var _0x1443a9;
            _0x1443a9 = NetPartyManager[_0x64ad('0x47')](_0x41142f);
            if (_0x1443a9 == null) {
                return null;
            }
            return _0x1443a9[_0x64ad('0x7')];
        }
    };
    NetPartyManager['registerNewPlayer'] = function (_0x54a998, _0x3c90a3) {
        if (_0x64ad('0x48') === 'FFlEl') {
            var _0x483c12, _0x5b42d6;
            _0x64ad('0x49')['p'](_0x54a998);
            _0x5b42d6 = new AlphaNET[(_0x64ad('0x4a'))]['NetworkPlayerData'](_0x54a998);
            if (_0x3c90a3 == null) {
                if (_0x64ad('0x4b') === _0x64ad('0x4c')) {
                    var _0x3397b1;
                    _0x3397b1 = NetPartyManager[_0x64ad('0x47')](_0x54a998);
                    if (_0x3397b1 == null) {
                        return null;
                    }
                    return _0x3397b1['actorId'];
                } else {
                    _0x483c12 = Network[_0x64ad('0x9')][_0x64ad('0x4d')]();
                }
            } else {
                if ('kRSTb' !== _0x64ad('0x4e')) {
                    return;
                } else {
                    _0x483c12 = Network[_0x64ad('0x43')][_0x3c90a3];
                }
            }
            _0x5b42d6['setActorId'](_0x483c12);
            Network['networkActorsId'][_0x64ad('0x18')](_0x483c12);
            return Network['players'][_0x64ad('0xb')](_0x5b42d6);
        } else {
            if (netId === Network[_0x64ad('0x38')]()) {
                result = sprite;
            }
        }
    };
    NetPartyManager[_0x64ad('0x4f')] = function (_0x2de794) {
        if (_0x64ad('0x50') !== _0x64ad('0x51')) {
            var _0x19cce6;
            _0x19cce6 = NetPartyManager['getPlayer'](_0x2de794);
            if (_0x19cce6 == null) {
                if (_0x64ad('0x52') === _0x64ad('0x53')) {
                    return Network[_0x64ad('0x1a')](_0x2de794);
                } else {
                    return;
                }
            }
            _0x64ad('0x54')['p'](_0x2de794);
            Network[_0x64ad('0x17')][_0x64ad('0x18')](_0x19cce6);
            $gameParty[_0x64ad('0x8')](_0x19cce6['actorId']);
            Network[_0x64ad('0x9')][_0x64ad('0x55')](_0x19cce6[_0x64ad('0x7')]);
            return NetPartyManager[_0x64ad('0x56')]();
        } else {
            _0x2de794 = NetPartyManager['getMyActorId']();
            actor = $gameParty[_0x64ad('0x57')](_0x2de794);
            data = JsonEx[_0x64ad('0x58')](actor);
            return data;
        }
    };
    NetPartyManager[_0x64ad('0x56')] = function () {
        return $gamePlayer[_0x64ad('0x13')]()[_0x64ad('0x59')]();
    };
    NetPartyManager['synchronize'] = function () {
        var _0x4def56, _0x1d1ea4;
        if (SceneManager[_0x64ad('0x5a')]()) {
            return;
        }
        if ($gameMap[_0x64ad('0x5b')]()) {
            return;
        }
        _0x4def56 = NetPartyManager[_0x64ad('0x5c')]();
        if (_0x4def56 != null) {
            Network['sendMessage'](NetMessage[_0x64ad('0x3b')]()[_0x64ad('0x3c')](_0x4def56));
        }
        _0x1d1ea4 = $gameParty[_0x64ad('0x5d')]();
        if (_0x1d1ea4 != null) {
            Network[_0x64ad('0x5e')](NetMessage['PlayerNetItemsData']()[_0x64ad('0x3c')](_0x1d1ea4));
        }
        if (Network[_0x64ad('0x5f')]()) {
            NetPartyManager[_0x64ad('0x60')]();
        }
    };
    NetPartyManager[_0x64ad('0x60')] = function () {
        if (_0x64ad('0x61') === _0x64ad('0x62')) {
            var _0x1bd38a;
            _0x1bd38a = $gameMap[_0x64ad('0x63')]();
            Network[_0x64ad('0x5e')](NetMessage[_0x64ad('0x64')]()[_0x64ad('0x3c')](_0x1bd38a));
        } else {
            var _0x1dbd7b;
            _0x1dbd7b = $gameMap[_0x64ad('0x63')]();
            Network[_0x64ad('0x5e')](NetMessage[_0x64ad('0x64')]()['setData'](_0x1dbd7b));
        }
    };
    NetPartyManager[_0x64ad('0x5c')] = function () {
        var _0x9b934f, _0x327682, _0x548c6b, _0x1ac7c0;
        try {
            _0x1ac7c0 = NetPartyManager[_0x64ad('0xc')]();
            _0x9b934f = $gameParty['memberByActorId'](_0x1ac7c0);
            _0x327682 = JsonEx[_0x64ad('0x58')](_0x9b934f);
            return _0x327682;
        } catch (_0x52701d) {
            if (_0x64ad('0x65') !== 'XPjoT') {
                _0x548c6b = _0x52701d;
                return AlphaNET[_0x64ad('0x44')](_0x548c6b, _0x64ad('0x66'));
            } else {
                return;
            }
        }
    };
    NetPartyManager[_0x64ad('0x67')] = function (_0x1e26da, _0x264f63) {
        if ('vemkD' === _0x64ad('0x68')) {
            var _0x46f901, _0x33096f, _0x5aa7b2;
            try {
                _0x46f901 = NetPartyManager[_0x64ad('0x21')](_0x1e26da);
                if (_0x46f901 == null) {
                    return;
                }
                _0x5aa7b2 = JsonEx['parse'](_0x264f63);
                if ($gameActors[_0x64ad('0x69')][_0x46f901] == null) {
                    if (_0x64ad('0x6a') !== _0x64ad('0x6b')) {
                        return;
                    } else {
                        Network[_0x64ad('0x5e')](NetMessage[_0x64ad('0x6c')]()['setData'](itemsData));
                    }
                }
                $gameActors[_0x64ad('0x69')][_0x46f901] = _0x5aa7b2;
                NetPartyManager[_0x64ad('0x22')]();
            } catch (_0x2c5016) {
                if ('EtMYA' === 'EtMYA') {
                    _0x33096f = _0x2c5016;
                    AlphaNET[_0x64ad('0x44')](_0x33096f, _0x64ad('0x6d'));
                } else {
                    NetPartyManager[_0x64ad('0x60')]();
                }
            }
        } else {
            var _0x41e191, _0x4815c0, _0x5c2d50, _0x3dbdce;
            for (_0x4815c0 = _0x5c2d50 = 0x0, _0x3dbdce = Network[_0x64ad('0x17')][_0x64ad('0x4')]; 0x0 <= _0x3dbdce ? _0x5c2d50 < _0x3dbdce : _0x5c2d50 > _0x3dbdce; _0x4815c0 = 0x0 <= _0x3dbdce ? ++_0x5c2d50 : --_0x5c2d50) {
                _0x41e191 = Network[_0x64ad('0x17')][_0x4815c0][_0x64ad('0x7')];
                $gameParty['addActor'](Network[_0x64ad('0x17')][_0x4815c0][_0x64ad('0x7')]);
                Network['networkActorsId']['delete'](_0x41e191);
            }
            NetPartyManager[_0x64ad('0x56')]();
            return $gameMap[_0x64ad('0x19')]();
        }
    };
    NetPartyManager['refresh'] = function () {
        if (_0x64ad('0x6e') === _0x64ad('0x6e')) {
            if (SceneManager[_0x64ad('0xd')]()) {
                NetPartyManager['refreshCharacters']();
                $gameMap[_0x64ad('0xe')]();
            }
            if (SceneManager[_0x64ad('0xf')]()) {
                return SceneManager[_0x64ad('0x10')]();
            }
        } else {
            return Network[_0x64ad('0x17')][_0x64ad('0x28')](NetPartyManager[_0x64ad('0x1f')]()) + 0x1;
        }
    };
    NetPartyManager[_0x64ad('0x6f')] = function (_0x1dccc9, _0x517aae) {
        if (_0x64ad('0x70') !== _0x64ad('0x71')) {
            var _0x1082bb, _0x341cdd;
            try {
                if (_0x64ad('0x72') === _0x64ad('0x73')) {
                    NetPartyManager['clearParty']();
                    $gameParty[_0x64ad('0x8')](NetPartyManager[_0x64ad('0xc')]());
                    Network[_0x64ad('0x9')][_0x64ad('0xb')](NetPartyManager['getMyActorId']());
                } else {
                    if (_0x517aae == null) {
                        return;
                    }
                    _0x1082bb = NetPartyManager[_0x64ad('0x21')](_0x1dccc9);
                    if (_0x1082bb == null) {
                        return;
                    }
                    if (_0x517aae != null) {
                        $gameParty[_0x64ad('0x74')](_0x517aae);
                    }
                    NetPartyManager[_0x64ad('0x22')]();
                }
            } catch (_0x458d91) {
                _0x341cdd = _0x458d91;
                AlphaNET['error'](_0x341cdd, 'while\x20try\x20synchronize\x20actor\x20Data\x20from\x20Network');
            }
        } else {
            return Network[_0x64ad('0x3')];
        }
    };
}());
})();

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetPlayerWorldData.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var NetPlayerWorldData;
  NetPlayerWorldData = class NetPlayerWorldData {
    constructor() {
      this.actorData = null;
      this.actorItems = null;
      this.variablesData = [];
      this.selfSwitchData = [];
      this.switchData = [];
    }

    setActorData(data) {
      return this.actorData = data;
    }

    getActorData() {
      return this.actorData;
    }

    setActorItems(data) {
      return this.actorItems = data;
    }

    getActorItems() {
      return this.actorItems;
    }

    setWorldData(data) {
      var e;
      try {
        this.variablesData = data.variablesData;
        this.switchData = data.switchData;
        return this.selfSwitchData = data.selfSwitchData;
      } catch (error) {
        e = error;
        return Network.error(e, 'while try save World Data for player');
      }
    }

    getWorldDataNetwork() {
      var data;
      return data = {
        variablesData: JSON.stringify(this.variablesData),
        switchData: JSON.stringify(this.switchData),
        selfSwitchData: JSON.stringify(this.selfSwitchData)
      };
    }

    makeSaveContents(actorId) {
      var saveData, world;
      world = {
        variablesData: this.variablesData,
        switchData: this.switchData,
        selfSwitchData: this.selfSwitchData
      };
      saveData = {
        world: world,
        actorItems: this.actorItems,
        actorData: $gameActors._data[actorId]
      };
      return saveData;
    }

  };
  AlphaNET.register(NetPlayerWorldData);
})();

// ■ END NetPlayerWorldData.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetSessionData.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var NetSessionData;
  NetSessionData = class NetSessionData {
    constructor() {
      this._actorsData = {};
      this._globalData = new AlphaNET.LIBS.NetPlayerWorldData();
    }

    setPlayerActorData(actorId, data) {
      this._checkActorWorldData(actorId);
      //"PLAYER DATA SAVED TO SESSION".p(actorId)
      this.getAllData(actorId).setActorData(data);
    }

    getPlayerActorData(actorId) {
      this._checkActorWorldData(actorId);
      return this.getAllData(actorId).getActorData();
    }

    setPlayerItemsData(actorId, data) {
      this._checkActorWorldData(actorId);
      this.getAllData(actorId).setActorItems(data);
    }

    getPlayerItemsrData(actorId) {
      this._checkActorWorldData(actorId);
      return this.getAllData(actorId).getActorItems();
    }

    hasInfoAbout(actorId) {
      return this._actorsData[actorId] != null;
    }

    getAllData(actorId) {
      return this._actorsData[actorId];
    }

    getGlobalData() {
      return this._globalData;
    }

    setPlayerWorldData(actorId, data) {
      this._checkActorWorldData(actorId);
      return this.getAllData(actorId).setWorldData(data);
    }

    getPlayerWorldData(actorId) {
      this._checkActorWorldData(actorId);
      return this.getAllData(actorId).getWorldData();
    }

    makeSaveContents() {
      var _actorsData, g, item, saveData;
      _actorsData = {};
      for (item in this._actorsData) {
        if (this._actorsData.hasOwnProperty(item)) {
          if (this._actorsData[item].actorData != null) {
            _actorsData[item] = this._actorsData[item].makeSaveContents(item);
          }
        }
      }
      g = this._globalData.makeSaveContents();
      return saveData = {
        global: g,
        actorsData: _actorsData
      };
    }

    extractSaveContents(content) {
      var e, item, results;
      try {
        this._loadDataToWorldObject(this._globalData, content.global);
        results = [];
        for (item in content.actorsData) {
          if (content.actorsData.hasOwnProperty(item)) {
            this._actorsData[item] = new AlphaNET.LIBS.NetPlayerWorldData();
            results.push(this._loadDataToWorldObject(this._actorsData[item], content.actorsData[item]));
          } else {
            results.push(void 0);
          }
        }
        return results;
      } catch (error) {
        e = error;
        return AlphaNET.error(e, ' while load network world save data');
      }
    }

    _loadDataToWorldObject(obj, data) {
      var e;
      try {
        obj.actorItems = data.actorItems;
        if (data.actorData != null) {
          obj.actorData = JsonEx.stringify(data.actorData);
        }
        return obj.setWorldData(data.world);
      } catch (error) {
        e = error;
        return AlphaNET.error(e, ' while extract network world save data');
      }
    }

    _checkActorWorldData(actorId) {
      if (!this.hasInfoAbout(actorId)) {
        this._actorsData[actorId] = new AlphaNET.LIBS.NetPlayerWorldData();
      }
    }

  };
  AlphaNET.register(NetSessionData);
})();

// ■ END NetSessionData.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetUIManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  //@[CLASS IMPL ONLY]
  NetUIManager.init = function(scene) {
    if ($gameTemp._chatLines == null) {
      $gameTemp._chatLines = [];
    }
    NetUIManager.netUILayer = new Sprite();
    if (scene != null) {
      scene.addChild(NetUIManager.netUILayer);
    }
    if (NetUIManager.isNeedChat === true) {
      return NetUIManager.createChat();
    }
  };
  NetUIManager.startChat = function() {
    NetUIManager.isNeedChat = true;
    return NetUIManager.createChat();
  };
  NetUIManager.createChat = function() {
    if (NetUIManager._chatUI != null) {
      return;
    }
    NetUIManager._chatUI = new AlphaNET.LIBS.SpriteChatMain();
    this.chat = new AlphaNET.LIBS.GameChatController(NetUIManager._chatUI);
    return NetUIManager._add(NetUIManager._chatUI);
  };
  NetUIManager._add = function(element) {
    return NetUIManager.netUILayer.addChild(element);
  };
  NetUIManager.isSomethingUnderCursor = function() {
    var ref;
    if (NetUIManager.isChatActive()) {
      if (this.chat.isUnderTouch()) {
        return true;
      }
    }
    if ((ref = this.actionMenu) != null ? ref.isActive() : void 0) {
      if (this.actionMenu.isMouseInButtons()) {
        return true;
      }
    }
    return false;
  };
  NetUIManager.hideUI = function() {};
  NetUIManager.showUI = function() {};
  NetUIManager.hideChat = function() {
    var ref;
    return (ref = this.chat) != null ? ref.hide() : void 0;
  };
  NetUIManager.showChat = function() {
    var ref;
    return (ref = this.chat) != null ? ref.show() : void 0;
  };
  NetUIManager.isChatActive = function() {
    var ref;
    return ((ref = this.chat) != null ? ref.isActive() : void 0) && ANET.Utils.isSceneMap();
  };
  NetUIManager.pushMessageToChat = function(actorId, message) {
    if (NetUIManager.isChatActive()) {
      if (this.chat != null) {
        this.chat.parseEmoji(actorId, message);
        return this.chat.addLine(actorId, message);
      }
    } else {
      return $gameTemp._chatLines.push([actorId, message]);
    }
  };
  NetUIManager.showActionMenu = function() {
    if ($gamePlayer._netPlayerForAction == null) {
      return;
    }
    if (!ANET.P.isActionMenuAllowed()) {
      return;
    }
    if (this.actionMenu == null) {
      "CREATE ACTION MENU".p();
      this.actionMenu = new ANET.LIBS.Sprite_ActorActionMenu();
      NetUIManager._add(this.actionMenu);
    }
    if (this.actionMenu.isActive()) {
      return;
    }
    "SHOW ACTION MENU".p();
    this.actionMenu.moveToCharacter($gamePlayer._netPlayerForAction);
    return this.actionMenu.show();
  };
  NetUIManager.hideActionMenu = function() {
    var ref;
    if ((ref = this.actionMenu) != null ? ref.isActive() : void 0) {
      return this.actionMenu.hide();
    }
  };
  NetUIManager.closeActionMenu = function() {
    if (this.actionMenu != null) {
      NetUIManager.netUILayer.removeChild(this.actionMenu);
      return this.actionMenu = null;
    }
  };
  NetUIManager.update = function() {
    var ref;
    return (ref = this.chat) != null ? ref.update() : void 0;
  };
  NetUIManager.terminate = function() {
    NetUIManager._chatUI = null;
    this.chat = null;
    return NetUIManager.closeActionMenu();
  };
})();

// ■ END NetUIManager.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetWaitPool.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var NetWaitPool;
  NetWaitPool = class NetWaitPool {
    constructor(waitId) {
      this.waitId = waitId;
      this._clients = [];
      this.resetPool();
    }

    addClient(clientId, isReady = false) {
      if (this._getClientIndex(clientId) < 0) {
        this._clients.push(clientId);
      }
      if (isReady === true) {
        return this.setClientReady(clientId);
      }
    }

    _getClientIndex(clientId) {
      return this._clients.indexOf(clientId);
    }

    setClientReady(clientId) {
      return this._statuses[this._getClientIndex(clientId)] = true;
    }

    isPoolReady() {
      return this._statuses.every(function(status) {
        return status === true;
      });
    }

    resetPool() {
      return this._statuses = []; // * Массив готовности
    }

    getPoolSize() {
      return this._clients.length;
    }

  };
  AlphaNET.register(NetWaitPool);
})();

// ■ END NetWaitPool.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Network.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  //@[CLASS HEADER PART]
  //@[CLASS IMPL ONLY]
  Network.commonEventOnServerStarted = 0;
  Network.commonEventOnConnectToServer = 0;
  Network.commonEventOnDisconectFromServer = 0;
  Network.commonEventOnOtherClientConnected = 0;
  Network.commonEventOnOtherClientDisconected = 0;
  Network.commonEventOnPvPBattleEnd = 0;
  Network.maximumNetworkPlayers = 4;
  Network.networkActorsId = [
    1,
    2,
    3,
    4 // * This is mutable (меняется во время игры)
  ];
  Network.networkActorsId_Base = [
    1,
    2,
    3,
    4 // * This is not mutable
  ];
  Network.SERVER_UPDATE_TIME = 500;
  Network.WAIT_SERVER = 0;
  Network.WAIT_PLAYER = 1;
  Network.ICON_NONE = -1;
  Network.ICON_MESSAGE = 1;
  Network.ICON_MENU = 2;
  Network.ICON_SHOP = 3;
  Network.ICON_WAIT = 4;
  Network.ICON_BATTLE = 5;
  Network.ICON_CHAT = 6;
  Network.ICON_TRADE = 7;
  Network.PVP_WIN = 0;
  Network.PVP_DEFEAT = 2;
  Network.isConnected = function() {
    return this._isConnected === true;
  };
  Network.isHost = function() {
    return Network.isConnected() && this._isHost === true;
  };
  Network.isHotGame = function() {
    return this._isHotGame === true;
  };
  Network.isBusy = function() {
    return this._isBusy === true;
  };
  Network.myId = function() {
    if (Network.isConnected()) {
      return this.socket.id;
    }
  };
  Network.playerData = function(id) {
    return Network.players.findElementByField('id', id);
  };
  Network.isHotHost = function() {
    return Network.isHotGame() && Network.isHost();
  };
  Network.inBattle = function() {
    return this._inBattle === true;
  };
  Network.allowConnect = function() {
    return this._allowConnection === true;
  };
  Network.canClientConnect = function() {
    return Network._checkCanConnect();
  };
  Network.canConnectToServer = function() {
    return Network._checkCanConnectToServer();
  };
  Network.isMultiMode = function() {
    return this._isMultiplayerMode === true;
  };
  Network.isMapOwner = function() {
    return Network.isMultiMode() && this._isMapOwner === true;
  };
  Network.inPvPBattle = function() {
    return this._inPvPBattle === true;
  };
  Network.isPvPBattleServer = function() {
    return this._isPvPBattleServer === true;
  };
  Network.isPvPBattleWin = function() {
    return this._lastPvPResult === Network.PVP_WIN;
  };
  Network.isPvPBattleLoose = function() {
    return this._lastPvPResult === Network.PVP_DEFEAT;
  };
  Network.isPvPAllowed = function() {
    return Network.isMultiMode() && ANET.P.isPvPAllowed() && !ANET.P.getPvPRestrictedMaps().contains($gameMap.mapId());
  };
  Network.isRestrictedPartyList = function() {
    return Network.isConnected() && Network.isMultiMode() && !ANET.Parameters.isShowPlayersInParty();
  };
  Network.startServer = function() {
    return Network._startServer();
  };
  Network.stopServer = function() {
    var ref;
    return (ref = this.server) != null ? ref.stop() : void 0;
  };
  Network.connectToServer = function() {
    return Network._connectToServer();
  };
  Network.disconnect = function() {
    var ref;
    return (ref = this.client) != null ? ref.disconnect() : void 0;
  };
  Network.sendMessage = function(netMessage) {
    if (!Network.isConnected()) {
      return;
    }
    netMessage.setFrom(this.socket.id).send();
  };
  Network.sendIcon = function(iconId) {
    var msg;
    if (!Network.isConnected()) {
      return;
    }
    if (iconId == null) {
      iconId = Network.ICON_NONE;
    }
    msg = NetMessage.PlayerNetIcon().setData(iconId);
    return Network.sendMessage(msg);
  };
  Network.requestSync = function(syncId) {
    var msg;
    if (!Network.isConnected()) {
      return;
    }
    msg = NetMessage.RequestSync().setData(syncId).setRepeat(Network.WAIT_PLAYER);
    return Network.sendMessage(msg);
  };
  // * INNER METHOD (Call by client)
  Network.requestPvPBattle = function() {
    var data, msg;
    if ($gamePlayer._netPlayerForAction == null) {
      return;
    }
    if (!Network.isConnected()) {
      return;
    }
    if (!Network.isMultiMode()) {
      return;
    }
    //data = {
    //    who: NetPartyManager.getMyPlayerIndex(), # * MY INDEX
    //    with: anotherPlayerIndex # * RIVAL PLAYER INDEX
    //}
    NetUIManager.closeActionMenu();
    data = $gamePlayer._netPlayerForAction.netIndex;
    msg = NetMessage.RequestPvP().setData(data); //.setRepeat('pvp_start')
    Network.sendMessage(msg);
    $gamePlayer._netPlayerForAction = null;
    return this._isPvPBattleServer = true;
  };
  Network.requestTrade = function() {
    var data, msg;
    if ($gamePlayer._netPlayerForAction == null) {
      return;
    }
    if (!Network.isConnected()) {
      return;
    }
    NetUIManager.closeActionMenu();
    data = $gamePlayer._netPlayerForAction.netIndex;
    msg = NetMessage.RequestTrade().setData(data);
    Network.sendMessage(msg);
    return $gamePlayer._netPlayerForAction = null;
  };
  Network.registerSyncVariable = function(varId) {
    if (this._syncedVariables == null) {
      Network._initSyncedVariablesData();
    }
    if (!Network.isSyncedVariable(varId)) {
      return this._syncedVariables.push(varId);
    }
  };
  Network.isSyncedVariable = function(varId) {
    if (this._syncedVariables == null) {
      return false;
    }
    return this._syncedVariables.contains(varId);
  };
  //?{TEST}
  Network.sendTemp = function(data) {
    var msg;
    if (!Network.isConnected()) {
      return;
    }
    msg = NetMessage.TempMessage().setData(data);
    return Network.sendMessage(msg);
  };
  Network.sendTempWait = function(data) {
    var msg;
    if (!Network.isConnected()) {
      return;
    }
    msg = NetMessage.TempMessage().setRepeat().setData(data);
    return Network.sendMessage(msg);
  };
  AlphaNET.register(Network);
})();

// ■ END Network.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Network_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var LOG;
  LOG = new KDCore.DevLog("Network");
  LOG.on();
  LOG.setColors(KDCore.Color.GREEN, KDCore.Color.BLACK.getLightestColor(35));
  
  //@[CLASS PRIVATE PART]
  //@[CLASS IMPL ONLY]
  Network.ip = 'localhost';
  Network.port = 3032;
  Network.initialize = function() {
    Network._loadIPandPort();
    LOG.p("Initialized on " + Network.ip + " : " + Network.port);
    this.socket = null;
    this._isConnected = false;
    this._isHost = false;
    this._isHotGame = false;
    this._isBusy = false;
    this._thread = null;
    this.players = [];
    this.myPlayerData = null;
    this._waitMode = 0;
    this._allowConnection = true;
    this._isMultiplayerMode = AlphaNET.Parameters.isMultiGameMode();
    if (this._isMultiplayerMode) {
      LOG.p("Warning! Multiplayer game mode. Global Events are disabled");
    }
    this._isMapOwner = false;
    this.sessionData = null;
    this._inPvPBattle = false;
    this._isPvPBattleServer = false;
    this._lastPvPResult = -1;
    this._encounterTroopId = 1;
    this._isWaitForConnectingDone = false;
    Network.networkActorsId = AlphaNET.Parameters.get_actorsForPlayers();
    Network.networkActorsId_Base = AlphaNET.Parameters.get_actorsForPlayers().clone();
    Network.maximumNetworkPlayers = Network.networkActorsId.length;
    AlphaNET.Parameters.load_CommonEventsForNetwork();
  };
  Network._loadIPandPort = function() {
    var adr;
    if (ConfigManager._netDefIPPort != null) {
      adr = ConfigManager._netDefIPPort.split(":");
    } else {
      adr = ANET.P.get_DefaultIP().split(":");
    }
    Network.ip = adr[0];
    Network.port = Number(adr[1]);
  };
  Network._saveAdrToConfig = function() {
    var adr;
    adr = Network.ip + ":" + Network.port;
    ConfigManager._netDefIPPort = adr;
    return ConfigManager.save();
  };
  Network._startServer = function() {
    if (Utils.isNwjs()) {
      return this.server = new AlphaNET.LIBS.NetworkServer(Network.port);
    } else {
      return LOG.p("You can start server only in NW.js (PC)");
    }
  };
  Network._connectToServer = function() {
    var adr;
    if (this.socket != null) {
      return LOG.p("Connection already exists!");
    } else {
      adr = this._makeNetAdress();
      LOG.p("Connect to " + adr);
      this.socket = io(adr);
      return this.client = new AlphaNET.LIBS.NetworkClient(this.socket);
    }
  };
  Network.setHost = function() {
    return this._isHost = true;
  };
  Network.setHotGame = function(isHotGame) {
    return this._isHotGame = isHotGame;
  };
  Network._makeNetAdress = function() {
    return 'http://' + Network.ip + ":" + Network.port;
  };
  Network.runEvent = function(commonEventId) {
    if ((commonEventId != null) && commonEventId > 0 && ($dataCommonEvents[commonEventId] != null)) {
      LOG.p("Start common event " + commonEventId);
      return $gameTemp.reserveCommonEvent(commonEventId);
    }
  };
  Network.onConnectToServer = function() {
    this._isConnected = true;
    this._isWaitForConnectingDone = true;
    if (!Network.isHotGame()) {
      if (ANET.P.isChatUsing() === true) {
        return NetUIManager.startChat();
      }
    }
  };
  Network.onConnectionError = function() {
    return this.socket = null;
  };
  //TODO: Либо вызывать общее событие, либо сделать handler
  Network.onConnectionLost = function() {
    Network.disconnect();
    this._isConnected = false;
    this.socket = null;
    return Network.clearPlayersData();
  };
  Network.clearPlayersData = function() {
    Network.players = [];
    Network.myPlayerData = null;
    return NetPartyManager.refreshCharacters();
  };
  Network.isPlayerWaitMode = function() {
    return this._waitMode === Network.WAIT_PLAYER;
  };
  Network.isServerWaitMode = function() {
    return this._waitMode === Network.WAIT_SERVER;
  };
  Network.getLastResponseData = function() {
    return this._lastResponseData;
  };
  // * Могу ли я подключится сейчас?
  Network._checkCanConnect = function() {
    if (Network.isMultiMode()) {
      return SceneManager.isCurrentSceneIsMap();
    } else {
      return SceneManager.isCurrentSceneIsMap() && !Network.isBusy();
    }
  };
  // * Может ли клиент подключится к севреру? (Т.е. эта проверка уже на сервере)
  Network._checkCanConnectToServer = function() {
    if (Network.isMultiMode()) {
      return true;
    } else {
      return SceneManager.isCurrentSceneIsMap() && !Network.isBusy();
    }
  };
  // * OUTER METHOD CALL BY SERVER RESPONSE
  // * Это внешний метод, он вызывается сервером, когда он согласовал PvP бой между игроками
  Network._outerStartPvP = function(enemyActorId) {
    if (!Network.isConnected()) {
      return;
    }
    if (!Network.isMultiMode()) {
      return;
    }
    LOG.p("Starting PvP");
    BattleManager.setupPvPBattle(enemyActorId);
    return SceneManager.push(Scene_Battle);
  };
  // * OUTER METHOD CALL BY SERVER RESPONSE
  Network._outerStartTrade = function(anotherActorId) {
    if (!Network.isConnected()) {
      return;
    }
    LOG.p("Starting Trade");
    Network._clearTradeState();
    $gameTemp.netTradeAnotherActorId = anotherActorId;
    $gameTemp.netTradeItems = new ANET.LIBS.TradeItems();
    $gameTemp.netTradeItemsOut = new ANET.LIBS.TradeItems();
    return SceneManager.push(ANET.LIBS.Scene_Trade);
  };
  Network._onNewChatMessage = function(actorId, message) {
    return NetUIManager.pushMessageToChat(actorId, message);
  };
  Network.clearPvPBattleWithResult = function(result) {
    LOG.p("PvP End");
    this._inPvPBattle = false;
    this._isPvPBattleServer = false;
    this._lastPvPResult = result;
    return Network.runEvent(Network.commonEventOnPvPBattleEnd);
  };
  Network._clearTradeState = function() {
    $gameTemp.netTradeNeedAbort = null;
    $gameTemp.netTradeItemsOut = null;
    $gameTemp.netTradeItems = null;
    return $gameTemp.netTradeAnotherActorId = null;
  };
  Network._initSyncedVariablesData = function() {
    return this._syncedVariables = [];
  };
  Network._synchronizeSyncVariablesToNetwork = function() {
    var i, len, ref, varId;
    if (this._syncedVariables == null) {
      return;
    }
    ref = this._syncedVariables;
    for (i = 0, len = ref.length; i < len; i++) {
      varId = ref[i];
      Network._sendSyncVarValue(varId);
    }
  };
  Network._sendSyncVarValue = function(varId) {
    var msg;
    msg = NetMessage.OnSyncVarValue();
    msg.setData({
      varId: varId,
      value: $gameVariables.value(varId)
    });
    Network.sendMessage(msg);
  };
  //?[TEST]
  Network.test = function() {
    var msg;
    msg = new AlphaNET.LIBS.NetMessage(this.socket);
    msg.setName('testWaitHard').send("baba").setWait();
    return this._isBusy = true;
  };
  //?[TEST]
  Network.test2 = function() {
    var msg;
    msg = new AlphaNET.LIBS.NetMessage(this.socket);
    msg.setName('testWaitHardRepeated').send("gfgf").setRepeat();
    return this._isBusy = true;
  };
  //?[TEST]
  Network.sendChatMessage = function(text, channelId) {
    var e, msg;
    if (!Network.isConnected()) {
      return;
    }
    try {
      msg = {
        channelId: channelId,
        text: text
      };
      Network.sendMessage(NetMessage.SendChatMessage().setData(msg));
      return NetUIManager.pushMessageToChat(NetPartyManager.getMyActorId(), msg);
    } catch (error1) {
      e = error1;
      return ANET.warning('error while send chat message to server', e);
    }
  };
  //*Активирует режим ожидания ответа от сервера, игра зависает и ждёт ответ от сервера
  Network.waitServerResponse = function(netMessage, waitMode) {
    //LOG.p 'Sended wait state request to server ' + netMessage.name
    this._waitMode = waitMode || Network.WAIT_SERVER;
    this._isBusy = true;
    Network.sendIcon(Network.ICON_WAIT);
  };
  //*Активирует режим повторения команды, игра в это время зависает и ждёт ответ от сервера
  Network.waitServerResponseRepeated = function(netMessage, waitMode) {
    var func;
    //LOG.p 'Repeated mode'
    Network.waitServerResponse(netMessage, waitMode);
    this._thread = setTimeout(func = function() {
      if (Network.isBusy() && (Network._thread != null)) {
        netMessage.send();
        Network.sendIcon(Network.ICON_WAIT);
        return Network._thread = setTimeout(func, 2000);
      }
    }, 2000);
  };
  
  //*Ответ (который игра ждала) получен, игра отвисает
  Network.onServerResponse = function(data) {
    //LOG.p 'Wait state request complete'
    this._lastResponseData = data;
    this._isBusy = false;
    Network.sendIcon(Network.ICON_NONE);
    if (this._thread != null) {
      clearInterval(this._thread);
    }
  };
  Network.error = function(error, message) {
    if (Network._errorLog == null) {
      Network._errorLog = new KDCore.DevLog('Network Error');
      Network._errorLog.setColors(KDCore.Color.RED, KDCore.Color.BLACK.getLightestColor(225));
      Network._errorLog.on();
    }
    if (message != null) {
      Network._errorLog.p(message);
    }
    return console.error(error);
  };
})();


// ■ END Network_private.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetworkCharacter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var NetworkCharacter;

NetworkCharacter = class NetworkCharacter extends Game_Follower {
  constructor(index) {
    super(index);
  }

  refreshNet() {
    var pl;
    pl = NetPartyManager.getPlayerByIndex(this.netIndex);
    if (pl != null) {
      this.netId = pl.id;
    } else {
      this.netId = null;
    }
    return this.refresh();
  }

  initialize(index) {
    this.netIndex = index;
    this.netId = null;
    Game_Follower.prototype.initialize.call(this, this.netIndex);
    return this.setTransparent(false);
  }

  actor() {
    var pl;
    if (!Network.isConnected()) {
      return null;
    }
    pl = NetPartyManager.getPlayerByIndex(this.netIndex);
    if (pl == null) {
      return null;
    }
    if (pl.id === Network.myPlayerData.id) {
      // * Если это я, то не создаётся NetworkCharacter
      return null;
    }
    if (Network.isMultiMode() && pl.mapId !== $gameMap.mapId()) {
      return null;
    }
    return $gameParty.memberByActorId(pl.actorId);
  }

  update() {
    return Game_Character.prototype.update.call(this);
  }

  //?[EMPTY]
  chaseCharacter() {}

  //?[BASE]
  networkIconId() {
    if (this.actor() == null) {
      return -1;
    }
    return Game_Follower.prototype.networkIconId.call(this);
  }

  //?[BASE]
  getNetworkName() {
    var ref;
    if (AlphaNET.Parameters.get_ShowNameplatesMode() > 0) {
      return (ref = this.actor()) != null ? ref.name() : void 0;
    }
  }

  //?[BASE]
  getNetworkNameStyleId() {
    var ref;
    return (ref = this.actor()) != null ? ref.networkStyleId() : void 0;
  }

};

AlphaNET.register(NetworkCharacter);

// ■ END NetworkCharacter.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetworkPlayerData.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var NetworkPlayerData;
  // * RAW класс, он хранится только как данные на клиентах (без методов)
  NetworkPlayerData = class NetworkPlayerData {
    constructor(id) {
      this.id = id;
    }

    setActorId(actorId) {
      return this.actorId = actorId;
    }

    data() {
      return {
        id: this.id,
        actorId: this.actorId
      };
    }

  };
  AlphaNET.register(NetworkPlayerData);
})();

// ■ END NetworkPlayerData.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetWorldManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//@[CLASS IMPL ONLY]

// 121 - Switch
// 122 - Variable
// 123 - SelfSwitch
NetWorldManager.WORLD_SYNC_COMMANDS = [121, 122, 123];

NetWorldManager.synchronize = function() {
  var data;
  if (SceneManager.isCurrentSceneIsBattle()) {
    return;
  }
  if ($gameMap.isEventRunning()) {
    return;
  }
  if (Network.isHost()) {
    return;
  }
  data = {};
  data.variablesData = NetWorldManager.getDataForNetwork($gameVariables);
  data.switchData = NetWorldManager.getDataForNetwork($gameSwitches);
  data.selfSwitchData = NetWorldManager.getDataForNetwork($gameSelfSwitches);
  return Network.sendMessage(NetMessage.PlayerWorldData().setData(data));
};

NetWorldManager.onWorldDataFromNetwork = function(data) {
  NetWorldManager.setDataFromNetwork($gameVariables, data.variablesData);
  NetWorldManager.setDataFromNetwork($gameSwitches, data.switchData);
  return NetWorldManager.setDataFromNetwork($gameSelfSwitches, data.selfSwitchData);
};

NetWorldManager.onGlobalWorldDataFromNetwork = function(data) {
  NetWorldManager.setExtraFromNetwork($gameVariables, data.variablesData);
  NetWorldManager.setExtraFromNetwork($gameSwitches, data.switchData);
  return NetWorldManager.setExtraFromNetwork($gameSelfSwitches, data.selfSwitchData);
};

NetWorldManager.getDataForNetwork = function(gameVariableObject) {
  return JSON.stringify(gameVariableObject._data);
};

NetWorldManager.setDataFromNetwork = function(gameVariableObject, data) {
  var netArray;
  netArray = JSON.parse(data);
  gameVariableObject._data = netArray;
  return gameVariableObject.onChange();
};

// * Загружает дополнительные значения (которые были под NET sync или NET virtual)
// * [[id, value],...]
NetWorldManager.setExtraFromNetwork = function(gameVariableObject, data) {
  var i, item, j, netData, ref;
  netData = JSON.parse(data);
  for (i = j = 0, ref = netData.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
    item = netData[i];
    gameVariableObject._data[item[0]] = item[1];
  }
  gameVariableObject.onChange();
};

NetWorldManager.onEventSyncCommand = function(commandData) {
  var e, event, line, mapId, page;
  if (!Network.isHost()) {
    return;
  }
  mapId = commandData.mapId;
  if ($gameMap.mapId() !== mapId) {
    return;
  }
  event = $gameMap.event(commandData.eventId);
  if (event == null) {
    return;
  }
  try {
    page = event.event().pages[commandData.pi];
    if (page == null) {
      return;
    }
    line = page.list[commandData.li];
    if (line == null) {
      return;
    }
    if (NetWorldManager.WORLD_SYNC_COMMANDS.include(line.code)) {
      return NetWorldManager.saveGlobalInfo(line.code, line.parameters, commandData);
    }
  } catch (error) {
    e = error;
    return Network.error(e, 'while check event sync command');
  }
};

NetWorldManager.saveGlobalInfo = function(code, parameters, evData) {
  var p;
  "saveGlobalInfo for".p(code);
  p = parameters;
  switch (code) {
    case 121:
      NetWorldManager.setSwitchToGlobal(p[0], p[1], p[2] === 0);
      break;
    case 122:
      setTimeout((function() {
        return NetWorldManager.setVariableToGlobal(p[0], p[1]);
      }), 500);
      break;
    case 123:
      NetWorldManager.setSelfSwitchToGlobal(p[0], p[1] === 0, evData);
      break;
    default:
      break;
  }
};

NetWorldManager.setSwitchToGlobal = function(fromI, toI, value) {
  var global, i, j, ref, ref1;
  global = Network.sessionData.getGlobalData();
  for (i = j = ref = fromI, ref1 = toI; (ref <= ref1 ? j <= ref1 : j >= ref1); i = ref <= ref1 ? ++j : --j) {
    global.switchData.push([i, value]);
  }
};

NetWorldManager.setVariableToGlobal = function(fromI, toI) {
  var e, global, i, j, ref, ref1;
  try {
    global = Network.sessionData.getGlobalData();
    for (i = j = ref = fromI, ref1 = toI; (ref <= ref1 ? j <= ref1 : j >= ref1); i = ref <= ref1 ? ++j : --j) {
      global.variablesData.push([i, $gameVariables.value(i)]);
    }
  } catch (error) {
    e = error;
    return Network.error(e, 'while set variables to global');
  }
};

NetWorldManager.setSelfSwitchToGlobal = function(switchName, value, commandData) {
  var e, global, key;
  try {
    global = Network.sessionData.getGlobalData();
    key = [commandData.mapId, commandData.eventId, switchName];
    global.selfSwitchData.push([key.toString(), value]);
  } catch (error) {
    e = error;
    return Network.error(e, 'while set selfSwitch to global');
  }
};

NetWorldManager.onEventVirtualCommand = function(commandData) {
  if (!Network.isHost()) {
    return;
  }
  if (!NetWorldManager.WORLD_SYNC_COMMANDS.include(commandData.id)) {
    return;
  }
  NetWorldManager.saveGlobalInfo(commandData.id, commandData.parameters, commandData);
};

// ■ END NetWorldManager.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
(function() {
  var Scene_ActorSelect;
  Scene_ActorSelect = class Scene_ActorSelect extends Scene_Base {
    constructor() {
      super();
    }

    create() {
      super.create();
      Scene_MenuBase.prototype.createBackground.call(this);
      this.createWindowLayer();
      this._createActorList();
      return this.listw.refresh();
    }

    _createActorList() {
      this.listw = new ANET.LIBS.Window_ActorListForNetwork();
      this.listw.activate();
      this.listw.select(0);
      this.listw.setHandler('ok', this.onActorSelectOk.bind(this));
      return this.addWindow(this.listw);
    }

    onActorSelectOk() {
      var msg;
      if (this.listw.isCurrentItemEnabled()) {
        //console.log(@listw.index())
        SoundManager.playOk();
        msg = NetMessage.OnPlayerSelectActor().setData(this.listw.index());
        Network.sendMessage(msg);
        $gameTemp._requestPartyRefreshAfterActorChange = true;
        setTimeout(this.popScene.bind(this), 300);
      } else {
        SoundManager.playBuzzer();
        this.listw.activate();
      }
    }

  };
  ANET.register(Scene_ActorSelect);
})();

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Base.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Scene_Base_isBusy = Scene_Base.prototype.isBusy;
    Scene_Base.prototype.isBusy = function () {
        var base = _alias_Scene_Base_isBusy.call(this);
        return base && Network.isBusy() && $gamePlayer.isTransferring();
    };

    //@[ALIAS]
    var _alias_Scene_Base_initialize = Scene_Base.prototype.initialize;
    Scene_Base.prototype.initialize = function () {
        _alias_Scene_Base_initialize.call(this);
        this._syncIsShowed = false;
        this._spriteNetSyncMini = new AlphaNET.LIBS.Sprite_WaitNetworkMini();
        this._spriteNetSync = new AlphaNET.LIBS.Sprite_WaitNetwork();
    };

    //@[ALIAS]
    var _alias_Scene_Base_updateNET = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function () {
        if (Network.isBusy()) {
            if (Network.isServerWaitMode()) {
                this._updateOnBusyNetwork();
                return;
            } else {
                this._showSyncWait(Network.WAIT_PLAYER);
            }
        } else {
            this._hideSyncWait();
        }
        this._updateNetwork();
        _alias_Scene_Base_updateNET.call(this, ...arguments);
    };
})();


//?[NEW]
Scene_Base.prototype._updateOnBusyNetwork = function () {
    this.updateFade();
    this._showSyncWait(Network.WAIT_SERVER);
};

//?[NEW]
Scene_Base.prototype._showSyncWait = function (waitId) {
    this._showSyncWaitMini();
    setTimeout(() => {
        if (this._syncIsShowed == true) {
            this.addChild(this._spriteNetSync);
            this._spriteNetSync.activate(waitId);
        }
    }, 1000);
};

//?[NEW]
Scene_Base.prototype._showSyncWaitMini = function () {
    if (this._spriteNetSyncMini.isActive()) return;
    this._syncIsShowed = true;
    this.addChild(this._spriteNetSyncMini);
    this._spriteNetSyncMini.activate();
};

//?[NEW]
Scene_Base.prototype._hideSyncWait = function () {
    if (!this._syncIsShowed) return;
    this._syncIsShowed = false;
    this._spriteNetSyncMini.hide();
    this._spriteNetSync.hide();
    this.removeChild(this._spriteNetSyncMini);
    this.removeChild(this._spriteNetSync);
};

//?[NEW]
Scene_Base.prototype._updateNetwork = function () {
    if (!Network.isConnected()) return;
    if (Network.isHost()) {
        if (this instanceof Scene_Map) {
            //?EMPTY
            // * Все движения событий обрабатываются на хосте, поэтому если хост на сцене карты,
            // * то всё нормально. А если хост на другой сцене, то нужно дополнительное обновление
            // * игровой карты, чтобы события не стояли на месте у всех других игроков
        } else {
            $gameMap.updateEventsForNetwork();
        }
    }
};

// ■ END Scene_Base.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Scene_Battle_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow;
    Scene_Battle.prototype.createPartyCommandWindow = function () {
        _alias_Scene_Battle_createPartyCommandWindow.call(this, ...arguments);
        if (Network.isConnected() && !Network.isMultiMode()) {
            // * Выбор команд группы только за хостом
            this._partyCommandWindow.setNetworkShared(true);
        }
    };

    //@[ALIAS]
    var _alias_Scene_Battle_startActorCommandSelection = Scene_Battle.prototype.startActorCommandSelection;
    Scene_Battle.prototype.startActorCommandSelection = function () {
        if(Network.isConnected()) {
            this._startActorCommandSelectionNet();
        } else {
            _alias_Scene_Battle_startActorCommandSelection.call(this);
        }
    };

    //?[NEW]
    Scene_Battle.prototype._startActorCommandSelectionNet = function () {
        if (Network.isMultiMode()) {
            if(Network.inPvPBattle()) {
                this._startActorCommandSelectionForPvP();
            } else {
                _alias_Scene_Battle_startActorCommandSelection.call(this);
            }
        } else {
            if (BattleManager.isMyActorInput())
                _alias_Scene_Battle_startActorCommandSelection.call(this);
            else
                this.endCommandSelection();
        }
    };

    //?[NEW]
    Scene_Battle.prototype._startActorCommandSelectionForPvP = function () {
        // * Планировалось, что игрок будет ждать, пока другой игрок сделает выбор действия
        // * Потом это было отмененно!
        if(BattleManager.isWaitInputtingForPvP()) {
            this.endCommandSelection();
        } else {
            _alias_Scene_Battle_startActorCommandSelection.call(this);
        }
    };

    //@[ALIAS]
    var _alias_Scene_Battle_start = Scene_Battle.prototype.start;
    Scene_Battle.prototype.start = function () {
        if (Network.isConnected()) {
            Network._inBattle = true;
            if(Network.isMultiMode()) {
                Network.sendIcon(Network.ICON_BATTLE);
            }
        }
        _alias_Scene_Battle_start.call(this, ...arguments);
    };

    //@[ALIAS]
    var _alias_Scene_Battle_terminate = Scene_Battle.prototype.terminate;
    Scene_Battle.prototype.terminate = function () {
        _alias_Scene_Battle_terminate.call(this, ...arguments);
        Network._inBattle = false;
    };

    //@[ALIAS]
    var _alias_Scene_Battle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function () {
        _alias_Scene_Battle_update.call(this, ...arguments);
        if (Network.isConnected() && Network.isMultiMode() && Network.isMapOwner()) {
            $gameMap.updateEventsForNetwork();
        }
    };

})();
// ■ END Scene_Battle.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Boot.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    
    // * See Alpha_NET.js

})();
// ■ END Scene_Boot.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_ChatInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Scene_ChatInput;
  Scene_ChatInput = class Scene_ChatInput extends Scene_Base {
    constructor() {
      super();
    }

    create() {
      super.create();
      this._initialSetup();
      this._loadSettings();
      this._drawBackground();
      this.createWindowLayer();
      this._createInputWindow();
      this._createChannelButtons();
      return this._createControlButtons();
    }

    _initialSetup() {
      if ($gameTemp._lastNChatChannelId != null) {
        this.channelId = $gameTemp._lastNChatChannelId;
      } else {
        this.channelId = 0;
      }
      return Input._setIgnoreSpecial = true;
    }

    _loadSettings() {
      this.settings = ANJsonSettings.getChatSettings()[4];
      return this.S = this.settings;
    }

    _drawBackground() {
      this._backgroundSprite = new Sprite();
      this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
      this._backgroundSprite.setBlendColor(this.S.backgroundBlend);
      return this.addChild(this._backgroundSprite);
    }

    _createInputWindow() {
      var pos;
      pos = ANET.Utils.convertPositionPointFromJSON(this.S.position);
      this._window = new ANET.LIBS.Window_ChatInput(pos.x, pos.y, this.S.width, this.S.height);
      this._window.open();
      return this.addWindow(this._window);
    }

    _createChannelButtons() {
      var images, img0, img1, img2, img3, params;
      this.channelA = new ANET.LIBS.Sprite_XButton();
      images = this.S.channelButtonImages;
      img0 = ImageManager.loadNetwork(images.mainImg);
      img1 = ImageManager.loadNetwork(images.hoverImg);
      img2 = ImageManager.loadNetwork(images.pressedImg);
      img3 = ImageManager.loadNetwork(images.selectedImg);
      this.channelA.setButtonImages(img0, img1, img2, img3);
      if (this.channelId === 0) {
        this.channelA.disable();
      }
      this.channelA.addClickHandler(this._onChannelAClick.bind(this));
      params = this.S.channelButtonA;
      this.channelA.move(this._window.x + params.marginX, this._window.y + params.marginY);
      this.channelA.drawStyledTextOnButton(params.caption, params.text.textZoneWidth, params.text.textZoneHeight, params.text);
      this.addChild(this.channelA);
      this.channelB = new ANET.LIBS.Sprite_XButton();
      this.channelB.setButtonImages(img0, img1, img2, img3);
      if (this.channelId === 1) {
        this.channelB.disable();
      }
      this.channelB.addClickHandler(this._onChannelBClick.bind(this));
      params = this.S.channelButtonB;
      this.channelB.move(this._window.x + params.marginX, this._window.y + params.marginY);
      this.channelB.drawStyledTextOnButton(params.caption, params.text.textZoneWidth, params.text.textZoneHeight, params.text);
      return this.addChild(this.channelB);
    }

    _onChannelAClick() {
      this.channelA.disable();
      this.channelB.enable();
      this.channelId = 0;
      return $gameTemp._lastNChatChannelId = this.channelId;
    }

    _onChannelBClick() {
      this.channelA.enable();
      this.channelB.disable();
      this.channelId = 1;
      return $gameTemp._lastNChatChannelId = this.channelId;
    }

    _createControlButtons() {
      var img0, img1, img2, params;
      this.sayButton = new ANET.LIBS.Sprite_XButton();
      params = this.S.sendButton;
      img0 = ImageManager.loadNetwork(params.mainImg);
      img1 = ImageManager.loadNetwork(params.hoverImg);
      img2 = ImageManager.loadNetwork(params.pressedImg);
      this.sayButton.setButtonImages(img0, img1, img2);
      this.sayButton.addClickHandler(this._onSayClick.bind(this));
      this.sayButton.move(this._window.x + params.marginX, this._window.y + params.marginY);
      return this.addChild(this.sayButton);
    }

    start() {
      if (Network.isConnected()) {
        Network.sendIcon(Network.ICON_CHAT);
      }
      return super.start();
    }

    update() {
      super.update();
      if (Input.isTriggered('ok')) {
        this._onSayClick();
      }
      if (this.isExit()) {
        return this.popScene();
      }
    }

    _onSayClick() {
      var text;
      //"SAY".p(@_window.getInputText())
      text = this._window.getInputText();
      this._checkSpecialEmoji(text);
      if (text !== "") {
        Network.sendChatMessage(text, this.channelId);
      }
      return this.popScene();
    }

    _checkSpecialEmoji(text) {
      var emoji;
      emoji = AlphaNET.LIBS.GameChatController.GetEmojiCodeFromMessage(text);
      if (emoji > 0) {
        $gamePlayer.requestBalloon(emoji);
      }
    }

    isExit() {
      return Input.isCancel();
    }

    terminate() {
      super.terminate();
      return Input._setIgnoreSpecial = false;
    }

  };
  ANET.register(Scene_ChatInput);
})();

// ■ END Scene_ChatInput.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_IpConfig.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Scene_IpConfig;
  Scene_IpConfig = class Scene_IpConfig extends Scene_Base {
    constructor() {
      super();
      SMouse.initMouseTrack(true);
      this._loadResources();
      this._createTitle();
      this._createInfo();
      this._createCommandWindow();
      this._createInputWindow();
    }

    _loadResources() {
      ImageManager.loadNetwork('btn1');
      ImageManager.loadNetwork('btn2');
      return ImageManager.loadNetwork('btn3');
    }

    _createTitle() {
      var h, title;
      title = new Sprite(new Bitmap(Graphics._boxWidth, 200));
      title.bitmap.fontSize = 80;
      h = title.bitmap.height / 2;
      title.bitmap.drawText('ALPHA', 0, h, 400, 1, 'center');
      title.bitmap.textColor = KDCore.Color.BLUE.CSS;
      title.bitmap.drawText('NET', 180, h, 400, 1, 'center');
      return this.addChild(title);
    }

    _createInfo() {}

    _createCommandWindow() {
      this.cmdWindow = new AlphaNET.LIBS.Window_IpConfig();
      this.cmdWindow.setHandler('cancel', this.popScene.bind(this));
      this.cmdWindow.setHandler('ip', this._ipCommand.bind(this));
      this.cmdWindow.setHandler('port', this._portCommand.bind(this));
      return this.addChild(this.cmdWindow);
    }

    _ipCommand() {
      this.cmdWindow.close();
      this.cmdWindow.deactivate();
      return this.input.start("ip");
    }

    _portCommand() {
      this.cmdWindow.close();
      this.cmdWindow.deactivate();
      return this.input.start("port");
    }

    _createInputWindow() {
      this.input = new AlphaNET.LIBS.Window_IpInput();
      this.input.setHandler('cancel', this._onInputCancel.bind(this));
      this.input.setHandler('ok', this._onInputOk.bind(this));
      return this.addChild(this.input);
    }

    _onInputOk() {
      this.input.saveTextData();
      return this._onInputCancel();
    }

    _onInputCancel() {
      this.cmdWindow.open();
      this.cmdWindow.activate();
      this.input.close();
      return this.input.deactivate();
    }

    terminate() {
      super.terminate();
      return SMouse.setTrack(false);
    }

  };
  AlphaNET.register(Scene_IpConfig);
})();

// ■ END Scene_IpConfig.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _alias_Scene_Map_start.call(this, ...arguments);
        Network.sendIcon(null);
    };

    //@[ALIAS]
    var _alias_Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function () {
        _alias_Scene_Map_onMapLoaded.call(this, ...arguments);
        if (Network.isConnected() && Network.isMultiMode()) {
            Network.myPlayerData.mapId = $gameMap.mapId();
            Network._isMapOwner = false;
            NetPartyManager.synchronizeMapData();
            NetMessage.RequestPlayerData().send();
            NetMessage.RequestGameMapEventsData().send($gameMap.mapId());
            NetMessage.PlayerChangeMap().send($gameMap.mapId());
        }
        if (Network.isConnected() && $gameTemp._requestPartyRefreshAfterActorChange == true) {
            NetPartyManager.clearPartyFull();
            NetPartyManager.refreshParty();
            $gameTemp._requestPartyRefreshAfterActorChange = null;
        }
        SMouse.initMouseTrack(true);
        NetUIManager.init(this);
    };

    //TODO: Temp solution with Mouse interact to call PvP
    //@[ALIAS]
    var _alias_Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
    Scene_Map.prototype.processMapTouch = function () {
        if (NetUIManager.isSomethingUnderCursor()) {
            //* Если какой-либо UI элемент был курсором, игрок не передвигается
            return;
        }
        if(Network.isConnected() && Network.isMultiMode()) {
            if (TouchInput.isTriggered()) {
                var x = $gameMap.canvasToMapX(TouchInput.x);
                var y = $gameMap.canvasToMapY(TouchInput.y);
                var dist = $gameMap.distance($gamePlayer.x, $gamePlayer.y, x, y);
                if (dist == 1) {
                    if ($gamePlayer.followers().getNetworkPlayerOnPosition(x, y)) {
                        if($gamePlayer._checkPvPStartTrigger());
                            return;
                    } 
                }
            }
            _alias_Scene_Map_processMapTouch.call(this);
            return;
        } else
            _alias_Scene_Map_processMapTouch.call(this);
        
    };

    

    //@[ALIAS]
    var _alias_Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _alias_Scene_Map_update.call(this, ...arguments);
        NetUIManager.update();
    };

    //@[ALIAS]
    var _alias_Scene_Map_updateEncounter = Scene_Map.prototype.updateEncounter;
    Scene_Map.prototype.updateEncounter = function () {
        if(Network.isConnected()) {
            $gamePlayer._executeEncounterNetwork();
        } else
            _alias_Scene_Map_updateEncounter.call(this);
    };

    //@[ALIAS]
    var _alias_Scene_Map_isMenuEnabled = Scene_Map.prototype.isMenuEnabled;
    Scene_Map.prototype.isMenuEnabled = function () {
        if(Network.isBusy()) return false;
        return _alias_Scene_Map_isMenuEnabled.call(this);
    };

    //@[ALIAS]
    var _alias_Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        _alias_Scene_Map_terminate.call(this, ...arguments);
        NetUIManager.terminate();
    };
})();
// ■ END Scene_Map.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[CLASS IMPL ONLY]

  //@[DEFINES]
  _ = Scene_Map.prototype;
})();

// ■ END Scene_Map_private.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Menu.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Scene_Menu_start = Scene_Menu.prototype.start;
    Scene_Menu.prototype.start = function () {
        _alias_Scene_Menu_start.call(this, ...arguments);
        Network.sendIcon(Network.ICON_MENU);
    };
})();
// ■ END Scene_Menu.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_MenuBase.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //?[NEW]
    Scene_MenuBase.prototype.refreshNetwork = function () {
        try {
            this.updateActor();
            if(this._windowLayer == null)
                return;
            var childs = this._windowLayer.children;
            for(var i = 0; i<childs.length; i++) {
                var child = childs[i];
                if(child != null && child.refresh != null) {
                    child.refresh();
                }
            }
        } catch (e) {
            AlphaNET.error(e, 'while try refresh MenuBased scene from Network');
        }
    };

})();
// ■ END Scene_MenuBase.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Name.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    
    //?[NEW]
    Scene_Name.prototype.refreshNetwork = function () {
        // * EMPTY
    };

})();
// ■ END Scene_Name.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Options.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function () {
        _alias_Window_Options_makeCommandList.call(this, ...arguments);
        this.addCommand('Network', 'network');
    };

    //@[ALIAS]
    var _alias_Window_Options_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function (index) {
        if (this._isNetworkCommand(index)) {
            if(Network != null)
                return Network.ip + ":" + Network.port;
            else
                return "";
        } else
            return _alias_Window_Options_statusText.call(this, ...arguments);
    };

    //?[NEW]
    Window_Options.prototype._isNetworkCommand = function (index) {
        return this.commandName(index).contains('Network');
    };

    //@[ALIAS]
    var _alias_Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function () {
        if(this._isNetworkCommand(this.index())) {
            SoundManager.playCursor();
            SceneManager.push(AlphaNET.LIBS.Scene_IpConfig);
        } else {
            _alias_Window_Options_processOk.call(this, ...arguments);
        }
    };
})();
// ■ END Scene_Options.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Shop.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Scene_Shop_start = Scene_Shop.prototype.start;
    Scene_Shop.prototype.start = function () {
        _alias_Scene_Shop_start.call(this, ...arguments);
        Network.sendIcon(Network.ICON_SHOP);
    };
})();
// ■ END Scene_Shop.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Status.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){



})();
// ■ END Scene_Status.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Trade.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Scene_Trade;
  Scene_Trade = class Scene_Trade extends Scene_Base {
    constructor() {
      super();
    }

    create() {
      super.create();
      this._loadSettings();
      this._drawSceneBackground();
      this._createMainSprite();
      this._drawWindowBackground();
      this._drawActorsHeaders();
      this._drawActorsNames();
      this._drawActorsPortraits();
      this._createItemsList();
      this._createInputWindow();
      return this._createTradeButtons();
    }

    _loadSettings() {
      this.settings = ANJsonSettings.getTradeWindowSettings()[0];
      return this.S = this.settings;
    }

    _createMainSprite() {
      this._mainSprite = new ANSprite();
      this._mainSprite.moveByJson(this.settings);
      return this.addChild(this._mainSprite);
    }

    _drawSceneBackground() {
      this._backgroundSprite = new Sprite();
      this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
      this._backgroundSprite.setBlendColor(this.S.backgroundBlend);
      return this.addChild(this._backgroundSprite);
    }

    _drawWindowBackground() {
      this._windowBackground1 = ANSprite.FromImg(this.S.windowBackgound);
      this._windowBackground1.move(this.S.windowLeftMarginX, this.S.windowLeftMarginY);
      this._windowBackground2 = ANSprite.FromImg(this.S.windowBackgound);
      this._windowBackground2.move(this.S.windowRightMarginX, this.S.windowRightMarginY);
      this._addToContent(this._windowBackground1);
      return this._addToContent(this._windowBackground2);
    }

    _addToContent(spr) {
      return this._mainSprite.addChild(spr);
    }

    _drawActorsPortraits() {
      this.actorBackgound1 = ANSprite.FromImg(this.S.actorBackgound);
      this.actorBackgound2 = ANSprite.FromImg(this.S.actorBackgound);
      this.actorBackgound1.move(this.S.actorLeftMarginX, this.S.actorLeftMarginY);
      this.actorBackgound2.move(this.S.actorRightMarginX, this.S.actorRightMarginY);
      this._windowBackground1.addChild(this.actorBackgound1);
      this._windowBackground2.addChild(this.actorBackgound2);
      return this._drawActorPortrait();
    }

    _drawActorsHeaders() {
      this.actorHeader1 = ANSprite.FromImg(this.S.actorHeaderBackgound);
      this.actorHeader2 = ANSprite.FromImg(this.S.actorHeaderBackgound);
      this.actorHeader2.scale.x = -1;
      this.actorHeader1.move(this.S.actorHeaderLeftMarginX, this.S.actorHeaderLeftMarginY);
      this.actorHeader2.move(this.S.actorHeaderRightMarginX, this.S.actorHeaderRightMarginY);
      this._windowBackground1.addChild(this.actorHeader1);
      return this._windowBackground2.addChild(this.actorHeader2);
    }

    _drawActorsNames() {
      var s;
      s = this.S.ActorNameText;
      this.actorName1 = ANSprite.FromBitmap(s.textZoneWidth, s.textZoneHeight);
      this.actorName1.applyTextSettingsByExtraSettings(this.actorName1, this.S.ActorNameText);
      this.actorName1.drawTextFull($gameParty.leader().name(), s.position);
      this._windowBackground1.addChild(this.actorName1);
      s = this.S.Actor2NameText;
      this.actorName2 = ANSprite.FromBitmap(s.textZoneWidth, s.textZoneHeight);
      this.actorName2.applyTextSettingsByExtraSettings(this.actorName2, this.S.Actor2NameText);
      this.actorName2.drawTextFull(this._getAnotherActor().name(), s.position);
      return this._windowBackground2.addChild(this.actorName2);
    }

    _getAnotherActor() {
      return $gameActors.actor($gameTemp.netTradeAnotherActorId);
    }

    //TODO: Optim draw face
    _drawActorPortrait() {
      var faceIndex, faceIndex2, faceName, faceName2, loader, loader2;
      this._faceSprite1 = ANSprite.FromBitmap(96);
      this._faceSprite1.move(4, 4);
      this._faceSprite2 = ANSprite.FromBitmap(96);
      this._faceSprite2.move(4, 4);
      faceName = $gameParty.leader()._faceName;
      faceName2 = this._getAnotherActor()._faceName;
      loader = ImageManager.loadFace(faceName);
      loader2 = ImageManager.loadFace(faceName2);
      faceIndex = $gameParty.leader()._faceIndex;
      faceIndex2 = this._getAnotherActor()._faceIndex;
      loader.addLoadListener(() => {
        var dx, dy, height, ph, pw, sh, sw, sx, sy, width, x, y;
        x = y = 0;
        width = Window_Base._faceWidth;
        height = Window_Base._faceHeight;
        pw = Window_Base._faceWidth;
        ph = Window_Base._faceHeight;
        sw = Math.min(width, pw);
        sh = Math.min(height, ph);
        dx = Math.floor(x + Math.max(width - pw, 0) / 2);
        dy = Math.floor(y + Math.max(height - ph, 0) / 2);
        sx = faceIndex % 4 * pw + (pw - sw) / 2;
        sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
        this._faceSprite1.bitmap.blt(loader, sx, sy, sw, sh, dx, dy, 92, 92);
        return this.actorBackgound1.addChild(this._faceSprite1);
      });
      return loader2.addLoadListener(() => {
        var dx, dy, height, ph, pw, sh, sw, sx, sy, width, x, y;
        x = y = 0;
        width = Window_Base._faceWidth;
        height = Window_Base._faceHeight;
        pw = Window_Base._faceWidth;
        ph = Window_Base._faceHeight;
        sw = Math.min(width, pw);
        sh = Math.min(height, ph);
        dx = Math.floor(x + Math.max(width - pw, 0) / 2);
        dy = Math.floor(y + Math.max(height - ph, 0) / 2);
        sx = faceIndex2 % 4 * pw + (pw - sw) / 2;
        sy = Math.floor(faceIndex2 / 4) * ph + (ph - sh) / 2;
        this._faceSprite2.bitmap.blt(loader2, sx, sy, sw, sh, dx, dy, 92, 92);
        return this.actorBackgound2.addChild(this._faceSprite2);
      });
    }

    _createItemsList() {
      var p;
      p = this.S.TradeWindowA;
      this.itemsA = new ANET.LIBS.Window_TradeItemList(p[0], p[1], p[2], p[3], false);
      this.itemsA.activate();
      this.itemsA.setHandler('ok', this.onItemOk.bind(this));
      this.itemsA.onSomethingChangeListener = this.onTradeChange.bind(this);
      this._windowBackground1.addChild(this.itemsA);
      p = this.S.TradeWindowB;
      this.itemsB = new ANET.LIBS.Window_TradeItemList(p[0], p[1], p[2], p[3], true);
      return this._windowBackground2.addChild(this.itemsB);
    }

    _createInputWindow() {
      this.inputWindow = new ANET.LIBS.Window_TradeNumberInput(this.S.TradeInputWindow[0], this.S.TradeInputWindow[1], this);
      return this._windowBackground1.addChild(this.inputWindow);
    }

    _createTradeButtons() {
      var data, img0, img1, img2, img3, imgs, s;
      this._tradeBtn = new AlphaNET.LIBS.Sprite_XButton();
      imgs = this.S.tradeButton;
      img0 = ImageManager.loadNetwork(imgs.mainImg);
      img1 = ImageManager.loadNetwork(imgs.hoverImg);
      img2 = ImageManager.loadNetwork(imgs.pressedImg);
      img3 = ImageManager.loadNetwork(imgs.disabledImg);
      this._tradeBtn.setButtonImages(img0, img1, img2, img3);
      this._tradeBtn.move(this.S.tradeButton.marginX, this.S.tradeButton.marginY);
      //@_tradeBtn.disable()
      this._tradeBtn.addClickHandler(this._tradeButtonClick.bind(this));
      this._tradeBtn.drawStyledTextOnButton(this.S.tradeButton.caption, this.S.tradeButtonStyle.textZoneWidth, this.S.tradeButtonStyle.textZoneHeight, this.settings.tradeButtonStyle);
      this._windowBackground1.addChild(this._tradeBtn);
      data = this.S.tradeButtonHolder;
      this._tradeButtonHolder = ANSprite.FromImg(data.image);
      this._tradeButtonHolder.move(data.marginX, data.marginY);
      s = this.S.tradeButtonHolderText;
      this._tradeButtonHolderText = ANSprite.FromBitmap(s.textZoneWidth, s.textZoneHeight);
      this._tradeButtonHolderText.applyTextSettingsByExtraSettings(this._tradeButtonHolderText, s);
      this._tradeButtonHolderText.drawTextFull(data.caption);
      this._tradeButtonHolder.addChild(this._tradeButtonHolderText);
      return this._windowBackground2.addChild(this._tradeButtonHolder);
    }

    _tradeButtonClick() {
      var items;
      //"TRADE CLICK".p()
      if (Network.isConnected()) {
        items = $gameTemp.netTradeItems.networkData(); // * Финальный вариант вещей
        Network.sendMessage(NetMessage.TradeReady().setData(items));
      }
      return this._tradeBtn.disable();
    }

    onItemOk() {
      if (this.itemsA.isGoldIndex()) {
        this.resetTradeState();
        this.inputWindow.start();
        this.inputWindow.activate();
        return;
      }
      if (this.itemsA.isTradeButtonIndex()) {
        this._tradeButtonClick();
        this.itemsA.activate();
        return;
      } else {
        this.resetTradeState();
        $gameTemp.netTradeItems.setCurrentIndex(this.itemsA.index());
        SceneManager.push(ANET.LIBS.Scene_TradeItemSelect);
        this.itemsA.refresh();
        this.itemsA.activate();
      }
      return this.onTradeChange();
    }

    onInputComplete() {
      this.itemsA.refresh();
      this.itemsA.activate();
      return this.onTradeChange();
    }

    onTradeChange() {
      if (!Network.isConnected()) {
        return;
      }
      //"SEND CHANGES".p()
      $gameTemp.netTradeItems.send();
      return this.resetTradeState();
    }

    resetTradeState() {
      return this._tradeBtn.enable();
    }

    isReadyForTrade() {
      return this._tradeBtn.isDisabled();
    }

    start() {
      if (Network.isConnected()) {
        Network.sendIcon(Network.ICON_TRADE);
      }
      return super.start();
    }

    terminate() {
      return super.terminate();
    }

    update() {
      super.update();
      if (this.inputWindow.active === false) {
        if (Input.isCancel()) {
          this.abortTradeScene();
          this.popScene();
        }
      }
      if ($gameTemp.netTradeNeedAbort === true) {
        Network._clearTradeState();
        return this.popScene();
      }
    }

    abortTradeScene() {
      if (!Network.isConnected()) {
        return;
      }
      //"SEND ABORT".p()
      return Network.sendMessage(NetMessage.AbortTrade());
    }

  };
  ANET.register(Scene_Trade);
})();

// ■ END Scene_Trade.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_TradeItemSelect.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Scene_TradeItemSelect;
  Scene_TradeItemSelect = class Scene_TradeItemSelect extends Scene_Item {
    constructor() {
      super();
    }

    create() {
      return super.create();
    }

    onItemOk() {
      if (this.isEmptyItem()) {
        $gameTemp.netTradeItems.putItem(null);
      } else {
        $gameTemp.netTradeItems.putItem(this.item());
      }
      $gameTemp.netTradeItems.needRefresh(); // * Чтобы изменения отправить на сервер
      return this.popScene();
    }

    isEmptyItem() {
      return (this.item() == null) || this.item().id === 0;
    }

  };
  ANET.register(Scene_TradeItemSelect);
})();

// ■ END Scene_TradeItemSelect.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Manager_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //?[NEW]
    SceneManager.isCurrentSceneIsMap = function () {
        return (this._scene != null && this._scene instanceof Scene_Map);
    };

    //?[NEW]
    SceneManager.isCurrentSceneIsBattle = function () {
        return (this._scene != null && this._scene instanceof Scene_Battle);
    };

    //?[NEW]
    SceneManager.isCurrentSceneIsMenuBased = function () {
        return (this._scene != null && this._scene instanceof Scene_MenuBase);
    };

    //?[NEW]
    SceneManager.safeRefreshCurrentScene = function () {
        try {
            if (this._scene.refresh != null)
                this._scene.refresh();
            if (this._scene.refreshNetwork != null)
                this._scene.refreshNetwork();
            if (this._scene.refreshActor != null)
                this._scene.refreshActor();
        } catch (error) {
            AlphaNET.error(error, 'while try refresh current game scene');
        }
    };
})();
// ■ END Scene_Manager_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////

// Generated by CoffeeScript 2.5.1
ANET.printVersionInfo = function() {
  return ANET.print("[Pro] Build " + ANET.Build + " on MV " + Utils.RPGMAKER_VERSION);
};

ANET.loadFonts = function() {
  var e;
  try {
    if (Utils.isNwjs()) {
      return FontLoadManager.initAndLoadAll();
    }
  } catch (error) {
    e = error;
    return ANET.warning('Font Load Manager', e);
  }
};

ANET.isPro = function() {
  return true;
};

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SMouse.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//@[GLOBAL DEFINITION]

var __SmouseNeedTrack = false;
var __SmousePosition = null;

function SMouse() {
    throw new Error('This is a static class');
}

SMouse.initMouseTrack = function (isSet) {
    document.onmousemove = SMouse.handleMouseMove;
    __SmouseNeedTrack = false;
    __SmousePosition = PointX.Empty;
    if (isSet == true) {
        SMouse.setTrack(true);
    }
};

SMouse.setTrack = function (isSet) {
    __SmouseNeedTrack = isSet;
    if (isSet) this.handleMouseMove(null);
};

SMouse.isTracked = function () {
    return (__SmouseNeedTrack == true);
};

SMouse.handleMouseMoveCanvas = function (canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    __SmousePosition = new PointX(evt.clientX - rect.left, evt.clientY - rect.top);
};

SMouse.handleMouseMove = function (event) {
    if (!__SmouseNeedTrack) return;

    var eventDoc, doc, body;

    event = event || window.event; // IE-ism
    if (!event) return;

    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }

    __SmousePosition = new PointX(event.pageX, event.pageY);
    __SmousePosition = __SmousePosition.convertToCanvas();
};

SMouse.getMousePosition = function () {
    if (!Utils.isMobileDevice())
        return __SmousePosition;
    else
        return PointX.Empty;
};

// ■ END SMouse.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_ActorActionMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_ActorActionMenu;
  Sprite_ActorActionMenu = class Sprite_ActorActionMenu extends ANSprite {
    constructor() {
      super();
      this._create();
      this._main.visible = false;
    }

    _create() {
      this._loadSettings();
      this._createMainSprite();
      this._createMenuItems();
      return this._refreshPlacement();
    }

    _loadSettings() {
      this.settings = ANJsonSettings.getActorActionMenuSettings();
      return this.S = this.settings;
    }

    _createMainSprite() {
      this._main = new Sprite();
      return this.add(this._main);
    }

    _createMenuItems() {
      if (ANET.P.isTradeAllowed()) {
        this._createTradeItem();
      }
      if (Network.isPvPAllowed()) {
        return this._createPvPItem();
      }
    }

    _createTradeItem() {
      var bData, img0, img1, img2;
      this._tradeMain = new Sprite(new Bitmap(32, 32));
      //@_tradeMain.bitmap.fillAll KDCore.Color.BLACK.reAlpha(120)
      bData = this.S.buttons.tradeButton;
      this._tradeBtn = new AlphaNET.LIBS.Sprite_XButton();
      img0 = ImageManager.loadNetwork(bData.mainImg);
      img1 = ImageManager.loadNetwork(bData.hoverImg);
      img2 = ImageManager.loadNetwork(bData.pressedImg);
      this._tradeBtn.setButtonImages(img0, img1, img2);
      this._tradeBtn.addClickHandler(function() {
        return Network.requestTrade();
      });
      this._tradeMain.addChild(this._tradeBtn);
      return this._main.addChild(this._tradeMain);
    }

    _createPvPItem() {
      var bData, img0, img1, img2;
      this._pvpMain = new Sprite(new Bitmap(32, 32));
      //@_pvpMain.bitmap.fillAll KDCore.Color.RED
      bData = this.S.buttons.pvpButton;
      this._pvpBtn = new AlphaNET.LIBS.Sprite_XButton();
      img0 = ImageManager.loadNetwork(bData.mainImg);
      img1 = ImageManager.loadNetwork(bData.hoverImg);
      img2 = ImageManager.loadNetwork(bData.pressedImg);
      this._pvpBtn.setButtonImages(img0, img1, img2);
      this._pvpBtn.addClickHandler(function() {
        return Network.requestPvPBattle();
      });
      this._pvpMain.addChild(this._pvpBtn);
      return this._main.addChild(this._pvpMain);
    }

    _refreshPlacement() {
      if ((this._pvpMain != null) && (this._tradeMain != null)) {
        this._tradeMain.move(this.S.buttons.tradeButton.dx, this.S.buttons.tradeButton.dy);
        return this._pvpMain.move(this.S.buttons.pvpButton.dx, this.S.buttons.pvpButton.dy);
      }
    }

    show() {
      //return if @isActive()
      this._main.opacity = 255;
      this._needReset = false;
      this._opacitySwing = new ANET.LIBS.ValueSwing(this._main, "opacity", 10);
      this._opacitySwing.setIncrementMode();
      this._opacitySwing.start();
      return this._main.visible = true;
    }

    hide() {
      //return unless @isActive()
      this._needReset = true;
      this._opacitySwing = new ANET.LIBS.ValueSwing(this._main, "opacity", 5);
      return this._opacitySwing.start();
    }

    //@_main.visible = false
    close() {
      return this._main.visible = false;
    }

    isActive() {
      return this._main.visible === true;
    }

    isMouseInButtons() {
      var ref, ref1;
      return this._main.visible === true && (((ref = this._tradeBtn) != null ? ref.isMouseInButton() : void 0) || ((ref1 = this._pvpBtn) != null ? ref1.isMouseInButton() : void 0));
    }

    moveToCharacter(netCharIndex) {
      return this.move(netCharIndex.screenX() + this.S.marginX, netCharIndex.screenY() + this.S.marginY);
    }

    update() {
      super.update();
      this._updateSwings();
      return this._updateInput();
    }

    _updateSwings() {
      if (this._opacitySwing == null) {
        return;
      }
      this._opacitySwing.update();
      if (this._opacitySwing.isReady()) {
        this._opacitySwing = null;
        if (this._needReset === true) {
          this._main.visible = false;
          this._main.opacity = 255;
          return this._needReset = false;
        }
      }
    }

    _updateInput() {
      if (this.isActive() === false) {
        return;
      }
      if (Input.isTriggered(ANET.KEYS.TRADE())) {
        if (ANET.P.isTradeAllowed()) {
          Network.requestTrade();
        }
        return;
      }
      if (Input.isTriggered(ANET.KEYS.PVP())) {
        if (ANET.P.isPvPAllowed()) {
          Network.requestPvPBattle();
        }
      }
    }

  };
  ANET.register(Sprite_ActorActionMenu);
})();

// ■ END Sprite_ActorActionMenu.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Sprite_Character_updateBalloon = Sprite_Character.prototype.updateBalloon;
    Sprite_Character.prototype.updateBalloon = function () {
        _alias_Sprite_Character_updateBalloon.call(this, ...arguments);
        this._setupNetworkIcon();
        this._setupNetworkName();
        if (this._networkIconSprite) {
            this._networkIconSprite.x = this.x;
            this._networkIconSprite.y = this.y - this.height;
        }
    };

    //?[NEW]
    Sprite_Character.prototype._setupNetworkIcon = function () {
        var iconId = this._character.networkIconId();
        if (iconId == -1) {
            this._endNetworkIcon();
        }
        if (iconId > 0) {
            this._startNetworkIcon();
            this._character._startNetworkIcon();
        }
    };

    //?[NEW]
    Sprite_Character.prototype._startNetworkIcon = function () {
        if (!this._networkIconSprite) {
            this._networkIconSprite = new AlphaNET.LIBS.Sprite_NetStatusIcon();
        }
        this._networkIconSprite.setup(this._character.networkIconId());
        this.parent.addChild(this._networkIconSprite);
    };

    //?[NEW]
    Sprite_Character.prototype._endNetworkIcon = function () {
        if (this._networkIconSprite) {
            this.parent.removeChild(this._networkIconSprite);
            this._networkIconSprite = null;
        }
    };

    //?[NEW]
    Sprite_Character.prototype._setupNetworkName = function () {
        if(!Network.isConnected()) return;
        if (AlphaNET.Parameters.get_ShowNameplatesMode() == 0) return;
        if (this._character.getNetworkName() == null){
            this._destroyNetworkName();
            return;
        } 
        if(!this._networkNameSprite) {
            this._createNetworkName();
        }
        this._refreshNetworkName();
    };

    //?[NEW]
    Sprite_Character.prototype._destroyNetworkName = function () {
        if (this._networkNameSprite) {
            "DESTROY NAME".p();
            this.parent.removeChild(this._networkNameSprite);
            this._networkNameSprite = null;
        }
    };

    //?[NEW]
    Sprite_Character.prototype._createNetworkName = function () {
        this._networkNameSprite = new AlphaNET.LIBS.Sprite_NetCharName();
        this._networkNameSprite.setCharacter(this._character);
        this.parent.addChild(this._networkNameSprite);
    };

    //?[NEW]
    Sprite_Character.prototype._refreshNetworkName = function () {
        this._networkNameSprite.visible = (this._networkIconSprite == null);
        if(this._networkNameSprite.visible == true)
            this._networkNameSprite.visible = !this._character.isTransparent();
        this._networkNameSprite.x = this.x;
        this._networkNameSprite.y = this.y - this.height;
    };

    //?[NEW]
    Sprite_Character.prototype.refreshForNetwork = function () {
        this._destroyNetworkName(); // * Обновляем Nameplate
    };
})();
// ■ END Sprite_Character.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_NetCharName.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_NetCharName;
  Sprite_NetCharName = class Sprite_NetCharName extends Sprite {
    constructor() {
      super();
      this.anchor.x = 0.5;
      this.anchor.y = 1;
      this.z = 12;
    }

    setCharacter(character) {
      this.character = character;
      this._setupStyle();
      this._createBitmap();
      this._drawBackGround();
      this._drawPicture();
      return this._drawName();
    }

    _setupStyle() {
      var charStyleId, style;
      charStyleId = this.character.getNetworkNameStyleId();
      if (charStyleId != null) {
        style = ANJsonSettings.getNamePlateDataForId(charStyleId);
      } else {
        style = null;
      }
      return this._loadStyle(style);
    }

    _loadStyle(style) {
      if (style == null) {
        style = this._getDefaultData();
      }
      return this._style = style;
    }

    _createBitmap() {
      return this.bitmap = new Bitmap(this._style.width, this._style.height);
    }

    _drawBackGround() {
      var colorA, colorB;
      try {
        if (this._style.backgroundColor == null) {
          return;
        }
        colorA = KDCore.Color.FromHex(this._style.backgroundColor.colorA);
        colorB = KDCore.Color.FromHex(this._style.backgroundColor.colorB);
        if (colorA == null) {
          colorA = KDCore.Color.BLACK;
        }
        if (colorB == null) {
          colorB = colorA;
        }
        colorA = colorA.reAlpha(this._style.backgroundColorOpacity);
        colorB = colorB.reAlpha(this._style.backgroundColorOpacity);
        return this.bitmap.gradientFillRect(0, 0, this.width, this.height, colorA.CSS, colorB.CSS, true);
      } catch (error) {
        return AlphaNET.warning("Wrong Character Name background color");
      }
    }

    _drawPicture() {
      var pic;
      if (this._style.backPicture == null) {
        return;
      }
      try {
        pic = new Sprite(ImageManager.loadPicture(this._style.backPicture));
        pic.anchor.x = 0.5;
        pic.anchor.y = 1;
        return this.addChild(pic);
      } catch (error) {
        return AlphaNET.warning("Wrong Character Name background Picture");
      }
    }

    _drawName() {
      var name, text;
      name = this.character.getNetworkName();
      text = new Sprite(new Bitmap(this.width, this.height));
      this._setupText(text.bitmap);
      text.bitmap.drawText(name, 0, this.height / 2, this.width, 1, 'center');
      text.anchor.x = 0.5;
      text.anchor.y = 1;
      return this.addChild(text);
    }

    _setupText(bitmap) {
      try {
        bitmap.fontSize = this._style.textSize;
        if ((this._style.textColor != null)) {
          bitmap.textColor = KDCore.Color.FromHex(this._style.textColor).CSS;
        }
        if ((this._style.textOutColor != null)) {
          bitmap.outlineColor = KDCore.Color.FromHex(this._style.textOutColor).CSS;
        }
        bitmap.outlineWidth = this._style.textOutWidth;
        if (this._style.textFont != null) {
          bitmap.fontFace = this._style.textFont;
        }
        return bitmap.fontItalic = this._style.textItalic;
      } catch (error) {
        return AlphaNET.warning("Wrong Character Name Text settings");
      }
    }

    _getDefaultData() {
      return {
        backgroundColor: {
          colorA: "#000000",
          colorB: "#000000"
        },
        backgroundColorOpacity: 100,
        backPicture: null,
        width: 54,
        height: 18,
        textSize: 12,
        textFont: null,
        textColor: null,
        textOutColor: null,
        textOutWidth: 3,
        textItalic: false
      };
    }

  };
  AlphaNET.register(Sprite_NetCharName);
})();

// ■ END Sprite_NetCharName.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_NetStatusIcon.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_NetStatusIcon;
  Sprite_NetStatusIcon = class Sprite_NetStatusIcon extends Sprite_Balloon {
    constructor() {
      super();
    }

    loadBitmap() {
      this.bitmap = ImageManager.loadNetwork('StateIcons');
      return this.setFrame(0, 0, 0, 0);
    }

    setup(iconId) {
      this._balloonId = iconId;
      return this._duration = 5 * this.speed() + this.waitTime();
    }

    update() {
      super.update();
      if (this._duration <= 0) {
        this._firstStep = true;
        return this.setup(this._balloonId);
      }
    }

    frameIndex() {
      var frameIndex, index;
      index = (this._duration - this.waitTime()) / this.speed();
      frameIndex = 4 - Math.max(Math.floor(index), 0);
      if (this._firstStep == null) {
        return frameIndex;
      } else {
        if (frameIndex === 0) {
          return 1;
        } else {
          return frameIndex;
        }
      }
    }

  };
  AlphaNET.register(Sprite_NetStatusIcon);
})();

// ■ END Sprite_NetStatusIcon.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AXUI_Container.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//@[PART OF Alpha ABS AXUI]
(function() {
  var UIContainer;
  UIContainer = class UIContainer extends Sprite {
    constructor(size) {
      super(new Bitmap(size, size));
      this.size = size;
      this.items = [];
      this.orientation = "horizontal";
      this.placePoint = "rigth";
      this.itemsCount = 1;
      this.spacing = 0;
      this.move(100, 100);
    }

    //?{PUBLIC}
    setItemsCount(itemsCount) {
      this.itemsCount = itemsCount;
      return this._refreshMain();
    }

    _refreshMain() {
      var s;
      s = this._getSize() * this.itemsCount;
      this.bitmap = new Bitmap(s, s);
      this._rearrange();
      return this._refreshPlace();
    }

    _getSize() {
      return this.size + this.spacing;
    }

    //?{PUBLIC}
    setSpacing(spacing) {
      this.spacing = spacing;
      return this._refreshMain();
    }

    //?{PUBLIC}
    addChild(sprite) {
      this._createItem(sprite);
      this._rearrange();
      return this._refreshPlace();
    }

    _createItem(sprite) {
      this._reCreatePlacer(sprite.visible);
      this.items.push(sprite);
      return this._placer.addChild(sprite);
    }

    _reCreatePlacer(isNew) {
      var pl, s, visLen;
      if (this._placer != null) {
        super.removeChild(this._placer);
      }
      visLen = this._visItemsLength();
      if (isNew === true) {
        visLen += 1;
      }
      s = this._getSize() * visLen;
      s -= this.spacing;
      this._placer = new Sprite(new Bitmap(s, s));
      super.addChild(this._placer);
      pl = this._placer;
      this.items.forEach(function(item) {
        if (item.visible === true) {
          return pl.addChild(item);
        }
      });
    }

    _visItemsLength() {
      var count, i, j, ref;
      count = 0;
      for (i = j = 0, ref = this.items.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
        if (this.items[i].visible === true) {
          count++;
        }
      }
      return count;
    }

    _rearrange() {
      var ref, ref1;
      if (this._placer == null) {
        return;
      }
      if ((ref = this._placer.children[0]) != null) {
        ref.x = 0;
      }
      if ((ref1 = this._placer.children[0]) != null) {
        ref1.y = 0;
      }
      if (this.isVertical()) {
        return this._rearrangeVertical();
      } else {
        return this._rearrangeHorizontal();
      }
    }

    _rearrangeVertical() {
      var i, items, j, ref, results, s;
      items = this._placer.children;
      s = this._getSize();
      results = [];
      for (i = j = 1, ref = items.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
        results.push(items[i].y = items[0].y + (s * i));
      }
      return results;
    }

    _rearrangeHorizontal() {
      var i, items, j, ref, results, s;
      items = this._placer.children;
      s = this._getSize();
      results = [];
      for (i = j = 1, ref = items.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
        results.push(items[i].x = items[0].x + (s * i));
      }
      return results;
    }

    _refreshPlace() {
      if (this._placer == null) {
        return;
      }
      if (this.isVertical()) {
        return this._refreshPlaceVertical();
      } else {
        return this._refreshPlaceHorizontal();
      }
    }

    _refreshPlaceVertical() {
      if (this.placePoint === "center") {
        this._placer.y = this.height / 2;
        this._placer.y = this._placer.y - (this._placer.height / 2);
      }
      if (this.placePoint === "left") {
        this._placer.y = this.height;
        return this._placer.y = this._placer.y - this._placer.height;
      }
    }

    _refreshPlaceHorizontal() {
      if (this.placePoint === "center") {
        this._placer.x = this.width / 2;
        this._placer.x = this._placer.x - (this._placer.width / 2);
      }
      if (this.placePoint === "left") {
        this._placer.x = this.width;
        return this._placer.x = this._placer.x - this._placer.width;
      }
    }

    //?{PUBLIC}
    refresh() {
      this._reCreatePlacer(false);
      this._rearrange();
      return this._refreshPlace();
    }

    //?{PUBLIC}
    setHorizontal() {
      this.orientation = "horizontal";
      this._rearrange();
      return this._refreshPlace();
    }

    //?{PUBLIC}
    isHorizontal() {
      return this.orientation === "horizontal";
    }

    //?{PUBLIC}
    setVertical() {
      this.orientation = "vertical";
      this._rearrange();
      return this._refreshPlace();
    }

    
      //?{PUBLIC}
    isVertical() {
      return this.isHorizontal() === false;
    }

    
      //?{PUBLIC}
    setPivotToCenter() {
      this.placePoint = "center";
      return this._refreshPlace();
    }

    
      //?{PUBLIC}
    setPivotToLeft() {
      this.placePoint = "left";
      return this._refreshPlace();
    }

    
      //?{PUBLIC}
    setPivotToRight() {
      this.placePoint = "right";
      return this._refreshPlace();
    }

  };
  AlphaNET.register(UIContainer);
})();

// ■ END AXUI_Container.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_WaitNetwork.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_WaitNetwork;
  Sprite_WaitNetwork = (function() {
    class Sprite_WaitNetwork extends Sprite {
      constructor() {
        super(new Bitmap(Graphics.width, Sprite_WaitNetwork.HEIGHT));
        this._waitId = 0;
        this._stepper = 0;
        this.move(0, (Graphics.height / 2) - Sprite_WaitNetwork.HEIGHT / 2);
        this.hide();
      }

      isActive() {
        return this.visible === true && (this.parent != null);
      }

      activate(waitId) {
        this.bitmap.clear();
        this._waitId = waitId;
        this.visible = true;
        return this._drawMain();
      }

      //@_startThread()
      hide() {
        return this.visible = false;
      }

      _drawMain() {
        var prefix, text;
        this.bitmap.clear();
        this.bitmap.fontSize = 38;
        this.bitmap.textColor = KDCore.Color.RED.CSS;
        this.bitmap.fillAll(Sprite_WaitNetwork.colorA);
        text = this._getText();
        prefix = ''; //@_getPrefix()
        return this.bitmap.drawText(text + prefix, 0, Sprite_WaitNetwork.HEIGHT / 2, Graphics.width, 1, 'center');
      }

      _getText() {
        if (this._waitId === Network.WAIT_PLAYER) {
          return 'Waiting players';
        }
        return 'Waiting server';
      }

      _getPrefix() {
        var i, j, prefix, ref;
        prefix = "";
        this._stepper += 1;
        for (i = j = 0, ref = this._stepper; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
          prefix += '.';
        }
        if (this._stepper > 2) {
          this._stepper = 0;
        }
        return prefix;
      }

      _startThread() {
        var updPrefix;
        return setTimeout((updPrefix = () => {
          this._drawMain();
          if (this.isActive()) {
            return setTimeout(updPrefix.bind(this), 200);
          }
        }), 200);
      }

    };

    Sprite_WaitNetwork.HEIGHT = 100;

    Sprite_WaitNetwork.colorA = KDCore.Color.BLACK.reAlpha(100);

    return Sprite_WaitNetwork;

  }).call(this);
  AlphaNET.register(Sprite_WaitNetwork);
})();

// ■ END Sprite_WaitNetwork.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_WaitNetworkMini.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_WaitNetworkMini;
  Sprite_WaitNetworkMini = (function() {
    class Sprite_WaitNetworkMini extends Sprite {
      constructor() {
        super(new Bitmap(Sprite_WaitNetworkMini.WIDTH, Sprite_WaitNetworkMini.HEIGHT));
        this._stepper = false;
        this.hide();
      }

      isActive() {
        return this.visible === true && (this.parent != null);
      }

      activate() {
        this.bitmap.clear();
        this.visible = true;
        return this._startThread();
      }

      hide() {
        return this.visible = false;
      }

      _drawMain() {
        var prefix;
        this.bitmap.clear();
        this.bitmap.fontSize = 12;
        this.bitmap.textColor = KDCore.Color.RED.CSS;
        this.bitmap.gradientFillRect(0, 0, Sprite_WaitNetworkMini.WIDTH, 20, Sprite_WaitNetworkMini.colorA.CSS, Sprite_WaitNetworkMini.colorB.CSS, false);
        prefix = this._getPrefix();
        return this.bitmap.drawText('NetSync ' + prefix, 2, 10, Sprite_WaitNetworkMini.WIDTH, 1, 'center');
      }

      _getPrefix() {
        var prefix;
        prefix = "\\";
        this._stepper = !this._stepper;
        if (this._stepper === true) {
          prefix = "/";
        }
        return prefix;
      }

      _startThread() {
        var updPrefix;
        return setTimeout((updPrefix = () => {
          this._drawMain();
          if (this.isActive()) {
            return setTimeout(updPrefix.bind(this), 200);
          }
        }), 400);
      }

    };

    Sprite_WaitNetworkMini.WIDTH = 90;

    Sprite_WaitNetworkMini.HEIGHT = 20;

    Sprite_WaitNetworkMini.colorA = KDCore.Color.BLACK.reAlpha(180);

    Sprite_WaitNetworkMini.colorB = KDCore.Color.NONE;

    return Sprite_WaitNetworkMini;

  }).call(this);
  AlphaNET.register(Sprite_WaitNetworkMini);
})();

// ■ END Sprite_WaitNetworkMini.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ XButton.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//?VERSION 1.2
(function() {
  var Sprite_XButton;
  Sprite_XButton = class Sprite_XButton extends Sprite {
    constructor() {
      super();
      this._mouseIn = false;
      this._touching = false;
      this._slowUpdateActive = false;
      this._localMode = false;
      this._images = [];
      this._checkAlpha = false;
      this._textSprite = null;
      this._textPosition = 0;
      this._override = false; // * TouchClick in game messages not work anymore if TRUE
      this._clickHandlers = [];
      this._manualHided = false;
      this._manualDisabled = false;
      this._condition = null; // * Условие для Visible
      this._condition2 = null; // * Условие для Enable \ Disable
      this._disabled = false;
      this._infoData = null;
      this._isNeedShowText = false;
    }

    isMouseInButton() {
      return this._mouseIn === true;
    }

    isActive() {
      return Sprite_Button.prototype.isActive.call(this);
    }

    activateSlowUpdate() {
      return this._slowUpdateActive = true;
    }

    setLocalMode() {
      this._realX = this.x;
      this._realY = this.y;
      return this._localMode = true;
    }

    setAlphaMode() {
      return this._checkAlpha = true;
    }

    // * above, below
    setTextPosition(position) {
      return this._textPosition = position;
    }

    setHelpText(text, size) {
      return this._createText(text, size);
    }

    setInfoData(data) {
      return this._infoData = data;
    }

    setOverrideMode() {
      return this._override = true;
    }

    isOverride() {
      return this._override === true && this.isActive() && this.touchInButton();
    }

    isDisabled() {
      return this._disabled === true;
    }

    isNeedShowText() {
      return this._isNeedShowText === true;
    }

    addClickHandler(method) {
      return this._clickHandlers.push(method);
    }

    isLocalMode() {
      return this._localMode === true;
    }

    setCondition(method) {
      return this._condition = method;
    }

    setConditionForDisable(method) {
      return this._condition2 = method;
    }

    getInfoData() {
      return this._infoData;
    }

    realX() {
      if (this.isLocalMode()) {
        return this._realX;
      } else {
        return this.x;
      }
    }

    realY() {
      if (this.isLocalMode()) {
        return this._realY;
      } else {
        return this.y;
      }
    }

    show() {
      this.visible = true;
      return this._manualHided = false;
    }

    hide() {
      this.visible = false;
      return this._manualHided = true;
    }

    disable() {
      this._disabled = true;
      this._manualDisabled = true;
      return this.refreshEnDisState();
    }

    enable() {
      this._disabled = false;
      this._manualDisabled = false;
      return this.refreshEnDisState();
    }

    update() {
      super.update();
      this.updateMouseClick();
      this.updatePosition();
      if (!this._slowUpdateActive) {
        this.slowUpdate();
      }
      return this.updateComplexTextVisible();
    }

    slowUpdate() {
      this.updateMouseTracking();
      this.updateConditionForVisible();
      return this.updateConditionForEnabling();
    }

    updateMouseTracking() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this._cursorInButton()) {
        this._onMouseEnter();
        return this._mouseIn = true;
      } else {
        this._onMouseLeave();
        return this._mouseIn = false;
      }
    }

    _cursorInButton() {
      var m;
      m = __SmousePosition;
      if (m != null) {
        return this.xyInButton(m.x, m.y);
      } else {
        return false;
      }
    }

    xyInButton(x, y) {
      var inRect, rx, ry;
      rx = Sprite_Button.prototype.canvasToLocalX.call(this, x);
      ry = Sprite_Button.prototype.canvasToLocalY.call(this, y);
      inRect = rx >= 0 && ry >= 0 && rx < this._realWidth() && ry < this._realHeight();
      if (inRect === true && this._checkAlpha === true) {
        return this._checkAlphaPixel(rx, ry);
      } else {
        return inRect;
      }
    }

    _realWidth() {
      if (this._hasImage()) {
        return this._mainImage().width;
      } else {
        return this.width;
      }
    }

    _hasImage() {
      return this._mainImage() != null;
    }

    _mainImage() {
      return this._images[0];
    }

    _realHeight() {
      if (this._hasImage()) {
        return this._mainImage().height;
      } else {
        return this.height;
      }
    }

    _checkAlphaPixel(x, y) {
      var pixel;
      pixel = this._hasImage() ? this._mainImage().bitmap.getAlphaPixel(x, y) : this.bitmap.getAlphaPixel(x, y);
      return pixel === 255;
    }

    _onMouseEnter() {
      if (this._mouseIn === true) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyCoverState();
      }
      this._showText();
      if (this.getInfoData() != null) {
        return this._startComplexTimer();
      }
    }

    _onMouseLeave() {
      if (this._mouseIn === false) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyNormalState();
      }
      this._hideText();
      return this._stopComplexTimer();
    }

    _showText() {
      if (this._textSprite == null) {
        return;
      }
      this._updateTextPosition();
      return this._textSprite.visible = true;
    }

    _hideText() {
      if (this._textSprite == null) {
        return;
      }
      return this._textSprite.visible = false;
    }

    _startComplexTimer() {
      this._stopComplexTimer();
      return this._cTimer = setTimeout((() => {
        if (this._mouseIn === true) {
          return this._isNeedShowText = true;
        }
      }), 1000);
    }

    _stopComplexTimer() {
      if (this._cTimer != null) {
        clearTimeout(this._cTimer);
      }
      return this._isNeedShowText = false;
    }

    updateMouseClick() {
      if (!this.isActive()) {
        this._unTouch();
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.touchInButton()) {
        this._touching = true;
        this.applyClickedState();
      }
      if (this._touching === true) {
        if (TouchInput.isReleased() || !this.touchInButton()) {
          this._unTouch();
          if (TouchInput.isReleased()) {
            return this.callClickHandler();
          }
        }
      }
    }

    _unTouch() {
      this._touching = false;
      if (this.touchInButton()) {
        return this.applyCoverState();
      } else {
        return this.applyNormalState();
      }
    }

    touchInButton() {
      return this.xyInButton(TouchInput.x, TouchInput.y);
    }

    callClickHandler() {
      if (this._clickHandlers.length > 0) {
        return this._clickHandlers.forEach(function(method) {
          return method();
        });
      }
    }

    updatePosition() {
      var p;
      if (!this._localMode) {
        return;
      }
      p = new PointX(this._realX, this._realY);
      return this.move(p.screenX(), p.screenY());
    }

    updateConditionForVisible() {
      var result;
      if (this._condition == null) {
        return;
      }
      if (this._manualHided === true) {
        return;
      }
      try {
        result = this._condition();
        return this.visible = !result;
      } catch (error) {
        console.warning('wrong condition in button');
        return this.visible = true;
      }
    }

    updateConditionForEnabling() {
      if (!this._condition2) {
        return;
      }
      if (this._manualDisabled === true) {
        return;
      }
      try {
        this._disabled = this._condition2();
        return this.refreshEnDisState();
      } catch (error) {
        console.warning('wrong condition in button for enable state');
        return this.disable();
      }
    }

    setButtonImages(img1, img2, img3, img4) {
      this._images = [new Sprite(img1), img2 != null ? new Sprite(img2) : void 0, img3 != null ? new Sprite(img3) : void 0, img4 != null ? new Sprite(img4) : void 0];
      this._images.forEach((img) => {
        if (img != null) {
          return this.addChild(img);
        }
      });
      return this.applyNormalState();
    }

    applyNormalState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[0]) != null ? ref.visible = true : void 0;
    }

    refreshImages() {
      return this._images.forEach(function(img) {
        return img != null ? img.visible = false : void 0;
      });
    }

    applyCoverState() {
      this.refreshImages();
      if (this._images[1] != null) {
        return this._images[1].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    applyClickedState() {
      this.refreshImages();
      if (this._images[2] != null) {
        return this._images[2].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    _createText(text, size) {
      var h, w;
      if (this._textSprite) {
        this.removeChild(this._textSprite);
      }
      w = Math.round(((size / 10) + 1) * 5 * text.length);
      h = size + 4;
      this._textSprite = new Sprite(new Bitmap(w, h));
      this._textSprite.bitmap.fontSize = size;
      this._textSprite.bitmap.drawText(text, 0, h / 2, w, 1, 'center');
      this._textSprite.visible = false;
      return this.addChild(this._textSprite);
    }

    _updateTextPosition() {
      var nx, ny;
      if (!this._textSprite) {
        return;
      }
      nx = this._realWidth() / 2 - this._textSprite.width / 2;
      if (this._textPosition === 0) {
        ny = -this._textSprite.height;
      } else {
        ny = this._realHeight() + this._textSprite.height / 2;
      }
      return this._textSprite.move(nx, ny);
    }

    applyDisableState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[3]) != null ? ref.visible = true : void 0;
    }

    refreshEnDisState() {
      if (this.isDisabled()) {
        return this.applyDisableState();
      } else {
        return this.applyNormalState();
      }
    }

    updateComplexTextVisible() {}

    drawStyledTextOnButton(text, w, h, style) {
      this._styledText = ANSprite.FromBitmap(w, h);
      this._styledText.applyTextSettingsByExtraSettings(this._styledText, style);
      this._styledText.drawTextFull(text, style.position);
      return this.addChild(this._styledText);
    }

  };
  AlphaNET.register(Sprite_XButton);
})();

// ■ END XButton.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SpriteChatLine.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var SpriteChatLine;
  SpriteChatLine = class SpriteChatLine extends ANSprite {
    constructor() {
      super();
      this._create();
    }

    _create() {
      this._loadSettings();
      this._createBackground();
      this._createChannelText();
      this._createNameText();
      return this._createText();
    }

    _loadSettings() {
      this.settings = ANJsonSettings.getChatSettings()[2];
      return this.S = this.settings;
    }

    _createBackground() {
      this._background = ANSprite.FromBitmap(this.S.chatLineWidth, this.S.chatLineHeight);
      this._background.bitmap.fillAll(KDCore.Color.FromHex(this.S.background.color));
      this._background.opacity = this.S.background.opacity;
      return this.addChild(this._background);
    }

    _createChannelText() {
      this._channel = ANSprite.FromBitmap(this.S.channelText.textZoneWidth, this.S.channelText.textZoneHeight);
      this.applyTextSettingsByExtraSettings(this._channel, this.S.channelText);
      return this.addChild(this._channel);
    }

    _createNameText() {
      this._name = ANSprite.FromBitmap(this.S.nameText.textZoneWidth, this.S.nameText.textZoneHeight);
      this.applyTextSettingsByExtraSettings(this._name, this.S.nameText);
      return this.addChild(this._name);
    }

    _createText() {
      this._textSpr = ANSprite.FromBitmap(this.S.text.textZoneWidth, this.S.text.textZoneHeight);
      this.applyTextSettingsByJson(this._textSpr, this.S);
      return this.addChild(this._textSpr);
    }

    drawName(text, color) {
      if (!this._name) {
        return;
      }
      this._name.bitmap.clear();
      if (color != null) {
        this._name.bitmap.textColor = color;
      }
      return this._name.bitmap.drawTextFull(text, this.S.nameText.position);
    }

    drawChannel(text, color) {
      if (this._channel == null) {
        return;
      }
      this._channel.bitmap.clear();
      if (color != null) {
        this._channel.bitmap.textColor = color;
      }
      return this._channel.bitmap.drawTextFull('[' + text + ']', this.S.channelText.position);
    }

    drawText(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.bitmap.clear();
      return this._textSpr.bitmap.drawTextFull(text, this.S.text.position);
    }

    moveTo(dx) {
      this._needMove = dx;
      return this.move(-this.S.chatLineWidth, this.y);
    }

    moveUp(dy) {
      return this.move(this.x, this.y - dy);
    }

    changeBackOpacity() {
      return this._background.opacity = this.S.background.opacityInQueue;
    }

    update() {
      super.update();
      if (this._needMove != null) {
        this.x += 10;
        if (this.x >= this._needMove) {
          this.x = this._needMove;
          return this._needMove = null;
        }
      }
    }

  };
  AlphaNET.register(SpriteChatLine);
})();

// ■ END SpriteChatLine.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SpriteChatMain.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var SpriteChatMain;
  SpriteChatMain = class SpriteChatMain extends ANSprite {
    constructor() {
      super();
      this._isOpen = false;
      this._inOpenMode = false;
      this._create();
    }

    _create() {
      this._loadSettings();
      this._createMovable();
      this._createBackground();
      this._createContent();
      this._createShowButton();
      this._createSayButton();
      this._createBorder();
      return this.moveByJson(this.settings);
    }

    _loadSettings() {
      this.settings = ANJsonSettings.getChatSettings()[0];
      this.S = this.settings;
      return this._hideDX = this.settings.lineStartPositionX;
    }

    _createMovable() {
      this._movableSprite = new Sprite();
      this._movableSprite.move(this._hideDX, 0);
      return this.addChild(this._movableSprite);
    }

    _createBackground() {
      this._background = ANSprite.FromBitmap(this.S.background.width, this.S.background.heigth);
      this._background.bitmap.fillAll(KDCore.Color.FromHex(this.S.background.color));
      this._background.opacity = this.S.background.opacity;
      return this._movableSprite.addChild(this._background);
    }

    _createContent() {
      this._chatContent = new Sprite();
      this._chatContent.visible = false;
      return this._movableSprite.addChild(this._chatContent);
    }

    _createShowButton() {
      var _s, img0, img1, img2;
      _s = this.S.buttons.showChatButton;
      this._showBtn = new AlphaNET.LIBS.Sprite_XButton();
      img0 = ImageManager.loadNetwork(_s.mainImg);
      img1 = ImageManager.loadNetwork(_s.hoverImg);
      img2 = ImageManager.loadNetwork(_s.pressedImg);
      this._showBtn.setButtonImages(img0, img1, img2);
      this._showBtn.move(_s.marginX, _s.marginY);
      this._showBtn.addClickHandler(this._showButtonClick.bind(this));
      return this._movableSprite.addChild(this._showBtn);
    }

    _createSayButton() {
      var _s, img0, img1, img2;
      _s = this.S.buttons.sayButton;
      this._sayBtn = new AlphaNET.LIBS.Sprite_XButton();
      img0 = ImageManager.loadNetwork(_s.mainImg);
      img1 = ImageManager.loadNetwork(_s.hoverImg);
      img2 = ImageManager.loadNetwork(_s.pressedImg);
      this._sayBtn.setButtonImages(img0, img1, img2);
      this._sayBtn.move(_s.marginX, _s.marginY);
      this._sayBtn.addClickHandler(function() {
        return SceneManager.push(ANET.LIBS.Scene_ChatInput);
      });
      return this._movableSprite.addChild(this._sayBtn);
    }

    _createBorder() {
      this._chatBorder = new AlphaNET.LIBS.SpriteChatMini();
      return this.addChild(this._chatBorder);
    }

    _showButtonClick() {
      if (this.isOpen()) {
        return this.close();
      } else {
        return this.open();
      }
    }

    open() {
      if (this.isOpen()) {
        return;
      }
      if (this.isAnimated()) {
        return;
      }
      this._chatContent.visible = true;
      this.drawNotify(0);
      this.hideNotify();
      this._inOpenMode = true;
      this._tempObject = { // * Так как ValueSwing не умеет работать с отрицательными числами (TODO: ИСПРАВИТЬ!)
        x: Math.abs(this._movableSprite.x)
      };
      this._animator = new AlphaNET.LIBS.ValueSwing(this._tempObject, "x", 30);
      return this._animator.start();
    }

    drawNotify(text = '0') {
      return this._chatBorder.drawText(text);
    }

    hideNotify() {
      return this._chatBorder.hideNotify();
    }

    close() {
      if (!this.isOpen()) {
        return;
      }
      if (this.isAnimated()) {
        return;
      }
      this._movableSprite.opacity = 255;
      this.drawNotify(0);
      this._inOpenMode = false;
      this._tempObject = {
        x: Math.abs(this._hideDX)
      };
      this._animator = new AlphaNET.LIBS.ValueSwing(this._tempObject, "x", 30);
      this._animator.setIncrementMode();
      return this._animator.start();
    }

    isAnimated() {
      return this._animator != null;
    }

    isOpen() {
      return this._isOpen === true;
    }

    isUnderTouch() {
      return this._background.inPosition(TouchInput) || this._chatBorder.isUnderTouch(TouchInput) || this._sayBtn.touchInButton() || this._showBtn.touchInButton();
    }

    update() {
      super.update();
      this._updateAnimator();
      if (this.isOpen()) {
        return this._updateOpacityChange();
      }
    }

    _updateAnimator() {
      if (this._animator != null) {
        this._movableSprite.x = 0 - this._tempObject.x;
        this._animator.update();
        if (this._animator.isReady()) {
          this._animator = null;
          return this._resetAfterAnimation();
        }
      }
    }

    _resetAfterAnimation() {
      if (this._inOpenMode === true) {
        this._movableSprite.x = 0;
        return this._isOpen = true;
      } else {
        this._chatBorder.showNofity();
        this._movableSprite.x = this._hideDX;
        this._isOpen = false;
        this._chatContent.visible = false;
        return this._movableSprite.opacity = 255;
      }
    }

    _updateOpacityChange() {
      var pos;
      if (this.isAnimated()) {
        return;
      }
      pos = __SmousePosition;
      if (this._background.inPosition(pos)) {
        this._isHovered = true;
        return this._createOpacitySwing();
      } else {
        if (this._isHovered === true) {
          return this._createOpacitySwing2();
        }
      }
    }

    _createOpacitySwing() {
      if (this._movableSprite.opacity < 255) {
        return this._movableSprite.opacity += 4;
      }
    }

    _createOpacitySwing2() {
      if (this._movableSprite.opacity > this.S.unhoveredChatOpacity) {
        this._movableSprite.opacity -= 4;
      }
      if (this._movableSprite.opacity <= this.S.unhoveredChatOpacity) {
        return this._isHovered === false;
      }
    }

    addChatLine(chatLine) {
      var ref;
      return (ref = this._chatContent) != null ? ref.addChild(chatLine) : void 0;
    }

    removeLine(chatLine) {
      var ref;
      return (ref = this._chatContent) != null ? ref.removeChild(chatLine) : void 0;
    }

  };
  AlphaNET.register(SpriteChatMain);
})();

// ■ END SpriteChatMain.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SpriteChatMini.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var SpriteChatMini;
  SpriteChatMini = class SpriteChatMini extends ANSprite {
    constructor() {
      super();
      this._create();
    }

    _create() {
      this._loadSettings();
      this._createMainSprite();
      this._createNotifyCircle();
      return this._createNotifyText();
    }

    _loadSettings() {
      this.settings = ANJsonSettings.getChatSettings()[1];
      return this.S = this.settings;
    }

    _createMainSprite() {
      this._border = ANSprite.FromImg(this.settings.miniBorderImage);
      this.addChild(this._border);
      return this._border.move(this.S.miniBorderMarginX, this.S.miniBorderMarginY);
    }

    _createNotifyCircle() {
      this._notifyIcon = ANSprite.FromImg(this.settings.notifyIconImage);
      this.addChild(this._notifyIcon);
      return this._notifyIcon.move(this.S.notifyIconMarginX, this.S.notifyIconMarginY);
    }

    _createNotifyText() {
      this._textSpr = ANSprite.FromBitmap(this.S.text.textZoneWidth, this.S.text.textZoneHeight);
      this.applyTextSettingsByJson(this._textSpr, this.settings);
      this._notifyIcon.addChild(this._textSpr);
      return this.drawText('0');
    }

    drawText(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.bitmap.clear();
      return this._textSpr.bitmap.drawTextFull(text, this.S.text.position);
    }

    hideNotify() {
      return this._notifyIcon.visible = false;
    }

    showNofity() {
      return this._notifyIcon.visible = true;
    }

    isUnderTouch(point) {
      return this._border.inPosition(point);
    }

  };
  AlphaNET.register(SpriteChatMini);
})();

// ■ END SpriteChatMini.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Spriteset_Map_update = Spriteset_Map.prototype.update;
    Spriteset_Map.prototype.update = function () {
        _alias_Spriteset_Map_update.call(this, ...arguments);
        this._updateNetworkRefreshRequest();
    };

    //?[NEW]
    Spriteset_Map.prototype._updateNetworkRefreshRequest = function () {
        if ($gameMap.isSpritesRefreshRequestedForNetwork()) {
            $gameMap.spritesRefreshForNetworkComplete();
            "REFRESH SPRITEST".p();
            for (var i = 0; i < this._characterSprites.length; i++) {
                var sprite = this._characterSprites[i];
                if (sprite != null) {
                    sprite.refreshForNetwork();
                }
            }
        }
    };
})();
// ■ END Spriteset_Map.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ TradeItems.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var TradeItems;
  TradeItems = class TradeItems {
    constructor() {
      this.items = [];
      this.counts = [];
      this.gold = 0;
      this.index = 0;
      this._needRefresh = false;
    }

    setCurrentIndex(index1) {
      this.index = index1;
    }

    putItem(item) {
      this.items[this.index] = item;
      return this.counts[this.index] = 1;
    }

    getItem(index) {
      return this.items[index];
    }

    getCount(index) {
      return this.counts[index];
    }

    setCount(count) {
      return this.counts[this.index] = count;
    }

    setGold(gold) {
      this.gold = gold;
    }

    upCount(index) {
      return this.setCount(this.getCount(index) + 1);
    }

    downCount(index) {
      return this.setCount(this.getCount(index) - 1);
    }

    upGold() {
      return this.setGold(this.gold + 1);
    }

    downGold() {
      return this.setGold(this.gold - 1);
    }

    isNeedRefresh() {
      return this._needRefresh === true;
    }

    onRefresh() {
      return this._needRefresh = false;
    }

    needRefresh() {
      return this._needRefresh = true;
    }

    send() {
      return Network.sendMessage(NetMessage.TradeItems().setData(this.networkData()));
    }

    networkData() {
      var _getItemType;
      _getItemType = function(item) {
        if (DataManager.isWeapon(item)) {
          return 1;
        }
        if (DataManager.isArmor(item)) {
          return 2;
        }
        return 0;
      };
      return {
        counts: this.counts,
        gold: this.gold,
        items: this.items.map(function(item) {
          if (item != null) {
            return [item.id, _getItemType(item)];
          }
        })
      };
    }

    consume() { // * Забрать эти предметы у игрока
      if (this.gold > 0) {
        $gameParty.loseGold(this.gold);
      }
      return this.items.forEach((item, index) => {
        return $gameParty.gainItem(item, -this.counts[index]);
      });
    }

    release() { // * Выдать эти предметы игроку
      if (this.gold > 0) {
        $gameParty.gainGold(this.gold);
      }
      return this.items.forEach((item, index) => {
        return $gameParty.gainItem(item, this.counts[index]);
      });
    }

    static FromNetwork(networkData) {
      var items;
      items = new TradeItems();
      items.gold = networkData.gold;
      items.counts = networkData.counts;
      items.items = networkData.items.map(function(item) {
        var storage;
        if (item == null) {
          return;
        }
        storage = $dataItems;
        if (item[1] === 1) {
          storage = $dataWeapons;
        }
        if (item[1] === 2) {
          storage = $dataArmors;
        }
        return storage[item[0]];
      });
      items.needRefresh();
      return items;
    }

  };
  ANET.register(TradeItems);
})();

// ■ END TradeItems.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ User API.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//@[GLOBAL DEFINITION]
var uAPI;

uAPI = function() {
  throw new Error("This is a static class");
};

uAPI.showMessageInChat = function(actorId, message, channelId = 0) {
  var msg;
  msg = {
    channelId: channelId,
    text: message
  };
  return Network._onNewChatMessage(actorId, msg);
};

uAPI.sendMessageToChat = function(message, channelId = 0) {
  return Network.sendChatMessage(message, channelId);
};

//?[SYNCED]
uAPI.setNameplateStyle = function(actorId, styleId) {
  var data;
  if (uAPI._setNameplateStyle(...arguments)) {
    data = {
      name: "_setNameplateStyle",
      parameters: [actorId, styleId]
    };
    Network.sendMessage(NetMessage.CallUApi().setData(data));
  }
};

//?{PRIVATE OUTER PAIR}
uAPI._setNameplateStyle = function(actorId, styleId) {
  var actor;
  try {
    actor = $gameActors.actor(actorId);
    if (actor == null) {
      return;
    }
    actor._networkNameplateStyleId = styleId;
    $gameMap.requestNetworkRefresh();
    return true;
  } catch (error) {
    AlphaNET.warning('uAPI.setNameplateStyle : something wrong!');
  }
  return false;
};

Object.defineProperties(uAPI, {
  isPvPWin: {
    get: function() {
      return Network.isPvPBattleWin();
    }
  },
  isPvPLoose: {
    get: function() {
      return Network.isPvPBattleLoose();
    }
  },
  hideChat: {
    get: function() {
      return NetUIManager.hideChat();
    }
  },
  showChat: {
    get: function() {
      return NetUIManager.showChat();
    }
  }
});

(Object.freeze || Object)(uAPI);

// ■ END User API.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ValueSwing.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ValueSwing;
  ValueSwing = class ValueSwing {
    constructor(swingObject, fieldName, time) {
      this.swingObject = swingObject;
      this.fieldName = fieldName;
      this.mode = 1;
      this._repeat = false;
      this._ready = false;
      this._started = false;
      this._config = {
        start: this.getValue(),
        step: this.getValue() / time
      };
      this._refreshConfig();
    }

    getValue() {
      return this.swingObject[this.fieldName];
    }

    _refreshConfig() {
      if (this.isIncrement()) {
        this._config.toValue = this._config.start;
        this._config.fromValue = 0;
      } else {
        this._config.toValue = 0;
        this._config.fromValue = this._config.start;
      }
      return this.setValue(this._config.fromValue);
    }

    isIncrement() {
      return this.mode === 0;
    }

    setValue(value) {
      return this.swingObject[this.fieldName] = value;
    }

    start() {
      this._ready = false;
      return this._started = true;
    }

    reset() {
      this._ready = true;
      return this.setValue(this._config.start);
    }

    stop() {
      return this._started = false;
    }

    isStarted() {
      return this._started === true;
    }

    isReady() {
      return this._ready === true;
    }

    setIncrementMode() {
      this.mode = 0;
      this.stop();
      return this._refreshConfig();
    }

    setDecrementMode() {
      this.mode = 1;
      this.stop();
      return this._refreshConfig();
    }

    setRepeat() {
      return this._repeat = true;
    }

    update() {
      if (!this.isStarted()) {
        return;
      }
      if (this.isIncrement()) {
        this._updateIncr();
      } else {
        this._updateDecr();
      }
      if (this.isReady() && this._repeat === true) {
        return this._changeMode();
      }
    }

    _updateIncr() {
      var v;
      if (this.isReady()) {
        return;
      }
      v = this.getValue();
      if (v < this._config.toValue - this._config.step) {
        return this.setValue(v + this._config.step);
      } else {
        return this._swingDone();
      }
    }

    _swingDone() {
      this.setValue(this._config.toValue);
      return this._ready = true;
    }

    _updateDecr() {
      var v;
      if (this.isReady()) {
        return;
      }
      v = this.getValue();
      if (v > this._config.toValue + this._config.step) {
        return this.setValue(v - this._config.step);
      } else {
        return this._swingDone();
      }
    }

    _changeMode() {
      if (this.isIncrement()) {
        this.setDecrementMode();
      } else {
        this.setIncrementMode();
      }
      return this.start();
    }

  };
  AlphaNET.register(ValueSwing);
})();

// ■ END ValueSwing.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
(function() {
  var alias_BBLT_4324324;
  alias_BBLT_4324324 = Bitmap.prototype.blt;
  Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    if ((typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp._needModifiedBitmapBlt : void 0) > 0) {
      dw = $gameTemp._needModifiedBitmapBlt;
      dh = dw;
      alias_BBLT_4324324.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
      return $gameTemp._needModifiedBitmapBlt = null;
    } else {
      return alias_BBLT_4324324.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  };
})();

(function() {
  var Window_ActorListForNetwork;
  Window_ActorListForNetwork = class Window_ActorListForNetwork extends Window_Selectable {
    constructor() {
      super(0, 0, 400, 500);
      this.x = Graphics.width / 2;
      this.x -= 200;
      this.y = Graphics.height / 2;
      this.y -= 250;
      this._createHeader();
    }

    _createHeader() {
      this.header = new Sprite(new Bitmap(this.width, 40));
      this.header.y -= 40;
      this.header.bitmap.drawTextFull('Select Character', 'center');
      return this.addChild(this.header);
    }

    maxItems() {
      return Network.maximumNetworkPlayers;
    }

    isCurrentItemEnabled() {
      return this.isEnable(this.index());
    }

    isEnable(actorIndex) {
      var actorId;
      actorId = this.getItemData(actorIndex).id;
      return Network.networkActorsId.contains(actorId);
    }

    //return false
    itemHeight() {
      return 110;
    }

    getItemData(index) {
      return $dataActors[Network.networkActorsId_Base[index]];
    }

    drawItem(index) {
      var a, bitmap, f, rect;
      rect = this.itemRect(index);
      a = this.getItemData(index);
      bitmap = ImageManager.loadFace(a.faceName);
      if (bitmap.width !== 0) {
        this._drawItemContent(a, rect, index);
      } else {
        f = function() {
          return this._drawItemContent(a, rect, index);
        };
        bitmap.addLoadListener(f.bind(this));
      }
    }

    _drawItemContent(a, rect, index) {
      this.changePaintOpacity(this.isEnable(index));
      // * TEMP SOLUTION, NOT GOOD AT ALL
      $gameTemp._needModifiedBitmapBlt = 110;
      this.drawFace(a.faceName, a.faceIndex, rect.x + 4, rect.y);
      this._drawFaceRect(rect.x, rect.y, rect.width, rect.hight);
      this._drawAName(a.name, rect.x, rect.y);
      this._drawAClass($dataClasses[a.classId].name, rect.x, rect.y);
      if (!this.isEnable(index)) {
        return this._drawBusyPlace(rect.x, rect.y);
      }
    }

    _drawFaceRect(x, y, w, h) {
      var c;
      c = KDCore.Color.BLACK.CSS;
      return this.contents.fillRect(x, y, w, 1, c);
    }

    _drawAName(name, x, y) {
      return this.drawText(name, x + 120, y + 4, 168);
    }

    _drawAClass(className, x, y) {
      this.changeTextColor(this.crisisColor());
      this.contents.fontSize -= 8;
      this.drawText(className, x + 132, y + 44, 168);
      this.contents.fontSize += 8;
      return this.resetTextColor();
    }

    _drawBusyPlace(x, y) {
      this.changeTextColor(this.deathColor());
      this.contents.fontSize -= 8;
      this.drawText('In Game', x + 270, y + 4);
      this.contents.fontSize += 8;
      return this.resetTextColor();
    }

  };
  ANET.register(Window_ActorListForNetwork);
})();

//@[ALIAS]
var _alias_SomeClass_showNormalAnimation = Window_BattleLog.prototype.showNormalAnimation;
Window_BattleLog.prototype.showNormalAnimation = function () {
    try {
        _alias_SomeClass_showNormalAnimation.call(this, ...arguments);
    } catch (e) {
        console.warn(e);
    }
};
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChatInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Window_ChatInput;
  Window_ChatInput = class Window_ChatInput extends Window_Base {
    constructor(x, y, w, h) {
      super(x, y, w, h);
      this._loadSettings();
      this.setBackgroundType(2);
      this._createInputBackground();
      this._createInputLine();
    }

    _loadSettings() {
      this.settings = ANJsonSettings.getChatSettings()[4];
      this.S = this.settings;
      return this.maxTextLength = this.settings.maxInputTextLength;
    }

    _createInputBackground() {
      this._background = ANSprite.FromImg(this.S.backgroundImage);
      this._background.move(this.S.marginX, this.S.marginY);
      return this.addChild(this._background);
    }

    _createInputLine() {
      this.sprText = ANSprite.FromBitmap(this.S.inputText.textZoneWidth, this.S.inputText.textZoneHeight);
      this.sprText.applyTextSettingsByExtraSettings(this.sprText, this.S.inputText);
      this.addChild(this.sprText);
      this._inputText = "";
      return this._printText();
    }

    _printText() {
      var add;
      this.sprText.bitmap.clear();
      add = "";
      if (this._isCanAddSymbol()) {
        add = "_";
      }
      return this.sprText.bitmap.drawTextFull(this._inputText + add, 'left');
    }

    _isCanAddSymbol() {
      return this._inputText.length < this.maxTextLength;
    }

    update() {
      var key;
      super.update();
      if (Input.isPressed('shift')) {
        this._needBigSymbol = true;
      } else {
        this._needBigSymbol = false;
      }
      if (Input.isTriggered('space')) {
        this._printSymbol(" ");
      }
      if (Input.isTriggered('Backspace') || Input.isLongPressed('Backspace')) {
        this._deleteSymbol();
      }
      key = Input.isAnyTriggered() || Input.isAnyLongPressed();
      if (key != null) {
        return this._printSymbol(key);
      }
    }

    _printSymbol(sym) {
      if (this._needBigSymbol === true) {
        sym = sym.toUpperCase();
        sym = this._convertSpecialSym(sym);
      }
      if (this._isCanAddSymbol()) {
        this._inputText += sym;
      }
      return this._printText();
    }

    _convertSpecialSym(sym) {
      switch (sym) {
        case "1":
          return "!";
        case "2":
          return "@";
        case "3":
          return "#";
        case "4":
          return "$";
        case "5":
          return "%";
        case "6":
          return "^";
        case "7":
          return "&";
        case "8":
          return "*";
        case "9":
          return "(";
        case "0":
          return ")";
        case "-":
          return "_";
        case "=":
          return "+";
        case ";":
          return ":";
        case "'":
          return '"';
        case "[":
          return "{";
        case "]":
          return "}";
        case ",":
          return "<";
        case ".":
          return ">";
        case "?":
          return '/';
        default:
          return sym;
      }
    }

    _deleteSymbol() {
      this._inputText = this._inputText.substring(0, this._inputText.length - 1);
      return this._printText();
    }

    getInputText() {
      return this._inputText;
    }

  };
  ANET.register(Window_ChatInput);
})();

// ■ END Window_ChatInput.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChoiceList.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Window_ChoiceList_start5454 = Window_ChoiceList.prototype.start;
    Window_ChoiceList.prototype.start = function () {
        if ($gameMessage.isChoiseSharedMode()) {
            this.setNetworkShared(true);
            $gameMessage.setSharedChoiseMode(false);
        } else {
            this.setNetworkShared(false);
        }
        _alias_Window_ChoiceList_start5454.call(this, ...arguments);
    };
})();
// ■ END Window_ChoiceList.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_IpConfig.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Window_IpConfig;
  Window_IpConfig = class Window_IpConfig extends Window_Command {
    constructor() {
      super((Graphics._boxWidth / 2) - 120, 300);
    }

    makeCommandList() {
      this.addCommand('      IP     ', 'ip', true);
      return this.addCommand('     Port', 'port', true);
    }

    windowWidth() {
      return 240;
    }

  };
  AlphaNET.register(Window_IpConfig);
})();

// ■ END Window_IpConfig.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_IpInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Window_IpInput;
  Window_IpInput = class Window_IpInput extends Window_Selectable {
    constructor() {
      super();
    }

    initialize() {
      this.imgs = [ImageManager.loadNetwork('btn1'), ImageManager.loadNetwork('btn2'), ImageManager.loadNetwork('btn3')];
      this._extendsXButton();
      super.initialize(0, 0, 320, 90);
      this.openness = 0;
      this.createButtons();
      return this.updatePlacement();
    }

    _extendsXButton() {
      var Button, buttonValues;
      buttonValues = this.getBasicValues();
      Button = AlphaNET.LIBS.Sprite_XButton;
      Button.prototype.drawNumberOnMe = function(text, size) {
        this._textDigitName = new Sprite(new Bitmap(buttonValues.buttonSize, buttonValues.buttonSize));
        this._textDigitName.bitmap.fontSize = size;
        this._textDigitName.bitmap.drawText(text, 0, buttonValues.buttonSize / 2, buttonValues.buttonSize, 1, 'center');
        return this.addChild(this._textDigitName);
      };
      return Button.prototype.setButtonDigitMethod = function(digit, method) {
        this.drawNumberOnMe(digit.toString(), buttonValues.textSize);
        return this.addClickHandler(method(digit));
      };
    }

    getBasicValues() {
      return {
        textSize: 24,
        buttonSize: 40,
        spacing: 2
      };
    }

    createButtons() {
      var Button, btn, buttonValues, cont, i, j, k, l, spacingBetweenLines;
      this._buttons = [];
      buttonValues = this.getBasicValues();
      Button = AlphaNET.LIBS.Sprite_XButton;
      this._inputPanel = new Sprite();
      spacingBetweenLines = buttonValues.buttonSize + buttonValues.spacing;
      for (i = k = 0; k < 5; i = ++k) {
        cont = new AlphaNET.LIBS.UIContainer(buttonValues.buttonSize);
        cont.setItemsCount(3);
        cont.setSpacing(buttonValues.spacing);
        this._inputPanel.addChild(cont);
        cont.move(0, spacingBetweenLines * i);
        for (j = l = 0; l < 3; j = ++l) {
          btn = new Button();
          btn.setButtonImages(...this.imgs);
          cont.addChild(btn);
          this._buttons.push(btn);
        }
      }
      this.addChild(this._inputPanel);
      this._setDigitInputMethods();
    }

    _setDigitInputMethods() {
      var m;
      m = this._onDigitButtonClick.bind(this);
      this._buttons[0].setButtonDigitMethod(7, m);
      this._buttons[1].setButtonDigitMethod(8, m);
      this._buttons[2].setButtonDigitMethod(9, m);
      this._buttons[3].setButtonDigitMethod(4, m);
      this._buttons[4].setButtonDigitMethod(5, m);
      this._buttons[5].setButtonDigitMethod(6, m);
      this._buttons[6].setButtonDigitMethod(1, m);
      this._buttons[7].setButtonDigitMethod(2, m);
      this._buttons[8].setButtonDigitMethod(3, m);
      this._buttons[10].setButtonDigitMethod(0, m);
      this._buttons[11].hide();
      this._buttons[9].hide();
      this._buttons[12].addClickHandler(this._onDigitButtonClearClick.bind(this));
      this._buttons[12].drawNumberOnMe("C", this.getBasicValues().textSize);
      this._buttons[13].addClickHandler(this._onDigiButtonPointClick.bind(this));
      this._buttons[13].drawNumberOnMe(".", this.getBasicValues().textSize);
      this._buttons[14].addClickHandler(this.onButtonOk.bind(this));
      return this._buttons[14].drawNumberOnMe("OK", this.getBasicValues().textSize);
    }

    _onDigitButtonClick(index) {
      return () => {
        SoundManager.playCursor();
        return this._digitInputProcess(index);
      };
    }

    _digitInputProcess(digit) {
      return this._addText(digit);
    }

    _addText(text) {
      if (this._tempText.length >= this.maxLength()) {
        return;
      }
      this._tempText += text;
      return this.refreshText(this._tempText);
    }

    _onDigitButtonClearClick() {
      SoundManager.playCursor();
      this._tempText = this._tempText.substring(0, this._tempText.length - 1);
      return this.refreshText(this._tempText);
    }

    _onDigiButtonPointClick() {
      return this._addText(".");
    }

    updatePlacement() {
      var buttonValues, digitsWidth, dx;
      buttonValues = this.getBasicValues();
      this.width = this.width;
      this.height = this.height;
      this.x = (Graphics.boxWidth - this.width) / 2;
      this.y = (Graphics.boxHeight - this.height) / 2;
      this.y -= (buttonValues.spacing + buttonValues.buttonSize) * 2;
      digitsWidth = buttonValues.buttonSize * 3;
      digitsWidth += buttonValues.spacing * 2;
      dx = (this.width - digitsWidth) / 2;
      return this._inputPanel.move(dx, this.height + (buttonValues.spacing * 2));
    }

    update() {
      super.update();
      this.updateButtonsVisiblity();
      return this.updateInput();
    }

    updateButtonsVisiblity() {
      return this._inputPanel.visible = this.openness >= 255;
    }

    updateInput() {
      var i, j, k, l;
      for (i = k = 0; k <= 9; i = ++k) {
        if (Input.isTriggered(i.toString())) {
          this._digitInputProcess(i);
        }
      }
      for (i = l = 96; l <= 105; i = ++l) {
        j = i - 96;
        if (Input.isTriggered('Numpad' + j.toString())) {
          this._digitInputProcess(j);
        }
      }
      if (Input.isTriggered('Backspace') || Input.isTriggered('backspace')) {
        this._onDigitButtonClearClick();
      }
      if (this.isDigitsOnly()) {
        return;
      }
      if (Input.isTriggered('.') || Input.isTriggered('NumpadDecimal')) {
        this._onDigiButtonPointClick();
      }
    }

    start(symbol) {
      this.textSymbol = symbol;
      this.loadSymbol();
      this.open();
      return this.activate();
    }

    loadSymbol() {
      var text;
      text = this._getTextBySymbol();
      if (text === null || text === "") {
        text = 'localhost';
      }
      this._tempText = text;
      this.refreshText(this._tempText);
      if (this.isDigitsOnly()) {
        return this._buttons[13].hide();
      } else {
        return this._buttons[13].show();
      }
    }

    isDigitsOnly() {
      return this.textSymbol === 'port';
    }

    refreshText(text) {
      this.contents.clear();
      return this.drawText(text, 0, 0, this.contentsWidth(), 'center');
    }

    _getTextBySymbol() {
      return Network[this.textSymbol].toString();
    }

    lineHeight() {
      return 40;
    }

    maxLength() {
      if (this.isDigitsOnly()) {
        return 4;
      } else {
        return 15;
      }
    }

    isOkTriggered() {
      return Input.isTriggered('ok');
    }

    onButtonOk() {
      this.saveTextData();
      return this.callOkHandler();
    }

    saveTextData() {
      Network[this.textSymbol] = this._tempText;
      return Network._saveAdrToConfig();
    }

  };
  AlphaNET.register(Window_IpInput);
})();

// ■ END Window_IpInput.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemList.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    
    //@[DEFINES]
    var _ = Window_ItemList.prototype;

    //@[ALIAS]
    var _alias__makeItemList = _.makeItemList;
    _.makeItemList = function () {
        _alias__makeItemList.call(this, ...arguments);
        if (this._isNETTrade()) {
            this._data.unshift({
                id: 0,
                name: "<Nothing>",
                iconIndex: 188
            });
            this._removeNETTradeItems();
        }
    };

    //?[NEW]
    _._isNETTrade = function () {
        return $gameTemp.netTradeItems != null;
    };

    //?[NEW]
    _._removeNETTradeItems = function () {
        // * Удаляем вещи, которые уже были выбрана на продажу
        $gameTemp.netTradeItems.items.forEach(element => {
            if(this._data.indexOf(element) >= 0) {
                this._data.delete(element);
            }
        });
    };

    //@[ALIAS]
    var _alias__isCurrentItemEnabled = _.isCurrentItemEnabled;
    _.isCurrentItemEnabled = function () {
        if (this._isNETTrade())
            return true;
        else
            return _alias__isCurrentItemEnabled.call(this, ...arguments);
    };

    //@[ALIAS]
    var _alias__isEnabled = _.isEnabled;
    _.isEnabled = function () {
        if (this._isNETTrade())
            return true;
        else
            return _alias__isEnabled.call(this, ...arguments);
        
    };

    //@[ALIAS]
    var _alias__drawItem = _.drawItem;
    _.drawItem = function (index) {
        if (this._isNETTrade() && index == 0) {
            var rect = this.itemRect(index);
            rect.width -= this.textPadding();
            this.changePaintOpacity(1);
            this.drawItemName(this._data[index], rect.x, rect.y, rect.width);
        } else
            _alias__drawItem.call(this, ...arguments);
    };

})();
// ■ END Window_ItemList.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemListFroTrade.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Window_ItemListFroTrade;
  Window_ItemListFroTrade = class Window_ItemListFroTrade extends Window_ItemList {
    constructor() {
      super(...arguments);
    }

  };
  ANET.register(Window_ItemListFroTrade);
})();

// ■ END Window_ItemListFroTrade.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuCommand.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Window_MenuCommand_isFormationEnabled = Window_MenuCommand.prototype.isFormationEnabled;
    Window_MenuCommand.prototype.isFormationEnabled = function () {
        if(Network.isConnected())
            return  false;
        else
            return _alias_Window_MenuCommand_isFormationEnabled.call(this, ...arguments);
    };
})();
// ■ END Window_MenuCommand.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuStatus.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {

    //@[DEFINES]
    var _ = Window_MenuStatus.prototype;

    //@[ALIAS]
    var _alias_Window_MenuStatus_isCurrentItemEnabled = Window_MenuStatus.prototype.isCurrentItemEnabled;
    Window_MenuStatus.prototype.isCurrentItemEnabled = function () {
        if(this._isRestrictedList()) {
            return true;
        }
        if (Network.isConnected() && this._isNetworkRestrictSymbol()) {
            return this._isMyNetoworkIndex(this.index());
        }
        return _alias_Window_MenuStatus_isCurrentItemEnabled.call(this, ...arguments);
    };

    //?[NEW]
    _._isMyNetoworkIndex = function (index) {
        var actor = $gameParty.members()[this.index()];
        var myActorId = NetPartyManager.getMyActorId();
        return actor._actorId == myActorId;
        //return (index == (NetPartyManager.getMyPlayerIndex() - 1));
    };

    //?[NEW]
    Window_MenuStatus.prototype._isNetworkRestrictSymbol = function () {
        try {
            var symbol = SceneManager._scene._commandWindow.currentSymbol();
            var isEnabled = (symbol == 'skill' || symbol == 'equip');
            if(Network.isMultiMode()) {
                isEnabled = isEnabled || symbol == 'status';
            }
            return isEnabled;
        } catch (error) {
            AlphaNET.error(error, 'error try get menu symbol');
            return false;
        }
    };

    //@[ALIAS]
    var _alias_Window_MenuStatus_maxItems = Window_MenuStatus.prototype.maxItems;
    Window_MenuStatus.prototype.maxItems = function () {
        if (this._isRestrictedList()) {
            return 1;
        }
        return _alias_Window_MenuStatus_maxItems.call(this);
    };

    //@[ALIAS]
    /*var _alias__numVisibleRows = _.numVisibleRows;
    _.numVisibleRows = function () {
        if(this._isRestrictedList()) {
            return 1;
        } else
        return _alias__numVisibleRows.call(this);
    };*/

    //@[ALIAS]
    var _alias__drawItem = _.drawItem;
    _.drawItem = function (index) {
        if(this._isRestrictedList()) {
            /*if (!this._isMyNetoworkIndex(index)) {
                return;
            }*/
            return _alias__drawItem.call(this, (NetPartyManager.getMyPlayerIndex() - 1));
        }
        return _alias__drawItem.call(this, index);    
    };


    //@[ALIAS]
    var _alias_Window_MenuStatus_itemRect = Window_MenuStatus.prototype.itemRect;
    Window_MenuStatus.prototype.itemRect = function (index) {
        var rect = _alias_Window_MenuStatus_itemRect.call(this, index);
        if (this._isRestrictedList()) {
            rect.y = 0;
        } 
        return rect;
    };

    //?[NEW]
    _._isRestrictedList = function() {
        return Network.isRestrictedPartyList();
    };

    //@[ALIAS]
    var _alias__selectLast = _.selectLast;
    _.selectLast = function () {
        if (this._isRestrictedList()) {
            this.select(0);
        } else
            _alias__selectLast.call(this);    
    };


})();
// ■ END Window_MenuStatus.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Message.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function () {
        _alias_Window_Message_terminateMessage.call(this, ...arguments);
        if(Network.inBattle())
            BattleManager.syncNet();
        else
            if(Network.isConnected())
                Network.sendIcon(Network.ICON_NONE);
    };

    //@[ALIAS]
    var _alias_Window_Message_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function () {
        _alias_Window_Message_startMessage.call(this, ...arguments);
        if(Network.isConnected()){
            if(!Network.inBattle()) {
                Network.sendIcon(Network.ICON_MESSAGE);
            }
        }
    };
})();
// ■ END Window_Message.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _alias_Window_Selectable_initialize = Window_Selectable.prototype.initialize;
    Window_Selectable.prototype.initialize = function () {
        _alias_Window_Selectable_initialize.call(this, ...arguments);
        this._networkShared = false;
    };

    //@[ALIAS]
    var _alias_Window_Selectable_select = Window_Selectable.prototype.select;
    Window_Selectable.prototype.select = function (index) {
        _alias_Window_Selectable_select.call(this, ...arguments);
        if (this.isNetworkShared() && Network.isHost()) {
            this._sendNetworkMessage(index);
        }
    };


    //@[ALIAS]
    var _alias_Window_Selectable_update = Window_Selectable.prototype.update;
    Window_Selectable.prototype.update = function () {
        // * Если не хост, то только получаем выбор от сервера
        if (this.isNetworkShared() && !Network.isHost()) {
            Window_Base.prototype.update.call(this);
            this._updateNetwork();
        } else {
            _alias_Window_Selectable_update.call(this, ...arguments);
        }
    };


    //@[ALIAS]
    var _alias_Window_Selectable_processOk = Window_Selectable.prototype.processOk;
    Window_Selectable.prototype.processOk = function () {
        this._networkProcess('ok');
        _alias_Window_Selectable_processOk.call(this, ...arguments);
    };


    //@[ALIAS]
    var _alias_Window_Selectable_processCancel = Window_Selectable.prototype.processCancel;
    Window_Selectable.prototype.processCancel = function () {
        this._networkProcess('cancel');
        _alias_Window_Selectable_processCancel.call(this, ...arguments);
    };

})();
// ■ END Window_Selectable.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//?[NEW]
Window_Selectable.prototype._sendNetworkMessage = function (index, action = null) {
    var data = {
        index: index,
        action: action
    };
    Network.sendMessage(NetMessage.WindowSelect().setData(data));
};

//?[NEW]
Window_Selectable.prototype._updateNetwork = function () {
    this._updateActionFromNetwork();
    this._updateSelectionFromNetwork();
};

//?[NEW]
Window_Selectable.prototype._updateActionFromNetwork = function () {
    if (!$gameTemp.networkWAction) return;
    if ($gameTemp.networkWAction == 'ok') {
        this._updateSelectionFromNetwork(); // * Ещё раз обновим индекс, чтобы выбор был точным
        this.processOk();
        $gameTemp.networkWAction = null;
    }
    if ($gameTemp.networkWAction == 'cancel') {
        this.processCancel();
        $gameTemp.networkWAction = null;
    }
};

//?[NEW]
Window_Selectable.prototype._updateSelectionFromNetwork = function () {
    try {
        var index = $gameTemp.networkWSelectedIndex;
        if (index != null) {
            this.select(index);
            $gameTemp.networkWSelectedIndex = null;
        }
    } catch (e) {
        //$[TEMP]
        console.error(e);
    }
};

//?[NEW]
Window_Selectable.prototype._networkProcess = function (symbol) {
    if (!this.isNetworkShared()) return;
    if (Network.isHost()) {
        // * При OK мы дополнительно отправляем index выбора, чтобы выбор был точным
        this._sendNetworkMessage(this.index(), symbol);
    }
};

//?[NEW]
Window_Selectable.prototype.setNetworkShared = function (bool) {
    "WINDOW IN SHARED MODE".p(bool);
    this._networkShared = bool;
};

//?[NEW]
Window_Selectable.prototype.isNetworkShared = function () {
    return (this._networkShared == true && Network.isConnected());
};

// ■ END Window_Selectable_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TradeItemList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Window_TradeItemList;
  Window_TradeItemList = class Window_TradeItemList extends Window_Selectable {
    constructor(x, y, width, height, outMode) {
      super(x, y, width, height);
      this._outMode = outMode;
      this.settings = ANJsonSettings.getTradeWindowSettings()[0];
      this.S = this.settings.ItemList;
      this._cursorBitmap = ImageManager.loadNetwork(this.S.cursorImage);
      this._cursorDX = null;
      this.onSomethingChangeListener = null;
      this.setBackgroundType(2);
      this._drawSeparator();
      this._createCountButtons();
      this.refresh();
      this.select(0);
      if (this._outMode === true) {
        this.select(-1);
      }
    }

    _drawSeparator() {
      this.separtor = new Sprite(ImageManager.loadNetwork(this.S.separatorImage));
      this.separtor.move(this.S.separatorMarginX, this.S.separatorMarginY);
      return this.addChild(this.separtor);
    }

    _createCountButtons() {
      this.countButtons = new Sprite();
      this.countButtons.visible = !this._outMode;
      this.addChild(this.countButtons);
      this._createButtonA();
      return this._createButtonB();
    }

    _createButtonA() {
      var data, img0, img1, img2, img3;
      data = this.S.countButtonA;
      this.countButtonA = new ANET.LIBS.Sprite_XButton();
      img0 = ImageManager.loadNetwork(data.mainImg);
      img1 = ImageManager.loadNetwork(data.hoverImg);
      img2 = ImageManager.loadNetwork(data.pressedImg);
      img3 = ImageManager.loadNetwork(data.disableImg);
      this.countButtonA.setButtonImages(img0, img1, img2, img3);
      this.countButtonA.move(data.marginX, data.marginY);
      this.countButtonA.addClickHandler(this._onCountButtonAClick.bind(this));
      return this.countButtons.addChild(this.countButtonA);
    }

    _createButtonB() {
      var data, img0, img1, img2, img3;
      data = this.S.countButtonB;
      this.countButtonB = new ANET.LIBS.Sprite_XButton();
      img0 = ImageManager.loadNetwork(data.mainImg);
      img1 = ImageManager.loadNetwork(data.hoverImg);
      img2 = ImageManager.loadNetwork(data.pressedImg);
      img3 = ImageManager.loadNetwork(data.disableImg);
      this.countButtonB.setButtonImages(img0, img1, img2, img3);
      this.countButtonB.addClickHandler(this._onCountButtonBClick.bind(this));
      this.countButtonB.move(data.marginX, data.marginY);
      return this.countButtons.addChild(this.countButtonB);
    }

    _onCountButtonBClick() {
      var index;
      //"CLICK B".p()
      index = this.index();
      if (index <= 3) {
        $gameTemp.netTradeItems.upCount(index);
      } else {
        $gameTemp.netTradeItems.upGold();
      }
      this._calculateCountForItem(this.item());
      this.onSomethingChange();
      return this.refresh();
    }

    _onCountButtonAClick() {
      var index;
      //"CLICK A".p()
      index = this.index();
      if (index <= 3) {
        $gameTemp.netTradeItems.downCount(index);
      } else {
        $gameTemp.netTradeItems.downGold();
      }
      this._calculateCountForItem(this.item());
      this.onSomethingChange();
      return this.refresh();
    }

    isOutMode() {
      return this._outMode === true;
    }

    isGoldIndex() {
      return this.index() === 4;
    }

    isTradeButtonIndex() {
      return this.index() === 5;
    }

    update() {
      super.update();
      if ($gameTemp.netTradeItemsOut.isNeedRefresh() && this.isOutMode()) {
        this.refresh();
        $gameTemp.netTradeItemsOut.onRefresh();
      }
      if ($gameTemp.netTradeItems.isNeedRefresh() && !this.isOutMode()) {
        this.onSomethingChange();
        $gameTemp.netTradeItems.onRefresh();
      }
      this._updateCursorSprite();
      if (this.active === true) {
        return this._updateCountButtons();
      }
    }

    _updateCursorSprite() {
      if (!this.isOutMode()) {
        if (this._cursorDX == null) {
          this._cursorDX = this._windowCursorSprite.x;
        }
        this._windowCursorSprite.bitmap = this._cursorBitmap;
        return this._windowCursorSprite.x = this._cursorDX + this.S.cursorDX;
      } else {
        return this._windowCursorSprite.visible = false;
      }
    }

    _updateCountButtons() {
      var ref, ref1;
      if (this.countButtons.visible !== true) {
        return;
      }
      if (!((ref = this.countButtonA) != null ? ref.isDisabled() : void 0)) {
        if (Input.isTriggered('left')) {
          this._onCountButtonAClick();
        }
        if (Input.isLongPressed('left')) {
          this._onCountButtonAClick();
        }
      }
      if (!((ref1 = this.countButtonB) != null ? ref1.isDisabled() : void 0)) {
        if (Input.isTriggered('right')) {
          this._onCountButtonBClick();
        }
        if (Input.isLongPressed('right')) {
          return this._onCountButtonBClick();
        }
      }
    }

    maxItems() {
      return 6;
    }

    item() {
      var ref;
      if (this.isOutMode()) {
        return (ref = $gameTemp.netTradeItemsOut) != null ? ref.getItem(this.index()) : void 0;
      } else {
        return $gameTemp.netTradeItems.getItem(this.index());
      }
    }

    drawItem(index) {
      var count, item, items, rect, t;
      if (index === 5) {
        return;
      }
      rect = this.itemRectForText(index);
      items = $gameTemp.netTradeItems;
      if (this.isOutMode()) {
        items = $gameTemp.netTradeItemsOut;
      }
      if (index === 4) {
        return this._drawGoldItem(rect, items);
      } else {
        item = items.getItem(index);
        count = items.getCount(index);
        if (item != null) {
          t = `\\I[${item.iconIndex}] ${item.name}\\C[${this.S.itemsCountMVColorIndex}]  [${count}]`;
          return this.drawTextEx(t, rect.x, rect.y + 4, 220, this.lineHeight());
        } else {
          t = `\\I[${this.S.emptyItemIcon}]\\C[${this.S.selectItemMVColorIndex}]${this.S.selectItemCaption}`;
          if (this.isOutMode()) {
            t = `\\I[${this.S.emptyItemIcon}]\\C[${this.S.nothingMVColorIndex}]${this.S.nothingCaption}`;
          }
          return this.drawTextEx(t, rect.x, rect.y + 4, 220, this.lineHeight());
        }
      }
    }

    _drawGoldItem(rect, items) {
      return this.drawTextEx(`\\I[${this.S.coinsIcon}]\\C[${this.S.coinsMVColorIndex}]${this.S.coinsCaption}\\C[${this.S.coinsCountMVColorIndex}]${items.gold}`, rect.x, rect.y + 4, 220, this.lineHeight());
    }

    isCurrentItemEnabled() {
      return true;
    }

    standardFontSize() {
      if (this.S != null) {
        return this.S.fontSize;
      } else {
        return 17;
      }
    }

    standardFontFace() {
      if (this.S != null) {
        return this.S.fontFace;
      }
    }

    lineHeight() {
      if (this.index() < 5) {
        return 36;
      } else {
        return 44;
      }
    }

    drawIcon(iconIndex, x, y) {
      var bitmap, ph, pw, sx, sy;
      bitmap = ImageManager.loadSystem('IconSet');
      pw = Window_Base._iconWidth;
      ph = Window_Base._iconHeight;
      sx = iconIndex % 16 * pw;
      sy = Math.floor(iconIndex / 16) * ph;
      return this.contents.blt(bitmap, sx, sy, pw, ph, x, y, 24, 24);
    }

    select(index) {
      var rect, ref;
      Window_Selectable.prototype.select.call(this, index);
      rect = this.itemRectForText(index);
      if ((ref = this.countButtons) != null) {
        ref.move(rect.x - 30, rect.y + 24);
      }
      return this._determinateCountButtons();
    }

    _determinateCountButtons() {
      var item, ref, ref1, ref2, ref3, ref4;
      // * Золото работает через отдельное окно ввода цифр
      if (this.index() === 4) {
        if ((ref = this.countButtons) != null) {
          ref.visible = true;
        }
        return this._calculateCountForItem();
      } else {
        item = this.item();
        if (item != null) {
          if ((ref1 = this.countButtons) != null) {
            ref1.visible = true;
          }
          return this._calculateCountForItem(item);
        } else {
          if ((ref2 = this.countButtons) != null) {
            ref2.visible = false;
          }
          if ((ref3 = this.countButtonA) != null) {
            ref3.disable();
          }
          return (ref4 = this.countButtonB) != null ? ref4.disable() : void 0;
        }
      }
    }

    _calculateCountForItem(item) {
      var countInParty, countToTrade, ref, ref1, ref2, ref3, ref4;
      if ((ref = this.countButtonA) != null) {
        ref.enable();
      }
      if ((ref1 = this.countButtonB) != null) {
        ref1.enable();
      }
      if (this.index() === 4) {
        countInParty = $gameParty.gold();
        countToTrade = $gameTemp.netTradeItems.gold;
      } else {
        countInParty = $gameParty.numItems(item);
        countToTrade = $gameTemp.netTradeItems.getCount(this.index());
      }
      if (countInParty === countToTrade) {
        if ((ref2 = this.countButtonB) != null) {
          ref2.disable();
        }
      }
      if (this.index() === 4) {
        if (countToTrade === 0) {
          return (ref3 = this.countButtonA) != null ? ref3.disable() : void 0;
        }
      } else {
        if (countToTrade === 1) {
          return (ref4 = this.countButtonA) != null ? ref4.disable() : void 0;
        }
      }
    }

    onSomethingChange() {
      if (this.onSomethingChangeListener != null) {
        return this.onSomethingChangeListener();
      }
    }

  };
  ANET.register(Window_TradeItemList);
})();

// ■ END Window_TradeItemList.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.5.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TradeNumberInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Window_TradeNumberInput;
  Window_TradeNumberInput = class Window_TradeNumberInput extends Window_NumberInput {
    constructor(x, y, sceneTrade) {
      super({});
      this.sceneTrade = sceneTrade;
      this._messageWindow.x = x;
      this._messageWindow.y = y;
      this._messageWindow.height = 200;
    }

    updatePlacement() {
      Window_NumberInput.prototype.updatePlacement.call(this);
      return this.x = this._messageWindow.x;
    }

    start() {
      this._maxDigits = 6;
      this._number = $gameTemp.netTradeItems.gold;
      this._number = this._number.clamp(0, Math.pow(10, this._maxDigits) - 1);
      this.updatePlacement();
      this.placeButtons();
      this.updateButtonsVisiblity();
      this.createContents();
      this.refresh();
      this.open();
      this.activate();
      return this.select(0);
    }

    processOk() {
      var ref, ref1;
      SoundManager.playOk();
      if ((ref = $gameTemp.netTradeItems) != null) {
        ref.setGold(this._number);
      }
      this.updateInputData();
      this.deactivate();
      this.close();
      return (ref1 = this.sceneTrade) != null ? ref1.onInputComplete() : void 0;
    }

    changeDigit(up) {
      var lastNumber;
      lastNumber = this._number;
      Window_NumberInput.prototype.changeDigit.call(this, up);
      if (this._number > $gameParty.gold()) {
        this._number = lastNumber;
        return this.refresh();
      }
    }

  };
  ANET.register(Window_TradeNumberInput);
})();

// ■ END Window_TradeNumberInput.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AfterLoad.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    
    ANET.EXTEND = function(){
        AlphaNET.log("Apply After load Extension");

        if (Imported.PKD_MapInventory == true) {

            //COMP PATCH to INV
            // * Removed SMouse From Inventory
        }

    };

})();

// ■ END AfterLoad.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
//Compressed by MV Plugin Builder
(function(){var _0xad16 = [
    'canClientConnect',
    'startServer',
    'connectToServer',
    'preventDefault',
    'disconnectFromServer',
    'startAnotherClient',
    'SznRY',
    'KWYex',
    'RcsZB',
    'initManager',
    'isUseFonts',
    'isPro',
    'isNwjs',
    'isHotGame',
    'openMaker',
    'IBWzo',
    'Start\x20server\x20first!',
    'start\x20server\x20before\x20create\x20a\x20new\x20Window',
    'stopServer',
    'isHost',
    'acOxM',
    'warning',
    'IbFJP',
    'You\x20can\x20stop\x20server\x20when\x20another\x20window\x20is\x20open!',
    'disconnect',
    'prototype',
    'create',
    'call',
    'printVersionInfo',
    'EXTEND',
    'initialize',
    '_onKeyDown',
    'isHotKeysUsing',
    'ctrlKey',
    'altKey',
    'keyCode',
    'isConnected'
];
(function (_0x48f096, _0x303e9e) {
    var _0x127842 = function (_0x5ec01f) {
        while (--_0x5ec01f) {
            _0x48f096['push'](_0x48f096['shift']());
        }
    };
    _0x127842(++_0x303e9e);
}(_0xad16, 0x1d5));
var _0x5f08 = function (_0x5d8793, _0x38e855) {
    _0x5d8793 = _0x5d8793 - 0x0;
    var _0x34e4b9 = _0xad16[_0x5d8793];
    return _0x34e4b9;
};
var _Scene_Boot_prototype_create = Scene_Boot[_0x5f08('0x0')][_0x5f08('0x1')];
Scene_Boot['prototype'][_0x5f08('0x1')] = function () {
    _Scene_Boot_prototype_create[_0x5f08('0x2')](this);
    AlphaNET[_0x5f08('0x3')]();
    ANET[_0x5f08('0x4')]();
    Network[_0x5f08('0x5')]();
    MakerManager['initManager']();
};
var _alias_Graphics_onKeyDown = Graphics[_0x5f08('0x6')];
Graphics['_onKeyDown'] = function () {
    _alias_Graphics_onKeyDown['call'](this, ...arguments);
    if (ANET['P'][_0x5f08('0x7')]() != !![]) {
        return;
    }
    if (!event[_0x5f08('0x8')] && !event[_0x5f08('0x9')]) {
        if (event[_0x5f08('0xa')] == 0x75) {
            event['preventDefault']();
            if (!Network[_0x5f08('0xb')]() && Network[_0x5f08('0xc')]()) {
                if (!Network['isHotGame']())
                    Network[_0x5f08('0xd')]();
                AlphaNET[_0x5f08('0xe')]();
            }
        }
        if (event[_0x5f08('0xa')] == 0x78) {
            event[_0x5f08('0xf')]();
            AlphaNET[_0x5f08('0x10')]();
        }
        if (event['keyCode'] == 0x76) {
            event[_0x5f08('0xf')]();
            AlphaNET[_0x5f08('0xe')]();
        }
        if (event['keyCode'] == 0x7a) {
            event[_0x5f08('0xf')]();
            AlphaNET[_0x5f08('0x11')]();
        }
        if (event[_0x5f08('0xa')] == 0x73) {
            if (_0x5f08('0x12') === _0x5f08('0x13')) {
                event[_0x5f08('0xf')]();
                if (Network[_0x5f08('0xb')]()) {
                    Network['stopServer']();
                }
            } else {
                event[_0x5f08('0xf')]();
                if (Network[_0x5f08('0xb')]()) {
                    if (_0x5f08('0x14') === _0x5f08('0x14')) {
                        Network['stopServer']();
                    } else {
                        _Scene_Boot_prototype_create[_0x5f08('0x2')](this);
                        AlphaNET['printVersionInfo']();
                        ANET[_0x5f08('0x4')]();
                        Network['initialize']();
                        MakerManager[_0x5f08('0x15')]();
                    }
                }
            }
        }
    }
};
AlphaNET[_0x5f08('0x16')] = function () {
    return AlphaNET[_0x5f08('0x17')]() && Utils[_0x5f08('0x18')]();
};
AlphaNET['startAnotherClient'] = function () {
    if (Network[_0x5f08('0xb')]()) {
        if (!Network[_0x5f08('0x19')]())
            MakerManager[_0x5f08('0x1a')]();
    } else {
        if (_0x5f08('0x1b') !== 'GnFMC') {
            alert(_0x5f08('0x1c'));
            AlphaNET['warning'](_0x5f08('0x1d'));
        } else {
            if (!Network[_0x5f08('0xb')]() && !Network[_0x5f08('0x19')]() && Network[_0x5f08('0xc')]())
                Network[_0x5f08('0xd')]();
        }
    }
};
AlphaNET['connectToServer'] = function () {
    if (!Network['isConnected']() && Network['canClientConnect']())
        Network[_0x5f08('0xe')]();
};
AlphaNET[_0x5f08('0xd')] = function () {
    if (!Network['isConnected']() && !Network[_0x5f08('0x19')]() && Network['canClientConnect']())
        Network[_0x5f08('0xd')]();
};
AlphaNET[_0x5f08('0x1e')] = function () {
    if (Network[_0x5f08('0xb')]() && Network[_0x5f08('0x1f')]()) {
        if (_0x5f08('0x20') === 'IUcwW') {
            alert(_0x5f08('0x1c'));
            AlphaNET[_0x5f08('0x21')]('start\x20server\x20before\x20create\x20a\x20new\x20Window');
        } else {
            if (Network['isHotGame']()) {
                if ('IbFJP' === _0x5f08('0x22')) {
                    alert(_0x5f08('0x23'));
                    return;
                } else {
                    event[_0x5f08('0xf')]();
                    AlphaNET[_0x5f08('0xe')]();
                }
            }
            Network[_0x5f08('0x1e')]();
        }
    }
};
AlphaNET[_0x5f08('0x10')] = function () {
    if (Network['isConnected']())
        Network[_0x5f08('0x24')]();
};
})();

//Plugin Alpha_NET automatic build by MVPluginBuilder 1.6.2 01.08.2020

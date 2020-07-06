var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function importModule(path) {
    if (typeof require !== 'undefined') {
        return require('./' + path);
    }
    else {
        if (!AppletDir)
            var AppletDir = imports.ui.appletManager.applets['weather@mockturtl'];
        return AppletDir[path];
    }
}
var LinearGradient = imports.cairo.LinearGradient;
var Lang = imports.lang;
var keybindingManager = imports.ui.main.keybindingManager;
var timeout_add_seconds = imports.mainloop.timeout_add_seconds;
var _a = imports.gi.Soup, Message = _a.Message, Session = _a.Session, ProxyResolverDefault = _a.ProxyResolverDefault, SessionAsync = _a.SessionAsync;
var _b = imports.gi.St, Bin = _b.Bin, DrawingArea = _b.DrawingArea, BoxLayout = _b.BoxLayout, Side = _b.Side, IconType = _b.IconType, Label = _b.Label, ScrollView = _b.ScrollView, Icon = _b.Icon, Button = _b.Button, Align = _b.Align, Widget = _b.Widget;
var _c = imports.gi.Clutter, GridLayout = _c.GridLayout, Actor = _c.Actor, Orientation = _c.Orientation;
var _d = imports.gi.Pango, EllipsizeMode = _d.EllipsizeMode, WrapMode = _d.WrapMode;
var get_language_names = imports.gi.GLib.get_language_names;
var PolicyType = imports.gi.Gtk.PolicyType;
var addTween = imports.ui.tweener.addTween;
var _e = imports.ui.applet, TextIconApplet = _e.TextIconApplet, AllowedLayout = _e.AllowedLayout, AppletPopupMenu = _e.AppletPopupMenu, MenuItem = _e.MenuItem;
var _f = imports.ui.popupMenu, PopupMenuManager = _f.PopupMenuManager, PopupSeparatorMenuItem = _f.PopupSeparatorMenuItem;
var _g = imports.ui.settings, AppletSettings = _g.AppletSettings, BindingDirection = _g.BindingDirection;
var _h = imports.misc.util, spawnCommandLine = _h.spawnCommandLine, spawn_async = _h.spawn_async;
var _j = imports.ui.messageTray, SystemNotificationSource = _j.SystemNotificationSource, Notification = _j.Notification;
var SignalManager = imports.misc.signalManager.SignalManager;
var messageTray = imports.ui.main.messageTray;
var utils = importModule("utils");
var GetDayName = utils.GetDayName;
var GetHoursMinutes = utils.GetHoursMinutes;
var capitalizeFirstLetter = utils.capitalizeFirstLetter;
var TempToUserConfig = utils.TempToUserConfig;
var PressToUserUnits = utils.PressToUserUnits;
var compassDirection = utils.compassDirection;
var MPStoUserUnits = utils.MPStoUserUnits;
var nonempty = utils.nonempty;
var AwareDateString = utils.AwareDateString;
var get = utils.get;
var delay = utils.delay;
if (typeof Promise != "function") {
    var promisePoly = importModule("promise-polyfill");
    var finallyConstructor = promisePoly.finallyConstructor;
    var setTimeout = promisePoly.setTimeout;
    var setTimeoutFunc = promisePoly.setTimeoutFunc;
    var isArray = promisePoly.isArray;
    var noop = promisePoly.noop;
    var bind = promisePoly.bind;
    var Promise = promisePoly.Promise;
    var handle = promisePoly.handle;
    var resolve = promisePoly.resolve;
    var reject = promisePoly.reject;
    var finale = promisePoly.finale;
    var Handler = promisePoly.Handler;
    var doResolve = promisePoly.doResolve;
    Promise.prototype['catch'] = promisePoly.Promise.prototype['catch'];
    Promise.prototype.then = promisePoly.Promise.prototype.then;
    Promise.all = promisePoly.Promise.all;
    Promise.resolve = promisePoly.Promise.resolve;
    Promise.reject = promisePoly.Promise.reject;
    Promise.race = promisePoly.Promise.race;
    var globalNS = promisePoly.globalNS;
    if (!('Promise' in globalNS)) {
        globalNS['Promise'] = Promise;
    }
    else if (!globalNS.Promise.prototype['finally']) {
        globalNS.Promise.prototype['finally'] = finallyConstructor;
    }
}
var ipApi = importModule('ipApi');
var UUID = "weather@mockturtl";
var APPLET_ICON = "view-refresh-symbolic";
var REFRESH_ICON = "view-refresh";
var CMD_SETTINGS = "cinnamon-settings applets " + UUID;
var DATA_SERVICE = {
    OPEN_WEATHER_MAP: "OpenWeatherMap",
    DARK_SKY: "DarkSky",
    MET_NORWAY: "MetNorway",
    WEATHERBIT: "Weatherbit",
    YAHOO: "Yahoo",
    CLIMACELL: "Climacell"
};
imports.gettext.bindtextdomain(UUID, imports.gi.GLib.get_home_dir() + "/.local/share/locale");
function _(str) {
    return imports.gettext.dgettext(UUID, str);
}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
var weatherAppletGUIDs = {};
var WeatherApplet = (function (_super) {
    __extends(WeatherApplet, _super);
    function WeatherApplet(metadata, orientation, panelHeight, instanceId) {
        var _this = _super.call(this, orientation, panelHeight, instanceId) || this;
        _this.weather = null;
        _this.forecasts = [];
        _this.hourlyForecasts = [];
        _this._httpSession = new SessionAsync();
        _this.appletDir = imports.ui.appletManager.appletMeta[UUID].path;
        _this.currentLocale = null;
        _this.locProvider = new ipApi.IpApi(_this);
        _this.encounteredError = false;
        _this.errMsg = {
            unknown: _("Error"),
            "bad api response - non json": _("Service Error"),
            "bad key": _("Incorrect API Key"),
            "bad api response": _("Service Error"),
            "bad location format": _("Incorrect Location Format"),
            "bad status code": _("Service Error"),
            "key blocked": _("Key Blocked"),
            "location not found": _("Can't find location"),
            "no api response": _("Service Error"),
            "no key": _("No Api Key"),
            "no location": _("No Location"),
            "no network response": _("Service Error"),
            "no reponse body": _("Service Error"),
            "no respone data": _("Service Error"),
            "unusal payload": _("Service Error"),
            "import error": _("Missing Packages")
        };
        _this.log = new Log(instanceId);
        _this.currentLocale = _this.constructJsLocale(get_language_names()[0]);
        _this.log.Debug("System locale is " + _this.currentLocale);
        _this.log.Debug("Appletdir is: " + _this.appletDir);
        _this._httpSession.user_agent = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:37.0) Gecko/20100101 Firefox/37.0";
        _this.msgSource = new SystemNotificationSource(_("Weather Applet"));
        messageTray.add(_this.msgSource);
        Session.prototype.add_feature.call(_this._httpSession, new ProxyResolverDefault());
        imports.gi.Gtk.IconTheme.get_default().append_search_path(_this.appletDir + "/../icons");
        _this.SetAppletOnPanel();
        _this.config = new Config(_this, instanceId);
        _this.AddRefreshButton();
        _this.EnsureProvider();
        _this.ui = new UI(_this, orientation);
        _this.ui.rebuild(_this.config);
        _this.loop = new WeatherLoop(_this, instanceId);
        _this.orientation = orientation;
        try {
            _this.setAllowedLayout(AllowedLayout.BOTH);
        }
        catch (e) {
        }
        _this.loop.Start();
        return _this;
    }
    WeatherApplet.prototype.SetAppletOnPanel = function () {
        this.set_applet_icon_name(APPLET_ICON);
        this.set_applet_label(_("..."));
        this.set_applet_tooltip(_("Click to open"));
    };
    WeatherApplet.prototype.AddRefreshButton = function () {
        var itemLabel = _("Refresh");
        var refreshMenuItem = new MenuItem(itemLabel, REFRESH_ICON, Lang.bind(this, function () {
            this.refreshAndRebuild();
        }));
        this._applet_context_menu.addMenuItem(refreshMenuItem);
    };
    WeatherApplet.prototype.refreshAndRebuild = function () {
        this.loop.Resume();
        this.refreshWeather(true);
    };
    ;
    WeatherApplet.prototype.LoadJsonAsync = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve, reject) {
                            var message = Message.new('GET', query);
                            _this._httpSession.queue_message(message, function (session, message) {
                                if (!message)
                                    reject({ code: 0, message: "no network response", reason_phrase: "no network response" });
                                if (message.status_code > 300 || message.status_code < 200)
                                    reject({ code: message.status_code, message: "bad status code", reason_phrase: message.reason_phrase });
                                if (!message.response_body)
                                    reject({ code: message.status_code, message: "no reponse body", reason_phrase: message.reason_phrase });
                                if (!message.response_body.data)
                                    reject({ code: message.status_code, message: "no respone data", reason_phrase: message.reason_phrase });
                                try {
                                    _this.log.Debug("API full response: " + message.response_body.data.toString());
                                    var payload = JSON.parse(message.response_body.data);
                                    resolve(payload);
                                }
                                catch (e) {
                                    _this.log.Error("Error: API response is not JSON. The response: " + message.response_body.data);
                                    reject({ code: message.status_code, message: "bad api response - non json", reason_phrase: e });
                                }
                            });
                        })];
                    case 1:
                        json = _a.sent();
                        return [2, json];
                }
            });
        });
    };
    ;
    WeatherApplet.prototype.SpawnProcess = function (command) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve, reject) {
                            spawn_async(command, function (aStdout) {
                                resolve(aStdout);
                            });
                        })];
                    case 1:
                        json = _a.sent();
                        return [2, json];
                }
            });
        });
    };
    WeatherApplet.prototype.LoadAsync = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve, reject) {
                            var message = Message.new('GET', query);
                            _this._httpSession.queue_message(message, function (session, message) {
                                if (!message)
                                    reject({ code: 0, message: "no network response", reason_phrase: "no network response" });
                                if (message.status_code > 300 || message.status_code < 200)
                                    reject({ code: message.status_code, message: "bad status code", reason_phrase: message.reason_phrase });
                                if (!message.response_body)
                                    reject({ code: message.status_code, message: "no reponse body", reason_phrase: message.reason_phrase });
                                if (!message.response_body.data)
                                    reject({ code: message.status_code, message: "no respone data", reason_phrase: message.reason_phrase });
                                _this.log.Debug("API full response: " + message.response_body.data.toString());
                                var payload = message.response_body.data;
                                resolve(payload);
                            });
                        })];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    ;
    WeatherApplet.prototype.sendNotification = function (title, message, transient) {
        var notification = new Notification(this.msgSource, "WeatherApplet: " + title, message);
        if (transient)
            notification.setTransient((!transient) ? false : true);
        this.msgSource.notify(notification);
    };
    WeatherApplet.prototype.SetAppletTooltip = function (msg) {
        this.set_applet_tooltip(msg);
    };
    WeatherApplet.prototype.SetAppletIcon = function (iconname) {
        this.config.IconType() == IconType.SYMBOLIC ?
            this.set_applet_icon_symbolic_name(iconname) :
            this.set_applet_icon_name(iconname);
        if (this.config._useCustomAppletIcons)
            this.SetCustomIcon(this.weather.condition.customIcon);
    };
    WeatherApplet.prototype.SetCustomIcon = function (iconName) {
        this.set_applet_icon_symbolic_name(iconName);
    };
    WeatherApplet.prototype.SetAppletLabel = function (label) {
        this.set_applet_label(label);
    };
    WeatherApplet.prototype.GetPanelHeight = function () {
        return this.panel._getScaledPanelHeight();
    };
    WeatherApplet.prototype.locationLookup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var command;
            return __generator(this, function (_a) {
                command = "xdg-open ";
                spawnCommandLine(command + "https://cinnamon-spices.linuxmint.com/applets/view/17");
                return [2];
            });
        });
    };
    WeatherApplet.prototype.on_orientation_changed = function (orientation) {
        this.orientation = orientation;
        this.refreshWeather(true);
    };
    ;
    WeatherApplet.prototype._onKeySettingsUpdated = function () {
        if (this.config.keybinding != null) {
            keybindingManager.addHotKey(UUID, this.config.keybinding, Lang.bind(this, this.on_applet_clicked));
        }
    };
    WeatherApplet.prototype.on_applet_removed_from_panel = function (deleteConfig) {
        this.log.Print("Removing applet instance...");
        this.loop.Stop();
    };
    WeatherApplet.prototype.on_applet_clicked = function (event) {
        this.ui.menu.toggle();
    };
    WeatherApplet.prototype.on_applet_middle_clicked = function (event) {
    };
    WeatherApplet.prototype.on_panel_height_changed = function () {
    };
    WeatherApplet.prototype.OpenUrl = function (element) {
        if (!element.url)
            return;
        imports.gi.Gio.app_info_launch_default_for_uri(element.url, global.create_app_launch_context());
    };
    WeatherApplet.prototype.GetMaxForecastDays = function () {
        if (!this.provider)
            return this.config._forecastDays;
        return Math.min(this.config._forecastDays, this.provider.maxForecastSupport);
    };
    WeatherApplet.prototype.GetMaxHourlyForecasts = function () {
        if (!this.provider)
            return this.config._forecastHours;
        return Math.min(this.config._forecastHours, this.provider.maxHourlyForecastSupport);
    };
    WeatherApplet.prototype.EnsureProvider = function (force) {
        if (force === void 0) { force = false; }
        var currentName = get(["name"], this.provider);
        switch (this.config._dataService) {
            case DATA_SERVICE.DARK_SKY:
                if (!darkSky)
                    var darkSky = importModule('darkSky');
                if (currentName != "DarkSky" || force) {
                    this.provider = new darkSky.DarkSky(this);
                }
                break;
            case DATA_SERVICE.OPEN_WEATHER_MAP:
                if (!openWeatherMap)
                    var openWeatherMap = importModule("openWeatherMap");
                if (currentName != "OpenWeatherMap" || force) {
                    this.provider = new openWeatherMap.OpenWeatherMap(this);
                }
                break;
            case DATA_SERVICE.MET_NORWAY:
                if (!metNorway)
                    var metNorway = importModule("met_norway");
                if (currentName != "MetNorway" || force) {
                    this.provider = new metNorway.MetNorway(this);
                }
                break;
            case DATA_SERVICE.WEATHERBIT:
                if (!weatherbit)
                    var weatherbit = importModule("weatherbit");
                if (currentName != "Weatherbit" || force) {
                    this.provider = new weatherbit.Weatherbit(this);
                }
                break;
            case DATA_SERVICE.YAHOO:
                if (!yahoo)
                    var yahoo = importModule("yahoo");
                if (currentName != "Yahoo" || force) {
                    this.provider = new yahoo.Yahoo(this);
                }
                break;
            case DATA_SERVICE.CLIMACELL:
                if (!climacell)
                    var climacell = importModule("climacell");
                if (currentName != "Climacell" || force) {
                    this.provider = new climacell.Climacell(this);
                }
                break;
            default:
                return null;
        }
    };
    WeatherApplet.prototype.constructJsLocale = function (locale) {
        var jsLocale = locale.split(".")[0];
        var tmp = jsLocale.split("_");
        jsLocale = "";
        for (var i = 0; i < tmp.length; i++) {
            if (i != 0)
                jsLocale += "-";
            jsLocale += tmp[i].toLowerCase();
        }
        return jsLocale;
    };
    WeatherApplet.prototype.refreshWeather = function (rebuild) {
        return __awaiter(this, void 0, void 0, function () {
            var locationData, e_1, weatherInfo, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.encounteredError = false;
                        locationData = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.ValidateLocation()];
                    case 2:
                        locationData = _a.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.log.Error(e_1);
                        return [2, "error"];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        this.EnsureProvider(rebuild);
                        return [4, this.provider.GetWeather()];
                    case 5:
                        weatherInfo = _a.sent();
                        if (!weatherInfo) {
                            this.log.Error("Unable to obtain Weather Information");
                            return [2, "failure"];
                        }
                        this.wipeData();
                        this.ProcessWeatherData(weatherInfo, locationData);
                        if (rebuild)
                            this.ui.rebuild(this.config);
                        if (!this.ui.displayWeather(this.weather, this.config)
                            || !this.ui.displayForecast(this.weather, this.forecasts, this.config)
                            || !this.ui.displayHourlyForecast(this.hourlyForecasts, this.config)
                            || !this.ui.displayBar(this.weather, this.provider, this.config))
                            return [2, "failure"];
                        this.log.Print("Weather Information refreshed");
                        this.loop.ResetErrorCount();
                        return [2, "success"];
                    case 6:
                        e_2 = _a.sent();
                        this.log.Error("Generic Error while refreshing Weather info: " + e_2);
                        this.HandleError({ type: "hard", detail: "unknown", message: _("Unexpected Error While Refreshing Weather, please see log in Looking Glass") });
                        return [2, "failure"];
                    case 7: return [2];
                }
            });
        });
    };
    ;
    WeatherApplet.prototype.ValidateLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var location, loc, loc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        location = null;
                        if (!!this.config._manualLocation) return [3, 2];
                        return [4, this.locProvider.GetLocation()];
                    case 1:
                        location = _a.sent();
                        if (!location)
                            throw new Error(null);
                        loc = location.lat + "," + location.lon;
                        this.config.SetLocation(loc);
                        return [2, location];
                    case 2:
                        loc = this.config._location.replace(" ", "");
                        if (loc == undefined || loc == "") {
                            this.HandleError({
                                type: "hard",
                                detail: "no location",
                                userError: true,
                                message: _("Make sure you entered a location or use Automatic location instead")
                            });
                            throw new Error("No location given when setting is on Manual Location");
                        }
                        _a.label = 3;
                    case 3: return [2, null];
                }
            });
        });
    };
    WeatherApplet.prototype.ProcessWeatherData = function (weatherInfo, locationData) {
        if (!!locationData) {
            this.weather.location.city = locationData.city;
            this.weather.location.country = locationData.country;
            this.weather.location.timeZone = locationData.timeZone;
            this.weather.coord.lat = locationData.lat;
            this.weather.coord.lon = locationData.lon;
        }
        this.weather.condition = weatherInfo.condition;
        this.weather.wind = weatherInfo.wind;
        this.weather.temperature = weatherInfo.temperature,
            this.weather.date = weatherInfo.date;
        this.weather.sunrise = weatherInfo.sunrise;
        this.weather.sunset = weatherInfo.sunset;
        this.weather.coord = weatherInfo.coord;
        this.weather.humidity = weatherInfo.humidity;
        this.weather.pressure = weatherInfo.pressure;
        if (!!weatherInfo.location.city)
            this.weather.location.city = weatherInfo.location.city;
        if (!!weatherInfo.location.country)
            this.weather.location.country = weatherInfo.location.country;
        if (!!weatherInfo.location.timeZone)
            this.weather.location.timeZone = weatherInfo.location.timeZone;
        if (!!weatherInfo.location.url)
            this.weather.location.url = weatherInfo.location.url;
        if (!!weatherInfo.extra_field)
            this.weather.extra_field = weatherInfo.extra_field;
        this.forecasts = weatherInfo.forecasts;
        this.hourlyForecasts = (!weatherInfo.hourlyForecasts) ? [] : weatherInfo.hourlyForecasts;
    };
    WeatherApplet.prototype.wipeData = function () {
        if (this.weather == null) {
            this.weather = {
                date: null,
                location: {
                    city: null,
                    country: null,
                    tzOffset: null,
                    timeZone: null,
                    url: null
                },
                coord: {
                    lat: null,
                    lon: null,
                },
                sunrise: null,
                sunset: null,
                wind: {
                    speed: null,
                    degree: null,
                },
                temperature: null,
                pressure: null,
                humidity: null,
                condition: {
                    main: null,
                    description: null,
                    icon: null,
                    customIcon: null
                },
            };
        }
        this.weather.date = null;
        this.weather.location.city = null;
        this.weather.location.country = null;
        this.weather.location.timeZone = null;
        this.weather.location.tzOffset = null;
        this.weather.location.url = null;
        this.weather.coord.lat = null;
        this.weather.coord.lon = null;
        this.weather.sunrise = null;
        this.weather.sunset = null;
        this.weather.wind.degree = null;
        this.weather.wind.speed = null;
        this.weather.temperature = null;
        this.weather.pressure = null;
        this.weather.humidity = null;
        this.weather.condition.main = null;
        this.weather.condition.description = null;
        this.weather.condition.icon = null;
        this.weather.extra_field = null;
        this.forecasts = [];
        this.hourlyForecasts = [];
    };
    ;
    WeatherApplet.prototype.DisplayError = function (title, msg) {
        this.set_applet_label(title);
        this.set_applet_tooltip("Click to open");
        this.set_applet_icon_name("weather-severe-alert");
        this.ui.DisplayErrorMessage(msg);
    };
    ;
    WeatherApplet.prototype.HandleError = function (error) {
        if (this.encounteredError == true)
            return;
        this.encounteredError = true;
        if (error.type == "hard") {
            this.ui.rebuild(this.config);
            this.DisplayError(this.errMsg[error.detail], (!error.message) ? "" : error.message);
        }
        if (error.type == "soft") {
            if (this.loop.IsDataTooOld()) {
                this.set_applet_tooltip("Click to open");
                this.set_applet_icon_name("weather-severe-alert");
                this.ui.DisplayErrorMessage(_("Could not update weather for a while...\nare you connected to the internet?"));
            }
        }
        if (error.userError) {
            this.loop.Pause();
            return;
        }
        var nextRefresh = this.loop.GetSecondsUntilNextRefresh();
        this.log.Error("Retrying in the next " + nextRefresh.toString() + " seconds...");
    };
    WeatherApplet.prototype.HandleHTTPError = function (service, error, ctx, callback) {
        var uiError = {
            type: "soft",
            detail: "unknown",
            message: _("Network Error, please check logs in Looking Glass"),
            service: service
        };
        if (typeof error === 'string' || error instanceof String) {
            ctx.log.Error("Error calling " + service + ": " + error.toString());
        }
        else {
            ctx.log.Error("Error calling " + service + " '" + error.message.toString() + "' Reason: " + error.reason_phrase.toString());
            uiError.detail = error.message;
            uiError.code = error.code;
            if (error.message == "bad api response - non json")
                uiError.type = "hard";
            if (!!callback && callback instanceof Function) {
                uiError = callback(error, uiError);
            }
        }
        ctx.HandleError(uiError);
    };
    return WeatherApplet;
}(TextIconApplet));
var Log = (function () {
    function Log(_instanceId) {
        this.debug = false;
        this.ID = _instanceId;
        this.appletDir = imports.ui.appletManager.appletMeta[UUID].path;
        this.debug = this.DEBUG();
    }
    Log.prototype.DEBUG = function () {
        var path = this.appletDir + "/../DEBUG";
        var _debug = imports.gi.Gio.file_new_for_path(path);
        var result = _debug.query_exists(null);
        if (result)
            this.Print("DEBUG file found in " + path + ", enabling Debug mode");
        return result;
    };
    ;
    Log.prototype.Print = function (message) {
        var msg = "[" + UUID + "#" + this.ID + "]: " + message.toString();
        var debug = "";
        if (this.debug) {
            debug = this.GetErrorLine();
            global.log(msg, '\n', "On Line:", debug);
        }
        else {
            global.log(msg);
        }
    };
    Log.prototype.Error = function (error) {
        global.logError("[" + UUID + "#" + this.ID + "]: " + error.toString(), '\n', "On Line:", this.GetErrorLine());
    };
    ;
    Log.prototype.Debug = function (message) {
        if (this.debug) {
            this.Print(message);
        }
    };
    Log.prototype.GetErrorLine = function () {
        var arr = (new Error).stack.split("\n").slice(-2)[0].split('/').slice(-1)[0];
        return arr;
    };
    return Log;
}());
var UI = (function () {
    function UI(app, orientation) {
        this.hourlyToggled = false;
        this.hourlyNeverOpened = true;
        this.app = app;
        this.menuManager = new PopupMenuManager(this.app);
        this.menu = new AppletPopupMenu(this.app, orientation);
        this.menu.box.add_style_class_name(STYLE_WEATHER_MENU);
        this.app.log.Debug("Popup Menu applied classes are: " + this.menu.box.get_style_class_name());
        this.menuManager.addMenu(this.menu);
        this.menuManager._signals.connect(this.menu, "open-state-changed", this.PopupMenuToggled, this);
        this.BuildPopupMenu();
    }
    UI.prototype.PopupMenuToggled = function (caller, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data == false)) return [3, 2];
                        return [4, delay(100)];
                    case 1:
                        _a.sent();
                        this.HideHourlyWeather();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    UI.prototype.BuildPopupMenu = function () {
        var _this = this;
        this._currentWeather = new Bin({ style_class: STYLE_CURRENT });
        this._futureWeather = new Bin({ style_class: STYLE_FORECAST });
        this._separatorArea = new PopupSeparatorMenuItem();
        this._separatorAreaHourly = new PopupSeparatorMenuItem();
        this._separatorArea2 = new PopupSeparatorMenuItem();
        this._separatorArea.actor.remove_style_class_name("popup-menu-item");
        this._separatorAreaHourly.actor.remove_style_class_name("popup-menu-item");
        this._separatorArea2.actor.remove_style_class_name("popup-menu-item");
        this._hourlyScrollView = new ScrollView({
            hscrollbar_policy: PolicyType.AUTOMATIC,
            vscrollbar_policy: PolicyType.NEVER,
            x_fill: true,
            y_fill: true,
            y_align: Align.MIDDLE,
            x_align: Align.MIDDLE
        });
        this._hourlyScrollView.overlay_scrollbars = true;
        var vscroll = this._hourlyScrollView.get_vscroll_bar();
        vscroll.connect("scroll-start", function () { _this.menu.passEvents = true; });
        vscroll.connect("scroll-stop", function () { _this.menu.passEvents = false; });
        var hscroll = this._hourlyScrollView.get_hscroll_bar();
        hscroll.connect("scroll-start", function () { _this.menu.passEvents = true; });
        hscroll.connect("scroll-stop", function () { _this.menu.passEvents = false; });
        this._separatorAreaHourly.actor.hide();
        this._hourlyScrollView.hide();
        this._hourlyScrollView.set_clip_to_allocation(true);
        this._hourlyBox = new BoxLayout({ style_class: "hourly-box" });
        this._hourlyScrollView.add_actor(this._hourlyBox);
        this._bar = new BoxLayout({ vertical: false, style_class: STYLE_BAR });
        var mainBox = new BoxLayout({ vertical: true });
        mainBox.add_actor(this._currentWeather);
        mainBox.add_actor(this._separatorAreaHourly.actor);
        mainBox.add_actor(this._hourlyScrollView);
        mainBox.add_actor(this._separatorArea.actor);
        mainBox.add_actor(this._futureWeather);
        mainBox.add_actor(this._separatorArea2.actor);
        mainBox.add_actor(this._bar);
        this.menu.addActor(mainBox);
    };
    UI.prototype.rebuild = function (config) {
        this.showLoadingUi();
        this.rebuildCurrentWeatherUi(config);
        this.rebuildHourlyWeatherUi(config);
        this.rebuildFutureWeatherUi(config);
        this.rebuildBar(config);
        this.hourlyNeverOpened = true;
    };
    UI.prototype.UpdateIconType = function (iconType) {
        this._currentWeatherIcon.icon_type = iconType;
        for (var i = 0; i < this._forecast.length; i++) {
            this._forecast[i].Icon.icon_type = iconType;
        }
        for (var i = 0; i < this._hourlyForecasts.length; i++) {
            this._hourlyForecasts[i].Icon.icon_type = iconType;
        }
    };
    UI.prototype.DisplayErrorMessage = function (msg) {
        this._timestamp.text = msg;
    };
    UI.prototype.ShowHourlyWeather = function () {
        var _this = this;
        if (this.hourlyNeverOpened) {
            this.hourlyNeverOpened = false;
            this._hourlyScrollView.show();
            this._hourlyScrollView.hide();
        }
        var _a = this._hourlyScrollView.get_preferred_height(-1), minHeight = _a[0], naturalHeight = _a[1];
        var _b = this._hourlyScrollView.get_preferred_width(-1), minWidth = _b[0], naturalWidth = _b[1];
        this._hourlyScrollView.set_width(minWidth);
        this._separatorAreaHourly.actor.show();
        if (!!this._hourlyButton.child)
            this._hourlyButton.child.icon_name = "custom-up-arrow-symbolic";
        this._hourlyScrollView.show();
        if (global.settings.get_boolean("desktop-effects-on-menus")) {
            this._hourlyScrollView.height = 0;
            addTween(this._hourlyScrollView, {
                height: naturalHeight,
                time: 0.25,
                onUpdate: function () { },
                onComplete: function () {
                    _this._hourlyScrollView.set_height(naturalHeight);
                }
            });
        }
        this.hourlyToggled = true;
    };
    UI.prototype.HideHourlyWeather = function () {
        var _this = this;
        this._separatorAreaHourly.actor.hide();
        var hscroll = this._hourlyScrollView.get_hscroll_bar();
        if (!!this._hourlyButton.child)
            this._hourlyButton.child.icon_name = "custom-down-arrow-symbolic";
        if (global.settings.get_boolean("desktop-effects-on-menus")) {
            addTween(this._hourlyScrollView, {
                height: 0,
                time: 0.25,
                onUpdate: function () { },
                onComplete: function () {
                    _this._hourlyScrollView.set_height(-1);
                    _this._hourlyScrollView.hide();
                    hscroll.get_adjustment().set_value(0);
                }
            });
        }
        else {
            this._hourlyScrollView.set_height(-1);
            this._hourlyScrollView.hide();
        }
        this.hourlyToggled = false;
    };
    UI.prototype.ToggleHourlyWeather = function () {
        if (this.hourlyToggled) {
            this.HideHourlyWeather();
        }
        else {
            this.ShowHourlyWeather();
        }
    };
    UI.prototype.displayWeather = function (weather, config) {
        try {
            var mainCondition = "";
            var descriptionCondition = "";
            if (weather.condition.main != null) {
                mainCondition = weather.condition.main;
                if (config._translateCondition) {
                    mainCondition = capitalizeFirstLetter(_(mainCondition));
                }
            }
            if (weather.condition.description != null) {
                descriptionCondition = capitalizeFirstLetter(weather.condition.description);
                if (config._translateCondition) {
                    descriptionCondition = capitalizeFirstLetter(_(weather.condition.description));
                }
            }
            var location = "";
            if (weather.location.city != null && weather.location.country != null) {
                location = weather.location.city + ", " + weather.location.country;
            }
            else {
                location = Math.round(weather.coord.lat * 10000) / 10000 + ", " + Math.round(weather.coord.lon * 10000) / 10000;
            }
            if (nonempty(config._locationLabelOverride)) {
                location = config._locationLabelOverride;
            }
            this.app.SetAppletTooltip(location + " - " + _("As of") + " " + AwareDateString(weather.date, this.app.currentLocale, config._show24Hours));
            this._currentWeatherSummary.text = descriptionCondition;
            var iconname = weather.condition.icon;
            if (iconname == null) {
                iconname = "weather-severe-alert";
            }
            if (config._useCustomMenuIcons) {
                this._currentWeatherIcon.icon_name = weather.condition.customIcon;
                this.UpdateIconType(IconType.SYMBOLIC);
            }
            else {
                this._currentWeatherIcon.icon_name = iconname;
                this.UpdateIconType(config.IconType());
            }
            this.app.SetAppletIcon(iconname);
            var temp = "";
            if (weather.temperature != null) {
                temp = TempToUserConfig(weather.temperature, config._temperatureUnit, config._tempRussianStyle);
                this._currentWeatherTemperature.text = temp + " " + this.unitToUnicode(config._temperatureUnit);
            }
            var label = "";
            if (this.app.orientation != Side.LEFT && this.app.orientation != Side.RIGHT) {
                if (config._showCommentInPanel) {
                    label += mainCondition;
                }
                if (config._showTextInPanel) {
                    if (label != "") {
                        label += " ";
                    }
                    label += (temp + ' ' + this.unitToUnicode(config._temperatureUnit));
                }
            }
            else {
                if (config._showTextInPanel) {
                    label = temp;
                    if (this.app.GetPanelHeight() >= 35) {
                        label += this.unitToUnicode(config._temperatureUnit);
                    }
                }
            }
            if (nonempty(config._tempTextOverride)) {
                label = config._tempTextOverride
                    .replace("{t}", temp)
                    .replace("{u}", this.unitToUnicode(config._temperatureUnit))
                    .replace("{c}", mainCondition);
            }
            this.app.SetAppletLabel(label);
            if (weather.humidity != null) {
                this._currentWeatherHumidity.text = Math.round(weather.humidity) + "%";
            }
            var wind_direction = compassDirection(weather.wind.degree);
            this._currentWeatherWind.text =
                (wind_direction != undefined ? _(wind_direction) + " " : "") +
                    MPStoUserUnits(weather.wind.speed, config._windSpeedUnit);
            if (config._windSpeedUnit != "Beaufort")
                this._currentWeatherWind.text += " " + _(config._windSpeedUnit);
            this._currentWeatherApiUnique.text = "";
            this._currentWeatherApiUniqueCap.text = "";
            if (!!weather.extra_field) {
                this._currentWeatherApiUniqueCap.text = _(weather.extra_field.name) + ":";
                var value = void 0;
                switch (weather.extra_field.type) {
                    case "percent":
                        value = weather.extra_field.value.toString() + "%";
                        break;
                    case "temperature":
                        value = TempToUserConfig(weather.extra_field.value, config._temperatureUnit, config._tempRussianStyle) + " " + this.unitToUnicode(config._temperatureUnit);
                        break;
                    default:
                        value = _(weather.extra_field.value);
                        break;
                }
                this._currentWeatherApiUnique.text = value;
            }
            if (weather.pressure != null) {
                this._currentWeatherPressure.text = PressToUserUnits(weather.pressure, config._pressureUnit) + ' ' + _(config._pressureUnit);
            }
            this._currentWeatherLocation.label = location;
            this._currentWeatherLocation.url = weather.location.url;
            if (!weather.location.url)
                this._locationButton.disable();
            var sunriseText = "";
            var sunsetText = "";
            if (weather.sunrise != null && weather.sunset != null && config._showSunrise) {
                sunriseText = (GetHoursMinutes(weather.sunrise, this.app.currentLocale, config._show24Hours, weather.location.timeZone));
                sunsetText = (GetHoursMinutes(weather.sunset, this.app.currentLocale, config._show24Hours, weather.location.timeZone));
            }
            this._currentWeatherSunrise.text = sunriseText;
            this._currentWeatherSunset.text = sunsetText;
            return true;
        }
        catch (e) {
            this.app.log.Error("DisplayWeatherError: " + e);
            return false;
        }
    };
    ;
    UI.prototype.displayForecast = function (weather, forecasts, config) {
        try {
            for (var i = 0; i < this._forecast.length; i++) {
                var forecastData = forecasts[i];
                var forecastUi = this._forecast[i];
                var t_low = TempToUserConfig(forecastData.temp_min, config._temperatureUnit, config._tempRussianStyle);
                var t_high = TempToUserConfig(forecastData.temp_max, config._temperatureUnit, config._tempRussianStyle);
                var first_temperature = config._temperatureHighFirst ? t_high : t_low;
                var second_temperature = config._temperatureHighFirst ? t_low : t_high;
                var comment = "";
                if (forecastData.condition.main != null && forecastData.condition.description != null) {
                    comment = (config._shortConditions) ? forecastData.condition.main : forecastData.condition.description;
                    comment = capitalizeFirstLetter(comment);
                    if (config._translateCondition)
                        comment = _(comment);
                }
                if (weather.location.timeZone == null)
                    forecastData.date.setMilliseconds(forecastData.date.getMilliseconds() + (weather.location.tzOffset * 1000));
                var dayName = GetDayName(forecastData.date, this.app.currentLocale, weather.location.timeZone);
                if (forecastData.date) {
                    var now = new Date();
                    if (forecastData.date.getDate() == now.getDate())
                        dayName = _("Today");
                    if (forecastData.date.getDate() == new Date(now.setDate(now.getDate() + 1)).getDate())
                        dayName = _("Tomorrow");
                }
                forecastUi.Day.text = dayName;
                forecastUi.Temperature.text = first_temperature;
                forecastUi.Temperature.text += ((config._tempRussianStyle) ? ELLIPSIS : " " + FORWARD_SLASH + " ");
                forecastUi.Temperature.text += second_temperature + ' ' + this.unitToUnicode(config._temperatureUnit);
                forecastUi.Summary.text = comment;
                forecastUi.Icon.icon_name = (config._useCustomMenuIcons) ? forecastData.condition.customIcon : forecastData.condition.icon;
            }
            return true;
        }
        catch (e) {
            this.app.HandleError({
                type: "hard",
                detail: "unknown",
                message: "Forecast parsing failed: " + e.toString(),
                userError: false
            });
            this.app.log.Error("DisplayForecastError " + e);
            return false;
        }
    };
    ;
    UI.prototype.displayBar = function (weather, provider, config) {
        this._providerCredit.label = _("Powered by") + " " + provider.prettyName;
        this._providerCredit.url = provider.website;
        this._timestamp.text = _("As of") + " " + AwareDateString(weather.date, this.app.currentLocale, config._show24Hours);
        return true;
    };
    UI.prototype.displayHourlyForecast = function (forecasts, config) {
        var max = Math.min(forecasts.length, this._hourlyForecasts.length);
        for (var index = 0; index < max; index++) {
            var hour = forecasts[index];
            var ui = this._hourlyForecasts[index];
            ui.Hour.text = AwareDateString(hour.date, this.app.currentLocale, config._show24Hours);
            ui.Temperature.text = TempToUserConfig(hour.temp, config._temperatureUnit, config._tempRussianStyle) + " " + this.unitToUnicode(config._temperatureUnit);
            ui.Icon.icon_name = (config._useCustomMenuIcons) ? hour.condition.customIcon : hour.condition.icon;
            hour.condition.main = capitalizeFirstLetter(hour.condition.main);
            if (config._translateCondition)
                hour.condition.main = _(hour.condition.main);
            ui.Summary.text = hour.condition.main;
            if (!!hour.precipation && hour.precipation.type != "none") {
                var precipationText = null;
                if (!!hour.precipation.volume && hour.precipation.volume > 0) {
                    precipationText = hour.precipation.volume + " mm";
                }
                if (hour.precipation.chance != null || hour.precipation.chance != undefined) {
                    precipationText = (precipationText == null) ? "" : (precipationText + ", ");
                    precipationText += (Math.round(hour.precipation.chance).toString() + "%");
                }
                if (precipationText != null)
                    ui.Precipation.text = precipationText;
            }
        }
        if (max <= 0)
            this.HideHourlyToggle();
        return true;
    };
    UI.prototype.unitToUnicode = function (unit) {
        return unit == "fahrenheit" ? '\u2109' : '\u2103';
    };
    UI.prototype.destroyCurrentWeather = function () {
        if (this._currentWeather.get_child() != null)
            this._currentWeather.get_child().destroy();
    };
    UI.prototype.destroyFutureWeather = function () {
        if (this._futureWeather.get_child() != null)
            this._futureWeather.get_child().destroy();
    };
    UI.prototype.destroyBar = function () {
        this._bar.destroy_all_children();
    };
    UI.prototype.destroyHourlyWeather = function () {
        this._hourlyBox.destroy_all_children();
    };
    UI.prototype.showLoadingUi = function () {
        this.destroyCurrentWeather();
        this.destroyFutureWeather();
        this.destroyBar();
        this._currentWeather.set_child(new Label({
            text: _('Loading current weather ...')
        }));
        this._futureWeather.set_child(new Label({
            text: _('Loading future weather ...')
        }));
    };
    UI.prototype.rebuildCurrentWeatherUi = function (config) {
        this.destroyCurrentWeather();
        var textOb = {
            text: ELLIPSIS
        };
        this._currentWeatherIcon = new Icon({
            icon_type: config.IconType(),
            icon_size: 64,
            icon_name: APPLET_ICON,
            style_class: STYLE_ICON
        });
        this._locationButton = new WeatherButton({ reactive: true, label: _('Refresh'), });
        this._currentWeatherLocation = this._locationButton.actor;
        this._currentWeatherLocation.connect(SIGNAL_CLICKED, Lang.bind(this, function () {
            if (this.app.encounteredError)
                this.app.refreshWeather(true);
            else if (this._currentWeatherLocation.url == null)
                return;
            else
                this.app.OpenUrl(this._currentWeatherLocation);
        }));
        this._currentWeatherSummary = new Label({ text: _('Loading ...'), style_class: STYLE_SUMMARY });
        this._currentWeatherSunrise = new Label(textOb);
        this._currentWeatherSunset = new Label(textOb);
        var sunriseBox = new BoxLayout();
        var sunsetBox = new BoxLayout();
        if (config._showSunrise) {
            var sunsetIcon = new Icon({
                icon_name: "sunset-symbolic",
                icon_type: IconType.SYMBOLIC,
                icon_size: 25
            });
            var sunriseIcon = new Icon({
                icon_name: "sunrise-symbolic",
                icon_type: IconType.SYMBOLIC,
                icon_size: 25
            });
            sunriseBox.add_actor(sunriseIcon);
            sunsetBox.add_actor(sunsetIcon);
        }
        var textOptions = {
            x_fill: false,
            x_align: Align.START,
            y_align: Align.MIDDLE,
            y_fill: false,
            expand: true
        };
        sunriseBox.add(this._currentWeatherSunrise, textOptions);
        sunsetBox.add(this._currentWeatherSunset, textOptions);
        var ab_spacerlabel = new Label({ text: BLANK });
        var bb_spacerlabel = new Label({ text: BLANK });
        var sunBox = new BoxLayout({ style_class: STYLE_ASTRONOMY });
        sunBox.add_actor(sunriseBox);
        sunBox.add_actor(ab_spacerlabel);
        sunBox.add_actor(sunsetBox);
        var middleColumn = new BoxLayout({ vertical: true, style_class: STYLE_SUMMARYBOX });
        middleColumn.add_actor(this._currentWeatherLocation);
        middleColumn.add_actor(this._currentWeatherSummary);
        middleColumn.add_actor(bb_spacerlabel);
        var sunBin = new Bin();
        sunBin.set_child(sunBox);
        middleColumn.add_actor(sunBin);
        this._currentWeatherTemperature = new Label(textOb);
        this._currentWeatherHumidity = new Label(textOb);
        this._currentWeatherPressure = new Label(textOb);
        this._currentWeatherWind = new Label(textOb);
        this._currentWeatherApiUnique = new Label({ text: '' });
        this._currentWeatherApiUniqueCap = new Label({ text: '' });
        var rb_captions = new BoxLayout({ vertical: true, style_class: STYLE_DATABOX_CAPTIONS });
        var rb_values = new BoxLayout({ vertical: true, style_class: STYLE_DATABOX_VALUES });
        rb_captions.add_actor(new Label({ text: _('Temperature:') }));
        rb_captions.add_actor(new Label({ text: _('Humidity:') }));
        rb_captions.add_actor(new Label({ text: _('Pressure:') }));
        rb_captions.add_actor(new Label({ text: _('Wind:') }));
        rb_captions.add_actor(this._currentWeatherApiUniqueCap);
        rb_values.add_actor(this._currentWeatherTemperature);
        rb_values.add_actor(this._currentWeatherHumidity);
        rb_values.add_actor(this._currentWeatherPressure);
        rb_values.add_actor(this._currentWeatherWind);
        rb_values.add_actor(this._currentWeatherApiUnique);
        var rightColumn = new BoxLayout({ style_class: STYLE_DATABOX });
        rightColumn.add_actor(rb_captions);
        rightColumn.add_actor(rb_values);
        var weatherBox = new BoxLayout();
        weatherBox.add_actor(middleColumn);
        weatherBox.add_actor(rightColumn);
        var box = new BoxLayout({ style_class: STYLE_ICONBOX });
        box.add_actor(this._currentWeatherIcon);
        box.add_actor(weatherBox);
        this._currentWeather.set_child(box);
    };
    ;
    UI.prototype.rebuildFutureWeatherUi = function (config) {
        var _a;
        this.destroyFutureWeather();
        this._forecast = [];
        this._forecastBox = new GridLayout({
            orientation: config._verticalOrientation
        });
        this._forecastBox.set_column_homogeneous(true);
        var table = new Widget({
            layout_manager: this._forecastBox,
            style_class: STYLE_FORECAST_CONTAINER
        });
        this._futureWeather.set_child(table);
        var maxDays = this.app.GetMaxForecastDays();
        var maxRow = config._forecastRows;
        var maxCol = config._forecastColumns;
        if (config._verticalOrientation) {
            _a = [maxCol, maxRow], maxRow = _a[0], maxCol = _a[1];
        }
        var curRow = 0;
        var curCol = 0;
        for (var i = 0; i < maxDays; i++) {
            var forecastWeather = {};
            if (curCol >= maxCol) {
                curRow++;
                curCol = 0;
            }
            if (curRow >= maxRow)
                break;
            forecastWeather.Icon = new Icon({
                icon_type: config.IconType(),
                icon_size: 48,
                icon_name: APPLET_ICON,
                style_class: STYLE_FORECAST_ICON
            });
            forecastWeather.Day = new Label({
                style_class: STYLE_FORECAST_DAY,
                reactive: true
            });
            forecastWeather.Summary = new Label({
                style_class: STYLE_FORECAST_SUMMARY,
                reactive: true
            });
            forecastWeather.Temperature = new Label({
                style_class: STYLE_FORECAST_TEMPERATURE
            });
            var by = new BoxLayout({
                vertical: true,
                style_class: STYLE_FORECAST_DATABOX
            });
            by.add_actor(forecastWeather.Day);
            by.add_actor(forecastWeather.Summary);
            by.add_actor(forecastWeather.Temperature);
            var bb = new BoxLayout({
                style_class: STYLE_FORECAST_BOX
            });
            bb.add_actor(forecastWeather.Icon);
            bb.add_actor(by);
            this._forecast[i] = forecastWeather;
            if (!config._verticalOrientation) {
                this._forecastBox.attach(bb, curCol, curRow, 1, 1);
            }
            else {
                this._forecastBox.attach(bb, curRow, curCol, 1, 1);
            }
            curCol++;
        }
    };
    UI.prototype.rebuildBar = function (config) {
        this.destroyBar();
        this._timestamp = new Label({ text: "Placeholder" });
        this._bar.add(this._timestamp, {
            x_fill: false,
            x_align: Align.START,
            y_align: Align.MIDDLE,
            y_fill: false,
            expand: true
        });
        this._hourlyButton = new WeatherButton({
            reactive: true,
            can_focus: true,
            child: new Icon({
                icon_type: IconType.SYMBOLIC,
                icon_size: 12,
                icon_name: "custom-down-arrow-symbolic"
            }),
        }).actor;
        this._hourlyButton.connect(SIGNAL_CLICKED, Lang.bind(this, this.ToggleHourlyWeather));
        this._bar.add(this._hourlyButton, {
            x_fill: false,
            x_align: Align.MIDDLE,
            y_align: Align.MIDDLE,
            y_fill: false,
            expand: true
        });
        if (this.app.GetMaxHourlyForecasts() <= 0) {
            this.HideHourlyToggle();
        }
        this._providerCredit = new WeatherButton({ label: _(ELLIPSIS), reactive: true }).actor;
        this._providerCredit.connect(SIGNAL_CLICKED, Lang.bind(this, this.app.OpenUrl));
        this._bar.add(this._providerCredit, {
            x_fill: false,
            x_align: Align.END,
            y_align: Align.MIDDLE,
            y_fill: false,
            expand: true
        });
    };
    UI.prototype.HideHourlyToggle = function () {
        this._hourlyButton.child = null;
    };
    UI.prototype.rebuildHourlyWeatherUi = function (config) {
        this.destroyHourlyWeather();
        var hours = this.app.GetMaxHourlyForecasts();
        this._hourlyForecasts = [];
        for (var index = 0; index < hours; index++) {
            var box = new BoxLayout({ vertical: true });
            this._hourlyForecasts.push({
                Hour: new Label({ text: "Hour", style_class: "hourly-time" }),
                Icon: new Icon({
                    icon_type: config.IconType(),
                    icon_size: 24,
                    icon_name: APPLET_ICON,
                    style_class: "hourly-icon"
                }),
                Precipation: new Label({ text: " ", style_class: "hourly-data" }),
                Summary: new Label({ text: _(ELLIPSIS), style_class: "hourly-data" }),
                Temperature: new Label({ text: _(ELLIPSIS), style_class: "hourly-data" })
            });
            this._hourlyForecasts[index].Summary.clutter_text.set_line_wrap(true);
            this._hourlyForecasts[index].Summary.set_width(85);
            box.add_child(this._hourlyForecasts[index].Hour);
            box.add_child(this._hourlyForecasts[index].Icon);
            box.add_child(this._hourlyForecasts[index].Summary);
            box.add_child(this._hourlyForecasts[index].Temperature);
            box.add_child(this._hourlyForecasts[index].Precipation);
            this._hourlyBox.add(box, {
                x_fill: true,
                x_align: Align.MIDDLE,
                y_align: Align.MIDDLE,
                y_fill: true,
                expand: true
            });
        }
    };
    return UI;
}());
var Config = (function () {
    function Config(app, instanceID) {
        this.WEATHER_LOCATION = "location";
        this.WEATHER_USE_SYMBOLIC_ICONS_KEY = 'useSymbolicIcons';
        this.KEYS = {
            DATA_SERVICE: "dataService",
            API_KEY: "apiKey",
            TEMPERATURE_UNIT_KEY: "temperatureUnit",
            TEMPERATURE_HIGH_FIRST: "temperatureHighFirst",
            WIND_SPEED_UNIT: "windSpeedUnit",
            CITY: "locationLabelOverride",
            TRANSLATE_CONDITION: "translateCondition",
            VERTICAL_ORIENTATION: "verticalOrientation",
            SHOW_TEXT_IN_PANEL: "showTextInPanel",
            TEMP_TEXT_OVERRIDE: "tempTextOverride",
            SHOW_COMMENT_IN_PANEL: "showCommentInPanel",
            SHOW_SUNRISE: "showSunrise",
            SHOW_24HOURS: "show24Hours",
            FORECAST_DAYS: "forecastDays",
            FORECAST_HOURS: "forecastHours",
            FORECAST_COLS: "forecastColumns",
            FORECAST_ROWS: "forecastRows",
            REFRESH_INTERVAL: "refreshInterval",
            PRESSURE_UNIT: "pressureUnit",
            SHORT_CONDITIONS: "shortConditions",
            MANUAL_LOCATION: "manualLocation",
            USE_CUSTOM_APPLETICONS: 'useCustomAppletIcons',
            USE_CUSTOM_MENUICONS: "useCustomMenuIcons",
            RUSSIAN_STYLE: "tempRussianStyle",
        };
        this.app = app;
        this.settings = new AppletSettings(this, UUID, instanceID);
        this.BindSettings();
    }
    Config.prototype.BindSettings = function () {
        for (var k in this.KEYS) {
            var key = this.KEYS[k];
            var keyProp = "_" + key;
            this.settings.bindProperty(BindingDirection.IN, key, keyProp, Lang.bind(this.app, this.app.refreshAndRebuild), null);
        }
        this.settings.bindProperty(BindingDirection.BIDIRECTIONAL, this.WEATHER_LOCATION, ("_" + this.WEATHER_LOCATION), Lang.bind(this.app, this.app.refreshAndRebuild), null);
        this.settings.bindProperty(BindingDirection.IN, "keybinding", "keybinding", Lang.bind(this.app, this.app._onKeySettingsUpdated), null);
        keybindingManager.addHotKey(UUID, this.keybinding, Lang.bind(this.app, this.app.on_applet_clicked));
        this.settings.connect(SIGNAL_CHANGED + this.WEATHER_USE_SYMBOLIC_ICONS_KEY, Lang.bind(this, this.IconTypeChanged));
    };
    Config.prototype.IconTypeChanged = function () {
        this.app.ui.UpdateIconType(this.IconType());
        this.app.refreshWeather(false);
        this.app.log.Debug("Symbolic icon setting changed");
    };
    Config.prototype.IconType = function () {
        return this.settings.getValue(this.WEATHER_USE_SYMBOLIC_ICONS_KEY) ?
            IconType.SYMBOLIC :
            IconType.FULLCOLOR;
    };
    ;
    Config.prototype.SetLocation = function (value) {
        this.settings.setValue(this.WEATHER_LOCATION, value);
    };
    Config.prototype.noApiKey = function () {
        if (this._apiKey == undefined || this._apiKey == "") {
            return true;
        }
        return false;
    };
    ;
    return Config;
}());
var WeatherLoop = (function () {
    function WeatherLoop(app, instanceID) {
        this.lastUpdated = new Date(0);
        this.pauseRefresh = false;
        this.LOOP_INTERVAL = 15;
        this.appletRemoved = false;
        this.errorCount = 0;
        this.app = app;
        this.instanceID = instanceID;
        this.GUID = uuidv4();
        weatherAppletGUIDs[instanceID] = this.GUID;
    }
    WeatherLoop.prototype.IsDataTooOld = function () {
        if (!this.lastUpdated)
            return true;
        var oldDate = this.lastUpdated;
        oldDate.setMinutes(oldDate.getMinutes() + (this.app.config._refreshInterval * 2));
        return (this.lastUpdated > oldDate);
    };
    WeatherLoop.prototype.Start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3, 10];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        if (this.IsStray())
                            return [2];
                        if (this.app.encounteredError == true)
                            this.IncrementErrorCount();
                        this.ValidateLastUpdate();
                        if (!this.pauseRefresh) return [3, 3];
                        this.app.log.Debug("Configuration error, updating paused");
                        return [4, delay(this.LoopInterval())];
                    case 2:
                        _a.sent();
                        return [3, 0];
                    case 3:
                        if (!(this.errorCount > 0 || this.NextUpdate() < new Date())) return [3, 5];
                        this.app.log.Debug("Refresh triggered in mainloop with these values: lastUpdated " + ((!this.lastUpdated) ? "null" : this.lastUpdated.toLocaleString())
                            + ", errorCount " + this.errorCount.toString() + " , loopInterval " + (this.LoopInterval() / 1000).toString()
                            + " seconds, refreshInterval " + this.app.config._refreshInterval + " minutes");
                        return [4, this.app.refreshWeather(false)];
                    case 4:
                        state = _a.sent();
                        if (state == "success") {
                            this.lastUpdated = new Date();
                        }
                        return [3, 6];
                    case 5:
                        this.app.log.Debug("No need to update yet, skipping");
                        _a.label = 6;
                    case 6: return [3, 8];
                    case 7:
                        e_3 = _a.sent();
                        this.app.log.Error("Error in Main loop: " + e_3);
                        this.app.encounteredError = true;
                        return [3, 8];
                    case 8: return [4, delay(this.LoopInterval())];
                    case 9:
                        _a.sent();
                        return [3, 0];
                    case 10: return [2];
                }
            });
        });
    };
    ;
    WeatherLoop.prototype.IsStray = function () {
        if (this.appletRemoved == true)
            return true;
        if (this.GUID != weatherAppletGUIDs[this.instanceID]) {
            this.app.log.Debug("Applet GUID: " + this.GUID);
            this.app.log.Debug("GUID stored globally: " + weatherAppletGUIDs[this.instanceID]);
            this.app.log.Print("GUID mismatch, terminating applet");
            return true;
        }
        return false;
    };
    WeatherLoop.prototype.IncrementErrorCount = function () {
        this.app.encounteredError = false;
        this.errorCount++;
        this.app.log.Debug("Encountered error in previous loop");
        if (this.errorCount > 60)
            this.errorCount = 60;
    };
    WeatherLoop.prototype.NextUpdate = function () {
        return new Date(this.lastUpdated.getTime() + this.app.config._refreshInterval * 60000);
    };
    WeatherLoop.prototype.ValidateLastUpdate = function () {
        if (this.lastUpdated > new Date())
            this.lastUpdated = new Date(0);
    };
    WeatherLoop.prototype.LoopInterval = function () {
        return (this.errorCount > 0) ? this.LOOP_INTERVAL * this.errorCount * 1000 : this.LOOP_INTERVAL * 1000;
    };
    WeatherLoop.prototype.Stop = function () {
        this.appletRemoved = true;
    };
    WeatherLoop.prototype.Pause = function () {
        this.pauseRefresh = true;
    };
    WeatherLoop.prototype.Resume = function () {
        this.pauseRefresh = false;
    };
    WeatherLoop.prototype.ResetErrorCount = function () {
        this.errorCount = 0;
    };
    WeatherLoop.prototype.GetSecondsUntilNextRefresh = function () {
        return (this.errorCount > 0) ? (this.errorCount) * this.LOOP_INTERVAL : this.LOOP_INTERVAL;
    };
    return WeatherLoop;
}());
var WeatherButton = (function () {
    function WeatherButton(options) {
        this.signals = new SignalManager();
        this.disabled = false;
        this.actor = new Button(options);
        this.actor.add_style_class_name("popup-menu-item");
        this.actor.style = 'padding-top: 0px;padding-bottom: 0px; padding-right: 2px; padding-left: 2px; border-radius: 2px;';
        this.signals.connect(this.actor, 'enter-event', this.handleEnter, this);
        this.signals.connect(this.actor, 'leave-event', this.handleLeave, this);
    }
    WeatherButton.prototype.handleEnter = function (actor) {
        if (!this.disabled)
            this.actor.add_style_pseudo_class('active');
    };
    WeatherButton.prototype.handleLeave = function () {
        this.actor.remove_style_pseudo_class('active');
    };
    WeatherButton.prototype.disable = function () {
        this.disabled = true;
        this.actor.reactive = false;
    };
    WeatherButton.prototype.enable = function () {
        this.disabled = false;
        this.actor.reactive = true;
    };
    return WeatherButton;
}());
var SIGNAL_CHANGED = 'changed::';
var SIGNAL_CLICKED = 'clicked';
var SIGNAL_REPAINT = 'repaint';
var STYLE_LOCATION_LINK = 'weather-current-location-link';
var STYLE_SUMMARYBOX = 'weather-current-summarybox';
var STYLE_SUMMARY = 'weather-current-summary';
var STYLE_DATABOX = 'weather-current-databox';
var STYLE_ICON = 'weather-current-icon';
var STYLE_ICONBOX = 'weather-current-iconbox';
var STYLE_DATABOX_CAPTIONS = 'weather-current-databox-captions';
var STYLE_ASTRONOMY = 'weather-current-astronomy';
var STYLE_FORECAST_ICON = 'weather-forecast-icon';
var STYLE_FORECAST_DATABOX = 'weather-forecast-databox';
var STYLE_FORECAST_DAY = 'weather-forecast-day';
var STYLE_CONFIG = 'weather-config';
var STYLE_DATABOX_VALUES = 'weather-current-databox-values';
var STYLE_FORECAST_SUMMARY = 'weather-forecast-summary';
var STYLE_FORECAST_TEMPERATURE = 'weather-forecast-temperature';
var STYLE_FORECAST_BOX = 'weather-forecast-box';
var STYLE_FORECAST_CONTAINER = 'weather-forecast-container';
var STYLE_PANEL_BUTTON = 'panel-button';
var STYLE_POPUP_SEPARATOR_MENU_ITEM = 'popup-separator-menu-item';
var STYLE_CURRENT = 'current';
var STYLE_FORECAST = 'forecast';
var STYLE_WEATHER_MENU = 'weather-menu';
var STYLE_BAR = 'bottombar';
var BLANK = '   ';
var ELLIPSIS = '...';
var EN_DASH = '\u2013';
var FORWARD_SLASH = '\u002F';
function main(metadata, orientation, panelHeight, instanceId) {
    return new WeatherApplet(metadata, orientation, panelHeight, instanceId);
}

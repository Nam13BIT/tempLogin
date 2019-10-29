"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var browser_1 = __importDefault(require("./browser"));
var clock_1 = __importDefault(require("../general/clock"));
var ElementWrapper = /** @class */ (function () {
    function ElementWrapper(locator) {
        this._by = locator;
        this._element = browser_1.default.getDriverInstance().element(this._by);
    }
    ElementWrapper.prototype.singleLeftClick = function (timer) {
        if (timer === void 0) { timer = 5; }
        return __awaiter(this, void 0, void 0, function () {
            var clock_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(timer > 0)) return [3 /*break*/, 2];
                        clock_2 = new clock_1.default();
                        clock_2.tickTock();
                        return [4 /*yield*/, this._element.click().then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/];
                                });
                            }); }).catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(error.message.includes("Other element would receive the click") || error.message.includes("element is not attached to the page document"))) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.singleLeftClick(clock_2.getTimeLeftInSecond(timer))];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2: throw new Error(error.message);
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this];
                }
            });
        });
    };
    ElementWrapper.prototype.input = function (data, timer) {
        if (timer === void 0) { timer = 5; }
        return __awaiter(this, void 0, void 0, function () {
            var clock;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(timer > 0)) return [3 /*break*/, 5];
                        clock = new clock_1.default();
                        clock.tickTock();
                        return [4 /*yield*/, this._element.clear()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, browser_1.default.getDriverInstance().actions().mouseMove(this._element).perform()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this._element.sendKeys(data)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5: throw new Error("Time out in input information");
                    case 6: return [2 /*return*/, this];
                }
            });
        });
    };
    ElementWrapper.prototype.getText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._element.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ElementWrapper.prototype.isDisplayed = function (timer) {
        if (timer === void 0) { timer = 5; }
        return __awaiter(this, void 0, void 0, function () {
            var isDisplayed, clock_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isDisplayed = false;
                        if (!(timer > 0)) return [3 /*break*/, 2];
                        clock_3 = new clock_1.default();
                        clock_3.tickTock();
                        return [4 /*yield*/, this._element.isDisplayed().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    isDisplayed = true;
                                    return [2 /*return*/];
                                });
                            }); }).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(err.message.includes("No element found using locator") || err.message.includes("Index out of bound"))) return [3 /*break*/, 1];
                                            isDisplayed = false;
                                            return [3 /*break*/, 3];
                                        case 1: return [4 /*yield*/, this.isDisplayed(clock_3.getTimeLeftInSecond(timer))];
                                        case 2: return [2 /*return*/, _a.sent()];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2: throw new Error("Time out");
                    case 3: return [2 /*return*/, isDisplayed];
                }
            });
        });
    };
    ElementWrapper.prototype.waitForVisible = function (timeout) {
        if (timeout === void 0) { timeout = 5000; }
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this._element), timeout)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw new Error(err_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ElementWrapper.prototype.waitForInvisible = function (timeout) {
        if (timeout === void 0) { timeout = 5000; }
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.invisibilityOf(this._element), timeout)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_2 = _a.sent();
                        throw new Error(err_2.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ElementWrapper;
}());
exports.default = ElementWrapper;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var validation_1 = require("./validation");
var Field = /** @class */ (function () {
    function Field(name, shape) {
        (0, validation_1.validateIdentifier)(name);
        this._name = name;
        this.shape = shape;
    }
    Object.defineProperty(Field.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Field.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this.shape);
    };
    return Field;
}());
exports.Field = Field;

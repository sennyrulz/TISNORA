"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDefinition = void 0;
var list_1 = require("./list");
/**
 * Defines a reference to an input object
 */
var InputDefinition = /** @class */ (function () {
    function InputDefinition(input) {
        this.name = input.name;
        this.isOptional = false;
    }
    /**
     * Set the field optional.
     */
    InputDefinition.prototype.optional = function () {
        this.isOptional = true;
        return this;
    };
    /**
     * Allow multiple scalars to be used as values for the field.
     */
    InputDefinition.prototype.list = function () {
        return new list_1.ListDefinition(this);
    };
    InputDefinition.prototype.toString = function () {
        var required = this.isOptional ? '' : '!';
        return "".concat(this.name).concat(required);
    };
    return InputDefinition;
}());
exports.InputDefinition = InputDefinition;

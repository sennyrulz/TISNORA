"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchDefinition = void 0;
var auth_1 = require("./auth");
var cache_1 = require("./cache");
var unique_1 = require("./unique");
var SearchDefinition = /** @class */ (function () {
    function SearchDefinition(field) {
        this.field = field;
    }
    /**
     * Set the field-level auth directive.
     *
     * @param rules - A closure to build the authentication rules.
     */
    SearchDefinition.prototype.auth = function (rules) {
        return new auth_1.AuthDefinition(this, rules);
    };
    /**
     * Set the field-level cache directive.
     *
     * @param params - The cache definition parameters.
     */
    SearchDefinition.prototype.cache = function (params) {
        return new cache_1.CacheDefinition(this, new cache_1.FieldLevelCache(params));
    };
    /**
     * Make the field unique.
     *
     * @param scope - Additional fields to be added to the constraint.
     */
    SearchDefinition.prototype.unique = function (scope) {
        return new unique_1.UniqueDefinition(this, scope);
    };
    SearchDefinition.prototype.toString = function () {
        return "".concat(this.field, " @search");
    };
    return SearchDefinition;
}());
exports.SearchDefinition = SearchDefinition;

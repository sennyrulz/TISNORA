"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGraphQL = void 0;
var graphql_1 = require("graphql");
function renderGraphQL(obj) {
    var stringified = obj.toString();
    try {
        // check if it's valid graphql
        (0, graphql_1.parse)(stringified);
        return stringified;
    }
    catch (e) {
        console.log(stringified);
        throw e;
    }
}
exports.renderGraphQL = renderGraphQL;

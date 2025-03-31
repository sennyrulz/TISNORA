"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIdentifier = void 0;
/**
 * Throws, if given input value is a valid GraphQL and JavaScript identifier.
 */
function validateIdentifier(identifier) {
    var identifierRE = new RegExp(/^[_a-zA-Z][_a-zA-Z0-9]*$/);
    if (!identifierRE.test(identifier)) {
        throw "Given name \"".concat(identifier, "\" is not a valid TypeScript identifier.");
    }
}
exports.validateIdentifier = validateIdentifier;

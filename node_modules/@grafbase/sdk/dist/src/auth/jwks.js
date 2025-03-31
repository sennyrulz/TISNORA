"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWKSAuth = void 0;
var JWKSAuth = /** @class */ (function () {
    function JWKSAuth(params) {
        this.issuer = params.issuer;
        this.jwksEndpoint = params.jwksEndpoint;
        this.clientId = params.clientId;
        this.groupsClaim = params.groupsClaim;
    }
    JWKSAuth.prototype.toString = function () {
        var issuer = this.issuer ? "issuer: \"".concat(this.issuer, "\"") : '';
        var jwksEndpoint = '';
        if (!this.issuer && this.jwksEndpoint) {
            jwksEndpoint = "jwksEndpoint: \"".concat(this.jwksEndpoint, "\"");
        }
        else if (this.jwksEndpoint) {
            jwksEndpoint = ", jwksEndpoint: \"".concat(this.jwksEndpoint, "\"");
        }
        var clientId = this.clientId ? ", clientId: \"".concat(this.clientId, "\"") : '';
        var groupsClaim = this.groupsClaim
            ? ", groupsClaim: \"".concat(this.groupsClaim, "\"")
            : '';
        return "{ type: jwks, ".concat(issuer).concat(jwksEndpoint).concat(clientId).concat(groupsClaim, " }");
    };
    return JWKSAuth;
}());
exports.JWKSAuth = JWKSAuth;

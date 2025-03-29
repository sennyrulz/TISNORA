"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenIDAuth = void 0;
var OpenIDAuth = /** @class */ (function () {
    function OpenIDAuth(params) {
        this.issuer = params.issuer;
        this.clientId = params.clientId;
        this.groupsClaim = params.groupsClaim;
    }
    OpenIDAuth.prototype.toString = function () {
        var clientId = this.clientId ? ", clientId: \"".concat(this.clientId, "\"") : '';
        var groupsClaim = this.groupsClaim
            ? ", groupsClaim: \"".concat(this.groupsClaim, "\"")
            : '';
        return "{ type: oidc, issuer: \"".concat(this.issuer, "\"").concat(clientId).concat(groupsClaim, " }");
    };
    return OpenIDAuth;
}());
exports.OpenIDAuth = OpenIDAuth;

/**
 * Input parameters to define an OpenID auth provider. Requires `issuer`
 * to be defined, and optionally supports the `clientId` and `groupsClaim`
 * definitions.
 *
 * `clientId` should be defined for providers that sign tokens with the same
 * `iss` value. The value of `clientId` is checked against the `aud` claim
 * inside the JWT.
 *
 * `groupsClaim` should be defined for group-based auth to use a custom claim
 * path.
 */
export interface OpenIDParams {
    issuer: string;
    clientId?: string;
    groupsClaim?: string;
}
export declare class OpenIDAuth {
    private issuer;
    private clientId?;
    private groupsClaim?;
    constructor(params: OpenIDParams);
    toString(): string;
}
//# sourceMappingURL=openid.d.ts.map
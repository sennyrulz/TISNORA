import { AuthRuleF } from '../auth';
import { ListDefinition } from './list';
import { AuthDefinition } from './auth';
import { CacheDefinition, FieldCacheParams } from './cache';
import { LengthLimitedStringDefinition } from './length-limited-string';
import { ScalarDefinition } from './scalar';
import { UniqueDefinition } from './unique';
import { EnumDefinition } from './enum';
/**
 * A list of field types that can hold a `@search` attribute.
 */
export type Searchable = ScalarDefinition | ListDefinition | UniqueDefinition | LengthLimitedStringDefinition | CacheDefinition | AuthDefinition | EnumDefinition<any, any>;
export declare class SearchDefinition {
    private field;
    constructor(field: Searchable);
    /**
     * Set the field-level auth directive.
     *
     * @param rules - A closure to build the authentication rules.
     */
    auth(rules: AuthRuleF): AuthDefinition;
    /**
     * Set the field-level cache directive.
     *
     * @param params - The cache definition parameters.
     */
    cache(params: FieldCacheParams): CacheDefinition;
    /**
     * Make the field unique.
     *
     * @param scope - Additional fields to be added to the constraint.
     */
    unique(scope?: string[]): UniqueDefinition;
    toString(): string;
}
//# sourceMappingURL=search.d.ts.map
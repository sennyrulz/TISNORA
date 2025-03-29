import { Input } from '../input_type';
import { ListDefinition } from './list';
/**
 * Defines a reference to an input object
 */
export declare class InputDefinition {
    private name;
    private isOptional;
    constructor(input: Input);
    /**
     * Set the field optional.
     */
    optional(): this;
    /**
     * Allow multiple scalars to be used as values for the field.
     */
    list(): ListDefinition;
    toString(): string;
}
//# sourceMappingURL=input.d.ts.map
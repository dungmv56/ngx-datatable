import { TableColumnProp } from '../types';
export declare type ValueGetter = (obj: any, prop: TableColumnProp) => any;
/**
 * Always returns the empty string ''
 * @returns {string}
 */
export declare function emptyStringGetter(): string;
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
export declare function getterForProp(prop: TableColumnProp): ValueGetter;
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns {any} or '' if invalid index
 */
export declare function numericIndexGetter(row: any[], index: number): any;
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 * @returns {any}
 */
<<<<<<< HEAD
export declare function shallowValueGetter(obj: object, fieldName: string): any;
=======
export declare function shallowValueGetter(obj: any, fieldName: string): any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {object} obj
 * @param {string} path
 */
<<<<<<< HEAD
export declare function deepValueGetter(obj: object, path: string): any;
=======
export declare function deepValueGetter(obj: any, path: string): any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

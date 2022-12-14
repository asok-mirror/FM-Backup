/* tslint:disable */
/* eslint-disable */
/**
 * Unleash API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.11.0-beta.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TagSchema,
    TagSchemaFromJSON,
    TagSchemaFromJSONTyped,
    TagSchemaToJSON,
} from './TagSchema';

/**
 * 
 * @export
 * @interface TagsResponseSchema
 */
export interface TagsResponseSchema {
    /**
     * 
     * @type {number}
     * @memberof TagsResponseSchema
     */
    version: number;
    /**
     * 
     * @type {Array<TagSchema>}
     * @memberof TagsResponseSchema
     */
    tags: Array<TagSchema>;
}

export function TagsResponseSchemaFromJSON(json: any): TagsResponseSchema {
    return TagsResponseSchemaFromJSONTyped(json, false);
}

export function TagsResponseSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagsResponseSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'tags': ((json['tags'] as Array<any>).map(TagSchemaFromJSON)),
    };
}

export function TagsResponseSchemaToJSON(value?: TagsResponseSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'tags': ((value.tags as Array<any>).map(TagSchemaToJSON)),
    };
}


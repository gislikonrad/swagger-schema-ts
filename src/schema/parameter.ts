import { In } from "./in";
import { Schema } from "./schema";
import { Type } from "./type";
import { Format } from "./format";
import { CollectionFormat } from "./collection-format";
import { Items } from "./items";

/** Describes a single operation parameter. */
export class Parameter /*extends SchemaBase*/ {
  /**
   * The name of the parameter. Parameter names are case sensitive.
   *  - If in is "path", the name field MUST correspond to the associated path segment from the path field in the Paths Object. See Path Templating for further information.
   *  - For all other cases, the name corresponds to the parameter name used based on the in property.
   */
  name: string;
  /** The location of the parameter. Possible values are "query", "header", "path", "formData" or "body". */  
  in: In;
  /** A brief description of the parameter. This could contain examples of use. GFM syntax can be used for rich text representation. */
  description?: string;
  /** Determines whether this parameter is mandatory. If the parameter is in "path", this property is required and its value MUST be true. Otherwise, the property MAY be included and its default value is false. */
  required?: boolean;
  
  /**
   * Required if in is "body". 
   * The schema defining the type used for the body parameter. */
  schema?: Schema;
  
  /** 
   * Requried if in is not "body".
   * The type of the parameter. Since the parameter is not located at the request body, it is limited to simple types (that is, not an object). The value MUST be one of "string", "number", "integer", "boolean", "array" or "file". If type is "file", the consumes MUST be either "multipart/form-data", " application/x-www-form-urlencoded" or both and the parameter MUST be in "formData" */
  type?: Type;
  /** The extending format for the previously mentioned type. */
  format?: Format;
  /**
   * Determines the format of the array if type array is used. Possible values are:
   *  - csv - comma separated values foo,bar.
   *  - ssv - space separated values foo bar.
   *  - tsv - tab separated values foo\tbar.
   *  - pipes - pipe separated values foo|bar.
   *  - multi - corresponds to multiple parameter instances instead of multiple values for a single instance foo=bar&foo=baz. This is valid only for parameters in "query" or "formData".
   Default value is csv.
   */
  collectionFormat?: CollectionFormat;  
  /** Declares the value of the parameter that the server will use if none is provided, for example a "count" to control the number of results per page might default to 100 if not supplied by the client in the request. (Note: "default" has no meaning for required parameters.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2. Unlike JSON Schema this value MUST conform to the defined type for this parameter. */
  default?: any;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2. */
  maximum?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2. */
  exclusiveMaximum?: boolean;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3. */
  minimum?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3. */
  exclusiveMinimum?: boolean;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1. */
  maxLength?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2. */
  minLength?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3. */
  pattern?: string;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2. */
  maxItems?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3. */
  minItems?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4. */
  uniqueItems?: boolean;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1. */
  enum?: string[];
  /** Sets the ability to pass empty-valued parameters. This is valid only for either query or formData parameters and allows you to send a parameter with a name only or an empty value. Default value is false. */
  allowEmptyValue?: boolean;
  /** 
   * Required if type is "array". 
   * Describes the type of items in the array.
   */
  items?: Items;
  /** 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1. */
  multipleOf?: number;
}
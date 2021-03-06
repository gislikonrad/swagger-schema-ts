/** Allows referencing an external resource for extended documentation. */
export class ExternalDocumentation {
  /** A short description of the target documentation. GFM syntax can be used for rich text representation. */
  description?: string;
  /** The URL for the target documentation. Value MUST be in the format of a URL. */
  url: string;
}
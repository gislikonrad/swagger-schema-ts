import { License } from "./license";
import { Contact } from "./contact";

/** The object provides metadata about the API. The metadata can be used by the clients if needed, and can be presented in the Swagger-UI for convenience. */
export class Info {
  /** The title of the application */
  title: string;
  /** A short description of the application. GFM syntax can be used for rich text representation. */
  description?: string;
  /** The Terms of Service for the API. */
  termsOfService?: string;
  /** The contact information for the exposed API. */
  contact?: Contact;
  /** The license information for the exposed API. */
  licence?: License;
  /** Provides the version of the application API (not to be confused with the specification version). */
  version: string;
}
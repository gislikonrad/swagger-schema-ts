import { Parameter } from "./parameter";
import { Reference } from "./reference";
import { Operation } from "./operation";

/** Describes the operations available on a single path. A Path Item may be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available. */
export class Path {
  /** Allows for an external definition of this path item. The referenced structure MUST be in the format of a Path Item Object. If there are conflicts between the referenced definition and this Path Item's definition, the behavior is undefined. */
  $ref?: string;
  /** A definition of a GET operation on this path. */
  get?: Operation;
  /** A definition of a PUT operation on this path. */
  put?: Operation;
  /** A definition of a POST operation on this path. */
  post?: Operation;
  /** A definition of a DELETE operation on this path. */
  delete?: Operation;
  /** A definition of a OPTIONS operation on this path. */
  options?: Operation;
  /** A definition of a HEAD operation on this path. */
  head?: Operation;
  /** A definition of a PATCH operation on this path. */
  patch?: Operation;
  /** A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the Swagger Object's parameters. There can be one "body" parameter at most. */
  parameters?: (Reference|Parameter)[];
}
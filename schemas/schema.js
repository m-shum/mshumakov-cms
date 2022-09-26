import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import contactLinks from "./objects/contactLinks";
import project from "./documents/project";
import projectsArray from "./documents/projectsArray";
import projectReference from "./objects/projectReference";
import portableText from "./objects/portableText";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    contactLinks,
    project,
    projectsArray,
    projectReference,
    portableText,
  ]),
});

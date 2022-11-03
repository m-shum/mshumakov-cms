import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import info from "./documents/info";
import project from "./documents/project";
import projectsArray from "./documents/projectsArray";
import contactLinks from "./objects/contactLinks";
import portableText from "./objects/portableText";
import projectReference from "./objects/projectReference";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    contactLinks,
    info,
    project,
    projectsArray,
    projectReference,
    portableText,
  ]),
});

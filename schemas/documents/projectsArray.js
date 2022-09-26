export default {
  name: "projectsArray",
  title: "Projects Array",
  type: "document",
  fields: [
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "projectReference" }],
    },
  ],
  preview: {
    select: {
      reference: "projectReference",
    },
  },
};

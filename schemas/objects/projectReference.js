export default {
  name: "projectRef",
  title: "Project Item",
  type: "object",
  fields: [
    {
      name: "project",
      type: "reference",
      title: "Project",
      to: [{ type: "project" }],
    },
  ],
  preview: {
    select: {
      title: "project.title",
      subtitle: "project.slug.current",
      media: "project.cover",
    },
  },
};

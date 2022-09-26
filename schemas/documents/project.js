export default {
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "siteLink",
      title: "Link to Site",
      type: "url",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "builtAt",
      title: "Built at",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "portableText",
    },
    {
      name: "cover",
      title: "Cover",
      type: "mux.video",
    },
    {
      name: "assets",
      title: "Assets",
      type: "array",
      of: [
        {
          name: "imageAsset",
          title: "Image",
          type: "image",
        },
        {
          name: "videoAsset",
          title: "Video Asset",
          type: "mux.video",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      media: "cover",
    },
  },
};

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
      name: "selectColor",
      title: "Select Color",
      type: "color",
    },
    {
      name: "description",
      title: "Description",
      type: "portableText",
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
      options: { metadata: ["dimensions"] },
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
          options: { metadata: ["dimensions"] },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "assetGroup",
              title: "Asset Group",
              type: "number",
            },
          ],
        },
        {
          name: "videoAsset",
          title: "Video Asset",
          type: "object",
          fields: [
            {
              name: "asset",
              title: "Asset",
              type: "mux.video",
            },
            {
              name: "background",
              title: "Background",
              type: "color",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "assetGroup",
              title: "Asset Group",
              type: "number",
            },
          ],
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

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
      name: "projectType",
      title: "Project Type",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "string",
    },
    {
      name: "myRoles",
      title: "My Roles",
      type: "string",
    },
    {
      name: "designedBy",
      title: "Designed By",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "url", title: "link", type: "url" },
      ],
    },
    {
      name: "developedBy",
      title: "Developed By",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "url", title: "link", type: "url" },
      ],
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
          name: "image",
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
            {
              name: "isMobile",
              title: "Mobile",
              type: "boolean",
            },
            {
              name: "isFullBleed",
              title: "Full Bleed",
              type: "boolean",
            },
            {
              name: "hasFrame",
              title: "Framed",
              type: "boolean",
            },
            {
              name: "frameColor",
              title: "Frame Color",
              type: "color",
            },
          ],
        },
        {
          name: "video",
          title: "Video",
          type: "file",
          fields: [
            {
              name: "video_sm",
              title: "Video – Small",
              type: "file",
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
            {
              name: "isMobile",
              title: "Mobile",
              type: "boolean",
            },
            {
              name: "isFullBleed",
              title: "Full Bleed",
              type: "boolean",
            },
            {
              name: "hasFrame",
              title: "Framed",
              type: "boolean",
            },
            {
              name: "frameColor",
              title: "Frame Color",
              type: "color",
            },
            {
              name: "width",
              title: "Width",
              type: "number",
            },
            {
              name: "height",
              title: "Height",
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

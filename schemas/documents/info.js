export default {
  name: "info",
  title: "Info",
  type: "document",
  fields: [
    {
      name: "bio",
      title: "Bio",
      type: "portableText",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
      options: {
        metadata: ["dimensions"],
      },
    },
    {
      name: "contactLinks",
      title: "Contact Links",
      type: "contactLinks",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
      accept: ".pdf",
    },
  ],
};

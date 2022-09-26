export default {
  name: "imageAsset",
  title: "Image",
  type: "image",
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
  options: { metadata: ["dimensions"] },
};

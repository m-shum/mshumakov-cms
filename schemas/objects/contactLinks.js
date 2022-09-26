const services = ["email", "github", "twitter"];

export default {
  name: "contactLinks",
  title: "Contact",
  type: "object",
  fields: services.map((name) => ({ name, title: name, type: "url" })),
};
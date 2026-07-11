export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/piblic/", "/seller/*"],
    },
    sitemap: "http://localhost:4000/sitemap.xml",
  };
}

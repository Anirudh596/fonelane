module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "'unsafe-inline'",
            "https://ec2-35-154-21-93.ap-south-1.compute.amazonaws.com:1337",
            "http://ec2-35-154-21-93.ap-south-1.compute.amazonaws.com:1337",
          ],
          "img-src": ["data:", "blob:", "res.cloudinary.com"],
          "media-src": ["data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://fonelane.netlify.app",
        "http://fonelane.netlify.app",
        "http://ec2-35-154-21-93.ap-south-1.compute.amazonaws.com:1337",
      ], // Include both http and https versions
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

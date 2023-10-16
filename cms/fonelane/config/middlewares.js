module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
<<<<<<< HEAD
          'connect-src': ["'self'", 'https:'],
         'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
=======
          connectSrc: ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
>>>>>>> 1edc2f8fb0cee0ccbef73cc59af3369404c55dda
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

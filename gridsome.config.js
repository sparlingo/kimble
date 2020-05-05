module.exports = {
  siteName: 'Kimble',
  siteDescription: "ESL Lesson Planning",
  siteUrl: 'https://kimble.netlify.com',
  titleTemplate: `%s | Kimble`,
  icon: 'src/favicon.png',
  about: 'This is where we talk about ourselves',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/posts/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          }
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['student', 'phoneme', 'author'],
        loginData: {
          identifier: '',
          password: ''
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ],
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  }
};

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Kimble',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: 'bdgyzg04',
        dataset: 'development',
        //token: '<tokenWithReadRights>',
        overlayDrafts: false,
        watchMode: true,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'DocPage'
      }
    }
  ],
  templates: {
    //Post: '/blog/:year/:month/:title',
  }
}

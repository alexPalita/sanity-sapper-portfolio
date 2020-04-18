export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9b43f58d1bfb021c43a709',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-portfolio-studio',
                  apiId: '5d6012da-b923-47ef-b0ae-369f1f21d568'
                },
                {
                  buildHookId: '5e9b43f57824faf8f1752422',
                  title: 'Blog Website',
                  name: 'sanity-sapper-portfolio',
                  apiId: 'a1c5da5c-108d-44ab-bce9-4182d22cfbd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexPalita/sanity-sapper-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

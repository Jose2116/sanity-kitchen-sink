export default {
  widgets: [
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
                  buildHookId: '607cc071a4ca12790c773ce7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3ynbvoho',
                  apiId: 'cc99611e-998d-46fe-a192-bbd7debd9c9a'
                },
                {
                  buildHookId: '607cc071226b31aa8999813b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mkgic36b',
                  apiId: '884b7cc3-5e75-40a2-9b2d-6562431613f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jose2116/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mkgic36b.netlify.app', category: 'apps'}
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

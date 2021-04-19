// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const request = axios.create({
  baseURL: "https://api.github.com",
  timeout: 15000
})

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { data } = await request.get(`/users/chuyingjie`)
    const collection = addCollection('UserInfo')
    collection.addNode({
      id: data.id,
      login: data.login,
      avatar_url: data.avatar_url,
      location: data.location || '',
    })
  })

  // api.loadSource(async actions => {
  //   const { data } = await axios.get('https://api.example.com/posts')

  //   const collection = actions.addCollection({
  //     typeName: 'UserInfo'
  //   })

  //   for (const post of posts) {
  //     collection.addNode({
  //       id: post.id,
  //       title: post.title
  //     })
  //   }
  // })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}

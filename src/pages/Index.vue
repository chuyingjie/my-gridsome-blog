<template>
  <Layout>
    <h1>test</h1>
  </Layout>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      projects: [
        {
          login: "GitHub-Laziji",
          id: 30425217,
          node_id: "MDQ6VXNlcjMwNDI1MjE3",
          avatar_url: "https://avatars.githubusercontent.com/u/30425217?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/GitHub-Laziji",
          html_url: "https://github.com/GitHub-Laziji",
          followers_url: "https://api.github.com/users/GitHub-Laziji/followers",
          following_url:
            "https://api.github.com/users/GitHub-Laziji/following{/other_user}",
          gists_url:
            "https://api.github.com/users/GitHub-Laziji/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/GitHub-Laziji/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/GitHub-Laziji/subscriptions",
          organizations_url: "https://api.github.com/users/GitHub-Laziji/orgs",
          repos_url: "https://api.github.com/users/GitHub-Laziji/repos",
          events_url:
            "https://api.github.com/users/GitHub-Laziji/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/GitHub-Laziji/received_events",
          type: "User",
          site_admin: false,
          name: "辣子鸡",
          company: null,
          blog: "laboo.top",
          location: "fuzhou",
          email: null,
          hireable: null,
          bio: "                              (°ー°〃) ",
          twitter_username: null,
          public_repos: 30,
          public_gists: 17,
          followers: 155,
          following: 18,
          created_at: "2017-07-25T02:47:47Z",
          updated_at: "2021-03-31T02:08:48Z",
        },
      ],
      loading: false,
    };
  },
};
</script>

<style>
</style>
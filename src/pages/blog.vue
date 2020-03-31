<template>
  <Layout>
    <main>
      <section>
        <h1 class="text-4xl">Blog</h1>
        <div id="posts" class="container mx-auto">
          <transition-group name="fade">
            <PostCard
              v-for="{ node } of loadedPosts"
              :key="node.id"
              :post="node"
            />
          </transition-group>
          <ClientOnly>
            <infinite-loading @infinite="infiniteHandler" spinner="spiral">
              <div slot="no-more">
                You've seen them all. Good for you!
              </div>
              <div slot="no-results">
                Sorry, no posts yet
              </div>
            </infinite-loading>
          </ClientOnly>
        </div>
      </section>
    </main>
  </Layout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: ease opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
article {
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>

<script>
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard  
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    }
  },
  created() {
    this.loadedPosts.push(...this.$page.posts.edges)
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
        $state.complete()
      } else {
        const { data } = await this.$fetch(
          `/blog/${this.currentPage + 1}`
        )
        
        if (data.posts.edges.length) {
          this.currentPage = data.posts.pageInfo.currentPage
          this.loadedPosts.push(...data.posts.edges)
          $state.loaded()
        } else {
          $state.complete()
        }
      }
    }
  }
}
</script>

<page-query>
  query ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          timeToRead
          content
          excerpt
          description
          path
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>
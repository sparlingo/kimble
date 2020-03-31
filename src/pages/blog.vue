<template>
  <Layout>
    <main>
      <section>
        <h1 class="text-4xl">Blog Posts</h1>
        <div id="posts" class="container mx-auto">
          <transition-group name="fade">
            <PostCard
              v-for="edge in $page.posts.edges"
              :key="edge.node.id"
              :post="edge.node"
            />
          </transition-group>
        </div>
      </section>
      <Pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </main>
  </Layout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: ease opacity 1.5s;
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
import Pagination from '@/components/Pagination'

export default {
  components: {
    PostCard,
    Pagination
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
          date (format: "D MMMM YY")
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
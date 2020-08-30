<template>
  <div class="blog">
    <h1>Tensor Blogs</h1>
    <p class="intro">Writing is the ultimate way to improve my skills and knowledge. 
      So, these technical notes and tutorials are important footprints 
      in my journey of exploring the mystery world of computer science 
      and deep learning.
    </p>
    <div class="blog-card-grid">
      <blog-card :title="'Deep Learning with Numpy?'" :url="'https://google.com'"/>
      <blog-card/>
      <blog-card/>
      <blog-card/>
      <blog-card/>
      <blog-card/>
    </div>  
    <button v-if="isMore" type="submit" class="btn btn--red btn--go" @click.prevent="loadMore">LOAD MORE</button>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogCard from '@/components/BlogCard.vue'
export default {
  name: 'Blog',
  components: {
    BlogCard,
  },
  data () {
    return {
      isMore: true,
    } 
  },
}
</script>

<style scoped>
.intro {
  text-align: justify;
}

.blog-card-grid {
  display: grid;
  margin-top: 2rem;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 30px;
}
@media(max-width:650px) {
  .blog-card-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.btn {
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  background: transparent;
  border: none;
}
.btn:hover {
  cursor: pointer;
  opacity: 0.5;
}
.btn--green {
  background: #42b983;
  color: white;
  font-weight: bold;
}
.btn--red {
  background: #d9534f;
  color: white;
  font-weight: bold;
}
.btn--go {
  padding: .5rem 1rem;
  margin: 2rem .5rem;
}
.btn--disabled {
   cursor: not-allowed;
   pointer-events: none;
   background: #ccc;
}
</style>
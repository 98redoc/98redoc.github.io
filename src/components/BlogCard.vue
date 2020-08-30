<template>
    <a class="blog-card selector selector--black" v-bind:href="url">
        <!-- Make an Blog Card Component -->
        <div class="blog-card__title">
            <h2 v-if="title">{{title}}</h2>
            <h2 v-else>Title is not found</h2>
        </div>
        <p class="blog-card__readmore">READ MORE <span class="rightarrow">→</span></p>
    </a>
</template>

<script>
export default {
    name: 'BlogCard',
    props: [ 'url', 'title' ]
}
</script>

<style scoped>
.blog-card {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    text-align: left;
    position: relative;
    display: grid;
    grid-template-rows: auto 3rem;
}
.blog-card__title {
    text-align: left;
    padding-left: 10px;
    border-bottom: 1px solid;
}
.blog-card__readmore{
    max-height: 4rem;
    margin: auto 0;
    text-align: right;
    padding-right: 10px;
}
.selector {
    text-decoration: none;
}
.selector:hover {
  cursor: pointer;
  opacity: 0.5;
}
.selector:hover .rightarrow {
    padding-left: 2px;
}

.selector--black {
    color: black;
}
</style>
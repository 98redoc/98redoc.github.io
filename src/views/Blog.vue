<template>
    <div class="blog">
        <!-- <div v-html="compiledMarkdown"></div> -->
        <div class="blog__content" v-if="blog" v-html="compiledMarkdown"></div>
        <!-- <p v-if="blog">{{ blog.title }}</p> -->
    </div>
</template>

<script>
import config from '../config.js'
import axios from 'axios'
import marked from 'marked'
export default {
    data: () => ({
        blog: null
    }),
    created () {
        this.getBlog()
    },
    computed: {
        compiledMarkdown: function() {
            this.getBlog()
            return marked(this.blog.body);
        },
    },
    methods: {
        getBlog() {
            axios.get(config.APP_URL+'api/blog/'+this.$route.params.id).then( resp => {
                this.blog = resp.data
            }).catch(error => console.log(error.response.data.error))
        }
    }
}
</script>

<style scoped>
.blog__content {
    text-align: justify;
}
.blog__content >>> img {
    max-width: 100%;
}

</style>
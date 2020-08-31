<template>
  <div class="writer">
    <vue-element-loading :active="status.isPublishing" :text="'Publishing ...'" />
    <h1>Your Blog: {{title}}</h1>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
    <button type="submit" class="btn btn--green btn--go" @click.prevent="publish">Publish</button>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'
import config from '../config.js'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'
export default {
    data() { 
        return {
            input: "# Your Blog Title",
            title: "Your Blog Title",
            status: {
                isPublishing: false
            }
        }
    },
    computed: {
        compiledMarkdown: function() {
            return marked(this.input);
        },
    },
    methods: {
        update: _.debounce(function(e) {
            this.input = e.target.value
            this.title = this.getTitleMarkdown(e.target.value)
          }, 300),
        getTitleMarkdown(text) {
            // Credit to: https://github.com/azu/get-title-markdown
            var headerMatch = /^#+(.*)$/
            var lines = text.split("\n")
            var noEmptyLines = lines.filter(function (line) {
                return line.length > 0
            })
            if (noEmptyLines.length === 0) {
                throw new Error("no content")
            }
            var firstLine = noEmptyLines[0]
            var match = firstLine.match(headerMatch)
            if (match == null) {
                return
            }
            var title = match && match[1]
            return title.trim()
        },
        publish() {
            this.status.isPublishing = true
            let formData = new FormData()
            let JWTToken = this.$store.state.user.token
            formData.append('title', this.title)
            formData.append('body', this.input)
            axios.post(config.APP_URL+'api/blogs', formData, {headers: {"Authorization" : `Bearer ${JWTToken}`}})
                .then(resp => {
                    // this.$store.commit('updateUser', resp.data)
                    // this.$store.commit('loggedIn')
                    console.log(resp.data)
                })
                .catch(error => console.log(error.response.data.error))
            this.status.isPublishing = false
            this.$router.push({ name: 'Blog' })
        }
    },
    components: {
        VueElementLoading,
    }
}
</script>

<style scoped>
.writer {
    height: 70vh;
    position: relative;
    margin: 0;
}
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  text-align: left;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  overflow-y: scroll;
}

#editor div {
    margin-top: -1em;
    font-size: calc(0.5em + 1vmin);
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
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
.btn--go {
  padding: .5rem 1rem;
  margin: .5rem;
}
.btn--disabled {
   cursor: not-allowed;
   pointer-events: none;
   background: #ccc;
}
</style>
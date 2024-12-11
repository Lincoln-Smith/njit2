const vue_app = Vue.createApp({
    created() {
        fetch('movies.json').then(response => response.json()).then(json => {
            this.movies = json;
        });
    },
    data() {
        return {
            movies: [], 
            title: "IMDB + Lincoln’s Top 8 Movies", 
            owner: "Lincoln", 
            github: "https://github.com/yourusername" 
        };
    },
    methods: {
        /* Add methods as needed */
    }
});

vue_app.mount("#vue_app");

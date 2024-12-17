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
        getMonthText(dateArray) {
            const [year, month, day] = dateArray;
            let monthText = "";
            switch (month) {
                case 1: monthText = "January"; break;
                case 2: monthText = "February"; break;
                case 3: monthText = "March"; break;
                case 4: monthText = "April"; break;
                case 5: monthText = "May"; break;
                case 6: monthText = "June"; break;
                case 7: monthText = "July"; break;
                case 8: monthText = "August"; break;
                case 9: monthText = "September"; break;
                case 10: monthText = "October"; break;
                case 11: monthText = "November"; break;
                case 12: monthText = "December"; break;
                default: monthText = "Invalid Month";
            }
            return `${monthText} ${day}, ${year}`;
        },
        timeText(minutes) {
            const hours = Math.trunc(minutes / 60);
            const mins = minutes % 60;
            return `${hours}h ${mins}m`;
        }
    }
});

vue_app.mount("#vue_app");

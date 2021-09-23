const axios = require('axios')
const baseURL = 'https://www.googleapis.com/youtube/v3/search'

function searchByKeyword() {
    var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
    for(var i in results.items) {
      var item = results.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
}

axios.get(baseURL).then((res) => {
    console.log(res.data.channelId === 'UCIbJuoAAdTP9rClO7mK-aVg')
})




// var axios = require('axios');
// const base_url = 'http://'

// axios.get(base_url).then((res) => {
// console.log(res.data)
// })

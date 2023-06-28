function searchYouTube() {
    var searchInput = document.getElementById('search-input').value;
    
    // Lakukan permintaan pencarian ke YouTube API menggunakan kata kunci 'searchInput'
    // Di sini, kita akan menggunakan respons yang telah Anda berikan sebagai contoh
  
    // Simpan respons JSON ke dalam variabel 'apiResponse' (gantilah dengan respons yang sebenarnya)
    var apiResponse = {
      "kind": "youtube#searchListResponse",
      "etag": "hsZUoY1omn2AO4quOoCfAceEQ9s",
      "nextPageToken": "CAUQAA",
      "regionCode": "ID",
      "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
      },
      "items": [
        // Daftar item hasil pencarian YouTube
      ]
    };
  
    // Dapatkan elemen div 'youtube-results'
    var resultsContainer = document.getElementById('youtube-results');
  
    // Bersihkan konten yang ada di dalam elemen div 'youtube-results'
    resultsContainer.innerHTML = '';
  
    // Iterasi melalui setiap item hasil pencarian dan tampilkan di halaman
    apiResponse.items.forEach(function(item) {
      // Ambil informasi yang dibutuhkan dari item
      var videoId = item.id.videoId;
      var title = item.snippet.title;
      var description = item.snippet.description;
      var thumbnailUrl = item.snippet.thumbnails.medium.url;
  
      // Buat elemen video container
      var videoContainer = document.createElement('div');
      videoContainer.className = 'youtube-video';
  
      // Buat elemen thumbnail
      var thumbnail = document.createElement('img');
      thumbnail.src = thumbnailUrl;
      thumbnail.className = 'youtube-thumbnail';
  
      // Buat elemen judul
      var videoTitle = document.createElement('h2');
      videoTitle.textContent = title;
      videoTitle.className = 'youtube-title';
  
      // Buat elemen deskripsi
      var videoDescription = document.createElement('p');
      videoDescription.textContent = description;
      videoDescription.className = 'youtube-description';
  
      // Tambahkan elemen thumbnail, judul, dan deskripsi ke dalam video container
      videoContainer.appendChild(thumbnail);
      videoContainer.appendChild(videoTitle);
      videoContainer.appendChild(videoDescription);
  
      // Tambahkan video container ke dalam elemen div 'youtube-results'
      resultsContainer.appendChild(videoContainer);
    });
  }
  
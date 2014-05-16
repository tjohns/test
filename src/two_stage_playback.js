var player;

// Wait for the API to load, then establish the
// lightbox player and the thumbnail click handlers.
function onYouTubePlayerAPIReady() {
  //Create the lightbox player and set its size
  player = new YT.Player('ytplayer', {
    height: '390',
    width: '640'
  });

  // Listen for click events on all thumbnails.
  YT.subscribe('thumbnail.onClick', function(event) {
    // event.data - Contains the video ID for clicked thumbnail.
   	// event.target - Contains a reference to the YT.Thumbnail API object
	// that was clicked.

	var thumbId = event.target.getIframe().id;
	if (thumbId === 'thumb1' || thumbId === 'thumb2') {
		// Open new window with that video
		window.location.href = 
		    'two_stage_playback_display.html?v=' + event.data;
	} else {
		// Open the video in a lightbox player on this page
		displayLightbox(event.data);
	}
  });
};

function displayLightbox(id) {
	// Display lightbox overlay and player
	$('#lightbox-overlay').css('display', 'block');
	$('#ytplayer').css('display', 'block');
	player.loadVideoById({videoId: id, startSeconds: 0});

}

// Add a listener to close the lightbox if the overlay is clicked
$('#lightbox-overlay').on('click', function() {
	player.stopVideo();
	$('#ytplayer').css('display', 'none');
	$('#lightbox-overlay').css('display', 'none');
} );
import Player from "@vimeo/player";
import throttle from "lodash.throttle";
(() => {
	const iframe = document.querySelector("iframe");
    const player = new Player(iframe);

    player.play();
	player.on("loaded", function () {
		if (localStorage.getItem("videoplayer-current-time")) {
			player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
		}
	});
	player.on("timeupdate", throttle((data)=>{
		localStorage.setItem("videoplayer-current-time", data.seconds);
	}, 1000));
})();

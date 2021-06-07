const videoEL = document.getElementById("webcam-vid");

        const startWebcam = () => {
            if(navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                    videoEL.srcObject = stream
                })
                .catch(err => {
                    console.log("wronggg", err)
                })
                     }
        }

        const stopWebcam = () => {
            var stream = videoEL.srcObject;
            var tracks = stream.getTracks()

            for( var i = 0; i < tracks.length; i++){
                var track = tracks[i];
                track.stop()
            }
            videoEL.srcObject = null;
        }
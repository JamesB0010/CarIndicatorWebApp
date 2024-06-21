const video0 = document.getElementById('videoElement0');
const video1 = document.getElementById('videoElement1');

function linkCameraStreamToVideoElement(videoElement){
    //request access to the camera
    navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream =>{
        videoElement.srcObject = stream;
    }).catch(error =>{
        console.error('Error accsssing the camera ', error);
    });
}

linkCameraStreamToVideoElement(video0);
linkCameraStreamToVideoElement(video1);
const videoElement=document.getElementById("video");
const button=document.getElementById("button");
async function selectMediaPlayer(){
    try{
    const mediaPlayer=await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject=mediaPlayer;
    videoElement.onloadedmetadata=()=>{videoElement.play();
};
    }
    catch(error){
    }
}
button.addEventListener('click',async ()=>{
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    button.disabled=false;
});
selectMediaPlayer();
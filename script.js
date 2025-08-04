// Write JavaScript code here
const container = document.getElementById("container");
const cloud = ` <div class="cloud">
                    <div class="cloudBubble1"> 
                    </div>
                    <div class="cloudBubble2"> 
                    </div>
                </div>`
container.innerHTML = cloud.repeat(8);

const clouds = document.getElementsByClassName('cloud');
for(const cloud of clouds){
    cloud.style.top = `${Math.random() * 100}%`;    //положение 
    cloud.style.left =`${Math.random() * 100}%`;
    cloud.style.transform = `scale(${Math.random() * 1.3 + 0.3})`; //размер облака

    const intervalTransition = Math.random() * 20 + 6; 
    cloud.style.transition = `all linear ${intervalTransition}s`;

    setTimeout(()=> cloud.style.left = `${Math.random() * 80}%`, 100)

    const startRight = Math.random() > 0.5;
    
    setInterval(() => {
        if(startRight) {
           cloud.style.left = `${Math.random() * 100}%` 
        }  else   cloud.style.left = `${Math.random() * -50}%`
        
    }, 4000)
    /*setInterval(()=> cloud.style.right = `${Math.random() * 100}%`, 4000)
    /*setInterval(()=> cloud.style.left = `${Math.random() * 100}%`, 4500)*/
}



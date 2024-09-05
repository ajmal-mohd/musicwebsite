let data = [];


const list_body=document.querySelector(".list-div")




async function fetchData() {


   
    try {
        const response = await fetch("https://5dd1894f15bbc2001448d28e.mockapi.io/playlist");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
        console.log("Data fetched successfully:", data); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }

 
    let row="";
    
    data.forEach((values,index)=>{

        row+=`

        <div class="music-item" onClick="show('${values.id}')">
        <img src="${values.albumCover}" alt="">
        <div class="detail">
            <h3 class="margin-const">${values.track}</h3>
        <p class="margin-const">${values.artist}</>
       
          

        </div>
     
    </div>
        


        `


    })


    list_body.innerHTML=row



  

   

}

fetchData()

  /// display div

  let allData=[]

  let head=document.querySelector(".image-view")
  let hello=document.querySelector(".hello")
  
 async function show(id){
    console.log(id, "show");

     const response = await fetch(`https://5dd1894f15bbc2001448d28e.mockapi.io/playlist/${id}`)
     allData= await response.json()
  
     head.innerHTML = `<img src="${allData.albumCover}" alt="Album Cover">`;
     hello.innerHTML=   ` <audio  controls >   <source src=" ${allData.file}"> type="audio/mpeg"  </audio>`
    
        



    
  }


  

  
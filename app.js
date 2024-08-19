const API="1b79a23"

let url="http://www.omdbapi.com/?apikey=1b79a23&t="

// let search="dhamaal";

let inp=document.querySelector("input");
let btn=document.querySelector("#btn");
let body=document.querySelector("body");

document.querySelector(".container").innerHTML="<h2>Search your favourite movie";

btn.addEventListener("click",async()=>{
   try{

           document.querySelector(".container").innerHTML="";
           let movie=inp.value;
           inp.value="";
           if(movie!=""){
                   let res=await search(movie);
                   final(res);
           }else{
                console.log("no movie search")
                document.querySelector(".container").innerHTML="<h2>NO movie search <h2>";
           }
   }catch(er){
        console.log(er);
        document.querySelector(".container").innerHTML="WRONG Search";
   }
   
   
})

async function search(movie){
        
                let inl= await axios.get(url+movie);
                console.log(inl.data);
                return inl.data
       
}


function final(res){
        console.log(res)
       
let contain=document.querySelector(".container");
let div=document.createElement("div");
div.classList.add("session");
div.innerHTML=`
<img src="${res.Poster}" alt="">
         <div class="main">
          <h1>${res.Title}</h1>
          <p class="rating"><span>Rating:</span>${res.Ratings[0].Value}</p>
          <a href="#" class="genre">${res.Genre}</a>
          <p><span>Release:</span>${res.Released}</p>
          <p><span>Duration:</span>${res.Runtime}</p>
          <p><span>Plot:</span>${res.Plot}</p>
</div>
`
contain.append(div);
}

        






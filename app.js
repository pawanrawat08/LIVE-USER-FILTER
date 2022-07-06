const result=document.getElementById('result');
const filter=document.getElementById('filter');
const listItems=[];

getData();


filter.addEventListener('input',(e)=>filterData(e.target.value));             //e.target.value gives what we type in 

async function getData(){
    const res=await fetch('https://codeforces.com/api/user.info?handles=khiyanigourav2001;Thots4salE;apcc_25;mujumdarishan;gehlottushar18;manusingh5oct;Reetesh_111;FUNctio_naL');
    // const res=await fetch('https://randomuser.me/api?results=50');

    const results=await res.json();
   
    //clear results
    result.innerHTML='';

    for (let i = 0; i < results.result.length; i++) {
        const li=document.createElement('li');
        listItems.push(li);
        li.innerHTML=`
            <div class="user-info">
            <img src="${results.result[i].avatar}" alt="${results.result[i].firstName}">
            <h4>${results.result[i].handle}</h4>
            <p>${results.result[i].maxRank}, ${results.result[i].maxRating}</p>
            </div>
        `
        result.appendChild(li);
      }

}

function filterData(searchTerm){
    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    })
}
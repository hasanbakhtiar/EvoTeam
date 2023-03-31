const text:any = document.querySelector('p') as HTMLElement;
const btn:any = document.querySelector('button') as HTMLButtonElement;



const fetchData = ()=>{
    const http:any = new XMLHttpRequest();
    http.onload = function(){
           text.innerHTML = this.responseText; 
    }
    http.open("GET",'../data/info.txt');
    http.send();
    
}

btn.onclick=fetchData;
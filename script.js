const input =document.getElementById("input")
const btn=document.getElementById("btn")
const body=document.getElementById("body1")
const ana_div=document.querySelector(".ana_div")
const p =document.createElement("p")
console.log(input,btn,body,ana_div)

const elements=["a","b","c","d","e","f","g","h","ı","i","+","-","*",".",1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","Z","Y","X","!","G"]




btn.addEventListener("click",()=>{
    const sifre =[]
    for(let i=0;i<input.value;i++){
       let random=Math.floor(Math.random()*(elements.length-1))+1
        if(sifre.includes(elements[random])){
            i--
            continue
            
        }
       
        sifre.push(elements[random])
     
     
        sifre.join("")
  
    } 


    p.style.color="white"
    p.style.fontSize="20px"
    p.style.fontWeight="bold"
    p.textContent=`Şifreniz toplam ${sifre.length} hanelidir ve şifreniz :  ${sifre.join("")} dir! `
    input.value=""
   ana_div.appendChild(p)
   
    
   
})
p.textContent=""
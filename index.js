let form=document.querySelector('form');
form.addEventListener('submit',handleforsubmit)
function handleforsubmit(event){
       event.preventDefault()
       let getname=event.target.elements['name'].value;
       let getlocation=event.target.elements['location'].value;
       let getphoto=event.target.elements['photo'].value;
       let getdescrip=event.target.elements['description'].value;
       console.log(111)
       for(let clean of form){
          clean.value=''   
       }
      
      let ccreatecard= createcards(getname,getlocation,getphoto,getdescrip)

      let cards=document.querySelector('.cards')
      let headingForCard=document.querySelector('.cards h1')
      if(cards.children.length===0){
         headingForCard.innerHTML='you dont have any wishlist'
      }
      else{
         headingForCard.innerHTML=`you have ${cards.children.length} wishlist`
      }
   document.querySelector('.cards').appendChild(ccreatecard)
}

function createcards(name,location,photoUrl,desc){
     let card=document.createElement('div')
     card.className='card'
     let  img=document.createElement('img')
     img.setAttribute('alt',name)
     
     let constphotourl='images/logo.jpg'
     if(photoUrl===''){
     img.setAttribute('src',constphotourl)  
     } 
     else{
      img.setAttribute('src',photoUrl)
     } 
     
     card.appendChild(img)
    
     let cardtext=document.createElement('div');
     cardtext.className='cardtext';
     
     let cardh2=document.createElement('h2');
     cardh2.innerHTML=name
     cardtext.appendChild(cardh2)

     let cardh3=document.createElement('h3');
     cardh3.innerHTML=location
     cardtext.appendChild(cardh3);

     if(desc.lenght!==0){
      let cardp=document.createElement('p');
     cardp.innerHTML=desc 
     cardtext.appendChild(cardp)
     }
    
     let createbtn=document.createElement('button')
     createbtn.innerHTML='deleteitem'
     createbtn.addEventListener('click',deletecard)
     cardtext.appendChild(createbtn)

     card.appendChild(cardtext)
     return card
}  
function deletecard(e){
   let caard=e.target.parentElement.parentElement 
   caard.remove()
}
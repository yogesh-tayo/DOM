let Inputtext=document.getElementsByTagName("input")[0] ;
let submitbutton=document.getElementsByTagName("button")[0];
let todo=document.getElementsByClassName("todos")[0];
let count=0;
submitbutton.onclick=function() {
    if (Inputtext.value===""|| Inputtext.value==0){
        alert("Plz enter value")
    }
    else
    {
    let paragraph=document.createElement('p');
    let key=document.createAttribute('key');
    key.value=count;
    paragraph.setAttributeNode(key);
    paragraph.innerHTML=Inputtext.value;
    todo.appendChild(paragraph);
    Inputtext.value="";
        paragraph.onclick=function(){
            todo.removeChild(paragraph);
        }
        count+=1;
    }
}
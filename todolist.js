function addMore(){
    let input = document.getElementById('input').value;
    document.getElementById('error').innerHTML="";
    if(input=='')
    {
        document.getElementById('error').innerHTML="Please Enter a value";
    }
    else{
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent=input;
        let pos = box.firstElementChild;
       /* if(pos==null){*/
            box.appendChild(li);
    /*}else{
            box.insertBefore(li, pos)
        }*/
    }
    document.getElementById('input').value='';
}
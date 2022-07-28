function editt(e){
        // var inp= document.getElementById('input-todo').value;
        // // deleter(this);
        // var inputt=createElement('input');
        
        // console.log("edit "+inp);
        console.log(e.parentNode.childNodes[0]);
        console.log(e.parentNode.firstChild);
        var val =e.parentNode.firstChild.nodeValue;
        var editValue=prompt("Edit value",val);
        e.parentNode.parentNode.firstChild.nodeValue=editValue;
    }
   
    function addToList(){
        var list=document.getElementById('list');
        var inp= document.getElementById('input-todo');
        var li =document.createElement('li');
        var todo=document.createTextNode(inp.value);
        li.appendChild(todo);
        list.appendChild(li);
        
        var span=document.createElement("span");

        var delBtn=document.createElement("button");
        var dltText=document.createTextNode("Delete");
        delBtn.appendChild(dltText);
        li.appendChild(span);
        span.appendChild(delBtn);
        var editBtn=document.createElement("button");
        var editText=document.createTextNode("Edit");
        editBtn.appendChild(editText);
        span.appendChild(editBtn);
        delBtn.setAttribute("onclick","deleter(this)");
        editBtn.setAttribute("onclick","editt(this)");
        // console.log(inp);
        // console.log(li);
        // inp.value="";

    }

    function deleter(e){
        e.parentNode.parentNode.remove();
        // e.parentNode.remove();
    }

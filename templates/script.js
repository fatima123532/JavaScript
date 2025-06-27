
let table=document.getElementById("table");
table.className="table1";
function func(){
       table.innerHTML="";
    let n1=parseInt(document.getElementById("pass_number").value);
    if(isNaN(n1)){//invalid conditions
        alert("Please enter a valid number");
    }
    for(let c=1;c<=10;c++){
        let row=table.insertRow(c-1);
        let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        let cell3=row.insertCell(2);
        let cell4=row.insertCell(3);
        let cell5=row.insertCell(4);
        
            let result=n1*c;
            cell1.innerHTML=n1;
            cell2.innerHTML="*";
            cell3.innerHTML=c;
            cell4.innerHTML="=";
            cell5.innerHTML=result;
}

}


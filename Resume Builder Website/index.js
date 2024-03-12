function weadd(){

    let nwnode=document.createElement("textarea");
    nwnode.classList.add("form-control");
    nwnode.classList.add("wefield");
    nwnode.classList.add("mt-2");
    nwnode.setAttribute("placeholder","Enter here");

    let weob=document.getElementById("we");
    let weaddbuttonob=document.getElementById("weaddbutton");

    weob.insertBefore(nwnode, weaddbuttonob);


}

function aqadd(){

    let nwnode=document.createElement("textarea");
    nwnode.classList.add("form-control");
    nwnode.classList.add("aqfield");
    nwnode.classList.add("mt-2");
    nwnode.setAttribute("placeholder","Enter here");

    let aqob=document.getElementById("aq");
    let aqaddbuttonob=document.getElementById("aqaddbutton");

    aqob.insertBefore(nwnode, aqaddbuttonob);


}

function skadd(){

    let nwnode=document.createElement("textarea");
    nwnode.classList.add("form-control");
    nwnode.classList.add("skfield");
    nwnode.classList.add("mt-2");
    nwnode.setAttribute("placeholder","Enter here");

    let skob=document.getElementById("sk");
    let skaddbuttonob=document.getElementById("skaddbutton");

    skob.insertBefore(nwnode, skaddbuttonob);


}

function generateCV(){
    let nameval=document.getElementById("namefield").value;
    let nameob1=document.getElementById("nameT1");
    let nameob2=document.getElementById("nameT2");

    nameob1.innerHTML=nameval;
    nameob2.innerHTML=nameval;

    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
    document.getElementById("fbT").href=document.getElementById("fbfield").value;
    document.getElementById("instaT").href=document.getElementById("instafield").value;
    document.getElementById("linkedT").href=document.getElementById("linkedfield").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;
    

    let wearr=document.getElementsByClassName("wefield");
    let str="";

    for(let e of wearr)
    {
        str+=`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqarr=document.getElementsByClassName("aqfield");
    let str1="";

    for(let e of aqarr)
    {
        str1+=`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let skarr=document.getElementsByClassName("skfield");
    let str2="";

    for(let e of skarr)
    {
        str2+=`<li> ${e.value} </li>`;
    }
    document.getElementById("skillT").innerHTML=str2;

    //photo set
    let file=document.getElementById("imgfield").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

   reader.onloadend=function(){
    document.getElementById("imgT").src=reader.result;
   }

  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";

    


}
function printCV()
{
    window.print();
}
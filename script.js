function myFunction(){
    var selectedState = (document.getElementById('state').value);
    var displayCapital = document.getElementById('capital');
    var arrAlabama = ["Montgomery"];
    var arrArizona = ["Phoenix"]
    var arrCalifornia = ["Sacramento"];
    var arrTexas = ["Austin"];
    
    document.getElementById('capital').innerHTML="";
    
    if(selectedState == "AI"){
        for (i=0; i<arrAlabama.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrAlabama[i];
        selectoptions.value=arrAlabama[i];
        displayCapital.appendChild(selectoptions);
        }
    } 
    else if(selectedState == "AZ"){
        for (i=0; i<arrArizona.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrArizona[i];
        selectoptions.value=arrArizona[i];
        displayCapital.appendChild(selectoptions);
        }
    }
    else if(selectedState == "CA"){
        for (i=0; i<arrCalifornia.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrCalifornia[i];
        selectoptions.value=arrCalifornia[i];
        displayCapital.appendChild(selectoptions);
        }
    }
    else if(selectedState == "TX"){
        for (i=0; i<arrTexas.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrTexas[i];
        selectoptions.value=arrTexas[i];
        displayCapital.appendChild(selectoptions);
         }
     }
}
    
messageTag = document.getElementById("message");
        
ogVal = {"#display-og":'ST', '#email-og':'tsenthil5@gmail.com','#phone-og':'8326381285','#zipcode-og':'77005','#pw-new-og':'senthil123','#pw-conf-og':'senthil123'};
Object.entries(ogVal).forEach(([key,value])=>{
    currLabel = document.querySelector(key);
    if(key === '#pw-conf-og' || key === "#pw-new-og"){
        replace = ""
        for(let i=0;i<value.length;i++){
            replace+="*"
            
        }
        value = replace;
    }
    
    currLabel.textContent = value
});
document.querySelector('#submitButton').addEventListener('click',(e) => checkValue(e));

function checkValue(e){
    let flag = true
    let updated_list = {};
    e.preventDefault();
    divForm = document.getElementById("form");
    divElements = divForm.querySelectorAll("div");
    
    divElements.forEach(element=>{

        
    input = element.querySelector("input")
    
    labelElement = element.querySelectorAll("label")[1]
    if(input.disabled){
    return;
    }
    else{
        value = input.value;
        
        if(value === ""){
            return;
        }
        else{

            if(value!=labelElement.textContent){
                if(labelElement.id == "pw-new-og" || labelElement.id == "pw-conf-og"){
                    if(!pwCheck()){
                        flag = false;
                        messageTag.innerHTML = "<h1><b><i>Incorrect Password</h1></b></i>";
                        messageTag.style.color = "Red"
                        messageTag.style.fontSize = "20px"
                    }
                    else{
                        if(labelElement.id == "pw-new-og"){
                            return;
                        }
                        replace = ""
                        for(let i = 0; i<value.length;i++){
                            replace+="*"
                        }
                        updated_list["pw-new-og"] = replace
                        updated_list["pw-conf-og"] = replace
                    }
                }
                    if(labelElement.id == "zipcode-og"){
                    if(!zipcodeCheck()){
                        flag = false;
                        messageTag.innerHTML = "<h1><b><i>Incorrect Zipcode</h1></b></i>";
                        messageTag.style.color = "Red"
                        messageTag.style.fontSize = "20px"
                    }
                    else{
                        
                        updated_list["zipcode-og"] = value
                    }
                    
                }
                if(labelElement.id == "email-og"){
                    if(!emailCheck()){
                        flag = false;
                        messageTag.innerHTML = "<h1><b><i>Incorrect Email Address</h1></b></i>";
                        messageTag.style.color = "Red"
                        messageTag.style.fontSize = "20px"
                    }
                    else{
                        updated_list["email-og"] = value
                    }
                }
                if(labelElement.id == "display-og"){
                    updated_list["display-og"] = value
                }
                if(labelElement.id == "phone-og"){
                    if(!phoneNumberCheck()){
                        flag = false;
                        messageTag.innerHTML = "<h1><b><i>Incorrect Phone Number</h1></b></i>";
                        messageTag.style.color = "Red"
                        messageTag.style.fontSize = "20px"
                    }
                    else{
                        
                        updated_list["phone-og"] = value
                    }
                    
                    
                }
            }
        }
    }
});

if(flag){
    let successMsg = "The following values have been updated successfully: " 
    Object.entries(updated_list).forEach(([key,value])=>{
    document.getElementById(key).textContent = value
    if(key === "phone-og"){
        successMsg+= "Phone Number (" + ogVal["#" + key] + " => " + value + ") " 
    }
    if(key === "zipcode-og"){
        successMsg+= "Zipcode (" + ogVal["#" + key] + " => " + value + ") " 
    }
    if(key === "pw-conf-og"){
        let oldPW = (ogVal["#" + key]).replace(/./g,"*")
        
        successMsg+= "Password (" + oldPW + " => " + value + ") "

    }
    if(key === "email-og"){
        successMsg+= "Email (" + ogVal["#" + key] + " => " + value + ") " 
    }
    if(key === "display-og"){
        successMsg+= "Display Name (" + ogVal["#" + key] + " => " + value + ") " 
    }
});
const inputs = document.querySelectorAll(".ogValues")
inputs.forEach(input=>{
    input.value = "";
})
messageTag.innerHTML = "<h1><b><i>" + successMsg + "</h1></b></i>";
messageTag.style.color = "Green";
messageTag.style.fontSize = "20px";
}

}

function pwCheck() {
    let pw = document.getElementById("pw-new");
    let conf_pw = document.getElementById("conf-pw").value;

    if (pw.value !== conf_pw) {
        return false;
    } else {
        return true;
    }
}



function zipcodeCheck() {
    const regex = /^\d+$/;
    let zipcode = document.getElementById("zipcode");
    if (zipcode.value.length !== 5) {
        return false;
    } else {
        return regex.test(zipcode.value);
        
    }
}
function phoneNumberCheck(){
    const regex = /^\d+$/;
    let number = document.getElementById("ph-number");
    if (number.value.length != 10){
        return false;
    }
    else{
        return regex.test(number.value);
    }
}

function emailCheck(){
    let email = document.getElementById("email").value;
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}


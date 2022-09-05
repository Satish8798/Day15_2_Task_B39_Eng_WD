
//getting the submit button element
let submittted=document.getElementById("submit");

//addinf event listener for click event on submit button
submittted.addEventListener("click",validateForm);

//validateForm function definition
function validateForm(){

    //getting the values of all detail elements
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const address=document.getElementById("address").value;
    const pincode=document.getElementById("pincode").value;
    const state=document.getElementById("state").value;
    const country=document.getElementById("country").value;
    const selectedGender = document.querySelector( 'input[name="gender"]:checked').value;
    const countryList= document.querySelectorAll('input[type="checkbox"]');
    let selectedCountryList=[];
    let k=0;

    //for selecting types of country food
    for(let i=0;i<countryList.length;i++){
        console.log(countryList[i].checked)
        if(countryList[i].checked){
            selectedCountryList[k]=countryList[i].value;
            k++;
        }
    }
    if(selectedCountryList.length<2){ //must select two country type food
        alert("select two or more countries food");
    }else{
        console.log(firstName,lastName,address,pincode,state,country,selectedGender,countryList,selectedCountryList);
        let tableBody=document.getElementById("tableBody");
        tableBody.innerHTML=tableBody.innerHTML+`
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${selectedGender}</td>
            <td>${selectedCountryList}</td>
            <td>${state}</td>
            <td>${country}</td>
        `
        document.getElementById("form").reset();
    }
   
}
let inputstring = prompt("Enter any word"); 

let revstring = inputstring.split("").reverse().join("");

    document.write(revstring);

let required= "emordnilap";
    
    if(!inputstring){
    alert("Please fill this Field");
       
}
else if(inputstring===required){
    alert(
        "Good job!" + "\n" + 
        "The Word is Palindrome!"
       
    )
}
else{
    alert(
        "Sorry..." + "\n" +
        "The Word is not Palindrome!" 
      )
    }




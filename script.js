



var message;

function init(){
  message = document.getElementById("messageArea");
}



function getDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  //var dates_as_int = dates.map(Date.parse);
  //var myInt = Number(new Date(dates_as_int[0]));
  //var futureDate = 1617854400 //april 8, 2021
 // var futureDate = 1618027200 //april 10, 2021
  var futureDateDate = document.getElementById("dateNeeded");
  var theirDate = futureDateDate.value;
  var futureDate = new Date(theirDate);
  futureDate = Date.parse(futureDate);
  futureDate /= 1000;
  //futureDate = parseInt(theirDate);
  //console.log(theirDate);
  //console.log(futureDate);
 
  //var futureDate = 1618113600 //april 11, 2021
  
  var myInt = Date.parse(today);
  myInt = parseInt(myInt);
  myInt /= 1000;
  //document.write(today);
  //document.write("milliseconds is: " + myInt);
  //console.log(myInt);

  if ( futureDate - myInt < 1900800)
      //Current setting is 22 days or 3 weeks if ( futureDate - myInt < 1900800){ - for 22 days -
    // This is 2 weeks or 15 days
    // if ( futureDate - myInt < 1296000){
     
    //console.log("Difference is: " + (futureDate - myInt) );
    //console.log("Cannot write effective recommendation letter in less than 3 weeks");
    message.innerHTML = "Cannot write effective recommentation letter in less than 2 weeks.";
    //alert("Cannot write effective recommendtation letter in less than 3 weeks.");
  }
  else{
    //console.log("Difference is: " + (futureDate - myInt) );
    //console.log("Ok - now send me your resume. ");
    message.innerHTML = "Let's write a recommendation letter!";
    document.location.href="https://forms.gle/KpM6xKVskxgexzUs8";
  }
  

}







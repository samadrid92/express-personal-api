console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
  $.ajax({
    method: 'GET',
    url: '/api/architects',
    success: OnSuccess,
    error: OnError
  });

});

 function onSuccess(json){
   console.log(json);
 }

 function onError(e){
   console.log(e);
 }

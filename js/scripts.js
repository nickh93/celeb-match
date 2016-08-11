$(document).ready(function() {

  $("form#info").submit(function(event) {

  event.preventDefault();

  //collect variables
  var age = parseInt($("#age").val());
  var gender = $("#gender").val();
  var color = $("input:radio[name=color]:checked").val();
  var cuisine = $("input:radio[name=cuisine]:checked").val();

  if (age < 18) {

    alert("You are too young for this site");

  }

  else {

   if (gender === 'male') {
    // at this point, we know we have a male, over 18
    if (color === 'light') {
      // any code in here knows that we have a male, over 18 whose favorite color is a light color
      if (cuisine === 'american') {
        // go eat american food!
        $("#jennifer").show();
      } else if (cuisine === 'chinese') {
        // go eat chinese food, only if american was not chosen.
        ("#angelina").show();
      } else if (cuisine === 'mediterranean') {
        // go eat mediterranean, ONLY if american AND chinese were not chosen.
      $("#angelina").show();
      } else {
        // go eat latin, only if none of the other options were chosen.
        // here, we know over 18, male, light, latin food
        $("#jennifer").show();
      }
    } else {
      // male, over 18, likes dark colors.
      if (cuisine === 'american' || cuisine === 'chinese') {
        //male, over 18, likes dark colors, eats american or chinese
        $("#lopez").show();
      } else if (cuisine === 'mediterranean') {
        //male male, over 18, likes dark colors, eats mediterranean ONLY if American and chinese are not chosen
        $("#lopez").show();
      } else {
        // over 18, male, dark, latin food.
        ("#angelina").show();
      }
    }

  } else {
    // female, over 18.
    if (color === 'light'){
      //female, over 18, light colors
        if (cuisine === 'mediterranean' || cuisine === 'latin') {
        //female, over 18, light, likes mediterranean OR latin NOT the others
        $("#brad").show();
      } else if (cuisine === 'american') {
        //female, over 18, light, likes american
        $("#will").show();
      } else {
        //female, over 18, light, likes chinese
        $("#chow").show();
      }
    }

  else {
      //female, over 18, dark colors
        if (cuisine === 'american' || cuisine === 'chinese') {
        //female, over 18, dark, likes american and chinese
        $("#chow").show();
      } else if (cuisine === 'latin') {
        //female, over 18, dark, likes latin
        $("#will").show();
      } else {
        //femal, over 18, dark, likes mediterranean
        $("#brad").show();
      }
    }
  }
}
});
});

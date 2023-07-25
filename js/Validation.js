var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByTagName("tab");

  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, r, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  r = x[currentTab].getElementsByClassName("form-check-input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  
  for (i = 0; i < r.length; i++) {
    var radioGroup = r[i].name;
    var radioElements = document.getElementsByName(radioGroup);
    var radioChecked = false;
    for (var j = 0; j < radioElements.length; j++) {
      if (radioElements[j].checked) {
        radioChecked = true;
        break;
      }
    }
    if (!radioChecked) {
      r[i].classList.add("invalid");
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}


//   // jQuery time
//   var current_fs, next_fs, previous_fs; //fieldsets
//   var left, opacity, scale; //fieldset properties which we will animate
//   var animating; //flag to prevent quick multi-click glitches

//   $(".next").click(function () {
//       if (animating) return false;
//       animating = true;

//       current_fs = $(this).parent();
//       next_fs = $(this).parent().next();

//       //activate next step on progressbar using the index of next_fs
//       $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//       //show the next fieldset
//       next_fs.show();
//       //hide the current fieldset with style
//       current_fs.animate({ opacity: 0 }, {
//           step: function (now, mx) {
//               //as the opacity of current_fs reduces to 0 - stored in "now"
//               //1. scale current_fs down to 80%
//               scale = 1 - (1 - now) * 0.2;
//               //2. bring next_fs from the right(50%)
//               left = (now * 50) + "%";
//               //3. increase opacity of next_fs to 1 as it moves in
//               opacity = 1 - now;
//               current_fs.css({
//                   'transform': 'scale(' + scale + ')',
//                   'position': 'absolute'
//               });
//               next_fs.css({ 'left': left, 'opacity': opacity });
//           },
//           duration: 800,
//           complete: function () {
//               current_fs.hide();
//               animating = false;
//           },
//           //this comes from the custom easing plugin
//           easing: 'easeInOutBack'
//       });
//   });

//   $(".previous").click(function () {
//       if (animating) return false;
//       animating = true;

//       current_fs = $(this).parent();
//       previous_fs = $(this).parent().prev();

//       //de-activate current step on progressbar
//       $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//       //show the previous fieldset
//       previous_fs.show();
//       //hide the current fieldset with style
//       current_fs.animate({ opacity: 0 }, {
//           step: function (now, mx) {
//               //as the opacity of current_fs reduces to 0 - stored in "now"
//               //1. scale previous_fs from 80% to 100%
//               scale = 0.8 + (1 - now) * 0.2;
//               //2. take current_fs to the right(50%) - from 0%
//               left = ((1 - now) * 50) + "%";
//               //3. increase opacity of previous_fs to 1 as it moves in
//               opacity = 1 - now;
//               current_fs.css({ 'left': left });
//               previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
//           },
//           duration: 800,
//           complete: function () {
//               // current_fs.hide();
//               animating = false;
//           },
//           //this comes from the custom easing plugin
//           easing: 'easeInOutBack'
//       });
//   });

 
//   $(".submit").click(function () {
//       // return alert('done submission! Have a great day');
//       return alert('done submission! Have a great day');
//   })
//   $(".submit").click(function () {
//       window.location.href = "about.html"; 
//   })
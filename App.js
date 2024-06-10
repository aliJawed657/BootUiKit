
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("active");
  var icons = document.getElementById("arrowsNew1");
  icons.classList.toggle("rotate");
}

function toggle() {
  var dropdown1 = document.getElementById("myDropdown1");
  dropdown1.classList.toggle("active");
  var icons1 = document.getElementById("arrowsNew2");
  icons1.classList.toggle("rotate");
}

function newToggle() {
  var dropdown2 = document.getElementById("myDropdown2");
  dropdown2.classList.toggle("active");
  var icons2 = document.getElementById("arrowsNew3");
  icons2.classList.toggle("rotate");
}
function newToggle4() {
  var dropdown3 = document.getElementById("myDropdown3");
  dropdown3.classList.toggle("active");
  var icons3 = document.getElementById("arrowsNew4");
  icons3.classList.toggle("rotate");
}
function newToggle5() {
  var dropdown4 = document.getElementById("myDropdown4");
  dropdown4.classList.toggle("active");
  var icons4 = document.getElementById("arrowsNew5");
  icons4.classList.toggle("rotate");
}
function newToggle6() {
  var dropdown5 = document.getElementById("myDropdown5");
  dropdown5.classList.toggle("active");
  var icons5 = document.getElementById("arrowsNew6");
  icons5.classList.toggle("rotate");
}
function newToggle7() {
  var dropdown6 = document.getElementById("myDropdown6");
  dropdown6.classList.toggle("active");
  var icons6 = document.getElementById("arrowsNew7");
  icons6.classList.toggle("rotate");
}







function toggleDropdownNew() {
  var dropdownNew = document.getElementById("myDropdownNew");
  dropdownNew.classList.toggle("active");
  var iconsNew = document.getElementById("arrows");
  iconsNew.classList.toggle("rotate");
}

function toggleNew() {
  var dropdown1New = document.getElementById("myDropdown1New");
  dropdown1New.classList.toggle("active");
  var icons1New = document.getElementById("arrows1");
  icons1New.classList.toggle("rotate");
}

function newToggleNew() {
  var dropdown2New = document.getElementById("myDropdown2New");
  dropdown2New.classList.toggle("active");
  var icons2New = document.getElementById("arrows2");
  icons2New.classList.toggle("rotate");
}
function newToggle4New() {
  var dropdown3New = document.getElementById("myDropdown3New");
  dropdown3New.classList.toggle("active");
  var icons3New = document.getElementById("arrows3");
  icons3New.classList.toggle("rotate");
}
function newToggle5New() {
  var dropdown4New = document.getElementById("myDropdown4New");
  dropdown4New.classList.toggle("active");
  var icons4New = document.getElementById("arrows4");
  icons4New.classList.toggle("rotate");
}
function newToggle6New() {
  var dropdown5New = document.getElementById("myDropdown5New");
  dropdown5New.classList.toggle("active");
  var icons5New = document.getElementById("arrows5");
  icons5New.classList.toggle("rotate");
}
function newToggle7New() {
  var dropdown6New = document.getElementById("myDropdown6New");
  dropdown6New.classList.toggle("active");
  var icons6New = document.getElementById("arrows6");
  icons6New.classList.toggle("rotate");
}




function toggles() {
  var menus = document.getElementById("animate")
  menus.classList.toggle("active")
}
function toggles1() {
  var menus = document.getElementById("animate1")
  menus.classList.toggle("active")
}
function toggles2() {
  var menus = document.getElementById("animate2")
  menus.classList.toggle("active")
}



document.querySelectorAll('.dropdowns > ul > li').forEach(item => {
  item.addEventListener('click', event => {
    const ul = item.querySelector('ul');
    if (ul) {
      ul.style.display = (ul.style.display === 'block') ? 'none' : 'block';
      const arrow = item.querySelector('.direction');
      if (arrow) {
        arrow.classList.toggle('rotated');
      }
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll('.dropdownd li');
  var inputField = document.querySelector('.form7');

  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
      inputField.value = this.textContent;


    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll('.dropdownd0 li');
  var inputField = document.querySelector('.form0');

  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
      inputField.value = this.textContent;


    });
  });
});













$(document).ready(function () {
  $(".tablinks").click(function () {
    var cityName = $(this).attr("data-city");
    $(".tabcontent5").hide();
    $("#" + cityName).show();
    $(".tablinks").removeClass("active");
    $(this).addClass("active");
  });

  $("#visiblee").click(function () {
    $("#related").toggle();
  });


  $(".links1").click(function () {
    var contentId = $(this).attr("data-content");
    $(".tabcontent5").hide();
    $("#" + contentId).show();
    $(".links1").removeClass("active");
    $(this).addClass("active");
    $("#related").hide();
  });
});





$(document).ready(function () {
  $(".tablinks1").click(function () {
    var cityName1 = $(this).attr("data-city");
    $(".tabcontent51").hide();
    $("#" + cityName1).show();
    $(".tablinks1").removeClass("active");
    $(this).addClass("active");
  });

  $("#visiblee1").click(function () {
    $("#related1").toggle();
  });


  $(".links11").click(function () {
    var contentId1 = $(this).attr("data-content");
    $(".tabcontent51").hide();
    $("#" + contentId1).show();
    $(".links11").removeClass("active");
    $(this).addClass("active");
    $("#related1").hide();
  });
});






$(document).ready(function () {
  $(".tablinks3").click(function () {
    var cityName = $(this).attr("data-city");
    $(".tabcontent52").hide();
    $("#" + cityName).show();
    $(".tablinks3").removeClass("active");
    $(this).addClass("active");
  });

  $("#visiblee2").click(function () {
    $("#related2").toggle();
  });


  $(".links12").click(function () {
    var contentId = $(this).attr("data-content");
    $(".tabcontent52").hide();
    $("#" + contentId).show();
    $(".links12").removeClass("active");
    $(this).addClass("active");
    $("#related2").hide();
  });
});







$(document).ready(function () {
  $(".tablinks14").click(function () {
    var cityName14 = $(this).attr("data-city");
    $(".tabcontent54").hide();
    $("#" + cityName14).show();
    $(".tablinks14").removeClass("active");
    $(this).addClass("active");
  });

  $("#visiblee14").click(function () {
    $("#related14").toggle();
  });


  $(".links14").click(function () {
    var contentId1 = $(this).attr("data-content");
    $(".tabcontent54").hide();
    $("#" + contentId1).show();
    $(".links14").removeClass("active");
    $(this).addClass("active");
    $("#related14").hide();
  });
});


function toggleDropdown() {
  var listItems = document.getElementById('listItems');
  if (listItems.style.visibility === "visible") {
    listItems.style.visibility = "hidden";
  } else {
    listItems.style.visibility = "visible";
  }
}





// Adding click event listner to all pill buttons
$('.pill-2 .pill-btn').click(function () {

  // Remove bydefault active button effect
  $('.pill-2 .pill-btn').removeClass('active');

  // Checking if clicked button is dropdown?
  if ($(this).addClass('pill-dropdown-btn')) {

    // Adding active class for effect and open class to open dropdown
    $(this).toggleClass('active open');

    // Only for button other than dropdown
  } else {

    // Adding active effect to clicked button
    $(this).toggleClass('active');

    // Removing open class from dropdown button
    $('.pill-dropdown-btn').removeClass('open');
  }

  // Changing dropdown image when dropdown button get clicked
  $('.pill-btn.active .pill-dropdown-arrow').attr(
    'src', './Arrow.svg'
  ).css(
    { 'width': '8px', 'height': '4px' }
  );

  // Changing image back to original when active class reomved from dropdown button
  $('.pill-btn:not(.active) .pill-dropdown-arrow').attr(
    'src', './bluearrow.png'
  );
});













function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}
move()



function move1() {
  var elem = document.getElementById("myBar1");
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
move1()

function move2() {
  var elem = document.getElementById("myBar2");
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
move2()










$('.pagination a').click(function () {
  $(this).addClass('active');
  if ($("a").removeClass('active')) {
    $(this).addClass('active')
  } else {
    $(this).removeClass('active')
  }
})





jQuery(function ($) {
  $(".accordion").click(function () {
    $(".accordion").removeClass("open");
    $(".accordion").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});





var sliders = () => {
  $('.jumbotron-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"><img src="./right-arrow.png" class="slickNew" alt="Next"></button',
    prevArrow: '<button type="button" class="slick-prev"><img src="./left-arrow.png" class="slickNew" alt="Next"></button',
    responsive: [
      {
        breakpoint: 480,
      }
    ]
  });
};

sliders();







var myBtn = document.getElementById("myBtn")
var myModal = document.getElementById("myModal")
// var closed = document.getElementById("closed-btn");
myBtn.onclick = function () {
  myModal.style.display = "block"

}



var closeModal = document.getElementById("close-modal")
closeModal.onclick = function () {
  myModal.style.display = "none"
}


window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}

function closed() {
  // var closeModal = document.getElementById("close-modal")
  myModal.style.display = "none"

}



jQuery(function ($) {
  $(".panel-btn").click(function () {
    $(".panel-btn").removeClass("open");
    $(".panel-btn").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});








$(document).ready(function(){
$('#calendar').datepicker({
  inline: true,
  firstDay: 1,
  showOtherMonths: true,
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});
})
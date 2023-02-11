$(document).ready(function(){
    $(".selectMenu").click(function(){
      $(this).toggleClass("flip");
    });
    $(".back ul li").click(function(){
      var option = $(this).html();
      $(".front span").html(option);
    });
  });

  $(document).ready(function () {
	$(".slick-list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		autoplay: false,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
	});
    
    
	$(".prev-btn").click(function () {
		$(".slick-list").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".slick-list").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".slick-list").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
    $(document).ready(function () {
        $(".slick-list2").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            autoplay: false,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 1050,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  },
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    },
                  }
              ]
        });
        $(".prev-btn2").click(function () {
            $(".slick-list2").slick("slickPrev");
        });
    
        $(".next-btn2").click(function () {
            $(".slick-list2").slick("slickNext");
        });
        $(".prev-btn2").addClass("slick-disabled");
        $(".slick-list2").on("afterChange", function () {
            if ($(".slick-prev2").hasClass("slick-disabled")) {
                $(".prev-btn2").addClass("slick-disabled");
            } else {
                $(".prev-btn2").removeClass("slick-disabled");
            }
            if ($(".slick-next2").hasClass("slick-disabled")) {
                $(".next-btn2").addClass("slick-disabled");
            } else {
                $(".next-btn2").removeClass("slick-disabled");
            }
        });
    });


   

});



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  function openMobileMenu(){
    document.getElementById("mobileMenu").style.top = "0px";
  }
  function closeMobileMenu(){
    document.getElementById("mobileMenu").style.top = "-100%";
  }



  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("headerTop").style.background = "#393636";
    document.getElementById("headerTop").style.boxShadow = " 0 4px 8px 0 rgba(0,0,0,0.2)";
  } else {
    document.getElementById("headerTop").style.background = "transparent";
    document.getElementById("headerTop").style.boxShadow = "none";
  }
}

function openBlogModal (){
  document.getElementById("blogModal").style.top="0px";
}
function closeBlogModal(){
  document.getElementById("blogModal").style.top="-100%";
}



function closeSuccess(){
  document.getElementById("awAlert").style.display ="none";
}
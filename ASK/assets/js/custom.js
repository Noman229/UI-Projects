$(document).ready(function(){
	// Responsive Slider
	$('.responsive').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	responsive: [
	    	{
	      		breakpoint: 1024,
	      		settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1,
	        	infinite: true,
	        	dots: false
	      	}
	    },
	    {
	    	breakpoint: 600,
	    	settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1,
	        	dots: true
	    	}
	    },
	    {
	    	breakpoint: 480,
	      	settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1
	    	}
	    }
	  ]
	});

	//Reviews
	$('.center-slider').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	responsive: [
	    	{
	      		breakpoint: 1024,
	      		settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1,
	        	infinite: true,
	        	dots: false
	      	}
	    },
	    {
	    	breakpoint: 600,
	    	settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1,
	        	dots: true
	    	}
	    },
	    {
	    	breakpoint: 480,
	      	settings: {
	        	slidesToShow: 1,
	        	slidesToScroll: 1
	    	}
	    }
	  ]
	});



});
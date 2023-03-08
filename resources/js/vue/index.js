
 const { createApp } = Vue

 const VEHICLE_TYPE= {
	CAR : { id: 1, name : "Car" },
	SUV : { id: 2, name :"SUV" },
	VAN : { id: 3, name :"Van" }
};

 const BOOKING_TYPE = {
	SINGLE_TRIP : 1,
	MULTIPLE_TRIP : 2,
	PACKAGE_TRIP : 3,
};


 var app = createApp({
  	methods: {
	  	continueBooking() {
	    // `this` inside methods points to the current active instance
	   
		  	if(this.isBookingDetailsActive){
		  		this.isGuestDetailsActive = true;
		  		this.isCheckoutDetailsActive = false;
		  		this.isBookingDetailsActive = false;
		  	}else if(this.isGuestDetailsActive){
		  		this.isCheckoutDetailsActive = true;
		  		this.isBookingDetailsActive = false;
		  		this.isGuestDetailsActive = false;
		  	}
		  	manageContinueButton();
		  	scrollToTop();
	    // `event` is the native DOM event
	  
	  	},
	 	backButton(){
		  	if(this.isGuestDetailsActive){
		  		this.isBookingDetailsActive = true;
		  		this.isGuestDetailsActive = false;
		  	}else if(this.isCheckoutDetailsActive){
		  		this.isGuestDetailsActive = true;
		  		this.isCheckoutDetailsActive = false;
		  		this.isBookingDetailsActive = false;
		  	}
		  	manageBackButton();
		  	scrollToTop();
	  	},

	  	getVehicleList(){
		  	return VEHICLE_TYPE;
		},
		getBookingTypeList(){
		  	return BOOKING_TYPE;
		},
	  	onVehicleTypeChange(id){
	  		this.currentVehicleId = id;
	  	},
	  	selectBookingType(id){
	  		this.booking.bookingTypeId = id;
	  	}
	},
    data() {
      	return {
	        message: 'Hello Good Morning!',
	        bookingProgressBar: '25%',
	        isBookingDetailsActive: true,
	        isGuestDetailsActive: false,
	        isCheckoutDetailsActive: false,
	        isBookingsComplete: false,
	        booking: {
	        	bookingTypeId: 1, /*Single Trip*/
	        	pickupLocation: '',
	        	pickupDateTime: '',
	        	dropoffLocation: '',
	        	dropoffDateTime: '',
	        	deestinations: [],
	        	vehicleType: '',
	        },
	        currentVehicleId: null

      	}
    }
  }).mount('#app')


  function manageContinueButton(){
  	console.log(app.isBookingDetailsActive);
  	console.log(app.isBookingDetailsActive);
  	if(app.isGuestDetailsActive){
  		app.bookingProgressBar = '50%';
  		$('#booking-details', this.$el).hide();
   	 	$('#guests-details', this.$el).show();
  	}

  	if(app.isCheckoutDetailsActive){
  		app.bookingProgressBar = '75%';
  		$('#guests-details', this.$el).hide();
   	 	$('#checkout-details', this.$el).show();
  	}
  
  }

  function manageBackButton(){
  	console.log(app.isBookingDetailsActive);
  	console.log(app.isGuestDetailsActive);
  	console.log(app.isCheckoutDetailsActive);
  	if(app.isBookingDetailsActive){
  		app.bookingProgressBar = '25%';
  		$('#booking-details', this.$el).show();
   	 	$('#guests-details', this.$el).hide();
  	}else
	if(app.isGuestDetailsActive){
  		app.bookingProgressBar = '50%';
  		$('#checkout-details', this.$el).hide();
   	 	$('#guests-details', this.$el).show();
   	 	$('#booking-details', this.$el).hide();
  	}
  
  }

  function scrollToTop(){
  
	  $('html', this.$el).animate({ scrollTop: 0 }, "slow");
	  return false;

  }
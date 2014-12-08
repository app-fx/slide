(function( APP ){

	APP = APP || window.APP;

	var Parent = APP.View;

	var View = Parent.extend({

		options: {
		},

		state: {
			slide: false
		},

		initialize: function( options ){
			// add class to element
			$(this.el).addClass("fx-slide");
			// update state
			if( options.state ){
				var state = options.state;
				this.updateState( state );
				delete options.state;
			}
			//
			Parent.prototype.initialize.call( this, options );
		},

		// states
		slideLeft: function( e ){
			$(this.el)
				.removeClass("fx-slide-right").removeClass("fx-slide-up").removeClass("fx-slide-down")
				.addClass("fx-slide-left");
			this.state.slide = "left";
		},

		slideRight: function( e ){
			$(this.el)
				.removeClass("fx-slide-left").removeClass("fx-slide-up").removeClass("fx-slide-down")
				.addClass("fx-slide-right");
			this.state.slide = "right";
		},

		slideUp: function( e ){
			$(this.el)
				.removeClass("fx-slide-left").removeClass("fx-slide-right").removeClass("fx-slide-down")
				.addClass("fx-slide-up");
			this.state.slide = "up";
		},

		slideDown: function( e ){
			$(this.el)
				.removeClass("fx-slide-left").removeClass("fx-slide-right").removeClass("fx-slide-up")
				.addClass("fx-slide-down");
			this.state.slide = "down";
		},

		slideRestore: function(){
			$(this.el).removeClass("fx-slide-left").removeClass("fx-slide-right").removeClass("fx-slide-up").removeClass("fx-slide-down");
			this.state.slide = false;
		},

		// events
		updateState: function( type ){
			switch( type ){
				case "slide-left":
					this.slideLeft();
				break;
				case "slide-right":
					this.slideRight();
				break;
				case "slide-up":
					this.slideUp();
				break;
				case "slide-down":
					this.slideDown();
				break;
				default:
					this.slideRestore();
				break;
			}
		}
	});

	APP.FX = APP.FX || {};
	APP.FX.Slide = View;

})( this.APP );

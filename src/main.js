(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// gather options
		var options = {};
		if( this.attributes.state ) options.state = this.attributes.state.value;
		// ...
		options.el = this;
		// instantiate view
		this.view = new APP.FX.Slide(options);

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		this.view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {
		// redirect basted on attribute
		switch( attr ){
			case "state":
				var state = false;
				// filter state of interest
				if( newVal.indexOf("slide-left") > -1 ) state = "slide-left";
				if( newVal.indexOf("slide-right") > -1 ) state = "slide-right";
				if( newVal.indexOf("slide-up") > -1 ) state = "slide-up";
				if( newVal.indexOf("slide-down") > -1 ) state = "slide-down";
				this.view.updateState( state );
			break;
			default:
				// do nothing by default
			break;
		}
	};

	document.registerElement('fx-zoom', {
		prototype: el,
		extends: 'div'
	});

}());

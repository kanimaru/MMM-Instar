/**
 * Created by Kani on 24.01.2017.
 */
Module.register("instar",{
	// Default module config.
	defaults: {
		address: "192.168.178.1",
		user: "",
		pwd: "",
		resolution: 8,
		rate: 0
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("img");
		wrapper.src = "http://" + this.config.address + "/videostream.cgi?user=" + this.config.user + "&pwd=" + this.config.pwd + "&resolution=" + this.config.resolution + "&rate=" + this.config.rate;
		return wrapper;
	}
});
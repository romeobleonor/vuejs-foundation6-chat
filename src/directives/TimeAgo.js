import moment from 'moment';

export default {
	bind: function() {
		let self = this;
		window.setInterval(function() {
			let datetime = self.el.getAttribute('datetime');
			let thisMoment = moment(datetime);
			self.el.innerHTML = thisMoment.fromNow();
			self.el.setAttribute('title', thisMoment.format('lll'))
		}, 500);
	}
};
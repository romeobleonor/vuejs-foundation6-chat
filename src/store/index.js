const store = {};

export default store;

store.state = {
	currentMember: 'Chris Pappas',
	members: ['Chris Pappas'],
	messages: [
		{
			member: 'Chris Pappas',
			message: 'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat.',
			timestamp: Date.now()
		}
	],
	addMessage: function(member, message) {
		store.state.messages.push({
			member,
			message,
			timestamp: Date.now()
		});
	}
};


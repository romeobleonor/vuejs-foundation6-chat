const store = {};

export default store;

let members = [
	'Chris Pappas'
];

let messages = [
	{
		member: 'Chris Pappas',
		message: 'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat.'
	}
];

store.addMessage = (member, message) => {
	messages.push({
		member,
		message
	})
};


import loremIpsum from 'lorem-ipsum';

const store = {};

export default store;

let dummyMessages = [];
let numDummies = 4;

for (let i = 0; i < numDummies; i++) {
	dummyMessages.push({
		member: 'Lorem Ipsum',
		message: loremIpsum(),
		timestamp: Date.now()
	})
}

store.state = {
	currentMember: 'Chris Pappas',
	members: [
		'Lorem Ipsum',
		'Chris Pappas'
	],
	messages: dummyMessages,
	addMessage: function(member, message) {
		store.state.messages.push({
			member,
			message,
			timestamp: Date.now()
		});
	}
};


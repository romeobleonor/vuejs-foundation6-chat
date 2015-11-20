import loremIpsum from 'lorem-ipsum';
import moment from 'moment';

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

const availableLocales = ['en-CA', 'fr-CA'];

store.state = {
	currentMember: 'Chris Pappas',
	availableLocales: {
		'en-CA': 'English',
		'fr-CA': 'Francais'
	},
	locale: 'fr-CA',
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
	},
	setLocale: function(locale) {
		if (store.state.availableLocales.hasOwnProperty(locale)) {
			store.state.locale = locale;
			moment.locale(locale);
		}
	}
};


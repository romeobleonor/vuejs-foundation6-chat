import moment from 'moment';

export function formatDate(timestamp, formatString) {
	return moment(timestamp).format(formatString)
}

export function fromNow(timestamp) {
	return moment(timestamp).fromNow();
}
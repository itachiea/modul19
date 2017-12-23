import uuid from uuid;

{
	type: 'ADD_COMMENT',
	text: 'My first comment !',
	id: uuid.v4
}
{
	type: 'EDIT_COMMENT',
	text: 'comment edited!'
	id
}
{
	type: 'DELETE_COMMENT',
	id
}
{
	type: 'THUMB_UP_COMMENT'
	id,
	img: './like.jpg'
}
{
	type: 'THUMB_DOWN_COMMENT'
	id,
	img: './unlike.jpg'
}

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id,
	}
}

function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id,
	}
}

function thumbUpComment(id) {
	return {
		type: 'THUMB_UP_COMMENT',
		id,
		img
	}
}

function thumbDownComment(id) {
	return {
		type: 'THUMB_DOWN_COMMENT',
		id,
		img
	}
}
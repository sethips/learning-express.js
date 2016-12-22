$(function() {
	$.get('/blocks', appendToList);

	function appendToList(blocks) {
		var list = [];
		for (var i in blocks) {
			list.push('<li>' + blocks[i] + '</li>');
		}
		$('.block-list').append(list);
	}
});
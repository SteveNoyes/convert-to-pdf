var pdfDoc = new jsPDF();
var specialElementHandlers = {
	'#editor': function (element, renderer) {
		return true;
	}
};
$('#submit').click(function () {
	pdfDoc.fromHTML($('#content').html(), 15, 15, { 
		'width': 190,
		'elementHandlers'
		:specialElementHandlers
	});
	pdfDoc.save('html-to-pdf-sample.pdf');
});
export default {
	render: function(data){
		var cont = document.getElementById('content')
		

function html(el) {
	let div = document.createElement('div');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');
	h3.innerHTML = el.title;
	p.innerHTML = el.body;
	div.appendChild(h3);
	div.appendChild(p);
	return div;
}
 data.map(html).forEach(function(el){
		 		cont.appendChild(el);
			});
		console.log(data);
	}
};


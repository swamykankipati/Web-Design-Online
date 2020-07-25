function getdata(file,callback) {
	var request=new XMLHttpRequest();
	request.overrideMimeType('json');
	request.open("GET",file,true);
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
			callback(request.responseText);

		}
	};
	request.send();
}
getdata('data.json',function(text){
	var data=JSON.parse(text);
	console.log(data)
	profiledata(data.profile);
	gopidata(data.profile2);

});
//  create dom using

function profiledata(card){
	var pdata=document.querySelector('.card1');
	var heading=document.createElement('h1');
	heading.textContent="Swami Profile"
	pdata.append(heading)
	var pic=document.createElement('img')
	pic.src='id.jpg'
	pdata.appendChild(pic)
	var name=document.createElement('h2')
	name.textContent=card.name;
	pdata.appendChild(name)
    var mail=document.createElement('h2')
    mail.textContent=card.email;
    pdata.appendChild(mail)
    var phone=document.createElement('h2')
    phone.textContent=card.mobile;
    pdata.appendChild(phone)
    var place=document.createElement('h2')
    place.textContent=card.address;
    pdata.appendChild(place)
    var hr=document.createElement('hr');
    hr.classList.add('hrr')
    pdata.appendChild(hr)
    var com=document.createElement('h2');
    com.textContent=card.com;
    pdata.append(com)
    var dist=document.createElement('h2');
    dist.textContent=card.role;
    pdata.append(dist)
}
function gopidata(gcard){
	var pdata2=document.querySelector('.card2');
	var heading2=document.createElement('h2');
	heading2.textContent='Gopi Profile';
	pdata2.appendChild(heading2)
	var pic2=document.createElement('img');
	pic2.src='gopi.jpeg'
	pdata2.appendChild(pic2)
	for (var i in gcard){
		var dlop=document.createElement('h2');
		dlop.textContent=gcard[i];
		pdata2.appendChild(dlop)
	}

}
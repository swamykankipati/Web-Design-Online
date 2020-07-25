function mobiledata(file,callback) {
	var request= new XMLHttpRequest();
	request.overrideMimeType('json');
	request.open('GET',file,true);
	request.onreadystatechange=function(){
	 if (request.readyState===4 && request.status=="200") {
	 	callback(request.responseText);
	 }
	}
	request.send();
}
mobiledata('data.json',function(text){
	var read=JSON.parse(text)
	console.log(read)
	getdata(read.web);
	foot();


})
function getdata(raw){
var pdata=document.querySelector('.parent');
var heading=document.createElement('h1');
    heading.textContent='My Web Site';
    pdata.appendChild(heading);
    for (i in raw){
    var div=document.createElement('div');
    div.classList.add('Cl1')
    var img=document.createElement('img');
        img.src=raw[i].img;
        img.alt="my img"
        div.appendChild(img)
        pdata.appendChild(div)
    var brand=document.createElement('h2')
        brand.textContent=raw[i].brand;
        div.appendChild(brand)
        pdata.appendChild(div)
    var model=document.createElement('h3')
        model.textContent=raw[i].model;
        div.appendChild(model)
        pdata.appendChild(div)
    var sai=document.createElement('h3')
        sai.textContent="RS"+raw[i].price;
        div.appendChild(sai)
        pdata.appendChild(div)
    var manoj=document.createElement('button')
        manoj.textContent=raw[i].button;
        manoj.classList.add('man')
        div.appendChild(manoj)
        pdata.appendChild(div)


    }



}
function foot(){
	var footer=document.querySelector('.foot');
	const foot=document.createElement('h1')
	foot.textContent="All copy Rights Reviced@Swami& Gopi";
	footer.appendChild(foot)

}


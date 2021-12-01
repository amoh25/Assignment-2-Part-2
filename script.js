/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

const contactList = [  
	{ 
		name: "LeBron James", 
		phone: "778-778-6047", 
		address: "232 3rd St, Akron, Ohio",    
		email: "lebRon@lakers.com",  
	},   
	{    
		name: "DeMar DeRozan",    
		phone: "604-604-7778",    
		address: "111 11 St, Los Angeles",    
		email: "DeMarDeRozan@bulls.com",  
	},
	{    
		name: "Stephen Curry",    
		phone: "604-303-3030",    
		address: "303 11 St, San Francisco",    
		email: "SplashBrother@Warriors.com",  
	},
]


function cleanUpIndex(){
    const mainb = document.querySelector('.main')
    mainb.innerHTML = '';
}


function renderIndex(contactList){
	const mainelem = document.querySelector('.main')
	cleanUpIndex()
	for (var i = 0; i < contactList.length; i++) {
		mainelem.insertAdjacentHTML('beforeend', `<a href="page3.html"><div class="contact"><p>${contactList[i].name}</p></div></a>`)
	}
}


function cleanUpCreate(){
    const cleancreate = document.querySelector('.main')
    cleancreate.innerHTML = '';
}
function renderCreate(){
	const newform = document.createElement('form');
	 newform.insertAdjacentHTML("afterbegin", `
	  <div class="contactedit">
	  <div class="contactimg">
		<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
	  </div>
	  <div class="inputcontainer">
		<input type="text" id="contactname" name="contactname" placeholder="Contact Name">
		<button class="extrafield" id="extranamefield" name="extranamefield">+</button>
	  </div>
	  <div class="inputcontainer">
		<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
		<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
	  </div>
	  <div class="inputcontainer">
		<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
		<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
	  </div>
	  <div class="inputcontainer">
		<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
		<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
	  </div>
	  <div class="buttons">
		<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
		<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
	  </div>
	 `)
	 document.body.appendChild(newform);

	 	const cancelbut = document.querySelector("#cancel");
	 	cancelbut.addEventListener("click", (r) => {
			r.preventDefault;
			cleanUpCreate();
			renderIndex(contactList);
	 
	});
	 
	 	const savebut = document.querySelector("#savecontact");
	 	savebut.addEventListener('click', (r) => {
			r.preventDefault();
		 	contactinfo = [];
			contactinfo.name = document.querySelector("#contactname").value;
			contactinfo.phone = document.querySelector("#contactphone").value;
			contactinfo.address = document.querySelector("#contactaddress").value;
			contactinfo.email = document.querySelector("#contactemail").value; 
			contactList.push(contactinfo);
		  })
		  	cleanUpCreate()
		  	renderIndex(contactinfo)
}



function cleanUpView(){
	const cleanpage = document.querySelector("div");
	cleanpage.innerHTML = '';
}


function renderView(contactList){
	const viewcont = document.querySelector(".main");
	viewcont.insertAdjacentHTML('Afterbegin', `
	<div class="contactinfo">
	<div class="contactname">
		${contactList[0].name}
		<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
	</div>
	<div class="contactemail">email: ${contactList[0].email}</div>
	<div class="contactphone">cell: ${contactList[0].phone}</div>
	<div class="contactaddress">address: ${contactList[0].address}</div>
	<div class="buttons">
		<button class="button edit" value="Edit">Edit</button>
		<button class="button close" value="Close">Close</button>
	</div>
	</div>
	</div>
  `);
const editbut = document.querySelector(".edit")
editbut.addEventListener("click", (r) => {
    r.preventDefault();
    r.stopImmediatePropagation();
    alert("nothing");
  });

const closebut = document.querySelector(".close")
closebut.addEventListener("click", (r) => {
    cleanUpView();
    renderIndex(contactList);
  });
}
  
const contactnav = document.getElementById("contactshome");
contactnav.addEventListener("click", (i) => {
  console.log(contactnav);
  i.preventDefault();
  cleanUpIndex();
  renderIndex(contactList);
});

const createcont = document.getElementById("newcontact");
createcont.addEventListener("click", (i) => {
  console.log(createcont);
  i.preventDefault();
  cleanUpCreate();
  renderCreate();
});  


document.addEventListener("DOMContentLoaded", (r) => {
	renderIndex(contactList)})


function createSingleIndex(contactList){
	const Indiv = querySelector(".contact");
	Indiv.addEventListener("click", (r) => {
	r.preventDefault();
	for (let i = 0; i < contactList.length; i++) {
		if (contactList[i].name == Indiv){
			cleanUpIndex();
			renderView(contactList[i]);
	}
	}
});
return Indiv;
}
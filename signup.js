$('#dropdownId').click(()=> {
	$('.dropdown-menu').fadeToggle('slow');
});



$('#submit').click(() => {
     var usn = $('#usn').val();
     var pw = $('#pw').val();

     const user = {
		Username: usn,
		Password: pw,
		status:'0'
	}

     if(user.Username != '' && user.Password != ''){
		// if(){
			
			var userArr = localStorage.getItem("userArr") ? JSON.parse(localStorage.getItem("userArr")) : [];        
			// window.location='./login.html'
			userArr.push(user);
			localStorage.setItem('userArr', JSON.stringify(userArr));

			// console.log(userArr);
			// let login = 1;
			// console.log(login);
			$('.form').css({'display': 'none '})
			//event.preventDefault($('.form2'))
			$('.form2').css({'display': 'block '})
			window.location='./index.html'

			
		//}
		
		
	} else {
		alert("Please fulfill your information")
		window.location='./signup.html'
	}

});

$('#submitLogin').click(() => {
	var usn = $('#usnL').val();
     var pw = $('#pwL').val();
	var userArr = localStorage.getItem("userArr") ? JSON.parse(localStorage.getItem("userArr")) : [];        

	for (let a = 0; a < userArr.length; a++){
		if (userArr[a].Username == usn && userArr[a].Password == pw){
			 window.location='./index.html'
			 userArr[a].status = '1';
                localStorage.setItem('userArr', JSON.stringify(userArr));
			alert('logged in')
		} else {
			alert("Username or password incorrect , please try again.")
		}
		
	}

});


function loadAcc (){ 

	var userArr = localStorage.getItem("userArr") ? JSON.parse(localStorage.getItem("userArr")) : [];        
  
	const r = userArr.find(el => el.status == '1');  
	var list = `<div class="nav-item dropdown">
	    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${r.Username}</a>
	    <div class="dropdown-menu bg-light m-0">
	        <button class="dropdown-item" onclick="dx('${r.Username}')">Đăng xuất</button>
	    </div>
	</div> `;
	$('#menu').html(list);
	$('#menuL').css('display', 'none');
	$('#blockTab').css('display', 'none')
	
};

function dx(e){
	var userArr = localStorage.getItem("userArr") ? JSON.parse(localStorage.getItem("userArr")) : [];   
	userArr.find(el => el.name == e).status = '0'; 
    localStorage.setItem('userArr', JSON.stringify(userArr));
    window.location.href ="index.html";
    	$('#menu').css('display', 'none');
	$('#meuL').css('display', 'block')
}  
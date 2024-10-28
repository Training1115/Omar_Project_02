const root = $('#root');
const home = $('#home');

// to hide nav bar when user scrolled down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
const navBar = $(
    `<div id="nav">
    <div id="logo"><img src="img/logo/Book1.jpg" alt=""  width="85px" height="51px"></div>  
    <div id="menu"><a id="main-nav" href=#><i title='Main'  class='bx bx-home-smile'> Main</i></a>
    <a href=#><i title='Category' class='bx bx-category'> Category</i></a>
     <a href=#><i title='Newest' class='bx bx-library'>Newest</i></a> 
     <a href=#><i title='user' class='bx bx-user'>User</i></a> 
     <a href=#> <i title='AR/EN' class='bx bx-planet'>AR/EN</i></a> 
    </div> </div>`

);
navBar.appendTo(home);
const sign_in = $(
  `<div id="sign_in">
    <button id="login">Sign in</button>
    <button id="signup">Sign up</button>
  </div>`
)
sign_in.appendTo(home);
const welcome = $(
`<div id="welcome">
  <p id="welcome-p">Welcome To BOOKISH <br></br> Your Adventure Awaits! </p>
</div>`
);
welcome.appendTo(home);

const search = $(
   `<div id="search" class="search">
    <button id='submit_search'><i title='search' class='bx bx-search-alt'> Search </i></button>
    <input title='search here' id="search" type="text" placeholder="Type To Search">
    </div>`

);
search.appendTo(home);


const root = $('#root');
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
    `<div id="nav"> <div> <a href=#><i class='bx bx-home-smile'></i></a></div>
    <div id="logo"><img src="img/logo.jpg" alt="" width="40px" height="40px"></div> 
     
    <div class="search">
    <button id='submit_search'><i class='bx bx-search-alt'></i></button>
    <input id="search" type="text" placeholder="Type To Search">
    </div> 
    <div id="menu"> <a href=#><i class='bx bx-bell'></i></a>
     <a href=#> <i class='bx bx-message-detail'></i></a> 
     <a href=#><i class='bx bx-user'>
     </i></a> 
     <a href=#> <i class='bx bx-adjust'></i></a> 
    </div> </div>`

);
navBar.appendTo(root);
const pages = $(
    `<div id="container">
        <div id="sideNav">
            <div class="sideNav"><button>News Feed</button>
            <button> Inbox</button>
            <button>My Profile</button>
            <button>Friends</button>
            <button>Media</button>
            <button>Notifications</button></div>
            <button>Logout</button>
        </div>
        <div id="newsfeed">
          <div id="newPost">
           <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
           <input id="newPost-in" type="text" placeholder="What's on your mind, Ali? "/>
           <div id="postBtn"> 
            <button id="confirm">Post</button>
           <button id="addPic"><i class='bx bx-image-add'></i>Add Photo</button>
           </div>
          </div>
          <div id="postSlider">
          
          </div>
        </div>
        <div id="sidebar">
            <div id="profile_status"><i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i></div>
            <div id="friend_list">
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            <i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i>
            </div>
        </div>
    </div>`
);
pages.appendTo(root);


const newsfeed = $('#postSlider');
const post = ()=>{


const newpost = $(
`<div id="post">
    <div id="name_date">
        <div><i class='bx bx-user' style="font-size: 2rem; padding-left: 15px; padding-right: 11px;"></i></div>
        <div>
            <div>Ali</div>
            <div>date</div>
        </div>
    </div>
    <div>text</div>
    <div>img/video</div>
    <div><i class='bx bx-heart'></i><i class='bx bx-comment'></i><i class='bx bx-share-alt'></i></div>
</div>`

)
newpost.appendTo(newsfeed);
};
post();
post();
post();
post();
post();
post();
post();
post();
post();
post();
post();
post();
post();
post();
post();


const sidebar = ('#sidebar')
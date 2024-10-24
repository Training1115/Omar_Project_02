const root = $('#root');

const navBar = $(
    `<div id="nav"> <div><i class='bx bx-home-smile'></i></div>
    <div id="logo"><img src="img/logo.jpg" alt="" width="40px" height="40px"></div> 
     
    <div class="search">
    <input id="search" type="text" placeholder="Type To Search"><label for="search"><button id='submit_search'><i class='bx bx-search-alt'></i></button></label> </div> 
    <div id="menu"> <a href=#><i class='bx bx-bell'></i></a>
     <a href=#> <i class='bx bx-message-detail'></i></a> 
     <a href=#><i class='bx bx-user'>
     </i></a> 
     <a href=#> <i class='bx bx-adjust'></i></a> 
    </div> </div>`

);
navBar.appendTo(root);
const feed = $(
    `<div id="container">
        <div id="map1">
            <button>News Feed</button>
            <button> Inbox</button>
            <button>My Profile</button>
            <button>Friends</button>
            <button>Media</button>
            <button>Notifications</button>
            <button>Logout</button>
        </div>
        <div id="newsfeed"></div>
        <div id="statsbar">
            <div id="profile_status"></div>
            <div id="friend_list"></div>
        </div>
    </div>`
);
feed.appendTo(root);


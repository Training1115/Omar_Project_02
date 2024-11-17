// activate back button in browser 

const back = $(`<button id="backButton">Go Back</button>`);

$(document).ready(function() {
    $('#backButton').on('click', function() {
        window.history.back();
    });
});



// jQuery Element Selections for Page Components and UI Elements

const root = $('#root');
const home = $('#home');
const nav = $('#nav');
const header = $("header");
const shop = $("#shop")
const wrap = $(`<div id='wrap_C'></div>`);
const user = $("#user");
const cart = $("#cart");
const signForm = $('#signForm');
const search = $('#search');

const hideEveryThing = () => {
    home.addClass('hidden');
    shop.addClass('hidden');
    cart.addClass('hidden');
    user.addClass('hidden');


}







let firstName = "";
let lastName = "";
let email = "";
let password = "";



const renderLogin = (mn_ween_jay) => {
    hideEveryThing();
    user.removeClass('hidden');
    
   
    const register = $(`
        <p class="title">signup</p>
          <input
            title="firstName"
            id="firstName"
            class="input_box"
            type="text"
            placeholder="firstName"
          />
          <input
            title="lastName"
            id="lastName"
            class="input_box"
            type="text"
            placeholder="lastName"
            />

            <input
            title="UserName"
            id="userName_S"
            class="input_box"
            type="text"
            placeholder="UserName"
          />
        <input
            title="Password"
            id="password_s"
            class="input_box"
            type="password"
            placeholder="Password"
          />
           <p class="toggle-message">Already have an account? <button type='button' id="switch_login">Login</button></p>
        `)
    const login_card = $(` 
        <p class="title">login</p>
       <input
            title="UserName"
            id="userName_L"
            class="input_box"
            type="text"
            placeholder="UserName"
          />
        <input
            title="Password"
            id="password_l"
            class="input_box"
            type="password"
            placeholder="Password"
          />
        <p class="toggle-message">Don't have an account? <button type='button' id="switch_signup">Sign Up</button></p>`)

          const submitButton =$(`<input
            title="Submit Login"
            id="sub_login"
            class="sub_signin"
            type="submit"
            placeholder="Submit"
          />`)

        
          if (mn_ween_jay==='signup'){register.appendTo(signForm)
            submitButton.appendTo(signForm);
          }
          else{
          login_card.appendTo(signForm);
          submitButton.appendTo(signForm);}

}

$('#switch_login').on('click', (e) => {
    e.preventDefault(); // Prevent default behavior
    console.log('first'); // Log a message to the console
    renderLogin(); // Call the renderLogin function
});

$('#switch_signup').on('click', () => {
    renderLogin('signup');
})

const navBar = $(
    `<div id="nav-bar">
    <div id="logo"><img src="img/logo/Book1.jpg" alt=""  width="140px" height="55px"></div>  
   <div id="menu">
        <li id="main-nav" class="nav-link"><i title='Main' class='bx bx-home-smile'> Main</i></li>
        <li id="Shop-nav" class="nav-link"><i title='Shop' class='bx bx-category'> Shop</i></li>
        <li id="Cart-nav" class="nav-link"><i title='Cart' class='bx bx-library'>Cart</i></li> 
        <li id="user-nav" class="nav-link"><i title='User  ' class='bx bx-user'> User</i></li> 
        </div> </div>`


);
navBar.appendTo(header);


const handleSearch = ()=>{
    const value = $('#search_input').val()
    console.log('value :>> ', value);
    
    
    };

const renderHome = () => {
    hideEveryThing();
    home.removeClass('hidden')
    const sign_in = $(
        `<div id="sign_in">
        <button id="login">Sign in</button>
        <button id="signup">Sign up</button>
      </div>`
    )
    sign_in.appendTo(home);


    $('#login').on('click', () => {
        renderLogin('login')
    });
    $('#signup').on('click', () => { renderLogin('signup') });



    const welcome = $(
        `<div id="welcome">
        <p id="welcome-p">Welcome To BOOKISH <br></br> Your Adventure Awaits!</p>
        </div>`
    );
    welcome.appendTo(home);

    const search = $(
        `<div id="search" class="search">
        <button id='submit_search'><i title='search' class='bx bx-search-alt'> Search </i></button>
        <input title='search here' id="search_input" type="text" placeholder="Type To Search">
        </div>`

    );
    search.appendTo(home);
    $('#search_input').on('change',()=>{
        handleSearch()
    })

}





const footer = $(`<footer id="footer"><img src="img/logo/Book1.jpg" alt="" width="140px" height="55px" ></footer>`
);
footer.appendTo(root);


const books = [

    {
        "id": "9781098103828",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$58.90"
    },
    {
        "id": "9781098104030",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 3,
        "yearOfPublish": "2020",
        "authorName": "Unknown Author",
        "price": "$34.96"
    },
    {
        "id": "9781098106225",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99"
    },
    {
        "id": "9781098111878",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$60.99"
    },
    {
        "id": "9781098112844",
        "img": "https://itbook.store/img/books/9781098112844.png",
        "nameOfBook": "Learning Microsoft Power BI",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$40.97"
    },
    {
        "id": "9781098113162",
        "img": "https://itbook.store/img/books/9781098113162.png",
        "nameOfBook": "C++ Software Design",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$48.99"
    },
    {
        "id": "9781098116743",
        "img": "https://itbook.store/img/books/9781098116743.png",
        "nameOfBook": "Terraform: Up and Running, 3rd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$41.99"
    },
    {
        "id": "9781098119515",
        "img": "https://itbook.store/img/books/9781098119515.png",
        "nameOfBook": "Flutter and Dart Cookbook",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$42.99"
    },
    {
        "id": "9781098121228",
        "img": "https://itbook.store/img/books/9781098121228.png",
        "nameOfBook": "Python Data Science Handbook, 2nd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$56.99"
    },
    {
        "id": "9781098130923",
        "img": "https://itbook.store/img/books/9781098130923.png",
        "nameOfBook": "Raspberry Pi Cookbook, 4 th Edition",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$14.99"
    },
    {
        "id": "9781642002263",
        "img": "https://itbook.store/img/books/9781642002263.png",
        "nameOfBook": "Azure Maps Using Blazor Succinctly",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$0.00"
    },
    {
        "id": "9781800562738",
        "img": "https://itbook.store/img/books/9781800562738.png",
        "nameOfBook": "Full Stack Quarkus and React",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$39.99"
    },
    {
        "id": "9781801077330",
        "img": "https://itbook.store/img/books/9781801077330.png",
        "nameOfBook": "Mathematics for Game Programming and Computer Graphics",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$49.99"
    },
    {
        "id": "9781801810999",
        "img": "https://itbook.store/img/books/9781801810999.png",
        "nameOfBook": "Architecting and Building High-Speed SoCs",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$35.99"
    },
    {
        "id": "9781801811132",
        "img": "https://itbook.store/img/books/9781801811132.png",
        "nameOfBook": "Web Development with Julia and Genie",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$39.99"
    },
    {
        "id": "9781801812856",
        "img": "https://itbook.store/img/books/9781801812856.png",
        "nameOfBook": "Java Memory Management",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.99"
    },
    {
        "id": "9781803242002",
        "img": "https://itbook.store/img/books/9781803242002.png",
        "nameOfBook": "Test-Driven Development with C++",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99"
    },
    {
        "id": "9781804612569",
        "img": "https://itbook.store/img/books/9781804612569.png",
        "nameOfBook": "Software Test Design",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99"
    },
    {
        "id": "9781804617007",
        "img": "https://itbook.store/img/books/9781804617007.png",
        "nameOfBook": "Microservices with Go",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$29.99"
    },

    {
        "id": "9781098103828",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$58.90"
    },
    {
        "id": "9781098104030",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 3,
        "yearOfPublish": "2020",
        "authorName": "Unknown Author",
        "price": "$34.96"
    },
    {
        "id": "9781098106225",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99"
    },
    {
        "id": "9781098111878",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$60.99"
    },
    {
        "id": "9781098112844",
        "img": "https://itbook.store/img/books/9781098112844.png",
        "nameOfBook": "Learning Microsoft Power BI",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$40.97"
    },
    {
        "id": "9781098113162",
        "img": "https://itbook.store/img/books/9781098113162.png",
        "nameOfBook": "C++ Software Design",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$48.99"
    },
    {
        "id": "9781098116743",
        "img": "https://itbook.store/img/books/9781098116743.png",
        "nameOfBook": "Terraform: Up and Running, 3rd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$41.99"
    },
    {
        "id": "9781098119515",
        "img": "https://itbook.store/img/books/9781098119515.png",
        "nameOfBook": "Flutter and Dart Cookbook",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$42.99"
    },
    {
        "id": "9781098121228",
        "img": "https://itbook.store/img/books/9781098121228.png",
        "nameOfBook": "Python Data Science Handbook, 2nd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$56.99"
    },
    {
        "id": "9781098130923",
        "img": "https://itbook.store/img/books/9781098130923.png",
        "nameOfBook": "Raspberry Pi Cookbook, 4th Edition",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$14.99"
    },
    {
        "id": "9781642002263",
        "img": "https://itbook.store/img/books/9781642002263.png",
        "nameOfBook": "Azure Maps Using Blazor Succinctly",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$0.00"
    },
    {
        "id": "9781800562738",
        "img": "https://itbook.store/img/books/9781800562738.png",
        "nameOfBook": "Full Stack Quarkus and React",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$39.99"
    },
    {
        "id": "9781801077330",
        "img": "https://itbook.store/img/books/9781801077330.png",
        "nameOfBook": "Mathematics for Game Programming and Computer Graphics",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$49.99"
    },
    {
        "id": "9781801810999",
        "img": "https://itbook.store/img/books/9781801810999.png",
        "nameOfBook": "Architecting and Building High-Speed SoCs",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$35.99"
    },
    {
        "id": "9781801811132",
        "img": "https://itbook.store/img/books/9781801811132.png",
        "nameOfBook": "Web Development with Julia and Genie",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$39.99"
    },
    {
        "id": "9781801812856",
        "img": "https://itbook.store/img/books/9781801812856.png",
        "nameOfBook": "Java Memory Management",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.99"
    },
    {
        "id": "9781803242002",
        "img": "https://itbook.store/img/books/9781803242002.png",
        "nameOfBook": "Test-Driven Development with C++",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99"
    },
    {
        "id": "9781804612569",
        "img": "https://itbook.store/img/books/9781804612569.png",
        "nameOfBook": "Software Test Design",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99"
    },
    {
        "id": "9781804617007",
        "img": "https://itbook.store/img/books/9781804617007.png",
        "nameOfBook": "Microservices with Go",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$29.99"
    },

]








const renderShop = () => {
    hideEveryThing();
    shop.removeClass('hidden');
    books.forEach((element, indx) => {
        const card = $(`
                <div class="book_card aos-item"  data-aos="fade-up"
             data-aos-duration="1200" data-id=${indx + 1}>
                    <img class="mods"  src="${element.img}" alt="${element.nameOfBook}" />
                    <div class="rating">${'★'.repeat(element.rate)}${'☆'.repeat(5 - element.rate)}</div>
                    <div id="book_name" >
                        <h5>${element.nameOfBook}</h5>
                    </div>
                    <div class="book_info">
                    <h5>${element.authorName}</h5>
                        <h5>${element.yearOfPublish}</h5>
                    </div>
                    <div class="book_info">
                        <div><button>Add To Cart  <i class='bx bx-cart-add'></i></button></div>
                        <div><h4>${element.price}</h4></div>
                    </div>
                </div>
            `);
        card.appendTo(wrap);
    });

    wrap.appendTo(shop)
}




const renderCart = () => {
     hideEveryThing();
    
    }

renderHome();
const activate_search = () => {
    
}


$('#Shop-nav').on('click', () => {
    renderShop();
});





const toggleLoggedIn = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn == 0) { location.reload(true) }
    else if (isLoggedIn == 1) { location.reload(true) }
}





const root = $('#root');
const home = $('#home');
const nav = $('#nav');
const header = $("header");
const shop = $("#shop")
const wrap = $(`<div id='wrap_C' class='wraperBook'></div>`);
const wrapCart = $(`<div id='wrap_Cart' class='wraperBook'></div>`);
const user = $("#user");
const cart = $("#cart");
const signForm = $('#signForm');
const search = $('#search');
const shopSearch = $('#bookSearch');
const select = $('#categorySelector');
const hideEveryThing = () => {
    home.addClass('hidden');
    shop.addClass('hidden');
    cart.addClass('hidden');
    user.addClass('hidden');
}



const liElement = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const user = JSON.parse(localStorage.getItem('user'))
    if (isLoggedIn != 0 && user) {
        return `<li id="userNameList">${user.name}</li>
        <li id="Settings">Settings</li>
        <li id="signout">Logout</li>`
    }
    else { return `<li id="login1st">Login</li>` }
};




const navBar = $(
    `<div id="nav-bar">
    <div id="logo"><img src="img/logo/Book1.jpg" alt=""  width="140px" height="55px"></div>  
   <ul id="menu">
        <li id="main-nav" class="nav-link"><i title='Main' class='bx bx-home-smile'> Main</i></li>
        <li id="shop-nav" class="nav-link"><i title='Shop' class='bx bx-category'> Shop</i></li>
        <li id="cart-nav" class="nav-link"><i title='Cart' class='bx bx-library'>Cart</i></li> 
        <li id="user-nav" class="nav-link"><i title='User  ' class='bx bx-user'> User</i>
        <ul id="user-list" style="display: none;">
        ${liElement()}
    </ul></li> 
        </ul> </div>`


);
navBar.appendTo(header);

const renderLogin = (mn_ween_jay) => {
    hideEveryThing();
    user.removeClass('hidden');
    signForm.empty()
    const register = $(`
        <p class="title">signup</p>
          <input
            title="firstName"
            id="firstName"
            class="input_box"
            type="text"
            placeholder="firstName"
            required

          />
          <input
            title="lastName"
            id="lastName"
            class="input_box"
            type="text"
            placeholder="lastName"
            
            required
            />

            <input
            title="UserName"
            id="userName_S"
            class="input_box"
            type="text"
            placeholder="UserName"
            required
          /> 
        <input
            title="Password"
            id="password_s"
            class="input_box"
            type="password"
            placeholder="Password"
            required
            required
          />
           <p class="toggle-message">Already have an account?<span type='button' id="switch_login" class='toggle-form-btns'>Login</span> </p>
           <p class="toggle-message">Already have an account?<span type='button' id="switch_login" class='toggle-form-btns'>Login</span> </p>
        `)
    const login_card = $(` 
        <p class="title">login</p>
       <input
            title="UserName"
            id="userName_L"
            class="input_box"
            type="text"
            placeholder="UserName"
            required
          />
        <input
            title="Password"
            id="password_l"
            class="input_box"
            type="password"
            placeholder="Password"
            required
            required
          />
        <p class="toggle-message">Don't have an account? <span type='button' id="switch_signup" class='toggle-form-btns'>Sign Up</span></p>`)


    const submitButton = $(`<input
            title="Submit Login"
            id="sub_login"
            class="sub_signin"
            type="submit"
            placeholder="Submit"
          />`)


    if (mn_ween_jay === 'signup') {
        register.appendTo(signForm)
        submitButton.appendTo(signForm);
    }
    else {
        login_card.appendTo(signForm);
        submitButton.appendTo(signForm);
    }


}



$(document).on('click', '#switch_login', function () {
    renderLogin()
});
$(document).on('click', '#switch_signup', function () {
    renderLogin('signup');
});
$(document).on('click', '#sub_login', function () {
});
$(document).on('change', '#userName_S', function () {
    const users = JSON.parse(localStorage.getItem('users'));
    const registerUserName = $('#userName_S').val();
    const findUnique = users.find((user) => user.userName.toLowerCase() === registerUserName.toLowerCase());
    if (findUnique) {
        $('#userName_S').css("border", "3px solid red");
    }
    else {
        $('#userName_S').css("border", "0");
    }

});
signForm.on('submit', (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users'))
    const loginUserName = $('#userName_L').val()
    const loginPassword = $('#password_l').val()
    const firstNameVal = $('#firstName').val()
    const lastNameVal = $('#lastName').val()
    const registerUserName = $('#userName_S').val()
    const registerPassword = $('#password_s').val()

    if (firstNameVal) {
        const findUnique = users.find((user) => user.userName.toLowerCase() === registerUserName.toLowerCase());
        if (findUnique) {
            alert('username already exist');
        } else {
            const newUser = {
                id: users.length + 1,
                name: `${firstNameVal} ${lastNameVal}`,
                userName: registerUserName,
                password: registerPassword
            }
            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))

        }
    } else {
        
        const userData = users.find((user) => user.userName.toLowerCase() === loginUserName.toLowerCase());
        if (userData) {
            if (userData.password === loginPassword) {
                localStorage.setItem('isLoggedIn', 1)
                localStorage.setItem('user', JSON.stringify({
                    id: userData.id,
                    name: userData.name
                }))
                toggleLoggedIn();
            }
            else { alert('user name or password incorrect'); }
        }
        else {
            alert('user name or password incorrect')
        }

    }

})






const renderHome = () => {
    home.empty()
    hideEveryThing();
    home.removeClass('hidden');
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn == 0) {
        const sign_in = $(
            `<div id="sign_in">
        <button id="login">Sign in</button>
        <button id="signup">Sign up</button>
      </div>`
        )
        sign_in.appendTo(home);
    }

    $(document).on('click', '#login1st', () => {
        renderLogin('login')
    });


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
    $('#submit_search').on('click', () => {
        shopSearch.val($('#search_input').val())
        renderShop()
    })

    const down = $(`
        <div class="scroll-down"  aos-item"  data-aos="fade-down"
             data-aos-duration="1500"
        <p id="scroll-down"><i class='bx bxs-chevrons-down'></i></p></div>`);
    down.appendTo(home);

    $(document).on("scroll", (e) => {
        e.preventDefault()
        renderShop()
    });
}





const footer = $(`<footer id="footer"><img src="img/logo/Book1.jpg" alt="" width="140px" height="55px" ></footer>`
);
footer.appendTo(root);


const books = [

    {
        "id": "9781098103828",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 2,
        "yearOfPublish": "2017",
        "authorName": "Unknown Author",
        "price": "$58.90",
        "category": "programming"
    },
    {
        "id": "9781098104030",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 2,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.96",
        "category": "programming"
    }, {
        "id": "9781098106225",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 1,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99",
        "category": "programming"
    },
    {
        "id": "9781098111878",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 1,
        "yearOfPublish": "2005",
        "authorName": "Unknown Author",
        "price": "$60.99",
        "category": "programming"
    },
    {
        "id": "9781098112844",
        "img": "https://itbook.store/img/books/9781098112844.png",
        "nameOfBook": "Learning Microsoft Power BI",
        "rate": 1,
        "yearOfPublish": "2029",
        "authorName": "Unknown Author",
        "price": "$40.97",
        "category": "programming"
    },
    {
        "id": "9781098113162",
        "img": "https://itbook.store/img/books/9781098113162.png",
        "nameOfBook": "C++ Software Design",
        "rate": 3,
        "yearOfPublish": "2014",
        "authorName": "Unknown Author",
        "price": "$48.99",
        "category": "theory"
    },
    {
        "id": "9781098116743",
        "img": "https://itbook.store/img/books/9781098116743.png",
        "nameOfBook": "Terraform: Up and Running, 3rd Edition",
        "rate": 4,
        "yearOfPublish": "2024",
        "authorName": "Unknown Author",
        "price": "$41.99",
        "category": "theory"
    },
    {
        "id": "9781098119515",
        "img": "https://itbook.store/img/books/9781098119515.png",
        "nameOfBook": "Flutter and Dart Cookbook",
        "rate": 2,
        "yearOfPublish": "2023",
        "authorName": "Unknown Author",
        "price": "$42.99",
        "category": "theory"
    },
    {
        "id": "9781098121228",
        "img": "https://itbook.store/img/books/9781098121228.png",
        "nameOfBook": "Python Data Science Handbook, 2nd Edition",
        "rate": 2,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$56.99",
        "category": "theory"
    },
    {
        "id": "9781098130923",
        "img": "https://itbook.store/img/books/9781098130923.png",
        "nameOfBook": "Raspberry Pi Cookbook, 4 th Edition",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$14.99",
        "category": "theory"
    },
    {
        "id": "9781642002263",
        "img": "https://itbook.store/img/books/9781642002263.png",
        "nameOfBook": "Azure Maps Using Blazor Succinctly",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$0.00",
        "category": "AI"
    },
    {
        "id": "9781800562738",
        "img": "https://itbook.store/img/books/9781800562738.png",
        "nameOfBook": "Full Stack Quarkus and React",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "AI"
    },
    {
        "id": "9781801077330",
        "img": "https://itbook.store/img/books/9781801077330.png",
        "nameOfBook": "Mathematics for Game Programming and Computer Graphics",
        "rate": 4,
        "yearOfPublish": "1998",
        "authorName": "Unknown Author",
        "price": "$49.99",
        "category": "AI"
    },
    {
        "id": "9781801810999",
        "img": "https://itbook.store/img/books/9781801810999.png",
        "nameOfBook": "Architecting and Building High-Speed SoCs",
        "rate": 3,
        "yearOfPublish": "2010",
        "authorName": "Unknown Author",
        "price": "$35.99",
        "category": "AI"
    },
    {
        "id": "9781801811132",
        "img": "https://itbook.store/img/books/9781801811132.png",
        "nameOfBook": "Web Development with Julia and Genie",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "AI"
    },
    {
        "id": "9781801812856",
        "img": "https://itbook.store/img/books/9781801812856.png",
        "nameOfBook": "Java Memory Management",
        "rate": 5,
        "yearOfPublish": "2016",
        "authorName": "Unknown Author",
        "price": "$34.99",
        "category": "AI"
    },
    {
        "id": "9781803242002",
        "img": "https://itbook.store/img/books/9781803242002.png",
        "nameOfBook": "Test-Driven Development with C++",
        "rate": 4,
        "yearOfPublish": "2023",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "drama"
    },
    {
        "id": "9781804612569",
        "img": "https://itbook.store/img/books/9781804612569.png",
        "nameOfBook": "Software Test Design",
        "rate": 3,
        "yearOfPublish": "2024",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "drama"
    },
    {
        "id": "9781804617007",
        "img": "https://itbook.store/img/books/9781804617007.png",
        "nameOfBook": "Microservices with Go",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$29.99",
        "category": "drama"
    },

    {
        "id": "9781098103828",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$58.90",
        "category": "drama"
    },
    {
        "id": "9781098104030",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 3,
        "yearOfPublish": "2020",
        "authorName": "Unknown Author",
        "price": "$34.96",
        "category": "drama"
    },
    {
        "id": "9781098106225",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99",
        "category": "drama"
    },
    {
        "id": "9781098111878",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$60.99",
        "category": "drama"
    },
    {
        "id": "9781098112844",
        "img": "https://itbook.store/img/books/9781098112844.png",
        "nameOfBook": "Learning Microsoft Power BI",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$40.97",
        "category": "drama"
    },
    {
        "id": "9781098113162",
        "img": "https://itbook.store/img/books/9781098113162.png",
        "nameOfBook": "C++ Software Design",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$48.99",
        "category": "programming"
    },
    {
        "id": "9781098116743",
        "img": "https://itbook.store/img/books/9781098116743.png",
        "nameOfBook": "Terraform: Up and Running, 3rd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$41.99",
        "category": "drama"
    },
    {
        "id": "9781098119515",
        "img": "https://itbook.store/img/books/9781098119515.png",
        "nameOfBook": "Flutter and Dart Cookbook",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$42.99",
        "category": "documentary"
    },
    {
        "id": "9781098121228",
        "img": "https://itbook.store/img/books/9781098121228.png",
        "nameOfBook": "Python Data Science Handbook, 2nd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$56.99",
        "category": "documentary"
    },
    {
        "id": "9781098130923",
        "img": "https://itbook.store/img/books/9781098130923.png",
        "nameOfBook": "Raspberry Pi Cookbook, 4th Edition",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$14.99",
        "category": "documentary"
    },
    {
        "id": "9781642002263",
        "img": "https://itbook.store/img/books/9781642002263.png",
        "nameOfBook": "Azure Maps Using Blazor Succinctly",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$0.00",
        "category": "documentary"
    },
    {
        "id": "9781800562738",
        "img": "https://itbook.store/img/books/9781800562738.png",
        "nameOfBook": "Full Stack Quarkus and React",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "documentary"
    },
    {
        "id": "9781801077330",
        "img": "https://itbook.store/img/books/9781801077330.png",
        "nameOfBook": "Mathematics for Game Programming and Computer Graphics",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$49.99",
        "category": "documentary"
    },
    {
        "id": "9781801810999",
        "img": "https://itbook.store/img/books/9781801810999.png",
        "nameOfBook": "Architecting and Building High-Speed SoCs",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$35.99",
        "category": "documentary"
    },
    {
        "id": "9781801811132",
        "img": "https://itbook.store/img/books/9781801811132.png",
        "nameOfBook": "Web Development with Julia and Genie",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "documentary"
    },
    {
        "id": "9781801812856",
        "img": "https://itbook.store/img/books/9781801812856.png",
        "nameOfBook": "Java Memory Management",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.99",
        "category": "documentary"
    },
    {
        "id": "9781803242002",
        "img": "https://itbook.store/img/books/9781803242002.png",
        "nameOfBook": "Test-Driven Development with C++",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "documentary"
    },
    {
        "id": "9781804612569",
        "img": "https://itbook.store/img/books/9781804612569.png",
        "nameOfBook": "Software Test Design",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "documentary"
    },
    {
        "id": "9781804617007",
        "img": "https://itbook.store/img/books/9781804617007.png",
        "nameOfBook": "Microservices with Go",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$29.99",
        "category": "documentary"
    },

    {
        "id": "9781098103828",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 2,
        "yearOfPublish": "2017",
        "authorName": "Unknown Author",
        "price": "$58.90",
        "category": "documentary"
    },
    {
        "id": "9781098104030",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 2,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.96",
        "category": "drama"
    },
    {
        "id": "9781098106225",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 1,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99",
        "category": "documentary"
    },
    {
        "id": "9781098111878",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 1,
        "yearOfPublish": "2005",
        "authorName": "Unknown Author",
        "price": "$60.99",
        "category": "drama"
    },
    {
        "id": "9780134685991",
        "img": "https://itbook.store/img/books/9780134685991.png",
        "nameOfBook": "Effective Java, 3rd Edition",
        "rate": 5,
        "yearOfPublish": "2018",
        "authorName": "Joshua Bloch",
        "price": "$45.00",
        "category": "programming"
    },
    {
        "id": "9781491950357",
        "img": "https://itbook.store/img/books/9781491950357.png",
        "nameOfBook": "Learning Python, 5th Edition",
        "rate": 5,
        "yearOfPublish": "2013",
        "authorName": "Mark Lutz",
        "price": "$59.95",
        "category": "programming"
    },
    {
        "id": "9781492078005",
        "img": "https://itbook.store/img/books/9781492078005.png",
        "nameOfBook": "Python Crash Course, 2nd Edition",
        "rate": 4,
        "yearOfPublish": "2019",
        "authorName": "Eric Matthes",
        "price": "$39.95",
        "category": "programming"
    },
    {
        "id": "9781491954461",
        "img": "https://itbook.store/img/books/9781491954461.png",
        "nameOfBook": "Fluent Python",
        "rate": 5,
        "yearOfPublish": "2015",
        "authorName": "Luciano Ramalho",
        "price": "$49.99",
        "category": "programming"
    },
    {
        "id": "9780134853987",
        "img": "https://itbook.store/img/books/9781789951288.png",
        "nameOfBook": "Introduction to the Theory of Computation",
        "rate": 4,
        "yearOfPublish": "2019",
        "authorName": "Michael Sipser",
        "price": "$59.99",
        "category": "theory"
    },

    {
        "id": "9781491950296",
        "img": "https://itbook.store/img/books/9781491950296.png",
        "nameOfBook": "The Pragmatic Programmer, 20th Anniversary Edition",
        "rate": 5,
        "yearOfPublish": "2019",
        "authorName": "Andrew Hunt, David Thomas",
        "price": "$49.99",
        "category": "programming"
    },

    {
        "id": "9781491954461",
        "img": "https://itbook.store/img/books/9781491954461.png",
        "nameOfBook": "Fluent Python",
        "rate": 5,
        "yearOfPublish": "2015",
        "authorName": "Luciano Ramalho",
        "price": "$49.99",
        "category": "programming"
    },
    {
        "id": "9780134853987",
        "img": "https://itbook.store/img/books/9781789951288.png",
        "nameOfBook": "Introduction to the Theory of Computation",
        "rate": 4,
        "yearOfPublish": "2019",
        "authorName": "Michael Sipser",
        "price": "$59.99",
        "category": "theory"
    },

    {
        "id": "9781491950296",
        "img": "https://itbook.store/img/books/9781491950296.png",
        "nameOfBook": "The Pragmatic Programmer, 20th Anniversary Edition",
        "rate": 5,
        "yearOfPublish": "2019",
        "authorName": "Andrew Hunt, David Thomas",
        "price": "$49.99",
        "category": "programming"
    },
    {
        "id": "9780134757590",
        "img": "https://itbook.store/img/books/9781098109035.png",
        "nameOfBook": "Artificial Intelligence: A Modern Approach",
        "rate": 5,
        "yearOfPublish": "2020",
        "authorName": "Stuart Russell, Peter Norvig",
        "price": "$79.99",
        "category": "AI"
    },
    {
        "id": "9781491950296",
        "img": "https://itbook.store/img/books/9781491950296.png",
        "nameOfBook": "The Pragmatic Programmer, 20th Anniversary Edition",
        "rate": 5,
        "yearOfPublish": "2019",
        "authorName": "Andrew Hunt, David Thomas",
        "price": "$49.99",
        "category": "programming"
    }


]
let filtration = []

const handleFiltration = (whatToFilter) => {

    switch (whatToFilter) {
        case 'newest':
            if (filtration.length === 0) {
                filtration = books.sort((a, b) => b.yearOfPublish - a.yearOfPublish);
                renderShop(filtration);
            } else {
                filtration = filtration.sort((a, b) => b.yearOfPublish - a.yearOfPublish);
                renderShop(filtration)
            }
            break;
        case 'popular':
            if (filtration.length === 0) {
                filtration = books.sort((a, b) => b.rate - a.rate);
                renderShop(filtration);
            }
            else {
                filtration = filtration.sort((a, b) => b.rate - a.rate);
                renderShop(filtration);
            }
            break;
        case 'select':
            if (filtration.length === 0) {
                const selectValue = $('#categorySelector').val()
                filtration = books.filter((item) => {
                    if (selectValue.length === 0) {
                        return true

                    } else {
                        return item.category.toLowerCase().includes(selectValue.toLowerCase())
                    }
                })
                renderShop(filtration);
            }
            else {

                const selectValue = $('#categorySelector').val()
                filtration = filtration.filter((item) => {
                    if (selectValue.length === 0) {
                        return true

                    } else {
                        return item.category.toLowerCase().includes(selectValue.toLowerCase())
                    }
                })
                renderShop(filtration);
            }
            break;

        default:
            break;
    }

}
$(document).on('click', '#newest', () => {
    handleFiltration('newest');
});

$(document).on('click', '#popular', () => {
    handleFiltration('popular');

});

$(document).on('change', '#categorySelector', (e) => {
    e.preventDefault()
    handleFiltration('select');
});







const renderShop = (filtration = books) => {
    $(document).off("scroll");
    hideEveryThing();
    shop.removeClass('hidden');
    wrap.empty()
    filtration.filter((item) => {
        if (shopSearch.val().length === 0) {
            return true

        } else {
            return item.nameOfBook.toLowerCase().includes(shopSearch.val().toLowerCase())
        }
    }).forEach((element, indx) => {
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
                        <button id=${element.id} class='addToCartBtn'>Add To Cart  <i class='bx bx-cart-add'></i></button>
                        <h4>${element.price}</h4>
                    </div>
                </div>
            `);

        card.appendTo(wrap);
    });

    wrap.appendTo(shop)
}

shopSearch.on('input', () => {

    renderShop()
});


$(window).on('load', function () {
    $(window).scrollTop(0);  
});

$(window).on('beforeunload', function () {
    $(window).scrollTop(0); 
});




$(document).on('click', '.addToCartBtn', (e) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) {
        const bookId = e.target.id;
        const userID = JSON.parse(localStorage.getItem('user')).id
        const carts = JSON.parse(localStorage.getItem('cart'))
        const cart = carts.find(item => item.user_id === userID)
        if (cart) {
            if (cart.book_ids.includes(bookId)) {
                alert('book already exists in your cart')
            } else {

                cart.book_ids.push(bookId)
            }
        }
        else {
            carts.push({ book_ids: [bookId], user_id: userID })
        }
        localStorage.setItem('cart', JSON.stringify(carts))
    }
    else {
        alert('please login first');
    }
});

$(document).on('click', '#signout', (e) => {
    localStorage.setItem('isLoggedIn', 0)
    localStorage.removeItem('user')
    toggleLoggedIn()

});

const renderCart = () => {

    wrapCart.empty();
    hideEveryThing();
    cart.removeClass('hidden');
    
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn ==1 ) {
        
        const userID = JSON.parse(localStorage.getItem('user'))
        const carts = JSON.parse(localStorage.getItem('cart'))
        const basket = carts.find(item => item.user_id === userID.id)
            
        
        const filtered = books.filter((item)=>basket.book_ids.includes(item.id))
        
        if (filtered.length == 0){alert('cart is empty')
            renderShop()
        }
        
        
        filtered.forEach((element, indx) => {
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
                            <button id=${element.id} class='removeFromCartBtn'>Remove From Cart  <i class='bx bx-trash'></i></button>
                            <h4>${element.price}</h4>
                        </div>
                    </div>
                `);
            card.appendTo(wrapCart);
        });
        wrapCart.appendTo(cart)
    }
    else{
        alert("login first")
        renderHome()
    }





};


$(document).on('click', '.removeFromCartBtn', (e) => {
    const bookId = e.target.id; 
    const userID = JSON.parse(localStorage.getItem('user')).id
    const carts = JSON.parse(localStorage.getItem('cart'))
    const cart =  carts.find(item => item.user_id === userID)
    const indx = cart.book_ids.indexOf(bookId);
    cart.book_ids.splice(indx , 1)
    localStorage.setItem('cart' , JSON.stringify(carts))
    renderCart()
})




const initLocalStorage = () => {
    const users = localStorage.getItem('users')
    if (!users) {
        localStorage.setItem('users', JSON.stringify([]))
    }
    const cart = localStorage.getItem('cart')
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]))
    }
}




$(document).on('click', '#submit_search', (e) => {
    e.preventDefault()
    $()
    console.log("first")
    renderShop()
})




$('#shop-nav').on('click', () => {
    renderShop();
});
$('#cart-nav').on('click', () => {
    renderCart();
    
});

initLocalStorage();
renderHome();

$(document).on('mouseenter', '#user-nav', () => {
    $('#user-list').stop(true, true).fadeIn();
});

$(document).on('mouseleave', '#user-nav', () => {
    $('#user-list').stop(true, true).fadeOut();
});
$(document).on('click', '#main-nav', () => {
    renderHome();
});
$(document).on('click', '#logo', () => {
    location.reload();
});



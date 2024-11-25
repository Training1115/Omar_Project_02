


const toggleLoggedIn = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn == 0) { location.reload(true) }
    else if (isLoggedIn == 1) { location.reload(true) }
}




// implmentation
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
const paymentFooter = $('#paymentFooter');

// function that hide pages
const hideEveryThing = () => {
    home.addClass('hidden');
    shop.addClass('hidden');
    cart.addClass('hidden');
    user.addClass('hidden');
}




// the list of element in user list

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
const liElement_toggle = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const user = JSON.parse(localStorage.getItem('user'))
    if (isLoggedIn != 0 && user) {
        return `<option id="signout" value='logout'>Logout</option>`
    }
    else { return `<option id="login1st" value='login'>Login</option>` }
};



// nave bar structure

const navBar = $(
    `   <div id="nav-bar">
      <div id="logo">
        <img src="img/logo/Book1.jpg" alt="" width="140px" height="55px" />
      </div>

      <div id="menu_navBar">
        <ul id="menu">
          <li id="main-nav" class="nav-link">
            <i title="Main" class="bx bx-home-smile"> Main</i>
          </li>
          <li id="shop-nav" class="nav-link">
            <i title="Shop" class="bx bx-category"> Shop</i>
          </li>
          <li id="cart-nav"><i class='bx bx-cart' > Cart</i></li>
          <li id="user-nav" class="nav-link">
            <i title="User  " class="bx bx-user"> User</i>
            <ul id="user-list" style="display: none">
              ${liElement()}
            </ul>
          </li>
        </ul>
      </div>
      <div id="nav-bar-toggle" >
        <select id="toggle-menu">
          <option id="main-nav" class="nav-link"><i value="main" class="bx bx-home-smile"> Main</i></option>
          <option id="shop-nav" class="nav-link"><i value="shop" class="bx bx-category"> Shop</i></option>
          <option id="cart-nav" class="nav-link"><i value="cart" class="bx bx-library">Cart</i></option>
          ${liElement_toggle()}
        </select>
      </div>
    </div>
       `


);

//listeners of nav-bar menu on-change and on-click

$(document).on('change', '#toggle-menu', (e) => {
    const val = e.target.value;
    console.log('val :>> ', val);
    if (val === 'Cart') {
        renderCart()
    }
    else if (val === 'Shop') {
        renderShop()
    }
    else if (val === 'logout') {
        localStorage.setItem('isLoggedIn', 0)
        localStorage.removeItem('user')
        toggleLoggedIn()
    }
    else if (val === 'login') {
        renderLogin('login')
    }
    else if (val === 'Main') {
        renderHome()
    }
})

$('#shop-nav').on('click', () => {
    renderShop();
});
$('#cart-nav').on('click', () => {
    renderCart();

});
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

navBar.appendTo(header);


// render of login page


const renderLogin = (fromWhere) => {
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


    if (fromWhere === 'signup') {
        register.appendTo(signForm)
        submitButton.appendTo(signForm);
    }
    else {
        login_card.appendTo(signForm);
        submitButton.appendTo(signForm);
    }


}

// listeners of switches between login and register

$(document).on('click', '#switch_login', function () {
    renderLogin()
});
$(document).on('click', '#switch_signup', function () {
    renderLogin('signup');
});
$(document).on('click', '#sub_login', function () {
});


// functionality of register and login submition and store in local storage

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




// render of home page

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


}




// footer of pages

const footer = $(`<footer id="footer"><img src="img/logo/Book1.jpg" alt="" width="140px" height="55px" ></footer>`
);
footer.appendTo(root);




// books data

const books = [

    {
        "id": "97810981038284",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 2,
        "yearOfPublish": "2017",
        "authorName": "Unknown Author",
        "price": "$58.90",
        "category": "programming",
        "description": "Comprehensive guide to Snowflake’s cloud data platform, covering data integration, architecture, and best practices for managing data at scale in a cloud environment."
    },
    {
        "id": "9781098104030",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 2,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.96",
        "category": "programming",
        "description": "Learn how to use Python for data wrangling, exploration, and visualization, with updated examples for analysis and manipulation of data using pandas and other libraries."
    }, {
        "id": "97810981062253",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 1,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99",
        "category": "programming",
        "description": "Explore the principles and practices for building reliable machine learning systems, covering validation, monitoring, and handling data drift to ensure sustainable performance."
    },
    {
        "id": "97810981118784",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 1,
        "yearOfPublish": "2005",
        "authorName": "Unknown Author",
        "price": "$60.99",
        "category": "programming",
        "description": "Learn to create interactive, web-based visualizations using Python’s data libraries and JavaScript, exploring tools like Plotly, D3.js, and other modern frameworks."
    },
    {
        "id": "9781098112844",
        "img": "https://itbook.store/img/books/9781098112844.png",
        "nameOfBook": "Learning Microsoft Power BI",
        "rate": 1,
        "yearOfPublish": "2029",
        "authorName": "Unknown Author",
        "price": "$40.97",
        "category": "programming",
        "description": "A guide to mastering Power BI for business analytics, covering data models, visualizations, and report generation to extract insights and drive decision-making."
    },
    {
        "id": "97810981131621",
        "img": "https://itbook.store/img/books/9781098113162.png",
        "nameOfBook": "C++ Software Design",
        "rate": 3,
        "yearOfPublish": "2014",
        "authorName": "Unknown Author",
        "price": "$48.99",
        "category": "theory",
        "description": "Focuses on designing software with C++, covering principles such as object-oriented design, testing, and using libraries to create maintainable and efficient applications."
    },
    {
        "id": "97810981167434",
        "img": "https://itbook.store/img/books/9781098116743.png",
        "nameOfBook": "Terraform: Up and Running, 3rd Edition",
        "rate": 4,
        "yearOfPublish": "2024",
        "authorName": "Unknown Author",
        "price": "$41.99",
        "category": "theory",
        "description": "Learn how to manage infrastructure as code with Terraform, covering automation, provisioning, and scaling cloud resources in a flexible and repeatable manner."
    },
    {
        "id": "9781098119515",
        "img": "https://itbook.store/img/books/9781098119515.png",
        "nameOfBook": "Flutter and Dart Cookbook",
        "rate": 2,
        "yearOfPublish": "2023",
        "authorName": "Unknown Author",
        "price": "$42.99",
        "category": "theory",
        "description": "A hands-on guide to developing mobile apps using Flutter and Dart, with practical recipes to address common problems and optimize app performance."
    },
    {
        "id": "9781098121228",
        "img": "https://itbook.store/img/books/9781098121228.png",
        "nameOfBook": "Python Data Science Handbook, 2nd Edition",
        "rate": 2,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$56.99",
        "category": "theory",
        "description": "A reference for Python’s data science libraries, including NumPy, pandas, Matplotlib, and Scikit-learn, with examples for data manipulation and machine learning tasks."
    },
    {
        "id": "9781098130923",
        "img": "https://itbook.store/img/books/9781098130923.png",
        "nameOfBook": "Raspberry Pi Cookbook, 4 th Edition",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$14.99",
        "category": "theory",
        "description": "Practical guide for creating innovative projects with Raspberry Pi, from basic setups to advanced applications like home automation, robotics, and media centers."
    },
    {
        "id": "9781642002263",
        "img": "https://itbook.store/img/books/9781642002263.png",
        "nameOfBook": "Azure Maps Using Blazor Succinctly",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$0.00",
        "category": "AI",
        "description": "Learn how to integrate Azure Maps with Blazor applications for location-based data visualization and mapping solutions, making use of real-time geospatial data."
    },
    {
        "id": "9781800562738",
        "img": "https://itbook.store/img/books/9781800562738.png",
        "nameOfBook": "Full Stack Quarkus and React",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "AI",
        "description": "A comprehensive guide to building full-stack applications using Quarkus for backend and React for frontend, providing practical solutions for web development."
    },
    {
        "id": "9781801077330",
        "img": "https://itbook.store/img/books/9781801077330.png",
        "nameOfBook": "Mathematics for Game Programming and Computer Graphics",
        "rate": 4,
        "yearOfPublish": "1998",
        "authorName": "Unknown Author",
        "price": "$49.99",
        "category": "AI",
        "description": "Understand essential math concepts for game development and graphics programming, including linear algebra, geometry, and calculus, to build efficient and realistic simulations."
    },
    {
        "id": "97818018109996",
        "img": "https://itbook.store/img/books/9781801810999.png",
        "nameOfBook": "Architecting and Building High-Speed SoCs",
        "rate": 3,
        "yearOfPublish": "2010",
        "authorName": "Unknown Author",
        "price": "$35.99",
        "category": "AI", "description": "Dive into system-on-chip (SoC) design, focusing on the architecture and strategies required to build high-performance, scalable, and efficient hardware for complex applications."
    },
    {
        "id": "9781801811132",
        "img": "https://itbook.store/img/books/9781801811132.png",
        "nameOfBook": "Web Development with Julia and Genie",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "AI",
        "description": "Learn web development with Julia and the Genie framework, combining high-performance computational capabilities with modern web application development practices and tools."
    },
    {
        "id": "97818018128560",
        "img": "https://itbook.store/img/books/9781801812856.png",
        "nameOfBook": "Java Memory Management",
        "rate": 5,
        "yearOfPublish": "2016",
        "authorName": "Unknown Author",
        "price": "$34.99",
        "category": "AI",
        "description": "A detailed guide to managing memory in Java applications, covering garbage collection, heap management, and performance optimization techniques for large-scale applications."
    },
    {
        "id": "9781803242002",
        "img": "https://itbook.store/img/books/9781803242002.png",
        "nameOfBook": "Test-Driven Development with C++",
        "rate": 4,
        "yearOfPublish": "2023",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "drama",
        "description": "Master test-driven development (TDD) with C++, focusing on writing clean, maintainable code with unit tests, debugging, and ensuring software reliability through continuous testing."
    },
    {
        "id": "9781804612569",
        "img": "https://itbook.store/img/books/9781804612569.png",
        "nameOfBook": "Software Test Design",
        "rate": 3,
        "yearOfPublish": "2024",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "drama",
        "description": "Explore best practices for designing effective software tests, including test case development, test-driven design, and methodologies for validating complex systems and ensuring quality."
    },
    {
        "id": "97818046170071",
        "img": "https://itbook.store/img/books/9781804617007.png",
        "nameOfBook": "Microservices with Go",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$29.99",
        "category": "drama",
        "description": "A practical guide to developing microservices architectures using Go, including the design, implementation, and deployment of scalable, distributed systems for modern cloud environments."
    },

    {
        "id": "97810981038285",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$58.90",
        "category": "drama",
        "description": "A collection of best practices and design principles for writing robust, efficient, and maintainable Java code, including tips on concurrency, performance, and security."
    },
    {
        "id": "97810981040304",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 3,
        "yearOfPublish": "2020",
        "authorName": "Unknown Author",
        "price": "$34.96",
        "category": "drama",
        "description": "A comprehensive guide to Python programming for beginners and experienced developers alike, covering syntax, data structures, libraries, and advanced concepts like decorators and generators."
    },
    {
        "id": "97810981062258",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99",
        "category": "drama",
        "description": "A fast-paced, hands-on introduction to Python programming, teaching foundational concepts and practical projects to build real-world applications and enhance programming skills."
    },
    {
        "id": "9781098111878",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$60.99",
        "category": "drama",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "97810981128448",
        "img": "https://itbook.store/img/books/9781098112844.png",
        "nameOfBook": "Learning Microsoft Power BI",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$40.97",
        "category": "drama",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "9781098113162",
        "img": "https://itbook.store/img/books/9781098113162.png",
        "nameOfBook": "C++ Software Design",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$48.99",
        "category": "programming",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "97810981167430",
        "img": "https://itbook.store/img/books/9781098116743.png",
        "nameOfBook": "Terraform: Up and Running, 3rd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$41.99",
        "category": "drama",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "97810981195150",
        "img": "https://itbook.store/img/books/9781098119515.png",
        "nameOfBook": "Flutter and Dart Cookbook",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$42.99",
        "category": "documentary",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "9781098121228",
        "img": "https://itbook.store/img/books/9781098121228.png",
        "nameOfBook": "Python Data Science Handbook, 2nd Edition",
        "rate": 4,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$56.99",
        "category": "documentary",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "9781098130923",
        "img": "https://itbook.store/img/books/9781098130923.png",
        "nameOfBook": "Raspberry Pi Cookbook, 4th Edition",
        "rate": 3,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$14.99",
        "category": "documentary",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "9781642002263",
        "img": "https://itbook.store/img/books/9781642002263.png",
        "nameOfBook": "Azure Maps Using Blazor Succinctly",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$0.00",
        "category": "documentary",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "97818005627380",
        "img": "https://itbook.store/img/books/9781800562738.png",
        "nameOfBook": "Full Stack Quarkus and React",
        "rate": 5,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "documentary",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "97818010773304",
        "img": "https://itbook.store/img/books/9781801077330.png",
        "nameOfBook": "Mathematics for Game Programming and Computer Graphics",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$49.99",
        "category": "documentary",
        "description": "In-depth guide to Java memory management, focusing on garbage collection, heap management, and optimizations for high-performance applications."
    },
    {
        "id": "97818018109991",
        "img": "https://itbook.store/img/books/9781801810999.png",
        "nameOfBook": "Architecting and Building High-Speed SoCs",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$35.99",
        "category": "documentary",
        "description": "In-depth guide to Java memory management, focusing on garbage collection, heap management, and optimizations for high-performance applications."
    },
    {
        "id": "9781801811132",
        "img": "https://itbook.store/img/books/9781801811132.png",
        "nameOfBook": "Web Development with Julia and Genie",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$39.99",
        "category": "documentary",
        "description": "In-depth guide to Java memory management, focusing on garbage collection, heap management, and optimizations for high-performance applications."
    },
    {
        "id": "9781801812856",
        "img": "https://itbook.store/img/books/9781801812856.png",
        "nameOfBook": "Java Memory Management",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.99",
        "category": "documentary",
        "description": "In-depth guide to Java memory management, focusing on garbage collection, heap management, and optimizations for high-performance applications."
    },
    {
        "id": "9781803242002",
        "img": "https://itbook.store/img/books/9781803242002.png",
        "nameOfBook": "Test-Driven Development with C++",
        "rate": 4,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "documentary",
        "description": "Best practices for software test design, including the creation of test cases, test plans, and ensuring the quality of complex software systems."
    },
    {
        "id": "9781804612569",
        "img": "https://itbook.store/img/books/9781804612569.png",
        "nameOfBook": "Software Test Design",
        "rate": 3,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$44.99",
        "category": "documentary",
        "description": "Best practices for software test design, including the creation of test cases, test plans, and ensuring the quality of complex software systems."
    },
    {
        "id": "9781804617007",
        "img": "https://itbook.store/img/books/9781804617007.png",
        "nameOfBook": "Microservices with Go",
        "rate": 5,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$29.99",
        "category": "documentary",
        "description": "Best practices for software test design, including the creation of test cases, test plans, and ensuring the quality of complex software systems."
    },

    {
        "id": "9781098103828",
        "img": "https://itbook.store/img/books/9781098103828.png",
        "nameOfBook": "Snowflake: The Definitive Guide",
        "rate": 2,
        "yearOfPublish": "2017",
        "authorName": "Unknown Author",
        "price": "$58.90",
        "category": "documentary",
        "description": "Best practices for software test design, including the creation of test cases, test plans, and ensuring the quality of complex software systems."
    },
    {
        "id": "97810981040307",
        "img": "https://itbook.store/img/books/9781098104030.png",
        "nameOfBook": "Python for Data Analysis, 3rd Edition",
        "rate": 2,
        "yearOfPublish": "2022",
        "authorName": "Unknown Author",
        "price": "$34.96",
        "category": "drama",
        "description": "Best practices for software test design, including the creation of test cases, test plans, and ensuring the quality of complex software systems."
    },
    {
        "id": "97810981062251",
        "img": "https://itbook.store/img/books/9781098106225.png",
        "nameOfBook": "Reliable Machine Learning",
        "rate": 1,
        "yearOfPublish": "2021",
        "authorName": "Unknown Author",
        "price": "$43.99",
        "category": "documentary",
        "description": "Build scalable microservices with Go, using tools and best practices for designing, deploying, and managing distributed systems."
    },
    {
        "id": "97810981118789",
        "img": "https://itbook.store/img/books/9781098111878.png",
        "nameOfBook": "Data Visualization with Python and JavaScript, 2nd Edition",
        "rate": 1,
        "yearOfPublish": "2005",
        "authorName": "Unknown Author",
        "price": "$60.99",
        "category": "drama",
        "description": "Build scalable microservices with Go, using tools and best practices for designing, deploying, and managing distributed systems."
    },
    {
        "id": "9780134685991",
        "img": "https://itbook.store/img/books/9780134685991.png",
        "nameOfBook": "Effective Java, 3rd Edition",
        "rate": 5,
        "yearOfPublish": "2018",
        "authorName": "Joshua Bloch",
        "price": "$45.00",
        "category": "programming",
        "description": "Build scalable microservices with Go, using tools and best practices for designing, deploying, and managing distributed systems."
    },
    {
        "id": "9781491950357",
        "img": "https://itbook.store/img/books/9781491950357.png",
        "nameOfBook": "Learning Python, 5th Edition",
        "rate": 5,
        "yearOfPublish": "2013",
        "authorName": "Mark Lutz",
        "price": "$59.95",
        "category": "programming",
        "description": "Build scalable microservices with Go, using tools and best practices for designing, deploying, and managing distributed systems."
    },
    {
        "id": "9781492078005",
        "img": "https://itbook.store/img/books/9781492078005.png",
        "nameOfBook": "Python Crash Course, 2nd Edition",
        "rate": 4,
        "yearOfPublish": "2019",
        "authorName": "Eric Matthes",
        "price": "$39.95",
        "category": "programming",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "97814919544612",
        "img": "https://itbook.store/img/books/9781491954461.png",
        "nameOfBook": "Fluent Python",
        "rate": 5,
        "yearOfPublish": "2015",
        "authorName": "Luciano Ramalho",
        "price": "$49.99",
        "category": "programming",
        "description": "Dive deep into Python’s advanced features, exploring idiomatic programming techniques, data structures, concurrency, and functional programming to write efficient and elegant Python code."
    },
    {
        "id": "9780134853987",
        "img": "https://itbook.store/img/books/9781789951288.png",
        "nameOfBook": "Introduction to the Theory of Computation",
        "rate": 4,
        "yearOfPublish": "2019",
        "authorName": "Michael Sipser",
        "price": "$59.99",
        "category": "theory",
        "description": "Explore the foundational principles of computation theory, including automata, formal languages, computational complexity, and Turing machines, essential for understanding algorithms and computing limits."
    },

    {
        "id": "97814919502961",
        "img": "https://itbook.store/img/books/9781491950296.png",
        "nameOfBook": "The Pragmatic Programmer, 20th Anniversary Edition",
        "rate": 5,
        "yearOfPublish": "2019",
        "authorName": "Andrew Hunt, David Thomas",
        "price": "$49.99",
        "category": "programming",
        "description": "Timeless advice on becoming a better software developer, focusing on code craftsmanship, problem-solving, and agile practices for writing clean, maintainable, and high-quality software."
    },

    {
        "id": "9781491954461",
        "img": "https://itbook.store/img/books/9781491954461.png",
        "nameOfBook": "Fluent Python",
        "rate": 5,
        "yearOfPublish": "2015",
        "authorName": "Luciano Ramalho",
        "price": "$49.99",
        "category": "programming",
        "description": "Dive deep into Python’s advanced features, exploring idiomatic programming techniques, data structures, concurrency, and functional programming to write efficient and elegant Python code."
    },
    {
        "id": "97801348539875",
        "img": "https://itbook.store/img/books/9781789951288.png",
        "nameOfBook": "Introduction to the Theory of Computation",
        "rate": 4,
        "yearOfPublish": "2019",
        "authorName": "Michael Sipser",
        "price": "$59.99",
        "category": "theory",
        "description": "Explore the foundational principles of computation theory, including automata, formal languages, computational complexity, and Turing machines, essential for understanding algorithms and computing limits."
    },

    {
        "id": "9781491950296",
        "img": "https://itbook.store/img/books/9781491950296.png",
        "nameOfBook": "The Pragmatic Programmer, 20th Anniversary Edition",
        "rate": 5,
        "yearOfPublish": "2019",
        "authorName": "Andrew Hunt, David Thomas",
        "price": "$49.99",
        "category": "programming",
        "description": "Timeless advice on becoming a better software developer, focusing on code craftsmanship, problem-solving, and agile practices for writing clean, maintainable, and high-quality software."
    },
    {
        "id": "9780134757590",
        "img": "https://itbook.store/img/books/9781098109035.png",
        "nameOfBook": "Artificial Intelligence: A Modern Approach",
        "rate": 5,
        "yearOfPublish": "2020",
        "authorName": "Stuart Russell, Peter Norvig",
        "price": "$79.99",
        "category": "AI",
        "description": "Learn web development with the Julia language and the Genie framework for high-performance backend services and data-driven applications."
    },
    {
        "id": "97814919502968",
        "img": "https://itbook.store/img/books/9781491950296.png",
        "nameOfBook": "The Pragmatic Programmer, 20th Anniversary Edition",
        "rate": 5,
        "yearOfPublish": "2019",
        "authorName": "Andrew Hunt, David Thomas",
        "price": "$49.99",
        "category": "programming",
        "description": "Timeless advice on becoming a better software developer, focusing on code craftsmanship, problem-solving, and agile practices for writing clean, maintainable, and high-quality software."
    }


]




// handle filtration to know what to send to render shop

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

// listener of filtration button

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




// render of shop page

const renderShop = (filtration = books) => {
    $(document).off("scroll");
    hideEveryThing();
    shop.removeClass("hidden");
    wrap.empty();


    $(document).on("click", ".book_card", function () {
        const card = $(this);
        const isFlipped = card.hasClass("flipped");


        if (isFlipped) {

            card.find(".back").fadeOut(200, () => {
                card.removeClass("flipped");
                card.find(".front").fadeIn(200);
            });
        } else {

            card.find(".front").fadeOut(200, () => {
                card.addClass("flipped");
                card.find(".back").fadeIn(200);
            });
        }
    });


    filtration.filter((item) => {
        if (shopSearch.val().length === 0) {
            return true;
        } else {
            return item.nameOfBook
                .toLowerCase()
                .includes(shopSearch.val().toLowerCase());
        }
    })
        .forEach((element, indx) => {

            // structure of card of book

            const card = $(`
                <div class="book_card aos-item" data-aos="fade-up"
                     data-aos-duration="1000" data-id=${indx + 1}>
                    <!-- Front of the card -->
                    <div class="front">
                        <img class="mods" src="${element.img}" alt="${element.nameOfBook}" />
                        <div class="rating">${"★".repeat(element.rate)}${"☆".repeat(
                5 - element.rate
            )}</div>
                        <div id="book_name">
                            <h5>${element.nameOfBook}</h5>
                        </div>
                        <div class="book_info">
                            <h5>${element.authorName}</h5>
                            <h5>${element.yearOfPublish}</h5>
                        </div>
                        <div class="book_info">
                            <button id=${element.id} class="addToCartBtn">Add To Cart <i class="bx bx-cart-add"></i></button>
                            <h4>${element.price}</h4>
                        </div>
                    </div>
                    <!-- Back of the card -->
                    <div class="back">
                        <div class="description">
                            <h5>About the Book</h5>
                            <p>${element.description}</p>
                        </div>
                        <!-- Retain the "Add to Cart" button on the back side -->
                        <div class="book_info">
                            <button id=${element.id} class="addToCartBtn">Add To Cart <i class="bx bx-cart-add"></i></button>
                        </div>
                    </div>
                </div>
            `);

            card.appendTo(wrap);
        });

    wrap.appendTo(shop);
};



shopSearch.on('input', () => {

    renderShop()
});



// listener of add to cart button

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

// listener of signout button

$(document).on('click', '#signout', (e) => {
    localStorage.setItem('isLoggedIn', 0)
    localStorage.removeItem('user')
    toggleLoggedIn()

});

// render of cart page

const renderCart = () => {
    let totalCartPrice = 0
    paymentFooter.empty()
    wrapCart.empty();
    hideEveryThing();
    cart.removeClass('hidden');

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn == 1) {
        const userID = JSON.parse(localStorage.getItem('user'))
        const carts = JSON.parse(localStorage.getItem('cart'));
        const basket = carts.find(item => item.user_id === userID.id)
        const filtered = books.filter((item) => {
            if (basket.book_ids.includes(item.id)) {
                totalCartPrice += +item.price.replace(/[^0-9.,]+/, '')

                return true
            }
        })



        const checkout = $(`<div class="checkoutPrice" >Price: ${totalCartPrice}$</div>
        <div><button id="checkoutBtn">CheckOut (${filtered.length})</button></div>`);
        if (!basket || basket.book_ids.length === 0) {
            alert('cart is empty');
            renderShop();
        }

        filtered.forEach((element, indx) => {
            const card = $(`
                    <div class="book_card book_cart_cart_item aos-item"  data-aos="fade-down"
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


        wrapCart.appendTo(cart);

        $(document).on('click', '#checkoutBtn', () => {
            basket.book_ids = [];
            localStorage.setItem('cart', JSON.stringify(carts));
            alert('thank you for your purchase payment successful your book/s will arrive soon')
            window.location.reload();
        })

        checkout.appendTo(paymentFooter);
    }
    else {
        alert("login first")
        renderHome()
    }





};

// listener of remove from cart button

$(document).on('click', '.removeFromCartBtn', (e) => {
    const bookId = e.target.id;
    const userID = JSON.parse(localStorage.getItem('user')).id
    const carts = JSON.parse(localStorage.getItem('cart'))
    const cart = carts.find(item => item.user_id === userID)
    const indx = cart.book_ids.indexOf(bookId);
    cart.book_ids.splice(indx, 1)
    localStorage.setItem('cart', JSON.stringify(carts))
    renderCart()
})


// initialization of local storage

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


// from home search to shop 

$(document).on('click', '#submit_search', (e) => {
    e.preventDefault()
    $()
    renderShop()
})


// invoke on load for home and storage

initLocalStorage();
renderHome();




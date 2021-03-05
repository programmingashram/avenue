header = () => {
    var body = document.getElementById('body');
    var header = document.createElement('header');

    body.appendChild(header);
    header.innerHTML += '<div class="container"><div class="row"></div></div>';
    var header_jason = [{
        logo: 'Avenue'

    }, {
        menu01: 'Home',
        menu02: 'About',
        menu03: 'Service',
        menu04: 'Projects',
        menu05: 'Contact Us'
    }]
    document.querySelector('header>.container>.row').innerHTML += `
       <div class="col-md-6">
           <div class="my_logo">
               <h1 class="logo"><span>${header_jason[0].logo}</span> Design</h1>
           </div>
       </div>
       <!--//col-md-6-->
       <div class="col-md-6">
          <div class="my_navigation ">
              <ul class="navbar-nav nav">
                 <li><a href="">${header_jason[1].menu01}</a></li>
                 <li><a href="">${header_jason[1].menu02}</a></li>
                 <li><a href="">${header_jason[1].menu03}</a></li>
                 <li><a href="">${header_jason[1].menu04}</a></li>
                 <li><a href="">${header_jason[1].menu05}</a></li>
              </ul>
          </div>
       </div>
       <!--//col-md-6-->
          
    `;


}
header();
document.getElementsByClassName('navbar')[0].innerHTML=`
<div class="container-fluid ">
        
<a class="navbar-brand " href="index.html">
    <img  src="images/logo.jpg" alt="" width="150" height="30">
</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="about.html">About Us</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="products.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Products
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="plain_batts.html">Plan Batts</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="profile_setter.html">Profile Setters</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="extruded_batts.html">Extruded Batts</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="cordierite_kiln_furniture.html">Cordierite Kiln Furniture</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="kiln_furniture.html">Kiln Furniture</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="products.html">All Products ...</a></li>
    
      </ul>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="certificates.html">Certificates</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="awards.html">Awards</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="contact.html">Contacts</a>
  </li>
  
</ul>

</div>
</div>
`
document.getElementsByTagName('header')[0].innerHTML=`
<div id="logo">
            <img onclick="toHome()" src="images/logo.jpg" alt="Company Logo">
        </div>
        <nav class="nav">
            <div id="infobar">
                <div class="info_items">
                    <div class="mail">
                        <i class="fa fa-envelope fa-lg"></i> &nbsp; &nbsp;
                        <div class="content">
                            <div style="font-size: 0.8rem; color: rgb(56, 51, 51);">Send us an email</div>
                            <div>demo@gmail.com</div>
                        </div>
                    </div>
                    <div class="phone">
                        <i class="fa fa-phone fa-lg"></i> &nbsp; &nbsp;
                        <div class="content">
                            <div style="font-size: 0.8rem; color: rgb(56, 51, 51);">Call Us</div>
                            <div>+91-8889787658</div>
                        </div>
                    </div>
                    <div class="social">
                        <i class="fa-lg fa fa-facebook"></i>
                        <i class="fa-lg fa fa-twitter"></i>
                        <i class="fa-lg fa fa-linkedin"></i>
                        <i class="fa-lg fa fa-instagram"></i>
                        <i class="fa-lg fa fa-youtube"></i>


                    </div>
                </div>
            </div>
            <div id="navbar">
                <div class="skew_back"></div>
                <div id="nav_links">
                    <div class="links"><a href="index.html">Home</a></div>
                    <div class="links"><a href="about.html">About Us</a></div>
                    <div class="links"><a href="products.html">Products</a>
                        <div id="dropdown_1">
                            <div class="links_1"><a href="products.html#plain_batts">PLAIN BATTS</a>
                                <div id="dropdown_2">
                                    <div class="links_2"><a href="plain_batts.html#pressed_batts">PRESSED BATTS</a></div>
                                    <div class="links_2"><a href="plain_batts.html#refractory_batts_1">REFACTORY BATTS</a></div>
                                    <div class="links_2"><a href="plain_batts.html#cordierite_batts">CORDIERITE BATTS</a></div>
                                    <div class="links_2"><a href="plain_batts.html#extruded_batts_with_interlock">EXTRUDED BATTS WITH INTERLOCK</a></div>
                                    <div class="links_2"><a href="plain_batts.html#interlock_extruded_batts">INTERLOCK EXTRUDED BATTS</a></div>
                                    <div class="links_2"><a href="plain_batts.html#extruded_batts">EXTRUDED BATTS</a></div>
                                    <div class="links_2"><a href="plain_batts.html#">More Products..</a></div>
                                    <!-- <div class="links_2"><a href="">CERAMICS BATTS</a></div>
                                    <div class="links_2"><a href="">WHITE SAGGAR TRAY</a></div>
                                    <div class="links_2"><a href="">SAGGAR TRAY WITH COVER</a></div>
                                    <div class="links_2"><a href="">SAGGAR TRAY</a></div> -->

                                </div>
                            </div>
                            <div class="links_1"><a href="products.html#profile_setter">PROFILE SETTERS</a>
                                <div id="dropdown_2">
                                    <div class="links_2"><a href="profile_setter.html#refractory_material">REFACTORY MATERIAL</a></div>
                                    <div class="links_2"><a href="profile_setter.html#refractory_setters">REFACTORY SETTERS</a></div>
                                </div>
                            </div>
                            <div class="links_1"><a href="products.html#extruded_batts">EXTRUDED BATTS</a>
                                <div id="dropdown_2">
                                    <div class="links_2"><a href="extruded_batts.html#saggar_tray_2">SAGGAR TRAY</a></div>
                                    <div class="links_2"><a href="extruded_batts.html#kiln_pillars">KILN PILLARS</a></div>
                                    <div class="links_2"><a href="extruded_batts.html#refractory_collar">REFACTORY COLLAR</a></div>
                                    <div class="links_2"><a href="extruded_batts.html#saggar_trays">OPEN SAGGAR TRAYS</a></div>
                                    <div class="links_2"><a href="extruded_batts.html#ceramic_saggar_tray">CERAMICS SAGGAR TRAYS</a></div>
                                    <div class="links_2"><a href="extruded_batts.html#saggar_tray_with_cover">SAGGAR TRAY WITH COVER</a></div>
                                    <div class="links_2"><a href="extruded_batts.html#">More Products...</a></div>

                                </div>
                            </div>
                            <div class="links_1"><a href="products.html#cordierite_kiln_furniture">CORDIERITE KILN FURNITURE</a>
                            <div id="dropdown_2">
                                    <div class="links_2"><a href="cordierite_kiln_furniture.html#mullite_cordierite_kiln_furniture">MULLITE CORDIERITE KILN FURNITURE</a></div>
                                    <div class="links_2"><a href="cordierite_kiln_furniture.html#cordierite_kiln_furniture">CORDIERITE KILN FURNITURE</a></div>
                                    <div class="links_2"><a href="cordierite_kiln_furniture.html#cordierite_kiln_furniture_products">CORDIERITE KILN FURNITURE PRODUCTS</a></div>

                                </div>
                            </div>
                            <div class="links_1"><a href="products.html#kiln_furniture">KILN FURNITURE</a>
                            <!-- <div id="dropdown_2">
                                    
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="links"><a href="certificates.html">Certificates</a></div>
                    <div class="links"><a href="awards.html">Awards</a></div>
                    <div class="links"><a href="contact.html">Contacts</a></div>

                </div>
            </div>
        </nav>
`;
document.getElementsByTagName('footer')[0].innerHTML=`
<div class="footer_one">
            <div class="q_links">
                <h3>
                    Quick Links
                </h3>
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="products.html">Products</a>
                <a href="certificates.html">Certificates</a>
                <a href="awards.html">Awards</a>
                <a href="contact.html">Contact</a>
                <div class="footerline"></div>
            </div>
            
            <div class="q_links">
                <h3>
                    Our Products
                </h3>
                <a href="plain_batts.html">PLAIN BATTS</a>
                <a href="profile_setter.html">PROFILE SETTERS</a>
                <a href="extruded_batts.html">EXTRUDED BATTS</a>
                <a href="cordierite_kiln_furniture.html">CORDIERITE KILN FURNITURE</a>
                <a href="kiln_furniture.html">KILN FURNITURE</a>
                <div class="footerline"></div>
            
            </div>
            
            <div class="q_contact">
                <h3>
                    Contact Us
                </h3>
                <div class="q_contact_link">
                    <i class="fa fa-home"></i>
                    <p>Plot No 18, Vaghasiya Industrial Estate, Vaghasiya Village, Wankaner Taluka, Morbi - 363622, Gujarat, India</p>
                </div>

                <div class="q_contact_link">
                    <i class="fa fa-phone"></i>
                    <p>+91-9999999999</p>
                </div>
                <div class="q_contact_link">
                    <i class="fa fa-envelope"></i>
                    <a href="" style="text-decoration: underline; cursor: pointer;">demo@gmail.com</a>
                </div>
                <div class="footerline"></div>
            
            </div>

            <div class="q_follow_us">
                <h3>
                    Follow Us
                </h3>
                <div class="q_follow_us_link">
                    <i class="fa fa-facebook"></i>
                    <p>facebook</p>
                </div>

                <div class="q_follow_us_link">
                    <i class="fa fa-instagram"></i>
                    <p>Instagram</p>
                </div>
                <div class="q_follow_us_link">
                    <i class="fa fa-youtube"></i>
                    <p>YouTube</p>
                </div>
                <div class="q_follow_us_link">
                    <i class="fa fa-linkedin"></i>
                    <p>Linkedln</p>
                </div>
                <div class="footerline"></div>
            
            </div>
            </div>
            <div class="footer_two">
            <div class="footer_content">
                All Rights Reserved. Rotomech Industries (Terms of Use)<br>
                                <a href="https://adjointindia.com/" style="color: inherit; cursor: pointer;">Powered by AdJoint India</a>
            </div>
            <div class="footer_logo">
                <img style="cursor:pointer;cursor:hand" src="https://seal.starfieldtech.com/images/3/en/siteseal_sf_3_h_l_m.gif"  alt="SSL site seal - click to verify">
            </div>
            </div>
`

function toHome()
{
    var a=document.createElement('a');
    a.href='index.html';
    a.click();
}
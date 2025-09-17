// create a Navbar component
function Navbar() {

  return (
    <>
      <div class="navbar">
        <div class="navbar-s1">
          <h1 class="navbar__s1__title">Udemy</h1>

        </div>

        <div class="navbar-s2">
          <i class="fa-solid fa-magnifying-glass" style={{ "color": "#0c0b0c" }}></i>
          <input placeholder="search for enything here. tech,art,bussiness,cource..."></input>
        </div>

        <div class="navbar-s3">
          <p>Courses</p>
          <p>My learning</p>
          <div class="my-learning">
            <p>My learning</p>
            <div class="my-learning__popup">
              <p> You did not purchase anything yet</p>
            </div>
          </div>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-user"></i>
          <div classname="navbar-s4">
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>

      </div>
    </>
  )

}


export default Navbar;
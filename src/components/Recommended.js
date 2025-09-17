import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"


//Recommended courses components

function Recommended() {

  return (

    <div class="recommended">
      <h1 class="recommended__title">Recommended for you</h1>
      <p class="recommended__subtitle">Pick the best fit</p>
      <div class="recommended__container">

        <div class="course__card">
          <img src={one} alt="one"></img>
          <h3>2024 phython data visaulization masterclass</h3>
          <p>Col steele</p>
          <p>4.8⭐️⭐️⭐️⭐️</p>
          <p>599 <del>1599</del></p>

        </div>
        <div class="course__card">
          <img src={two} alt="two"></img>
          <h3>Web Develomment bootcamp 2023</h3>
          <p>Col steele</p>
          <p>4.5⭐️⭐️⭐️⭐️</p>
          <p>499<del>1499</del></p>

        </div>
        <div class="course__card">
          <img src={three} alt="three"></img>
          <h3>Master UI & UX Design with figma 2022</h3>
          <p>Col steele</p>
          <p>3.8⭐️⭐️⭐️</p>
          <p>799 <del>1799</del></p>

        </div>
        <div class="course__card">
          <img src={four} alt="four"></img>
          <h3>Basic to Advanced programming with EMC</h3>
          <p>Col steele</p>
          <p>4.9⭐️⭐️⭐️⭐️⭐️</p>
          <p>1599 <del>15999</del></p>

        </div>

      </div>
    </div>

  )
}

export default Recommended;
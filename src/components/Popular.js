import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"
import five from "../assets/images/c5.jpg"
import six from "../assets/images/c6.jpg"



//Popular section components

function Popular() {
  return (
    <div class="popular">
      <h1 class="popular__title">Most popular</h1>
      <p class="popular__subtitle">Pick the best fit</p>
      <div class="popular__container">
        <div class="course__card">
          <img src={one} alt="one"></img>
          <h3>2024 phython data visaulization masterclass</h3>
          <p>Col steele</p>
          <p>2.8⭐️⭐️</p>
          <p>799 <del>1799</del></p>

        </div>
        <div class="course__card">
          <img src={six} alt="six"></img>
          <h3>Web Develomment bootcamp 2023</h3>
          <p>Col steele</p>
          <p>3.8⭐️⭐️⭐️</p>
          <p>999<del>1999</del></p>

        </div>
        <div class="course__card">
          <img src={four} alt="four"></img>
          <h3>Master UI & UX Design with figma 2022</h3>
          <p>Col steele</p>
          <p>4.8⭐️⭐️⭐️⭐️</p>
          <p>799 <del>1799</del></p>

        </div>
        <div class="course__card">
          <img src={five} alt="five"></img>
          <h3>Basic to Advanced programming with EMC</h3>
          <p>Col steele</p>
          <p>4.9⭐️⭐️⭐️⭐️⭐️</p>
          <p>2599 <del>15999</del></p>

        </div>
        <div class="course__card">
          <img src={two} alt="two"></img>
          <h3>2024 phython data visualization masterclass</h3>
          <p>Col steele</p>
          <p>4.8⭐️⭐️⭐️⭐️</p>
          <p>5899 <del>15599</del></p>

        </div>
        <div class="course__card">
          <img src={three} alt="three"></img>
          <h3>Web Develomment bootcamp 2023</h3>
          <p>Col steele</p>
          <p>2.5⭐️⭐️</p>
          <p>299<del>1299</del></p>

        </div>
        <div class="course__card">
          <img src={four} alt="four"></img>
          <h3>Master UI & UX Design with figma 2022</h3>
          <p>Col steele</p>
          <p>3.8⭐️⭐️⭐️</p>
          <p>799 <del>1799</del></p>
 
        </div>
        <div class="course__card">
          <img src={five} alt="five"></img>
          <h3>Basic to Advanced programming with EMC</h3>
          <p>Col steele</p>
          <p>4.5⭐️⭐️⭐️⭐️⭐️</p>
          <p>1699 <del>16999</del></p>

        </div>

      </div>
    </div>

  )
}

export default Popular;
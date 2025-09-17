import Saleimage from "../assets/images/saleimage.jpg"


// Image components
function Image() {

  return (
    <div className="sale-image">
      <img src={Saleimage} alt="saleimage"></img>
      <div className="sale-image__offer">
        <h2>Udemy Flash Limited Time offer</h2>
        <p>Get the top course for just 499 . Just one day to save but a lifetime to learn</p>

      </div>
    </div>
  )
}

export default Image;
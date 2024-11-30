
import style from "./Thankyou.module.css"
import Lottie from "lottie-react";

import animation from './Animation - 1715757227914.json';
const Thankyou = () => {
    return <>
       
    <div className={`₹{style.jumbotron} ₹{style.divcenter}`}>
    <h1 >Thank You!</h1>
        <h5 className="">Your order has been placed successfully.</h5>
        <p className="lead"><strong>Please check your email</strong> for further information of your order you have placed.</p>
        <Lottie animation={animation} loop={true}  />
        <p >
          Having issues regarding your order? <a className={style.link} href="/Contact.jsx">Contact us</a>
        </p>
        
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    
    </>
}
export default Thankyou
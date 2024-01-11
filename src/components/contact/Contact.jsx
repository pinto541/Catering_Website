import React from "react";
import "./Contact.css";
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import twitter from "../../assets/icons/footer/twitter.svg";
import youtube from "../../assets/icons/footer/youtube.svg";

const Contact = () => {
  return (
    <div>
      <div className="c-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zs-PdL218H74JIzrozL_yEvKk5PCNVYFkQ&usqp=CAU" alt="services" />

        {/* <div class="centered-text">SERVICES</div>*/}

        <h1>Get In Touch</h1>

        <h5>Nulla consequat massa quis enim. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Nulla consequat massa quis enim. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</h5>

        <div className="follow">
          <h2>Follow Us</h2>
          <br />

          <div className="c-social">
            <button>
              <img src={facebook} alt="facebook" />
            </button>

            <button>
              <img src={instagram} alt="instagram" />
            </button>
            <button>
              <img src={twitter} alt="twitter" />
            </button>
            <button>
              <img src={youtube} alt="youtube" />
            </button>
          </div>
          <br />
          <br />
          <hr style={{ width: "70%" }} />
        </div>

        <div className="c-contact">
          <div className="cc-container">phone</div>
          <div className="cc-container">phone</div>
          <div className="cc-container">phone</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
          
        <h1>Send Us a Message</h1>

        <div class="form-container">
          <form action="your-google-form-link" method="post">
            <div className="c-name">
            
            <input  style={{fontSize:'20px'}} type="text" id="name" name="name" placeholder="Name"required />
            
           <div style={{padding:'15px'}}></div>
            
            <input style={{fontSize:'20px'}} type="email" id="gmail" name="gmail" placeholder="Gmail" required />
            

            </div>
            <br/>
            <br/>
             <div className="c-subject">
            
            <input style={{fontSize:'20px'}} type="text" id="subject" name="subject" placeholder="Subject"required />
            </div>

            <br/><br/>
            <div className="c-message">
            <textarea style={{fontSize:'20px'}} id="message" name="message" rows="4" cols="50" placeholder="Message" required></textarea>
            </div>
             <br/>
             <div className="c-submit">
            <button type="submit" value="Submit" >Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

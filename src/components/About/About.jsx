import React from 'react'
import './About.css'




const About = () => {
  return (
    <div>
        <div className='a-container'>
     <div className='a-left'>
        <img style={{paddingLeft:'50px',height:'550px'}}  src='https://blanquette.qodeinteractive.com/wp-content/uploads/2021/09/h1-img-1-373x584.jpg' />
         <img style={{marginLeft:'300px',marginTop:'-480px',width:'300px',height:'360px',alignSelf:"center",display:'flex'}} src='https://blanquette.qodeinteractive.com/wp-content/uploads/2021/09/About-us-stacked-img-002.jpg'/>

     </div>

     <div className='a-right'>
         <h1>GET TO KNOW</h1>
         <h2>THE FINEST <br/>RECIPIES FOR <br/>THOSE SPECIAL<br/> MOMENTS IN<br/> YOUR LIFE<br/> TO CELEBRATE</h2>

         <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidu dui ut ornare. Sodales neque sodales ut etiam.</h5>
     </div>


      </div>

    </div>
  )
}

export default About
import React,{useState} from 'react'

export default function About(props) {
    
   


let darkmode={
    color:'white',
    backgroundColor:'black'
   }
   let lightmode={
    color:'black',
    backgroundColor:'white'
   }
  
   
  return (
    <div className='para' style={props.mode==='light'?lightmode:darkmode}>
      <p>Welcome to our text editor website! We offer a powerful and intuitive online text editor that makes it easy to create, edit and share documents from anywhere. Our platform is designed for both personal and professional use, and offers a wide range of features to help you be more productive. You can access your documents from any device, collaborate with others in real-time, and even use our built-in templates to save time and improve your workflow. With our user-friendly interface and seamless integration with other platforms, our text editor is the perfect solution for all your document needs. Start editing today and see the difference for yourself! <br /> <br /> <h1>About the developer</h1> Welcome to the website developed by Ankit Kumar! I am a passionate developer with a strong background in computer science and a proven track record of delivering innovative solutions. I have a strong understanding of various programming languages and technologies, and have experience working on projects of all sizes. My goal is to provide my clients with high-quality, user-friendly websites that meet their specific needs and exceed their expectations. I pride myself on my ability to deliver projects on time and within budget, and I am always looking for new challenges and opportunities to grow as a developer. If you have any questions or would like to discuss a project with me, please don't hesitate to contact me. <br /><br />
      <h1>contact details:-</h1><br />
      Ph.no.-8750848132 <br />
      email-ankitkumar3971@gmail.com</p>
    </div>

  )
}

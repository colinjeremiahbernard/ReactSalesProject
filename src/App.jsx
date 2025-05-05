import React from "react";

import { Navbar } from "./Components/Navbar/Navbar";
import { Article } from "./Components/Article/Article";
import article1Img from "./Assets/Images/article1.png";
import article2Img from "./Assets/Images/article2.png";
import article3Img from "./Assets/Images/article3.png";
import article4Img from "./Assets/Images/article4.png";

import { Counter } from './Components/Counter/Counter.jsx';

export class App extends React.Component {
   
 render() {
   return (
  <>
      <Navbar/>
      <Counter/>

      <section id="articles">
      <Article title="Dashboard Design"
               provider="NASA"
               description="Vibrant React site telling 
               about space legacy."
               thumbnail={article1Img}/>
      <Article title="Portraits"
               provider="Space News"
               description="Exuberant Paintings"
               thumbnail={article2Img}
       />
      <Article title="SpiralShell"
               provider="NASA"
               description="Lorem ipsum dolor sit amet consectetur <br> adipisicing elit.
      Harum officiis nobis necessitatibus <br> quaerat aspernatur ducimus
      facilis!"
      thumbnail={article3Img}
      />
      
      <Article title="Butterfly"
               provider="Nasa"
               description="Lorem ipsum dolor sit amet consectetur <br> adipisicing elit.
        Voluptatum tempora deleniti <br> cumque laboriosam error facilis"
        thumbnail={article4Img}
      />
      </section>
   </>
   );
 }
}



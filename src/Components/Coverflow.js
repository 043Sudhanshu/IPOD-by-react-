import React from 'react';
import "../Css/Display.css";

var All=(props)=>{


const {level,name,count}=props;   
    return (

      /* this component is for the menu items which shows name and image only after clicking on them*/

     <div style={{background:"black",top:8}} id="display" className="display_all" >
      
      {/* for 0th level*/}
      {level===0?
      [count===1?<img style={{height:100+"%"}} alt="coverflow" src="https://images.unsplash.com/photo-1528484701073-2b22dc76649e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"/>:
      [count===3?<img style={{height:100+"%"}} alt="Games" src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>:
      [count===4?<img style={{height:100+"%"}} alt="Settings" src="https://images.hdqwalls.com/wallpapers/dark-minimalist-blur-4k-4o.jpg"/>:null]]]
      :null}
      {/* for 1st level*/}
     {level===1?
      [count===2?<img style={{height:100+"%"}} alt="Artists" src="https://wallpaperplay.com/walls/full/c/6/5/214850.jpg"/>:
      [count===3?<img style={{height:100+"%"}} alt="Albums" src="https://wallpaperplay.com/walls/full/c/6/5/214850.jpg"/>:null]]
      :null}
      
      {/* this is them name inside that div*/}
     
       {
         count===4 ?
        <div style={{position:"absolute"}}>
         
            <h3 style={{color:"#b3a102"}}>    Created By : </h3>
         <h4 style={{color:"#b3a102"}}> Sudhanshu Chauhan 
              Email:043sudhanshu@gmail.com 
             Phone : +91-7906571690 :)
               </h4>
                   </div>
         :
         <h2 style={{color:"white"}}>  {name}</h2>   
       }
     </div>

    );


}

export default All;
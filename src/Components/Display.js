import React from 'react';
import "../Css/Display.css";

class Display extends React.Component{
    
   componentDidMount(){
       var el=document.getElementsByClassName('display2')[0];
       var p=false;
      /** adding backround image, according to page */
      if(this.props.page==="mainmenu"){el.classList.add("mainmenu");}
      if(this.props.page==="musicmenu"){el.classList.add("musicmenu");}

      setTimeout(()=>{
         el.classList.add('transition');        /* for 1st transition*/
         },10);
       p=true;
       
      setInterval(() => {       //using this interval to move the background image position( which is moving)
        if(p===false){
             el.classList.add('transition');
             p=true;  
           }else{
            el.classList.remove('transition');
            p=false;   
        }
      }, 30000);
   }
    render(){

        return (
  
     <div>      
  
     <div id="display">
        
            <div className="display1">
                          
        {/*this div is the heading of the page,which is passed to this component through props*/}

                  <div className="heading">
                    {/** name of  menu page */}
                            { this.props.page==="mainmenu" && <strong> ipod.js  </strong>}
                            { this.props.page==="musicmenu" && <strong> Music.js  </strong>}
                    
                    {/** image at the top of menu */}
                            { this.props.page==="mainmenu" &&  <img style={{width:27,height:27}} alt="battery" 
                              src= "https://cdn0.iconfinder.com/data/icons/tech-and-interaction/512/Battery-512.png"
                                />}
                            { this.props.page==="musicmenu" && <img style={{width:27,height:27}} alt="music-sign" 
                              src= "https://www.pinclipart.com/picdir/big/535-5358444_music-icon-blue-music-note-png-clipart.png"
                                />} 
                  </div>
                             
                  {    /** according to the value of count we are highlghting the text */
                      this.props.array.map((item,index)=>{     
                        return  ([this.props.count===index+1 ?
                          <div className="highlight"  key={index}> <b> {item} </b> <i className="fa fa-chevron-right"></i> </div>
                            : <div  key={index}> {item} </div>]); 
                        })
                  }

             </div>
            {/** this div contains the background image whose position is changing from left to right and vice-versa */}
            <div  className="display2">
            </div>
      
     </div>


     </div> 
   
);
}
}


export default Display;
import React from "react";
import "../Css/Musicplayer.css";
import song from "../Static/sickick.mp3";

class music extends React.Component{
      constructor(){
        super();
        this.state={
          play:1,          /** play is  1: song is playing , play is 2 : song is not playing */
          audio:document.createElement("Audio"),    /** created audio element */
          rotate:0,                  /* rotation is 0 initially  */
          bar_width:0,          /* It will depend on the song time*/
          time:0               /* time is to display the time  */
        }
        this.interval="";            /* this is to create a interval in componentdid mount, when this component is loaded*/
        this.play_pause=document.getElementsByClassName("bottom")[0]; /** the bottom button/ to play and pause */
      }
    componentDidMount(){                     
    this.state.audio.setAttribute("src",song);    /* setting src attribute of song */
    this.state.audio.play();                   /* play song when component loads*/

    this.interval=setInterval(()=>{        /* interval to update the time*/
     var CT=this.state.audio.currentTime;  /* current time of song in seconds */
     var DT=this.state.audio.duration;   /* total duration of the song */
    
      this.setState({            /* setting state in every 10s */
        rotate:10*CT,           /* rotation as the song is playing*/
        bar_width:((CT/DT)*100)+"%", /* time bar which is calculated by calculating the percentage of song played*/
        time:Math.floor(CT)     /* takes the integer part only */ 
      })
    },10);
  }
  componentDidUpdate(){
   
      if(this.state.play===1){ this.play_pause.onclick=()=>this.pause();}   /** if the song is playing the pause it */
      if(this.state.play===0){ this.play_pause.onclick=()=>this.play();}   /** if the song is paused the play it */
         
     }
  
  componentdidUnmount(){             /* clearing the interval*/
    clearInterval(this.interval);
  }

  play=()=>{
   this.state.audio.play();     /** this is to play the song */
   this.setState({
    play:1
   });
  }
    pause=()=>{                /* this is to pause the song*/
      this.state.audio.pause();
      this.setState({
      play:0
      })
    }
   componentWillUnmount(){
     this.state.audio.pause();            /* pause the song when component will unmount*/
   }
 
    render(){
      const {time,bar_width,rotate}=this.state;    /* fetching all from states*/
      const DT=this.state.audio.duration;     /* audio duration*/
return(
    <div id="display" style={{background:"white",top:8}}>
        
    <div id="one" >
             {/* this is displaying the current time of the song*/}
                <div style={{position:"absolute", left:7, top:66.3+"%"}}>
                    <b> <span className="time">{Math.floor(time/60)}</span><span>:</span><span className="time">{(time%60)<=9?"0"+time%60:time%60}</span> </b>
                </div>
             
              {/* this is displaying the total duration of the song*/}  
                <div  style={{position:"absolute", right:7, top:66.3+"%"}}>
                   <b>	  <span className="time">{Math.floor(DT/60)}</span><span className="time">:</span><span className="time">{Math.floor(DT%60)}</span> </b>
               </div>
               {/* rotating the div*/}
              <div style={{transform:"rotate("+rotate+"deg)"}} className="disc"> </div>

                 {/* time-bar*/ }
                 <div id="two">
                         <div style={{width:bar_width}} className="three"></div>
                   </div>

          <div className="icons">
              <span>   <i style={{color:"white",fontSize: 14}}className="fa fa-fast-backward"></i> </span>
          
          {/* if the song is playing, this condition will run the pause on click and vice-versa*/}
          {this.state.play===1 ?  
            <span style={{ color:"white",width:50,height:50}}> <i style={{fontSize: 20}} onClick={()=>{this.pause();}} className="fa fa-pause"></i>  </span>
            :  <span style={{ color:"white",width:50,height:50}}> <i style={{fontSize: 20}} onClick={()=>{this.play();}}  className="fa fa-play"></i> </span>
          }
              <span>   <i style={{color:"white",fontSize: 14}}className="fa fa-fast-forward"></i> </span>
          </div>
            
          {/* this is the song name*/}
               <div className="song_name">
                  <strong> Sickick </strong>
                   <br/>
                  Epic Sean Paul Mashup
               </div>


</div>
</div>

);


}
}

export default music;
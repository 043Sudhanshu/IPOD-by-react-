import React from 'react';
import ZingTouch from 'zingtouch';
import "../Css/Home.css";
import Display from "./Display";
import All from "./Coverflow";
import Music from "./Musicplayer";

class home extends React.Component{

    constructor(){
        super();
        this.state={
            count:1,          /** count refers to the items that present in the menu**/
            level:0,           /** level refers to the pages  **/
            ok:false,          /** ok is false initially , it will be true if any of the item is clicked by the button **/
            mainmenu_array:["Coverflow","Music","Games","About"],  /** array of items presented on the home-menu **/
            musicmenu_array:["Allsongs","Artists","Albums"],  /** array of items presented on the music-menu **/
            wheel:true   /** true:when the wheel will work , false: when the wheel will not work */
                }
    }
   
    componentDidMount(){
        var parentTouchArea = document.getElementById('outer');  /**fetched the outer div in button to make it work on touching */
        
        var myRegion = new ZingTouch.Region(parentTouchArea);   /** created this fetched region touch sensible **/
        myRegion.bind(parentTouchArea, 'rotate', function(e){
        const c=e.detail.distanceFromLast;         /** the distance from the center while moving on that button */
        f(c);         /*** coming distance is passed to the function */
        });
        
      var f=(c)=>{
          if(this.state.wheel===true){
              var t;       /**  storing number of items in t , depending on the level  */
           if(this.state.level===0){ t=this.state.mainmenu_array.length; }  
           if(this.state.level===1){ t=this.state.musicmenu_array.length; }
           if(c>7 && this.state.count<t){  /** if the distance c:   7<c<t  ,then increase the count */
            this.setState({
                count:this.state.count+1
            });
          }
           if(c<-7 && this.state.count!==1){  /*** if the distance c:   c<-7 and c!=1 , then decrease the count*/
            this.setState({
                count:this.state.count-1
            });
           }
       }
    }
    }
   /*** forward function is for: when any of the item is selected from the menu */
    forward=()=>{                                    
        if(this.state.level===0 && this.state.count===2){    
            this.setState({
                count:1,
                level:1,                     /*for music page*/
                ok:false,
            });
        }
       else if(this.state.level===1 && this.state.count===1){
            this.setState({
                level:2,                     /*for music player*/
                ok:false
            });
        }
       else{
        this.setState({                   /* for other pages on home*/
            ok:true,
            wheel:false
        });
    }
 }
      /** if we are at any other page */

      /**  we have two things either we have selected any item and ok is true,then we will make ok equal to false and will come back again to that level */

    back=()=>{                            
        if(this.state.ok===true){
            this.setState({
                level:this.state.level,        
                ok:false,
                count:1,
                wheel:true             
            });    
        }  
        else if(this.state.level>0){           /***if we are not at 0th level we will reduce the value of level*/
        this.setState({
        level:this.state.level-1,
        ok:false,
        count:1,
        wheel:true
    });

}
    }
    
   

    render(){
     
        return( 
       <div id="main">
        <div className="Main-display">
        
                    {    
                      // i have used 3 levels : 0 is for main menu, 1 for music menu, 2 for song 
                      //if ok button is not clicked which means its false then it will show the level accordingly
                      // when we 
                     this.state.level===0 && this.state.ok===false ? 
                          <Display  count={this.state.count} page={"mainmenu"} array={this.state.mainmenu_array}   />    :  // Display will get the value of count , page-name and the array of items in menu
                          [ this.state.level===0 ?    // when ok is clicked and count is from any of these then it will go to these components
                                    [this.state.count===1 ? <All level={this.state.level} count={this.state.count}  name={"Coverflow"} /> 
                                :   [this.state.count===3 ? <All level={this.state.level} count={this.state.count}  name={"Games"}/>
                                :   [this.state.count===4 ? <All level={this.state.level} count={this.state.count}  name={"Setting"}/> :  null ] ] ]
                         
                         :null]
                    }

                    {
                     this.state.level===1 && this.state.ok===false ?   // if level is 1 which is songs menu, it will show display and will pass the value of count by moving on wheel 
                     <Display  count={this.state.count} page={"musicmenu"}  array={this.state.musicmenu_array}  /> 
                     :
                     [ this.state.level===1 ?    // when ok is true i.e it is clicked will fetch the menu item with the name
                            [ this.state.count===2 ?<All level={this.state.level} count={this.state.count} name={"Allsongs"}/>
                            :   [this.state.count===3 ? <All level={this.state.level} count={this.state.count}  name={"Albums"}/> :  null ] ] : null]
                    }
                    {   // this is the level where song will play
                        this.state.level===2 ? <Music level={2}/> : null
                    }
                   
                
                


        </div>

                <div id="buttons">
                
                            <div id="outer"  >
                                {/* this div having class name menu will reduce the value if level and take us back*/}
                               <div className="menu" onTouchStart={()=>{this.back()}} onClick={()=>{this.back()}} ><b> MENU </b>  </div>
                                            <i className="fa fa-fast-forward right"></i> 
                                            <i className="fa fa-fast-backward left"></i>
                                            <div className="bottom">
                                                    <i className="fa fa-play "></i> 
                                                    <i className="fa fa-pause "></i>
                                           </div>
                            </div>
                            {/** if we want to select the menu item */}
                            <div id="inner" onClick={()=>{this.forward()}}> </div>
                        

                </div>
    
        </div>
        
        );

    }

}

export default home;
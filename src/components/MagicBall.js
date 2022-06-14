import React from 'react'
import './MagicBall.css'
import { Typography, IconButton } from "@material-ui/core";


export default function MagicBall(energy) {
    console.log(energy.energy)
    const [index, setIndex] = React.useState(0);
    const [answer,setAnswer]= React.useState("8");
    const goodAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt', 
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
      ];
      const badAnswers = [
        'Better not tell you now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
      ];
      
      const handleSpin=()=>{
        setIndex(Math.floor(Math.random()*(7-1)+1)) 
        console.log(energy)
        
        if(energy.energy){
            setAnswer(goodAnswers[index])
        }else{
            setAnswer(badAnswers[index])
        }
}
      return (
        <div>
          <div className="ball-container">
            <div className="ball-black-outer">
              <div className="ball-white-inner">
                <div>
                  { (answer !== '8') ?
                    answer
                   :
                    <div className='eight'>8</div>
                  }
                </div>
              </div>
            </div>
            <div className="ball-shadow"></div>
            <IconButton onClick={handleSpin} color ="inherit" className="spinner">
                    <Typography variant="h6">
                    Ask the Magic Eight Ball!

                    </Typography>
               </IconButton>
                
          </div>
          
        </div>
      );
    
  };
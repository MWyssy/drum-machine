import { useEffect, useState } from 'react'
import '../Styles/DrumPad.css'
import Display from './Display'
import Switch from './Switch'
import Heater1 from '../assets/Heater1.mp3'
import Heater2 from '../assets/Heater2.mp3'
import Heater3 from '../assets/Heater3.mp3'
import Heater4 from '../assets/Heater4.mp3'
import Clap from '../assets/Clap.mp3'
import OpenHH from '../assets/OpenHH.mp3'
import Kick_n_Hat from '../assets/Kick_n_Hat.mp3'
import Kick from '../assets/Kick.mp3'
import ClosedHH from '../assets/ClosedHH.mp3'

function DrumPad() {
   const [switchOn, setSwitchOn] = useState(true)
   const [sound, setSound] = useState('')

   function playSound(button) {
    if (switchOn) {
        switch (button) {
            case 'Q':
                setSound('Heater 1')
                const audioElement1 = document.getElementById('Q');
                audioElement1.currentTime = 0;
                audioElement1.play()
                break;
            case 'W':
                setSound('Heater 2')
                const audioElement2 = document.getElementById('W');
                audioElement2.currentTime = 0;
                audioElement2.play()
                break;
            case 'E':
                setSound('Heater 3')
                const audioElement3 = document.getElementById('E');
                audioElement3.currentTime = 0;
                audioElement3.play()
                break;  
            case 'A':
                setSound('Heater 4')
                const audioElement4 = document.getElementById('A');
                audioElement4.currentTime = 0;
                audioElement4.play()
                break;
            case 'S':
                setSound('Clap')
                const audioElement5 = document.getElementById('S');
                audioElement5.currentTime = 0;
                audioElement5.play();
                break;
            case 'D':
                setSound('Open Hat')
                const audioElement6 = document.getElementById('D');
                audioElement6.currentTime = 0;
                audioElement6.play();
                break;    
            case 'Z':
                setSound('Kick n\' Hat')
                const audioElement7 = document.getElementById('Z');
                audioElement7.currentTime = 0;
                audioElement7.play();
                break;
            case 'X':
                setSound('Kick')
                const audioElement8 = document.getElementById('X');
                audioElement8.currentTime = 0;
                audioElement8.play();
                break;
            case 'C':
                setSound('Closed Hat')
                const audioElement9 = document.getElementById('C');
                audioElement9.currentTime = 0;
                audioElement9.play();
                break;
        }
    }
   }

   function handleClick(event) {
    const button = event.target.outerText
    playSound(button);
   }

   function handleKeyPress(event) {
    const key = event.key
    playSound(key.toUpperCase())
   }

    return (
        <section id='body'>
            <section id='display-and-switch'>
                <Switch switchOn={switchOn} setSwitchOn={setSwitchOn} setSound={setSound}/>
                <Display sound={sound}/>
            </section>
            <section id='drum-pads'>
                <button type='button' className='drum-pad' onClick={handleClick} onKeyDown={handleKeyPress} id='heater-1'>Q<audio src={Heater1} className="clip" id="Q"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='heater-2' >W<audio src={Heater2} className="clip" id="W"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='heater-3'>E<audio src={Heater3} className="clip" id="E"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='heater-4'>A<audio src={Heater4} className="clip" id="A"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='clap'>S<audio src={Clap} className="clip" id="S"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='open-hh'>D<audio src={OpenHH} className="clip" id="D"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='kick-n-hat'>Z<audio src={Kick_n_Hat} className="clip" id="Z"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='kick'>X<audio src={Kick} className="clip" id="X"></audio></button>
                <button type='button' className='drum-pad' onClick={handleClick}onKeyDown={handleKeyPress} id='closed-hh'>C<audio src={ClosedHH} className="clip" id="C"></audio></button>
            </section>
            
        </section>
    )
}

export default DrumPad
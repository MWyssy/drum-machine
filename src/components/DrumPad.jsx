import { useState } from 'react'
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
   const [play, setPlay] = useState({
    Q: false,
    W: false,
    E: false,
    A: false,
    S: false,
    D: false,
    Z: false,
    X: false,
    C: false,
   })

   function playSound(button) {
    if (switchOn) {
        switch (button) {
            case 'Q':
                setSound('Heater 1')
                setPlay({
                    ...play,
                    Q: true
                })
                break;
            case 'W':
                setSound('Heater 2')
                heater2.play();
                break;
            case 'E':
                setSound('Heater 3')
                heater3.play();
                break;  
            case 'A':
                setSound('Heater 4')
                heater4.play();
                break;
            case 'S':
                setSound('Clap')
                clap.play();
                break;
            case 'D':
                setSound('Open Hat')
                openHH.play();
                break;    
            case 'Z':
                setSound('Kick n\' Hat')
                kick_n_hat.play();
                break;
            case 'X':
                setSound('Kick')
                kick.play();
                break;
            case 'C':
                setSound('Closed Hat')
                closedHH.play();
                break;
        }
    }
   }

   function handleClick(event) {
    const button = event.target.outerText
    playSound(button);
    setTimeout(setPlay({
        Q: false,
        W: false,
        E: false,
        A: false,
        S: false,
        D: false,
        Z: false,
        X: false,
        C: false,
    }), 500)
   }

   function handleKeyPress(event) {
    const key = event.key
    playSound(key.toUpperCase())
   }

    return (
        <>
            <section id='display-and-switch'>
                <Switch switchOn={switchOn} setSwitchOn={setSwitchOn} setSound={setSound}/>
                <Display sound={sound}/>
            </section>
            <section id='drum-pads'>
                <button type='button' className='drum-pad' id='Q' onClick={handleClick} onKeyDown={handleKeyPress}><audio src={Heater1} preload='auto' autoPlay={play.Q}></audio>Q</button>
                <button type='button' className='drum-pad' id='W' onClick={handleClick}>W</button>
                <button type='button' className='drum-pad' id='E' onClick={handleClick}>E</button>
                <button type='button' className='drum-pad' id='A' onClick={handleClick}>A</button>
                <button type='button' className='drum-pad' id='S' onClick={handleClick}>S</button>
                <button type='button' className='drum-pad' id='D' onClick={handleClick}>D</button>
                <button type='button' className='drum-pad' id='Z' onClick={handleClick}>Z</button>
                <button type='button' className='drum-pad' id='X' onClick={handleClick}>X</button>
                <button type='button' className='drum-pad' id='C' onClick={handleClick}>C</button>
            </section>
            
        </>
    )
}

export default DrumPad
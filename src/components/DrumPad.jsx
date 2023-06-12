import '../Styles/DrumPad.css'
import Display from './Display'
import Switch from './Switch'

function DrumPad() {
   

    return (
        <>
            <section id='display-and-switch'>
                <Switch />
                <Display />
            </section>
            <section id='drum-pads'>
                <button type='button' className='drum-pad' id='Q'>Q</button>
                <button type='button' className='drum-pad' id='W'>W</button>
                <button type='button' className='drum-pad' id='E'>E</button>
                <button type='button' className='drum-pad' id='A'>A</button>
                <button type='button' className='drum-pad' id='S'>S</button>
                <button type='button' className='drum-pad' id='D'>D</button>
                <button type='button' className='drum-pad' id='Z'>Z</button>
                <button type='button' className='drum-pad' id='X'>X</button>
                <button type='button' className='drum-pad' id='C'>C</button>
            </section>
            
        </>
    )
}

export default DrumPad
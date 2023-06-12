import '../Styles/Switch.css'

function Switch({ switchOn, setSwitchOn, setSound }) {
   
    function handleClick(event) {
        if (switchOn) {
            document.documentElement.style.setProperty('--off-background', 'radial-gradient(rgb(45, 48, 58), rgb(33, 36, 43))')
            document.documentElement.style.setProperty('--on-background', 'radial-gradient(rgb(156, 160, 175), rgb(91, 94, 104))')
            document.documentElement.style.setProperty('--off-text', 'rgb(43, 46, 56)')
            document.documentElement.style.setProperty('--on-text', 'rgb(128, 131, 143)')
            setSwitchOn(false)
            setSound('Off')
        } else {
            document.documentElement.style.setProperty('--off-background', 'radial-gradient(rgb(156, 160, 175), rgb(91, 94, 104))')
            document.documentElement.style.setProperty('--on-background', 'radial-gradient(rgb(45, 48, 58), rgb(33, 36, 43))')
            document.documentElement.style.setProperty('--off-text', 'rgb(128, 131, 143)')
            document.documentElement.style.setProperty('--on-text', 'rgb(43, 46, 56)')
            setSwitchOn(true)
            setSound('')
        }
    }

    return (
        <section id="switch">
            <button id='on' className='on-off' type='button' onClick={handleClick}>On</button>
            <button id='off' className='on-off' type='button' onClick={handleClick}>Off</button>
        </section>
    )
}

export default Switch
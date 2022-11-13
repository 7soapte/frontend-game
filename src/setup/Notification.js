import './Notification.scss'
import {useEffect} from 'react'

function Notification({text, cb}) {
    // usage in parent
    /*
        Hook:
        const [notify, setNotify] = useState(false);

        Render:
        {notify ? <Notification text={"Something happened!"} cb={setNotify}/> : ''}
     */

    useEffect(() => {
        const timer = setTimeout(() => {
            cb(false)
        }, 2000)
        return () => clearTimeout(timer)
    })

    return <div className={'notification alert alert-success'}>{text}</div>
}

export default Notification

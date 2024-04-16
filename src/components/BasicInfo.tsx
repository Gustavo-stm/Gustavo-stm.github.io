import locationimg from "../assets/images/location.png"
import emailImg from '../assets/images/email.png'
import linkimg from '../assets/images/link.png'

import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

function BasicInfo(): JSX.Element {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 5,
        data: {
            supports: 'type4',
        },
    });

    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
    };

    const basicInfo = [<li key={0}><img style={{ width: '14px', height: '14px', marginRight: '20px' }} src={locationimg} /><span className="sr-only">Location:</span>
        Malmö, SWE</li>,
    <li key={1}><img style={{ width: '14px', height: '14px', marginRight: '20px' }} src={emailImg} /><span className="sr-only">Email:</span><a
        href="#">gcs26@yahoo.com</a></li>,
    <li key={2}><img style={{ width: '14px', height: '14px', marginRight: '20px' }} src={linkimg} /><span className="sr-only">Website:</span><a
        href="#">https://catala-sverdrup.se</a></li>]

    return (<aside style={style} {...listeners} {...attributes} className="pers-info aside section">
        <div ref={setNodeRef} className="section-inner">
            <h2 className="heading">Basic Information</h2>
            <div className="content">
                <ul className="list-unstyled">
                    {basicInfo && basicInfo.map(inf => {
                        return (inf)
                    })}
                </ul>
            </div>
        </div>
    </aside>)
}

export default BasicInfo
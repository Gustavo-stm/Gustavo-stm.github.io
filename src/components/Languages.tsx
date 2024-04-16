import starimg from '../assets/images/star.png'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

function Languages() {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 9,
        data: {
            supports: 'type4',
        },
    });

    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
    };

    const languages = [{ name: "Spanish", description: "Native Spaeaker", level: 5 },
    { name: "Swedish", description: "Professional Proficency", level: 4 },
    { name: "English", description: "Professional Proficency", level: 4 },
    { name: "German", description: "Deep understanding", level: 3 },
    ]

    return (<aside ref={setNodeRef} style={style} className="languages aside section">
        <div className="section-inner" {...listeners} {...attributes}>
            <h2 className="heading">Languages</h2>
            <div className="content">
                <ul id="language-list" className="list-unstyled">
                    {languages.map((lang, i) => {
                        return (<li key={i + 'lang'} id={i.toString()} className="item">
                            <span className="title"><strong>{lang.name}:</strong></span>
                            {[...Array(lang.level)].map((element, i) => {
                                return (<img key={i + 'star'} style={{ width: "20px", height: "20px" }}
                                    src={starimg} />)
                            })
                            }
                            <p className="level">{lang.description}<br className="visible-xs" /></p>
                        </li >)
                    })}
                </ul>
            </div>
        </div>
    </aside>)
}

export default Languages
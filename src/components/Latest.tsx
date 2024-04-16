import { useState } from 'react'
import subfeatured from '../data.js'
import like from "../assets/images/like.png"
import minButik from "../assets/images/projects/min-butik.png"
import more_link from "../assets/images/foreign.png"

import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

interface Info {
    description: string;
    image: string;
    title: string
}

const SubFeatured = ({ info }: { info: Info }) => {

    return (<div className="item">
        <a
            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
            target="">
            <img className="img-fluid project-image rounded shadow-sm"
                src={info.image} alt="project name" />
        </a>
        <div className="desc">
            <h3 className="title"><a
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
                target="">{info.title}</a></h3>
            <p>{info.description}</p>
            <p><a className="more-link"
                href={info.more_link.href}
                target=""><img className="external-link"
                    src={more_link} />Find out more</a></p>
        </div>
    </div>
    )
}

type SubFeaturedInfo = {
    title: string;
    image: string;
    description: string;
    more_link: {
        href: string;
        text: string;
    }
}


function Latest(): JSX.Element {

    const [subfeaturedSecs, setSubFeatured] = useState<SubFeaturedInfo[]>(subfeatured);
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 2,
        data: {
            supports: 'type3',
        },
    });

    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
    };


    return (<section style={style} ref={setNodeRef} className="latest section" >
        <span className="drag-me">DRAG ME</span>
        <div {...listeners} {...attributes} className="section-inner shadow-sm rounded" >
            <h2 className="heading">Latest Projects</h2>
            <div className="item featured">
                <div className="featured-image has-ribbon">
                    <a href="https://min-butik.catala-sverdrup.se" target="">
                        <img className="img-fluid project-image rounded shadow-sm"
                            src={minButik} alt="project name" />
                    </a>
                    <div className="ribbon">
                        <div className="text">New</div>
                    </div>
                </div>

                <h3 className="title"><a href="https://min-butik.catala-sverdrup.se" target="">Mathem
                    Clone - A copy of the popular Swedish company of food
                    delivery</a></h3>

                <div className="desc">
                    <p>For this project I worked specifically with vanilla Javascript and Typescript.
                        The product cards design was coded by my fellow co-worker at Sankta Maria, Mr.
                        Lars Holmqvist. It was a cool project where my favorite part was coding the cart
                        functionality.</p>
                </div>
                <a className="btn" href="https://min-butik.catala-sverdrup.se"
                    target=""><img src={like} />Check my project</a>
            </div>
            <hr />
            <div className="secondary">
                {subfeaturedSecs && subfeaturedSecs.map(sec => {
                    return (<div key={sec.title} > <SubFeatured info={sec} /></div >)
                })}
            </div>
        </div>
    </section >)

}
export default Latest
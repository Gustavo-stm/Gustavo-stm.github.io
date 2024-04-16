
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';


type WorkExperience = {
    title: string;
    company: string;
    description: string;
    period: string;
};

type ExperienceProps = {
    // define any props here
};

function Experience({ /* add any props here */ }: ExperienceProps): JSX.Element {
    const workExperience: WorkExperience[] = [{
        title: "Web development Instructor",
        company: "Skta Maria Folkhögskola",
        description: `Instructing adults in web dev main technologies for modern web applications using SQL and noSQL databases. 
        Leading online courses`
        , period: `(2021 - Present)`
    },
    {
        title: "Intern",
        company: "Cirk-l Workwear",
        description: `Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci
        eu suscipit pellentesque, mauris dui tincidunt enim. Sed fringilla mauris sit amet
        nibh. Donec sodales sagittis magna.`
        , period: `(jan - apr 2021)`
    },
    {
        title: "Intern",
        company: "Stjärnstoft Studios",
        description: `Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
        adipiscing sem neque sed ipsum.`
        , period: `(oct - dec 2020)`
    }];

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 3,
        data: {
            supports: 'type3',
        },
    });

    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <section style={style} ref={setNodeRef} className="experience section">
            <span className="drag-me">DRAG ME</span>
            <div {...listeners} {...attributes}>
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                    {workExperience.map(exp => {
                        return (
                            <div key={exp.company} className="item">
                                <h3 className="title">
                                    {exp.title}
                                    <span className="place">{exp.company}</span>
                                    <span className="year">{exp.period}</span>
                                </h3>
                                <p>{exp.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience
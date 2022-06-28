import '../CSS/AboutMe.css';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import imageData from '../JSON/imagesData.json'

export default function AboutMe () {
    const language = useSelector((state) => state.language.languageState)
    return(
        <section id='aboutme' className="Aboutme">
            <h2>My Dog</h2>
            <div className='cardholder'>
                { language ? imageData.imagesDog.map((image) => {
                    return(
                        <Card key={image.article} id={image.ID} path={image.path} path2={image.path2} alt={image.alt} imgTitle={image.imgTitleE} article={image.article} upper={image.upper}/>
                    );
                }) : imageData.imagesDog.map((image) => {
                    return(
                        <Card key={image.article} id={image.ID} path={image.path} path2={image.path2} alt={image.alt} imgTitle={image.imgTitleJ} article={image.article} upper={image.upper}/>
                    );
                })}
            </div>
        </section>
    );
}



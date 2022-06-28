import { useSelector } from 'react-redux';
import '../CSS/LandingPage.css'

export default function LP () {
    const language = useSelector((state) => state.language.languageState);
    const images = [{
        image: 'images/IMG_Back-view.png',
        alt: 'back view',
    }]

    return(
        <div id='home' className="LP">
            <div className="title">
                { language ?
                <>
                    <h1>Shingo Tennichi</h1>
                    <p>High Energetic Web Developer</p>
                </> :
                <>
                    <h1>Shingo Tennichi</h1>
                    <h1>天日 慎吾</h1>
                    <p>フロントエンドエンジニア</p>
                </>
                }
            </div>
            <div className='mainImage'>
                <img src={images[0].image} alt={images[0].alt}></img>
            </div>
        </div>
    )
}
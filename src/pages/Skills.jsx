import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import '../CSS/Skills.css';
import imagesData from '../JSON/imagesData.json';

export default function Skills() {
    const language = useSelector((state) => state.language.languageState);
    function HideArrows(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none"}}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 0,
        cssEase: "linear",
        nextArrow: <HideArrows />,
        prevArrow: <HideArrows />,
    };

    return (
        <div id='skills' className='skills'>
            { language ? <h1 style={{margin: ''}}>Experienced in</h1> : <h1 style={{margin: ''}}>これまでの経験</h1>}
            <div>
                <Slider {...settings}>
                {imagesData.imagesData.map((image) => {
                    return(
                    <div key={image.key}>
                        <img className='scrollImage' src={image.url} alt={image.alt} />
                    </div>
                    )
                })}
                </Slider>
            </div>
            <ul className='experiencedSkillList'>
                {imagesData.imagesData.map((item)=> {
                    return(
                        <li key={item.ID} className='experiencedIn'><p>{item.alt}</p></li>
                    );
                })}
            </ul>
        </div>
    )
}

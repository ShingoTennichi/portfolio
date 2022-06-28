import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { changeToEnglish, changeToJapanese } from '../Redux/languageSlice';
import NavButton from './NavButton';
import translate from '../JSON/translate.json';
import '../CSS/Navigation.css';
import Icon from './Icon';

export  default function Navigation () {
    const language = useSelector((state) => state.language.languageState);
    console.log(language);
    const dispatch = useDispatch();
    
    const displayStatus = {
        zIndex:99,
        display: 'none',
        opacity: 0
    };
    function hideNavigation() {
        const NavTag = document.getElementById('Navigation');
        const icon = document.getElementById('Nav-btn');
        NavTag.style.opacity = 0;
        icon.style.color = '#293462';
        setTimeout(()=> NavTag.style.display = 'none',300);
    };

    return(
        <header className='Nav-container'>
            <Icon />
            <div style={{display: 'flex'}}>
                <div className='languageBox'>
                    <button className='language' onClick={() => dispatch(changeToEnglish())}>English</button>
                    <button className='language' onClick={() => dispatch(changeToJapanese())}>日本語</button>
                </div>
                <NavButton id='Nav-btn' className="fa-solid fa-bars fa-flip Nav-btn"/>
            </div>
            <nav id='Navigation' style={displayStatus} onClick={()=>hideNavigation()}>
                <ul>
                    {language ? translate.navItems.map((menu) => {
                        return(
                            <li key={menu.pageE}><AnchorLink href={menu.path}>{menu.pageE}</AnchorLink></li>
                        )
                    }) : translate.navItems.map((menu) => {
                        return(
                            <li key={menu.pageJ}><AnchorLink href={menu.path}>{menu.pageJ}</AnchorLink></li>
                        )
                    })};
                </ul>
            </nav>
        </header>
    );
}
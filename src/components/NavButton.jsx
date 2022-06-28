export default function NavButton (props) {

    const showNavigation = () => {
        const selectNavTag = document.getElementById('Navigation');
        const icon = document.getElementById('Nav-btn');
        if(selectNavTag.style.display === 'none') {
            selectNavTag.style.display = 'flex';
            icon.style.color = '#F9F3EE';
            setTimeout(()=>selectNavTag.style.opacity = 1,300);
        } else {
            selectNavTag.style.opacity = 0;
            icon.style.color = '#293462';
            setTimeout(()=>selectNavTag.style.display = 'none',300);
        }
    };

    return (
        <i id={props.id} className={props.className} onClick={() => showNavigation()}></i>
    );
}
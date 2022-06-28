import '../CSS/Card.css';

export default function Card ({id, path, path2, alt, imgTitle, article, upper}) {
    return(
        <div className='card'>
            <div className='img-frame'>
                <img src={path} id={id} alt={alt}></img>
                {upper ? <img id={alt} src={path2} alt={alt}></img>: <></>}
            </div>
            <article>
                <h1>{imgTitle}</h1>
                <p>{article}</p>
            </article>
        </div>
    );
}
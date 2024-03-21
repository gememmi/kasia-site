import kasia from '/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/kasia.png';
import food from '/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/food.png';

export default function Gallery(){
    return(
        <div id="gallery">
            <h1>Gallery</h1>
            <div className="image-container">
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            </div>
        </div>
    )
};

import menu from '/Users/emilydaniels/Development/code/post-grad/kasia-site/src/files/menuHolder.png';

export default function Menus(){
    return(
        <div id="menus">
            <h1>Menus</h1>
            <h4><i>Samples</i></h4>
            <div className="menus-container">
            <object data={menu}></object>
            <object data={menu}></object>
            </div>
        </div>
    )
};


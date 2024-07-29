// component = html + css + js

import './style.css'

const MyComponent = () => {
    return (
        //Fragment mảnh vỡ, nhỏ
        <>
            <div className="divClass">
                OOi ban oi - ReactJs
                <div className="childDiv"
                    style={
                        { borderRadius: "50px" }
                    }
                >Content with color</div>
            </div>
        </>

    );
}


export default MyComponent;
// component = html + css + js

import './style.css'

const MyComponent = () => {
    const number = 553750123;
    const boolean = false; //thường k hiển thị vì k có ý nghĩa
    const undf = undefined // same upon
    const nil = null //same upon

    // tham chiếu

    const arr = [1, 5, 8] //array
    const student = {
        name: "Khabanh",
        age: 18
    }
    return (
        //Fragment mảnh vỡ, nhỏ
        <>
            <div className="divClass">
                OOi ban oi - ReactJs {number}
                <div className="childDiv"
                    style={
                        { borderRadius: "50px" }
                    }
                >Content {boolean}with color</div>
                Array : {arr}

                Student's name is {student.name}
                <div></div>
                Full information: Json {JSON.stringify(student)}
            </div>
        </>

    );
}


export default MyComponent;
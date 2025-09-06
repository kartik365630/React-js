import React from "react";
import './Style.css'; 

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: [] };
    }

    componentDidMount() {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ mydata: res });
            })
            .catch((err) => alert("Error: " + err));
    }

    render() {
        return (
            <div className="kt">
                {this.state.mydata.map((value, index) => {
                    return (
                        <div className="tp" key={index}>
                            <img src={value.images[0]} alt={value.title} />
                            <h3>{value.title}</h3>
                            <p>${value.price}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Api;

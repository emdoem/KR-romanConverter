import React from "react";
import toArabic from "./toArabic";

class ArabicConverter extends React.Component {
    state = {
        arabic: null
    }
    handleChange = (event) => {
        const roman = event.target.value;        
        this.setState({arabic: toArabic(roman)});
    };
    render() {
        return (
            <>
                <label>Roman:<input onChange={this.handleChange}></input></label>
                <h1>Arabic: {this.state.arabic ? this.state.arabic : "none"}</h1>
            </>
           
        );
    }
};

export default ArabicConverter;
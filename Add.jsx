import React from "react";
class AddData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mydata: JSON.parse(localStorage.getItem("mydata")) || [],
            txt1: "",
            txt2: "",
            txt3: "",
            txt4: "",
            editIndex: null,
        };
    }

    addData() {
        var tempArray = this.state.mydata;
        tempArray.push({
        name: this.state.txt1, 
        gender: this.state.txt2, 
        email:this.state.txt3, 
        password:this.state.txt4
    });
        localStorage.setItem("mydata", JSON.stringify(tempArray))
        this.setState({ mydata: tempArray, txt1: "", txt2: "", txt3: "", txt4: ""});
    }

    editData(index) {
        let selected = this.state.mydata[index];
        this.setState({
            txt1: selected.name,
            txt2: selected.gender,
            txt3: selected.email,
            txt4: selected.password,
            editIndex: index
        });
    }
    updateData() {
        let tempArray = this.state.mydata;
        let index = this.state.editIndex;
   
        
        tempArray[index] = {
            name: this.state.txt1,
            gender: this.state.txt2,
            email: this.state.txt3,
            password: this.state.txt4
        };

        localStorage.setItem("mydata", JSON.stringify(tempArray));
        this.setState({ 
            mydata: tempArray, 
            txt1: "", txt2: "", txt3: "", txt4: "",
            editIndex: null
        });
    } 

    deleteData(index) {
        var tempArray = this.state.mydata;
        tempArray.splice(index, 1);
        localStorage.setItem("mydata", JSON.stringify(tempArray));  
        this.setState({ mydata: tempArray });
    };

    render() {
        return (
            <>

                <h1>Form</h1>
                <label>Name : </label>
                <input type="text" value={this.state.txt1} onChange={(e) => this.setState({ txt1: e.target.value })} /><br/><br/>
                <label>Gender : </label>
                <input type="radio" value="Male" name="gender" checked={this.state.txt2 === "Male"} onChange={(e) => this.setState({ txt2: e.target.value })} />Male
                <input type="radio" value="Female" name="gender" checked={this.state.txt2 === "Female"} onChange={(e) => this.setState({ txt2: e.target.value })} />Female<br/><br/>
                <label>Email : </label>
                <input type="email" value={this.state.txt3} onChange={(e) => this.setState({ txt3: e.target.value })} /><br/><br/>
                <label>Password : </label>
                <input type="password" value={this.state.txt4} onChange={(e) => this.setState({ txt4: e.target.value })} /><br/><br/>
                {this.state.editIndex === null ? (
                    <input type="button" value="AddData" onClick={() => this.addData()} />
                ) : (
                    <input type="button" value="UpdateData" onClick={() => this.updateData()} />
                )}
                
                <table border={1}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Gender</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mydata.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>

                                    <td><input type="button" value="Edit" onClick={() => this.editData(index)} />
                                        <input type="button" value="Delete" onClick={() => this.deleteData(index)} /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
export default AddData;
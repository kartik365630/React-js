import React from "react";
class Sum extends React.Component{
    frmSubmit(e){
        var a = (e.target.text1.value);
        var b = (e.target.text2.value);
        var c = parseInt(a) + parseInt(b);
        alert("Sum Is " + c);
        e.preventDefualt();
    }   
  render(){
    return(<>
     <h2>Sum Demo</h2>
     <form onSubmit={this.frmSubmit} name="frm1">
        No 1:<input type="text" name="text1"/><br/>

        NO 2:<input type="text" name="text2"/><br/>
        <input type="submit" />
     </form>
     </>);
  }   
}
export default Sum;
import React,{ Component } from "react";

class FormMakanan extends Component {
  constructor(props){
    super(props);
      this.state={
        pesanan: "",
        jumlah:""
    };
    this.hendleChange =this.hendleChange.bind(this);
    this.hendleSubmit=this.hendleSubmit.bind(this);
    this.hendleSubmitJumlah=this.hendleSubmitJumlah.bind(this);
    this.pesanan= React.createRef();
  }

    hendleChange(e){
      this.setState ({pesanan: e.target.value});
    }

      hendleSubmitJumlah(e){
        this.setState ({jumlah: e.target.value});
    }

    hendleSubmit(e){
    e.preventDefault ();
     alert(
       "pesanan anda adalah : " +
        this.state.pesanan +
        " | jumlah pesanan : " +
        this.state.jumlah
      );
      this.setState({ pesanan : "", jumlah: ""});
      this.pesanan.current.focus();
    }

    render(){
      return(
        <div>
          <center>
          <form onSubmit={this.hendleSubmit}>

          <input
          onChange={this.hendleChange}
          type="text"
          value={this.state.pesanan}
          ref={this.pesanan}
          placeholder="masukan pesanan anda"
           />

          <input
          type="number"
          value={this.state.jumlah}
           onChange={this.hendleSubmitJumlah}
          placeholder="masukan jumlah pesanan"
          />
          <br /> <br />

          <input type="submit" value="pesan" />
          </form>
          </center>
        </div>
      )
    }

}

export default FormMakanan ;

import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component{
    constructor(props){
        super(props);
        this.state = {
            pesan : 0,
            ivalue : "Masukan Pesanan Anda",

        };
        this.rubahPesanan = this.rubahPesanan.bind(this);
        this.pesanan = this.pesanan.bind(this);
    };

    rubahPesanan(jum){
        this.setState((state, props) => {
            return {
                pesan : state.pesan + 1
            };
        });
    };

    pesanan(e){
        console.log(this.setState({ivalue : e.target.value}))
    }

    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" pcc="bottom"/>
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                                <center><button onClick={this.rubahPesanan}>Pesan Sekarang</button></center>
                                
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                                <center><button onClick={this.rubahPesanan}>Pesan Sekarang</button></center>
                            </td>
                            <td>
                                <ListMakanan linkgambar="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" />
                                <center><button onClick={this.rubahPesanan}>Pesan Sekarang</button></center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input 
                type="text" onChange={this.pesanan} value={this.state.ivalue}/>
                <h3>Pesanan Anda : {this.state.pesan}</h3>
                
            </div>
        );
    };
};

export default MenuMakanan;
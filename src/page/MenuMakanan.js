import React ,{Component} from "react"

import DaftarMakanan from "../Lib/DaftarMakanan"
import FormMakanan from "../Form/FormMakanan"

const listmakanan = [
    {
      NamaMakanan:"nasi padang",
      Harga :"20.000"
    },

    {
      NamaMakanan:"sate",
      Harga :"20.000"
    },
    {
      NamaMakanan:"soto",
      Harga :"10.000"
    },
    {
      NamaMakanan:"uduk",
      Harga :"10.000"
    },

    {
      NamaMakanan:"nasi kuning",
    Harga :"15.000"
    },
    {
      NamaMakanan:"ayam geprek",
      Harga :"15.000"
    },
    {
      NamaMakanan:"pece lele",
      Harga :"15.000"
    },

    {
      NamaMakanan:"pece",
      Harga :"15.000"
    },
    {
      NamaMakanan:"mie ayam",
      Harga :"15.000"
    },

];

class MenuMakanan extends Component {
  render() {
    return (
      <div>
      <h3>daftar makanan faforite</h3>

      <table>
        <tbody>
          <tr>
            {DaftarMakanan.map((data,index) => {
              return (
                <td key={index}>
                  <img src={data.img}
                  alt="product makanan"
                  width="150"
                  height="100"
                  />
                  <center>
                    <p>{data.NamaMakanan}</p>
                    <p>harga : Rp.{data.Harga}</p>
                  </center>
                </td>
              );

            })}
            </tr>
        </tbody>
      </table>
      <h4>list makanan</h4>
      {listmakanan.map ((data,index) => {
        return (
          <div key={index}>

            <p>{data.NamaMakanan} |  harga : Rp.{data.Harga}</p>

            </div>
        )
      })}
      <FormMakanan />
        </div>
    );
  }
  }

export default MenuMakanan;

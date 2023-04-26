import React from 'react'
import { Link } from 'react-router-dom'

const AgriculturalProducts = () => {
  return (
    <div className='product-container'>
      <div className="product-content">
        <div className="search-bar">
          <form action="">
            <h3>Companies</h3>
            <button type='submit' className='search'> <i className="fa fa-search"></i> </button>
            <input type="text" placeholder='Search for companies by name' name='search' />
            <button className='filter'> <i className="fa fa-filter"></i> </button>
          </form>
        </div>
      </div>
      <div className="product-table">
        <table>
          <tr>
            <th >COMPANY NAME</th>
            <th>SECTOR</th>
            <th style={{textAlign: 'center'}}>SUB-SECTOR</th>
            <th style={{textAlign: 'center'}}>PRODUCTS</th>
            <th>ACTION</th>
          </tr>
          <tr>
            <td>Jaye Farms</td>
            <td>Agriculture</td>
            <td  style={{textAlign: 'center'}}>Crop Production</td>
            <td  style={{textAlign: 'center'}}>Fruits & Vegetables</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>Lagos Farming Complex</td>
            <td>Agriculture</td>
            <td>Crop Production</td>
            <td style={{textAlign: 'center'}}>Maize</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>Mabo palm Oil Company</td>
            <td>Agriculture</td>
            <td>Crop Production</td>
            <td style={{textAlign: 'center'}}>Palm oil</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>Tuber Center</td>
            <td>Agriculture</td>
            <td>Crop Production</td>
            <td style={{textAlign: 'center'}}>Yams, Potatoes, Onions, Ginger</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>Kerece Grain Farm</td>
            <td>Agriculture</td>
            <td>Crop Production</td>
            <td style={{textAlign: 'center'}}>Rice, Grains</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default AgriculturalProducts

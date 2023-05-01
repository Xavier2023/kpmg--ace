import React from 'react'
import { Link } from 'react-router-dom'

const ChemicalProducts = () => {
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
        <table className='industrial-table'>
          <tr>
            <th >COMPANY NAME</th>
            <th>SECTOR</th>
            <th style={{textAlign: 'center'}}>SUB-SECTOR</th>
            <th style={{textAlign: 'center'}}>PRODUCTS</th>
            <th>ACTION</th>
          </tr>
          <tr>
            <td>Irene Chemicals</td>
            <td>Industrial</td>
            <td  style={{textAlign: 'center'}}>Chemial & Pharmaceuticals</td>
            <td  style={{textAlign: 'center'}}>Printing inks and Coating</td>
            <td><Link to='/company' className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>Somart</td>
            <td>Industrial</td>
            <td style={{textAlign: 'center'}}>Food, Beverages & Tobacco</td>
            <td style={{textAlign: 'center'}}>Cassava, Food Grade Starch</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>Soxia Industries</td>
            <td>Industrial</td>
            <td style={{textAlign: 'center'}}>Food, Beverages & Tobacco</td>
            <td style={{textAlign: 'center'}}>Cassava Starch</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>HilaChem limted</td>
            <td>Industrial</td>
            <td style={{textAlign: 'center'}}>Chemial & Pharmaceuticals</td>
            <td style={{textAlign: 'center'}}>Electrolytic Iron</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
          <tr>
            <td>Lonart Oli & Chemicals</td>
            <td>Industrial</td>
            <td style={{textAlign: 'center'}}>Chemial & Pharmaceuticals</td>
            <td style={{textAlign: 'center'}}>Polyvinyl Acetate (PVA) Resins</td>
            <td><Link className='btn btn-outline-primary'>View</Link></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ChemicalProducts

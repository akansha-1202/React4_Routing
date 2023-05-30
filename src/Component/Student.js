import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Student = () => {
  return (
    <>
    <NavBar/>
    <div>
      <div className='heading'>
      <h1>Student Details</h1>
      <button>Update</button>
      </div>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
          <td>MERN</td>
          <td>October</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Tanay</td>
          <td>23</td>
          <td>MEAN</td>
          <td>November</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Ron</td>
          <td>27</td>
          <td>MERN</td>
          <td>December</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Ammy</td>
          <td>29</td>
          <td>MERN</td>
          <td>January</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Rim</td>
          <td>24</td>
          <td>MEAN</td>
          <td>February</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Naman</td>
          <td>25</td>
          <td>MERN</td>
          <td>March</td>
          <td><Link>Edit</Link></td>
        </tr>
      </table>
    </div>
    </>
  )
}

export default Student
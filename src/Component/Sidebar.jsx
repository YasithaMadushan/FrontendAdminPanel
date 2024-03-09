import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsCart3, BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsFillMenuButtonWideFill, BsGrid1X2Fill, BsListCheck, BsPeopleFill } from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {

    const navigate = useNavigate();
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className="sidebar-title">
        <div className="sidebar-brand">
            <BsCart3 className='icon_header'/>SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
        <a href='/'><BsGrid1X2Fill className='icon' />Dashboard</a>
        </li>
        <li className='sidebar-list-item'>
        <a href='/products'><BsFillArchiveFill className='icon'/>Products</a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGrid3X3GapFill className='icon'/>Category
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsPeopleFill className='icon'/>Customer
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsListCheck className='icon'/>Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillMenuButtonWideFill className='icon'/>Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Setting
            </a>
        </li>
    </ul>

    </aside>
  )
}

export default Sidebar
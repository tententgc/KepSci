import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/admin.sidebar.module.css";
import Link from 'next/link'
import {useState} from 'react';

export default function AdminLayout() {
    const [isActive, setIsActive] = useState(false);

    const active = event => {
        setIsActive(current => !current);
    }
    return(
        <>
            <sidebar className="h-screen w-72 flex">
                <div className="sidebar-head d-flex align-items-center">
                    <div className="me-auto">
                        <h5 className="mb-0 text-color">Admin Dashboard</h5>
                    </div>
                    <div>
                        <button className="sidebar-btn mb-0" type="button" onClick={active}><FontAwesomeIcon icon={faBars} size="lg"/></button>
                    </div>
                </div>
                <hr
                    style={{
                        background: 'lime',
                        color: 'lime',
                        borderColor: 'lime',
                        height: '3px',
                    }}
                />
                <div className="sidebar-body">
                    <div className="sidebar-section">
                        <div className="side-item">
                            <a className="side-link" href="/admin/dashboard"><i className="fas fa-chart-line"></i> ภาพรวมร้านค้า</a>
                        </div>
                    </div>
                    <div className="sidebar-section">
                        <div className="sidebar-title">
                            ตั้งค่าทั่วไป
                        </div>
                        <div className="side-item">
                            <a className="side-link" href="/admin/edit/website"><i className="fad fa-tools"></i> ตั้งค่าข้อมูลเว็ปไซต์</a>
                        </div>
                        <div className="side-item">
                            <a className="side-link" href="/admin/edit/user"><i className="fad fa-user"></i> ตั้งค่าข้อมูลผู้ใช้งาน</a>
                        </div>
                    </div>
                    <div className="sidebar-section">
                        <div className="sidebar-title">
                            จัดการร้านค้า
                        </div>
                        <div className="side-item">
                            <a className="side-link" href="/admin/edit/shop/id"><i className="fad fa-store"></i> ร้านค้าไอดีเกม</a>
                        </div>
                        <div className="side-item">
                            <a className="side-link" href="/admin/edit/shop/stock"><i className="fad fa-store"></i> ร้านค้าคีย์</a>
                        </div>
                    </div>
                    <div className="sidebar-section">
                        <div className="sidebar-title">
                            จัดการสินค้า
                        </div>
                        <div className="side-item">
                            <a className="side-link" href="/admin/edit/product/id"><i className="fad fa-shopping-basket"></i> สินค้าไอดีเกม</a>
                        </div>
                        <div className="side-item">
                            <a className="side-link" href="/admin/edit/product/keys"><i className="fad fa-shopping-basket"></i> สินค้าคีย์</a>
                        </div>
                    </div>
                </div>
            </sidebar>
            <div className={styles.main+" "}>

            </div>
        </>
    )
}
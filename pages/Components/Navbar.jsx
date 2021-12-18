import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
    return (
        <>
          <header>
      <div className="second-header">
        <div className="second-header_1 header-logo d-flex justify-content-between align-items-center ">
          <div className="logo ">
            {/* <Link href=""> */}
              {" "}
              <a>
              <Image src='/logo.png' width={129} height={45} alt="" />
              </a>
            {/* </Link> */}
          </div>
          <div className="items  ">
            <ul className=" ul-element">
              <li>
                <Link
                  href="KaayHome"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }
                >
                 <a> Kaay Home</a>
                </Link>
              </li>
              <li>
                <Link
                  href="KaayCommunity"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }                >
                  <a>Kaay Community </a>
                </Link>
              </li>
              <li>
                <Link
                  href="KaayGurukul"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }
                >
                 <a>Kaay Gurukul</a>
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
        </div>
      </header>
   
        </>
    )
}

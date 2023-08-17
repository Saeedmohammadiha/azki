"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import logo from "../../assets/icons/logo.svg";
import profileIcon from "../../assets/icons/user.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [name, setName] = useState("");

  useEffect(() => {
    //show the username on pathname change
    const data = localStorage.getItem("data");
    const objData = data ? JSON.parse(data || "") : null;
    objData && setName(objData.name + " " + objData.lastName);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" />
          </Link>
        </li>
        <li>
          <h3>سامانه مقایسه و خرید آنلاین بیمه</h3>
        </li>
        <li>
          {name ? (
            <div className={styles.username}>
              <Image src={profileIcon} alt="Profile Icon" />
              <span> {name}</span>
            </div>
          ) : (
            <Link href={"/"}>ثبت نام</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

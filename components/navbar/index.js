"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import logo from "../../assets/icons/logo.svg";
import profileIcon from "../../assets/icons/user.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [name, setName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    name && setName(name);
  }, []);

  return (
    <navbar className={styles.navbar}>
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
    </navbar>
  );
}

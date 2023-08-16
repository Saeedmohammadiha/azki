import Image from "next/image";
import styles from "./style.module.scss";
import logo from "../../assets/icons/logo.svg";
export default function Navbar() {
  return (
    <navbar className={styles.navbar}>
      <ul>
        <li>
          <Image src={logo} alt="logo" />
        </li>
        <li>
          <h3>سامانه ثبت نام خوردد</h3>
        </li>
        <li>
          <a>ثبت نام</a>
        </li>
      </ul>
    </navbar>
  );
}

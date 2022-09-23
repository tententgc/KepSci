import styles from "../styles/footer.module.css";
export default function Navbar() {
    return(
        <div className={styles.footer+" py-2 px-4"}>
            <p className=" text-center">© 2022 Department of Mathematics, Faculty of Science, KMUTT</p>
        </div>
    )
}
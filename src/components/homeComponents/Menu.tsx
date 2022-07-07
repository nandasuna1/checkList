import React from "react";
import { CheckCircle, Gear, UserCircle } from 'phosphor-react'
import styles from './Menu.module.scss';


export function Menu () {
    return (
        <div className={styles.menu}>
            <nav >
              <section>
                  <UserCircle size={60} color="#ffffff" weight='light'/>
              </section>

              <main>
              </main>
              {/* <section className="mx-auto my-">
                <Gear size={60} color="#ffffff" weight='light'/>
              </section> */}
          </nav>

        </div>
    )
}
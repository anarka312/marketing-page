import React from 'react'
import styles from './Services.module.css'

const Services = () => {
  return (
    <section className="container">
        <div className={styles.services_section}>
            <div className={styles.services_content}>
                <h3>Our Services</h3>
                <h2>We Provide</h2>
                <p>Nunc nonummy metus. Donec elit libero, sodales nec,<br/> volutpat a, suscipit non, turpis.</p>
            </div>
            <div className={styles.services_cards}>
                
            </div>
        </div>
    </section>
  )
}

export default Services
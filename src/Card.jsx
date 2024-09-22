import styles from './Card.module.css'

export function Card({ title, price, description, img , setStore, store})  {
    
    const addToCart = (title) => {
        setStore((prev) => [...prev, title])
        localStorage.setItem('cart', JSON.stringify([...store, title]))
    }
    return <div className={styles.card} onClick={() =>addToCart(title, )}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p className={styles.price}>{price }$</p>

        
    </div>
}

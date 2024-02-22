import React from 'react'

function Article({ title, date="January 1, 1970", preview, minutes }) {

    const coffeeRead = () => {
        if (minutes <= 5) {
            return `☕️ ${minutes} min read`
        }else if (minutes >= 5) {
            return `☕️☕️ ${minutes} min read`
        }else if (minutes ) {}
    }
  
    return (
    <article>
        <h3>{title}</h3>
        <small>{date} {coffeeRead} • {minutes} min read</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article
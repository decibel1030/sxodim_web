import React from 'react'
import "../assets/css/content.css"
import Map from './Map'
export default function 
() {
  return (
    <div class="container">
    <section class="banner">
      <h1>Добро пожаловать на Sxodim</h1>
      <p>Ваш гид по городским мероприятиям и активностям!</p>
    </section>

    <section class="filters">
      <div class="filter">Все события</div>
      <div class="filter">Концерты</div>
      <div class="filter">Кино</div>
      <div class="filter">Фестивали</div>
      <div class="filter">Театр</div>
    </section>

    <section class="recommended">
      <h2>Рекомендуемые события</h2>


      <div class="event-card">
        <img src="https://via.placeholder.com/100" alt="Концерт"></img>
        <div>
          <h3>Концерт группы "Imagine Dragons"</h3>
          <p>Дата: 10 ноября</p>
          <p>Место: Центральный парк</p>
          <button>Подробнее</button>
        </div>
      </div>

      <div class="event-card">
        <img src="https://via.placeholder.com/100" alt="Фестиваль"></img>
        <div>
          <h3>Кинофестиваль</h3>
          <p>Дата: 12 ноября</p>
          <p>Место: Кинотеатр "Планета"</p>
          <button>Подробнее</button>
        </div>
      </div>
    </section>


    <section class="map-section">
      <h2>Карта событий</h2>
      <p>Находите мероприятия в вашем районе с помощью карты!</p>
      <Map/>
    </section>

    <section class="subscribe">
      <h2>Подпишитесь на уведомления</h2>
      <p>Получайте самые свежие обновления о событиях!</p>
      <input type="email" placeholder="Введите ваш email"></input>
      <button>Подписаться</button>
    </section>
  </div>
  )
}

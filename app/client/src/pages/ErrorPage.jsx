import React from 'react'
import Header from '../components/header'
import "../assets/css/errorPage.css"
export default function ErrorPage() {
  return (
    <React.Fragment>
      <Header />
      <div className="error-page">
        <h1>Ошибка 404</h1>
        <p>Такой страницы не существует</p>
        <a href="/">Вернуться на главную</a>
      </div>
    </React.Fragment>
  )
}

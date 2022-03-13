import React from 'react';
import '../style/style.css'
import Timer from '../img/icons8-time-24 (1).png'


function News(){
    return(
        <div className="news_container">
            <div className="row">
                <div className="col_left">
                    <div className="news_block" id="peremennaya">
                        <h2 className="news_description">В Тольятти возобновят выпуск автомобилей Lada</h2>
                        <div>
                            <p className="news_timer"><img className="timer" src={Timer}></img>3дн. назад</p>
                            <p className="news_description_p">Завод АвтоВАЗа в Тольятти с 16 по 18 марта возобновит выпуск нескольких моделей авто. Об этом сообщил «Автостат». Речь идет исключительно о Lada Granta и Niva Legend...</p>
                        </div>
                    </div>
                </div>
                <div className="col_right">
                    <div className="news_block" id="peremennaya1">
                        <h2 className="news_description">Санкционный транзит, что случится с перевозками</h2>
                        <div>
                            <p className="news_timer"><img className="timer" src={Timer}></img>6дн. назад</p>
                        </div>
                    </div>
                    <div className="news_block" id="peremennaya2">
                    <h2 className="news_description">Лучшие машины для перевозок</h2>
                        <div>
                            <p className="news_timer"><img className="timer" src={Timer}></img>2нд. назад</p>
                        </div>
                    </div>
                    <div className="news_block" id="peremennaya3">
                    <h2 className="news_description">Еще одна новость фантазии нема</h2>
                        <div>
                            <p className="news_timer"><img className="timer" src={Timer}></img>3нд. назад</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default News();
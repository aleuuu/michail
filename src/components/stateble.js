import React from 'react';
import {Link} from 'react-router-dom';
import '../style/style.css'

function Stateble(params) {
    return(
      <div className="ul_list">
        <div>
          <h1 className="main_text">
            ГРУППА КОМПАНИЙ «ВИКТОРИ»
          </h1>
          <h3 className="description">
            это крупная транспортно-экспедиционная<br></br>
            организация
          </h3>
        </div>
        <div className="backgroundLines">
          <ul className="list_menu">
            <Link to="/" className='href' ><li>о компании</li></Link>
            <Link to="/news" className='href' ><li>новости</li></Link>
            <Link to="/group" className='href' ><li>виктори групп</li></Link>
            <Link to="/vacation" className='href' ><li>вакансии</li></Link>
          </ul>
        </div>
      </div>  
    )
}

export default Stateble()
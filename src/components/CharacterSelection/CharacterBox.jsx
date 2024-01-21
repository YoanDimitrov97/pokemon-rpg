import React from 'react'
import CSS from './CharacterBox.module.css'
import Electric from '../../assets/electric.png'
import Water from '../../assets//water.png'
import Grass from '../../assets/grass.png'
import Fire from '../../assets/fire.png'

const elementImages = {
    Fire:Fire,
    Grass:Grass,
    Water:Water,
    Electric:Electric,
}

function CharacterBox(props) {
  return (
    <div className={CSS.box} style={{ backgroundColor: `var(--${props.colorScheme.toLowerCase()})` }}>
        <img src={elementImages[props.colorScheme]}  className={CSS.typing_mask} />
        <div className={CSS.dim_mask}></div>
        <img src={props.sprite} alt="" className={CSS.sprite}/>
        <p>{props.name}</p>
    </div>
  )
}

export default CharacterBox
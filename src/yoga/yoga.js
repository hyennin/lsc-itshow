import React from 'react';
import meditation1 from './img/meditation1.png'
import meditation2 from './img/meditation2.png'
import meditation3 from './img/meditation3.png'
import meditation4 from './img/meditation4.png'
import yoga1 from './img/yoga1.png'
import yoga2 from './img/yoga2.png'
import yoga3 from './img/yoga3.png'
import yoga4 from './img/yoga4.png'
import './yoga.css';

function Yoga () {
    return (
        <div className='Card1'>
            <div className='c1image'>
                <h3>오늘은 명상 어때요?</h3>
                <hr width = "90%"></hr>
                <a href="https://www.youtube.com/watch?v=yiysD0Jl2Wo">
                    <img className='meditation1' alt="image" src={meditation1} />
                </a>
                <a href="https://www.youtube.com/watch?v=dZewQEbQQM0ㄴ">
                    <img className='meditation2' alt="image" src={meditation2} />
                </a>
                <a href="https://www.youtube.com/watch?v=CNYYWuH_Fcc">
                    <img className='meditation3' alt="image" src={meditation3} />
                </a>
                <a href="https://www.youtube.com/watch?v=OF1UccGXPWM">
                    <img className='meditation4' alt="image" src={meditation4} />
                </a>
                <hr width = "90%"></hr>
            </div>
            <div className='c2image'>
                <h3>몸을 유연하게 해볼까요가?</h3>
                <hr width = "90%"></hr>
                <a href="https://www.youtube.com/watch?v=1W9gMxLoW6Q">
                    <img className='yoga1' alt="image" src={yoga1} />
                </a>
                <a href="https://www.youtube.com/watch?v=6bq2uUN-oSY">
                    <img className='yoga2' alt="image" src={yoga2} />
                </a>
                <a href="https://www.youtube.com/watch?v=_aLF5C40hY8">
                    <img className='yoga3' alt="image" src={yoga3} />
                </a>
                <a href="https://www.youtube.com/watch?v=OBTl49bVk94">
                    <img className='yoga4' alt="image" src={yoga4} />
                </a>
                <hr width = "90%"></hr>
            </div>
        </div>
        
    )
}


export default Yoga;
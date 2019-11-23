import React, { useEffect } from 'react';
import Div from 'styled-kit/Div';

import { peopleRanking } from '../constants/constants'

import '../App.css';
import RankingRow from '../components/RankingRow';

const RankingPage = () => {
    const animation = () => {
        const bars = document.querySelectorAll('.bar');

        bars.forEach((bar, index) => {
            const element = peopleRanking.find(person => person.id === index + 1);
            bar.style.width = element.percentage;
        })
    }

    useEffect(() => {
        animation()
    }, [])

    return (
        <Div column>
            {peopleRanking.map(person => {
                return (
                    <RankingRow person={person} id={person.id} />
                )
            })}
        </Div>
    )
}

export default RankingPage

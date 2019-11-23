import React from 'react';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

const RankingRow = ({ person }) => (
    <Wrapper row itemsCenter style={{ background: person.login ? '#91E36B': 'transparent'}}>
        <Number>{`${person.id}.`}</Number>
        <AvatarWrapper>
            <Avatar src={person.avatar} />
        </AvatarWrapper>
        <Div column itemsStart>
            <Name >{person.name}</Name>
            <div className="progress" id={person.id}>
                <div className="bar shadow leaf"></div>
            </div>
        </Div>
        <PointsCount>{person.points}</PointsCount>
    </Wrapper>
)

export default RankingRow

const Wrapper = styled(Div)`
    height: 60px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.25);
`

const Number = styled(Div)`
    margin-right: 20px;
`

const Name = styled.p`
    margin: 0;
    margin-bottom: 5px;
`

const AvatarWrapper = styled(Div)`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`

const Avatar = styled.img`
 width: 100%;
`

const PointsCount = styled.p`
    margin: 0;
    margin-left: 10px;
    font-size: 16px;
    animation-name: showup;
    animation-duration: 4s;
      
      /* Standard syntax */
      @keyframes showup {
        from {opacity: 0;}
        to {opacity: 1;}
      }    
`
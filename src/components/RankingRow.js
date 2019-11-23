import React from 'react';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

const RankingRow = ({ person }) => (
    <Wrapper row itemsCenter>
        <Number>{`${person.id}.`}</Number>
        <AvatarWrapper>
            <Avatar src={person.avatar} />
        </AvatarWrapper>
        <Div column>
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
`

const Number = styled(Div)`
    margin-right: 20px;
`

const Name = styled.p`
    margin: 0;
    font-size: 16px;
`

const AvatarWrapper = styled(Div)`
    width: 40px;
    height: 40px;
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
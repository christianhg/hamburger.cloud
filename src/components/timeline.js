import React from 'react';
import styled from 'styled-components';

const TimelineWrapper = styled.ol`
  padding-left: 1rem;
  position: relative;
  &:before {
    background-color: ${props => props.backgroundColor};
    border-radius: 0.5rem;
    content: '';
    display: block;
    left: 0.75rem;
    position: absolute;
    height: 100%;
    width: 0.25rem;
  }
`;

const TimelineEvent = styled.li`
  list-style: none;
  padding-left: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  position: relative;
  &:before {
    background-color: ${props => props.backgroundColor};
    border-radius: 50%;
    content: '';
    display: block;
    left: -0.5rem;
    top: 1.5rem;
    position: absolute;
    height: 0.75rem;
    width: 0.75rem;
  }
`;

const TimelineDate = styled.span`
  background-color: ${props => props.backgroundColor};
  border-radius: 0.15rem;
  color: #fff;
  display: inline-block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;
  &:before {
    border-style: solid;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-color: transparent ${props => props.backgroundColor} transparent
      transparent;
    content: '';
    display: block;
    height: 0;
    left: -0.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }
`;

const TimelineTitle = styled.span`
  display: block;
`;

export const Timeline = ({ backgroundColor, color, events }) => (
  <TimelineWrapper backgroundColor={backgroundColor} color={color}>
    {events.map(event => (
      <TimelineEvent backgroundColor={backgroundColor} key={event.id}>
        <TimelineDate backgroundColor={backgroundColor}>
          {event.date}
        </TimelineDate>
        <TimelineTitle>{event.title}</TimelineTitle>
      </TimelineEvent>
    ))}
  </TimelineWrapper>
);

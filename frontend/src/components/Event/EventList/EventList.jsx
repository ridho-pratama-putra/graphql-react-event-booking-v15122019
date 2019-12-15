import React from 'react';
import './EventList.css';
import PropTypes from 'prop-types';
import EventItem from './EventItem/EventItem';

const EventList = (props) => {
  const { events } = props;
  const eventsToBeRendered = events.map((event) => (
    <EventItem
      key={event._id}
      eventId={event._id}
      title={event.title}
      price={event.price}
      date={event.date}
      userId={props.authUserId}
      creator={event.creator._id}
      onClickDetail={props.onViewDetail}
    />
  ));

  return <ul className="event__list">{eventsToBeRendered}</ul>;
};

EventList.propTypes = {
  events: PropTypes.anyOf(Object),
  authUserId: PropTypes.anyOf(Object),
  onViewDetail: PropTypes.anyOf(Object),
};

EventList.defaultProps = {
  events: {},
  authUserId: {},
  onViewDetail: {},
};

export default EventList;

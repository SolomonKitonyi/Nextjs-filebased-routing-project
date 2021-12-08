import EventItem from './event-item';
function EventList(props) {
	const { items } = props;
	return (
		<ul>
			{items.map((event) => (
				<EventItem
					title={event.title}
					id={event.id}
					key={event.key}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
}

export default EventList;

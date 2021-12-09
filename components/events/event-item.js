import Link from 'next/link';
import Classes from './event-item.module.css';
function EventItem(props) {
	const { title, image, date, location, id } = props;
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '\n');
	const exploreLink = `/events/${id}`;
	return (
		<li className={Classes.item}>
			<img src={'/' + image} alt={title} />
			<div className={Classes.content}>
				<div className={Classes.summary}>
					<h2>{title}</h2>
					<div className={Classes.date}>
						<time>{humanReadableDate}</time>
					</div>
					<div className={Classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={Classes.actions}>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;

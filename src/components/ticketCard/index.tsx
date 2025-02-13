import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface IEventCard {
  title: string;
  description: string;
  image?: string;
  date: string;
  location: string;
}

const EventCard = ({ title, description, image, date, location }: IEventCard) => {
  const eventDate = new Date(date).toLocaleString();

  return (
    <div style={{ margin: '15px 0' }}>
      <Card>
        <CardHeader
          title={title}
        />
        {
          image && (
            <CardMedia
              component="img"
              height="194"
              image={image}
              alt="Eevent"
            />
          )
        }
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Location: {location}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Date: {eventDate}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default EventCard;

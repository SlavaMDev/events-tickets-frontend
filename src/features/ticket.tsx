import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import TicketCard from '../components/ticketCard';
import { TicketsState, loadTickets } from './reducers/ticketsSlice';
import { AuthState } from './reducers/authSlice';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const { auth, tickets } = useSelector((state: { auth: AuthState; tickets: TicketsState  }) => state);
  const { user, loading } = auth
  const { tickets: list = [], page, pages, loading: loadingTickets } = tickets;
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    // TODO implement types
    dispatch(loadTickets({ userType: user.type }));
  }, []);

  const nextPage = (_e: any, nextPage: number) => { // TODO implement types
    // @ts-ignore
    // TODO implement types
    dispatch(loadTickets({ userType: user.type, page: nextPage }));
  }

  const onSearch = () => {
    // @ts-ignore
    // TODO implement types
    dispatch(loadTickets({ userType: user.type, page: 1, query }));
  }

  if (loading || loadingTickets) {
    return (
      <>
        <Skeleton variant="rounded" height={60} />
        <Skeleton variant="rounded" height={60} />
        <Skeleton variant="rounded" height={60} />
      </>
    )
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <TextField
          label="Search"
          type="text"
          variant="outlined"
          required
          name="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button type="button" onClick={onSearch} variant="contained" color="primary">
          Search
        </Button>
      </div>
      {
        user.type === 'local' ? (
          <Grid container spacing={2}>
            {
              list?.map((ticket: any) => // TODO implement types
                <Grid item key={ticket._id} xs={4}>
                  <TicketCard
                    date={ticket.createdAt}
                    description={ticket.description}
                    title={ticket.title}
                    image={ticket?.image}
                    location={ticket.location}
                  />
                </Grid>
              )
            }
          </Grid>
        ) : (
          <>
            {
              list?.map((ticket: any) => // TODO implement types
                <TicketCard
                  key={ticket._id}
                  date={ticket.createdAt}
                  description={ticket.description}
                  title={ticket.title}
                  image={ticket?.image}
                  location={ticket.location}
                />
              )
            }
          </>
        )
      }
      <Pagination
        page={page}
        count={pages}
        onChange={nextPage}
      />
    </>
  )
}

export default HomePage;
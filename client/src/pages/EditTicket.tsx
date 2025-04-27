import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { retrieveTicket, updateTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';

const EditTicket = () => {
  const [ticket, setTicket] = useState<TicketData>({
    id: 0,
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: 1,
    assignedUser: null,
  });

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        if (state?.id) {
          const data = await retrieveTicket(state.id);
          setTicket(data);
        } else {
          console.error('No ticket ID provided in state.');
        }
      } catch (err) {
        console.error('Failed to retrieve ticket:', err);
      }
    };
    fetchTicket();
  }, [state]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (ticket && ticket.id) {
        await updateTicket(ticket.id, ticket);
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to update ticket:', error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTicket((prev) => ({
      ...prev,
      [name]: name === 'assignedUserId' ? Number(value) : value,
    }));
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Edit Ticket</h1>

        <label htmlFor="tName">Ticket Name</label>
        <textarea
          id="tName"
          name="name"
          value={ticket?.name || ''}
          onChange={handleChange}
        />

        <label htmlFor="tStatus">Ticket Status</label>
        <select
          id="tStatus"
          name="status"
          value={ticket?.status || ''}
          onChange={handleChange}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <label htmlFor="tDescription">Ticket Description</label>
        <textarea
          id="tDescription"
          name="description"
          value={ticket?.description || ''}
          onChange={handleChange}
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default EditTicket;

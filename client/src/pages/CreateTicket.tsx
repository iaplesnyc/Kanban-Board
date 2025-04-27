// filepath: client/src/pages/CreateTicket.tsx

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userAPI';
import Auth from '../utils/auth';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData>({
    id: 0,
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: 1,
    assignedUser: null,
  });

  const [users, setUsers] = useState<UserData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/login');
    } else {
      fetchUsers();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data || []);
    } catch (error) {
      console.error('Failed to retrieve users:', error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({
      ...prev,
      [name]: name === 'assignedUserId' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createTicket(newTicket);
      navigate('/');
    } catch (error) {
      console.error('Failed to create ticket:', error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Ticket</h1>

        <label htmlFor="tName">Ticket Name</label>
        <textarea
          id="tName"
          name="name"
          value={newTicket.name || ''} // Fallback to an empty string
          onChange={handleChange}
        />

        <label htmlFor="tStatus">Ticket Status</label>
        <select
          id="tStatus"
          name="status"
          value={newTicket.status || ''} // Fallback to an empty string
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
          value={newTicket.description || ''} // Fallback to an empty string
          onChange={handleChange}
        />

        <label htmlFor="tUserId">Assign to User</label>
        <select
          id="tUserId"
          name="assignedUserId"
          value={newTicket.assignedUserId?.toString() || ''} // Convert to string and fallback to empty
          onChange={handleChange}
        >
          {users.length > 0 ? (
            users
              .filter((user) => user.id !== null) // Filter out null IDs
              .map((user) => (
                <option key={user.id} value={user.id?.toString()}>
                  {user.username}
                </option>
              ))
          ) : (
            <option value="">No users available</option>
          )}
        </select>

        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;

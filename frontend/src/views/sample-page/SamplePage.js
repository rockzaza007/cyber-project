import React, { useState, useEffect } from 'react';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Button, TextField, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { getUsers, addUser, updateUser, deleteUser } from 'src/api/apiUser';

const SamplePage = () => {
  const [users, setUsers] = useState(null);
  const [newUserData, setNewUserData] = useState({ username: '', email: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleOpenModal = (editMode = false, usersId = null) => {
    setIsEdit(editMode);
    if (editMode) {
      const userToEdit = users.find(users => users.id === usersId);
      setNewUserData({
        username: userToEdit.username,
        email: userToEdit.email
      });
      setSelectedUserId(usersId);
    } else {
      setNewUserData({ username: '', email: '' });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsEdit(false);
    setSelectedUserId(null);
  };

  const handleAddOrUpdateUser = async () => {
    if (isEdit && selectedUserId) {
      await updateUser(selectedUserId, newUserData);
    } else {
      await addUser(newUserData);
    }
    fetchData();
    handleCloseModal();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  return (
    <PageContainer title="User Manangement" description="this is Sample page">
      <DashboardCard title="Strapi">
        <Typography variant="h6">User List</Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => handleOpenModal()}>Add Student</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>user</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((users) => (
              <TableRow key={users.id}>
                <TableCell>{users.id}</TableCell>
                <TableCell>{users.username}</TableCell>
                <TableCell>{users.email}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={() => handleOpenModal(true, users.id)}>Edit</Button>
                  <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(users.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardCard>
      <Modal open={modalOpen} onClose={handleCloseModal} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
      }}>
        <div style={{backgroundColor:"white",padding:"5%",borderRadius:"12px"}}>
          <Typography variant="h6">{isEdit ? 'Edit Student' : 'Add Student'}</Typography>
          <TextField
            name="username"
            label="username"
            value={newUserData.username}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
          />
          <TextField
            name="email"
            label="email"
            value={newUserData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddOrUpdateUser}>{isEdit ? 'Update' : 'Add'}</Button>
        </div>
      </Modal>
    </PageContainer>
  );
};

export default SamplePage;

useEffect(() => {
    // Apply search filter
    const filteredData = users.filter((user) =>
      Object.values(user).some(
        (value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredUsers(filteredData);
    setCurrentPage(1);
    updateTotalPages(filteredData);
  }, [searchTerm, users]);

  const updateTotalPages = (data) => {
    setTotalPages(Math.ceil(data.length / pageSize));
  };

  const handleEditClick = (user) => {
    // Set the edited user when the edit button is clicked
    setEditedUser(user);
  };

  const handleSaveEdit = () => {
    // Implement edit logic in memory
    const updatedUsers = users.map((u) => (u.id === editedUser.id ? editedUser : u));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setEditedUser({
      id: '',
      name: '',
      email: '',
      role: '',
    });
  };

  const handleDeleteClick = (userId) => {
    // Implement delete logic in memory
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRows(selectedRows.filter((id) => id !== userId));
  };

  const handleCheckboxChange = (userId) => {
    // Toggle selected row
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(userId)) {
        return prevSelectedRows.filter((id) => id !== userId);
      } else {
        return [...prevSelectedRows, userId];
      }
    });
  };

  const handleSelectAll = () => {
    // Select or deselect all rows on the current page
    const allIdsOnPage = filteredUsers.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    ).map((user) => user.id);

    if (selectedRows.length === allIdsOnPage.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(allIdsOnPage);
    }
  };

  const handleDeleteSelected = () => {
    // Delete selected rows in memory
    const updatedUsers = users.filter((user) => !selectedRows.includes(user.id));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRows([]);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from './actions';

const Users = props => {
  const { isLoading, users } = props;
  useEffect(() => {
    console.log('component did mount');
    props.actions.getUsers();
  }, []);

  if (isLoading) {
    return <p>Wait...</p>;
  }
  return (
    <>
      <h2>USERS LIST</h2>
      {users.map(u => (
        <p key={u.email}>{u.email}</p>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.userReducer.isLoading,
  users: state.userReducer.users || []
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getUsers
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

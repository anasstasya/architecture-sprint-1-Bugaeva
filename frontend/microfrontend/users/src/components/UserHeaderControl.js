import "../index.css"

 function UserHeaderControl ({onSignOut, email }) {
  function handleSignOut(){
    onSignOut();
  }
  return (
      <div>User Header Control</div>
      )
}

export default UserHeaderControl;  
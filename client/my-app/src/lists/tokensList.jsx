import { React} from 'react';
import { NavLink } from 'react-router-dom';

export default function TokensList(props) {

  return (
    props.tokens.map( one_token => 
      // need to replace the _id with what the actual thing is
      <div key={one_token._id}> 
      {/* need to change the "token_name" to the actual object key */}
      {/* here will we will also need to add an image or something but let's start with the name */}
        <NavLink to={`elections/${one_token._id}`}>{one_token.token_name}</NavLink>
      </div>
      )
  )
}

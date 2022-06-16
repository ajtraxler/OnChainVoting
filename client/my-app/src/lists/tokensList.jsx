import { React} from 'react';
import { NavLink } from 'react-router-dom';

export default function TokensList(props) {

  return (
    props.tokens.map( token => 
      // need to replace the _id with what the actual thing is
      <div key={token.token_id}> 
      {/* need to change the "token_name" to the actual object key */}
      {/* here will we will also need to add an image or something but let's start with the name */}
        <NavLink to={`elections/${token.token_id}`}>{token.token_name}</NavLink>
      </div>
      )
  )
}

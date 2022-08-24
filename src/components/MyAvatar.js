// hooks
import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();

  return (
    <Avatar
      // src={user?.photoURL}
      alt={'Arthmate'}
      color={user?.photoURL ? 'default' : createAvatar('Arthmate').color}
      {...other}
    >
      {createAvatar('Arthmate').name}
    </Avatar>
  );
}

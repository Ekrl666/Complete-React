import styles from './UserList.module.css';
import Card from '../components/UI/Card';

const UserList = (props) => {
    const userListContent = props.users.map((user) => {
        return <p key={user.id}>{`${user.name} ( ${user.age} years old)`}</p>
    })

    return (
        <Card className={styles.userList}>
            {userListContent}
        </Card>
    )
};

export default UserList;
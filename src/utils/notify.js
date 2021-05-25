import {notification } from 'antd';


const notificationWithIcon = (type,message,description) => {
    notification[type]({
    message: message,
    description: description
    });
};

export default notificationWithIcon;

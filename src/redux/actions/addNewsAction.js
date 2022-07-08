import constants from '../../constants/constants';

const addNewsAction = ({
  userId, tag, content, title,
}) => ({
  type: constants.ADD_NEWS,
  payload: {
    userId,
    title,
    tag,
    content,
  },
});

export default addNewsAction;

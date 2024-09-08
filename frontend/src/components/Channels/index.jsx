import { useDispatch, useSelector } from 'react-redux';
import {
  setClickedChannel,
  setCurrentChannel,
  setCurrentModalName,
  setCurrentModalShow,
} from '../../services/uiSlice';
import ChannelsHeader from './ChannelsHeader';
import ChannelsBody from './ChannelsBody';

const Channels = ({ data }) => {
  const dispatch = useDispatch();
  const currentChannelName = useSelector((state) => state.ui.currentChannel.name);

  const handleSetCurrentChannel = (name, id) => () => {
    dispatch(setCurrentChannel({ name, id }));
  };
  const handleAddChannel = () => {
    dispatch(setCurrentModalShow({ show: true }));
    dispatch(setCurrentModalName({ name: 'addChannel' }));
  };
  const handleDeleteChannel = () => {
    dispatch(setCurrentModalShow({ show: true }));
    dispatch(setCurrentModalName({ name: 'deleteChannel' }));
  };
  const handleRenameChannel = () => {
    dispatch(setCurrentModalShow({ show: true }));
    dispatch(setCurrentModalName({ name: 'renameChannel' }));
  };
  const handleClickChannel = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.getAttribute('id');
    const name = e.currentTarget.getAttribute('name');
    dispatch(setClickedChannel({ name, id }));
  };
  const handlers = {
    handleSetCurrentChannel,
    handleDeleteChannel,
    handleRenameChannel,
    handleClickChannel,
  };

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <ChannelsHeader handleClick={handleAddChannel} />
      <ChannelsBody data={data} currentChannelName={currentChannelName} handlers={handlers} />
    </div>
  );
};

export default Channels;

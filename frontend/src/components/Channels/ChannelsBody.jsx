import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const ChannelsBody = ({ data, currentChannelName, handlers }) => {
  const renderButton = (name, id) => (
    <button
      type="button"
      className={`w-100 text-start rounded-0 btn ${currentChannelName === name ? 'btn-secondary' : ''}`}
      onClick={handlers.handleSetCurrentChannel(name, id)}
    >
      <span className="me-1">#</span>
      {name}
    </button>
  );
  const renderDropdown = (name, id) => (
    <Dropdown
      title={name}
      align="end"
      variant={currentChannelName === name ? 'secondary' : 'none'}
      drop="down"
    >
      <Button
        className="w-75 text-start rounded-0 text-truncate"
        variant={currentChannelName === name ? 'secondary' : 'none'}
        onClick={handlers.handleSetCurrentChannel(name, id)}
      >
        <span className="me-1">#</span>
        {name}
      </Button>

      <Dropdown.Toggle className="w-25 rounded-0" split variant={currentChannelName === name ? 'secondary' : 'none'} />

      <Dropdown.Menu className="w-100">
        <Dropdown.Item onClick={handlers.handleDeleteChannel}>Удалить</Dropdown.Item>
        <Dropdown.Item onClick={handlers.handleRenameChannel}>Переименовать</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  const renderChannels = () => {
    if (data) {
      return data.map(({ id, name, removable }) => (
        <li key={id} id={`${id}`} name={`${name}`} className="nav-item w-100" onClick={handlers.handleClickChannel} role="presentation">
          {removable ? renderDropdown(name, id) : renderButton(name, id)}
        </li>
      ));
    }
    return null;
  };

  return (
    <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {renderChannels()}
    </ul>
  );
};

export default ChannelsBody;

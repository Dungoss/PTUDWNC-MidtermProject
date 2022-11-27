import ListGroup from 'react-bootstrap/ListGroup';
import './index.css';

function GroupListPage() {

const GroupInfo = () => (
  <div>
    <ListGroup>
    <ListGroup.Item className='item'>Cras justo odio</ListGroup.Item>
    <ListGroup.Item className='item'>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item className='item'>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item className='item'>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item className='item'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </div>
)

  return (
    <div>
      <div className='group'>
        <GroupInfo></GroupInfo>
      </div>
      <div className='group'>
        <GroupInfo></GroupInfo>
      </div>

      <div className='group'>
        <GroupInfo></GroupInfo>
      </div>

      <div className='group'>
        <GroupInfo></GroupInfo>
      </div>
      <div className='group'>
        <GroupInfo></GroupInfo>
      </div>
      <div className='group'>
        <GroupInfo></GroupInfo>
      </div>

    </div>
  );

}

export default GroupListPage;
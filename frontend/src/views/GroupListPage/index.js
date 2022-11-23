import ListGroup from 'react-bootstrap/ListGroup';

function GroupListPage() {

const GroupInfo = () => (
  <div>
    <ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </div>
)

  return (
    <div>
      
      <GroupInfo></GroupInfo>
      <GroupInfo></GroupInfo>
      <GroupInfo></GroupInfo>
      <GroupInfo></GroupInfo>

    </div>
  );

}

export default GroupListPage;
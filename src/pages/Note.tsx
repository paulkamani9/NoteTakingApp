import { Row, Col, Stack, Badge, Button } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link } from "react-router-dom";

const Note = () => {
  const note = useNote();
  const { id, title, tags, body } = note;
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{title}</h1>
          {tags?.length > 0 && (
            <Stack gap={1} direction={"horizontal"} className="flex-wrap">
              {tags?.map((tag) => (
                <Badge key={id} className="text-truncate">
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="outline-danger">Danger</Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
    </>
  );
};
export default Note;

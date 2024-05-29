import { Modal, Stack, Form, Col, Row, Button } from "react-bootstrap";
import { Tag } from "../types/types";
type EditTagsModalProps = {
  availableTags: Tag[];
  show: boolean;
  handleClose: () => void;
  deleteTag: (id: string) => void;
  updateTag: (id: string, label: string) => void;
};
const EditTagsModal = ({
  availableTags,
  show,
  handleClose,
  deleteTag,
  updateTag,
}: EditTagsModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    onChange={(e) => {
                      updateTag(tag.id, e.target.value);
                    }}
                    type="text"
                    value={tag.label}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => {
                      deleteTag(tag.id);
                    }}
                    variant="outline-danger"
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditTagsModal;

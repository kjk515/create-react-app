import React from 'react';
import { Button, Form, Segment, TextArea, Modal } from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
class PostRegisterView extends React.Component {
  render() {
    const { open, post, onClose, onRegister, onChangePostProp } = this.props;

    return (
      <Modal open={open}>
        <Modal.Header>
          Post
          <div className="close-btn" onClick={onClose}>
            <span className="sr-only">Close</span>
          </div>
        </Modal.Header>
        <Modal.Content className="fluid">
          <Segment>
            <Form>
              <Form.Group>
                <label>Title</label>
                <Form.Input
                  width={16}
                  value={post.title || ''}
                  onChange={e => onChangePostProp('title', e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <label>Contents</label>
                <Form.Field width={16}>
                  <TextArea
                    rows={20}
                    value={post.contents || ''}
                    onChange={e => onChangePostProp('contents', e.target.value)}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={onRegister}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default PostRegisterView;

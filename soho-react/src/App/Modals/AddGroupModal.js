import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Tooltip,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
} from 'reactstrap';

import ManAvatar1 from "../../assets/img/man_avatar1.jpg"
import WomenAvatar4 from "../../assets/img/women_avatar4.jpg"


function AddGroupModal() {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const tooltipToggle = () => setTooltipOpen(!tooltipOpen);

    const AvatarTooltip = (props) => {

        const [tooltipOpen, setTooltipOpen] = useState(false);

        const toggle = () => setTooltipOpen(!tooltipOpen);

        return <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            target={"Tooltip-Avatar" + props.id}
            toggle={toggle}>
            {props.name}
        </Tooltip>
    };

    return (
        <div>
            <button className="btn btn-light" onClick={modalToggle} id="Tooltip-Add-Group">
                <i className="fa fa-users"></i>
            </button>
            <Tooltip
                isOpen={tooltipOpen}
                target={"Tooltip-Add-Group"}
                toggle={tooltipToggle}>
                New Group
            </Tooltip>
            <Modal className="modal-dialog-zoom" isOpen={modal} toggle={modalToggle} centered>
                <ModalHeader toggle={modalToggle}>
                    <i className="fa fa-users"></i> New Group
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="group_name">Group name</Label>
                            <InputGroup>
                                <Input type="text" name="group_name" id="group_name"/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <p>The group members</p>
                            <div className="avatar-group">
                                <figure className="avatar" id="Tooltip-Avatar1">
                                    <span className="avatar-title bg-success rounded-circle">T</span>
                                </figure>
                                <AvatarTooltip name="Tobit Spraging" id={1}/>

                                <figure className="avatar" id="Tooltip-Avatar2">
                                    <img src={WomenAvatar4} className="rounded-circle" alt="avatar"/>
                                </figure>
                                <AvatarTooltip name="Cloe Jeayes" id={2}/>

                                <figure className="avatar" id="Tooltip-Avatar3">
                                    <span className="avatar-title bg-warning rounded-circle">M</span>
                                </figure>
                                <AvatarTooltip name="Marlee Perazzo" id={3}/>

                                <figure className="avatar" id="Tooltip-Avatar4">
                                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                                </figure>
                                <AvatarTooltip name="Stafford Pioch" id={4}/>

                                <figure className="avatar" id="Tooltip-Avatar5">
                                    <span className="avatar-title bg-info rounded-circle">B</span>
                                </figure>
                                <AvatarTooltip name="Bethena Langsdon" id={5}/>

                                <a href="#/" title="Add friends" id="Tooltip-Avatar6">
                                    <figure className="avatar">
                                        <span className="avatar-title bg-primary rounded-circle">+</span>
                                    </figure>
                                </a>
                                <AvatarTooltip name="Add friends" id={6}/>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" name="description" id="description"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={modalToggle}>Create Group</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddGroupModal

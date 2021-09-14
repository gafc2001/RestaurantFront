import React ,{ Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Input, Label} from 'reactstrap';
import { useState} from "react";
export default function Notify() {
    
    const [state, setstate] = useState(false)
   const abrirModal=()=>{
        setstate(!state);
    }
        return(
            <>
            <div className="principal">
                <div className="secundario">
                    <Button color="success" onClick={abrirModal}>MOdal</Button>
                </div>
                <Modal isOpen={state}>
                    <ModalHeader>inicia</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="usuario">susuario</Label>
                            <Input type="text" id="usuario">
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">contssssa</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button>inicar</Button>

                    </ModalFooter>
                </Modal>
            </div>
            </>
        );
    }
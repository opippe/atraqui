import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose, from }) => {
    const [id, setId] = useState(dataEdit.id || "");
    const [name, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email || "");
    const [status, setStatus] = useState(dataEdit.id || "");

    const handleSave = () => {
        if (from === "cad_fila") {
            if (!id || !name || !status) return;
        }

        if (from === "cad_usuario") {
            if (!id || !name || !status || !email) return;
        }

        if (idAlreadyExists()) {
            return alert("ID já cadastrado!");
        }

        if (Object.keys(dataEdit).length) {
            data[dataEdit.index] = { id, name, email, status };
        }

        const newDataArray = !Object.keys(dataEdit).length
            ? [...(data ? data : []), { id, name, email, status }]
            : [...(data ? data : [])];

        localStorage.setItem(from, JSON.stringify(newDataArray));

        setData(newDataArray);

        onClose();
    };

    const idAlreadyExists = () => {
        if (dataEdit.id !== id && data?.length) {
            return data.find((item) => item.id === id);
        }

        return false;
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastro de Usuário</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl display="flex" flexDir="column" gap={4}>
                            <Box>
                                <FormLabel>ID</FormLabel>
                                <Input
                                    type="number"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Box>
                            {from === 'cad_usuario' &&
                            <Box>
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>}
                            <Box>
                                <FormLabel>Status</FormLabel>
                                <Select type="status" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="" selected disabled hidden>Selecione</option>
                                    {from === 'cad_usuario' && <option value="Ativo">Ativo</option>}
                                    {from === 'cad_usuario' && <option value="Inativo">Inativo</option>}
                                    {from === 'cad_fila' && <option value="Atracado">Atracado</option>}
                                    {from === 'cad_fila' && <option value="Fundeado">Fundeado</option>}
                                    {from === 'cad_fila' && <option value="Esperado">Esperado</option>}
                                </Select>
                            </Box>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter justifyContent="start">
                        <Button colorScheme="green" mr={3} onClick={handleSave}>
                            SALVAR
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>
                            CANCELAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalComp;
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Button,
    useDisclosure,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    useBreakpointValue,
    Tag,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "../ModalComp/ModalComp";

const CrudUsuarios = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
    const [where, setWhere] = useState("cad_usuario")

    const isMobile = useBreakpointValue({
        base: true,
        lg: false,
    });

    useEffect(() => {
        const db_costumer = localStorage.getItem(where)
            ? JSON.parse(localStorage.getItem(where))
            : [];

        setData(db_costumer);
    }, [setData]);

    const handleRemove = (id) => {
        const newArray = data.filter((item) => item.id !== id);

        setData(newArray);

        localStorage.setItem(where, JSON.stringify(newArray));
    };

    return (
        <Flex
            h="100vh"
            align="center"
            justify="center"
            fontSize="20px"
            fontFamily="Inter"
        >
            <Box maxW={1200} w="100%" h="100vh" py={10} px={2}>
                <Button colorScheme="blue" borderRadius={'20px'} onClick={() => [setDataEdit({}), onOpen()]}>
                    + ADICIONAR USUÁRIO
                </Button>

                <Box overflowY="auto" height="100%">
                    <Table mt="6">
                        <Thead>
                            <Tr>
                                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                                    ID
                                </Th>
                                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                                    Nome
                                </Th>
                                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                                    E-Mail
                                </Th>
                                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                                    Status
                                </Th>
                                <Th p={0}></Th>
                                <Th p={0}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(({ id, name, email, status }, index) => (
                                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                                    <Td maxW={isMobile ? 5 : 100}>{id}</Td>
                                    <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                                    <Td maxW={isMobile ? 5 : 100} fontSize={'1rem'}>{email}</Td>
                                    <Td maxW={isMobile ? 5 : 100} ><Tag colorScheme={status === "Ativo" ? 'blue' : 'red'}>{status}</Tag></Td>
                                    <Td p={0}>
                                        <EditIcon
                                            fontSize={20}
                                            onClick={() => [
                                                setDataEdit({ id, name, email, status, index }),
                                                onOpen(),
                                            ]}
                                        />
                                    </Td>
                                    <Td p={0}>
                                        <DeleteIcon
                                            fontSize={20}
                                            onClick={() => handleRemove(id)}
                                        />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
            {isOpen && (
                <ModalComp
                    isOpen={isOpen}
                    onClose={onClose}
                    data={data}
                    setData={setData}
                    dataEdit={dataEdit}
                    setDataEdit={setDataEdit}
                    from={where}
                />
            )}
        </Flex>
    );
};

export default CrudUsuarios;
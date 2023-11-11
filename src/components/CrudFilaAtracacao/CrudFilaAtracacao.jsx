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
import DateTime from "../DateTime/DateTime";
import './CrudFilaAtracacao.scss'

const CrudFilaAtracacao = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
    const [where, setWhere] = useState("cad_fila")

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

    const tagColor = (status) => {
        switch (status) {
            case "Atracado":
                return 'green';
                break;
            case "Fundeado":
                return 'yellow';
                break;
            case "Esperado":
                return 'gray';
                break;
        }
    }

    return (
        <Flex
            h="100vh"
            align="center"
            justify="center"
            fontSize="20px"
            fontFamily="Inter"
        >
            <Box maxW={1200} w="100%" h="100vh" py={10} px={2}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} position={'relative'}>
                    <Button position={'absolute'} left={0} colorScheme="blue" borderRadius={'20px'} onClick={() => [setDataEdit({}), onOpen()]}>
                        + ADICIONAR NAVIO
                    </Button>

                    <div className="date">
                        <i class="fa-solid fa-chevron-left"></i>
                        <DateTime />
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </Box>

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
                                    Status
                                </Th>
                                <Th p={0}></Th>
                                <Th p={0}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(({ name, id, status }, index) => (
                                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                                    <Td maxW={isMobile ? 5 : 100}>{id}</Td>
                                    <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                                    <Td maxW={isMobile ? 5 : 100}>
                                        <Tag colorScheme={tagColor(status)}>{status}</Tag>
                                    </Td>
                                    <Td p={0}>
                                        <EditIcon
                                            fontSize={20}
                                            onClick={() => [
                                                setDataEdit({ name, id, status, index }),
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

export default CrudFilaAtracacao;
import {
	Avatar,
	AvatarBadge,
	Box,
	Flex,
	Image,
	Stack,
	Text,
	WrapItem,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { BsCheck2All, BsFillImageFill } from "react-icons/bs";
import { selectedConversationAtom } from "../atoms/messagesAtom";

const Conversation = ({ conversation, isOnline }) => {
	const user = conversation.participants[0];
	const currentUser = useRecoilValue(userAtom);
	const lastMessage = conversation.lastMessage;
	const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom);

	const hoverBg = useColorModeValue("gray.200", "gray.700");
	const selectedBg = useColorModeValue("gray.300", "gray.600");
	const borderColor = useColorModeValue("gray.300", "gray.600");

	return (
		<Flex
			gap={4}
			alignItems={"center"}
			p={"1.5"}
			borderRadius={"md"}
			border={"1px solid"}
			borderColor={selectedConversation?._id === conversation._id ? "blue.400" : borderColor}
			bg={selectedConversation?._id === conversation._id ? selectedBg : ""}
			_hover={{
				cursor: "pointer",
				bg: hoverBg,
			}}
			onClick={() =>
				setSelectedConversation({
					_id: conversation._id,
					userId: user._id,
					userProfilePic: user.profilePic,
					username: user.username,
					mock: conversation.mock,
				})
			}
		>
			<WrapItem>
				<Avatar
					size={{
						base: "xs",
						sm: "sm",
						md: "md",
					}}
					src={user.profilePic}
				>
					{isOnline ? <AvatarBadge boxSize='1em' bg='green.500' /> : null}
				</Avatar>
			</WrapItem>

			<Stack direction={"column"} fontSize={"sm"}>
				<Flex fontWeight='700' alignItems={"center"}>
					<Text>{user.username}</Text>
					<Image src='/verified.png' w={4} h={4} ml={1} />
				</Flex>
				<Flex fontSize={"xs"} alignItems={"center"} gap={1}>
					{currentUser._id === lastMessage.sender && (
						<Box color={lastMessage.seen ? "blue.400" : "gray.500"}>
							<BsCheck2All size={16} />
						</Box>
					)}
					<Text>
						{lastMessage.text?.length > 18
							? lastMessage.text.substring(0, 18) + "..."
							: lastMessage.text || <BsFillImageFill size={16} />}
					</Text>
				</Flex>

			</Stack>
		</Flex>
	);
};

export default Conversation;

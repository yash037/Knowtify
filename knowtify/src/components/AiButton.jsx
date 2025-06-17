import { IconButton, Tooltip, useColorModeValue, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedConversationAtom } from "../atoms/messagesAtom";

const AiButton = () => {
	const bg = useColorModeValue("black", "white");
	const navigate = useNavigate();
	const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom);

	const imgSrc = useColorModeValue(
		"/light-logo.svg", 
		"/dark-logo.svg"
	);

	const handleClick = () => {
        navigate("/chat", {
            state: {
                ai: true 
            }
        });


    };


	return (
		<Tooltip label="Ask AI" hasArrow>
			<IconButton
				aria-label="AI Assistant"
				onClick={handleClick}
				bg={bg}
				borderRadius="full"
				boxSize="55px"
				boxShadow="lg"
				_hover={{ opacity: 0.9 }}
				position="fixed"
				right={4}
				bottom={5}
				zIndex={10}
				icon={
					<Image
						src={imgSrc}
						alt="AI"
						boxSize="60%" // adjusts image size inside the button
						borderRadius="full"
					/>
				}
			/>
		</Tooltip>
	);
};

export default AiButton;

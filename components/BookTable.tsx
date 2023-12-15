import React, { useState } from "react";
import {
	Image,
	Accordion,
	AccordionItem,
	Card,
	CardFooter,
	Button,
	useDisclosure,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalContent,
} from "@nextui-org/react";

// Assuming title is a function from "@/components/primitives"
import { title } from "@/components/primitives";

interface BookContentItem {
	part: string;
	page: string;
	description?: string;
	image?: string;
	title?: string; // Optional property
	source?: string; // Optional property
}

interface BookTableProps {
	bookContent: BookContentItem[];
	className?: string;
	bookPartDescriptions: PartDescription[];
}

interface PartDescription {
	Part: string;
	Summary: string;
}

interface GroupedByPart {
	[key: string]: BookContentItem[];
}

const BookTable: React.FC<BookTableProps> = ({
	bookContent,
	className,
	bookPartDescriptions,
}) => {
	// Grouping book contents by parts with a specific type
	const groupedByPart = bookContent.reduce<GroupedByPart>((acc, item) => {
		if (!acc[item.part]) {
			acc[item.part] = [];
		}
		acc[item.part].push(item);
		return acc;
	}, {});

	const findSummaryForPart = (part: string): string => {
		const descriptionObj = bookPartDescriptions.find(
			(desc) => desc.Part === part
		);
		return descriptionObj ? descriptionObj.Summary : "";
	};

	const [selectedItem, setSelectedItem] = useState<BookContentItem | null>(
		null
	);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleOpen = (item: BookContentItem) => {
		setSelectedItem(item);
		onOpen();
	};

	return (
		<div className={`container mx-auto w-full ${className || ""}`}>
			<h3 className={title()}>Image References</h3>
			<p className="text-xl my-3">
				The book refers to many images, but does not include them. Below, you'll
				find all images cited in the book.
			</p>
			<Accordion>
				{Object.entries(groupedByPart).map(([part, items], index) => (
					<AccordionItem
						key={index}
						title={
							<span className="text-2xl font-medium mb-1 block">{`Part ${part.toUpperCase()}`}</span>
						}
						subtitle={
							<div
								dangerouslySetInnerHTML={{ __html: findSummaryForPart(part) }}
							/>
						}
						className={`group${index}`}
						indicator={({ isOpen }) =>
							isOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="32"
									height="32"
									className={`text-teal-500 rounded-full transition group${index}-hover:bg-teal-200`}
								>
									<path
										d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
										fill="currentColor"
									></path>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="32"
									height="32"
									className={`text-teal-500 rounded-full transition group-hover:bg-teal-200`}
								>
									<path
										d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
										fill="currentColor"
									></path>
								</svg>
							)
						}
					>
						<div className="grid lg:grid-cols-3 md:grid-cols-2 gris-cols-1 gap-3 pb-5">
							{items.map((item, itemIndex) => (
								<div key={itemIndex}>
									<Card
										isFooterBlurred
										radius="lg"
										className="border-none h-full w-full"
										isPressable
										onPress={() => handleOpen(item)}
									>
										<div className="h-full w-full">
											<Image
												src={`/images/references/${item.image}`}
												alt={`Reference image from The Promised Land of Israel: Part ${item.part}, Page ${item.page}`}
												className="h-full w-full object-cover max-h-[300px]"
												removeWrapper={true}
												isZoomed
											/>
										</div>
										<CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
											<p className="text-lg text-white/80">
												Part: {item.part}, Page: {item.page}
											</p>
										</CardFooter>
									</Card>
								</div>
							))}
						</div>
					</AccordionItem>
				))}
			</Accordion>

			{selectedItem && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalContent>
						<ModalHeader>
							Part: {selectedItem.part}, Page: {selectedItem.page}
						</ModalHeader>
						<ModalBody>
							<div className="">
								<Image
									src={`/images/references/${selectedItem.image}`}
									alt={`Reference image from The Promised Land of Israel: Part ${selectedItem.part}, Page ${selectedItem.page}`}
									className="w-full"
									removeWrapper={true}
								/>
								<div
									className="mt-3"
									dangerouslySetInnerHTML={{
										__html: selectedItem.description || "",
									}}
								/>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button onPress={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</div>
	);
};

export default BookTable;

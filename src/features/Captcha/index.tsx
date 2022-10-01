/**
 * DOCUMENTATION
 * firstly design the grid with differrent icons with triangle, circle and square
 * randomize the 2D array with shuffle function which is exported from helper.ts
 * Also randomize every array element in every render
 * add onclick event and put the clicked element id in the array
 * logically handle the array that the user selected the correct icon
 * the selectabale item is randomly generated with a state selectableItems
 * if user selects the correct icons then it will show that the user is verified
 * at least 4 items should select
 * when user selects the icons the background will change
 */

import { Button, Col, message, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { AiTwotoneCheckCircle } from 'react-icons/ai';
import { BiSquare } from 'react-icons/bi';
import { allElementsAreEqual, shuffle } from '@/helper';

export default function Captcha() {
	const ref = useRef<HTMLDivElement>(null);
	const [selectableItems, setSelectableItems] = useState([
		'triangle',
		'square',
		'circle',
	]);
	const [workingArr, setWorkingArr] = useState([
		['triangle', 'square', 'circle', '--'],
		['triangle', 'square', 'circle', '--'],
		['triangle', 'square', 'circle', '--'],
		['triangle', 'square', 'circle', '--'],
	]);

	const [matchableItem, setMatchableItem] = useState();

	const selectedArr: any[] = [];

	const returnIcons = (value: string) => {
		if (value === 'triangle') {
			return <BsFillTriangleFill />;
		}

		if (value === 'square') {
			return <BiSquare />;
		}

		if (value === 'circle') {
			return <AiTwotoneCheckCircle />;
		}

		if (value === '--') {
			return '--';
		}

		if (value === '---') {
			return '---';
		}

		return false;
	};

	const returnGrid = () => {
		return workingArr.map((item) => {
			return item.map((itemInner) => {
				return (
					<Col span={6} key={Math.random()}>
						<Button
							ref={ref}
							style={{ cursor: 'pointer' }}
							id={itemInner}
							onClick={(e) => {
								// const newArr = [...selectedArray, e.currentTarget.id];
								if (selectedArr.length < 4) {
									selectedArr.push(e.currentTarget.id);
									e.currentTarget.style.background = 'green';
								}
							}}
						>
							{returnIcons(itemInner)}
						</Button>
					</Col>
				);
			});
		});
	};

	useEffect(() => {
		const newWorkingArr = workingArr.map((item) => {
			return shuffle(item);
		});
		setWorkingArr(newWorkingArr);
		const newSelectableItems = shuffle(selectableItems);
		setSelectableItems(newSelectableItems);
		setMatchableItem(newSelectableItems[0]);
	}, []);

	return (
		<section>
			<div
				style={{
					position: 'relative',
					width: '600px',
					height: '50vh',
					margin: '10px auto',
					background:
						"url('https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80')",
					backgroundSize: '100% 100%',
				}}
			>
				<div className="p-3" style={{ color: 'white' }}>
					Select {matchableItem}
				</div>
				<Row
					gutter={[16, 16]}
					style={{
						width: '50%',
						padding: '2%',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(0%, -50%)',
					}}
				>
					{returnGrid()}
				</Row>
			</div>
			<div className="text-center">
				<Button
					className=""
					type="primary"
					onClick={() => {
						if (
							selectedArr.length === 4 &&
							allElementsAreEqual(selectedArr) &&
							matchableItem === selectedArr[0]
						) {
							message.success('Congrats you are verified!');
						} else {
							message.error('You are not verified!');
						}
					}}
				>
					Submit
				</Button>
			</div>
		</section>
	);
}

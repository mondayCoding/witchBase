import * as React from 'react';
import { Heading, TextInputField, TextInputMaterial } from 'Common/Index';
import { EconomyEvent } from './EconomyCalc';
import { IOccurrance, IEventType } from 'Constants/Economy';
import ReactTable, { ReactTableDefaults } from 'react-table';
import 'react-table/react-table.css';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Spring, Transition as Transition2, config, Trail } from 'react-spring';

interface IProps {
	list: EconomyEvent[];
	headingText: string;
	removeFromList(id: number): void;
	onSubmit(item: EconomyEvent): void;
}

export class List extends React.Component<IProps> {
	componentDidUpdate() {
		// console.log(this.props);
	}
	render() {
		return (
			<React.Fragment>
				<Heading headingText={this.props.headingText} type="h3" className="underlined" />

				<ReactTable
					data={this.props.list}
					columns={colummmns}
					minRows={this.props.list.length}
					showPagination={false}
					// defaultPageSize={this.props.list.length}
					// defaultPageSize={-1}
					// showPageSizeOptions={false}
					// TbodyComponent={TransitionGroupTBody}
					TrGroupComponent={CSSTransitionTR}
				/>

				<div>
					{/* <TransitionGroup className="flex-table">
						{this.props.list.map((item) => (
							<CSSTransition
								key={item.id}
								id={item.id}
								timeout={2500}
								classNames={{ enter: 'entering' }}
							>
								<div className="table-row">
									<div className="cell-auto">{item.name}</div>
									<div className="cell-auto">{item.value}</div>
									<div className="cell-auto">{item.type.label}</div>
									<div className="cell-auto">{item.repeat.label}</div>
									<div
										className="cell-auto"
										onClick={() => this.props.removeFromList(item.id)}
									>
										<a>XXXX</a>
									</div>
								</div>
							</CSSTransition>
						))}
					</TransitionGroup> */}
				</div>

				<div className="spacing" />
			</React.Fragment>
		);
	}
}

const colummmns = [
	{
		Header: 'Name',
		accessor: 'name',
		Cell: (props: any) => <span title={props.value}>{props.value}</span>
	},
	{
		Header: 'Value',
		accessor: 'value'
	},
	{
		id: 'EventType',
		Header: 'Event Type',
		accessor: (props: any) => props.type,
		Cell: (props: { value: IEventType }) => (
			<span className={props.value.class_basic}>{props.value.label}</span>
		)
	},
	{
		id: 'Repeat',
		Header: 'Occurs',
		accessor: (props: EconomyEvent) => props.repeat,
		Cell: (props: { value: IOccurrance }) => (
			<span className={props.value.class_basic}>{props.value.label}</span>
		)
	}
];

const TransitionGroupTBody: React.SFC<any> = (props) => (
	<Transition2
		items={props}
		from={{ opacity: 0 }}
		enter={{ opacity: 1 }}
		leave={{ opacity: 0 }}
		trail={100}
		config={config.slow}
	>
		{(props4) =>
			props4 &&
			((props2: any) => <ReactTableDefaults.TbodyComponent style={props2} {...props} />)
		}
	</Transition2>
);

const TransitionGroupTBody2: React.SFC<any> = (props) => (
	<TransitionGroup>
		<ReactTableDefaults.TbodyComponent {...props} />
	</TransitionGroup>
);

const CSSTransitionTR: React.SFC<any> = (props) => (
	<Transition2
		items={props}
		from={{ opacity: 0 }}
		enter={{ opacity: 1 }}
		leave={{ opacity: 0 }}
		trail={100}
		config={config.slow}
	>
		{(props4) =>
			props4 &&
			((props2: any) => <ReactTableDefaults.TrGroupComponent style={props2} {...props} />)
		}
	</Transition2>
);

const CSSTransitionTR3: React.SFC<any> = (props) => (
	<Spring from={{ opacity: 0, color: 'white' }} to={{ opacity: 1, color: 'black' }}>
		{(props2) => <ReactTableDefaults.TrGroupComponent style={props2} {...props} />}
	</Spring>
);

const CSSTransitionTR2: React.SFC<any> = (props) => (
	<CSSTransition classNames={'nom'} timeout={{ enter: 1000, exit: 3000 }}>
		{(state) => <ReactTableDefaults.TrGroupComponent className={state} {...props} />}
	</CSSTransition>
);

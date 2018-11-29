import * as React from 'react';
import { Heading, TextInputField, TextInputMaterial, Button, Icons } from 'Common/Index';
import { EconomyEvent } from './EconomyCalc';
import { EventTypeAbstract, EventTypeConstant, EventType } from 'Constants/EconomyType';
import {
	OccurranceAbstract,
	OccurranceConstant,
	Occurance
} from 'Constants/EconomyOccurrance';
import ReactTable, { ReactTableDefaults, Accessor, PivotingProps } from 'react-table';
import 'react-table/react-table.css';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Spring, Transition as Transition2, config, Trail } from 'react-spring';
import { ActionLink } from 'Common/Links/ActionLink';
import { CloseButton } from 'Common/Utility/CloseButton';

interface IProps {
	list: EconomyEvent[];
	headingText: string;
	setActive(id: number): void;
	removeFromList(id: number): void;
}

export class List extends React.Component<IProps> {
	render() {
		return (
			<React.Fragment>
				<Heading
					headingText={this.props.headingText}
					type="h3"
					className="underlined"
				/>

				<ReactTable
					data={this.props.list}
					columns={[
						{
							Header: 'Name',
							accessor: 'name',
							Cell: (props: any) => (
								<ActionLink
									onClick={() => this.props.setActive(props.original.id)}
									title={props.value}
									linkText={props.value}
								/>
							)
						},
						{
							Header: 'Value',
							accessor: 'value'
						},
						{
							id: 'EventType',
							Header: 'Event Type',
							accessor: (props: any) => props.type,
							Cell: (props: { value: EventTypeConstant }) => (
								<span className={EventType[props.value].class_basic}>
									{EventType[props.value].label}
								</span>
							)
						},
						{
							id: 'Repeat',
							Header: 'Occurs',
							accessor: (props: any) => props.repeat,
							Cell: (props: { value: OccurranceConstant }) => (
								<span className={Occurance[props.value].class_basic}>
									{Occurance[props.value].label}
								</span>
							)
						},
						{
							Header: 'remove',
							accessor: 'id',
							Cell: (props: any) => (
								<CloseButton
									onClick={() => this.props.removeFromList(props.value)}
								/>
							)
						}
					]}
					minRows={this.props.list.length}
					showPagination={false}
					// defaultPageSize={this.props.list.length}
					// defaultPageSize={-1}
					// showPageSizeOptions={false}
					// TbodyComponent={TransitionGroupTBody}
					TrGroupComponent={CSSTransitionTR}
				/>
			</React.Fragment>
		);
	}
}

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
			((props2: any) => (
				<ReactTableDefaults.TbodyComponent style={props2} {...props} />
			))
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
			((props2: any) => (
				<ReactTableDefaults.TrGroupComponent style={props2} {...props} />
			))
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

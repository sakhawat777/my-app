import React from 'react';
import './App.css';
import Hello from './Practice/Hello';
import Team from './Practice/Team';
import Jam from './Practice/Jam';
import Welcome from './Practice/Welcome';
import Arrow from './Practice/Arrow';
import StatePractice from './Practice/StatePractice';
import ConOperator from './Practice/ConOperator';
import ConditionTest from './Practice/ConditionTest';
import Refresh from './Practice/Refresh';
import DemoRender from './Practice/DemoRender';
import AnotherDemo from './Practice/AnotherDemo';
import Form from './Practice/Form';
import SignUp from './Practice/SignUp';
import Text from './Practice/Text';
import UseStateHook from './Practice/UseStateHook';
import ConditionTestHook from './Practice/ConditionTestHook';
import { CondiIf } from './Practice/CondiIf';

function App() {
	return (
		<div className='App'>
			<Hello name='Raja' age='21'></Hello>
			<Team></Team>
			<Jam></Jam>
			<Welcome></Welcome>
			<Arrow></Arrow>
			<StatePractice></StatePractice>
			<ConOperator></ConOperator>
			<ConditionTest></ConditionTest>
			<Refresh></Refresh>
			<DemoRender></DemoRender>
			<AnotherDemo></AnotherDemo>
			<Form></Form>
			<SignUp></SignUp>
			<Text></Text>
			<UseStateHook></UseStateHook>
			<ConditionTestHook></ConditionTestHook>
			<CondiIf></CondiIf>
		</div>
	);
}

export default App;

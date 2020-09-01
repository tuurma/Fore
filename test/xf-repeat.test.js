/* eslint-disable no-unused-expressions */
import { html, oneEvent, fixture, fixtureSync, expect, elementUpdated, defineCE } from '@open-wc/testing';

/*
import '../src/xf-instance.js';
import '../src/modelitem.js';
import '../src/xf-model.js';
import '../src/xf-bind.js';
import '../src/xf-button.js';
import '../src/xf-repeat.js';
import '../src/xf-repeatitem.js';
*/
import '../src/xf-repeat.js';


describe('initialize repeat', () => {

    it('has initialized modelItems', async () => {
        const el =  (
            await fixtureSync(html`
                <xf-form>
                    <xf-model id="record">
            
                        <xf-instance>
                            <data>
                                <task complete="false" due="2019-02-04">Pick up Milk</task>
                                <task complete="true" due="2019-01-04">Make tutorial part 1</task>
                            </data>
                        </xf-instance>
            
            
                        <xf-bind ref="task">
                            <xf-bind ref="./text()" required="true()"></xf-bind>
                            <xf-bind ref="@complete" type="xs:boolean"></xf-bind>
                            <xf-bind ref="@due" type="xs:date"></xf-bind>
                        </xf-bind>
            
                    </xf-model>
                    <xf-group>
                        <h1>todos</h1>
                           
                        <xf-repeat id="todos" ref="task" focus-on-create="task" id="r-todos">
                            <template>
                                <xf-input label="Task" ref="." id="task" type="text"></xf-input>
                            </template>
                        </xf-repeat>
                           
                        <xf-button label="append">
                            <xf-append repeat="todos" ref="task"></xf-append>
                        </xf-button>
                    </xf-group>
                </xf-form>
            `)
        );

        await elementUpdated(el);

        const model = document.getElementById('record');
        expect(model.modelItems.length).to.equal(6);

        // some modelItem checks
        expect(model.modelItems[0].node.nodeName).to.equal('task');
        expect(model.modelItems[0].value).to.equal('Pick up Milk');
        expect(model.modelItems[0].required).to.equal(true);

        expect(model.modelItems[1].node.nodeName).to.equal('task');
        expect(model.modelItems[1].value).to.equal('Make tutorial part 1');
        expect(model.modelItems[1].modelItem.required).to.equal(true);

        expect(model.modelItems[2].node.nodeName).to.equal('complete'); //text node
        expect(model.modelItems[2].node.nodeType).to.equal(2); //attribute node
        expect(model.modelItems[2].value).to.equal('false');

        expect(model.modelItems[3].node.nodeName).to.equal('complete'); //text node
        expect(model.modelItems[3].node.nodeType).to.equal(2); //attribute node
        expect(model.modelItems[3].value).to.equal('true');

        expect(model.modelItems[4].node.nodeName).to.equal('due'); //text node
        expect(model.modelItems[4].node.nodeType).to.equal(2); //attribute node
        expect(model.modelItems[4].value).to.equal('2019-02-04');

        expect(model.modelItems[5].node.nodeName).to.equal('due'); //text node
        expect(model.modelItems[5].node.nodeType).to.equal(2); //attribute node
        expect(model.modelItems[5].value).to.equal('2019-01-04');


    });

    it('has initialized repeat with 2 repeat items', async () => {
        const el =  (
            await fixtureSync(html`
                <xf-form>
                    <xf-model id="record">
            
                        <xf-instance>
                            <data>
                                <task complete="false" due="2019-02-04">Pick up Milk</task>
                                <task complete="true" due="2019-01-04">Make tutorial part 1</task>
                            </data>
                        </xf-instance>
            
            
                        <xf-bind ref="task">
                            <xf-bind ref="./text()" required="true()"></xf-bind>
                            <xf-bind ref="@complete" type="xs:boolean"></xf-bind>
                            <xf-bind ref="@due" type="xs:date"></xf-bind>
                        </xf-bind>
            
                    </xf-model>
            
                    <h1>todos</h1>
                       
                    <xf-repeat id="todos" ref="task" focus-on-create="task" id="r-todos">
                        <template>
                            <xf-input label="Task" ref="." id="task" type="text"></xf-input>
                        </template>
                    </xf-repeat>
                       
                    <xf-button label="append">
                        <xf-append repeat="todos" ref="task"></xf-append>
                    </xf-button>
            
                </xf-form>
            `)
        );

        await elementUpdated(el);

        const repeat =  document.getElementById('todos');
        const items = document.querySelectorAll('xf-repeatitem');
        console.log('items', items);
        expect(items.length).to.equal(2);

        const repeatNodes = repeat.nodeset;
        console.log('items', repeatNodes);

        expect(repeatNodes.length).to.equal(2);

    });


});